import { media } from '@/data/media'

export const metadata = {
  title: 'Media | Ross Dahlke',
  description: 'Media coverage and press mentions.',
}

export default function Media() {
  const sorted = [...media].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Media</h1>
          <p className="text-xl font-normal text-[var(--muted)] leading-relaxed max-w-2xl">
            Press coverage and media mentions.
          </p>
        </header>

        <div className="space-y-8">
          {sorted.map((item, index) => (
            <article
              key={index}
              className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300 animate-stagger-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h2 className="mb-0 text-xl md:text-2xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h2>
                  <time className="text-sm text-[var(--muted)] whitespace-nowrap">
                    {new Date(item.date + 'T00:00:00').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="mb-0 text-base font-medium text-[var(--muted)]">{item.outlet}</p>
                <div className="pt-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
