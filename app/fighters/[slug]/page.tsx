import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fighters, getFighterBySlug } from '../../data/fighters'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const fighter = getFighterBySlug(slug)
  if (!fighter) return {}
  return {
    title: `${fighter.name} — Women's MMA Fighter Profile`,
    description: `${fighter.name} (${fighter.record}) — ${fighter.weightClass}. Career highlights, fighting style, biggest wins, and more.`,
    openGraph: {
      title: `${fighter.name} | Iron Mom`,
      description: `${fighter.name} (${fighter.record}) — ${fighter.weightClass} fighter profile.`,
      type: 'profile',
    },
  }
}

export function generateStaticParams() {
  return fighters.map(f => ({ slug: f.slug }))
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

export default async function FighterPage({ params }: Props) {
  const { slug } = await params
  const fighter = getFighterBySlug(slug)
  if (!fighter) notFound()

  // Related fighters — same weight class, different person
  const related = fighters
    .filter(f => f.slug !== fighter.slug && f.weightClass === fighter.weightClass)
    .slice(0, 3)

  // If no exact match, grab fighters from same general division area
  const relatedFallback = related.length > 0
    ? related
    : fighters.filter(f => f.slug !== fighter.slug).slice(0, 3)

  // Schema.org Person structured data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fighter.name,
    description: fighter.bio,
    birthPlace: fighter.hometown,
    sport: 'Mixed Martial Arts',
    award: fighter.careerHighlights,
  }

  const bioParagraphs = fighter.bio.split('\n\n').filter(Boolean)

  return (
    <main style={{ minHeight: '100vh', background: COLORS.dark }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ── HEADER / HERO ── */}
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
            <a href="/fighters" style={{ color: COLORS.silver, textDecoration: 'none' }}>Fighters</a>
            <span style={{ color: 'rgba(255,45,120,0.4)' }}>/</span>
            <span style={{ color: COLORS.pink }}>{fighter.name}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* Octagon accent */}
            <div style={{
              width: '180px',
              height: '180px',
              clipPath: OCTAGON_CLIP,
              background: COLORS.plum,
              border: `2px solid ${COLORS.pink}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '2.5rem',
                color: COLORS.violet,
                opacity: 0.6,
                textTransform: 'uppercase',
                letterSpacing: '-1px',
                textAlign: 'center',
                lineHeight: 1,
              }}>
                {fighter.record}
              </div>
            </div>

            <div>
              {fighter.isChampion && (
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  color: COLORS.pink,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}>
                  Current Champion
                </div>
              )}
              {fighter.isRetired && (
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  color: COLORS.silver,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}>
                  Retired Legend
                </div>
              )}
              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: COLORS.bone,
                textTransform: 'uppercase',
                lineHeight: 0.9,
                letterSpacing: '-1px',
                marginBottom: '0.75rem',
              }}>
                {fighter.name}
              </h1>
              {fighter.nickname && (
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.8rem',
                  color: COLORS.silver,
                  letterSpacing: '2px',
                  marginBottom: '1.25rem',
                }}>
                  &ldquo;{fighter.nickname}&rdquo;
                </div>
              )}
              <div style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}>
                {[
                  { label: 'Weight Class', value: fighter.weightClass },
                  { label: 'Record', value: fighter.record },
                  { label: 'Hometown', value: fighter.hometown },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(245,240,235,0.5)', letterSpacing: '2px', marginBottom: '0.25rem' }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: COLORS.bone }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{
        background: COLORS.plum,
        borderBottom: `1px solid rgba(255,45,120,0.2)`,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
        }}>
          {[
            { label: 'Height', value: fighter.height },
            { label: 'Reach', value: fighter.reach },
            { label: 'Stance', value: fighter.stance },
            { label: 'Age', value: `${fighter.age}` },
            { label: 'Style', value: fighter.fightingStyle },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: 'rgba(255,45,120,0.7)', letterSpacing: '2px', marginBottom: '0.35rem', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: COLORS.bone }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* LEFT — Bio + Sections */}
          <div>
            {/* Bio */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: COLORS.pink,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Overview
              </div>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                color: COLORS.bone,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
              }}>
                THE FIGHTER
              </h2>
              {bioParagraphs.map((para, i) => (
                <p key={i} style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '1rem',
                  color: 'rgba(245,240,235,0.8)',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                }}>
                  {para}
                </p>
              ))}
            </section>

            {/* Career Highlights */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: COLORS.pink,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Career
              </div>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                color: COLORS.bone,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
              }}>
                CAREER HIGHLIGHTS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {fighter.careerHighlights.map((highlight, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    background: 'rgba(45,10,46,0.5)',
                    borderLeft: `3px solid ${COLORS.pink}`,
                  }}>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      color: COLORS.pink,
                      minWidth: '20px',
                      paddingTop: '1px',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '0.9rem',
                      color: COLORS.bone,
                      lineHeight: 1.5,
                    }}>
                      {highlight}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Signature Moves */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: COLORS.pink,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Technique
              </div>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                color: COLORS.bone,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
              }}>
                SIGNATURE MOVES
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '0.75rem',
              }}>
                {fighter.signatureMoves.map((move, i) => (
                  <div key={i} style={{
                    background: COLORS.plum,
                    padding: '0.75rem 1rem',
                    borderTop: `2px solid ${COLORS.violet}`,
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      color: COLORS.bone,
                      letterSpacing: '0.5px',
                    }}>
                      {move}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Biggest Wins */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: COLORS.pink,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Wins
              </div>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                color: COLORS.bone,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
              }}>
                BIGGEST WINS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {fighter.biggestWins.map((win, i) => (
                  <div key={i} style={{
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(123,47,190,0.12)',
                    border: '1px solid rgba(123,47,190,0.25)',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: COLORS.bone,
                    letterSpacing: '0.5px',
                  }}>
                    {win}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT — Mom's Take + Related */}
          <div style={{ position: 'sticky', top: '80px' }}>
            {/* Mom's Take */}
            <div style={{
              background: COLORS.pink,
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: COLORS.dark,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                Mom&apos;s Take
              </div>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: '0.95rem',
                color: COLORS.plum,
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}>
                {fighter.momTake}
              </p>
            </div>

            {/* Related fighters */}
            {relatedFallback.length > 0 && (
              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  color: COLORS.silver,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}>
                  Also At {fighter.weightClass}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {relatedFallback.map(rf => (
                    <a
                      key={rf.slug}
                      href={`/fighters/${rf.slug}`}
                      style={{
                        background: COLORS.plum,
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        textDecoration: 'none',
                        borderLeft: `2px solid rgba(255,45,120,0.4)`,
                      }}
                    >
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: '1rem',
                        color: COLORS.bone,
                        textTransform: 'uppercase',
                      }}>
                        {rf.name}
                      </div>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.55rem',
                        color: COLORS.silver,
                        letterSpacing: '1px',
                      }}>
                        {rf.record} &bull; {rf.isChampion ? 'Champion' : rf.isRetired ? 'Retired' : 'Active'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Back to fighters */}
            <a
              href="/fighters"
              style={{
                display: 'block',
                marginTop: '2rem',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                color: COLORS.pink,
                letterSpacing: '2px',
                textAlign: 'center',
                borderTop: `1px solid rgba(255,45,120,0.3)`,
                paddingTop: '1.25rem',
                textDecoration: 'none',
              }}
            >
              &larr; All Fighters
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}
