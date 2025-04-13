import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>Deal It or Delete</title>
      </Head>
      <h1>Deal It or Delete</h1>
      <p>Paste your Amazon product link below:</p>
      <input type="text" placeholder="https://www.amazon.fr/..." style={{ padding: '0.5rem', width: '60%' }} />
      <button style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>Compare</button>
    </div>
  );
}