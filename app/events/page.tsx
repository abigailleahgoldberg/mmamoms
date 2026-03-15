import type { Metadata } from 'next'
import { getUpcomingEvents, getCompletedEvents } from '../data/events'

export const metadata: Metadata = {
  title: "UFC Women's MMA Events | Iron Mom",
  description: "Upcoming and past UFC events featuring women's fights — schedules, results, title fights, and women's main events.",
  openGraph: {
    title: "UFC Women's MMA Events | Iron Mom",
    description: "Upcoming and past UFC events featuring women's fights.",
  },
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function typeLabel(type: string): string {
  if (type === 'ppv') return 'PPV'
  if (type === 'fight-night') return 'Fight Night'
  return 'Apex'
}

export default function EventsPage() {
  const upcoming = getUpcomingEvents()
  const completed = getCompletedEvents()

  return (
    <main style={{ minHeight: '100vh', background: '#0C0610' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(180deg, #1A0E1F 0%, #0C0610 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderBottom: '1px solid rgba(255,45,120,0.1)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            color: '#FF2D78',
            letterSpacing: '3px',
            marginBottom: '1.5rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}>
            <a href="/" style={{ color: '#A09090' }}>Iron Mom</a>
            <span style={{ color: 'rgba(255,45,120,0.3)' }}>/</span>
            <span>Events</span>
          </nav>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            color: '#F5F0EB',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            letterSpacing: '3px',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'block' }}>EVERY CARD.</span>
            <span style={{ display: 'block', color: '#FF2D78' }}>EVERY WOMEN&apos;S FIGHT.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.6)',
            maxWidth: '520px',
            lineHeight: 1.75,
            marginBottom: '2rem',
          }}>
            Upcoming UFC events with women&apos;s bouts, past results, and title fight tracking. All filtered to show you the fights that matter.
          </p>

          <a href="/calendar" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            background: '#FF2D78',
            color: '#0C0610',
            padding: '0.8rem 1.75rem',
            display: 'inline-block',
            lineHeight: 1,
          }}>
            View Calendar
          </a>
        </div>
      </section>

      {/* UPCOMING */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#0C0610', borderBottom: '1px solid rgba(255,45,120,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#FF2D78', letterSpacing: '4px', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            On the Horizon
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '3px', lineHeight: 1, marginBottom: '2.5rem' }}>
            UPCOMING EVENTS
          </h2>

          {upcoming.length === 0 ? (
            <p style={{ fontFamily: 'var(--font-body)', color: '#A09090' }}>No upcoming events listed yet. Check back soon.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {upcoming.map(event => {
                const hasTitleFight = event.womensFights.some(f => f.isTitleFight)
                const hasMainEvent = event.womensFights.some(f => f.isMainEvent)
                return (
                  <a
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    style={{
                      background: '#1A0E1F',
                      border: `1px solid ${hasTitleFight ? '#FF2D78' : 'rgba(255,45,120,0.12)'}`,
                      padding: '2rem',
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr auto',
                      gap: '2rem',
                      alignItems: 'start',
                      textDecoration: 'none',
                    }}
                    className="event-row"
                  >
                    {/* Date */}
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#FF2D78', lineHeight: 0.9, letterSpacing: '-1px' }}>
                        {new Date(event.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.25rem', color: '#F5F0EB', lineHeight: 0.9, letterSpacing: '-2px' }}>
                        {new Date(event.date + 'T12:00:00Z').getUTCDate()}
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', letterSpacing: '1px', marginTop: '0.35rem' }}>
                        {new Date(event.date + 'T12:00:00Z').getUTCFullYear()}
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: '#FF2D78', background: 'rgba(255,45,120,0.12)', padding: '0.2rem 0.5rem', textTransform: 'uppercase' }}>
                          {typeLabel(event.type)}
                        </span>
                        {hasTitleFight && (
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: '#F5F0EB', background: '#A855F7', padding: '0.2rem 0.5rem', textTransform: 'uppercase' }}>
                            Title Fight
                          </span>
                        )}
                        {hasMainEvent && (
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: '#0C0610', background: '#FF2D78', padding: '0.2rem 0.5rem', textTransform: 'uppercase' }}>
                            Women&apos;s Main Event
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.4rem', lineHeight: 1 }}>
                        {event.name}
                      </h3>

                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#A09090', letterSpacing: '1px', marginBottom: '1rem' }}>
                        {event.venue} &mdash; {event.location}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {event.womensFights.map((fight, i) => (
                          <div key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: fight.isTitleFight ? '#FF2D78' : '#F5F0EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            {fight.fighter1} vs. {fight.fighter2}
                            <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400, fontSize: '0.58rem', color: '#A09090', letterSpacing: '1px', marginLeft: '0.75rem', textTransform: 'uppercase' }}>
                              {fight.weightClass}{fight.isTitleFight ? ' — TITLE' : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#FF2D78', letterSpacing: '1px', paddingTop: '0.25rem', whiteSpace: 'nowrap' }}>
                      Details &rarr;
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#1A0E1F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#A09090', letterSpacing: '4px', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Results
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '3px', lineHeight: 1, marginBottom: '2.5rem' }}>
            RECENT RESULTS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {completed.map(event => {
              const titleFights = event.womensFights.filter(f => f.isTitleFight)
              return (
                <a
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{
                    background: 'rgba(12,6,16,0.6)',
                    borderTop: `3px solid ${titleFights.length > 0 ? '#FF2D78' : 'rgba(255,45,120,0.2)'}`,
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>
                        {event.name}
                      </h3>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', letterSpacing: '1px' }}>
                        {formatDate(event.date)}
                      </div>
                    </div>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: '#FF2D78', background: 'rgba(255,45,120,0.1)', padding: '0.2rem 0.5rem', textTransform: 'uppercase', flexShrink: 0 }}>
                      {typeLabel(event.type)}
                    </span>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,45,120,0.1)', paddingTop: '0.75rem' }}>
                    {event.womensFights.map((fight, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: fight.isTitleFight ? '#FF2D78' : '#F5F0EB', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                          {fight.winner ? (
                            <><span style={{ color: '#FF2D78' }}>{fight.winner}</span> def. {fight.fighter1 === fight.winner ? fight.fighter2 : fight.fighter1}</>
                          ) : (
                            <>{fight.fighter1} vs. {fight.fighter2}</>
                          )}
                        </div>
                        {fight.method && (
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: '#A09090', letterSpacing: '1px', marginLeft: '0.5rem', flexShrink: 0 }}>
                            {fight.method} R{fight.round}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .event-row {
            grid-template-columns: 1fr !important;
          }
          .event-row > div:first-child {
            display: flex;
            gap: 0.75rem;
            align-items: baseline;
          }
        }
      `}</style>
    </main>
  )
}
