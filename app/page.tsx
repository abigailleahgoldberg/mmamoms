'use client'

import { getAllPosts } from './blog/data'

const COLORS = {
  plum: '#2D0A2E',
  pink: '#FF2D78',
  violet: '#7B2FBE',
  bone: '#F5F0EB',
  silver: '#C0C0C8',
  dark: '#0F060F',
}

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

const BARLOW_CONDENSED: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 800,
}

const BARLOW: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
}

const SPACE_MONO: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
}

const FIGHTERS = [
  {
    name: 'VALENTINA SHEVCHENKO',
    division: 'Flyweight',
    record: '24-5',
    why: 'The most technically precise women\'s fighter alive. Six flyweight title defenses. Her Muay Thai reads like a dissertation on controlled violence.',
  },
  {
    name: 'ZHANG WEILI',
    division: 'Strawweight',
    record: '25-3',
    why: 'Current strawweight champion. Beat Jedrzejczyk twice. Her combinations hit harder than most men\'s heavyweights and she doesn\'t stop throwing.',
  },
  {
    name: 'AMANDA NUNES',
    division: 'Bantamweight / Featherweight',
    record: '22-5',
    why: 'Two-division champion. Finished Rousey in 48 seconds and Cyborg in one round. The argument for greatest female fighter ever starts and ends here.',
  },
]

const FIGHT_CARD_SLOTS = [
  {
    label: 'MAIN EVENT',
    weightClass: 'BANTAMWEIGHT',
    detail: '135 LBS TITLE FIGHT',
  },
  {
    label: 'CO-MAIN',
    weightClass: 'STRAWWEIGHT',
    detail: '115 LBS',
  },
  {
    label: "WOMEN'S BOUT",
    weightClass: 'FLYWEIGHT',
    detail: '125 LBS',
  },
]

