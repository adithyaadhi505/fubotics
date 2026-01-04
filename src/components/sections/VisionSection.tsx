import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/Section';
import ErrorBoundary from '../ui/ErrorBoundary';

const CubeScene = React.lazy(() => import('../three/CubeScene'));

/**
 * VisionSection Component
 * Displays company vision and mission with styled quote
 */
const VisionSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer
      id="vision"
      className="bg-gradient-to-br from-bg-900 to-bg-800 relative overflow-hidden"
    >
      {/* 3D Cube Background Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <CubeScene className="opacity-30" />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Content Layer */}
      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-accent-100 mb-8"
          variants={itemVariants}
        >
          Our <span className="gradient-text">Vision</span>
        </motion.h2>

        {/* Main Statement */}
        <motion.p
          className="text-xl text-accent-200 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          We build intelligent machines to keep people safe and cities clean.
        </motion.p>

        {/* Extended Vision */}
        <motion.p
          className="text-lg text-accent-200 mb-12 leading-relaxed text-justify md:text-center"
          variants={itemVariants}
        >
          In a world where lives are still risked for routine tasks, Fubotics steps in - not to replace people,
          but to protect them. Our robots clean with precision and consistency, so humans don't have to.
        </motion.p>

        {/* Highlight Quote */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          {/* Decorative Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-gradient-to-r from-transparent via-accent-300 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <blockquote className="text-2xl md:text-3xl font-bold text-accent-100 italic mb-4">
            "Protecting lives. Empowering cities. Letting robots handle the risk."
          </blockquote>

          {/* Decorative Line Bottom */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-accent-300 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 pt-8 border-t border-accent-700"
          variants={itemVariants}
        >
          <p className="text-accent-200 mb-6">
            Join us in redefining the future of cleaning automation
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 font-semibold rounded-xl hover:shadow-glow-tan-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default VisionSection;
