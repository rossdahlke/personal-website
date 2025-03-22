import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

async function getResources() {
  const resourcesDirectory = path.join(process.cwd(), 'content', 'resources');
  const filenames = fs.readdirSync(resourcesDirectory);
  
  const resources = filenames.map(filename => {
    const filePath = path.join(resourcesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace('.md', '')
    };
  });

  return resources.sort((a: any, b: any) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resources</h1>
        </header>
        
        <div className="space-y-12">
          {resources.map((resource: any, idx: number) => (
            <article 
              key={idx} 
              className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-[var(--border-color)] before:opacity-50 hover:before:bg-[var(--link)] before:transition-colors before:duration-300"
            >
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h2 className="text-xl md:text-2xl font-medium text-[var(--text)] leading-tight group-hover:text-[var(--link)] transition-colors duration-300">
                    <Link href={resource.link || `/resources/${resource.slug}`}>
                      {resource.title}
                    </Link>
                  </h2>
                  <time className="text-sm text-[var(--muted)]">
                    {new Date(resource.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                {resource.author && (
                  <p className="text-sm text-[var(--muted)]">
                    By: {resource.author}
                  </p>
                )}
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {resource.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={resource.link || `/resources/${resource.slug}`}
                    className="inline-flex items-center text-sm text-[var(--link)] hover:text-[var(--link-hover)] group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 