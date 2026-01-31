import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card Component
 * Reusable card component with hover and animation effects
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  animated?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  animated = true,
  delay = 0,
}) => {
  const baseStyles = 'glass border border-white/10 rounded-2xl p-8 transition-all duration-300 bg-black/20 backdrop-blur-md';

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 0 20px rgba(92, 133, 255, 0.15), 0 0 40px rgba(92, 133, 255, 0.1)',
      borderColor: 'rgba(92, 133, 255, 0.4)',
    },
  };

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      variants={animated ? variants : undefined}
      whileHover={hoverable ? hoverVariants.hover : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
