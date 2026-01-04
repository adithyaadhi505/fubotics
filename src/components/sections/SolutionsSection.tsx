import React, { useState } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionContainer, SectionTitle } from '../ui/Section';
import Card from '../ui/Card';

/**
 * SolutionsSection Component
 * Showcases Fubotics' two main solutions with smooth scroll-based slide animations
 */
interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  features: string[];
}

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

/**
 * SolutionCard Sub-component
 * Individual solution card with smooth scroll-based animation and hover expansion
 */
const SolutionCard: React.FC<SolutionCardProps> = ({ solution, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-50px",
    amount: 0.2
  });

  // Scroll-based animation progress
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  // Transform values based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.8, 1], 
    [index === 0 ? -150 : 150, index === 0 ? -30 : 30, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.8, 1], [150, 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 0.9, 1]);
  const rotateZ = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [index === 0 ? -8 : 8, index === 0 ? -3 : 3, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: isInView ? opacity : 0,
        x: isInView ? x : (index === 0 ? -150 : 150),
        y: isInView ? y : 150,
        scale: isInView ? scale : 0.75,
        rotateZ: isInView ? rotateZ : (index === 0 ? -8 : 8),
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1
      }}
    >
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card
          delay={0}
          hoverable={true}
          className="relative overflow-hidden transition-all duration-300 min-h-[380px]"
        >
          {/* Background Image for Card 1 */}
          {index === 0 && (
            <>
              {/* Dark gradient overlay for text readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-bg-900 via-bg-900/95 to-transparent"
                style={{ zIndex: 1 }}
              />
              {/* Background Image */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/card1.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 0
                }}
              />
            </>
          )}

          {/* Background Image for Card 2 */}
          {index === 1 && (
            <>
              {/* Dark gradient overlay for text readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-bg-900 via-bg-900/95 to-transparent"
                style={{ zIndex: 1 }}
              />
              {/* Background Image */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/card2.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 0
                }}
              />
            </>
          )}
          
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Solution Icon */}
            <div className="w-14 h-14 flex items-center justify-center mb-6">
              {index === 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-200">
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                </svg>
              )}
            </div>

            <div>
              {/* Solution Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-md">
                {solution.title}
              </h3>

              {/* Solution Description */}
              <p className="text-gray-300 text-base mb-6 max-w-md leading-relaxed">
                {solution.description}
              </p>

              {/* Learn More Text */}
              <div className="flex items-center gap-2 text-gray-400 font-medium opacity-80">
                <span>Learn More</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    y: isHovered ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </div>
            </div>
          </div>
        </Card>

        {/* Challenges Box - Appears below card on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="mt-4 p-6 rounded-2xl border border-accent-700 bg-gradient-to-br from-bg-800/80 to-bg-900/80 shadow-xl"
            >
              <h4 className="text-accent-100 font-semibold text-lg mb-4">Challenges</h4>
              <ul className="space-y-3">
                {solution.challenges.map((challenge, cidx) => (
                  <motion.li
                    key={cidx}
                    className="text-accent-200 text-sm flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cidx * 0.1 + 0.1 }}
                  >
                    <span className="text-accent-300 mt-1 font-bold">•</span>
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/**
 * Main SolutionsSection Component
 */
const SolutionsSection: React.FC = () => {
  const solutions: Solution[] = [
    {
      id: 'facade',
      title: 'Facade Cleaning Robots',
      description: 'Elevate Your Building\'s Maintenance with AI-Driven Solutions',
      icon: 'B',
      challenges: [
        'Manual cleaning at heights risks worker safety',
        'Inconsistent cleaning across glass surfaces',
        'Frequent service disruptions due to slow manual operations',
      ],
      features: [
        'AI-powered height navigation',
        'Precision glass surface cleaning',
        'Real-time monitoring and reporting',
        'Reduced service downtime',
      ],
    },
    {
      id: 'duct',
      title: 'Duct Cleaning Services',
      description: 'Breathe Easier with Smart Ventilation Technology',
      icon: 'D',
      challenges: [
        'Poor indoor air quality due to clogged vents',
        'Manual inspection is slow and error-prone',
        'Inability to monitor or clean ducts in real-time',
      ],
      features: [
        'Automated duct inspection and cleaning',
        'Real-time monitoring capabilities',
        'Improved air quality assurance',
        'Reduced health risks from contaminants',
      ],
    },
  ];

  return (
    <SectionContainer
      id="solutions"
      className="bg-gradient-to-b from-bg-900 to-bg-800"
    >
      <SectionTitle accent="Solutions">Our </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {solutions.map((solution, idx) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            index={idx}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default SolutionsSection;
