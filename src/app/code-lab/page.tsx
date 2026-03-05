import Image from 'next/image'
import Link from 'next/link'
import { labMembers } from '@/data/lab'

const anchorSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'people', label: 'People' },
  { id: 'join', label: 'Join' },
]

export default function CodeLab() {
  return (
    <div className="section">
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
              The CODE Lab (Computational Observation of Digital Exposure) at the University of Wisconsin-Madison studies what information people encounter in digital environments and how that exposure shapes attitudes and behavior. As online information environments are increasingly shaped by artificial intelligence, from AI-generated content to algorithmically curated feeds, understanding what people actually see and its consequences requires new observational infrastructure and computational methods.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The lab uses large-scale behavioral data, including web browsing records and private messaging data, to observe real-world exposure. The lab also develops research infrastructure and computational tools for studying digital information environments at scale, and supports graduate training in computational methods for communication research.
            </p>
          </div>
        </section>

        {/* People */}
        <section id="people" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-8">People</h2>
          <div className="space-y-6">
            {labMembers.map((member) => (
              <div key={member.name} className="card flex flex-col sm:flex-row gap-6">
                {member.photo && (
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover" style={{ objectPosition: '50% 25%' }}
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold mb-1">
                    {member.website ? (
                      <Link href={member.website} className="hover:text-[var(--link)] transition-colors duration-300">
                        {member.name}
                      </Link>
                    ) : (
                      member.name
                    )}
                  </h3>
                  <p className="text-[var(--muted)] text-base mb-0">{member.role}</p>
                  {member.email && (
                    <p className="text-sm mb-0">
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-base text-[var(--muted)] leading-relaxed mt-2 mb-0">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join */}
        <section id="join" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Join</h2>
          <div className="card space-y-4">
            <p className="text-base md:text-lg leading-relaxed mb-0 text-[var(--muted)]">
              If you are a current UW-Madison graduate student interested in the CODE Lab, please email <a href="mailto:ross.dahlke@wisc.edu">ross.dahlke@wisc.edu</a> for more details.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-0 text-[var(--muted)]">
              Prospective MA and PhD students can apply through <a href="https://sjmc.wisc.edu/admissions/graduate-admissions/" target="_blank" rel="noopener noreferrer">UW-Madison SJMC graduate admissions</a>. In SJMC, students are not accepted by faculty specifically. Students are instead admitted to the program more generally. If you are interested in working with me, please list me on your application.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
