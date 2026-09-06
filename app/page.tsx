import Hero from '@/app/_components/Hero/Hero';
import Brands from '@/app/_components/Brands/Brands';
import Trending from '@/app/_components/Trending/Trending';
import BestSelling from '@/app/_components/BestSelling/BestSelling';
import Banner from '@/app/_components/Banner/Banner';
import Reviews from '@/app/_components/Reviews/Reviews';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Brands />
      <Trending />
      <Banner />
      <BestSelling />
      <Reviews />
    </main>
  );
}
