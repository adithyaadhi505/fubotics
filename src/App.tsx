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
import SpaceBackground from './components/ui/SpaceBackground';
import FacadeCleaning from './pages/FacadeCleaning';
import DuctCleaning from './pages/DuctCleaning';
import CustomCursor from './components/ui/CustomCursor';

/**
 * HomePage Component
 * Main landing page with all sections
 */
const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events for header styling and scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
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
    <div className="min-h-screen bg-bg-900 text-accent-100 overflow-hidden relative">
      <SpaceBackground />
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 glass p-3 rounded-full shadow-lg hover:shadow-glow-white transition-all duration-300 z-40 group"
          title="Back to Top"
        >
          <svg className="w-6 h-6 text-accent-200 group-hover:text-accent-100 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span className="absolute right-full mr-2 px-3 py-1 bg-bg-800 text-accent-100 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Back to Top
          </span>
        </button>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* ChatBot */}
      <ChatBot visible={scrolled} />
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
      <CustomCursor />
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
