// Fetches real UFC event data from TheSportsDB
// Run manually or via cron to update fight cards
// Usage: npx tsx scripts/update-fight-data.ts

import { writeFileSync } from 'fs';

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3';

interface SportsDBEvent {
  idEvent: string;
  strEvent: string;
  strLeague: string;
  dateEvent: string;
  strVenue: string;
  strCity: string;
  strCountry: string;
  strThumb: string;
  strResult: string;
  strStatus: string;
  intHomeScore: string;
  intAwayScore: string;
}

const WOMENS_WEIGHT_CLASSES = [
  "women's strawweight",
  "women's flyweight",
  "women's bantamweight",
  "women's featherweight",
];

function determineType(name: string): 'ppv' | 'fight-night' | 'apex' {
  const lower = name.toLowerCase();
  if (/ufc \d{3}/.test(lower)) return 'ppv';
  if (lower.includes('apex')) return 'apex';
  return 'fight-night';
}

function makeSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function isCompleted(status: string, date: string): boolean {
  const today = new Date().toISOString().split('T')[0];
  return status === 'Match Finished' || date < today;
}

function parseWomensFights(result: string | null): Array<{
  fighter1: string;
  fighter2: string;
  weightClass: string;
  isMainEvent?: boolean;
  isTitleFight?: boolean;
  winner?: string;
  method?: string;
  round?: number;
}> {
  if (!result) return [];

  const fights: Array<{
    fighter1: string;
    fighter2: string;
    weightClass: string;
    isMainEvent?: boolean;
    isTitleFight?: boolean;
    winner?: string;
    method?: string;
    round?: number;
  }> = [];

  const lines = result.split('\n').filter(l => l.trim() && l.includes('def.'));

  let firstWomensFight = true;
  for (const line of lines) {
    const lower = line.toLowerCase();
    const isWomens = WOMENS_WEIGHT_CLASSES.some(wc => lower.includes(wc));
    if (!isWomens) continue;

    const parts = line.split('\t').filter(Boolean);
    const defIdx = parts.indexOf('def.');
    if (defIdx < 1) continue;

    const weightClass = parts[0];
    const winner = parts[defIdx - 1];
    const loser = parts[defIdx + 1];
    const method = parts[defIdx + 2] || '';
    const roundStr = parts[defIdx + 3];
    const round = roundStr ? parseInt(roundStr) : undefined;
    const isTitleFight = line.toLowerCase().includes('(c)') || weightClass.toLowerCase().includes('championship');

    fights.push({
      fighter1: winner,
      fighter2: loser,
      weightClass: weightClass.replace(/\(c\)/g, '').trim(),
      isMainEvent: firstWomensFight ? true : undefined,
      isTitleFight: isTitleFight ? true : undefined,
      winner,
      method: method.replace(/\(.*?\)/g, '').trim() || method.trim(),
      round: !isNaN(Number(round)) ? Number(round) : undefined,
    });
    firstWomensFight = false;
  }

  return fights;
}

async function fetchSeason(year: string): Promise<SportsDBEvent[]> {
  const res = await fetch(`${API_BASE}/eventsseason.php?id=4443&s=${year}`);
  const data = await res.json();
  return data.events || [];
}

async function main() {
  console.log('Fetching UFC events from TheSportsDB...');

  const [events2025, events2026] = await Promise.all([
    fetchSeason('2025'),
    fetchSeason('2026'),
  ]);

  const allEvents = [...events2025, ...events2026];
  console.log(`Fetched ${events2025.length} events from 2025, ${events2026.length} from 2026`);

  const formatted = allEvents.map((e: SportsDBEvent) => {
    const completed = isCompleted(e.strStatus, e.dateEvent);
    const womensFights = completed ? parseWomensFights(e.strResult) : [];

    return {
      slug: makeSlug(e.strEvent),
      name: e.strEvent,
      date: e.dateEvent,
      location: [e.strCity, e.strCountry].filter(Boolean).join(', '),
      venue: e.strVenue || 'TBD',
      type: determineType(e.strEvent),
      womensFights,
      completed,
      sportsDbId: e.idEvent,
    };
  });

  const upcoming = formatted.filter(e => !e.completed);
  const past = formatted.filter(e => e.completed);

  console.log(`Upcoming: ${upcoming.length}, Past: ${past.length}`);
  const withWomens = past.filter(e => e.womensFights.length > 0);
  console.log(`Past events with women's fights: ${withWomens.length}`);

  const output = `// Auto-generated from TheSportsDB API
// Last updated: ${new Date().toISOString()}
// Do not edit manually — run scripts/update-fight-data.ts to refresh

export interface Fight {
  fighter1: string
  fighter2: string
  weightClass: string
  isMainEvent?: boolean
  isTitleFight?: boolean
  winner?: string
  method?: string
  round?: number
  time?: string
}

export interface UFCEvent {
  slug: string
  name: string
  date: string
  location: string
  venue: string
  type: 'ppv' | 'fight-night' | 'apex'
  womensFights: Fight[]
  completed: boolean
  sportsDbId?: string
}

export const events: UFCEvent[] = ${JSON.stringify(formatted, null, 2)}

export function getEventBySlug(slug: string): UFCEvent | undefined {
  return events.find(e => e.slug === slug)
}

export function getUpcomingEvents(): UFCEvent[] {
  return events
    .filter(e => !e.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getCompletedEvents(): UFCEvent[] {
  return events
    .filter(e => e.completed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getWomensTitleFights(): { event: UFCEvent; fight: Fight }[] {
  const results: { event: UFCEvent; fight: Fight }[] = []
  for (const event of events) {
    for (const fight of event.womensFights) {
      if (fight.isTitleFight) {
        results.push({ event, fight })
      }
    }
  }
  return results.sort((a, b) => new Date(b.event.date).getTime() - new Date(a.event.date).getTime())
}
`;

  writeFileSync('app/data/events.ts', output);
  console.log('Written to app/data/events.ts');

  upcoming.slice(0, 3).forEach(e => {
    console.log(`  UPCOMING: ${e.name} | ${e.date} | ${e.location}`);
  });
  withWomens.slice(-3).forEach(e => {
    console.log(`  PAST (women): ${e.name} | ${e.womensFights.length} women's fights`);
  });
}

main().catch(console.error);
