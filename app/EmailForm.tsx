'use client'

export default function EmailForm() {
  return (
    <form
      action="#"
      style={{
        display: 'flex',
        gap: '0.75rem',
        maxWidth: '460px',
        margin: '0 auto',
        flexWrap: 'wrap',
      }}
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        required
        style={{
          flex: 1,
          minWidth: '200px',
          padding: '0.85rem 1.25rem',
          background: 'rgba(9, 6, 15, 0.8)',
          border: '1px solid rgba(124, 58, 237, 0.35)',
          borderRadius: '6px',
          color: 'var(--cream)',
          fontSize: '0.95rem',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.85rem 1.75rem',
          background: 'var(--purple)',
          color: 'var(--cream)',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 700,
          fontSize: '0.95rem',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        Subscribe
      </button>
    </form>
  )
}
