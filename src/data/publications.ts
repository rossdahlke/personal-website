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
    title: "Multi-platform referrers of misinformation: A comparative analysis of misinformation visits referred by Facebook, Twitter, Instagram, Reddit, YouTube, Snapchat, and TikTok",
    authors: "Dahlke, R., Moore, R. C., Adib-Azpeitia, D., Ugander, J., & Hancock, J. T.",
    year: 2026,
    journal: "Political Communication",
    doi: "https://doi.org/10.1080/10584609.2026.2679492"
  },
  {
    title: "Style and substance on The Alex Jones Show predict InfoWars sales: A multi-modal analysis of a media empire",
    authors: "Dahlke, R., Yang, Y., Lukito, J., Greenfield, J., Chen, B., Brown, M. A., & Lewis, R.",
    year: 2026,
    journal: "Information, Communication & Society",
    pages: "1-20",
    doi: "https://doi.org/10.1080/1369118X.2026.2642851"
  },
  {
    title: "The consumption of pink slime journalism: Who, what, when, where, and why?",
    authors: "Dahlke*, R., Moore*, R. C., Bengani, P., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2026,
    journal: "Digital Journalism",
    pages: "1-23",
    doi: "https://doi.org/10.1080/21670811.2026.2669525",
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
    title: "Electoral predictions on Polymarket: A quantitative description of trading, commenting, and reacting",
    authors: "Dahlke, R., Mine, N., Zhao, H., Huang, Y., & Shah, D.",
    year: 2026,
    journal: "Journal of Quantitative Description: Digital Media",
    volume: "6",
    doi: "https://doi.org/10.51685/jqd.2026.011",
    mediaCoverage: [
      {
        outlet: "The Washington Post",
        url: "https://www.washingtonpost.com/politics/2026/06/23/why-prediction-markets-election-picks-are-useful-even-when-they-seem-wrong/"
      }
    ]
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
    award: "Best Paper Honorable Mention (top ~5% of submissions), ACM CHI 2026",
    mediaCoverage: [
      {
        outlet: "The New York Times",
        url: "https://www.nytimes.com/interactive/2026/03/31/magazine/quit-smartphone-addiction-social-media.html"
      },
      {
        outlet: "CNBC",
        url: "https://www.cnbc.com/2026/05/16/we-switched-to-flip-phones-for-4-days-as-a-smartphone-detox.html"
      }
    ]
  },
  {
    title: "Cross-platformization: How U.S. right-leaning media curate their posts on Twitter and Truth Social",
    authors: "Lukito, J., Zhang, Y., Chen, B., Prochaska, S., Pruden, M. L., Yang, Y., Zhong, W., Brown, M. A., Dahlke, R., Greenfield, J., Suk, J., & Borah, P.",
    year: 2026,
    journal: "New Media & Society",
    doi: "https://doi.org/10.1177/14614448261470889"
  },
  {
    title: "Contextualizing misinformation: A user-centric approach to linguistic and topical patterns in news consumption",
    authors: "Dahlke*, R., Tu*, F., Wang*, Y.-C., Lu, Y., Engeda, B. W., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2025,
    journal: "Proceedings of the ACM on Human-Computer Interaction",
    volume: "9(CSCW1)",
    pages: "1-40",
    doi: "https://doi.org/10.1145/3757571"
  },
  {
    title: "Untrustworthy website exposure and election beliefs: Selective exposure and ideological asymmetry",
    authors: "Dahlke, R., & Hancock, J.",
    year: 2025,
    journal: "Journal of Online Trust and Safety",
    volume: "3(1)",
    doi: "https://doi.org/10.54501/jots.v3i1.250"
  },
  {
    title: "Candidates be posting: Multi-platform strategies and partisan preferences in the 2022 US midterm elections",
    authors: "Lukito, J., Macdonald, M., Chen, B., Brown, M. A., Prochaska, S., Yang, Y., Greenfield, J., Suk, J., Zhong, W., Dahlke, R., & Borah, P.",
    year: 2025,
    journal: "Social Media + Society",
    volume: "11(2)",
    doi: "https://doi.org/10.1177/20563051251337541"
  },
  {
    title: "Quantifying the systematic bias in the accessibility and inaccessibility of web scraping content from URL-logged web-browsing digital trace data",
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
    title: "The private life of QAnon: A mixed methods investigation of Americans' exposure to QAnon content on the web",
    authors: "Moore, R. C., Dahlke, R., Forberg, P. L., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2024,
    journal: "Proceedings of the ACM on Human-Computer Interaction",
    volume: "8(CSCW2)",
    pages: "1-34",
    doi: "https://doi.org/10.1145/3687057"
  },
  {
    title: "Surviving or thriving political defeat on social media: A temporal analysis of how electoral loss exacerbates the gender gap in political expression",
    authors: "Dahlke, R., & Zhang, Y.",
    year: 2024,
    journal: "Journal of Computer-Mediated Communication",
    volume: "29(1)",
    pages: "zmad051",
    doi: "https://doi.org/10.1093/jcmc/zmad051"
  },
  {
    title: "Battle for inbox and bucks: Comparing email fundraising strategies of Donald Trump and Joe Biden in the 2020 U.S. presidential election",
    authors: "Chen, B., Borah, P., Dahlke, R., & Lukito, J.",
    year: 2024,
    journal: "Journal of Quantitative Description: Digital Media",
    volume: "4",
    doi: "https://doi.org/10.51685/jqd.2024.012"
  },
  {
    title: "Audio-as-data tools: Replicating computational data processing",
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
        outlet: "Minnesota Star Tribune",
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
    title: "Exposure to (AI-generated) untrustworthy websites in the 2024 US election",
    authors: "Dahlke*, R., Moore*, R. C., & Hancock, J. T.",
    isCoFirstAuthored: true,
    year: 2026,
    journal: "OSF Preprints",
    doi: "https://doi.org/10.31234/osf.io/qtdmg_v1"
  },
  {
    title: "The public sphere in private spaces: Quantifying political computer-mediated communication in personal messaging",
    authors: "Dahlke, R., & Hancock, J.",
    year: 2025,
    journal: "OSF Preprints",
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
