export const metadata = {
  title: 'CV | Ross Dahlke',
  description: 'Curriculum vitae for Ross Dahlke, Assistant Professor at UW-Madison.',
}

export default function CVPage() {
  return (
    <div className="section">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">CV</h1>
            <a
              href="/cv/dahlke_ross_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--link)] text-white rounded-xl hover:opacity-90 transition-all duration-300 font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </header>

        <div className="rounded-2xl border border-[var(--border-color)] overflow-hidden" style={{ height: '80vh' }}>
          <iframe
            src="/cv/dahlke_ross_cv.pdf"
            className="w-full h-full"
            title="Ross Dahlke CV"
          />
        </div>
      </div>
    </div>
  )
}
