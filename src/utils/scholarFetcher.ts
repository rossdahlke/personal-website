import { cache } from 'react'

export type Publication = {
  title: string
  authors: string
  year: number
  journal: string
  volume?: string
  pages?: string
  citations: number
  doi?: string
}

// Cache the fetch for 24 hours
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export const getPublications = cache(async (): Promise<Publication[]> => {
  try {
    // Fetch from your preferred storage/cache first
    const cachedData = await localStorage.getItem('publications_cache')
    const cachedTimestamp = await localStorage.getItem('publications_timestamp')
    
    if (cachedData && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp)
      if (Date.now() - timestamp < CACHE_DURATION) {
        return JSON.parse(cachedData)
      }
    }

    // If no cache or cache expired, fetch from Google Scholar
    const response = await fetch(`https://scholar.google.com/citations?user=y2g0vNwAAAAJ&hl=en&cstart=0&pagesize=100`)
    if (!response.ok) throw new Error('Failed to fetch from Google Scholar')
    
    const text = await response.text()
    // Parse the HTML response and extract publication data
    // This is a placeholder for the actual parsing logic
    const publications: Publication[] = [] // Parse logic here
    
    // Cache the results
    await localStorage.setItem('publications_cache', JSON.stringify(publications))
    await localStorage.setItem('publications_timestamp', Date.now().toString())
    
    return publications
  } catch (error) {
    console.error('Error fetching publications:', error)
    // Return hardcoded data as fallback
    return [
      {
        title: "Exposure to untrustworthy websites in the 2020 US election",
        authors: "Moore, R. C., Dahlke, R., & Hancock, J. T.",
        year: 2023,
        journal: "Nature Human Behaviour",
        volume: "7(7)",
        pages: "1096-1105",
        citations: 45,
        doi: "https://doi.org/10.1038/s41562-023-01640-7"
      },
      // ... rest of your current publications
    ]
  }
}) 