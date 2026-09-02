import Hero from './_components/Hero';
import Brands from './_components/Brands';
import Trending from './_components/Trending';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Brands />
      <Trending />
    </main>
  );
}

