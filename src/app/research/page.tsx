import { publications, preprints, Publication } from '@/data/publications'

export const metadata = {
  title: 'Research | Ross Dahlke',
  description: 'Publications on computational social science, misinformation, and digital media.',
}

export default async function Research() {
  const boldAuthorName = (authors: string, isCoFirstAuthored: boolean = false) => {
    let result = authors;

    if (isCoFirstAuthored && !authors.includes('*')) {
      // Add asterisks to co-first authors (Moore and Dahlke)
      result = result.replace(/Moore, R\.( C\.)?/g, (match) => `${match}*`);
    }

    // Bold Dahlke's name (with or without existing asterisk)
    result = result.replace(/Dahlke\*?, R\./g, (match) => {
      if (isCoFirstAuthored && !match.includes('*')) {
        return `<strong>Dahlke, R.*</strong>`;
      }
      return `<strong>${match}</strong>`;
    });

    // Clean up trailing comma if name is at the end
    return result.replace(/,\s*$/g, '');
  };

  const renderPublication = (pub: Publication, index: number, total: number) => (
    <article
      key={index}
      className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300 animate-stagger-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="space-y-2">
        <h2 className="mb-0 text-xl md:text-2xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300">
          <span className="text-[var(--muted)] font-normal">{total - index}.</span>{' '}
          {pub.doi ? (
            <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--link)] transition-colors duration-300">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h2>
        <p className="mb-0 text-base text-[var(--muted)] leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: boldAuthorName(pub.authors, pub.isCoFirstAuthored) }} />
          {' '}({pub.year}). <span className="italic text-[var(--text)]">{pub.journal}</span>
          {pub.volume && `, ${pub.volume}`}
          {pub.pages && `, ${pub.pages}`}.
        </p>
        <div className="flex flex-col">
          {pub.isCoFirstAuthored && (
            <p className="text-sm text-[var(--muted)] italic pb-0.5">* Co-first authors</p>
          )}
          {pub.award && (
            <p className="text-sm text-[var(--muted)] pb-0.5">
              <span className="font-medium">{pub.award}</span>
            </p>
          )}
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
              <span className="text-sm font-medium text-[var(--muted)]">Media Coverage: </span>
              <span className="text-sm">
                {pub.mediaCoverage.map((coverage, idx) => (
                  <span key={idx}>
                    <a
                      href={coverage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-300"
                    >
                      {coverage.outlet}
                    </a>
                    {idx < pub.mediaCoverage!.length - 1 && ' · '}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Research</h1>
          <p className="text-xl font-normal text-[var(--muted)] leading-relaxed max-w-2xl">
            My research uses computational methods, novel digital trace data collection, and field experiments to study how people interact with information online.
          </p>
          <a
            href="/cv"
            className="group inline-flex items-center mt-6 text-sm text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-300"
          >
            View full CV
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Published Research</h2>
          <div className="space-y-8">
            {publications.map((pub, index) => renderPublication(pub, index, publications.length))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Preprints & Non-Peer Reviewed</h2>
          <div className="space-y-8">
            {preprints.map((pub, index) => renderPublication(pub, index, preprints.length))}
          </div>
        </section>
      </div>
    </div>
  )
}
