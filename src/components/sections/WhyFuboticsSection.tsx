import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle } from '../ui/Section';
import Card from '../ui/Card';

/**
 * WhyFuboticsSection Component
 * Highlights the three main pillars: Safety, Efficiency, and Evolution
 */
interface Feature {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

const WhyFuboticsSection: React.FC = () => {
  const [counters, setCounters] = useState({
    safety: 0,
    efficiency: 0,
    evolution: 0,
  });

  // Animate counter numbers on scroll
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          safety: Math.min(prev.safety + 5, 100),
        }));
      }, 30),
    ];

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const features: Feature[] = [
    {
      icon: 'S',
      title: 'Safety',
      description: 'Every minute of manual cleaning puts lives at risk - automation eliminates that burden.'
    },
    {
      icon: 'E',
      title: 'Efficiency',
      description: 'Wasted effort and downtime cost more than you think - AI makes every move count.'
    },
    {
      icon: 'V',
      title: 'Evolution',
      description: 'Don\'t get left behind - our self-evolving robots adapt as industries change.'
    },
  ];

  return (
    <SectionContainer id="why" className="bg-bg-800">
      <SectionTitle
        accent="Fubotics?"
        subtitle="Let Robots Handle the Risk - So You Don't Have To"
      >
        Why
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card
              delay={idx * 0.2}
              className="h-full flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-300 to-transparent group-hover:shadow-glow-tan transition-all duration-300" />

              {/* Icon */}
              <motion.div
                className="w-20 h-20 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {idx === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                ) : idx === 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <path d="M15 2v2"></path>
                    <path d="M15 20v2"></path>
                    <path d="M2 15h2"></path>
                    <path d="M2 9h2"></path>
                    <path d="M20 15h2"></path>
                    <path d="M20 9h2"></path>
                    <path d="M9 2v2"></path>
                    <path d="M9 20v2"></path>
                  </svg>
                )}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-accent-100 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-accent-200 mb-6 flex-grow">
                {feature.description}
              </p>

              {/* Stat */}
              {feature.stat && (
                <motion.div
                  className="pt-6 border-t border-accent-700 w-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-3xl font-bold text-accent-100 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.stat}
                  </motion.div>
                  <p className="text-accent-200 text-sm">
                    {feature.statLabel}
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default WhyFuboticsSection;
