export type Publication = {
  title: string
  authors: string
  year: number
  journal: string
  volume?: string
  pages?: string
  doi?: string
  mediaCoverage?: Array<{
    url: string
    outlet: string
  }>
  isCoFirstAuthored?: boolean
  award?: string
}

export const publications: Publication[] = [
  {
    title: "Style and substance on The Alex Jones Show predict InfoWars sales: a multi-modal analysis of a media empire",
    authors: "Dahlke, R., Yang, Y., Lukito, J., Greenfield, J., Chen, B., Brown, M. A., & Lewis, R.",
    year: 2026,
    journal: "Information, Communication & Society",
    pages: "1-20",
    doi: "https://doi.org/10.1080/1369118X.2026.2642851"
  },
  {
    title: "Targeted digital voter suppression efforts likely decrease voter turnout",
    authors: "Kim, Y. M., Dahlke, R., Song, H., & Heinrich, R.",
    year: 2026,
    journal: "Proceedings of the National Academy of Sciences",
    volume: "123(5)",
    pages: "e2519944123",
    doi: "https://doi.org/10.1073/pnas.2519944123"
  },
  {
    title: "Going light: The effects of minimal mobile phone adoption on young adults' well-being depend on motivation",
    authors: "Lee, A. Y., Stevic, A., Walker-Keleher, G., Chen, C., Charity, E., Dahlke, R., & Hancock, J.",
    year: 2026,
    journal: "Proceedings of the CHI Conference on Human Factors in Computing Systems",
    doi: "https://doi.org/10.1145/3772318.3791723",
    mediaCoverage: [
      {
        outlet: "The New York Times",
        url: "https://www.nytimes.com/interactive/2026/03/31/magazine/quit-smartphone-addiction-social-media.html"
      }
    ]
  },
  {
    title: "Contextualizing Misinformation: A User-Centric Approach to Linguistic and Topical Patterns in News Consumption",
    authors: "Dahlke*, R., Tu*, F., Wang*, Y.-C., Lu, Y., Engeda, B. W., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2025,
    journal: "Proceedings of the ACM on Human-Computer Interaction",
    volume: "9(CSCW1)",
    pages: "1-40",
    doi: "https://doi.org/10.1145/3757571"
  },
  {
    title: "Untrustworthy Website Exposure and Election Beliefs: Selective Exposure and Ideological Asymmetry",
    authors: "Dahlke, R., & Hancock, J.",
    year: 2025,
    journal: "Journal of Online Trust and Safety",
    volume: "3(1)",
    doi: "https://doi.org/10.54501/jots.v3i1.250"
  },
  {
    title: "Candidates Be Posting: Multi-Platform Strategies and Partisan Preferences in the 2022 US Midterm Elections",
    authors: "Lukito, J., Macdonald, M., Chen, B., Brown, M. A., Prochaska, S., Yang, Y., Greenfield, J., Suk, J., Zhong, W., Dahlke, R., & Borah, P.",
    year: 2025,
    journal: "Social Media + Society",
    volume: "11(2)",
    doi: "https://doi.org/10.1177/20563051251337541"
  },
  {
    title: "Quantifying the Systematic Bias in the Accessibility and Inaccessibility of Web Scraping Content from URL-Logged Web-Browsing Digital Trace Data",
    authors: "Dahlke, R., Kumar, D., Durumeric, Z., & Hancock, J. T.",
    year: 2025,
    journal: "Social Science Computer Review",
    volume: "43(5)",
    pages: "1071-1086",
    doi: "https://doi.org/10.1177/08944393231218214"
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
    isCoFirstAuthored: true,
    year: 2024,
    journal: "Proceedings of the ACM on Human-Computer Interaction",
    volume: "8(CSCW2)",
    pages: "1-34",
    doi: "https://doi.org/10.1145/3687057"
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
    doi: "https://doi.org/10.51685/jqd.2024.012"
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
    title: "Exposure to untrustworthy websites in the 2020 US election",
    authors: "Moore, R. C., Dahlke, R., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2023,
    journal: "Nature Human Behaviour",
    volume: "7",
    pages: "1096-1105",
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
  }
]

export const preprints: Publication[] = [
  {
    title: "The Consumption of Pink Slime Journalism: Who, What, When, Where, and Why?",
    authors: "Dahlke*, R., Moore*, R. C., Bengani, P., & Hancock, J.",
    isCoFirstAuthored: true,
    year: 2026,
    journal: "Forthcoming at Digital Journalism",
    doi: "https://doi.org/10.31219/osf.io/3bwz6",
    award: "Top Student Paper, ICA Political Communication Division, 2024",
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
  },
  {
    title: "Multi-Platform Referrers of Misinformation: A Comparative Ablation Study of Misinformation Visits Referred by Facebook, Twitter, Instagram, Reddit, YouTube, Snapchat, and TikTok",
    authors: "Dahlke, R., Moore, R., Adib-Azpeitia, D., Ugander, J., & Hancock, J.",
    year: 2026,
    journal: "Conditionally Accepted at Political Communication"
  },
  {
    title: "Exposure to (AI-generated) untrustworthy websites in the 2024 US election",
    authors: "Dahlke*, R., Moore*, R. C., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2026,
    journal: "Revise & Resubmit at Nature Communications",
    doi: "https://doi.org/10.31234/osf.io/qtdmg_v1"
  },
  {
    title: "Cross-Platformization: How U.S. Right-Leaning Media Curate Their Posts on Twitter and Truth Social",
    authors: "Lukito, J., Zhang, Y., Pruden, M., Prochaska, S., Chen, B., Zhong, W., Brown, M., Dahlke, R., Suk, J., Greenfield, J., & Borah, P.",
    year: 2026,
    journal: "Revise & Resubmit at New Media and Society"
  },
  {
    title: "Do Politicians' Strategic Facial Expressions Drive Resonant Moments on Social Media? Computational Analysis of the 2024 U.S. Presidential Debate Using Multimodal Large Language Models",
    authors: "Kwon, H., Jiang, X., & Dahlke, R.",
    year: 2026,
    journal: "Revise & Resubmit at International Journal of Communication"
  },
  {
    title: "Electoral Prediction Markets: A Quantitative Description of Online Political Betting Markets",
    authors: "Dahlke, R., Mine, N., Zhao, H., Huang, Y., & Shah, D.",
    year: 2026,
    journal: "Under Review"
  },
  {
    title: "Replacing Smartphones With Minimal Mobile Phones Improves College Students' Trust in News but Not News-Finds-Me Perceptions",
    authors: "Dahlke, R., Lee, A. Y., Stevic, A., Walker-Keleher, G., Chen, C. Q.-A., Charity, E., & Hancock, J. T.",
    year: 2026,
    journal: "Under Review"
  },
  {
    title: "The Public Sphere in Private Spaces: Quantifying Political Computer-Mediated Communication in Personal Messaging",
    authors: "Dahlke, R., & Hancock, J.",
    year: 2025,
    journal: "Under Review",
    doi: "https://osf.io/6cpv8/"
  },
  {
    title: "The state of digital media data research, 2023",
    authors: "Lukito, J., Brown, M. A., Dahlke, R., Suk, J., Yang, Y., Zhang, Y., Chen, B., Kim, S. J., & Soorholtz, K.",
    year: 2023,
    journal: "Social Science Research Council",
    doi: "http://dx.doi.org/10.26153/tsw/46177"
  }
]
