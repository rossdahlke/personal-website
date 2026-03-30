export type LabMember = {
  name: string
  role: 'Director' | 'PhD Student' | 'Masters Student' | 'Undergraduate RA'
  photo?: string
  website?: string
  email?: string
  bio?: string
}

export type Talk = {
  slug: string
  title: string
  speaker: string
  speakerTitle: string
  speakerAffiliation: string
  speakerPhoto?: string
  date: string
  time: string
  location: string
  abstract: string
}

export const upcomingTalks: Talk[] = [
]

export const pastTalks: Talk[] = [
  {
    slug: 'moore-digital-literacy-2026',
    title: 'Short Educational Videos Improve Older Adults\u2019 Digital Literacy and Information Diets at Scale',
    speaker: 'Ryan Moore, PhD',
    speakerTitle: 'Assistant Professor',
    speakerAffiliation: 'School of Information, The University of Texas at Austin',
    speakerPhoto: '/images/moore-ryan-headshot.jpeg',
    date: 'March 20, 2026',
    time: '1:00 PM - 2:00 PM',
    location: 'Nafziger Room 5055, Vilas Hall',
    abstract: 'Online deception disproportionately affects older adults, threatening individual and democratic health while causing substantial financial losses. Yet few scalable interventions exist to build older adults\u2019 resilience to such content. We developed short digital literacy videos for older adults teaching lateral reading, reading upstream, and reverse image search. Across three studies (N = 27,537), 15- and 45-second videos improved older adults\u2019 (age 55+) ability to identify false content, reduced sharing intentions, and increased skill comprehension. Effects replicated and some were strengthened via booster doses. Critically, benefits extended to real-world online behaviors: analyzing ~8.6 million website visits revealed that older adults applied learned skills in everyday web browsing, improving the quality of their information diets. A field experiment in which videos were run as ads on YouTube improved skill comprehension among 300,000 older Americans, demonstrating that these interventions enhance older adults\u2019 digital literacy at scale in a naturalistic environment.',
  },
]

export const labMembers: LabMember[] = [
  {
    name: 'Ross Dahlke',
    role: 'Director',
    photo: '/images/_MG_2663.jpeg',
    website: '/',
    email: 'ross.dahlke@wisc.edu',
  },
]
