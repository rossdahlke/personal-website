export type LabMember = {
  name: string
  role: string
  affiliation?: string
  photo?: string
  photoPosition?: string
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
  speakerBio?: string
}

export const upcomingTalks: Talk[] = []

export const pastTalks: Talk[] = [
  {
    slug: 'debutts-media-patronage-2026',
    title: 'Media Patronage: How Authoritarian Regimes Exploit Media Competition to Shape Global Information',
    speaker: 'Matt DeButts',
    speakerTitle: 'PhD Candidate, Department of Communication',
    speakerAffiliation: 'Stanford University',
    speakerPhoto: '/images/matt-debutts.png',
    date: 'April 27, 2026',
    time: '12:00 PM - 1:00 PM',
    location: 'Nafziger Room 5055, Vilas Hall',
    abstract: 'Authoritarian regimes often seek to influence media beyond their borders. We argue that the financial strain facing media organizations worldwide has created an opportunity for \u201cmedia patronage\u201d: the selective support of outlets whose coverage already slants toward the regime. Media patronage does not target individual journalists or outlets but operates at the ecosystem level, increasing pro-regime market share over time. We document the Chinese Communist Party\u2019s use of this strategy in global Chinese-language digital news, analyzing 14 million articles from 193 outlets over 25 years, and find that patronage does not change coverage but aids survival by increasing traffic and decreasing closure rates. We further show overseas patronage has domestic payoffs by diminishing the circulation of protest coverage during domestic crises. These results contribute to research on transnational authoritarian influence and media capture.',
    speakerBio: 'Matt DeButts is a PhD candidate in the Department of Communication at Stanford University who researches politics, media, and transnational information flows. His academic work has been published in Journal of Communication, Social Media+ Society, China Quarterly and EMNLP Findings, and his journalistic work has been published in Columbia Journalism Review, Vox, and ChinaFile among others. Prior to Stanford, Matt was a Beijing-based correspondent with the Los Angeles Times and contributing editor at the Economist Intelligence Unit.',
  },
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

const SJMC = 'University of Wisconsin\u2013\u2060Madison School of Journalism and Mass Communication'

export const director: LabMember = {
  name: 'Ross Dahlke',
  role: 'Director, CODE Lab',
  affiliation: `Assistant Professor, ${SJMC}`,
  photo: '/images/_MG_2663.jpeg',
  photoPosition: '50% 25%',
  website: '/',
  email: 'ross.dahlke@wisc.edu',
}

export const graduateStudents: LabMember[] = [
  {
    name: 'Yingqi Huang',
    role: 'Research Master\u2019s Student',
    affiliation: SJMC,
    photo: '/images/huang-yingqi.jpg',
  },
  {
    name: 'Yanshu Wang',
    role: 'PhD Student',
    affiliation: SJMC,
    photo: '/images/wang-yanshu.jpg',
  },
  {
    name: 'Haotian Zhao',
    role: 'PhD Student',
    affiliation: SJMC,
    photo: '/images/zhao-haotian.jpg',
  },
]
