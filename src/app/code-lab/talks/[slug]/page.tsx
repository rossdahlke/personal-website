import Image from 'next/image'
import Link from 'next/link'
import { talks } from '@/data/lab'

export function generateStaticParams() {
  return talks.map((talk) => ({ slug: talk.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const talk = talks.find((t) => t.slug === params.slug)
  if (!talk) return { title: 'Talk Not Found' }
  return {
    title: `${talk.title} | CODE Lab`,
    description: `${talk.speaker} — ${talk.date}`,
  }
}

export default function TalkPage({ params }: { params: { slug: string } }) {
  const talk = talks.find((t) => t.slug === params.slug)

  if (!talk) {
    return <div className="section"><p>Talk not found.</p></div>
  }

  return (
    <div className="pb-24 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/code-lab#talks"
            className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] transition-all duration-200"
          >
            <svg className="w-4 h-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Back to CODE Lab
          </Link>
        </div>

        <header className="mb-12">
          <p className="font-mono text-[var(--link)] uppercase tracking-[0.2em] text-sm mb-4">
            UW::CODE Talk
          </p>
          <h1 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            {talk.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {talk.speakerPhoto && (
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={talk.speakerPhoto}
                  alt={talk.speaker}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="space-y-1">
              <p className="text-lg font-medium text-[var(--text)] mb-0">{talk.speaker}</p>
              <p className="text-base text-[var(--muted)] mb-0">{talk.speakerTitle}</p>
              <p className="text-base text-[var(--muted)] mb-0">{talk.speakerAffiliation}</p>
            </div>
          </div>
        </header>

        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--link)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[var(--muted)]">{talk.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--link)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[var(--muted)]">{talk.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--link)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[var(--muted)]">{talk.location}</span>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--muted)]">
            {talk.abstract}
          </p>
        </section>
      </div>
    </div>
  )
}
