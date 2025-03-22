import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

type Resource = {
  title: string
  date: string
  description: string
  content: string
  author?: string
}

async function getResourceBySlug(slug: string): Promise<Resource | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/resources', `${slug}.md`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html, { sanitize: false })  // Allow HTML in markdown
      .process(content)
    
    const contentHtml = processedContent.toString()
    
    return {
      title: data.title,
      date: data.date,
      description: data.description,
      content: contentHtml,
      author: data.author
    }
  } catch (error) {
    return null
  }
}

export default async function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = await getResourceBySlug(params.slug)
  
  if (!resource) {
    notFound()
  }
  
  return (
    <div className="section">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight">{resource.title}</h1>
          <div className="flex items-center text-gray-600 mb-8 space-x-4">
            <time className="text-[var(--muted)]">
              {new Date(resource.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {resource.author && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-[var(--muted)]">By: {resource.author}</span>
              </>
            )}
          </div>
        </header>
        
        <div 
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-pre:bg-[var(--background-secondary)] prose-pre:border prose-pre:border-[var(--border-color)]
            prose-code:text-[var(--text)] prose-code:bg-[var(--background-secondary)] prose-code:px-1 prose-code:rounded
            prose-a:text-[var(--link)] prose-a:no-underline hover:prose-a:text-[var(--link-hover)]
            prose-p:text-[var(--muted)] prose-li:text-[var(--muted)]"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
      </div>
    </div>
  )
} 