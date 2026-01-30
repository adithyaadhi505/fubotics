import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import ErrorBoundary from '../components/ui/ErrorBoundary';

const CubeScene = React.lazy(() => import('../components/three/CubeScene'));
const MeteorShower = React.lazy(() => import('../components/ui/MeteorShower'));

/**
 * DuctCleaning Page
 * Robotic duct cleaning service page
 */
const DuctCleaning: React.FC = () => {
  const navigate = useNavigate();
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
    if (sectionId === 'hero') {
      navigate('/');
    } else if (sectionId === 'contact') {
      // Navigate to main page contact section
      navigate('/', { replace: true });
      setTimeout(() => {
        window.location.hash = 'contact';
      }, 100);
    } else {
      navigate('/#' + sectionId);
    }
  };

  const whyClean = [
    {
      title: 'Improves indoor air quality',
      description: 'Remove accumulated dust and pollutants from your ventilation system'
    },
    {
      title: 'Reduces allergens and microbes',
      description: 'Eliminate mold, bacteria, and other harmful microorganisms'
    },
    {
      title: 'Lowers power consumption',
      description: 'Clean ducts mean more efficient airflow and reduced energy costs'
    }
  ];

  const processSteps = [
    {
      title: 'Inspection',
      description: 'AI-powered scanning identifies problem areas'
    },
    {
      title: 'Suction & Brushing',
      description: 'Robotic cleaning removes debris and buildup'
    },
    {
      title: 'Debris Capture',
      description: 'Advanced filtration traps all particles'
    },
    {
      title: 'Final Audit',
      description: 'Quality verification with detailed reports'
    }
  ];

  const additionalServices = [
    {
      title: 'Air Quality Audit',
      description: 'Comprehensive analysis of your indoor air quality'
    },
    {
      title: 'Ceiling & Grill De-dusting',
      description: 'Thorough cleaning of all ventilation components'
    },
    {
      title: 'Safe Disinfection',
      description: 'EPA-approved sanitization process'
    },
    {
      title: 'AMC Contracts',
      description: 'Regular maintenance plans for optimal performance'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-900 text-accent-100">
      {/* Header Navigation */}
      <Header scrolled={scrolled} onNavClick={handleNavigation} />

      {/* Back Arrow Button - Fixed Top Left */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-24 left-4 md:left-8 z-40 p-3 glass rounded-full hover:shadow-glow-white transition-all duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 text-accent-200 group-hover:text-accent-100 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <ErrorBoundary>
            <Suspense fallback={null}>
              <CubeScene className="opacity-30" />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-900/80 via-bg-900/60 to-bg-900 z-1" />

        {/* Meteor Shower falling in background - Always visible */}
        <Suspense fallback={null}>
          <MeteorShower />
        </Suspense>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Breathe Easier.<br />
              <span className="gradient-text">Live Smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-200 mb-12 max-w-4xl mx-auto">
              Robotic duct cleaning that clears the air — removing dust, allergens, and risk from your indoor spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Schedule a Cleaning
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                See Our Robots in Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative z-10 py-12 px-4 md:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-accent-300 mb-8"
          >
            Watch how our robotic systems transform duct cleaning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://drive.google.com/file/d/1jSWNjF0esbCthvvSGS164t68imzjqHBH/preview"
              className="w-full h-full"
              allow="autoplay"
              title="Robotic Duct Cleaning Demo"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Clean Your Ducts Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Clean <span className="text-accent-200">Your Ducts?</span>
            </h2>
            <p className="text-lg text-accent-300 max-w-4xl mx-auto leading-relaxed">
              Hidden inside your walls, duct systems quietly circulate air — but over time, they become loaded with dust, mold, and allergens.
              Robotic cleaning improves air quality, reduces health risks, and optimizes your AC's energy efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyClean.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:shadow-glow-white"
              >
                <h3 className="text-2xl font-bold text-accent-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-accent-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-accent-200">Difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="aspect-video bg-bg-700 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-accent-400 text-sm">Before Cleaning</span>
              </div>
              <h3 className="text-2xl font-bold text-accent-300 text-center">Contaminated</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-white/20"
            >
              <div className="aspect-video bg-bg-700 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-accent-200 text-sm">After Cleaning</span>
              </div>
              <h3 className="text-2xl font-bold text-accent-200 text-center">Sanitized</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent-200">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-accent-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-accent-300 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Additional <span className="text-accent-200">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:shadow-glow-white"
              >
                <h3 className="text-xl font-bold text-accent-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-accent-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cleaner ducts. Safer air.<br />
              <span className="text-accent-200">Smarter living.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('https://wa.me/your-number', '_blank')}
              >
                Connect with Us on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                <div className="flex flex-col items-center">
                  <span>Recharge</span>
                  <span className="text-xs text-accent-400">Power up your robots</span>
                </div>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
      <div className="relative z-10">
        <Footer onNavigate={handleNavigation} />
      </div>
    </div>
  );
};

export default DuctCleaning;
