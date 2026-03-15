// Auto-generated from TheSportsDB API
// Last updated: 2026-03-15T08:06:58.100Z
// Do not edit manually — run scripts/update-fight-data.ts to refresh

export interface Fight {
  fighter1: string
  fighter2: string
  weightClass: string
  isMainEvent?: boolean
  isTitleFight?: boolean
  winner?: string
  method?: string
  round?: number
  time?: string
}

export interface UFCEvent {
  slug: string
  name: string
  date: string
  location: string
  venue: string
  type: 'ppv' | 'fight-night' | 'apex'
  womensFights: Fight[]
  completed: boolean
  sportsDbId?: string
}

export const events: UFCEvent[] = [
  {
    "slug": "ufc-fight-night-249-dern-vs-ribas-2",
    "name": "UFC Fight Night 249 Dern vs Ribas 2",
    "date": "2025-01-11",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2179599"
  },
  {
    "slug": "ufc-311-makhachev-vs-moicano",
    "name": "UFC 311 Makhachev vs Moicano",
    "date": "2025-01-19",
    "location": "Inglewood, California, United States",
    "venue": "Intuit Dome",
    "type": "ppv",
    "womensFights": [
      {
        "fighter1": "Ailín Pérez",
        "fighter2": "Karol Rosa",
        "weightClass": "Women's Bantamweight",
        "isMainEvent": true,
        "winner": "Ailín Pérez",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2179600"
  },
  {
    "slug": "ufc-fight-night-250-adesanya-vs-imavov",
    "name": "UFC Fight Night 250 Adesanya vs Imavov",
    "date": "2025-02-01",
    "location": "Riyadh, Saudi Arabia",
    "venue": "Kingdom Arena",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Jasmine Jasudavicius",
        "fighter2": "Mayra Bueno Silva",
        "weightClass": "Women's Flyweight",
        "isMainEvent": true,
        "winner": "Jasmine Jasudavicius",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2179601"
  },
  {
    "slug": "ufc-312-du-plessis-vs-strickland-2",
    "name": "UFC 312 du Plessis vs Strickland 2",
    "date": "2025-02-08",
    "location": "Sydney, New South Wales, Australia",
    "venue": "Qudos Bank Arena",
    "type": "ppv",
    "womensFights": [
      {
        "fighter1": "Zhang Weili (c)",
        "fighter2": "Tatiana Suarez",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "isTitleFight": true,
        "winner": "Zhang Weili (c)",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Wang Cong",
        "fighter2": "Bruna Brasil",
        "weightClass": "Women's Flyweight",
        "winner": "Wang Cong",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2181020"
  },
  {
    "slug": "ufc-fight-night-251-cannonier-vs-rodrigues",
    "name": "UFC Fight Night 251 Cannonier vs Rodrigues",
    "date": "2025-02-15",
    "location": "Enterpise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Angela Hill",
        "fighter2": "Ketlen Souza",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Angela Hill",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jacqueline Cavalcanti",
        "fighter2": "Julia Avila",
        "weightClass": "Women's Bantamweight",
        "winner": "Jacqueline Cavalcanti",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2200742"
  },
  {
    "slug": "ufc-fight-night-252-cejudo-vs-song",
    "name": "UFC Fight Night 252 Cejudo vs Song ",
    "date": "2025-02-23",
    "location": "Seattle, Washington, United States",
    "venue": "Climate Pledge Arena",
    "type": "fight-night",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2200743"
  },
  {
    "slug": "ufc-fight-night-253-kape-vs-almabayev",
    "name": "UFC Fight Night 253 Kape vs Almabayev",
    "date": "2025-03-01",
    "location": "Enterprise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "JJ Aldrich",
        "fighter2": "Andrea Lee",
        "weightClass": "Women's Flyweight",
        "isMainEvent": true,
        "winner": "JJ Aldrich",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2203291"
  },
  {
    "slug": "ufc-313-pereira-vs-ankalaev",
    "name": "UFC 313 Pereira vs Ankalaev",
    "date": "2025-03-09",
    "location": "Las Vegas, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "womensFights": [
      {
        "fighter1": "Amanda Lemos",
        "fighter2": "Iasmin Lucindo",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Amanda Lemos",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2200744"
  },
  {
    "slug": "ufc-fight-night-254-vettori-vs-dolidze-2",
    "name": "UFC Fight Night 254 Vettori vs Dolidze 2",
    "date": "2025-03-15",
    "location": "Enterprise, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Sam Hughes",
        "fighter2": "Stephanie Luciano",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Sam Hughes",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Priscila Cachoeira",
        "fighter2": "Josiane Nunes",
        "weightClass": "Women's Bantamweight",
        "winner": "Priscila Cachoeira",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Carli Judice",
        "fighter2": "Yuneisy Duben",
        "weightClass": "Women's Flyweight",
        "winner": "Carli Judice",
        "method": "TKO",
        "round": 1
      }
    ],
    "completed": true,
    "sportsDbId": "2200745"
  },
  {
    "slug": "ufc-fight-night-255-edwards-vs-brady",
    "name": "UFC Fight Night 255 Edwards vs Brady",
    "date": "2025-03-22",
    "location": "London, United Kingdom",
    "venue": "The O2 Arena",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Alexia Thainara",
        "fighter2": "Molly McCann",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Alexia Thainara",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Shauna Bannon",
        "fighter2": "Puja Tomar",
        "weightClass": "Women's Strawweight",
        "winner": "Shauna Bannon",
        "method": "Submission",
        "round": 2
      }
    ],
    "completed": true,
    "sportsDbId": "2200746"
  },
  {
    "slug": "ufc-on-espn-64-moreno-vs-erceg",
    "name": "UFC on ESPN 64 Moreno vs Erceg",
    "date": "2025-03-29",
    "location": "Mexico City, Mexico",
    "venue": "Mexico City Arena",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Loopy Godinez",
        "fighter2": "Julia Polastri",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Loopy Godinez",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2200747"
  },
  {
    "slug": "ufc-on-espn-65-emmett-vs-murphy",
    "name": "UFC on ESPN 65 Emmett vs Murphy",
    "date": "2025-04-05",
    "location": "Enterprise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Dione Barbosa",
        "fighter2": "Diana Belbiţă",
        "weightClass": "Women's Flyweight",
        "isMainEvent": true,
        "winner": "Dione Barbosa",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Loma Lookboonmee",
        "fighter2": "Istela Nunes",
        "weightClass": "Women's Strawweight",
        "winner": "Loma Lookboonmee",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Talita Alencar",
        "fighter2": "Vanessa Demopoulos",
        "weightClass": "Women's Strawweight",
        "winner": "Talita Alencar",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2203670"
  },
  {
    "slug": "ufc-314-volkanovski-vs-lopes",
    "name": "UFC 314 Volkanovski vs Lopes",
    "date": "2025-04-13",
    "location": "Miami, Florida, United States",
    "venue": "Kaseya Center",
    "type": "ppv",
    "womensFights": [
      {
        "fighter1": "Virna Jandiroba",
        "fighter2": "Yan Xiaonan",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Virna Jandiroba",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2203292"
  },
  {
    "slug": "ufc-on-espn-66-machado-garry-vs-prates",
    "name": "UFC on ESPN 66 Machado Garry vs Prates",
    "date": "2025-04-27",
    "location": "Kansas City, Missouri, United States",
    "venue": "T-Mobile Center",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Jaqueline Amorim",
        "fighter2": "Polyana Viana",
        "weightClass": "Women's Strawweight",
        "isMainEvent": true,
        "winner": "Jaqueline Amorim",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Joselyne Edwards",
        "fighter2": "Chelsea Chandler",
        "weightClass": "Women's Bantamweight",
        "winner": "Joselyne Edwards",
        "method": "TKO",
        "round": 1
      }
    ],
    "completed": true,
    "sportsDbId": "2213799"
  },
  {
    "slug": "ufc-on-espn-67-sandhagen-vs-figueiredo",
    "name": "UFC on ESPN 67 Sandhagen vs Figueiredo",
    "date": "2025-05-04",
    "location": "Des Moines, Iowa, United States",
    "venue": "Wells Fargo Arena",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Yana Santos",
        "fighter2": "Miesha Tate",
        "weightClass": "Women's Bantamweight",
        "isMainEvent": true,
        "winner": "Yana Santos",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Gillian Robertson",
        "fighter2": "Marina Rodriguez",
        "weightClass": "Women's Strawweight",
        "winner": "Gillian Robertson",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Juliana Miller",
        "fighter2": "Ivana Petrović",
        "weightClass": "Women's Flyweight",
        "winner": "Juliana Miller",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2213800"
  },
  {
    "slug": "ufc-324-gaethje-vs-pimblett",
    "name": "UFC 324 Gaethje vs Pimblett",
    "date": "2026-01-24",
    "location": "Las Vegas, NV, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "womensFights": [
      {
        "fighter1": "Natália Silva",
        "fighter2": "Rose Namajunas",
        "weightClass": "Women's Flyweight",
        "isMainEvent": true,
        "winner": "Natália Silva",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2389036"
  },
  {
    "slug": "ufc-325-volkanovski-vs-lopes-2",
    "name": "UFC 325 Volkanovski vs Lopes 2",
    "date": "2026-01-31",
    "location": "Sydney, NSW, Australia",
    "venue": "Qudos Bank Arena",
    "type": "ppv",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2389037"
  },
  {
    "slug": "ufc-fight-night-266-bautista-vs-oliveira",
    "name": "UFC Fight Night 266 Bautista vs Oliveira",
    "date": "2026-02-07",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2391879"
  },
  {
    "slug": "ufc-fight-night-267-strickland-vs-hernandez",
    "name": "UFC Fight Night 267 Strickland vs Hernandez",
    "date": "2026-02-21",
    "location": "Houston, Texas, United States",
    "venue": "Toyota Center",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Joselyne Edwards",
        "fighter2": "Nora Cornolle",
        "weightClass": "Women's Bantamweight",
        "isMainEvent": true,
        "winner": "Joselyne Edwards",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Carli Judice",
        "fighter2": "Juliana Miller",
        "weightClass": "Women's Flyweight",
        "winner": "Carli Judice",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2391885"
  },
  {
    "slug": "ufc-fight-night-268-moreno-vs-kavanagh",
    "name": "UFC Fight Night 268 Moreno vs Kavanagh",
    "date": "2026-02-28",
    "location": "Mexico City, Mexico",
    "venue": "Mexico City Arena",
    "type": "fight-night",
    "womensFights": [
      {
        "fighter1": "Ailín Pérez",
        "fighter2": "Macy Chiasson",
        "weightClass": "Women's Bantamweight",
        "isMainEvent": true,
        "winner": "Ailín Pérez",
        "method": "Decision",
        "round": 3
      }
    ],
    "completed": true,
    "sportsDbId": "2391886"
  },
  {
    "slug": "ufc-326-holloway-vs-oliveira-2",
    "name": "UFC 326 Holloway vs Oliveira 2",
    "date": "2026-03-07",
    "location": "Las Vegas, Nevada, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2391887"
  },
  {
    "slug": "ufc-fight-night-269-emmett-vs-vallejos",
    "name": "UFC Fight Night 269 Emmett vs Vallejos",
    "date": "2026-03-14",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [],
    "completed": true,
    "sportsDbId": "2391888"
  },
  {
    "slug": "ufc-fight-night-270-evloev-vs-murphy",
    "name": "UFC Fight Night 270 Evloev vs Murphy",
    "date": "2026-03-21",
    "location": "London, England, United Kingdom",
    "venue": "The O2 Arena",
    "type": "fight-night",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2391889"
  },
  {
    "slug": "ufc-fight-night-271-adesanya-vs-pyfer",
    "name": "UFC Fight Night 271 Adesanya vs Pyfer",
    "date": "2026-03-28",
    "location": "Seattle, Washington, United States",
    "venue": "Climate Pledge Arena",
    "type": "fight-night",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2391890"
  },
  {
    "slug": "ufc-fight-night-272",
    "name": "UFC Fight Night 272",
    "date": "2026-04-04",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2429046"
  },
  {
    "slug": "ufc-327",
    "name": "UFC 327",
    "date": "2026-04-11",
    "location": "Miami, Florida, United States",
    "venue": "Kaseya Center",
    "type": "ppv",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2429047"
  },
  {
    "slug": "ufc-fight-night-273",
    "name": "UFC Fight Night 273",
    "date": "2026-05-30",
    "location": "Macau SAR, China",
    "venue": "Galaxy Arena",
    "type": "fight-night",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2429048"
  },
  {
    "slug": "ufc-white-house",
    "name": "UFC White House",
    "date": "2026-06-14",
    "location": "Washington, D.C., United States",
    "venue": "TBD",
    "type": "fight-night",
    "womensFights": [],
    "completed": false,
    "sportsDbId": "2391891"
  }
]

export function getEventBySlug(slug: string): UFCEvent | undefined {
  return events.find(e => e.slug === slug)
}

export function getUpcomingEvents(): UFCEvent[] {
  return events
    .filter(e => !e.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getCompletedEvents(): UFCEvent[] {
  return events
    .filter(e => e.completed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getWomensTitleFights(): { event: UFCEvent; fight: Fight }[] {
  const results: { event: UFCEvent; fight: Fight }[] = []
  for (const event of events) {
    for (const fight of event.womensFights) {
      if (fight.isTitleFight) {
        results.push({ event, fight })
      }
    }
  }
  return results.sort((a, b) => new Date(b.event.date).getTime() - new Date(a.event.date).getTime())
}
