import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button Component
 * Reusable button component with variants for primary and secondary styles
 */
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 text-white shadow-lg shadow-glow-blue hover:shadow-glow-violet transition-all duration-300',
    secondary: 'glass text-accent-100 hover:shadow-glass-lg border border-accent-700',
    outline: 'border border-accent-400 text-accent-100 hover:bg-accent-400/10 hover:border-accent-300 hover:shadow-glow-blue glass-sm',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-7 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
