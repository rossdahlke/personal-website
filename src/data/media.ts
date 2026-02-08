export type MediaItem = {
  outlet: string
  title: string
  url: string
  date: string
  topic: string
}

export const media: MediaItem[] = [
  // Political communication commentary
  {
    outlet: "Madison Magazine",
    title: "The rising threat of political violence in Wisconsin",
    url: "https://www.channel3000.com/madison-magazine/the-rising-threat-of-political-violence-in-wisconsin/article_8def7f1c-7782-483a-b9a9-02d6f322e463.html",
    date: "2025-10-29",
    topic: "Political Communication"
  },
  {
    outlet: "Badger Herald",
    title: "In \u2018107 Days,\u2019 Harris defends loss, looks ahead",
    url: "https://badgerherald.com/books/2025/10/09/in-107-days-harris-defends-loss-looks-ahead-er-cc-rb/",
    date: "2025-10-09",
    topic: "Political Communication"
  },
  {
    outlet: "Mission Local",
    title: "Kamala Harris isn\u2019t the only \u2018brat:\u2019 How S.F. mayoral candidates use social media",
    url: "https://missionlocal.org/2024/10/campaign-social-media-sf-mayoral-candidates/",
    date: "2024-10-29",
    topic: "Political Communication"
  },
  // Coverage of "The Consumption of Pink Slime Journalism"
  {
    outlet: "The Boston Globe",
    title: "Dozens of \u2018pink slime\u2019 sites masquerade as New England news outlets",
    url: "https://www.bostonglobe.com/2024/06/26/business/pink-slime-fake-news-new-england-west-cook/",
    date: "2024-06-26",
    topic: "Pink Slime Journalism"
  },
  {
    outlet: "Northwestern Local News Initiative",
    title: "As \u2018pink slime\u2019 aims to fill local news vacuum, is anyone reading?",
    url: "https://localnewsinitiative.northwestern.edu/posts/2023/03/28/pink-slime-stanford-study/",
    date: "2023-03-28",
    topic: "Pink Slime Journalism"
  },
  // Coverage of "Exposure to untrustworthy websites in the 2020 US election"
  {
    outlet: "World Economic Forum",
    title: "Billions at the ballot box, and a possible lasting mark on democracy",
    url: "https://www.weforum.org/stories/2024/01/billions-at-the-ballot-box-and-a-possible-lasting-mark-on-democracy/",
    date: "2024-01-16",
    topic: "Misinformation & Elections"
  },
  {
    outlet: "The New York Times",
    title: "Misinformation Defense Worked in 2020, Up to a Point, Study Finds",
    url: "https://www.nytimes.com/2023/04/13/business/media/misinformation-2020-election-study.html",
    date: "2023-04-13",
    topic: "Misinformation & Elections"
  },
  {
    outlet: "Star Tribune",
    title: "Keep up the fight against misinformation",
    url: "https://www.startribune.com/keep-up-the-fight-against-misinformation/600268148",
    date: "2023-04-20",
    topic: "Misinformation & Elections"
  },
  {
    outlet: "The Daily Beast",
    title: "Fewer People Clicked on Fake News Sites in 2020 Election",
    url: "https://www.thedailybeast.com/stanford-study-finds-less-people-clicked-on-fake-news-sites-in-2020-election/",
    date: "2023-04-13",
    topic: "Misinformation & Elections"
  },
]
