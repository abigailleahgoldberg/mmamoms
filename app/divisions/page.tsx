import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's UFC Divisions Guide | Iron Mom",
  description: "Complete guide to the UFC women's weight classes — strawweight, flyweight, bantamweight, and featherweight. Champions, top contenders, and division history.",
  openGraph: {
    title: "Women's UFC Divisions | Iron Mom",
    description: "UFC women's weight class guide — champions, contenders, and division breakdowns.",
  },
}

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

const divisions = [
  {
    name: 'Strawweight',
    weightLimit: '115 lbs',
    poundage: 115,
    champion: { name: 'Zhang Weili', slug: 'zhang-weili', record: '25-3' },
    topContenders: [
      { name: 'Tatiana Suarez', rank: 1, record: '10-0', note: 'Undefeated elite wrestler' },
      { name: 'Yan Xiaonan', rank: 2, record: '17-4', note: 'Relentless pressure fighter' },
      { name: 'Luana Pinheiro', rank: 3, record: '14-2', note: 'Rising submission specialist' },
      { name: 'Rose Namajunas', rank: 4, record: '12-5', note: 'Two-time former champion' },
      { name: 'Yazmin Jauregui', rank: 5, record: '11-1', note: 'Technical striker on the rise' },
    ],
    description: `The strawweight division is the most technically dense women's division in the UFC. 115 pounds produces fighters who prioritize technique, speed, and ring generalship over raw power, and the result is some of the most watchable MMA in the sport. The division has had five different champions since its creation in 2014, and no one has dominated the way Joanna Jedrzejczyk did for two years — which makes every title fight feel genuinely contested.

Zhang Weili currently sits at the top as the most complete fighter at the weight, combining striking power with legitimate wrestling in a package that the division has found no reliable answer for. The challenger pool is the deepest it has ever been, with Tatiana Suarez's undefeated wrestling resume, Yan Xiaonan's relentless pressure, and several young contenders pushing toward the title conversation.`,
    vibe: `This is the chess match division. These fights play out in layers — feints, distance management, takedown threats opening up strikes. The strawweights are the ones who make MMA look like a pure sport. If you want technical, this is your weight class.`,
    accentColor: '#FF2D78',
    active: true,
  },
  {
    name: 'Flyweight',
    weightLimit: '125 lbs',
    poundage: 125,
    champion: { name: 'Erin Blanchfield', slug: 'erin-blanchfield', record: '12-2' },
    topContenders: [
      { name: 'Manon Fiorot', rank: 1, record: '13-1', note: 'Former kickboxer, elite striker' },
      { name: 'Valentina Shevchenko', rank: 2, record: '24-5', note: 'Former 7-time champion, still elite' },
      { name: 'Alexa Grasso', rank: 3, record: '16-3', note: 'Former champion, dangerous submissions' },
      { name: 'Taila Santos', rank: 4, record: '21-3', note: 'Former title challenger' },
      { name: 'Maycee Barber', rank: 5, record: '14-2', note: 'Explosive fighter on the rise' },
    ],
    description: `The flyweight division was essentially built around Valentina Shevchenko, who dominated it so completely for five years that people forgot it existed independently of her. Seven title defenses. Seven consecutive stops on the mountain. When Alexa Grasso submitted her at UFC 285, the division opened up in ways it had not been open since its creation.

Now Erin Blanchfield holds the title, having submitted multiple former title challengers with a grappling game that makes her genuinely difficult to beat. She represents the new face of the division — younger, submission-focused, and with years of development still ahead of her. The contender pool is legitimately excellent, with Manon Fiorot's elite striking and Valentina Shevchenko's continued presence making every title fight an event.`,
    vibe: `Flyweight is where wrestling meets elite striking. The division is physical in a way that strawweight is not — these are bigger athletes who hit harder — but the technical ceiling is just as high. Shevchenko's presence alone raised the floor of what every other flyweight had to become.`,
    accentColor: '#A855F7',
    active: true,
  },
  {
    name: 'Bantamweight',
    weightLimit: '135 lbs',
    poundage: 135,
    champion: { name: 'Julianna Pena', slug: 'julianna-pena', record: '13-5' },
    topContenders: [
      { name: 'Kayla Harrison', rank: 1, record: '17-1', note: 'Two-time Olympic gold medalist' },
      { name: 'Holly Holm', rank: 2, record: '15-6', note: 'Former champion, elite boxer' },
      { name: 'Mayra Bueno Silva', rank: 3, record: '11-3', note: 'Submission specialist' },
      { name: 'Norma Dumont', rank: 4, record: '8-2', note: 'Technical striker with title aspirations' },
      { name: 'Raquel Pennington', rank: 5, record: '16-9', note: 'Long-tenured contender' },
    ],
    description: `Bantamweight is the original women's UFC division — the one created specifically for Ronda Rousey in 2012 that started everything. Its history is the history of women's MMA in the UFC: Rousey's dominance, the Tate-Holm transition, Nunes's extraordinary reign, the Pena upset, and now a division that is more competitive than it has ever been.

Julianna Pena is the current champion after an up-and-down ride with Amanda Nunes that included the biggest upset in women's MMA history. The division now has depth it lacked in the Nunes era — multiple serious contenders, the arrival of Kayla Harrison from the PFL, and the continued presence of foundational figures like Holly Holm.`,
    vibe: `This is where the history lives. Amanda Nunes, Ronda Rousey, Miesha Tate, Holly Holm — bantamweight has had more iconic moments than any other women's division. It is the main stage. When something historic happens in women's MMA, it usually happens here.`,
    accentColor: '#FF2D78',
    active: true,
  },
  {
    name: 'Featherweight',
    weightLimit: '145 lbs',
    poundage: 145,
    champion: null,
    topContenders: [
      { name: 'Cris Cyborg', rank: 1, record: '26-2', note: 'Former champion; currently in PFL' },
      { name: 'Megan Anderson', rank: 2, record: '11-5', note: 'Former title challenger' },
      { name: 'Felicia Spencer', rank: 3, record: '10-5', note: 'Former title challenger' },
    ],
    description: `The women's featherweight division at 145 pounds has been one of the more troubled weights in UFC history. The problem is roster depth — there are simply not enough elite women who compete at 145 pounds to sustain a healthy division with regular activity.

Cris Cyborg was the UFC featherweight champion from 2017 to 2018, and her reign at the weight is the most significant thing the division has ever produced. When Amanda Nunes stopped her in 51 seconds at UFC 232, the championship picture at featherweight essentially collapsed. The division has been functionally inactive in the UFC since.`,
    vibe: `Featherweight is where Cris Cyborg lived and made everyone else look small. The division exists on paper and in history more than it does on current UFC cards. If it ever gets properly revived, it will be one of the most interesting weight classes in the sport.`,
    accentColor: '#A09090',
    active: false,
  },
]

