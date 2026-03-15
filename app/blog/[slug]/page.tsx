import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '../data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

function renderContent(content: string) {
  const parts = content.split(/(<affiliate-block>[\s\S]*?<\/affiliate-block>)/g)

  return parts.map((part, i) => {
    if (part.startsWith('<affiliate-block>')) {
      const inner = part.replace(/<\/?affiliate-block>/g, '').trim()
      return (
        <div
          key={i}
          style={{
            background: 'rgba(168,85,247,0.07)',
            border: '1px solid rgba(168,85,247,0.2)',
            padding: '1.75rem 2rem',
            margin: '2.5rem 0',
          }}
        >
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#A855F7',
            marginBottom: '1rem',
          }}>
            Recommended
          </div>
          {inner.split('\n').filter(Boolean).map((line, j) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return (
                <div key={j} style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#F5F0EB', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {line.replace(/\*\*/g, '')}
                </div>
              )
            }
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
            const parts2: React.ReactNode[] = []
            let lastIndex = 0
            let match
            while ((match = linkRegex.exec(line)) !== null) {
              if (match.index > lastIndex) parts2.push(line.slice(lastIndex, match.index))
              parts2.push(
                <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" style={{ color: '#FF2D78', fontWeight: 600, textDecoration: 'underline' }}>
                  {match[1]}
                </a>
              )
              lastIndex = match.index + match[0].length
            }
            if (lastIndex < line.length) parts2.push(line.slice(lastIndex))
            return (
              <p key={j} style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,240,235,0.65)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                {parts2}
              </p>
            )
          })}
        </div>
      )
    }

    const lines = part.split('\n')
    const elements: React.ReactNode[] = []
    let i2 = 0
    while (i2 < lines.length) {
      const line = lines[i2].trim()
      if (!line) { i2++; continue }

      if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
        elements.push(
          <h3 key={`h3-${i2}`} style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.65rem',
            color: '#F5F0EB',
            marginTop: '2.5rem',
            marginBottom: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            {line.replace(/\*\*/g, '')}
          </h3>
        )
      } else {
        const renderLine = (text: string) => {
          const segments: React.ReactNode[] = []
          const boldReg = /\*\*([^*]+)\*\*/g
          let li = 0
          let m
          while ((m = boldReg.exec(text)) !== null) {
            if (m.index > li) segments.push(text.slice(li, m.index))
            segments.push(<strong key={m.index} style={{ color: '#F5F0EB', fontWeight: 700 }}>{m[1]}</strong>)
            li = m.index + m[0].length
          }
          if (li < text.length) segments.push(text.slice(li))
          return segments
        }
        elements.push(
          <p key={`p-${i2}`} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'rgba(245,240,235,0.78)',
            marginBottom: '1.35rem',
          }}>
            {renderLine(line)}
          </p>
        )
      }
      i2++
    }
    return <div key={i}>{elements}</div>
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <main style={{ background: '#0C0610', minHeight: '100vh' }}>

      {/* ARTICLE HEADER */}
      <header style={{
        background: 'linear-gradient(180deg, #1A0E1F 0%, #0C0610 100%)',
        borderBottom: '1px solid rgba(255,45,120,0.1)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/blog" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#A09090', letterSpacing: '1px' }}>
              &larr; All Posts
            </a>
            <span style={{ color: 'rgba(245,240,235,0.15)' }}>|</span>
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
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#F5F0EB',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            letterSpacing: '2px',
            marginBottom: '1.25rem',
          }}>
            {post.title}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            lineHeight: 1.65,
            color: 'rgba(245,240,235,0.6)',
            marginBottom: '1.75rem',
          }}>
            {post.excerpt}
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem',
            color: '#A09090',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,45,120,0.1)',
          }}>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span style={{ color: 'rgba(245,240,235,0.15)' }}>|</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(3rem, 5vw, 4rem) 1.5rem' }}>
        {renderContent(post.content)}
      </article>

      {/* POST NAV */}
      <nav style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 1.5rem clamp(3rem, 5vw, 4rem)',
        borderTop: '1px solid rgba(255,45,120,0.08)',
        paddingTop: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
      }}>
        {prev ? (
          <a href={`/blog/${prev.slug}`} style={{
            background: '#1A0E1F',
            border: '1px solid rgba(255,45,120,0.1)',
            padding: '1.25rem',
            textDecoration: 'none',
          }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', marginBottom: '0.5rem', letterSpacing: '1px' }}>&larr; Previous</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#F5F0EB', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '1px' }}>{prev.title}</div>
          </a>
        ) : <div />}

        {next ? (
          <a href={`/blog/${next.slug}`} style={{
            background: '#1A0E1F',
            border: '1px solid rgba(255,45,120,0.1)',
            padding: '1.25rem',
            textDecoration: 'none',
            textAlign: 'right',
          }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', marginBottom: '0.5rem', letterSpacing: '1px' }}>Next &rarr;</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#F5F0EB', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '1px' }}>{next.title}</div>
          </a>
        ) : <div />}
      </nav>
    </main>
  )
}
