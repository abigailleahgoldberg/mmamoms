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
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(217, 119, 6, 0.06) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.25)',
            borderRadius: '12px',
            padding: '1.75rem 2rem',
            margin: '2.5rem 0',
          }}
        >
          <div style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            Recommended
          </div>
          {inner.split('\n').filter(Boolean).map((line, j) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return (
                <div key={j} style={{ fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {line.replace(/\*\*/g, '')}
                </div>
              )
            }
            // Parse markdown links like [text](url)
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
            const parts2: React.ReactNode[] = []
            let lastIndex = 0
            let match

            while ((match = linkRegex.exec(line)) !== null) {
              if (match.index > lastIndex) {
                parts2.push(line.slice(lastIndex, match.index))
              }
              parts2.push(
                <a
                  key={match.index}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--purple)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  {match[1]}
                </a>
              )
              lastIndex = match.index + match[0].length
            }
            if (lastIndex < line.length) {
              parts2.push(line.slice(lastIndex))
            }

            return (
              <p key={j} style={{ fontSize: '0.9rem', color: 'rgba(250, 250, 248, 0.7)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                {parts2}
              </p>
            )
          })}
        </div>
      )
    }

    // Regular content: parse markdown-like headings, bold, paragraphs
    const lines = part.split('\n')
    const elements: React.ReactNode[] = []
    let i2 = 0
    while (i2 < lines.length) {
      const line = lines[i2].trim()
      if (!line) { i2++; continue }

      if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
        elements.push(
          <h3 key={`h3-${i2}`} style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--cream)',
            marginTop: '2rem',
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}>
            {line.replace(/\*\*/g, '')}
          </h3>
        )
      } else {
        // Inline bold parsing
        const renderLine = (text: string) => {
          const segments: React.ReactNode[] = []
          const boldReg = /\*\*([^*]+)\*\*/g
          let li = 0
          let m
          while ((m = boldReg.exec(text)) !== null) {
            if (m.index > li) segments.push(text.slice(li, m.index))
            segments.push(<strong key={m.index}>{m[1]}</strong>)
            li = m.index + m[0].length
          }
          if (li < text.length) segments.push(text.slice(li))
          return segments
        }

        elements.push(
          <p key={`p-${i2}`} style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'rgba(250, 250, 248, 0.82)',
            marginBottom: '1.25rem',
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
    <main>
      {/* Article Header */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
        padding: '4rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/blog" style={{
              fontSize: '0.8rem',
              color: 'rgba(250, 250, 248, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}>
              &larr; All Posts
            </a>
            <span style={{ color: 'rgba(250, 250, 248, 0.2)', fontSize: '0.8rem' }}>|</span>
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
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--cream)',
            marginBottom: '1.25rem',
          }}>
            {post.title}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'rgba(250, 250, 248, 0.65)',
            marginBottom: '1.75rem',
          }}>
            {post.excerpt}
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'rgba(250, 250, 248, 0.45)',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(250, 250, 248, 0.08)',
          }}>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ color: 'rgba(250, 250, 248, 0.2)' }}>|</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
      }}>
        {renderContent(post.content)}
      </article>

      {/* Post navigation */}
      <nav style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
        borderTop: '1px solid rgba(250, 250, 248, 0.08)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
      }}>
        {prev ? (
          <a href={`/blog/${prev.slug}`} style={{
            background: 'rgba(250, 250, 248, 0.03)',
            border: '1px solid rgba(250, 250, 248, 0.08)',
            borderRadius: '8px',
            padding: '1.25rem',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(250, 250, 248, 0.4)', marginBottom: '0.5rem' }}>&larr; Previous</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.4 }}>{prev.title}</div>
          </a>
        ) : <div />}

        {next ? (
          <a href={`/blog/${next.slug}`} style={{
            background: 'rgba(250, 250, 248, 0.03)',
            border: '1px solid rgba(250, 250, 248, 0.08)',
            borderRadius: '8px',
            padding: '1.25rem',
            textAlign: 'right',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(250, 250, 248, 0.4)', marginBottom: '0.5rem' }}>Next &rarr;</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.4 }}>{next.title}</div>
          </a>
        ) : <div />}
      </nav>
    </main>
  )
}
