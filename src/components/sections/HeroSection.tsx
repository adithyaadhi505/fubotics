import React, { useEffect, useRef } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

/**
 * HeroSection Component
 * Premium animated hero section with word-by-word animation and interactive 3D robot
 * Features: 3D robot background, Grid overlay, floating elements, mouse-following gradient
 */

const colors = {
  50: '#f5f3f0',
  100: '#e8e3dc',
  200: '#d4c4b3',
  300: '#c0a598',
  400: '#a8937f',
  500: '#907d6b',
  600: '#786a5c',
  700: '#60564a',
  800: '#483f37',
  900: '#302620',
};

const HeroSection: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words with staggered delays
    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'wordAppear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse-following gradient effect
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects with glow
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        word.style.textShadow = '0 0 20px rgba(212, 196, 179, 0.4)';
      });
      word.addEventListener('mouseleave', () => {
        word.style.textShadow = 'none';
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(212, 196, 179, 0.5)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'pulse-glow 1s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener('click', onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>('.floating-element').forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = 'running';
            el.style.animation = 'float 8s ease-in-out infinite';
          }, index * 200);
        });
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-br from-bg-900 via-bg-800 to-bg-900 text-accent-100 font-sans overflow-hidden relative w-full"
    >
      {/* Interactive 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveRobotSpline
          scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-bg-900/60 z-[1]" />

      {/* SVG Grid Background */}
      <svg className="absolute inset-0 w-full h-full z-[2]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(212,196,179,0.06)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Animated grid lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: '2.5s', opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: '3s', opacity: 0.05 }}
        />
        {/* Detail dots at corners */}
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} stroke="rgba(212,196,179,0.6)" fill="rgba(212,196,179,0.4)" strokeWidth="0.5" />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} stroke="rgba(212,196,179,0.6)" fill="rgba(212,196,179,0.4)" strokeWidth="0.5" />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} stroke="rgba(212,196,179,0.6)" fill="rgba(212,196,179,0.4)" strokeWidth="0.5" />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} stroke="rgba(212,196,179,0.6)" fill="rgba(212,196,179,0.4)" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} stroke="rgba(212,196,179,0.6)" fill="rgba(212,196,179,0.4)" strokeWidth="0.5" />
      </svg>

      {/* Corner accent elements */}
      <div className="corner-element top-8 left-8 z-[3]" style={{ animationDelay: '4s' }}>
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element top-8 right-8 z-[3]" style={{ animationDelay: '4.2s' }}>
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element bottom-8 left-8 z-[3]" style={{ animationDelay: '4.4s' }}>
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element bottom-8 right-8 z-[3]" style={{ animationDelay: '4.6s' }}>
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>

      {/* Floating elements */}
      <div className="floating-element z-[3]" style={{ top: '25%', left: '15%', animationDelay: '5s' }} />
      <div className="floating-element z-[3]" style={{ top: '60%', left: '85%', animationDelay: '5.5s' }} />
      <div className="floating-element z-[3]" style={{ top: '40%', left: '10%', animationDelay: '6s' }} />
      <div className="floating-element z-[3]" style={{ top: '75%', left: '90%', animationDelay: '6.5s' }} />

      {/* Main content */}
      <div className="relative z-[10] min-h-screen flex flex-col justify-center items-center px-8 py-12 md:px-16 md:py-20">
        {/* Main headline centered */}
        <div className="text-center max-w-4xl mx-auto drop-shadow-2xl">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6 drop-shadow-lg"
            style={{ 
              color: colors[50],
              textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 0 40px rgba(245,243,240,0.1)'
            }}
          >
            <span className="word" data-delay="0">
              Redefining
            </span>{' '}
            <span className="word" data-delay="150">
              What
            </span>
            <br />
            <span className="word" data-delay="300">
              Robots
            </span>{' '}
            <span className="word" data-delay="450">
              Can
            </span>{' '}
            <span className="word" data-delay="600">
              Do.
            </span>
          </h1>
          
          <p
            className="text-lg md:text-xl lg:text-2xl font-light tracking-wide drop-shadow-md"
            style={{ 
              color: colors[200],
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            <span className="word" data-delay="750">
              Welcome
            </span>{' '}
            <span className="word" data-delay="900">
              to
            </span>{' '}
            <span className="word" data-delay="1050">
              the
            </span>{' '}
            <span className="word" data-delay="1200">
              future
            </span>{' '}
            <span className="word" data-delay="1350">
              of
            </span>{' '}
            <span className="word" data-delay="1500">
              robotic
            </span>{' '}
            <span className="word" data-delay="1650">
              cleaning.
            </span>
          </p>
        </div>
      </div>

      {/* Mouse-following gradient */}
      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0 z-[5]"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default HeroSection;
