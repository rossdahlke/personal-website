import Image from 'next/image'
import Link from 'next/link'
import { director, graduateStudents, upcomingTalks, pastTalks } from '@/data/lab'
import type { LabMember } from '@/data/lab'

const anchorSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'people', label: 'People' },
  { id: 'publications', label: 'Publications' },
  { id: 'talks', label: 'Talks' },
  { id: 'join', label: 'Join' },
]

export default function CodeLab() {
  return (
    <div className="pb-24 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Header / Hero */}
        <header className="mb-16">
          <p className="font-mono text-[var(--link)] uppercase tracking-[0.2em] text-sm mb-4">
            UW::CODE
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight">
            The <span className="font-mono">CODE</span> Lab
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mb-8">
            Computational Observation of Digital Exposure
          </p>
          <nav className="flex flex-wrap gap-2">
            {anchorSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-4 py-2 rounded-full text-sm border border-[var(--border-color)] text-[var(--muted)] hover:text-[var(--link)] hover:border-[var(--link)] transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* Overview */}
        <section id="overview" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              The CODE Lab (Computational Observation of Digital Exposure) at the University of Wisconsin–Madison studies what information people encounter in digital environments and how that exposure shapes attitudes and behavior. Using large-scale behavioral data, the lab builds observational infrastructure and computational tools for studying online information environments increasingly shaped by AI.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              A major line of work examines online prediction markets as a new form of political information. Platforms like Polymarket and Kalshi now sit alongside polls and forecasts as public signals about elections, and the lab maintains a real-time archive of prediction market trading, commenting, and reacting to study who trades, what moves prices, and how market odds circulate through news coverage and shape what people believe about a race. Recent work describes the small set of sophisticated traders behind most political trading volume and asks whether traders buy the candidate they expect to win or the candidate they want to win.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Alongside the prediction markets archive, the lab runs two other data collections: a longitudinal panel of Americans&apos; web browsing paired with survey responses, and a panel study combining personal messaging data with surveys and ecological momentary assessments. The lab also supports graduate training in computational methods for communication research.
            </p>
          </div>
        </section>

        {/* People */}
        <section id="people" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-8">People</h2>

          <div className="min-[832px]:max-w-[calc(50%-0.75rem)] mx-auto mb-12">
            <MemberCard member={director} />
          </div>

          <h3 className="text-lg font-medium mb-6">Graduate Students</h3>
          <div className="grid grid-cols-1 min-[832px]:grid-cols-2 gap-6">
            {graduateStudents.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Selected Publications */}
        <section id="publications" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-2">Selected Publications</h2>
          <p className="text-sm text-[var(--muted)] mb-8">* indicates equal authorship</p>

          <h3 className="text-lg font-medium mb-4">Prediction Markets</h3>
          <div className="space-y-4 mb-8">
            <div className="space-y-1">
              <p className="text-base leading-relaxed pl-8 -indent-8 mb-0">
                Dahlke, R., Mine, N., Zhao, H., Huang, Y., &amp; Shah, D. (2026). Electoral Predictions on Polymarket: A Quantitative Description of Trading, Commenting, and Reacting. <em>Journal of Quantitative Description: Digital Media, 6</em>. <a href="https://doi.org/10.51685/jqd.2026.011" target="_blank" rel="noopener noreferrer">https://doi.org/10.51685/jqd.2026.011</a>
              </p>
              <p className="text-sm text-[var(--muted)] pl-8 mb-0">
              Coverage: <a href="https://www.washingtonpost.com/politics/2026/06/23/why-prediction-markets-election-picks-are-useful-even-when-they-seem-wrong/" target="_blank" rel="noopener noreferrer">The Washington Post</a> · <a href="https://www.jsonline.com/story/news/politics/elections/2026/07/21/wisconsin-voters-kalshi-polymarket/90934870007/" target="_blank" rel="noopener noreferrer">Milwaukee Journal Sentinel</a>
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">Open Web</h3>
          <div className="space-y-4 mb-8">
            <div className="space-y-1">
              <p className="text-base leading-relaxed pl-8 -indent-8 mb-0">
                Dahlke, R., Moore, R. C., Adib-Azpeitia, D., Ugander, J., &amp; Hancock, J. T. (2026). Multi-Platform Referrers of Misinformation: A Comparative Analysis of Misinformation Visits Referred by Facebook, Twitter, Instagram, Reddit, YouTube, Snapchat, and TikTok. <em>Political Communication</em>. <a href="https://doi.org/10.1080/10584609.2026.2679492" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/10584609.2026.2679492</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Dahlke*, R., Moore*, R. C., &amp; Hancock, J. T. (2026). Exposure to (AI-Generated) Untrustworthy Websites in the 2024 US Election. <em>OSF Preprints</em>. <a href="https://doi.org/10.31234/osf.io/qtdmg_v1" target="_blank" rel="noopener noreferrer">https://doi.org/10.31234/osf.io/qtdmg_v1</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Dahlke*, R., Moore*, R. C., Bengani, P., &amp; Hancock, J. (2026). The Consumption of Pink Slime Journalism: Who, What, When, Where, and Why? <em>Digital Journalism</em>, 1-23. <a href="https://doi.org/10.1080/21670811.2026.2669525" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/21670811.2026.2669525</a>
              </p>
              <p className="text-sm text-[var(--muted)] pl-8 mb-0">
              Coverage: <a href="https://www.bostonglobe.com/2024/06/26/business/pink-slime-fake-news-new-england-west-cook/" target="_blank" rel="noopener noreferrer">The Boston Globe</a> · <a href="https://localnewsinitiative.northwestern.edu/posts/2023/03/28/pink-slime-stanford-study/" target="_blank" rel="noopener noreferrer">Northwestern Local News Initiative</a>
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base leading-relaxed pl-8 -indent-8 mb-0">
                Dahlke*, R., Tu*, F., Wang*, Y.-C., Lu, Y., Engeda, B. W., &amp; Hancock, J. T. (2025). Contextualizing Misinformation: A User-Centric Approach to Linguistic and Topical Patterns in News Consumption. <em>Proceedings of the ACM on Human-Computer Interaction, 9</em>(CSCW1), 1-40. <a href="https://doi.org/10.1145/3757571" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3757571</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Dahlke, R., Kumar, D., Durumeric, Z., &amp; Hancock, J. T. (2025). Quantifying the Systematic Bias in the Accessibility and Inaccessibility of Web Scraping Content from URL-Logged Web-Browsing Digital Trace Data. <em>Social Science Computer Review, 43</em>(5), 1071-1086. <a href="https://doi.org/10.1177/08944393231218214" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/08944393231218214</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Dahlke, R., &amp; Hancock, J. (2025). Untrustworthy Website Exposure and Election Beliefs: Selective Exposure and Ideological Asymmetry. <em>Journal of Online Trust and Safety, 3</em>(1). <a href="https://doi.org/10.54501/jots.v3i1.250" target="_blank" rel="noopener noreferrer">https://doi.org/10.54501/jots.v3i1.250</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Moore*, R. C., Dahlke*, R., Forberg, P. L., &amp; Hancock, J. T. (2024). The Private Life of QAnon: A Mixed Methods Investigation of Americans&apos; Exposure to QAnon Content on the Web. <em>Proceedings of the ACM on Human-Computer Interaction, 8</em>(CSCW2), 1-34. <a href="https://doi.org/10.1145/3687057" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3687057</a>
            </p>
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Moore*, R. C., Dahlke*, R., &amp; Hancock, J. T. (2023). Exposure to Untrustworthy Websites in the 2020 US Election. <em>Nature Human Behaviour, 7</em>, 1096-1105. <a href="https://doi.org/10.1038/s41562-023-01564-2" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41562-023-01564-2</a>
              </p>
              <p className="text-sm text-[var(--muted)] pl-8 mb-0">
              Coverage: <a href="https://www.nytimes.com/2023/04/13/business/media/misinformation-2020-election-study.html" target="_blank" rel="noopener noreferrer">The New York Times</a> · <a href="https://www.weforum.org/stories/2024/01/billions-at-the-ballot-box-and-a-possible-lasting-mark-on-democracy/" target="_blank" rel="noopener noreferrer">World Economic Forum</a> · <a href="https://www.startribune.com/keep-up-the-fight-against-misinformation/600268148" target="_blank" rel="noopener noreferrer">Minnesota Star Tribune</a> · <a href="https://www.thedailybeast.com/stanford-study-finds-less-people-clicked-on-fake-news-sites-in-2020-election/" target="_blank" rel="noopener noreferrer">The Daily Beast</a>
              </p>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">Personal Messaging</h3>
          <div className="space-y-4 mb-8">
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Dahlke, R., &amp; Hancock, J. (2025). The Public Sphere in Private Spaces: Quantifying Political Computer-Mediated Communication in Personal Messaging. <em>OSF Preprints</em>. <a href="https://osf.io/6cpv8/" target="_blank" rel="noopener noreferrer">https://osf.io/6cpv8/</a>
            </p>
          </div>

          <h3 className="text-lg font-medium mb-4">Social Media</h3>
          <div className="space-y-4">
            <p className="text-base leading-relaxed pl-8 -indent-8">
              Kwon, H., Jiang, X., &amp; Dahlke, R. (Forthcoming). Do Politicians&apos; Strategic Facial Displays Drive Resonant Moments on Social Media? Computational Analysis of the 2024 U.S. Presidential Debate Using Multimodal Large Language Models. <em>International Journal of Communication</em>.
            </p>
          </div>
        </section>

        {/* Talks */}
        <section id="talks" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-8">Talks</h2>

          {upcomingTalks.length > 0 && (
            <>
              <h3 className="text-lg font-medium mb-4">Upcoming</h3>
              <div className="space-y-6 mb-8">
                {upcomingTalks.map((talk, index) => (
                  <article
                    key={talk.slug}
                    className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300 animate-stagger-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300 mb-1">
                        <Link href={`/code-lab/talks/${talk.slug}`}>
                          {talk.title}
                        </Link>
                      </h3>
                      <p className="text-base text-[var(--muted)] mb-0">{talk.speaker}</p>
                      <p className="text-sm text-[var(--muted)] mb-0">
                        {talk.date} · {talk.time} · {talk.location}
                      </p>
                      <div className="pt-1">
                        <Link
                          href={`/code-lab/talks/${talk.slug}`}
                          className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                        >
                          Details
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {pastTalks.length > 0 && (
            <>
              <h3 className="text-lg font-medium mb-4">Past</h3>
              <div className="space-y-6">
                {pastTalks.map((talk, index) => (
                  <article
                    key={talk.slug}
                    className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300 animate-stagger-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300 mb-1">
                        <Link href={`/code-lab/talks/${talk.slug}`}>
                          {talk.title}
                        </Link>
                      </h3>
                      <p className="text-base text-[var(--muted)] mb-0">{talk.speaker}</p>
                      <p className="text-sm text-[var(--muted)] mb-0">
                        {talk.date} · {talk.time} · {talk.location}
                      </p>
                      <div className="pt-1">
                        <Link
                          href={`/code-lab/talks/${talk.slug}`}
                          className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                        >
                          Details
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Join */}
        <section id="join" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Join</h2>
          <div className="card space-y-4">
            <p className="text-base md:text-lg leading-relaxed mb-0 text-[var(--muted)]">
              If you are a current UW–Madison graduate student interested in the CODE Lab, please email <a href="mailto:ross.dahlke@wisc.edu">ross.dahlke@wisc.edu</a> for more details.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-0 text-[var(--muted)]">
              Prospective MA and PhD students can apply through <a href="https://sjmc.wisc.edu/admissions/graduate-admissions/" target="_blank" rel="noopener noreferrer">UW–Madison SJMC graduate admissions</a>. The SJMC admits students to the program, not to individual faculty labs. If you are interested in working with me, please mention me in your application.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

function MemberCard({ member }: { member: LabMember }) {
  return (
    <div className="card !p-5 h-full flex flex-col items-center text-center">
      <div className="w-fit max-w-full mx-auto flex flex-col items-center">
      {member.photo && (
        <div className="relative w-60 max-w-full aspect-square rounded-2xl overflow-hidden mb-5">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="240px"
            className="object-cover"
            style={{ objectPosition: member.photoPosition ?? '50% 50%' }}
          />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">
        {member.website ? (
          <Link href={member.website} className="hover:text-[var(--link)] transition-colors duration-300">
            {member.name}
          </Link>
        ) : (
          member.name
        )}
      </h3>
      {member.details.map((line) => (
        <p key={line} className="text-[var(--muted)] text-sm leading-relaxed mb-0">
          {line}
        </p>
      ))}
      {member.email && (
        <p className="text-sm mt-2 mb-0">
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>
      )}
      {member.bio && (
        <p className="text-sm text-[var(--muted)] leading-relaxed mt-3 mb-0">{member.bio}</p>
      )}
      </div>
    </div>
  )
}
