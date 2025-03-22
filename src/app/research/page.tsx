import { getPublications } from '@/utils/scholarFetcher'

type Publication = {
  title: string
  authors: string
  year: number
  journal: string
  volume?: string
  pages?: string
  citations: number
  doi?: string
  mediaCoverage?: Array<{
    url: string
    outlet: string
  }>
}

export default async function Research() {
  const publications = [
    {
      title: "Exposure to untrustworthy websites in the 2020 US election",
      authors: "Moore, R. C., Dahlke, R., & Hancock, J. T.",
      year: 2023,
      journal: "Nature Human Behaviour",
      volume: "7",
      pages: "1096-1105",
      citations: 18,
      doi: "https://doi.org/10.1038/s41562-023-01564-2",
      mediaCoverage: [
        {
          outlet: "The New York Times",
          url: "https://www.nytimes.com/2023/04/13/business/media/misinformation-2020-election-study.html"
        },
        {
          outlet: "World Economic Forum",
          url: "https://www.weforum.org/stories/2024/01/billions-at-the-ballot-box-and-a-possible-lasting-mark-on-democracy/"
        },
        {
          outlet: "Star Tribune",
          url: "https://www.startribune.com/keep-up-the-fight-against-misinformation/600268148"
        },
        {
          outlet: "The Daily Beast",
          url: "https://www.thedailybeast.com/stanford-study-finds-less-people-clicked-on-fake-news-sites-in-2020-election/"
        }
      ]
    },
    {
      title: "January 6 arrests and media coverage do not remobilize conservatives on social media",
      authors: "Dahlke, R., & Pan, J.",
      year: 2024,
      journal: "Proceedings of the National Academy of Sciences",
      volume: "121(23)",
      pages: "e2401239121",
      doi: "https://doi.org/10.1073/pnas.2401239121"
    },
    {
      title: "The Private Life of QAnon: A Mixed Methods Investigation of Americans' Exposure to QAnon Content on the Web",
      authors: "Moore, R. C., Dahlke, R., Forberg, P. L., & Hancock, J. T.",
      year: 2024,
      journal: "Proceedings of the ACM on Human-Computer Interaction",
      volume: "8(CSCW2)",
      pages: "1-34",
      doi: "https://doi.org/10.1145/3687057"
    },
    {
      title: "Quantifying the Systematic Bias in the Accessibility and Inaccessibility of Web Scraping Content from URL-Logged Web-Browsing Digital Trace Data",
      authors: "Dahlke, R., Kumar, D., Durumeric, Z., & Hancock, J. T.",
      year: 2023,
      journal: "Social Science Computer Review",
      doi: "https://doi.org/10.1177/08944393231218214"
    },
    {
      title: "Surviving or thriving political defeat on social media: a temporal analysis of how electoral loss exacerbates the gender gap in political expression",
      authors: "Dahlke, R., & Zhang, Y.",
      year: 2024,
      journal: "Journal of Computer-Mediated Communication",
      volume: "29(1)",
      pages: "zmad051",
      doi: "https://doi.org/10.1093/jcmc/zmad051"
    },
    {
      title: "Battle for Inbox and Bucks: Comparing Email Fundraising Strategies of Donald Trump and Joe Biden in the 2020 US Presidential Election",
      authors: "Chen, B., Borah, P., Dahlke, R., & Lukito, J.",
      year: 2024,
      journal: "Journal of Quantitative Description: Digital Media",
      volume: "4",
      doi: "https://journalqd.org/article/view/4299"
    },
    {
      title: "Audio-as-Data Tools: Replicating Computational Data Processing",
      authors: "Lukito, J., Greenfield, J., Yang, Y., Dahlke, R., Brown, M. A., Lewis, R., & Chen, B.",
      year: 2024,
      journal: "Media and Communication",
      volume: "12",
      doi: "https://doi.org/10.17645/mac.7851"
    },
    {
      title: "The effect of online misinformation exposure on false election beliefs",
      authors: "Dahlke, R., & Hancock, J.",
      year: 2022,
      journal: "OSF Preprints",
      doi: "https://doi.org/10.31219/osf.io/325tn"
    },
    {
      title: "The Consumption of Pink Slime Journalism: Who, What, When, Where, and Why?",
      authors: "Moore, R., Dahlke, R., Bengani, P., & Hancock, J.",
      year: 2023,
      journal: "OSF",
      doi: "https://doi.org/10.31219/osf.io/3bwz6",
      mediaCoverage: [
        {
          outlet: "Northwestern Local News Initiative",
          url: "https://localnewsinitiative.northwestern.edu/posts/2023/03/28/pink-slime-stanford-study/"
        },
        {
          outlet: "The Boston Globe",
          url: "https://www.bostonglobe.com/2024/06/26/business/pink-slime-fake-news-new-england-west-cook/"
        }
      ]
    }
  ]

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-24">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Research</h1>
          <p className="text-xl font-normal text-[var(--muted)] leading-relaxed max-w-2xl">
            My research uses computational methods, novel digital trace data collection, and field experiments to study how people interact with information online.
          </p>
        </header>
        
        <div className="space-y-12">
          {publications.map((pub, index) => (
            <article 
              key={index} 
              className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300"
            >
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {pub.authors} ({pub.year}). <span className="italic">{pub.journal}</span>
                  {pub.volume && `, ${pub.volume}`}
                  {pub.pages && `, ${pub.pages}`}.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  {pub.doi && (
                    <a 
                      href={pub.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Paper 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {pub.mediaCoverage && pub.mediaCoverage.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-sm font-medium text-[var(--muted)] mb-2">Media Coverage:</h4>
                      <ul className="space-y-1">
                        {pub.mediaCoverage.map((coverage, idx) => (
                          <li key={idx}>
                            <a 
                              href={coverage.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                            >
                              {coverage.outlet}
                              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 