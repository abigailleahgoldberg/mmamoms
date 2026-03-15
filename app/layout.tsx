import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IRON MOM | MMA Coverage for Women Who Know the Sport',
    template: '%s | IRON MOM',
  },
  description: "The MMA community for women who don't need it explained. Fighter breakdowns, card analysis, picks, and real talk -- from fans who actually watch.",
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

const FOOTER_LINKS = [
  {
    heading: 'Coverage',
    links: [
      { label: 'Fighters', href: '/fighters' },
      { label: 'Events', href: '/events' },
      { label: 'Divisions', href: '/divisions' },
      { label: 'History', href: '/history' },
    ],
  },
  {
    heading: 'Blog',
    links: [
      { label: 'All Posts', href: '/blog' },
      { label: 'Fighter Breakdowns', href: '/blog' },
      { label: 'Card Analysis', href: '/blog' },
      { label: 'Rankings', href: '/blog' },
    ],
  },
  {
    heading: 'Our Network',
    links: [
      { label: 'MMADads.com', href: 'https://mmadads.com' },
      { label: 'TheVoiceOfCash.com', href: 'https://thevoiceofcash.com' },
      { label: 'WeBearish.com', href: 'https://webearish.com' },
      { label: 'AISkillsAgents.com', href: 'https://aiskillsagents.com' },
      { label: 'Full Network →', href: 'https://thevoiceofcash.com/network' },
    ],
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <NavBar />

        {children}

        {/* FOOTER */}
        <footer style={{
          background: '#070409',
          padding: '4rem 1.5rem 2.5rem',
          borderTop: '1px solid rgba(255,45,120,0.12)',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Top row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem',
            }}>
              {/* Brand col */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: '#FF2D78',
                  letterSpacing: '6px',
                  marginBottom: '0.75rem',
                }}>
                  IRON MOM
                </div>
                <p style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.68rem',
                  color: 'rgba(245,240,235,0.5)',
                  lineHeight: 1.9,
                  maxWidth: '240px',
                }}>
                  mmamoms.com -- MMA coverage for women who know the sport.
                </p>
              </div>

              {/* Link cols */}
              {FOOTER_LINKS.map(col => (
                <div key={col.heading}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.6rem',
                    color: '#FF2D78',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}>
                    {col.heading}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {col.links.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'rgba(245,240,235,0.6)',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: '1px solid rgba(255,45,120,0.1)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: 'rgba(245,240,235,0.3)',
              }}>
                &copy; {new Date().getFullYear()} IRON MOM / mmamoms.com. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="/privacy" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'rgba(245,240,235,0.3)' }}>Privacy</a>
                <a href="/terms" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: 'rgba(245,240,235,0.3)' }}>Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
