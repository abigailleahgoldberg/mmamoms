import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The History of Women\'s MMA | Iron Mom',
  description: 'The complete history of women\'s MMA — from the pioneers of the 1990s through Ronda Rousey, Amanda Nunes, and the modern era. No fluff. Just the real story.',
  openGraph: {
    title: 'History of Women\'s MMA | Iron Mom',
    description: 'The complete history of women\'s mixed martial arts, from the early days through the modern era.',
  },
}

const COLORS = {
  plum: '#2D0A2E',
  pink: '#FF2D78',
  violet: '#7B2FBE',
  bone: '#F5F0EB',
  silver: '#C0C0C8',
  dark: '#0F060F',
}

const OCTAGON_CLIP = 'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'

const sections = [
  {
    id: 'pioneers',
    era: 'Pre-2000',
    title: 'The Pioneers',
    subtitle: 'Before Anyone Was Paying Attention',
    content: `Long before the UFC had a women's division, before there was a mainstream market, before the sport had a name most people recognized, women were competing in mixed martial arts. Japan was the epicenter. Shootfighting organizations in Japan were running women's bouts in the early 1990s in a combat sports culture that was more willing to accept women as fighters than the American market of that era. The fights were raw, the rules were inconsistent, and the infrastructure was essentially nonexistent — but the fights were happening.

Debi Purcell and Ruthie Crump are names that deserve mention. Andrea Lester competed in early American vale tudo events. These women were not doing it for the money, because there was essentially no money. They were doing it because they wanted to compete and this was where competition existed. The sacrifices involved — training in gyms that did not want them, competing without proper protection or medical support, doing it all without the recognition that even modestly successful male fighters of the era received — are easy to underestimate from this distance.

The Japanese women's grappling scene fed into something that would become important later: it established that there was an audience, however small, for women fighting at a serious level. Promotions like Smackgirl, which ran from 2001 to 2009, created a real infrastructure for women's competition in Japan and gave athletes a place to develop professional records. Several fighters who would later become significant in American MMA got their starts in these Japanese organizations.

What this era established was simply that the fighting could be done. The technique, the athleticism, the competitive drive — it was all present. The world just had not noticed yet. The women of the pre-2000 era were fighting in what amounted to a parallel universe, and eventually that universe crashed into the mainstream in ways that changed everything.`,
  },
  {
    id: 'carano',
    era: '2006–2009',
    title: 'Gina Carano and the Breakthrough',
    subtitle: 'The Face That Launched the Mainstream',
    content: `Gina Carano was not the first great women's MMA fighter. She was not the most technically complete. But she was the fighter who made the mainstream look at women's MMA for the first time, and that matters enormously for what came after.

Carano was a Muay Thai specialist with legitimate striking ability, physical gifts that translated visually, and a personality that worked in media contexts. She competed in Elite XC and built a following through exciting fights — she finished most of her opponents before the decision bell — and through a television crossover when she appeared on American Gladiators, which introduced her to audiences who had no previous interest in MMA. She was on ESPN. She was being talked about in mainstream sports media. This was not happening for any other female fighter.

The EliteXC on CBS event in 2008 put women's MMA on network television for the first time. Carano fought Kelly Kobold in a fight that drew millions of viewers who had never watched a women's MMA bout. The production treated it like a real main event, and the audience responded. The fight itself was not a technical classic, but that was beside the point. The moment existed. Women's MMA had been on primetime network television.

Then came Cris Cyborg. Their fight at Strikeforce: Carano vs. Cyborg in August 2009 ended the Carano era with a TKO in the first round and established a hard truth: the sport's growth had produced fighters who were technically beyond what the mainstream had seen, and the star that had been created to represent women's MMA was not the best women's MMA fighter. Carano left the sport. Cyborg remained. The search for a new mainstream face began, and it found one three years later in the most consequential way possible.

What Carano's era left behind was an infrastructure of public attention. The fights that came after had an audience partly because she had proven one existed. The EliteXC CBS broadcast numbers made a business case that promoters could not ignore. Her era opened doors that others would walk through.`,
  },
  {
    id: 'rousey',
    era: '2012–2015',
    title: 'Ronda Rousey Changes Everything',
    subtitle: 'The Armbar Queen and the UFC Revolution',
    content: `In November 2012, Dana White announced that the UFC was creating a women's bantamweight division. Dana White, who had previously said women would never compete in the UFC, made this announcement because of one person: Ronda Rousey. She had won the Strikeforce bantamweight title in the first round with an armbar. She had appeared on The Tonight Show and Sports Illustrated and Entertainment Weekly. She was the most visible female athlete in America, and the business case for bringing her — and the division she defined — into the UFC was impossible to ignore.

The six armbars in sequence became iconic, and they were real. Rousey had a judo background from training with her mother AnnMaria De Mars, a world judo champion herself, and the transition from judo to MMA submissions created a finishing system that the women's bantamweight field of that era had no answer for. Miesha Tate, who had been the Strikeforce champion, tried twice and failed twice. Cat Zingano lasted 14 seconds. Bethe Correia lasted 34 seconds. For three years, the fight was genuinely often over before most people had processed it was happening.

The mainstream attention Rousey generated between 2013 and 2015 was extraordinary by any standard. She was the first woman to headline a UFC pay-per-view. She had roles in major Hollywood films, including The Expendables 3 and Furious 7. She appeared on the covers of men's magazines in ways that complicated the "strong female athlete" narrative but undeniably moved the visibility needle. She was ranked by ESPN as one of the most dominant athletes in sports. Her appearance on Jimmy Fallon, where she demonstrated armbar technique on the host, was shared millions of times.

The infrastructure that female UFC fighters benefit from today was largely built during these years. The pay scale, the promotional machine, the expectation that women could headline cards and sell pay-per-views — all of this was established on the foundation Rousey built. The question of whether women "could" headline major events was answered empirically during her reign, and the answer has never been undone.`,
  },
  {
    id: 'holm',
    era: '2015',
    title: 'The Holly Holm Kick Heard Round the World',
    subtitle: 'UFC 193 and the Upset That Proved Everything',
    content: `November 14, 2015. Melbourne, Australia. Etihad Stadium. 56,214 people in the building — the largest crowd in UFC history at that time. Ronda Rousey entering as a 13-to-1 favorite against Holly Holm, who was 0-0 in the UFC and whose MMA record did not inspire fear in anyone who had not watched her carefully. The stage was set for what most people assumed would be another sub-two-minute armbar finish and another dominant defense of a title that seemed impregnable.

What happened instead was one of the most technically executed upsets in the history of combat sports.

Holly Holm was a world boxing champion before she ever entered an MMA cage. She had footwork, timing, distance management, and the ability to generate power through technique rather than brute force. She had also clearly been given a coaching staff that had studied Rousey's patterns in ways that produced an actual game plan. She moved. She kept her distance. She worked the body kick repeatedly to slow Rousey's forward momentum. She did not let herself get grabbed. When Rousey pressured, Holm countered.

The second round head kick was the product of everything that had come before it. Rousey, behind on the feet and frustrated, came forward one more time. Holly came back with the left high kick to the jaw that will be shown in highlight reels until the sport no longer exists. Rousey fell. The crowd of 56,000 Australian fans made a sound that television microphones could not fully capture. Holly Holm was the bantamweight champion of the world.

The significance of the moment extended beyond the fight itself. The loss did not destroy women's MMA — it proved its legitimacy. Real sports have upsets. Real sports have moments where the unbeatable champion gets beaten. The fact that the division was deep enough to produce a challenger with the tools to dismantle the champion was evidence that women's MMA had developed beyond the Rousey-carried era into something that could sustain itself. The sport was bigger than any one fighter. UFC 193 proved it.`,
  },
  {
    id: 'nunes',
    era: '2016–2023',
    title: 'Amanda Nunes: The GOAT Era',
    subtitle: 'Double Champion, Double Division Clearer, Double Everything',
    content: `Amanda Nunes announced herself to the casual MMA audience by knocking Ronda Rousey out in 48 seconds at UFC 207 in December 2016. Rousey had come back from the Holm loss after more than a year away. The world was watching. The fight lasted less than a minute, and when it was over, the reality of what Amanda Nunes was became impossible to ignore.

She had already beaten Miesha Tate for the bantamweight title earlier in 2016. By the end of 2018, she had also knocked out Cris Cyborg in 51 seconds to win the featherweight title, becoming the first woman in UFC history to hold two titles simultaneously. That accomplishment — clearing out two divisions, beating the signature fighters of an entire era one by one — has no parallel in women's MMA and very little parallel in the sport overall.

Consider the names she beat: Rousey, Tate, Cyborg, Valentina Shevchenko twice, Holly Holm, Raquel Pennington. These are not journeymen. Every single one of them was a significant fighter with credentials. Nunes beat them all, most of them convincingly. The case for her as the greatest women's fighter in history was never really a debate — it was a verdict that accumulated fight by fight until it became self-evident.

She is also a figure of personal significance beyond her record. She came out as gay in 2015, married fellow fighter Nina Ansaroff in 2021, had two children while maintaining her championship status, and carried herself throughout with a dignity that made the sport look better. The visibility she provided for LGBTQ athletes in combat sports, at a time when that was still relatively rare, mattered to people beyond the MMA community.

Her only loss in a decade came to Julianna Pena in December 2021, a stunning upset that she immediately avenged in a dominant rematch. She vacated her titles in 2023 and stepped away from competition, retiring as the most decorated female fighter the sport has ever seen.`,
  },
  {
    id: 'invicta',
    era: '2012–Present',
    title: 'Invicta FC and the Pipeline',
    subtitle: 'The All-Women Promotion That Built the UFC\'s Bench',
    content: `If you want to understand where the UFC's women's talent comes from, you need to understand Invicta Fighting Championships. Founded in 2012 by Shannon Knapp, Invicta FC runs exclusively women's cards and has been the developmental league for women's MMA in a way that no other organization has matched. Nearly every significant women's UFC fighter in the last decade has an Invicta fight on their record.

The timing of Invicta's founding was not coincidental. The UFC created its women's bantamweight division in 2012, and the immediate problem was that there were not enough women with UFC-quality records to fill out a roster. Invicta created that roster. It gave fighters a place to build records, develop skills, and become known to the scouts and matchmakers who would eventually bring them into the UFC.

The Invicta pipeline produced Joanna Jedrzejczyk, Valentina Shevchenko, Claudia Gadelha, Michelle Waterson, and dozens of others who went on to significant UFC careers. The promotion operates with a seriousness of purpose that women's fighting rarely received in earlier eras — professional production, real money, real matchmaking, real development focus.

Shannon Knapp and her team have not received nearly enough credit for what they built. The women's UFC divisions look the way they do because Invicta created a place where talent could develop and flourish. The alternative to Invicta would have been women fighting in regional promotions with limited matchmaking and no visibility, which is what most women did before 2012.

Invicta continues to operate, continues to be the first significant home for many women entering professional MMA, and continues to provide the UFC with a talent pool that the larger promotion could not develop on its own. It is not glamorous work and it has rarely been financially lucrative for the organization. But it has been essential, and the sport owes it an enormous debt.`,
  },
  {
    id: 'modern',
    era: '2020–Present',
    title: 'The Modern Era',
    subtitle: 'Zhang Weili, Shevchenko, Grasso, and the Global Game',
    content: `The modern era of women's MMA is defined by a depth and global diversity that was unimaginable in the Rousey years. Zhang Weili became the first Chinese champion in UFC history in 2019 and has been the most prominent figure in international women's MMA ever since. Her fights — the Jedrzejczyk wars, the Namajunas finishes, the methodical reclamation of the title — have made the strawweight division one of the most consistently compelling in the sport.

Valentina Shevchenko dominated the flyweight division for five years with a technical game that redefined what the weight class was capable of. Her seven defenses produced a body of work that will be studied by coaches and fighters for years. When Alexa Grasso submitted her at UFC 285 in 2023, it was not just an upset — it was the crowning of a Mexican champion and a genuine changing of the guard that announced how far the global talent pool had spread.

The UFC now has women on cards in Abu Dhabi, Singapore, China, Australia, France, and Brazil, and those cards feature genuine local stars. The era of American-dominated women's MMA ended when Joanna Jedrzejczyk started her reign in 2015 and is now fully over. The champions and contenders come from everywhere, and the diversity of the field makes the sport richer.

The development of striking-based flyweights like Manon Fiorot (France) and the grappling revolution led by fighters like Erin Blanchfield represent the next generation. These fighters are more complete than the generation before them, operating in divisions that have been refined by a decade of elite competition. The floors have risen. What it takes to be a title contender in women's MMA in 2025 is substantially more demanding than what it took in 2013.

Erin Blanchfield, Tatiana Suarez, Kayla Harrison, Yan Xiaonan, Luana Pinheiro — these are fighters building careers on a foundation that the previous generation constructed. The sport they compete in is more legitimate, more visible, more financially viable, and more technically sophisticated than it was 15 years ago. The modern era is not a departure from the history — it is the history arriving at its current state.`,
  },
  {
    id: 'pay',
    era: 'Ongoing',
    title: 'The Fight for Equal Pay',
    subtitle: 'What Still Needs to Change',
    content: `The UFC does not publish fighter pay. The partial disclosures that come from state athletic commissions give us incomplete pictures, and the disparity they reveal is real: female fighters at the top of their divisions earn substantially less than male fighters at equivalent positions in their careers. The gap is not small, and it is not closing at the pace the sport's growth would suggest it should.

The structural argument used to defend this gap is that male headliners generate more pay-per-view revenue, and pay follows revenue. There is some truth in this, but the argument conceals more than it reveals. The UFC has invested dramatically more in promoting male fighters than female fighters. The media infrastructure, the social media presence, the post-fight bonuses, the number of times a fighter is put in a high-visibility slot — all of these tilt toward men by design. You cannot market a fighter into obscurity and then point to their lower revenue as justification for lower pay.

Ronda Rousey at her peak generated pay-per-view numbers comparable to some of the top male draws. Amanda Nunes headlined events that performed. The evidence that female fighters cannot sell is simply not there. The evidence that they are systematically given less promotional support, and that this limits their revenue ceiling, is overwhelming to anyone who has paid attention.

The solutions being discussed involve pay transparency requirements (which the UFC strongly resists), union organizing efforts among fighters (which has been gaining traction), and consumer pressure (which requires the audience to push explicitly for equity). All of these face significant institutional resistance from a promotion that benefits financially from the current structure.

What has changed: the floor has risen. Female fighters at the UFC level today earn more than they did in 2013. The minimums have increased. The bonus structure is nominally available to all fighters. The creation of multiple women's divisions created more opportunity.

What has not changed: the ceiling gap. The most successful female fighters do not earn what equivalent male draws earn. Until that changes — through transparency, pressure, or the emergence of female fighters whose popularity makes the disparity impossible to ignore — the conversation is unfinished.`,
  },
  {
    id: 'future',
    era: 'Tomorrow',
    title: "What's Next",
    subtitle: 'Blanchfield, Harrison, and the Generation Coming Up',
    content: `Erin Blanchfield is 26 years old and already submitting former title challengers. Kayla Harrison is a two-time Olympic gold medalist who has more martial arts credential coming into MMA than any woman who has preceded her. Tatiana Suarez, when healthy, is the most dominant wrestler at strawweight. Luana Pinheiro is building a grappling-based game that multiple ranked opponents have found no answer for. The next chapter of women's MMA is being written right now, and the cast is exceptional.

The sport's global expansion is the most significant structural development going forward. Zhang Weili has proven that a Chinese champion can be a global star. Manon Fiorot is building a following in Europe. The UFC's investment in events outside the United States creates local markets for local stars, and the fighters who emerge from those markets are more technically sophisticated than what came before.

The development pipeline has never been healthier. Invicta continues to produce talent. The NWSL and similar women's sports leagues have shown that sustained audience investment in women's sports is possible when the product is good and the marketing is present. Combat sports can follow that template.

Kayla Harrison represents the most interesting individual case in women's MMA for the next several years. She arrived at the UFC with more athletic credential than any woman who has preceded her. The question is whether her striking development will reach a level that makes her viable against the elite women's bantamweights who have spent years in the sport. If it does — and she has shown the athleticism and dedication to suggest it might — she becomes the most credentialed champion the division has ever had.

What the next era will look like is being determined by what these fighters do in the cage over the next five years. The trajectory of the sport since 2012 has been consistent: upward, more technical, broader, deeper. There is no reason to believe that trajectory changes.`,
  },
]

