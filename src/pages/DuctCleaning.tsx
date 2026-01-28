import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import ErrorBoundary from '../components/ui/ErrorBoundary';

const CubeScene = React.lazy(() => import('../components/three/CubeScene'));

/**
 * DuctCleaning Page
 * Robotic duct cleaning service page
 */
const DuctCleaning: React.FC = () => {
  const navigate = useNavigate();
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center py-20">
          <motion.button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-accent-200 hover:text-accent-100 transition-colors mx-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Breathe Easier.<br/>
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
      <section className="py-12 px-4 md:px-8 bg-bg-800">
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
            className="aspect-video bg-bg-700 rounded-2xl flex items-center justify-center border border-accent-700/30"
          >
            <svg className="w-20 h-20 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Why Clean Your Ducts Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-bg-900">
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
                className="bg-bg-800 rounded-2xl p-8 border border-accent-700/30 hover:border-accent-500/50 transition-all"
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
      <section className="py-20 md:py-32 px-4 md:px-8 bg-bg-800">
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
              className="bg-bg-900 rounded-2xl p-8 border border-accent-700/30"
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
              className="bg-bg-900 rounded-2xl p-8 border border-accent-500/50"
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
      <section className="py-20 md:py-32 px-4 md:px-8 bg-bg-900">
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
                className="bg-bg-800 rounded-2xl p-6 border border-accent-700/30"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-300 to-accent-400 flex items-center justify-center text-bg-900 font-bold text-xl mb-4">
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
      <section className="py-20 md:py-32 px-4 md:px-8 bg-bg-800">
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
                className="bg-bg-900 rounded-2xl p-6 border border-accent-700/30 hover:border-accent-500/50 transition-all"
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
      <section className="py-20 md:py-32 px-4 md:px-8 bg-bg-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cleaner ducts. Safer air.<br/>
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
                Recharge
                <span className="text-sm">Power up your robots</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default DuctCleaning;
