import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyCoaching from './sections/WhyCoaching';
import WhoWeAre from './sections/WhoWeAre';
import ForBusiness from './sections/ForBusiness';
import ForCoaches from './sections/ForCoaches';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { preloadCriticalImages } from './utils/imagePreloader';
import { ASSETS } from './constants/assets';

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

    // Preload critical images for better performance
    preloadCriticalImages([
      ASSETS.FOR_BUSINESS,
      ASSETS.FOR_COACHES,
      ASSETS.WHO_WE_ARE,
      ASSETS.CONTACT
    ]);
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