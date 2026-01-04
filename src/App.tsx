import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SolutionsSection from './components/sections/SolutionsSection';
import WhyFuboticsSection from './components/sections/WhyFuboticsSection';
import VisionSection from './components/sections/VisionSection';
import ContactSection from './components/sections/ContactSection';
import ChatBot from './components/ui/ChatBot';

/**
 * App Component
 * Main application component that orchestrates all sections and navigation
 */
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth navigation to sections
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-900 text-accent-100 overflow-hidden">
      {/* Header Navigation */}
      <Header scrolled={scrolled} onNavClick={handleNavigation} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <SolutionsSection />
        <WhyFuboticsSection />
        <VisionSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default App;
