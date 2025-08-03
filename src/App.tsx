import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyCoaching from './sections/WhyCoaching';
import WhoWeAre from './sections/WhoWeAre';
import ForBusiness from './sections/ForBusiness';
import ForCoaches from './sections/ForCoaches';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Remove loading screen when component mounts
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyCoaching id="why-coaching" />
      <WhoWeAre id="who-we-are" />
      <ForBusiness id="business" />
      <ForCoaches id="coaches" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;