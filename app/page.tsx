'use client'

import { getAllPosts } from './blog/data'

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

const FIGHTERS = [
  {
    name: 'VALENTINA SHEVCHENKO',
    division: 'Flyweight',
    record: '24-5',
    status: 'Former Champion',
    why: "The most technically precise women's fighter alive. Six flyweight title defenses. Her Muay Thai reads like a dissertation on controlled violence.",
    slug: 'valentina-shevchenko',
  },
  {
    name: 'ZHANG WEILI',
    division: 'Strawweight',
    record: '25-3',
    status: 'Champion',
    why: "Current strawweight champion. Beat Jedrzejczyk twice. Her combinations hit harder than most men's heavyweights and she doesn't stop throwing.",
    slug: 'zhang-weili',
  },
  {
    name: 'AMANDA NUNES',
    division: 'Bantamweight / Featherweight',
    record: '22-5',
    status: 'Legend',
    why: "Two-division champion. Finished Rousey in 48 seconds and Cyborg in one round. The argument for greatest female fighter ever starts and ends here.",
    slug: 'amanda-nunes',
  },
]

const STATS = [
  { value: '13+', label: 'Fighter Profiles' },
  { value: '4', label: "Women's Divisions" },
  { value: '30+', label: 'Years of History' },
  { value: '14+', label: 'In-Depth Posts' },
]

