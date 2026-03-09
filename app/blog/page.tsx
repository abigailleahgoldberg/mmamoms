import type { Metadata } from 'next'
import { getAllPosts } from './data'

export const metadata: Metadata = {
  title: 'Blog | MMA Moms',
  description: 'All posts from MMA Moms: fighter breakdowns, rankings, training guides, and history. Women\'s MMA coverage that actually gets it.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
        padding: '4rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--purple)',
            marginBottom: '0.75rem',
          }}>
            All Posts
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: 'var(--cream)',
            marginBottom: '1rem',
          }}>
            The Blog
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(250, 250, 248, 0.6)',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Fighter breakdowns, rankings, training guides, history, and everything else in women&apos;s MMA. {posts.length} posts and counting.
          </p>
        </div>
      </section>

      {/* Category chips */}
      <div style={{
        borderBottom: '1px solid rgba(250, 250, 248, 0.06)',
        padding: '1rem 1.5rem',
        overflowX: 'auto',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '0.5rem',
          whiteSpace: 'nowrap',
        }}>
          {categories.map((cat, i) => (
            <span
              key={cat}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: i === 0 ? 'var(--purple)' : 'rgba(250, 250, 248, 0.06)',
                color: i === 0 ? 'var(--cream)' : 'rgba(250, 250, 248, 0.6)',
                cursor: 'pointer',
                border: i === 0 ? 'none' : '1px solid rgba(250, 250, 248, 0.1)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Post Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {posts.map(post => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                background: 'rgba(250, 250, 248, 0.03)',
                border: '1px solid rgba(250, 250, 248, 0.08)',
                borderRadius: '12px',
                padding: '1.75rem',
                transition: 'border-color 0.2s, background 0.2s',
                cursor: 'pointer',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--purple)',
                  background: 'rgba(124, 58, 237, 0.1)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '100px',
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(250, 250, 248, 0.35)' }}>
                  {post.readTime}
                </span>
              </div>

              <h2 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                lineHeight: 1.35,
                color: 'var(--cream)',
                marginBottom: '0.65rem',
                letterSpacing: '-0.01em',
              }}>
                {post.title}
              </h2>

              <p style={{
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: 'rgba(250, 250, 248, 0.55)',
                marginBottom: '1.5rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(250, 250, 248, 0.06)',
                paddingTop: '1rem',
              }}>
                <span style={{ fontSize: '0.78rem', color: 'rgba(250, 250, 248, 0.35)' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--purple)' }}>
                  Read &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
