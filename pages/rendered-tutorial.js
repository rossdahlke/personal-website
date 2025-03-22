import Head from 'next/head';

export default function RenderedTutorial() {
  return (
    <>
      <Head>
        <title>Visualizing Single-Participant Data - Tutorial</title>
      </Head>
      <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
        {/* The rendered HTML file should be placed in the public folder as tutorial.html */}
        <iframe
          src="/tutorial.html"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          title="Rendered Tutorial"
        />
      </div>
    </>
  );
} 