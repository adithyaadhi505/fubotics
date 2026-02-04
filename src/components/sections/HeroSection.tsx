import React, { useEffect, useRef } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

/**
// HeroSection Component
// Updated: "Robots" (Light) -> "Can Do." (Continuous Gradient)
 * Premium animated hero section with word-by-word animation and interactive 3D robot
 * Features: 3D robot background, Grid overlay, floating elements, mouse-following gradient
 */

const colors = {
  50: '#ffffff',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
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
    let animationFrameId: number;

    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          // Optimized: Use transform for GPU-accelerated movement
          gradient.style.transform = `translate3d(${e.clientX - 192}px, ${e.clientY - 192}px, 0)`;
          gradient.style.opacity = '1';
        });
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects removed as per request

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(255, 255, 255, 0.3)';
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
      className="min-h-screen text-accent-100 font-sans overflow-hidden relative w-full"
    >
      {/* Interactive 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary fallback={
          <div className="w-full h-full bg-gradient-to-br from-bg-900 via-bg-800 to-bg-900">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[700px] h-[700px] bg-gradient-to-br from-accent-400/50 to-accent-300/30 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: '4s' }} />
                <div className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-accent-300/40 to-accent-200/25 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '1s' }} />
                <div className="absolute w-[650px] h-[650px] bg-gradient-to-br from-accent-500/35 to-accent-400/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: '5s', animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        }>
          <InteractiveRobotSpline
            scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
            className="w-full h-full"
          />
        </ErrorBoundary>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-bg-900/20 z-[1]" />

      {/* Tech Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-600/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-600/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-600/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-600/30 to-transparent" />
      </div>

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
            className="font-hero text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg"
            style={{
              color: colors[50], // Default color for first line
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
            <span className="word gradient-text" data-delay="450">
              Robots Can Do.
            </span>

          </h1>

          <p
            className="font-hero text-lg md:text-xl lg:text-2xl font-light tracking-wide drop-shadow-md"
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
        className="fixed top-0 left-0 pointer-events-none w-96 h-96 rounded-full blur-3xl transition-opacity duration-500 ease-out opacity-0 z-[5] will-change-transform"
        style={{
          background: `radial-gradient(circle, ${colors[50]}0A 0%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default HeroSection;
