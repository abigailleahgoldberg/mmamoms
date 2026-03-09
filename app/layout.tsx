import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'IRON MOM | MMA Coverage for Women Who Know the Sport',
    template: '%s | IRON MOM',
  },
  description: 'The MMA community for women who don\'t need it explained. Fighter breakdowns, card analysis, picks, and real talk -- from fans who actually watch.',
  metadataBase: new URL('https://mmamoms.com'),
  openGraph: {
    type: 'website',
    siteName: 'IRON MOM',
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
      <body style={{ background: '#0F060F' }}>
        {/* NAV */}
        <header style={{
          background: '#0F060F',
          borderBottom: '2px solid #FF2D78',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <nav style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
          }}>
            <a href="/" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '1.6rem',
              color: '#FF2D78',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}>
              IRON MOM
            </a>
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              {[
                { label: "THIS WEEK'S CARD", href: '/blog' },
                { label: 'FIGHTERS', href: '/blog' },
                { label: 'BLOG', href: '/blog' },
                { label: 'PICKS', href: '/blog' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#F5F0EB',
                    letterSpacing: '0.05em',
                    opacity: 0.85,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer style={{
          background: '#0A040A',
          padding: '3rem 2rem',
          borderTop: '1px solid rgba(255,45,120,0.2)',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '2rem',
            }}>
              <div>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  color: '#FF2D78',
                  letterSpacing: '4px',
                  marginBottom: '0.5rem',
                }}>
                  IRON MOM
                </div>
                <p style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  color: 'rgba(245,240,235,0.6)',
                  maxWidth: '280px',
                  lineHeight: '1.8',
                }}>
                  mmamoms.com -- MMA coverage for women who know the sport.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Fighters', href: '/blog' },
                  { label: "This Week's Card", href: '/blog' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'rgba(245,240,235,0.7)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{
              borderTop: '1px solid rgba(255,45,120,0.15)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: 'rgba(245,240,235,0.35)',
              }}>
                &copy; {new Date().getFullYear()} IRON MOM / mmamoms.com. All rights reserved.
              </p>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: 'rgba(245,240,235,0.25)',
                maxWidth: '400px',
                textAlign: 'right',
              }}>
                Some links are affiliate links. We may earn a commission at no extra cost to you.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