export default function HistoryPage() {
  return (
    <main style={{ minHeight: '100vh', background: COLORS.dark }}>

      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(180deg, ${COLORS.plum} 0%, ${COLORS.dark} 100%)`,
        padding: '5rem 2rem 4rem',
        borderBottom: `1px solid rgba(255,45,120,0.2)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: COLORS.pink,
            letterSpacing: '4px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
            <a href="/" style={{ color: COLORS.silver, textDecoration: 'none' }}>Iron Mom</a>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255,45,120,0.4)' }}>/</span>
            History
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            color: COLORS.bone,
            textTransform: 'uppercase',
            lineHeight: 0.85,
            letterSpacing: '-2px',
            marginBottom: '2rem',
          }}>
            <span style={{ display: 'block' }}>HOW WE</span>
            <span style={{ display: 'block' }}>GOT</span>
            <span style={{ display: 'block', color: COLORS.pink }}>HERE.</span>
          </h1>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '1.1rem',
            color: 'rgba(245,240,235,0.7)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}>
            The complete history of women&apos;s MMA, from the Japanese grappling circuits of the 1990s through the modern era of global champions. No shortcuts. No mythology. Just what actually happened and why it matters.
          </p>

          {/* Section nav */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2.5rem',
          }}>
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  color: COLORS.silver,
                  letterSpacing: '1px',
                  padding: '0.35rem 0.75rem',
                  border: '1px solid rgba(192,192,200,0.3)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {s.era}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE SECTIONS ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              padding: '5rem 0',
              borderBottom: `1px solid rgba(255,45,120,0.1)`,
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}>
              {/* Left — era + octagon */}
              <div style={{ position: 'sticky', top: '80px' }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: COLORS.pink,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  marginBottom: '0.75rem',
                }}>
                  {section.era}
                </div>
                <div style={{
                  width: '80px',
                  height: '80px',
                  clipPath: OCTAGON_CLIP,
                  background: `rgba(255,45,120,${0.08 + i * 0.02})`,
                  border: `1px solid rgba(255,45,120,0.4)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: COLORS.pink,
                    opacity: 0.6,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right — content */}
              <div>
                <h2 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: COLORS.bone,
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  letterSpacing: '-1px',
                  marginBottom: '0.5rem',
                }}>
                  {section.title}
                </h2>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  color: COLORS.violet,
                  letterSpacing: '2px',
                  marginBottom: '2rem',
                  textTransform: 'uppercase',
                }}>
                  {section.subtitle}
                </div>
                {section.content.split('\n\n').filter(Boolean).map((para, pi) => (
                  <p key={pi} style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '1rem',
                    color: pi === 0 ? 'rgba(245,240,235,0.9)' : 'rgba(245,240,235,0.75)',
                    lineHeight: 1.85,
                    marginBottom: '1.5rem',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CLOSING ── */}
      <section style={{
        background: COLORS.pink,
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: COLORS.dark,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-1px',
            marginBottom: '1.5rem',
          }}>
            THE STORY ISN&apos;T OVER.
          </h2>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '1.1rem',
            color: COLORS.plum,
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Every card, every title fight, every upset adds another chapter. Follow along.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/fighters" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              background: COLORS.dark,
              color: COLORS.bone,
              padding: '0.9rem 2rem',
              textDecoration: 'none',
            }}>
              Meet the Fighters
            </a>
            <a href="/events" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: `2px solid ${COLORS.dark}`,
              color: COLORS.dark,
              padding: '0.9rem 2rem',
              textDecoration: 'none',
              background: 'transparent',
            }}>
              Upcoming Events
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
