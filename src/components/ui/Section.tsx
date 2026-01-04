import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionContainer Component
 * Container for each section with consistent padding and max-width
 */
interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full py-20 md:py-32 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

/**
 * SectionTitle Component
 * Styled section title with accent color highlighting
 */
interface SectionTitleProps {
  children: React.ReactNode;
  accent?: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  accent,
  subtitle,
}) => {
  return (
    <motion.div
      className="text-center mb-16 md:mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-accent-100 mb-4">
        {accent ? (
          <>
            {children} <span className="text-accent-200">{accent}</span>
          </>
        ) : (
          children
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-accent-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export { SectionContainer, SectionTitle };
