import type { Metadata } from 'next'
import { fighters } from '../data/fighters'

export const metadata: Metadata = {
  title: 'Women\'s MMA Fighters | Iron Mom',
  description: 'Complete profiles of the best women in MMA — champion records, career highlights, fighting styles, and analysis. Valentina Shevchenko, Zhang Weili, Amanda Nunes, and more.',
  openGraph: {
    title: 'Women\'s MMA Fighters | Iron Mom',
    description: 'Champion records, career highlights, and analysis for the best women in MMA.',
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

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

const WEIGHT_CLASSES = ['All', 'Strawweight', 'Flyweight', 'Bantamweight', 'Featherweight']

export default function FightersPage() {
  const champions = fighters.filter(f => f.isChampion)
  const activeFighters = fighters.filter(f => !f.isRetired)
  const retiredFighters = fighters.filter(f => f.isRetired)

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
            Fighters
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
            <span style={{ display: 'block' }}>THE WOMEN</span>
            <span style={{ display: 'block', color: COLORS.pink }}>WHO RUN MMA.</span>
          </h1>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(245,240,235,0.7)',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}>
            Full profiles on every major women's fighter — records, career highlights, fighting styles, and our honest take on what makes each one special.
          </p>
        </div>
      </section>

      {/* ── CURRENT CHAMPIONS ── */}
      {champions.length > 0 && (
        <section style={{ background: COLORS.plum, padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              color: COLORS.pink,
              letterSpacing: '4px',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}>
              Current Champions
            </div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: COLORS.bone,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '2rem',
            }}>
              THE BELT HOLDERS
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {champions.map(fighter => (
                <a
                  key={fighter.slug}
                  href={`/fighters/${fighter.slug}`}
                  style={{
                    background: COLORS.dark,
                    border: `2px solid ${COLORS.pink}`,
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
                    top: '1rem',
                    right: '1rem',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem',
                    letterSpacing: '2px',
                    color: COLORS.pink,
                    background: 'rgba(255,45,120,0.15)',
                    padding: '0.25rem 0.6rem',
                    textTransform: 'uppercase',
                  }}>
                    Champion
                  </div>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    color: COLORS.pink,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    lineHeight: 1,
                  }}>
                    {fighter.name}
                  </h3>
                  {fighter.nickname && (
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      color: COLORS.silver,
                      letterSpacing: '2px',
                    }}>
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginTop: '0.25rem',
                  }}>
                    <div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(245,240,235,0.5)', letterSpacing: '2px', marginBottom: '0.2rem' }}>WEIGHT CLASS</div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: COLORS.bone }}>{fighter.weightClass}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(245,240,235,0.5)', letterSpacing: '2px', marginBottom: '0.2rem' }}>RECORD</div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: COLORS.bone }}>{fighter.record}</div>
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.65rem',
                    color: COLORS.pink,
                    letterSpacing: '1px',
                    marginTop: '0.5rem',
                  }}>
                    Full profile &rarr;
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ACTIVE FIGHTERS ── */}
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
            Active Fighters
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
            IN THE CAGE NOW
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {activeFighters.filter(f => !f.isChampion).map(fighter => (
              <a
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: COLORS.plum,
                  clipPath: OCTAGON_CLIP,
                  padding: '4.5rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.6rem',
                  minHeight: '320px',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'transform 0.2s',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    clipPath: OCTAGON_CLIP,
                    border: `2px solid rgba(255,45,120,0.35)`,
                    pointerEvents: 'none',
                  }} />
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    color: COLORS.pink,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    lineHeight: 1.1,
                  }}>
                    {fighter.name}
                  </h3>
                  {fighter.nickname && (
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.6rem',
                      color: COLORS.silver,
                      letterSpacing: '1px',
                    }}>
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: COLORS.bone,
                    letterSpacing: '1px',
                  }}>
                    {fighter.weightClass}
                  </div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: COLORS.violet,
                    letterSpacing: '2px',
                  }}>
                    {fighter.record}
                  </div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem',
                    color: 'rgba(245,240,235,0.5)',
                    letterSpacing: '1px',
                    marginTop: '0.25rem',
                  }}>
                    {fighter.fightingStyle}
                  </div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: COLORS.pink,
                    letterSpacing: '1px',
                    marginTop: '0.25rem',
                    borderBottom: `1px solid ${COLORS.pink}`,
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

      {/* ── RETIRED FIGHTERS ── */}
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
            Legends
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
            THEY BUILT THIS SPORT
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {retiredFighters.map(fighter => (
              <a
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{
                  background: 'rgba(45,10,46,0.4)',
                  borderLeft: `3px solid rgba(255,45,120,0.5)`,
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  textDecoration: 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    color: COLORS.bone,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.4rem',
                  }}>
                    {fighter.name}
                  </h3>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: COLORS.silver,
                    letterSpacing: '1px',
                    marginBottom: '0.75rem',
                  }}>
                    {fighter.weightClass} &bull; {fighter.record} &bull; Retired
                  </div>
                  <p style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,235,0.6)',
                    lineHeight: 1.6,
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
