import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | ALX Project 0x00</title>
        <meta name="description" content="Welcome to your Next.js project" />
      </Head>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-blue-600">
          🚀 Hello, ALX Project 0x00!
        </h1>
      </main>
    </>
  );
};

export default Home;