export default function HomePage() {
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 3)

  return (
    <main>
      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0C0610',
        backgroundImage: 'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(168,85,247,0.08) 0%, transparent 65%)',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          alignItems: 'center',
          gap: '4rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }} className="hero-grid">
          {/* Left — text */}
          <div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              color: '#FF2D78',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              opacity: 0.9,
            }}>
              Women&apos;s MMA — No Fluff
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 13vw, 10rem)',
              lineHeight: 0.88,
              letterSpacing: '2px',
              marginBottom: '1.75rem',
              textTransform: 'uppercase',
            }}>
              <span style={{ display: 'block', color: '#F5F0EB' }}>SHE KNOWS</span>
              <span style={{ display: 'block', color: '#F5F0EB' }}>EVERY</span>
              <span style={{ display: 'block', color: '#FF2D78' }}>RECORD.</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'rgba(245,240,235,0.65)',
              maxWidth: '460px',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              fontWeight: 400,
            }}>
              The MMA community for women who don&apos;t need it explained. Fighter breakdowns, card analysis, and real talk from fans who actually watch.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/fighters" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                background: '#FF2D78',
                color: '#0C0610',
                padding: '0.85rem 2.25rem',
                display: 'inline-block',
                lineHeight: 1,
              }}>
                Meet the Fighters
              </a>
              <a href="/events" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                border: '2px solid rgba(255,45,120,0.5)',
                color: '#F5F0EB',
                padding: '0.85rem 2.25rem',
                display: 'inline-block',
                background: 'transparent',
                lineHeight: 1,
              }}>
                This Week&apos;s Card
              </a>
            </div>
          </div>

          {/* Right — octagon */}
          <div style={{ flexShrink: 0 }} className="hero-octagon">
            <div style={{ position: 'relative', width: '340px', height: '340px' }}>
              {/* Glow */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                clipPath: OCTAGON_CLIP,
                background: 'rgba(255,45,120,0.06)',
                filter: 'blur(30px)',
              }} />
              {/* Main octagon */}
              <div style={{
                width: '340px',
                height: '340px',
                clipPath: OCTAGON_CLIP,
                background: '#1A0E1F',
                border: '2px solid rgba(255,45,120,0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,45,120,0.04) 0px, rgba(255,45,120,0.04) 1px, transparent 1px, transparent 20px)',
                  pointerEvents: 'none',
                }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '7.5rem',
                  color: '#A855F7',
                  opacity: 0.18,
                  lineHeight: 1,
                  letterSpacing: '4px',
                  userSelect: 'none',
                }}>
                  MMA
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  color: '#FF2D78',
                  letterSpacing: '5px',
                  marginTop: '0.5rem',
                  opacity: 0.8,
                }}>
                  SINCE UFC 1
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section style={{
        background: '#FF2D78',
        padding: '2rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }} className="stats-grid">
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: '#0C0610',
                letterSpacing: '2px',
                lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: 'rgba(12,6,16,0.65)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '0.35rem',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED FIGHTERS ===== */}
      <section style={{
        background: '#0C0610',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderTop: '1px solid rgba(255,45,120,0.08)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              color: '#FF2D78',
              letterSpacing: '4px',
              marginBottom: '0.6rem',
              textTransform: 'uppercase',
            }}>
              The Ones You Need to Know
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#F5F0EB',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              lineHeight: 1,
            }}>
              FIGHTER SPOTLIGHT
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {FIGHTERS.map((fighter) => (
              <a
                key={fighter.name}
                href={`/fighters/${fighter.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  background: '#1A0E1F',
                  clipPath: OCTAGON_CLIP,
                  padding: '4.5rem 2.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.65rem',
                  minHeight: '340px',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'transform 0.2s',
                }}>
                  {/* Border overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    clipPath: OCTAGON_CLIP,
                    border: '2px solid rgba(255,45,120,0.3)',
                    pointerEvents: 'none',
                  }} />

                  {/* Status badge */}
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.55rem',
                    color: fighter.status === 'Champion' ? '#0C0610' : '#FF2D78',
                    background: fighter.status === 'Champion' ? '#FF2D78' : 'rgba(255,45,120,0.12)',
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {fighter.status}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: '#FF2D78',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    lineHeight: 1.05,
                  }}>
                    {fighter.name}
                  </h3>

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: '#F5F0EB',
                    letterSpacing: '2px',
                    opacity: 0.7,
                  }}>
                    {fighter.division} &bull; {fighter.record}
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'rgba(245,240,235,0.65)',
                    lineHeight: 1.65,
                    maxWidth: '200px',
                  }}>
                    {fighter.why}
                  </p>

                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: '#FF2D78',
                    letterSpacing: '2px',
                    marginTop: '0.25rem',
                    borderBottom: '1px solid rgba(255,45,120,0.5)',
                    paddingBottom: '2px',
                  }}>
                    Full Profile &rarr;
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="/fighters" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '3px',
              color: '#F5F0EB',
              border: '1px solid rgba(245,240,235,0.2)',
              padding: '0.75rem 2rem',
              display: 'inline-block',
              textTransform: 'uppercase',
            }}>
              All Fighters &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY IRON MOM ===== */}
      <section style={{
        background: '#F5F0EB',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)',
          gap: '5rem',
          alignItems: 'center',
        }} className="about-grid">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 0.88,
              color: '#0C0610',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              <span style={{ display: 'block' }}>MMA IS</span>
              <span style={{ display: 'block' }}>NOT A</span>
              <span style={{ display: 'block', color: '#FF2D78' }}>GUY THING.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#1A0E1F',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              Women have been watching, training, and competing in MMA since the beginning. This site exists because MMA coverage for women, by women who actually watch, was somehow still a gap.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#1A0E1F',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}>
              We cover the cards. We break down the fights. We talk about Valentina&apos;s grappling, Rose Namajunas&apos;s boxing IQ, and why the strawweight division is criminally underrated.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#0C0610',
              lineHeight: 1.85,
            }}>
              No hot takes for clicks. No dumbed-down explainers. Just fans who know the sport.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LATEST BLOG ===== */}
      <section style={{
        background: '#0C0610',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderTop: '1px solid rgba(255,45,120,0.08)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                color: '#FF2D78',
                letterSpacing: '4px',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
                Latest
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#F5F0EB',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                lineHeight: 1,
              }}>
                FROM THE BLOG
              </h2>
            </div>
            <a href="/blog" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.68rem',
              color: '#FF2D78',
              letterSpacing: '2px',
              borderBottom: '1px solid rgba(255,45,120,0.4)',
              paddingBottom: '2px',
            }}>
              All Posts &rarr;
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {latestPosts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: '#1A0E1F',
                  borderTop: `3px solid ${i === 0 ? '#FF2D78' : 'rgba(255,45,120,0.25)'}`,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: '#FF2D78',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}>
                    {post.category}
                  </span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: '#A09090',
                  }}>
                    {post.date}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.55rem',
                  color: '#F5F0EB',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: 1.05,
                }}>
                  {post.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'rgba(245,240,235,0.58)',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.62rem',
                  color: '#FF2D78',
                  letterSpacing: '1px',
                  marginTop: '0.25rem',
                }}>
                  {post.readTime} &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section style={{
        background: '#1A0E1F',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderTop: '1px solid rgba(255,45,120,0.08)',
        borderBottom: '1px solid rgba(255,45,120,0.08)',
      }}>
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem',
            color: '#FF2D78',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Stay In It
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#F5F0EB',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}>
            FIGHT WEEK IN YOUR INBOX
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#A09090',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Card breakdowns, fighter previews, and picks before every major event. No spam, just MMA.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                background: 'rgba(12,6,16,0.6)',
                border: '1px solid rgba(255,45,120,0.3)',
                color: '#F5F0EB',
                padding: '0.85rem 1.25rem',
                flex: '1 1 220px',
                minWidth: '0',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                background: '#FF2D78',
                color: '#0C0610',
                border: 'none',
                padding: '0.85rem 1.75rem',
                cursor: 'pointer',
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section style={{
        background: '#FF2D78',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            color: '#0C0610',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            letterSpacing: '2px',
            marginBottom: '1.25rem',
          }}>
            YOU BELONG HERE.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'rgba(12,6,16,0.7)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}>
            Every card. Every fight. Every opinion. This is for you.
          </p>
          <a href="/blog" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            background: '#0C0610',
            color: '#F5F0EB',
            padding: '1rem 2.75rem',
            display: 'inline-block',
            lineHeight: 1,
          }}>
            Join the Conversation
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-octagon {
            display: none !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  )
}
