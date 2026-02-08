import { courseData } from '@/data/courses'

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="section">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{course.code}: {course.title}</h1>
            <span className="text-[var(--muted)] font-medium">{course.semester}</span>
          </div>
          <p className="text-[var(--muted)] text-lg mb-2">{course.universityFull}</p>
          <p className="text-xl text-[var(--muted)] leading-relaxed">{course.description}</p>
        </header>

        <div className="space-y-12">
          <section className="bg-[var(--background-secondary)] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Course Logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Schedule</h3>
                <p className="text-[var(--muted)]">{course.logistics.schedule}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-[var(--muted)]">{course.logistics.location}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Course Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.instructors.map((instructor, idx) => (
                <div key={idx} className="bg-[var(--background-secondary)] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">{instructor.role}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-lg">{instructor.name}</p>
                      <p className="text-[var(--muted)]">{instructor.email}</p>
                      <p className="text-[var(--muted)]">Office: {instructor.office}</p>
                      <p className="text-[var(--muted)]">Office Hours: {instructor.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Course Objectives</h2>
            <ul className="space-y-4">
              {course.objectives.map((objective, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-[var(--link)]">&bull;</span>
                  <span className="text-[var(--muted)]">{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Course Schedule</h2>
            <div className="space-y-8">
              {course.schedule.map((week, idx) => (
                <div key={idx} className="bg-[var(--background-secondary)] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Week {week.week}: {week.dates}</h3>
                  <div className="space-y-6">
                    {week.sessions.map((session, sessionIdx) => (
                      <div key={sessionIdx} className="space-y-3">
                        <h4 className="font-medium">
                          {session.day}: {session.type} - {session.topic}
                        </h4>
                        {session.readings && session.readings.length > 0 && (
                          <div className="pl-4">
                            <h5 className="text-sm font-medium mb-2">Readings:</h5>
                            <ul className="space-y-2">
                              {session.readings.map((reading, readingIdx) => (
                                <li key={readingIdx}>
                                  <a
                                    href={reading.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[var(--link)] hover:text-[var(--link-hover)]"
                                  >
                                    {reading.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Required Textbooks</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                {course.textbooks.required.map((book, idx) => (
                  <div key={idx} className="bg-[var(--background-secondary)] rounded-xl p-6">
                    <h3 className="font-medium mb-2">{book.title}</h3>
                    <p className="text-[var(--muted)]">{book.author}</p>
                    <p className="text-sm text-[var(--muted)]">{book.publisher}</p>
                  </div>
                ))}
              </div>

              {course.textbooks.recommended && (
                <>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Recommended Reading</h3>
                  <div className="space-y-4">
                    {course.textbooks.recommended.map((book, idx) => (
                      <div key={idx} className="bg-[var(--background-secondary)] rounded-xl p-6">
                        <h3 className="font-medium mb-2">{book.title}</h3>
                        <p className="text-[var(--muted)]">{book.author}</p>
                        <p className="text-sm text-[var(--muted)]">{book.publisher}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
