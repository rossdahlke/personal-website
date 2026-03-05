export const metadata = {
  title: 'CODE Lab | Ross Dahlke',
  description: 'The Computational Observation of Digital Exposure (CODE) Lab at UW-Madison.',
}

import Image from 'next/image'

export default function CodeLabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-section="code-lab" className="-mx-4 md:-mx-8 px-4 md:px-8 bg-[var(--background)] min-h-screen">
      <div className="max-w-3xl mx-auto pt-24">
        <div className="rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/code-hero-2.png"
            alt="The CODE Lab"
            width={1536}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      {children}
    </div>
  )
}
