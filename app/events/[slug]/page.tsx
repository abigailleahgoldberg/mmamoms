import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { events, getEventBySlug } from '../../data/events'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return {}
  return {
    title: `${event.name} Women's Fights | Iron Mom`,
    description: `${event.name} — ${event.date} at ${event.venue}, ${event.location}. Women's fight results and analysis.`,
    openGraph: {
      title: `${event.name} | Iron Mom`,
      description: `Women's fights at ${event.name}.`,
    },
  }
}

export function generateStaticParams() {
  return events.map(e => ({ slug: e.slug }))
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

function typeLabel(type: string): string {
  if (type === 'ppv') return 'Pay-Per-View'
  if (type === 'fight-night') return 'Fight Night'
  return 'UFC Apex'
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const titleFights = event.womensFights.filter(f => f.isTitleFight)
  const mainEvents = event.womensFights.filter(f => f.isMainEvent)
  const otherFights = event.womensFights.filter(f => !f.isMainEvent)

  return (
    <main style={{ minHeight: '100vh', background: COLORS.dark }}>

      {/* ── HEADER ── */}
      <section style={{
        background: `linear-gradient(180deg, ${COLORS.plum} 0%, ${COLORS.dark} 100%)`,
        padding: '4rem 2rem',
        borderBottom: `1px solid rgba(255,45,120,0.2)`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            color: COLORS.silver,
            letterSpacing: '2px',
            marginBottom: '2rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/" style={{ color: COLORS.silver, textDecoration: 'none' }}>Home</a>
            <span style={{ color: 'rgba(255,45,120,0.4)' }}>/</span>
            <a href="/events" style={{ color: COLORS.silver, textDecoration: 'none' }}>Events</a>
            <span style={{ color: 'rgba(255,45,120,0.4)' }}>/</span>
            <span style={{ color: COLORS.pink }}>{event.name}</span>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '2px',
              color: COLORS.pink,
              background: 'rgba(255,45,120,0.15)',
              padding: '0.3rem 0.7rem',
              textTransform: 'uppercase',
            }}>
              {typeLabel(event.type)}
            </span>
            {event.completed ? (
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '2px',
                color: COLORS.bone,
                background: 'rgba(245,240,235,0.1)',
                padding: '0.3rem 0.7rem',
                textTransform: 'uppercase',
              }}>
                Results
              </span>
            ) : (
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '2px',
                color: COLORS.dark,
                background: COLORS.pink,
                padding: '0.3rem 0.7rem',
                textTransform: 'uppercase',
              }}>
                Upcoming
              </span>
            )}
            {titleFights.length > 0 && (
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '2px',
                color: COLORS.bone,
                background: COLORS.violet,
                padding: '0.3rem 0.7rem',
                textTransform: 'uppercase',
              }}>
                Title Fight
              </span>
            )}
          </div>

          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: COLORS.bone,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-1px',
            marginBottom: '1.25rem',
          }}>
            {event.name}
          </h1>

          <div style={{
            display: 'flex',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'Date', value: formatDate(event.date) },
              { label: 'Location', value: event.location },
              { label: 'Venue', value: event.venue },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(245,240,235,0.5)', letterSpacing: '2px', marginBottom: '0.25rem', textTransform: 'uppercase' }}>{label}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: COLORS.bone }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WOMEN'S FIGHTS ── */}
      <section style={{ padding: '4rem 2rem', background: COLORS.dark }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: COLORS.pink,
            letterSpacing: '4px',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}>
            Women&apos;s Fights
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: '2.5rem',
            color: COLORS.bone,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '2.5rem',
          }}>
            THE CARD
          </h2>

          {event.womensFights.length === 0 ? (
            <p style={{ fontFamily: "'Barlow', sans-serif", color: COLORS.silver, lineHeight: 1.7 }}>
              No women&apos;s fights confirmed for this event yet. Check back closer to fight week.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {event.womensFights.map((fight, i) => (
                <div
                  key={i}
                  style={{
                    background: fight.isTitleFight ? 'rgba(123,47,190,0.15)' : fight.isMainEvent ? 'rgba(255,45,120,0.08)' : 'rgba(45,10,46,0.5)',
                    border: `1px solid ${fight.isTitleFight ? COLORS.violet : fight.isMainEvent ? 'rgba(255,45,120,0.4)' : 'rgba(255,45,120,0.15)'}`,
                    padding: '2rem',
                  }}
                >
                  {/* Fight label */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {fight.isMainEvent && (
                      <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        letterSpacing: '2px',
                        color: COLORS.dark,
                        background: COLORS.pink,
                        padding: '0.25rem 0.6rem',
                        textTransform: 'uppercase',
                      }}>
                        Main Event
                      </span>
                    )}
                    {fight.isTitleFight && (
                      <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        letterSpacing: '2px',
                        color: COLORS.bone,
                        background: COLORS.violet,
                        padding: '0.25rem 0.6rem',
                        textTransform: 'uppercase',
                      }}>
                        Title Fight
                      </span>
                    )}
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '2px',
                      color: COLORS.silver,
                      padding: '0.25rem 0.6rem',
                      textTransform: 'uppercase',
                      border: `1px solid rgba(192,192,200,0.3)`,
                    }}>
                      {fight.weightClass}
                    </span>
                  </div>

                  {/* Matchup */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '1rem',
                    alignItems: 'center',
                    marginBottom: fight.winner ? '1.5rem' : 0,
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        color: fight.winner === fight.fighter1 ? COLORS.pink : COLORS.bone,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        lineHeight: 1,
                      }}>
                        {fight.fighter1}
                      </div>
                      {fight.winner === fight.fighter1 && (
                        <div style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.6rem',
                          color: COLORS.pink,
                          letterSpacing: '2px',
                          marginTop: '0.3rem',
                          textTransform: 'uppercase',
                        }}>
                          Winner
                        </div>
                      )}
                    </div>

                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      color: 'rgba(245,240,235,0.3)',
                      textAlign: 'center',
                    }}>
                      vs
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        color: fight.winner === fight.fighter2 ? COLORS.pink : COLORS.bone,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        lineHeight: 1,
                      }}>
                        {fight.fighter2}
                      </div>
                      {fight.winner === fight.fighter2 && (
                        <div style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.6rem',
                          color: COLORS.pink,
                          letterSpacing: '2px',
                          marginTop: '0.3rem',
                          textTransform: 'uppercase',
                          textAlign: 'right',
                        }}>
                          Winner
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Result */}
                  {fight.winner && fight.method && (
                    <div style={{
                      borderTop: '1px solid rgba(255,45,120,0.2)',
                      paddingTop: '1rem',
                      display: 'flex',
                      gap: '2rem',
                      flexWrap: 'wrap',
                    }}>
                      {[
                        { label: 'Method', value: fight.method },
                        { label: 'Round', value: `Round ${fight.round}` },
                        ...(fight.time ? [{ label: 'Time', value: fight.time }] : []),
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(245,240,235,0.5)', letterSpacing: '2px', marginBottom: '0.2rem', textTransform: 'uppercase' }}>{label}</div>
                          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: COLORS.bone }}>{value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BACK ── */}
      <div style={{ padding: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <a href="/events" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.7rem',
          color: COLORS.pink,
          letterSpacing: '2px',
          textDecoration: 'none',
        }}>
          &larr; All Events
        </a>
      </div>

    </main>
  )
}
