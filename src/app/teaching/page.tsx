export default function Teaching() {
  const courses = [
    {
      code: "J677",
      title: "Concepts and Tools for Data Analysis and Visualization",
      semester: "Spring 2025",
      university: "University of Wisconsin-Madison",
      universityFull: "University of Wisconsin-Madison School of Journalism and Mass Communication",
      description: "Like no other time, our world is recorded in digital formats through social networks, online news platforms, mobile devices, and more. This constant flow of information has given rise to new possibilities for understanding social phenomena, communicating insights, and driving data-informed decisions in fields like journalism, strategic communication, and beyond.",
      slug: "j677-data-analysis"
    }
  ]

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Teaching</h1>
        </header>
        
        <div className="space-y-12">
          {courses.map((course, index) => (
            <article 
              key={index} 
              className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300"
            >
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300">
                      <a href={`/teaching/${course.slug}`}>
                        {course.code}: {course.title}
                      </a>
                    </h2>
                    <p className="text-sm text-[var(--muted)]">{course.university}</p>
                  </div>
                  <time className="text-sm text-[var(--muted)]">
                    {course.semester}
                  </time>
                </div>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {course.description}
                </p>
                <div className="pt-2">
                  <a
                    href={`/teaching/${course.slug}`}
                    className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Course Details
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