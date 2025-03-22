import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'resources', 'visualizing-single-participant-data.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  return {
    props: { htmlContent },
  };
}

export default function TutorialPage({ htmlContent }) {
  return (
    <>
      <Head>
        <title>Rendered Tutorial - Visualizing Single-Participant Data</title>
      </Head>
      <div className="tutorial-container" style={{ padding: '2rem' }}
           dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
} 