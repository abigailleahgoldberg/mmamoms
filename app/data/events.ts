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
}

export const events: UFCEvent[] = [
  // ── COMPLETED EVENTS ─────────────────────────────────
  {
    slug: 'ufc-308',
    name: 'UFC 308',
    date: '2024-10-26',
    location: 'Abu Dhabi, UAE',
    venue: 'Etihad Arena',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Iasmin Lucindo',
        fighter2: 'Tabatha Ricci',
        weightClass: 'Strawweight',
        winner: 'Tabatha Ricci',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-309',
    name: 'UFC 309',
    date: '2024-11-16',
    location: 'New York City, New York, USA',
    venue: 'Madison Square Garden',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Kayla Harrison',
        fighter2: 'Ketlen Vieira',
        weightClass: 'Bantamweight',
        winner: 'Kayla Harrison',
        method: 'Decision',
        round: 3,
      },
      {
        fighter1: 'Mackenzie Dern',
        fighter2: 'Loopy Godinez',
        weightClass: 'Strawweight',
        winner: 'Mackenzie Dern',
        method: 'Submission',
        round: 2,
      },
    ],
  },
  {
    slug: 'ufc-fight-night-abu-dhabi-dec-2024',
    name: 'UFC Fight Night: Adesanya vs. Imavov',
    date: '2024-12-07',
    location: 'Abu Dhabi, UAE',
    venue: 'Etihad Arena',
    type: 'fight-night',
    completed: true,
    womensFights: [
      {
        fighter1: 'Maryna Moroz',
        fighter2: 'Lara Procopio',
        weightClass: 'Flyweight',
        winner: 'Maryna Moroz',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-310',
    name: 'UFC 310',
    date: '2024-12-07',
    location: 'Las Vegas, Nevada, USA',
    venue: 'T-Mobile Arena',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Tatiana Suarez',
        fighter2: 'Amanda Lemos',
        weightClass: 'Strawweight',
        winner: 'Tatiana Suarez',
        method: 'TKO',
        round: 1,
      },
      {
        fighter1: 'Mayra Bueno Silva',
        fighter2: 'Norma Dumont',
        weightClass: 'Bantamweight',
        winner: 'Norma Dumont',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-311',
    name: 'UFC 311',
    date: '2025-01-18',
    location: 'Inglewood, California, USA',
    venue: 'Kia Forum',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Weili Zhang',
        fighter2: 'Yan Xiaonan',
        weightClass: 'Strawweight',
        isTitleFight: true,
        isMainEvent: false,
        winner: 'Zhang Weili',
        method: 'Decision',
        round: 5,
      },
    ],
  },
  {
    slug: 'ufc-fight-night-jan-2025',
    name: 'UFC Fight Night: Hernandez vs. Lemos',
    date: '2025-01-25',
    location: 'Las Vegas, Nevada, USA',
    venue: 'UFC Apex',
    type: 'apex',
    completed: true,
    womensFights: [
      {
        fighter1: 'Angela Hill',
        fighter2: 'Yazmin Jauregui',
        weightClass: 'Strawweight',
        winner: 'Yazmin Jauregui',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-312',
    name: 'UFC 312',
    date: '2025-02-22',
    location: 'Sydney, New South Wales, Australia',
    venue: 'Qudos Bank Arena',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Kayla Harrison',
        fighter2: 'Julianna Pena',
        weightClass: 'Bantamweight',
        isTitleFight: false,
        winner: 'Julianna Pena',
        method: 'Decision',
        round: 3,
      },
      {
        fighter1: 'Holly Holm',
        fighter2: 'Karol Rosa',
        weightClass: 'Bantamweight',
        winner: 'Holly Holm',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-313',
    name: 'UFC 313',
    date: '2025-03-08',
    location: 'Las Vegas, Nevada, USA',
    venue: 'T-Mobile Arena',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Erin Blanchfield',
        fighter2: 'Manon Fiorot',
        weightClass: 'Flyweight',
        isTitleFight: false,
        winner: 'Manon Fiorot',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-fight-night-march-2025',
    name: 'UFC Fight Night: Jiri vs. Ankalaev',
    date: '2025-03-22',
    location: 'Las Vegas, Nevada, USA',
    venue: 'UFC Apex',
    type: 'apex',
    completed: true,
    womensFights: [
      {
        fighter1: 'Mackenzie Dern',
        fighter2: 'Luana Pinheiro',
        weightClass: 'Strawweight',
        winner: 'Luana Pinheiro',
        method: 'Decision',
        round: 3,
      },
    ],
  },
  {
    slug: 'ufc-314',
    name: 'UFC 314',
    date: '2025-04-12',
    location: 'Miami, Florida, USA',
    venue: 'Kaseya Center',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Alexa Grasso',
        fighter2: 'Valentina Shevchenko',
        weightClass: 'Flyweight',
        isTitleFight: true,
        isMainEvent: false,
        winner: 'Alexa Grasso',
        method: 'Decision',
        round: 5,
      },
      {
        fighter1: 'Rose Namajunas',
        fighter2: 'Tatiana Suarez',
        weightClass: 'Strawweight',
        winner: 'Tatiana Suarez',
        method: 'TKO',
        round: 2,
      },
    ],
  },
  {
    slug: 'ufc-315',
    name: 'UFC 315',
    date: '2025-05-10',
    location: 'Montreal, Quebec, Canada',
    venue: 'Bell Centre',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Zhang Weili',
        fighter2: 'Tatiana Suarez',
        weightClass: 'Strawweight',
        isTitleFight: true,
        isMainEvent: true,
        winner: 'Zhang Weili',
        method: 'Decision',
        round: 5,
      },
    ],
  },
  {
    slug: 'ufc-316',
    name: 'UFC 316',
    date: '2025-06-07',
    location: 'Newark, New Jersey, USA',
    venue: 'Prudential Center',
    type: 'ppv',
    completed: true,
    womensFights: [
      {
        fighter1: 'Alexa Grasso',
        fighter2: 'Erin Blanchfield',
        weightClass: 'Flyweight',
        isTitleFight: true,
        isMainEvent: false,
        winner: 'Erin Blanchfield',
        method: 'Submission',
        round: 4,
      },
    ],
  },
  // ── UPCOMING EVENTS ─────────────────────────────────
  {
    slug: 'ufc-317',
    name: 'UFC 317',
    date: '2025-07-05',
    location: 'Las Vegas, Nevada, USA',
    venue: 'T-Mobile Arena',
    type: 'ppv',
    completed: false,
    womensFights: [
      {
        fighter1: 'Manon Fiorot',
        fighter2: 'Erin Blanchfield',
        weightClass: 'Flyweight',
        isTitleFight: true,
        isMainEvent: false,
      },
      {
        fighter1: 'Yan Xiaonan',
        fighter2: 'Luana Pinheiro',
        weightClass: 'Strawweight',
      },
    ],
  },
  {
    slug: 'ufc-fight-night-aug-2025',
    name: 'UFC Fight Night: Singapore',
    date: '2025-08-02',
    location: 'Singapore',
    venue: 'Singapore Indoor Stadium',
    type: 'fight-night',
    completed: false,
    womensFights: [
      {
        fighter1: 'Angela Hill',
        fighter2: 'Yazmin Jauregui',
        weightClass: 'Strawweight',
        isMainEvent: true,
      },
    ],
  },
  {
    slug: 'ufc-318',
    name: 'UFC 318',
    date: '2025-08-16',
    location: 'Dallas, Texas, USA',
    venue: 'American Airlines Center',
    type: 'ppv',
    completed: false,
    womensFights: [
      {
        fighter1: 'Zhang Weili',
        fighter2: 'Yan Xiaonan',
        weightClass: 'Strawweight',
        isTitleFight: true,
        isMainEvent: false,
      },
      {
        fighter1: 'Kayla Harrison',
        fighter2: 'Mayra Bueno Silva',
        weightClass: 'Bantamweight',
      },
    ],
  },
  {
    slug: 'ufc-fight-night-sep-2025',
    name: 'UFC Fight Night: Paris',
    date: '2025-09-06',
    location: 'Paris, France',
    venue: 'Accor Arena',
    type: 'fight-night',
    completed: false,
    womensFights: [
      {
        fighter1: 'Manon Fiorot',
        fighter2: 'Valentina Shevchenko',
        weightClass: 'Flyweight',
        isMainEvent: true,
      },
    ],
  },
  {
    slug: 'ufc-319',
    name: 'UFC 319',
    date: '2025-10-04',
    location: 'Chicago, Illinois, USA',
    venue: 'United Center',
    type: 'ppv',
    completed: false,
    womensFights: [
      {
        fighter1: 'Julianna Pena',
        fighter2: 'Kayla Harrison',
        weightClass: 'Bantamweight',
        isTitleFight: true,
        isMainEvent: false,
      },
      {
        fighter1: 'Rose Namajunas',
        fighter2: 'Mackenzie Dern',
        weightClass: 'Strawweight',
      },
    ],
  },
  {
    slug: 'ufc-fight-night-oct-2025',
    name: 'UFC Fight Night: Denver',
    date: '2025-10-18',
    location: 'Denver, Colorado, USA',
    venue: 'Ball Arena',
    type: 'fight-night',
    completed: false,
    womensFights: [
      {
        fighter1: 'Holly Holm',
        fighter2: 'Norma Dumont',
        weightClass: 'Bantamweight',
        isMainEvent: false,
      },
      {
        fighter1: 'Tatiana Suarez',
        fighter2: 'Luana Pinheiro',
        weightClass: 'Strawweight',
      },
    ],
  },
  {
    slug: 'ufc-320',
    name: 'UFC 320',
    date: '2025-11-08',
    location: 'New York City, New York, USA',
    venue: 'Madison Square Garden',
    type: 'ppv',
    completed: false,
    womensFights: [
      {
        fighter1: 'Zhang Weili',
        fighter2: 'Luana Pinheiro',
        weightClass: 'Strawweight',
        isTitleFight: true,
        isMainEvent: false,
      },
      {
        fighter1: 'Alexa Grasso',
        fighter2: 'Erin Blanchfield',
        weightClass: 'Flyweight',
        isTitleFight: false,
      },
    ],
  },
]

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
