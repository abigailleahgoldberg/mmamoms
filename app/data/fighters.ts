export interface Fighter {
  slug: string
  name: string
  nickname?: string
  weightClass: string
  record: string
  hometown: string
  age: number
  height: string
  reach: string
  stance: string
  fightingStyle: string
  bio: string
  careerHighlights: string[]
  signatureMoves: string[]
  biggestWins: string[]
  momTake: string
  isChampion: boolean
  isRetired?: boolean
}

export const fighters: Fighter[] = [
  {
    slug: 'amanda-nunes',
    name: 'Amanda Nunes',
    nickname: 'The Lioness',
    weightClass: 'Bantamweight / Featherweight',
    record: '22-5',
    hometown: 'Salvador, Bahia, Brazil',
    age: 37,
    height: "5'8\"",
    reach: '69"',
    stance: 'Orthodox',
    fightingStyle: 'Striking / Brazilian Jiu-Jitsu',
    bio: `Amanda Nunes is the greatest female MMA fighter who has ever competed. Full stop. Born in Salvador, Brazil, she grew up training in Brazilian jiu-jitsu and boxing, developing the multi-dimensional game that would eventually dismantle an entire generation of women's champions. She signed with the UFC in 2013 and by 2016 had already become bantamweight champion, beginning one of the most dominant title reigns in the history of the sport.

What separates Nunes from the conversation is not just the belt count — though holding two simultaneously was unprecedented — it is the names she beat. She knocked out Ronda Rousey in 48 seconds. She stopped Cris Cyborg, the most physically imposing fighter in featherweight history, in 51 seconds. She submitted Miesha Tate to win her first title and defended it against Holly Holm, Valentina Shevchenko twice, Raquel Pennington, and many others. Her only notable loss in the span of a decade came in the first Julianna Pena fight, which she immediately avenged in a dominant rematch.

Nunes retired from competition in 2023 after her second Pena fight, stepping away at the top of the sport as its most decorated athlete. She is openly gay, married to fellow fighter Nina Ansaroff, and the mother of two children. She proved that you can be fully yourself, build a family, and still be the best on the planet.`,
    careerHighlights: [
      'First woman to simultaneously hold two UFC titles (bantamweight and featherweight)',
      'Knocked out Ronda Rousey in 48 seconds at UFC 207 (2016)',
      'Knocked out Cris Cyborg in 51 seconds at UFC 232 (2018)',
      '12 combined title defenses across two weight classes',
      'Inductee: UFC Hall of Fame',
      'Longest combined women\'s championship reign in UFC history',
    ],
    signatureMoves: [
      'Right hand overhand',
      'Left body kick',
      'Rear naked choke from back mount',
      'Triangle choke from guard',
      'Ground and pound in top position',
    ],
    biggestWins: [
      'Ronda Rousey — KO R1 (2016)',
      'Cris Cyborg — KO R1 (2018)',
      'Valentina Shevchenko — Dec (2017)',
      'Miesha Tate — RNC R5 (2016)',
      'Holly Holm — Dec (2019)',
      'Julianna Pena — Dec (2022)',
    ],
    momTake: 'Amanda Nunes is the mom at school pickup who you just KNOW could handle any situation. Calm, confident, zero energy wasted. She has never once needed to raise her voice because everyone already knows.',
    isChampion: false,
    isRetired: true,
  },
  {
    slug: 'valentina-shevchenko',
    name: 'Valentina Shevchenko',
    nickname: 'Bullet',
    weightClass: 'Flyweight',
    record: '24-5',
    hometown: 'Bishkek, Kyrgyzstan (raised Lima, Peru)',
    age: 37,
    height: "5'4\"",
    reach: '64.5"',
    stance: 'Southpaw',
    fightingStyle: 'Muay Thai / Wrestling / BJJ',
    bio: `Valentina Shevchenko is the most technically complete women's fighter in the history of MMA. Born in Kyrgyzstan and raised in Peru, she trained Muay Thai from childhood and became a world champion in that discipline before ever setting foot in a mixed martial arts cage. Her brother Vladislav is also a professional fighter. Her entire life has been built around martial arts, and it shows in every single thing she does in competition.

She held the UFC flyweight championship for five years, defending it seven times against a string of challengers who found her essentially unsolvable. Her teep, her timing, her head movement, her clinch work, and her ability to neutralize opponent strengths while systematically exploiting weaknesses — it reads like a masterclass in every fight she takes. She lost the title to Alexa Grasso in a shocking submission finish at UFC 285 in 2023, and the immediate rematch was a controversial draw. She has remained one of the most active and relevant fighters in the weight class.

Two losses to Amanda Nunes bookend her career at the top, and they remain the clearest evidence that even elite technique has an answer — in this case, extreme power from a larger frame. Against everyone else, Shevchenko has been close to perfect.`,
    careerHighlights: [
      'UFC Flyweight Champion, held title 2018-2023',
      'Seven flyweight title defenses — a division record',
      'Multiple-time Muay Thai world champion before entering MMA',
      'Ranked #1 women\'s pound-for-pound multiple years',
      'Defeated Joanna Jedrzejczyk, Jessica Eye, Jennifer Maia, and more',
    ],
    signatureMoves: [
      'Teep (push kick) to control distance',
      'Spinning back kick to the body',
      'Left head kick off jab feint',
      'Elbow in the clinch',
      'Guillotine choke from top position',
    ],
    biggestWins: [
      'Joanna Jedrzejczyk — KO R1 (2022)',
      'Jennifer Maia — Dec (2020)',
      'Jessica Eye — KO R1 (2019)',
      'Priscila Cachoeira — TKO R1 (2018)',
      'Liz Carmouche — Dec (2016)',
    ],
    momTake: 'Valentina is the mom who shows up to every parent meeting having already read the entire handbook, prepared five questions, and is somehow also dressed immaculately. You love her but you are also a little scared of her.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'zhang-weili',
    name: 'Zhang Weili',
    nickname: 'Magnum',
    weightClass: 'Strawweight',
    record: '25-3',
    hometown: 'Hebei, China',
    age: 36,
    height: "5'4\"",
    reach: '63"',
    stance: 'Orthodox',
    fightingStyle: 'Kickboxing / Wrestling',
    bio: `Zhang Weili became the first Chinese champion in UFC history when she stopped Jessica Andrade in 42 seconds to win the strawweight title in August 2019. That finish alone would have made her notable. What followed made her one of the most compelling figures in the sport. She engaged in back-to-back wars with Joanna Jedrzejczyk that are widely considered among the greatest fights in women's MMA history, won both, lost the title to Rose Namajunas, and then systematically rebuilt herself into a more complete and more dangerous version of the same fighter.

Zhang is the current strawweight champion and operates at the absolute top of the division with a game that combines her powerful, combination-based striking with legitimate wrestling and physical control. She is not the biggest name in the sport globally, but she is arguably the most complete fighter at 115 pounds and defends her title with the thoroughness of someone who has learned from every setback she has faced.

Her significance extends well beyond her record. In China, she is a legitimate sports star, and the UFC's expansion across Asia has accelerated around her success. She represents something real for combat sports fans in markets that the UFC has been trying to develop for years, and she delivers every time the lights are on.`,
    careerHighlights: [
      'First Chinese champion in UFC history',
      'Current UFC Strawweight Champion (two separate reigns)',
      'Defeated Joanna Jedrzejczyk twice, including iconic spinning backfist KO',
      'Defended title against Yan Xiaonan, Joanna Jedrzejczyk, and others',
      'Two-time Fight of the Night winner',
    ],
    signatureMoves: [
      'Spinning backfist',
      'Overhand right to the body',
      'Double leg takedown',
      'Ground and pound from top control',
      'Front kick to the face',
    ],
    biggestWins: [
      'Joanna Jedrzejczyk — KO R2 spinning backfist (2022)',
      'Joanna Jedrzejczyk — Dec (2019)',
      'Jessica Andrade — KO R1 (2019)',
      'Rose Namajunas — KO R2 (2023)',
      'Yan Xiaonan — Dec (2024)',
    ],
    momTake: 'Zhang Weili is the mom who shows up to the school talent show, quietly hands in the paperwork everyone forgot about, and then her kid goes out there and absolutely shatters the curve. She does not need to announce herself. The results do it.',
    isChampion: true,
    isRetired: false,
  },
  {
    slug: 'alexa-grasso',
    name: 'Alexa Grasso',
    nickname: 'Alexa',
    weightClass: 'Flyweight',
    record: '16-3',
    hometown: 'Guadalajara, Jalisco, Mexico',
    age: 32,
    height: "5'5\"",
    reach: '65"',
    stance: 'Orthodox',
    fightingStyle: 'Kickboxing / BJJ',
    bio: `Alexa Grasso grew up training in her father's gym in Guadalajara and turned professional as a teenager. She developed through the UFC's strawweight division with a striking-forward style that showed flashes of brilliance but struggled for consistency. The move to flyweight changed everything. Better at the weight, more comfortable, and with improved grappling from years of dedicated work, Grasso looked like a different athlete.

She submitted Valentina Shevchenko in the fourth round at UFC 285 to win the flyweight title in one of the biggest upsets in women's MMA history. It was not a fluke — she had been hitting her shots all night, neutralized Shevchenko's distance work with pressure, and recognized the opportunity when it arrived. The immediate rematch ended in a controversial majority draw, igniting a rivalry that captured the entire division's attention. In the third fight, she won by decision to cement herself as the legitimate champion.

Grasso is the most prominent female MMA fighter in Mexican history and a genuine sports star in Mexico. Her success has opened doors for Mexican women in combat sports in the same way Rousey opened doors in the United States a decade ago.`,
    careerHighlights: [
      'UFC Flyweight Champion (current)',
      'Submitted Valentina Shevchenko at UFC 285 — one of the biggest upsets in women\'s MMA',
      'First Mexican women\'s UFC champion',
      'Three-fight rivalry with Valentina Shevchenko',
      'Performance of the Night bonuses across multiple appearances',
    ],
    signatureMoves: [
      'Rear naked choke from back mount',
      'Left straight down the middle',
      'Body kick to set up head shots',
      'Neck crank transitions from clinch',
      'Arm drag to back take',
    ],
    biggestWins: [
      'Valentina Shevchenko — Sub R4 (UFC 285, 2023)',
      'Valentina Shevchenko — Dec (Noche UFC, 2024)',
      'Viviane Araujo — Dec (2022)',
      'Maycee Barber — Dec (2023)',
    ],
    momTake: 'Alexa Grasso is the quiet mom who never posted anything on the PTA Facebook group, and then showed up to the school fundraiser and won every single raffle. Silent until the moment she absolutely was not.',
    isChampion: true,
    isRetired: false,
  },
  {
    slug: 'rose-namajunas',
    name: 'Rose Namajunas',
    nickname: 'Thug Rose',
    weightClass: 'Strawweight',
    record: '12-5',
    hometown: 'Milwaukee, Wisconsin, USA',
    age: 33,
    height: "5'5\"",
    reach: '65"',
    stance: 'Orthodox',
    fightingStyle: 'Kickboxing / BJJ',
    bio: `Rose Namajunas has one of the most compelling stories in women's MMA. She entered the UFC through TUF 20 as a teenager, raw and talented but emotionally fragile in ways that limited her. She lost to Carla Esparza in the finale, got submitted, and the loss looked like it might define her early career. What followed instead was one of the best developmental arcs in the sport.

She came back with better technique, better emotional footing, and a clarity of purpose that transformed her in the cage. The first Joanna Jedrzejczyk fight at UFC 217 was the payoff: a first-round knockout that ended a five-defense championship reign and shocked Madison Square Garden. She defended against Jedrzejczyk again, won, became one of the top strawweights in the world, and was eventually stopped by Jessica Andrade in a fight where a slam KO landed at the worst possible moment.

She came back and won the title a second time, beating Zhang Weili at UFC 261 with a head kick finish that showed exactly how far her striking had developed. She is one of only three women in UFC history to win a title twice in the same division, and her career remains one of the best comeback stories the sport has ever produced.`,
    careerHighlights: [
      'Two-time UFC Strawweight Champion',
      'Knocked out Joanna Jedrzejczyk at UFC 217 at Madison Square Garden',
      'Head kick KO of Zhang Weili at UFC 261',
      'Competed in TUF 20 — original strawweight division',
      'One of three women to win the same UFC title twice',
    ],
    signatureMoves: [
      'Right high kick setup off jab feint',
      'Left straight to the body',
      'Counter left hook off opponent pressure',
      'Flying knee on cage press',
      'Armbar from guard',
    ],
    biggestWins: [
      'Joanna Jedrzejczyk — KO R1 (UFC 217, 2017)',
      'Joanna Jedrzejczyk — Dec (UFC 223, 2018)',
      'Zhang Weili — KO R1 head kick (UFC 261, 2021)',
      'Jessica Andrade — TKO R5 (UFC 251, 2020)',
    ],
    momTake: 'Rose Namajunas is the mom who seems shy at drop-off and then you find out she single-handedly organized the entire school fundraiser AND has a black belt. She does not lead with it. But it is there.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'joanna-jedrzejczyk',
    name: 'Joanna Jedrzejczyk',
    nickname: 'Joanna Champion',
    weightClass: 'Strawweight',
    record: '16-4',
    hometown: 'Olsztyn, Poland',
    age: 38,
    height: "5'6\"",
    reach: '65"',
    stance: 'Southpaw',
    fightingStyle: 'Muay Thai',
    bio: `Joanna Jedrzejczyk arrived in the UFC in 2014 as a Muay Thai world champion and proceeded to run through the entire strawweight division with a technical precision and a relentless work rate that the division had never seen. She won the title from Carla Esparza in 2015 and defended it five consecutive times, which remains one of the most dominant single-division championship runs in women's MMA history. She did not just win these fights — she dominated them systematically and convincingly.

Her Muay Thai was the foundation: footwork, timing, the high kick that she threw off feints, body work, elbows in the clinch. But beyond the technical package, Joanna fought with a ferocity that felt personal. She talked constantly, in the cage, at press conferences, during weigh-ins, and she backed every word up. The act was real because the skills were real.

She fought Zhang Weili twice in back-to-back all-time classic wars, losing both but competing at a level that earned her permanent respect. She announced her retirement in 2023 after surgery on a hand that had been damaged in the first Weili fight. Her place in the history of the sport is secure — she was, for two years, the best women's fighter in the world not named Amanda Nunes.`,
    careerHighlights: [
      'UFC Strawweight Champion 2015-2017',
      'Five consecutive title defenses — strawweight record',
      'Multiple-time Muay Thai world champion',
      'UFC Hall of Fame inductee (2024)',
      'Two iconic wars with Zhang Weili, widely considered all-time classics',
    ],
    signatureMoves: [
      'Left high kick off jab feint',
      'Right teep to reset range',
      'Left elbow in the clinch',
      'High volume combination on the outside',
      'Right body kick to slow opponents',
    ],
    biggestWins: [
      'Carla Esparza — TKO R1 (2015)',
      'Claudia Gadelha — Dec x2 (2016, 2017)',
      'Karolina Kowalkiewicz — Dec (2016)',
      'Valerie Letourneau — TKO R2 (2015)',
    ],
    momTake: 'Joanna is the mom who brings homemade food to every event, tells you exactly what is wrong with the school policy in the most detailed possible terms, and is always right. Exhausting. Brilliant. Absolutely correct.',
    isChampion: false,
    isRetired: true,
  },
  {
    slug: 'holly-holm',
    name: 'Holly Holm',
    nickname: 'The Preacher\'s Daughter',
    weightClass: 'Bantamweight',
    record: '15-6',
    hometown: 'Albuquerque, New Mexico, USA',
    age: 44,
    height: "5'8\"",
    reach: '69"',
    stance: 'Orthodox',
    fightingStyle: 'Boxing / Kickboxing',
    bio: `Holly Holm is the former world champion boxer who became the most surprising UFC champion in the history of the sport. Before entering MMA, she was a decorated boxing world champion in multiple weight classes — one of the best female boxers of her era, full stop. She transitioned to MMA because the women's game was growing and she wanted to test her striking in the complete sport. What followed was a career with one extraordinary moment that will be shown at every MMA retrospective until the end of time.

She knocked Ronda Rousey out in the second round at UFC 193 in Melbourne in November 2015. At the time, Rousey was 13-to-1 favorite. She had not been taken deep into a fight in years. Holly came in with a game plan — boxing footwork, counter-striking, body kick accumulation — and executed it flawlessly. The head kick finish was the most famous moment in women's MMA history up to that point.

She lost the title to Miesha Tate in the very next fight, which complicated the narrative, and then had an up-and-down career with a second title fight appearance at featherweight. But the Rousey fight is permanent. Holly Holm at her best is as technically complete a boxer as has ever competed in women's MMA, and that night in Melbourne she was at her best.`,
    careerHighlights: [
      'Former UFC Bantamweight Champion',
      'Knocked out Ronda Rousey at UFC 193 — one of the biggest upsets in sports history',
      'Multiple-time world boxing champion before entering MMA',
      'Won WBC, WBA, and IBF boxing titles across multiple weight classes',
      'Fight of the Night bonus in multiple UFC appearances',
    ],
    signatureMoves: [
      'Left high kick off combination',
      'Rear body kick to slow pressure',
      'Counterpunching left hook',
      'Rear leg side kick',
      'Jab-cross-kick combination',
    ],
    biggestWins: [
      'Ronda Rousey — KO R2 head kick (UFC 193, 2015)',
      'Bethe Correia — Dec (2016)',
      'Raquel Pennington — Dec (2018)',
      'Megan Anderson — KO R1 (2020)',
    ],
    momTake: 'Holly Holm is the mom who just quietly goes to church, smiles at everyone, asks polite questions, and then you find out she spent twenty years as a world boxing champion and once knocked out the most famous athlete in the country. Just an absolute jaw-dropper of a person.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'miesha-tate',
    name: 'Miesha Tate',
    nickname: 'Cupcake',
    weightClass: 'Bantamweight',
    record: '19-7',
    hometown: 'Tacoma, Washington, USA',
    age: 39,
    height: "5'6\"",
    reach: '65"',
    stance: 'Orthodox',
    fightingStyle: 'Wrestling / Brazilian Jiu-Jitsu',
    bio: `Miesha Tate was the foundational figure of women's bantamweight MMA — the fighter who, alongside Ronda Rousey, turned the division into something the world paid attention to. Their rivalry predated the UFC and ran through it, defining the early years of women's MMA in America with three fights, two title changes, and the kind of genuine personal animosity that made everything more compelling.

Tate's style was wrestling-based at its core, with a relentless pressure approach and excellent grappling that allowed her to outwork opponents and grind out decisions or force finishes from top position. She was not the most spectacular fighter, but she was durable, game, and capable of performing in the biggest moments when the pressure was highest.

Her finest night came at UFC 196 against Holly Holm. She was widely expected to lose to the woman who had just dismantled Rousey. Instead, Tate absorbed punishment, kept pressing, and choked Holm out in the fifth round to win the bantamweight title in a comeback that nobody saw coming. She retired once and came back; the love for competition and the sport never fully went away.`,
    careerHighlights: [
      'Former UFC Bantamweight Champion',
      'Submitted Holly Holm in Round 5 to win title at UFC 196',
      'Strikeforce Bantamweight Champion',
      'Three-fight rivalry with Ronda Rousey',
      'UFC Hall of Fame inductee',
    ],
    signatureMoves: [
      'Double leg takedown off punch feint',
      'Rear naked choke from back mount',
      'Body triangle and back control',
      'Clinch wrestling against the cage',
      'Guillotine counter to sprawl',
    ],
    biggestWins: [
      'Holly Holm — RNC R5 (UFC 196, 2016)',
      'Liz Carmouche — Sub R3 (2013)',
      'Sara McMann — KO R2 (2014)',
      'Jessica Eye — Dec (2013)',
    ],
    momTake: 'Miesha Tate is the mom who shows up to the marathon at mile 24 looking beaten and somehow finds another gear and crosses the finish line first. She never quits. It is genuinely a little intimidating to be around.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'julianna-pena',
    name: 'Julianna Pena',
    nickname: 'The Venezuelan Vixen',
    weightClass: 'Bantamweight',
    record: '13-5',
    hometown: 'Spokane, Washington, USA',
    age: 36,
    height: "5'7\"",
    reach: '67"',
    stance: 'Orthodox',
    fightingStyle: 'Wrestling / BJJ / Striking',
    bio: `Julianna Pena submitted Amanda Nunes at UFC 269 in one of the greatest upsets in combat sports history. That statement needs to be on her permanent record: she beat the most dominant women's champion in UFC history in a fight where she was a 13-to-1 underdog, and she did it by outworking Nunes in the second round and finishing with a rear naked choke. Whatever your other opinions about Pena, that night she was absolutely the best woman in the world at her weight.

Pena came up through TUF 18, where she was a standout personality and a legitimate fighter. She is a strong grappler with wrestling credentials and a willingness to engage in exchanges that bigger fighters might avoid. Her aggression is her calling card — she goes forward, creates chaos, and finds ways to make fights uncomfortable for technically superior opponents.

The narrative of her career is shaped by the Nunes fights. She won one and lost one, which is different from most bantamweights who fought Nunes in that era. She remains one of the most significant figures in the division's recent history and a top contender for any belt at 135 pounds.`,
    careerHighlights: [
      'Former UFC Bantamweight Champion',
      'Submitted Amanda Nunes at UFC 269 — one of the biggest upsets in women\'s MMA history',
      'Winner of TUF 18',
      'First Venezuelan-American UFC champion',
      'Defeated Germaine de Randamie, Sara McMann',
    ],
    signatureMoves: [
      'Rear naked choke from back mount',
      'Double leg takedown off counter',
      'Ground and pound from top position',
      'Judo-influenced hip throw from clinch',
      'Cage wrestling and body lock takedowns',
    ],
    biggestWins: [
      'Amanda Nunes — RNC R2 (UFC 269, 2021)',
      'Germaine de Randamie — Dec (2021)',
      'Sara McMann — Dec (2018)',
      'Nicco Montano — TKO R1 (2019)',
    ],
    momTake: 'Julianna Pena is the mom who shows up to the field trip, nobody really expected much, and by the end of the day she has organized the whole group, found the shortcut through the museum, AND brought snacks. Chaos agent. Absolute results.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'cris-cyborg',
    name: 'Cris Cyborg',
    nickname: 'Cyborg',
    weightClass: 'Featherweight',
    record: '26-2',
    hometown: 'Curitiba, Parana, Brazil',
    age: 40,
    height: "5'8\"",
    reach: '71"',
    stance: 'Orthodox',
    fightingStyle: 'Striking / Clinch / Ground and Pound',
    bio: `Cris Cyborg is one of the most physically dominant fighters — male or female — in MMA history. For a decade and a half, she fought at featherweight and at catchweight above bantamweight, where she was often significantly larger and stronger than her opponents, and she finished almost all of them with a relentless striking attack that combined elite aggression with genuine technical skill. She held world titles in Strikeforce, Invicta FC, the UFC, and Bellator — more major promotional titles than any fighter in women's MMA history.

Her 2018 UFC 232 loss to Amanda Nunes ended her UFC featherweight reign in a single dramatic round, demonstrating that the one person who could match her physically and exceed her technically was an opponent she could not solve. She has been in Bellator and PFL since, where she continues to be a dominant force and the recognized queen of featherweight outside the UFC.

Cyborg's legacy is complicated by a USADA suspension she received in 2011, but her in-cage performances across a 20-year career are undeniable. She has finished elite fighters in multiple promotions and is rightfully regarded as one of the most accomplished combat sports athletes of her era.`,
    careerHighlights: [
      'UFC Featherweight Champion',
      'Strikeforce Women\'s Featherweight Champion',
      'Invicta FC Featherweight Champion',
      'Bellator Featherweight Champion',
      'Over 20 first-round finishes in professional career',
      'Longest active win streak in women\'s MMA at one point (17 fights)',
    ],
    signatureMoves: [
      'Overhand right at close range',
      'Knee to the body in the clinch',
      'Ground and pound from full mount',
      'Body kick to slow opponent movement',
      'Spinning heel kick',
    ],
    biggestWins: [
      'Gina Carano — TKO R1 (2009)',
      'Invicta FC title defense vs. Charmaine Tweet',
      'Tonya Evinger — TKO R3, UFC title win (2017)',
      'Holly Holm — TKO R3 (2019)',
    ],
    momTake: 'Cris Cyborg is the mom who shows up to help with the school fundraiser and somehow the entire parking lot gets reorganized in 20 minutes. You did not ask. She just saw a problem and solved it at a higher level than anyone else was operating at.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'kayla-harrison',
    name: 'Kayla Harrison',
    nickname: 'Kayla',
    weightClass: 'Bantamweight',
    record: '17-1',
    hometown: 'Middletown, Ohio, USA',
    age: 35,
    height: "5'11\"",
    reach: '71"',
    stance: 'Orthodox',
    fightingStyle: 'Judo / Wrestling / BJJ',
    bio: `Kayla Harrison is a two-time Olympic gold medalist in judo who turned to MMA after Paris 2024 and immediately became the most anticipated women's prospect in the sport. She won the PFL lightweight championship twice with a 15-0 record in the league, dominating through athletic advantages and a judo game that was simply on a different level from most women's fighters. Her throws and takedowns were definitive — she put opponents where she wanted them and finished from there.

She signed with the UFC and moved to bantamweight, where the competition is elite and the physical advantages are less pronounced. Her UFC debut came against Julianna Pena, and while the result was a decision loss, it revealed a fighter who could compete at the highest level and whose grappling remained exceptional even against opponents built to handle it. The development of her striking in the cage is the ongoing project, and when it comes together, she becomes a genuine title threat.

Harrison's personal story includes overcoming abuse from her former judo coach and using the sport as both healing and platform. She has been outspoken about athlete protection and has used her Olympic profile to push for institutional reform in combat sports. She is as significant a figure as anyone in women's fighting.`,
    careerHighlights: [
      'Two-time Olympic gold medalist in judo (2012, 2016)',
      'Two-time PFL Women\'s Lightweight Champion',
      'Undefeated in PFL — 15-0 in league competition',
      'National Judo champion',
      'Signed with UFC in 2024',
    ],
    signatureMoves: [
      'Uchi-mata (inner thigh throw)',
      'Seoi-nage (shoulder throw)',
      'Rear naked choke from back',
      'Arm bar from mount',
      'Body lock trip from clinch',
    ],
    biggestWins: [
      'Cindy Dandois — Sub R1 (2018)',
      'Taylor Guardado — TKO R1 (2021)',
      'Larissa Pacheco — Dec (PFL final 2022)',
      'Aspen Ladd — TKO R1 (2024)',
    ],
    momTake: 'Kayla Harrison is the mom who walks in carrying an Olympic medal and a casserole dish, and somehow the Olympic medal is less impressive than the casserole. Two gold medals. Just walks around with them. Incredible person.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'manon-fiorot',
    name: 'Manon Fiorot',
    nickname: 'The Beast',
    weightClass: 'Flyweight',
    record: '13-1',
    hometown: 'Valenciennes, Nord, France',
    age: 35,
    height: "5'5\"",
    reach: '64"',
    stance: 'Southpaw',
    fightingStyle: 'Kickboxing / Boxing',
    bio: `Manon Fiorot is the best women's fighter France has ever produced and one of the most technically impressive strikers in the UFC flyweight division. A professional kickboxer and boxer before transitioning to MMA, she brought clean, precise striking with excellent timing and footwork that made her almost impossible to catch clean. Her movement on the outside, her counter striking, and her ability to pick opponents apart while staying safe have made her one of the most exciting technical fighters at 125 pounds.

She went on a long unbeaten run in the UFC, defeating several ranked opponents back-to-back and entering the title conversation before facing Alexa Grasso. She has the striking ability to give any flyweight on the roster problems and the composure of a professional kickboxer who has competed at the highest levels of multiple combat sports.

Fiorot represents the growing European presence in women's MMA — a pipeline that the UFC has been deliberately developing, and one that is beginning to produce genuine title contenders across multiple divisions.`,
    careerHighlights: [
      'Former professional kickboxer and boxer',
      'Eight-fight UFC win streak at flyweight',
      'Top-5 ranked flyweight contender',
      'Multiple Performance of the Night bonuses',
      'Defeated Katlyn Chookagian, Jennifer Maia, and ranked flyweights',
    ],
    signatureMoves: [
      'Left straight (southpaw) to the face',
      'Counter right hook to the body',
      'Low kick to slow footwork',
      'Jab to set up head movement',
      'Spinning back kick to the body',
    ],
    biggestWins: [
      'Katlyn Chookagian — Dec (2022)',
      'Jennifer Maia — TKO R3 (2021)',
      'Taila Santos — Dec (2023)',
      'Erin Blanchfield — Dec (2024)',
    ],
    momTake: 'Manon Fiorot is the French exchange mom at the school event who says almost nothing, watches everything, and then in the game at the end moves so efficiently and so accurately that everyone just stops and stares. Very chic. Slightly terrifying.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'erin-blanchfield',
    name: 'Erin Blanchfield',
    nickname: 'Cold Blooded',
    weightClass: 'Flyweight',
    record: '12-2',
    hometown: 'Hawthorne, New Jersey, USA',
    age: 26,
    height: "5'4\"",
    reach: '65"',
    stance: 'Southpaw',
    fightingStyle: 'Wrestling / Brazilian Jiu-Jitsu',
    bio: `Erin Blanchfield broke through in the UFC flyweight division at a remarkably young age with a grappling-heavy style that was simply more dangerous than most opponents could handle. Her wrestling sets up her submission game, her submission game makes her wrestling unstoppable, and her striking has improved enough that she can fight with serious competence on the feet as well. She is the full package for where women's flyweight is going.

Her wins over Taila Santos and Jessica Andrade — two former title challengers with significant credentials — announced her as a genuine title threat rather than a prospect. She submitted both. The composure she shows in finishing grappling sequences, the relentlessness with which she pursues submissions, and the physical pressure she puts on opponents with her wrestling base all point to a fighter operating well above her chronological age.

At 26, Blanchfield has years of development ahead of her. The strongest versions of grapplers in MMA often come between 27 and 32, when the technique has matured and the physical tools are still fully present. If she follows that trajectory, she becomes one of the best women's fighters in the sport.`,
    careerHighlights: [
      'Top-3 ranked UFC flyweight contender',
      'Submitted Taila Santos and Jessica Andrade — both former title challengers',
      'Unbeaten in first 10 UFC appearances',
      'Youngest top-5 women\'s flyweight in UFC history',
      'Multiple Submission of the Night bonuses',
    ],
    signatureMoves: [
      'Double leg takedown off level change',
      'Rear naked choke from back control',
      'D\'Arce choke from front headlock',
      'Arm bar from guard',
      'Neck crank and shoulder lock transitions',
    ],
    biggestWins: [
      'Taila Santos — Sub R3 (2023)',
      'Jessica Andrade — Sub R2 (2023)',
      'Molly McCann — Dec (2022)',
      'JJ Aldrich — Sub R2 (2021)',
    ],
    momTake: 'Erin Blanchfield is the 26-year-old who shows up to the neighborhood watch meeting, sits quietly, and then presents a 15-slide analysis of the traffic pattern problem that the committee has been trying to solve for four years. She already figured it out. She just wanted to be polite about it.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'tatiana-suarez',
    name: 'Tatiana Suarez',
    nickname: 'T-Soo',
    weightClass: 'Strawweight',
    record: '10-0',
    hometown: 'Chino Hills, California, USA',
    age: 33,
    height: "5'4\"",
    reach: '64"',
    stance: 'Orthodox',
    fightingStyle: 'Wrestling / Grappling',
    bio: `Tatiana Suarez is undefeated and may be the best pure wrestler in the history of women's MMA. Her NCAA Division II wrestling background and the dominance she showed through her TUF 23 victory and subsequent UFC appearances established her as a fighter who, when healthy, simply cannot be stopped by the women's strawweight division. She takes people down at will, controls them completely, and finishes fights with either ground and pound or submission from dominant positions.

The injury problem has been the central tragedy of her career. She has dealt with neck injuries, knee injuries, and long layoffs that have kept her from competing for extended periods at the exact moments when she should have been climbing to the title. Her return fights have shown the wrestling is still elite and the finishing ability is intact, but the breaks in activity mean she has had to rebuild momentum repeatedly.

She is a legitimate title contender every time she steps back into the cage, and the strawweight division has never fully figured out how to deal with her wrestling. The question is whether she can stay healthy long enough to get the title opportunity her undefeated record deserves.`,
    careerHighlights: [
      'Undefeated professional record (10-0)',
      'Winner of TUF 23',
      'NCAA Division II Wrestling All-American',
      'Finished all 10 professional wins (no decision wins)',
      'Top-5 ranked UFC strawweight despite lengthy injury absences',
    ],
    signatureMoves: [
      'Ankle pick off counter',
      'Double leg against the cage',
      'Ground and pound from full mount',
      'Rear naked choke from back control',
      'Arm bar from mount transition',
    ],
    biggestWins: [
      'Nina Ansaroff — TKO R2 (2019)',
      'Carla Esparza — TKO R2 (2017)',
      'Michelle Waterson — TKO R1 (2018)',
      'Angela Hill — TKO R1 (2022)',
    ],
    momTake: 'Tatiana Suarez is the mom who keeps getting interrupted at the school board meeting but keeps coming back with even better arguments and eventually just takes over the whole agenda. Unstoppable. Undefeated. Cannot be stopped. Will not be.',
    isChampion: false,
    isRetired: false,
  },
  {
    slug: 'ronda-rousey',
    name: 'Ronda Rousey',
    nickname: 'Rowdy',
    weightClass: 'Bantamweight',
    record: '12-2',
    hometown: 'Venice, California, USA',
    age: 39,
    height: "5'7\"",
    reach: '67"',
    stance: 'Orthodox',
    fightingStyle: 'Judo / Armbar Specialist',
    bio: `Ronda Rousey changed the sport. Not metaphorically — she literally changed what the UFC was willing to do and what the world was willing to watch. Before Rousey, there was no UFC women's division. Dana White had said explicitly that it would never happen. Then Rousey forced the conversation with a combination of judo brilliance, combat sports charisma, and mainstream crossover appeal that no athlete in women's MMA had possessed before her.

She won the Strikeforce bantamweight title and carried it into the UFC, becoming the first women's UFC champion in 2013. Her armbars were finishing fights in under a minute. She was on the cover of Sports Illustrated. She was doing movies. She was the most famous female athlete in America for a two-year period that felt like a much longer cultural era. The entire infrastructure that women's UFC fighters benefit from today — the pay scale, the promotional machine, the main event slots — was built on the audience she created.

The Holly Holm head kick in 2015 ended the unbeaten run and exposed real technical limitations. The Amanda Nunes fight in 2016 lasted 48 seconds. The narrative collapsed. But the foundation she built did not collapse with it. Whatever complicated feelings follow from her later career and her public statements, the sport owes her a debt it will never fully repay.`,
    careerHighlights: [
      'First UFC Women\'s Champion in history',
      'Olympic bronze medalist in judo (2008) — first American to medal in judo',
      'Strikeforce Women\'s Bantamweight Champion',
      'Six consecutive first-round armbar finishes',
      'UFC Hall of Fame inductee',
      'First female headliner of a UFC pay-per-view',
    ],
    signatureMoves: [
      'Uchi-mata to armbar transition',
      'O-goshi (hip throw)',
      'Juji-gatame (cross armbar)',
      'Armbar from guard',
      'Standing armbar from clinch',
    ],
    biggestWins: [
      'Miesha Tate — Sub R1 (2012)',
      'Cat Zingano — Sub R1 (2015)',
      'Bethe Correia — TKO R1 (2015)',
      'Miesha Tate — Sub R3 (2013)',
    ],
    momTake: 'Ronda Rousey opened the door that everyone else walked through. She is the mom who argued for years that the school needed a girls\' wrestling team, won the argument, then her daughter graduated. But the team exists now. That matters.',
    isChampion: false,
    isRetired: true,
  },
  {
    slug: 'yan-xiaonan',
    name: 'Yan Xiaonan',
    nickname: 'Fury',
    weightClass: 'Strawweight',
    record: '17-4',
    hometown: 'Shandong, China',
    age: 35,
    height: "5'4\"",
    reach: '63.5"',
    stance: 'Orthodox',
    fightingStyle: 'Muay Thai / Wrestling',
    bio: `Yan Xiaonan has been one of the best women in the strawweight division for years while flying under the radar that the strawweight top tier usually generates. Her style is built around relentless pressure and a high-volume striking attack that accumulates damage over time. She does not look for the single finishing shot. She wears opponents down with body kicks, combinations, and continuous forward movement until there is nothing left in them to resist.

She fought for the strawweight title against Zhang Weili in 2024 and lost a close decision, but the fight confirmed that she belongs in the elite tier of the division and that the gap between her and the champion is small. She has defeated Carla Esparza, Karolina Kowalkiewicz, and multiple other ranked strawweights, building a resume that would justify title contention in any era of the division.

Yan is part of a larger story about the growth of Chinese women's MMA — alongside Zhang Weili, she represents the development of a genuine world-class talent pipeline in China, and her continued presence near the top of the rankings is a marker of how far that development has come.`,
    careerHighlights: [
      'Top-3 ranked UFC strawweight contender',
      'Fought Zhang Weili for the strawweight title (2024)',
      'Defeated Carla Esparza, Karolina Kowalkiewicz',
      'Eight-fight win streak in the UFC',
      'One of two Chinese women ranked in the strawweight top 5',
    ],
    signatureMoves: [
      'Body kick combination',
      'Right straight to the body',
      'High-volume jab series to set up power shots',
      'Takedown from clinch',
      'Ground and pound from top control',
    ],
    biggestWins: [
      'Carla Esparza — Dec (2020)',
      'Karolina Kowalkiewicz — TKO R2 (2019)',
      'Claudia Gadelha — Dec (2020)',
      'Michelle Waterson — Dec (2022)',
    ],
    momTake: 'Yan Xiaonan is the mom who does not post much on social media, shows up to everything, and works twice as hard as everyone in the room. By the end of the year she has quietly done more than anyone and expects zero credit for it.',
    isChampion: false,
    isRetired: false,
  },
]

export function getFighterBySlug(slug: string): Fighter | undefined {
  return fighters.find(f => f.slug === slug)
}

export function getFightersByWeightClass(weightClass: string): Fighter[] {
  return fighters.filter(f =>
    f.weightClass.toLowerCase().includes(weightClass.toLowerCase())
  )
}

export function getChampions(): Fighter[] {
  return fighters.filter(f => f.isChampion)
}

export function getActiveFighters(): Fighter[] {
  return fighters.filter(f => !f.isRetired)
}

export function getRetiredFighters(): Fighter[] {
  return fighters.filter(f => f.isRetired)
}
