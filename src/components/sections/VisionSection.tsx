import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/Section';

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
        delayChildren: 0.25,
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
      className="bg-transparent relative overflow-hidden"
    >
      {/* Content Layer */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 glass border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl bg-black/20 backdrop-blur-xl"
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
            className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
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
            className="inline-block px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:shadow-glow-white transition-all duration-300"
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
