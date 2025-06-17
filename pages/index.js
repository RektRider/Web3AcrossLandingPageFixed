
import Head from 'next/head';
import Hero from '../sections/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3Across - Web3 Marketing Agency</title>
        <meta name="description" content="Strategic PR & Growth for Web3 Projects" />
      </Head>
      <main className="bg-black text-white font-sans">
        <Hero />
      </main>
    </>
  );
}
