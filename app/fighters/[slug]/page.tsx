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

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

export default async function FighterPage({ params }: Props) {
  const { slug } = await params
  const fighter = getFighterBySlug(slug)
  if (!fighter) notFound()

  const related = fighters
    .filter(f => f.slug !== fighter.slug && f.weightClass === fighter.weightClass)
    .slice(0, 3)

  const relatedFallback = related.length > 0
    ? related
    : fighters.filter(f => f.slug !== fighter.slug).slice(0, 3)

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
    <main style={{ minHeight: '100vh', background: '#0C0610' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(180deg, #1A0E1F 0%, #0C0610 100%)',
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        borderBottom: '1px solid rgba(255,45,120,0.1)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Breadcrumb */}
          <nav style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem',
            color: '#A09090',
            letterSpacing: '2px',
            marginBottom: '2rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/" style={{ color: '#A09090' }}>Home</a>
            <span style={{ color: 'rgba(255,45,120,0.3)' }}>/</span>
            <a href="/fighters" style={{ color: '#A09090' }}>Fighters</a>
            <span style={{ color: 'rgba(255,45,120,0.3)' }}>/</span>
            <span style={{ color: '#FF2D78' }}>{fighter.name}</span>
          </nav>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'center',
          }} className="fighter-hero-grid">

            {/* Octagon with record */}
            <div style={{
              width: '160px',
              height: '160px',
              clipPath: OCTAGON_CLIP,
              background: '#1A0E1F',
              border: '2px solid rgba(255,45,120,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: '#A855F7',
                opacity: 0.7,
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
                  display: 'inline-block',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.58rem',
                  color: '#0C0610',
                  background: '#FF2D78',
                  padding: '0.25rem 0.7rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                }}>
                  Current Champion
                </div>
              )}
              {fighter.isRetired && (
                <div style={{
                  display: 'inline-block',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.58rem',
                  color: '#A09090',
                  background: 'rgba(160,144,144,0.12)',
                  padding: '0.25rem 0.7rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                }}>
                  Retired Legend
                </div>
              )}

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                color: '#F5F0EB',
                textTransform: 'uppercase',
                lineHeight: 0.88,
                letterSpacing: '2px',
                marginBottom: '0.75rem',
              }}>
                {fighter.name}
              </h1>

              {fighter.nickname && (
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#A09090',
                  letterSpacing: '3px',
                  marginBottom: '1.25rem',
                }}>
                  &ldquo;{fighter.nickname}&rdquo;
                </div>
              )}

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Weight Class', value: fighter.weightClass },
                  { label: 'Record', value: fighter.record },
                  { label: 'Hometown', value: fighter.hometown },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: 'rgba(245,240,235,0.4)', letterSpacing: '2px', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                      {label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#F5F0EB', letterSpacing: '1px' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div style={{
        background: '#1A0E1F',
        borderBottom: '1px solid rgba(255,45,120,0.08)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
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
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: 'rgba(255,45,120,0.65)', letterSpacing: '2px', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                {label}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#F5F0EB', letterSpacing: '1px' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '4rem',
          alignItems: 'start',
        }} className="fighter-content-grid">

          {/* LEFT — content */}
          <div>
            {/* Bio */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Overview
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', lineHeight: 1 }}>
                THE FIGHTER
              </h2>
              {bioParagraphs.map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,240,235,0.78)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                  {para}
                </p>
              ))}
            </section>

            {/* Career Highlights */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Career
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', lineHeight: 1 }}>
                CAREER HIGHLIGHTS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {fighter.careerHighlights.map((highlight, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    background: 'rgba(26,14,31,0.6)',
                    borderLeft: '3px solid #FF2D78',
                  }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#FF2D78', minWidth: '20px', paddingTop: '1px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#F5F0EB', lineHeight: 1.6 }}>
                      {highlight}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Signature Moves */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Technique
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', lineHeight: 1 }}>
                SIGNATURE MOVES
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0.75rem' }}>
                {fighter.signatureMoves.map((move, i) => (
                  <div key={i} style={{
                    background: '#1A0E1F',
                    padding: '0.85rem 1rem',
                    borderTop: '2px solid #A855F7',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#F5F0EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {move}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Biggest Wins */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Wins
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', lineHeight: 1 }}>
                BIGGEST WINS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {fighter.biggestWins.map((win, i) => (
                  <div key={i} style={{
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(168,85,247,0.08)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: '#F5F0EB',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {win}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT — sidebar */}
          <div style={{ position: 'sticky', top: '80px' }}>

            {/* Mom's Take */}
            <div style={{ background: '#FF2D78', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#0C0610', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                Mom&apos;s Take
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#1A0E1F', lineHeight: 1.75, fontStyle: 'italic' }}>
                {fighter.momTake}
              </p>
            </div>

            {/* Related fighters */}
            {relatedFallback.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  Also at {fighter.weightClass}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {relatedFallback.map(rf => (
                    <a
                      key={rf.slug}
                      href={`/fighters/${rf.slug}`}
                      style={{
                        background: '#1A0E1F',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        textDecoration: 'none',
                        borderLeft: '2px solid rgba(255,45,120,0.3)',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#F5F0EB', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {rf.name}
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: '#A09090', letterSpacing: '1px' }}>
                        {rf.record} &bull; {rf.isChampion ? 'Champion' : rf.isRetired ? 'Retired' : 'Active'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a
              href="/fighters"
              style={{
                display: 'block',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.68rem',
                color: '#FF2D78',
                letterSpacing: '2px',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,45,120,0.2)',
                paddingTop: '1.25rem',
              }}
            >
              &larr; All Fighters
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .fighter-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .fighter-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .fighter-hero-grid > div:first-child {
            display: none;
          }
        }
      `}</style>
    </main>
  )
}
