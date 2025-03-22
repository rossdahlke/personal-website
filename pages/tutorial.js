import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';

export default function Tutorial({ content, frontmatter }) {
  return (
    <>
      <Head>
        <title>Rendered Tutorial - Visualizing Single-Participant Data</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        {frontmatter.author && (
          <p className="text-gray-600 mb-4">By {frontmatter.author}</p>
        )}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content/resources/visualizing-single-participant-data.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);
  const htmlContent = marked(content);

  return {
    props: {
      content: htmlContent,
      frontmatter,
    },
  };
} 