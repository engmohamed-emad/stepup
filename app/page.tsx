import Hero from './_components/Hero';
import Brands from './_components/Brands';
import Trending from './_components/Trending';
import BestSelling from './_components/BestSelling';
import Banner from './_components/Banner';
import Reviews from './_components/Reviews';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Brands />
      <Trending />
      <Banner />
      <BestSelling />
      <Reviews />
      <Footer />
    </main>
  );
}
