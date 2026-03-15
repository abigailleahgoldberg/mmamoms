import type { Metadata } from 'next'
import { fighters } from '../data/fighters'

export const metadata: Metadata = {
  title: "Women's MMA Fighters | Iron Mom",
  description: "Complete profiles of the best women in MMA — champion records, career highlights, fighting styles, and analysis. Valentina Shevchenko, Zhang Weili, Amanda Nunes, and more.",
  openGraph: {
    title: "Women's MMA Fighters | Iron Mom",
    description: 'Champion records, career highlights, and analysis for the best women in MMA.',
  },
}

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

export default function FightersPage() {
  const champions = fighters.filter(f => f.isChampion)
  const active = fighters.filter(f => !f.isRetired && !f.isChampion)
  const retired = fighters.filter(f => f.isRetired)

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
            flexWrap: 'wrap',
          }}>
            <a href="/" style={{ color: '#A09090' }}>Iron Mom</a>
            <span style={{ color: 'rgba(255,45,120,0.35)' }}>/</span>
            <span>Fighters</span>
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
            <span style={{ display: 'block' }}>THE WOMEN</span>
            <span style={{ display: 'block', color: '#FF2D78' }}>WHO RUN MMA.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.6)',
            maxWidth: '520px',
            lineHeight: 1.75,
          }}>
            Full profiles on every major women&apos;s fighter — records, career highlights, fighting styles, and our honest take on what makes each one special.
          </p>

          {/* Quick-jump */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Champions', href: '#champions' },
              { label: 'Active', href: '#active' },
              { label: 'Legends', href: '#legends' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                color: '#F5F0EB',
                letterSpacing: '2px',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(245,240,235,0.15)',
                textTransform: 'uppercase',
              }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMPIONS */}
      {champions.length > 0 && (
        <section id="champions" style={{
          background: '#1A0E1F',
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          borderBottom: '1px solid rgba(255,45,120,0.08)',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              color: '#FF2D78',
              letterSpacing: '4px',
              marginBottom: '0.6rem',
              textTransform: 'uppercase',
            }}>
              Belt Holders
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#F5F0EB',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              lineHeight: 1,
              marginBottom: '2.5rem',
            }}>
              CURRENT CHAMPIONS
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {champions.map(fighter => (
                <a
                  key={fighter.slug}
                  href={`/fighters/${fighter.slug}`}
                  style={{
                    background: '#0C0610',
                    border: '2px solid #FF2D78',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.52rem',
                    letterSpacing: '2px',
                    color: '#0C0610',
                    background: '#FF2D78',
                    padding: '0.25rem 0.65rem',
                    textTransform: 'uppercase',
                  }}>
                    Champion
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: '#FF2D78',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    lineHeight: 1,
                    paddingRight: '5rem',
                  }}>
                    {fighter.name}
                  </h3>

                  {fighter.nickname && (
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.62rem',
                      color: '#A09090',
                      letterSpacing: '2px',
                    }}>
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '2rem', marginTop: '0.25rem' }}>
                    {[
                      { label: 'Weight Class', value: fighter.weightClass },
                      { label: 'Record', value: fighter.record },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: 'rgba(245,240,235,0.4)', letterSpacing: '2px', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                          {label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#F5F0EB', letterSpacing: '1px' }}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.62rem',
                    color: '#FF2D78',
                    letterSpacing: '1px',
                    marginTop: '0.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,45,120,0.15)',
                  }}>
                    Full profile &rarr;
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACTIVE FIGHTERS */}
      <section id="active" style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        background: '#0C0610',
        borderBottom: '1px solid rgba(255,45,120,0.08)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem',
            color: '#FF2D78',
            letterSpacing: '4px',
            marginBottom: '0.6rem',
            textTransform: 'uppercase',
          }}>
            Active Fighters
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#F5F0EB',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: 1,
            marginBottom: '3rem',
          }}>
            IN THE CAGE NOW
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {active.map(fighter => (
              <a
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  background: '#1A0E1F',
                  clipPath: OCTAGON_CLIP,
                  padding: '4rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.6rem',
                  minHeight: '300px',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    clipPath: OCTAGON_CLIP,
                    border: '2px solid rgba(255,45,120,0.25)',
                    pointerEvents: 'none',
                  }} />

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: '#FF2D78',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    lineHeight: 1.05,
                  }}>
                    {fighter.name}
                  </h3>

                  {fighter.nickname && (
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.58rem',
                      color: '#A09090',
                      letterSpacing: '1px',
                    }}>
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: '#F5F0EB',
                    letterSpacing: '2px',
                    opacity: 0.65,
                  }}>
                    {fighter.weightClass}
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: '#A855F7',
                    letterSpacing: '3px',
                  }}>
                    {fighter.record}
                  </div>

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.52rem',
                    color: 'rgba(245,240,235,0.4)',
                    letterSpacing: '1px',
                  }}>
                    {fighter.fightingStyle}
                  </div>

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: '#FF2D78',
                    letterSpacing: '1px',
                    marginTop: '0.25rem',
                    borderBottom: '1px solid rgba(255,45,120,0.4)',
                    paddingBottom: '2px',
                  }}>
                    Full bio &rarr;
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LEGENDS */}
      <section id="legends" style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        background: '#1A0E1F',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem',
            color: '#A09090',
            letterSpacing: '4px',
            marginBottom: '0.6rem',
            textTransform: 'uppercase',
          }}>
            Legends
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#F5F0EB',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: 1,
            marginBottom: '2.5rem',
          }}>
            THEY BUILT THIS SPORT
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {retired.map(fighter => (
              <a
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{
                  background: 'rgba(12,6,16,0.5)',
                  borderLeft: '3px solid rgba(255,45,120,0.4)',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  textDecoration: 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: '#F5F0EB',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '0.35rem',
                  }}>
                    {fighter.name}
                  </h3>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: '#A09090',
                    letterSpacing: '1px',
                    marginBottom: '0.75rem',
                  }}>
                    {fighter.weightClass} &bull; {fighter.record} &bull; Retired
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,235,0.55)',
                    lineHeight: 1.65,
                  }}>
                    {fighter.careerHighlights[0]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
