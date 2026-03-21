import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <CTA />
    </main>
  );
};

export default Home;