export default function DivisionsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0C0610' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(180deg, #1A0E1F 0%, #0C0610 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderBottom: '1px solid rgba(255,45,120,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,45,120,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <nav style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#FF2D78', letterSpacing: '3px', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#A09090' }}>Iron Mom</a>
            <span style={{ color: 'rgba(255,45,120,0.3)' }}>/</span>
            <span>Divisions</span>
          </nav>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 7rem)', color: '#F5F0EB', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '3px', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block' }}>THE WEIGHT</span>
            <span style={{ display: 'block', color: '#FF2D78' }}>CLASSES.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(245,240,235,0.6)', maxWidth: '520px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Four women&apos;s divisions. Three active and one barely breathing. Champions, contenders, and the story behind each weight class.
          </p>

          {/* Division quick-nav */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {divisions.map(d => (
              <a
                key={d.name}
                href={`#${d.name.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: d.active ? '#F5F0EB' : '#A09090',
                  padding: '0.55rem 1.25rem',
                  border: `2px solid ${d.active ? 'rgba(255,45,120,0.45)' : 'rgba(160,144,144,0.25)'}`,
                  textDecoration: 'none',
                  opacity: d.active ? 1 : 0.55,
                }}
              >
                {d.poundage} LBS
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {divisions.map((division) => (
          <section
            key={division.name}
            id={division.name.toLowerCase()}
            style={{
              padding: 'clamp(3rem, 6vw, 5rem) 0',
              borderBottom: '1px solid rgba(255,45,120,0.07)',
            }}
          >
            {/* Division header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '110px',
                height: '110px',
                clipPath: OCTAGON_CLIP,
                background: division.active ? 'rgba(255,45,120,0.1)' : 'rgba(160,144,144,0.07)',
                border: `2px solid ${division.active ? 'rgba(255,45,120,0.4)' : 'rgba(160,144,144,0.25)'}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: division.active ? '#FF2D78' : '#A09090', lineHeight: 1, letterSpacing: '-1px' }}>
                  {division.poundage}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.48rem', color: 'rgba(245,240,235,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  lbs
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F5F0EB', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '2px', margin: 0 }}>
                    {division.name}
                  </h2>
                  {!division.active && (
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', background: 'rgba(160,144,144,0.12)', padding: '0.25rem 0.6rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      Inactive
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#A09090', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {division.weightLimit} Weight Limit
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: division.active ? '1fr 280px' : '1fr',
              gap: '3rem',
              alignItems: 'start',
            }} className="division-content-grid">

              {/* Left */}
              <div>
                {division.description.split('\n\n').filter(Boolean).map((para, pi) => (
                  <p key={pi} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    {para}
                  </p>
                ))}

                {/* Contenders */}
                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#FF2D78', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                    Top Contenders
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {division.topContenders.map((c) => (
                      <div
                        key={c.name}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '32px 1fr auto',
                          gap: '1rem',
                          alignItems: 'center',
                          padding: '0.85rem 1.25rem',
                          background: 'rgba(26,14,31,0.6)',
                          borderLeft: '3px solid rgba(255,45,120,0.25)',
                        }}
                      >
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#FF2D78', letterSpacing: '1px' }}>
                          #{c.rank}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#F5F0EB', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            {c.name}
                          </div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'rgba(245,240,235,0.45)', letterSpacing: '1px', marginTop: '0.15rem' }}>
                            {c.note}
                          </div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#A09090', letterSpacing: '1px' }}>
                          {c.record}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Division vibe */}
                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(168,85,247,0.08)', borderLeft: '4px solid #A855F7' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A855F7', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Division Vibe
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(245,240,235,0.78)', lineHeight: 1.7, margin: 0 }}>
                    {division.vibe}
                  </p>
                </div>
              </div>

              {/* Right — champion card */}
              {division.active && (
                <div style={{ position: 'sticky', top: '80px' }}>
                  {division.champion ? (
                    <a
                      href={`/fighters/${division.champion.slug}`}
                      style={{ display: 'block', background: '#1A0E1F', border: '2px solid #FF2D78', padding: '2rem', textDecoration: 'none' }}
                    >
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: '#FF2D78', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Current Champion
                      </div>

                      <div style={{
                        width: '90px',
                        height: '90px',
                        clipPath: OCTAGON_CLIP,
                        background: 'rgba(255,45,120,0.1)',
                        border: '1px solid rgba(255,45,120,0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                      }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#A855F7', opacity: 0.6 }}>
                          {division.poundage}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#FF2D78', textTransform: 'uppercase', letterSpacing: '2px', lineHeight: 1, textAlign: 'center', marginBottom: '0.5rem' }}>
                        {division.champion.name}
                      </h3>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#F5F0EB', letterSpacing: '2px', textAlign: 'center', marginBottom: '1.25rem' }}>
                        {division.champion.record}
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: '#FF2D78', letterSpacing: '1px', textAlign: 'center', borderTop: '1px solid rgba(255,45,120,0.2)', paddingTop: '1rem' }}>
                        Full profile &rarr;
                      </div>
                    </a>
                  ) : (
                    <div style={{ background: 'rgba(26,14,31,0.4)', border: '1px solid rgba(160,144,144,0.15)', padding: '2rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#A09090', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                        No Active Champion
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,235,0.45)', lineHeight: 1.65 }}>
                        The division is currently inactive. No championship fights are scheduled.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .division-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
