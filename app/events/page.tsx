import type { Metadata } from 'next'
import { getUpcomingEvents, getCompletedEvents } from '../data/events'

export const metadata: Metadata = {
  title: 'UFC Women\'s MMA Events | Iron Mom',
  description: 'Upcoming and past UFC events featuring women\'s fights — schedules, results, title fights, and women\'s main events.',
  openGraph: {
    title: 'UFC Women\'s MMA Events | Iron Mom',
    description: 'Upcoming and past UFC events featuring women\'s fights.',
  },
}

const COLORS = {
  plum: '#2D0A2E',
  pink: '#FF2D78',
  violet: '#7B2FBE',
  bone: '#F5F0EB',
  silver: '#C0C0C8',
  dark: '#0F060F',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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
    <main style={{ minHeight: '100vh', background: COLORS.dark }}>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(180deg, ${COLORS.plum} 0%, ${COLORS.dark} 100%)`,
        padding: '5rem 2rem 4rem',
        borderBottom: `1px solid rgba(255,45,120,0.2)`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: COLORS.pink,
            letterSpacing: '4px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
            <a href="/" style={{ color: COLORS.silver, textDecoration: 'none' }}>Iron Mom</a>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255,45,120,0.4)' }}>/</span>
            Events
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: COLORS.bone,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-1px',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'block' }}>EVERY CARD.</span>
            <span style={{ display: 'block', color: COLORS.pink }}>EVERY WOMEN&apos;S FIGHT.</span>
          </h1>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.7)',
            maxWidth: '540px',
            lineHeight: 1.7,
          }}>
            Upcoming UFC events with women&apos;s bouts, past results, and title fight tracking. All filtered to show you the fights that matter.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="/calendar" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              background: COLORS.pink,
              color: COLORS.dark,
              padding: '0.75rem 1.75rem',
              textDecoration: 'none',
            }}>
              View Calendar
            </a>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{ padding: '5rem 2rem', background: COLORS.dark }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: COLORS.pink,
            letterSpacing: '4px',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}>
            On the Horizon
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: COLORS.bone,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '3rem',
          }}>
            UPCOMING EVENTS
          </h2>

          {upcoming.length === 0 ? (
            <p style={{ fontFamily: "'Barlow', sans-serif", color: COLORS.silver }}>No upcoming events listed yet. Check back soon.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {upcoming.map(event => {
                const hasTitleFight = event.womensFights.some(f => f.isTitleFight)
                const hasMainEvent = event.womensFights.some(f => f.isMainEvent)
                return (
                  <a
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    style={{
                      background: COLORS.plum,
                      border: `1px solid ${hasTitleFight ? COLORS.pink : 'rgba(255,45,120,0.2)'}`,
                      padding: '2rem',
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr auto',
                      gap: '2rem',
                      alignItems: 'start',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Date */}
                    <div>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '2.5rem',
                        color: COLORS.pink,
                        lineHeight: 0.9,
                        letterSpacing: '-1px',
                      }}>
                        {new Date(event.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </div>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '3.5rem',
                        color: COLORS.bone,
                        lineHeight: 0.9,
                        letterSpacing: '-2px',
                      }}>
                        {new Date(event.date + 'T12:00:00Z').getUTCDate()}
                      </div>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        color: COLORS.silver,
                        letterSpacing: '1px',
                        marginTop: '0.35rem',
                      }}>
                        {new Date(event.date + 'T12:00:00Z').getUTCFullYear()}
                      </div>
                    </div>

                    {/* Event info */}
                    <div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.55rem',
                          letterSpacing: '2px',
                          color: COLORS.pink,
                          background: 'rgba(255,45,120,0.15)',
                          padding: '0.2rem 0.5rem',
                          textTransform: 'uppercase',
                        }}>
                          {typeLabel(event.type)}
                        </span>
                        {hasTitleFight && (
                          <span style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.55rem',
                            letterSpacing: '2px',
                            color: COLORS.bone,
                            background: COLORS.violet,
                            padding: '0.2rem 0.5rem',
                            textTransform: 'uppercase',
                          }}>
                            Title Fight
                          </span>
                        )}
                        {hasMainEvent && (
                          <span style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.55rem',
                            letterSpacing: '2px',
                            color: COLORS.dark,
                            background: COLORS.pink,
                            padding: '0.2rem 0.5rem',
                            textTransform: 'uppercase',
                          }}>
                            Women&apos;s Main Event
                          </span>
                        )}
                      </div>
                      <h3 style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        color: COLORS.bone,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.5rem',
                        lineHeight: 1,
                      }}>
                        {event.name}
                      </h3>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.65rem',
                        color: COLORS.silver,
                        letterSpacing: '1px',
                        marginBottom: '1rem',
                      }}>
                        {event.venue} &mdash; {event.location}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {event.womensFights.map((fight, i) => (
                          <div key={i} style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 800,
                            fontSize: '0.95rem',
                            color: fight.isTitleFight ? COLORS.pink : COLORS.bone,
                            letterSpacing: '0.5px',
                          }}>
                            {fight.fighter1} vs. {fight.fighter2}
                            <span style={{
                              fontFamily: "'Space Mono', monospace",
                              fontWeight: 400,
                              fontSize: '0.6rem',
                              color: COLORS.silver,
                              letterSpacing: '1px',
                              marginLeft: '0.75rem',
                            }}>
                              {fight.weightClass} {fight.isTitleFight ? '— TITLE' : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      color: COLORS.pink,
                      letterSpacing: '1px',
                      paddingTop: '0.25rem',
                      whiteSpace: 'nowrap',
                    }}>
                      Details &rarr;
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── COMPLETED EVENTS ── */}
      <section style={{ padding: '4rem 2rem', background: '#1A061B' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: COLORS.silver,
            letterSpacing: '4px',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}>
            Results
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: COLORS.bone,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '2.5rem',
          }}>
            RECENT RESULTS
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '1.25rem',
          }}>
            {completed.map(event => {
              const titleFights = event.womensFights.filter(f => f.isTitleFight)
              return (
                <a
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{
                    background: 'rgba(45,10,46,0.5)',
                    borderTop: `3px solid ${titleFights.length > 0 ? COLORS.pink : 'rgba(255,45,120,0.3)'}`,
                    padding: '1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.3rem',
                        color: COLORS.bone,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.25rem',
                      }}>
                        {event.name}
                      </h3>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        color: COLORS.silver,
                        letterSpacing: '1px',
                      }}>
                        {formatDate(event.date)}
                      </div>
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.55rem',
                      letterSpacing: '2px',
                      color: COLORS.pink,
                      background: 'rgba(255,45,120,0.12)',
                      padding: '0.2rem 0.5rem',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                    }}>
                      {typeLabel(event.type)}
                    </span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,45,120,0.15)', paddingTop: '0.75rem' }}>
                    {event.womensFights.map((fight, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.4rem',
                      }}>
                        <div style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 800,
                          fontSize: '0.95rem',
                          color: fight.isTitleFight ? COLORS.pink : COLORS.bone,
                          letterSpacing: '0.5px',
                        }}>
                          {fight.winner ? (
                            <><span style={{ color: COLORS.pink }}>{fight.winner}</span> def. {fight.fighter1 === fight.winner ? fight.fighter2 : fight.fighter1}</>
                          ) : (
                            <>{fight.fighter1} vs. {fight.fighter2}</>
                          )}
                        </div>
                        {fight.method && (
                          <span style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.55rem',
                            color: COLORS.silver,
                            letterSpacing: '1px',
                            marginLeft: '0.5rem',
                          }}>
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

    </main>
  )
}
