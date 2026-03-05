export type LabMember = {
  name: string
  role: 'Director' | 'PhD Student' | 'Masters Student' | 'Undergraduate RA'
  photo?: string
  website?: string
  email?: string
  bio?: string
}

export const labMembers: LabMember[] = [
  {
    name: 'Ross Dahlke',
    role: 'Director',
    photo: '/images/_MG_2663.jpeg',
    website: '/',
    email: 'ross.dahlke@wisc.edu',
  },
]
