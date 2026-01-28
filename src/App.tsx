import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SolutionsSection from './components/sections/SolutionsSection';
import WhyFuboticsSection from './components/sections/WhyFuboticsSection';
import VisionSection from './components/sections/VisionSection';
import ContactSection from './components/sections/ContactSection';
import ChatBot from './components/ui/ChatBot';
import FacadeCleaning from './pages/FacadeCleaning';
import DuctCleaning from './pages/DuctCleaning';

/**
 * HomePage Component
 * Main landing page with all sections
 */
const HomePage: React.FC = () => {
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

/**
 * ScrollToTop Component
 * Scrolls to top on route change
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * App Component
 * Main application component with routing
 */
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facade-cleaning" element={<FacadeCleaning />} />
        <Route path="/duct-cleaning" element={<DuctCleaning />} />
      </Routes>
    </Router>
  );
};

export default App;
