export type LabMember = {
  name: string
  role: 'Principal Investigator' | 'PhD Student' | 'Masters Student' | 'Undergraduate RA'
  photo?: string
  website?: string
  email?: string
  bio?: string
}

export type ResearchProject = {
  title: string
  description: string
  status: 'active' | 'completed'
}

export const labMembers: LabMember[] = [
  {
    name: 'Ross Dahlke',
    role: 'Principal Investigator',
    photo: '/images/_MG_2663.jpeg',
    website: '/',
    email: 'ross.dahlke@wisc.edu',
  },
]

export const researchProjects: ResearchProject[] = []
