import type { Metadata } from 'next'
import { getAllPosts } from './data'

export const metadata: Metadata = {
  title: 'Blog | Iron Mom',
  description: "All posts from Iron Mom: fighter breakdowns, rankings, training guides, and history. Women's MMA coverage that actually gets it.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

  return (
    <main style={{ minHeight: '100vh', background: '#0C0610' }}>

      {/* HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #1A0E1F 0%, #0C0610 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderBottom: '1px solid rgba(255,45,120,0.1)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <nav style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#FF2D78', letterSpacing: '3px', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#A09090' }}>Iron Mom</a>
            <span style={{ color: 'rgba(255,45,120,0.3)' }}>/</span>
            <span>Blog</span>
          </nav>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            All Posts
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#F5F0EB', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '3px', marginBottom: '1rem' }}>
            THE BLOG
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,240,235,0.55)', maxWidth: '480px', lineHeight: 1.75 }}>
            Fighter breakdowns, rankings, training guides, history, and everything else in women&apos;s MMA. {posts.length} posts and counting.
          </p>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <div style={{
        borderBottom: '1px solid rgba(255,45,120,0.08)',
        padding: '1rem 1.5rem',
        overflowX: 'auto',
        background: '#0C0610',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          gap: '0.5rem',
          whiteSpace: 'nowrap',
        }}>
          {categories.map((cat, i) => (
            <span
              key={cat}
              style={{
                fontFamily: "'Space Mono', monospace",
                padding: '0.3rem 0.9rem',
                fontSize: '0.6rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                background: i === 0 ? '#FF2D78' : 'rgba(245,240,235,0.04)',
                color: i === 0 ? '#0C0610' : 'rgba(245,240,235,0.5)',
                cursor: 'pointer',
                border: i === 0 ? 'none' : '1px solid rgba(245,240,235,0.08)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* POST GRID */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3rem, 5vw, 4rem) 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#1A0E1F',
                borderTop: `3px solid ${i === 0 ? '#FF2D78' : 'rgba(255,45,120,0.2)'}`,
                padding: '1.75rem',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.58rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#FF2D78',
                  background: 'rgba(255,45,120,0.1)',
                  padding: '0.2rem 0.6rem',
                }}>
                  {post.category}
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#A09090' }}>
                  {post.readTime}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: '#F5F0EB',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                lineHeight: 1.05,
                marginBottom: '0.75rem',
              }}>
                {post.title}
              </h2>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'rgba(245,240,235,0.55)',
                marginBottom: '1.5rem',
                flex: 1,
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
                borderTop: '1px solid rgba(255,45,120,0.08)',
                paddingTop: '1rem',
              }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#FF2D78', letterSpacing: '1px' }}>
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
