import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MMA Moms | Female MMA Fans & Women Who Love the Sport',
    template: '%s | MMA Moms',
  },
  description: 'MMA coverage written for female fans and women who love the sport. Fighter breakdowns, training guides, rankings, and more -- from a perspective that actually gets it.',
  metadataBase: new URL('https://mmamoms.com'),
  openGraph: {
    type: 'website',
    siteName: 'MMA Moms',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          borderBottom: '1px solid rgba(124, 58, 237, 0.3)',
          padding: '0 1.5rem',
          background: 'rgba(9, 6, 15, 0.95)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(8px)',
        }}>
          <nav style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}>
            <a href="/" style={{
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
            }}>
              MMA<span style={{ color: 'var(--purple)' }}>MOMS</span>
            </a>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/blog" style={{
                color: 'rgba(250, 250, 248, 0.75)',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}>
                Blog
              </a>
              <a href="https://ufcfightpass.com" target="_blank" rel="noopener noreferrer" style={{
                background: 'var(--red)',
                color: 'var(--cream)',
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}>
                Watch UFC
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer style={{
          borderTop: '1px solid rgba(124, 58, 237, 0.2)',
          padding: '3rem 1.5rem',
          marginTop: '4rem',
          background: 'rgba(124, 58, 237, 0.04)',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                MMA<span style={{ color: 'var(--purple)' }}>MOMS</span>
              </div>
              <p style={{ color: 'rgba(250, 250, 248, 0.6)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                MMA coverage for female fans and women who love the sport. No condescension. No filler. Just real talk.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--gold)' }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="/blog" style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.9rem' }}>All Posts</a>
                <a href="https://ufcfightpass.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.9rem' }}>UFC Fight Pass</a>
                <a href="https://www.venum.com/?ref=mmamoms-20" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(250, 250, 248, 0.7)', fontSize: '0.9rem' }}>Venum Gear</a>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--gold)' }}>Disclosure</div>
              <p style={{ color: 'rgba(250, 250, 248, 0.5)', fontSize: '0.8rem', lineHeight: '1.7' }}>
                Some links on this site are affiliate links. We may earn a commission if you purchase through them, at no extra cost to you. We only recommend products we actually believe in.
              </p>
            </div>
          </div>
          <div style={{
            maxWidth: '1200px',
            margin: '2rem auto 0',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(250, 250, 248, 0.1)',
            color: 'rgba(250, 250, 248, 0.4)',
            fontSize: '0.8rem',
          }}>
            &copy; {new Date().getFullYear()} MMA Moms. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
