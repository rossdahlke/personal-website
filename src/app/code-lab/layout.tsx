export const metadata = {
  title: 'CODE Lab | Ross Dahlke',
  description: 'The Computational Observation of Digital Exposure (CODE) Lab at UW-Madison.',
}

export default function CodeLabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-section="code-lab" className="-mx-4 md:-mx-8 px-4 md:px-8 bg-[var(--background)] min-h-screen">
      {children}
    </div>
  )
}
