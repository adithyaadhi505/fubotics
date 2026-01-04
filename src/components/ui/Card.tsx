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
  const baseStyles = 'glass rounded-2xl p-8 transition-all duration-300';

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
      boxShadow: '0 0 10px 1px rgba(165, 42, 42, 0.15), 0 0 18px 2px rgba(205, 133, 63, 0.12)',
      borderColor: 'rgba(205, 133, 63, 0.3)',
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
