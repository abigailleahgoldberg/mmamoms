import type { Metadata } from 'next'
import { events } from '../data/events'

export const metadata: Metadata = {
  title: 'Women\'s MMA Event Calendar 2025 | Iron Mom',
  description: '12-month calendar of UFC events featuring women\'s fights. Track upcoming title fights, women\'s main events, and fight week schedules.',
  openGraph: {
    title: 'Women\'s MMA Event Calendar | Iron Mom',
    description: 'Track every UFC event with women\'s fights on one calendar.',
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

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

interface CalendarEvent {
  day: number
  event: typeof events[0]
}

export default function CalendarPage() {
  const currentYear = 2025
  const startMonth = 0 // January
  const endMonth = 11  // December

  // Map events to calendar
  const eventsByMonthDay: Record<string, typeof events[0][]> = {}
  for (const event of events) {
    const d = new Date(event.date + 'T12:00:00Z')
    const y = d.getUTCFullYear()
    const m = d.getUTCMonth()
    const day = d.getUTCDate()
    if (y === currentYear) {
      const key = `${m}-${day}`
      if (!eventsByMonthDay[key]) eventsByMonthDay[key] = []
      eventsByMonthDay[key].push(event)
    }
  }

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
            Calendar
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
            <span style={{ display: 'block' }}>FIGHT WEEK</span>
            <span style={{ display: 'block', color: COLORS.pink }}>ALL YEAR LONG.</span>
          </h1>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.7)',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Every UFC event with women&apos;s fights, mapped across the year. Pink means fight day.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { color: COLORS.pink, label: 'PPV' },
              { color: COLORS.violet, label: 'Fight Night' },
              { color: COLORS.silver, label: 'Apex' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', background: color, borderRadius: '2px' }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: COLORS.silver, letterSpacing: '1px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDAR GRID ── */}
      <section style={{ padding: '4rem 2rem', background: COLORS.dark }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}>
            {Array.from({ length: 12 }, (_, monthIndex) => {
              const daysInMonth = getDaysInMonth(currentYear, monthIndex)
              const firstDay = getFirstDayOfMonth(currentYear, monthIndex)
              const cells: (CalendarEvent | null)[] = Array(firstDay).fill(null)

              for (let day = 1; day <= daysInMonth; day++) {
                const key = `${monthIndex}-${day}`
                const dayEvents = eventsByMonthDay[key] || []
                cells.push({ day, event: dayEvents[0] ?? (null as any) })
              }

              // Pad to complete last row
              while (cells.length % 7 !== 0) cells.push(null)

              return (
                <div key={monthIndex}>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: COLORS.bone,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: `2px solid rgba(255,45,120,0.3)`,
                  }}>
                    {MONTH_NAMES[monthIndex]} <span style={{ color: COLORS.violet }}>{currentYear}</span>
                  </div>

                  {/* Day headers */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: '2px',
                    marginBottom: '4px',
                  }}>
                    {DAY_NAMES.map(day => (
                      <div key={day} style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem',
                        color: 'rgba(245,240,235,0.4)',
                        letterSpacing: '1px',
                        textAlign: 'center',
                        padding: '4px 0',
                        textTransform: 'uppercase',
                      }}>
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar days */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: '2px',
                  }}>
                    {cells.map((cell, cellIdx) => {
                      if (!cell) {
                        return <div key={cellIdx} style={{ aspectRatio: '1', background: 'transparent' }} />
                      }

                      const hasEvent = !!(cell as any).event
                      const ev = (cell as any).event
                      const eventType = ev?.type
                      const isTitleEvent = hasEvent && ev.womensFights.some((f: any) => f.isTitleFight)
                      const cellColor = !hasEvent
                        ? 'rgba(45,10,46,0.3)'
                        : isTitleEvent
                        ? COLORS.pink
                        : eventType === 'ppv'
                        ? COLORS.pink
                        : eventType === 'fight-night'
                        ? COLORS.violet
                        : COLORS.silver

                      return (
                        <div
                          key={cellIdx}
                          title={hasEvent ? ev.name : undefined}
                          style={{
                            aspectRatio: '1',
                            background: hasEvent ? cellColor : 'rgba(45,10,46,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: hasEvent ? 'pointer' : 'default',
                            position: 'relative',
                          }}
                          onClick={hasEvent ? undefined : undefined}
                        >
                          {hasEvent ? (
                            <a
                              href={`/events/${ev.slug}`}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                textDecoration: 'none',
                              }}
                            >
                              <span style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.7rem',
                                color: COLORS.dark,
                                fontWeight: 'bold',
                              }}>
                                {cell.day}
                              </span>
                            </a>
                          ) : (
                            <span style={{
                              fontFamily: "'Space Mono', monospace",
                              fontSize: '0.65rem',
                              color: 'rgba(245,240,235,0.35)',
                            }}>
                              {cell.day}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Events in this month */}
                  {events.filter(e => {
                    const d = new Date(e.date + 'T12:00:00Z')
                    return d.getUTCFullYear() === currentYear && d.getUTCMonth() === monthIndex
                  }).map(ev => (
                    <a
                      key={ev.slug}
                      href={`/events/${ev.slug}`}
                      style={{
                        display: 'block',
                        marginTop: '0.75rem',
                        padding: '0.6rem 0.75rem',
                        background: 'rgba(45,10,46,0.5)',
                        borderLeft: `3px solid ${ev.type === 'ppv' ? COLORS.pink : ev.type === 'fight-night' ? COLORS.violet : COLORS.silver}`,
                        textDecoration: 'none',
                      }}
                    >
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        color: COLORS.bone,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                      }}>
                        {ev.name}
                      </div>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem',
                        color: COLORS.silver,
                        letterSpacing: '1px',
                        marginTop: '0.2rem',
                      }}>
                        {new Date(ev.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        {ev.womensFights.some(f => f.isTitleFight) && (
                          <span style={{ color: COLORS.pink, marginLeft: '0.5rem' }}>TITLE FIGHT</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </main>
  )
}