export default function HomePage() {
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 3)

  return (
    <main>
      {/* ===== SECTION 1: HERO ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: COLORS.dark,
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,10,46,0.7) 0%, transparent 70%)',
        padding: '5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle grid lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,45,120,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* LEFT -- Hero text */}
          <div style={{ flex: '0 0 55%' }}>
            <h1 style={{
              ...BARLOW_CONDENSED,
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-1px',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}>
              <span style={{ display: 'block', color: COLORS.bone }}>SHE KNOWS</span>
              <span style={{ display: 'block', color: COLORS.bone }}>EVERY</span>
              <span style={{ display: 'block', color: COLORS.pink }}>RECORD.</span>
            </h1>

            <p style={{
              ...BARLOW,
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'rgba(245,240,235,0.7)',
              maxWidth: '480px',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
            }}>
              The MMA community for women who don't need it explained.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/blog" style={{
                ...BARLOW_CONDENSED,
                fontSize: '1rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                background: COLORS.pink,
                color: COLORS.dark,
                padding: '0.9rem 2rem',
                display: 'inline-block',
              }}>
                THIS WEEK'S CARD
              </a>
              <a href="/blog" style={{
                ...BARLOW_CONDENSED,
                fontSize: '1rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                border: `2px solid ${COLORS.pink}`,
                color: COLORS.pink,
                padding: '0.9rem 2rem',
                display: 'inline-block',
                background: 'transparent',
              }}>
                READ THE BLOG
              </a>
            </div>
          </div>

          {/* RIGHT -- Octagon */}
          <div style={{
            flex: '0 0 40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              clipPath: OCTAGON_CLIP,
              background: 'transparent',
              outline: 'none',
              filter: 'drop-shadow(0 0 24px rgba(255,45,120,0.4))',
            }} />
            {/* Octagon border */}
            <div style={{
              width: '380px',
              height: '380px',
              clipPath: OCTAGON_CLIP,
              background: COLORS.plum,
              border: `2px solid ${COLORS.pink}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative diagonal lines */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,45,120,0.06) 0px, rgba(255,45,120,0.06) 1px, transparent 1px, transparent 24px)',
                pointerEvents: 'none',
              }} />
              <span style={{
                ...BARLOW_CONDENSED,
                fontSize: '10rem',
                color: COLORS.violet,
                opacity: 0.25,
                lineHeight: 1,
                letterSpacing: '-4px',
                userSelect: 'none',
              }}>
                MMA
              </span>
              <span style={{
                ...SPACE_MONO,
                fontSize: '0.6rem',
                color: COLORS.pink,
                letterSpacing: '4px',
                marginTop: '0.5rem',
              }}>
                SINCE UFC 1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THIS WEEK IN THE CAGE ===== */}
      <section style={{
        background: COLORS.plum,
        padding: '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}>
            <h2 style={{
              ...BARLOW_CONDENSED,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: COLORS.bone,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              THIS WEEK IN THE CAGE
            </h2>
            <span style={{
              ...SPACE_MONO,
              fontSize: '0.65rem',
              color: COLORS.pink,
              letterSpacing: '3px',
              opacity: 0.8,
            }}>
              FIGHT WEEK
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            {FIGHT_CARD_SLOTS.map((slot) => (
              <div
                key={slot.label}
                style={{
                  borderLeft: `4px solid ${COLORS.pink}`,
                  background: 'rgba(15,6,15,0.5)',
                  padding: '1.5rem 1.5rem 1.5rem 1.75rem',
                }}
              >
                <div style={{
                  ...SPACE_MONO,
                  fontSize: '0.6rem',
                  color: COLORS.pink,
                  letterSpacing: '3px',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  {slot.label}
                </div>
                <div style={{
                  ...BARLOW_CONDENSED,
                  fontSize: '1.6rem',
                  color: COLORS.bone,
                  letterSpacing: '1px',
                  marginBottom: '0.4rem',
                }}>
                  {slot.weightClass}
                </div>
                <div style={{
                  ...SPACE_MONO,
                  fontSize: '0.65rem',
                  color: COLORS.silver,
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                }}>
                  {slot.detail}
                </div>
                <div style={{
                  ...BARLOW_CONDENSED,
                  fontSize: '1.1rem',
                  color: 'rgba(245,240,235,0.4)',
                  letterSpacing: '2px',
                  borderTop: '1px solid rgba(255,45,120,0.2)',
                  paddingTop: '0.75rem',
                }}>
                  TBD vs TBD
                </div>
              </div>
            ))}
          </div>

          <a href="/blog" style={{
            ...SPACE_MONO,
            fontSize: '0.8rem',
            color: COLORS.pink,
            letterSpacing: '1px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Get picks and analysis in the blog &rarr;
          </a>
        </div>
      </section>

      {/* ===== SECTION 3: WHY IRON MOM ===== */}
      <section style={{
        background: COLORS.bone,
        padding: '6rem 2rem',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          gap: '5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {/* Left -- big headline */}
          <div style={{ flex: '0 0 45%', minWidth: '260px' }}>
            <h2 style={{
              ...BARLOW_CONDENSED,
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              lineHeight: 0.9,
              color: COLORS.dark,
              textTransform: 'uppercase',
              letterSpacing: '-1px',
            }}>
              <span style={{ display: 'block' }}>MMA IS</span>
              <span style={{ display: 'block' }}>NOT A</span>
              <span style={{ display: 'block', color: COLORS.pink }}>GUY THING.</span>
            </h2>
          </div>

          {/* Right -- body */}
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{
              ...BARLOW,
              fontWeight: 400,
              fontSize: '1.05rem',
              color: '#2D0A2E',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              Women have been watching, training, and competing in MMA since the beginning. This site exists because MMA coverage for women, by women who actually watch, was somehow still a gap.
            </p>
            <p style={{
              ...BARLOW,
              fontWeight: 400,
              fontSize: '1.05rem',
              color: '#2D0A2E',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              We cover the cards. We break down the fights. We talk about Valentina Shevchenko's grappling and Rose Namajunas's boxing IQ and why the strawweight division is criminally underrated.
            </p>
            <p style={{
              ...BARLOW,
              fontWeight: 700,
              fontSize: '1.05rem',
              color: COLORS.plum,
              lineHeight: 1.8,
            }}>
              No hot takes for clicks. No dumbed-down explainers. Just fans who know the sport.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURED FIGHTERS ===== */}
      <section style={{
        background: COLORS.dark,
        padding: '5rem 2rem',
        borderTop: `1px solid rgba(255,45,120,0.15)`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              ...SPACE_MONO,
              fontSize: '0.65rem',
              color: COLORS.pink,
              letterSpacing: '4px',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}>
              THE ONES YOU NEED TO KNOW
            </div>
            <h2 style={{
              ...BARLOW_CONDENSED,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: COLORS.bone,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              FEATURED FIGHTERS
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {FIGHTERS.map((fighter) => (
              <div
                key={fighter.name}
                style={{
                  background: COLORS.plum,
                  clipPath: OCTAGON_CLIP,
                  padding: '5rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.75rem',
                  minHeight: '360px',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: OCTAGON_CLIP,
                  border: `2px solid rgba(255,45,120,0.4)`,
                  pointerEvents: 'none',
                }} />
                <h3 style={{
                  ...BARLOW_CONDENSED,
                  fontSize: '1.4rem',
                  color: COLORS.pink,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: 1.1,
                }}>
                  {fighter.name}
                </h3>
                <div style={{
                  ...SPACE_MONO,
                  fontSize: '0.65rem',
                  color: COLORS.bone,
                  letterSpacing: '2px',
                }}>
                  {fighter.division} &bull; {fighter.record}
                </div>
                <p style={{
                  ...BARLOW,
                  fontWeight: 400,
                  fontSize: '0.85rem',
                  color: 'rgba(245,240,235,0.75)',
                  lineHeight: 1.6,
                  maxWidth: '220px',
                }}>
                  {fighter.why}
                </p>
                <a href="/blog" style={{
                  ...SPACE_MONO,
                  fontSize: '0.65rem',
                  color: COLORS.pink,
                  letterSpacing: '2px',
                  marginTop: '0.5rem',
                  borderBottom: `1px solid ${COLORS.pink}`,
                  paddingBottom: '2px',
                }}>
                  READ MORE &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: BLOG PREVIEW ===== */}
      <section style={{
        background: '#1A061B',
        padding: '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <h2 style={{
              ...BARLOW_CONDENSED,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: COLORS.bone,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              LATEST FROM THE BLOG
            </h2>
            <a href="/blog" style={{
              ...SPACE_MONO,
              fontSize: '0.7rem',
              color: COLORS.pink,
              letterSpacing: '2px',
              borderBottom: `1px solid rgba(255,45,120,0.4)`,
              paddingBottom: '2px',
            }}>
              ALL POSTS &rarr;
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {latestPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: COLORS.plum,
                  borderTop: `3px solid ${COLORS.pink}`,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    ...SPACE_MONO,
                    fontSize: '0.6rem',
                    color: COLORS.pink,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {post.category}
                  </span>
                  <span style={{
                    ...SPACE_MONO,
                    fontSize: '0.6rem',
                    color: COLORS.silver,
                    opacity: 0.7,
                  }}>
                    {post.date}
                  </span>
                </div>
                <h3 style={{
                  ...BARLOW_CONDENSED,
                  fontSize: '1.4rem',
                  color: COLORS.bone,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  lineHeight: 1.1,
                }}>
                  {post.title}
                </h3>
                <p style={{
                  ...BARLOW,
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  color: 'rgba(245,240,235,0.65)',
                  lineHeight: 1.6,
                  flex: 1,
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  ...SPACE_MONO,
                  fontSize: '0.65rem',
                  color: COLORS.pink,
                  letterSpacing: '1px',
                  marginTop: '0.5rem',
                }}>
                  {post.readTime} &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: IRON MOM CTA ===== */}
      <section style={{
        background: COLORS.pink,
        padding: '6rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            ...BARLOW_CONDENSED,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: COLORS.dark,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-1px',
            marginBottom: '1.5rem',
          }}>
            YOU BELONG HERE.
          </h2>
          <p style={{
            ...BARLOW,
            fontWeight: 400,
            fontSize: '1.1rem',
            color: COLORS.plum,
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}>
            Every card. Every fight. Every opinion. This is for you.
          </p>
          <a href="/blog" style={{
            ...BARLOW_CONDENSED,
            fontSize: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            background: COLORS.dark,
            color: COLORS.bone,
            padding: '1rem 2.5rem',
            display: 'inline-block',
          }}>
            JOIN THE CONVERSATION
          </a>
        </div>
      </section>
    </main>
  )
}
