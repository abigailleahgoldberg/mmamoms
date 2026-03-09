import type { Metadata } from 'next'
import { getFeaturedPosts } from './blog/data'
import EmailForm from './EmailForm'

export const metadata: Metadata = {
  title: 'MMA Moms | MMA Is For Everyone. Especially Us.',
  description: 'The MMA site for female fans and women who love the sport. No condescension. No filler. Coverage that actually gets it.',
}

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 1.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--dark) 0%, #1a0a2e 50%, #0f0520 100%)',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.08) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(124,58,237,0.03) 60px, rgba(124,58,237,0.03) 61px)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(124, 58, 237, 0.15)',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            borderRadius: '100px',
            padding: '0.35rem 1rem',
            marginBottom: '2rem',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--red)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(250, 250, 248, 0.8)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Women&apos;s MMA Coverage
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: 'var(--cream)',
          }}>
            MMA Is For{' '}
            <span style={{ color: 'var(--purple)' }}>Everyone.</span>
            <br />
            <span style={{ color: 'var(--gold)' }}>Especially Us.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
            lineHeight: 1.7,
            color: 'rgba(250, 250, 248, 0.75)',
            maxWidth: '600px',
            marginBottom: '2.5rem',
          }}>
            Female MMA fans have been here from the start. We watched every fight, read every breakdown, knew every belt holder. We just never had a site that wrote for us. Now we do.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/blog" style={{
              background: 'var(--purple)',
              color: 'var(--cream)',
              padding: '0.85rem 2rem',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.01em',
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}>
              Read the Blog
            </a>
            <a href="https://ufcfightpass.com" target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent',
              color: 'var(--cream)',
              padding: '0.85rem 2rem',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '1rem',
              border: '1px solid rgba(250, 250, 248, 0.25)',
              display: 'inline-block',
            }}>
              Watch UFC Fight Pass
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap',
          }}>
            {[
              { number: '4', label: 'Women\'s Divisions' },
              { number: '15+', label: 'In-Depth Articles' },
              { number: '100%', label: 'For Female Fans' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--gold)' }}>{stat.number}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(250, 250, 248, 0.5)', marginTop: '0.2rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section style={{
        padding: '5rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--purple)',
            marginBottom: '0.75rem',
          }}>
            Featured
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
          }}>
            Start Reading
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {featuredPosts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                background: i === 0
                  ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(9, 6, 15, 0.8) 100%)'
                  : 'rgba(250, 250, 248, 0.04)',
                border: `1px solid ${i === 0 ? 'rgba(124, 58, 237, 0.4)' : 'rgba(250, 250, 248, 0.08)'}`,
                borderRadius: '12px',
                padding: '2rem',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: i === 0 ? 'var(--gold)' : 'var(--purple)',
                  background: i === 0 ? 'rgba(217, 119, 6, 0.12)' : 'rgba(124, 58, 237, 0.12)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '100px',
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(250, 250, 248, 0.4)' }}>
                  {post.readTime}
                </span>
              </div>

              <h3 style={{
                fontSize: i === 0 ? '1.3rem' : '1.1rem',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'var(--cream)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}>
                {post.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'rgba(250, 250, 248, 0.6)',
                marginBottom: '1.5rem',
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'rgba(250, 250, 248, 0.4)',
                }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: i === 0 ? 'var(--gold)' : 'var(--purple)',
                }}>
                  Read more &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/blog" style={{
            display: 'inline-block',
            padding: '0.85rem 2.5rem',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            borderRadius: '6px',
            color: 'var(--purple)',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'background 0.2s',
          }}>
            View All 15 Posts
          </a>
        </div>
      </section>

      {/* Why MMAMOMS section */}
      <section style={{
        background: 'rgba(124, 58, 237, 0.05)',
        borderTop: '1px solid rgba(124, 58, 237, 0.1)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
        padding: '5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '0.75rem',
              }}>
                Our Mission
              </div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: '1.25rem',
              }}>
                Built for female fans who know the sport
              </h2>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'rgba(250, 250, 248, 0.7)',
              }}>
                Female MMA fans have been underserved and talked down to for years. You already know the weight classes, the fighters, the history. You do not need a primer. You need coverage that matches your level of knowledge and actually respects why you love this sport.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Fighter Coverage That Goes Deep', desc: 'Not just highlights. Real analysis of technique, career arcs, and what makes elite female fighters elite.' },
                { title: 'No Condescension', desc: 'You already know the sport. We write like you do.' },
                { title: 'Training Content That Respects You', desc: 'Whether you train or just watch, we cover what actually matters.' },
                { title: 'Women\'s MMA as a Main Event', desc: 'Not a sidebar. Not a feature piece twice a year. This is what we cover.' },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'rgba(9, 6, 15, 0.6)',
                  border: '1px solid rgba(250, 250, 248, 0.08)',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--purple)',
                    marginTop: '0.4rem',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--cream)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(250, 250, 248, 0.55)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section style={{
        padding: '5rem 1.5rem',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(217, 119, 6, 0.06) 100%)',
          border: '1px solid rgba(124, 58, 237, 0.25)',
          borderRadius: '16px',
          padding: '3.5rem 2.5rem',
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--purple)',
            marginBottom: '1rem',
          }}>
            Newsletter
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            marginBottom: '1rem',
          }}>
            Fight week coverage, direct.
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(250, 250, 248, 0.65)',
            marginBottom: '2rem',
          }}>
            Event previews, fight breakdowns, and new posts from MMA Moms. No spam, no nonsense. Just the coverage you actually want.
          </p>

          <EmailForm />

          <p style={{
            fontSize: '0.78rem',
            color: 'rgba(250, 250, 248, 0.35)',
            marginTop: '1rem',
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Affiliates Banner */}
      <section style={{
        padding: '3rem 1.5rem',
        borderTop: '1px solid rgba(250, 250, 248, 0.06)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <a
            href="https://ufcfightpass.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(220, 38, 38, 0.08)',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: '10px',
              padding: '1.5rem 2rem',
              flex: '1',
              minWidth: '260px',
              maxWidth: '420px',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--red)', marginBottom: '0.5rem' }}>UFC Fight Pass</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(250, 250, 248, 0.6)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Every UFC fight, live and on-demand. The full archive of women&apos;s MMA history.
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--red)' }}>Watch Now &rarr;</span>
          </a>

          <a
            href="https://www.venum.com/?ref=mmamoms-20"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(217, 119, 6, 0.08)',
              border: '1px solid rgba(217, 119, 6, 0.25)',
              borderRadius: '10px',
              padding: '1.5rem 2rem',
              flex: '1',
              minWidth: '260px',
              maxWidth: '420px',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>Venum Gear</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(250, 250, 248, 0.6)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Official UFC gear partner. Gloves, shorts, training equipment built for serious athletes.
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold)' }}>Shop Venum &rarr;</span>
          </a>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </main>
  )
}
