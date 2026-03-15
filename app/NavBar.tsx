'use client'

import { useState } from 'react'

const NAV_LINKS = [
  { label: 'FIGHTERS', href: '/fighters' },
  { label: 'EVENTS', href: '/events' },
  { label: 'HISTORY', href: '/history' },
  { label: 'DIVISIONS', href: '/divisions' },
  { label: 'BLOG', href: '/blog' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      background: '#0C0610',
      borderBottom: '1px solid rgba(255,45,120,0.18)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          color: '#FF2D78',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}>
          IRON MOM
        </a>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
        }} className="desktop-nav">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.68rem',
                color: '#F5F0EB',
                letterSpacing: '0.08em',
                opacity: 0.8,
                transition: 'opacity 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.opacity = '1'
                ;(e.target as HTMLElement).style.color = '#FF2D78'
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.opacity = '0.8'
                ;(e.target as HTMLElement).style.color = '#F5F0EB'
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: open ? '#FF2D78' : '#F5F0EB',
            transition: 'transform 0.2s, background 0.2s',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: open ? 'transparent' : '#F5F0EB',
            transition: 'background 0.2s',
          }} />
          <span style={{
            display: 'block',
            width: '22px',
            height: '2px',
            background: open ? '#FF2D78' : '#F5F0EB',
            transition: 'transform 0.2s, background 0.2s',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#0C0610',
          borderTop: '1px solid rgba(255,45,120,0.12)',
          padding: '1.25rem 1.5rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }} className="mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                color: '#F5F0EB',
                letterSpacing: '0.1em',
                padding: '0.85rem 0',
                borderBottom: '1px solid rgba(255,45,120,0.08)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}
