import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Location from '../components/Location';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}
