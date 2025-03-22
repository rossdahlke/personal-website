import { cache } from 'react'

interface Publication {
  title: string;
  authors: string;
  year: string | number;
  journal: string;
  citations?: number;
  doi?: string;
  volume?: string;
  pages?: string;
}

const CACHE_KEY = 'scholar_publications'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export const getPublications = cache(async (): Promise<Publication[]> => {
  try {
    const response = await fetch(
      'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID&hl=en'
    )
    const data = await response.text()
    
    // Parse the HTML response to extract publications
    // This is a simplified example - you'll need to implement proper parsing
    const publications: Publication[] = [
      {
        title: "Exposure to untrustworthy websites in the 2020 US election",
        authors: "Moore, R. C., Dahlke, R., & Hancock, J. T.",
        year: 2023,
        journal: "Nature Human Behaviour",
        volume: "7(7)",
        pages: "1096-1105",
        citations: 45,
        doi: "https://doi.org/10.1038/s41562-023-01640-7"
      }
    ]
    
    return publications
  } catch (error) {
    console.error('Error fetching publications:', error)
    return []
  }
}) 