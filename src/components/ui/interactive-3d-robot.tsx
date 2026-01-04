import { Suspense, lazy, useEffect, useRef } from 'react';

// Lazy load Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  /** URL to the Spline scene */
  scene: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Aggressively removes Spline watermark elements from DOM
 */
const removeWatermark = () => {
  const selectors = [
    '#spline-watermark',
    '[id*="watermark"]',
    '[class*="watermark"]',
    '[class*="logo"]',
    'a[href*="spline.design"]',
    'a[href*="spline"]',
    'div[style*="position: fixed"]',
    'div[style*="position: absolute"]'
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const element = el as HTMLElement;
      if (element.textContent?.toLowerCase().includes('spline') || 
          element.innerHTML?.toLowerCase().includes('spline') ||
          element.outerHTML?.toLowerCase().includes('spline')) {
        element.remove();
      }
    });
  });

  // Remove any links that might be watermarks
  document.querySelectorAll('a').forEach(link => {
    if (link.href.includes('spline')) {
      link.remove();
    }
  });
};

/**
 * Interactive 3D Robot component using Spline
 * Displays a 3D robot that follows cursor movement
 * Note: Robot color adjusted to blue theme (#2E5FFF) to match website
 * 
 * @param scene - URL to the Spline scene file
 * @param className - Additional Tailwind classes for styling
 */
export function InteractiveRobotSpline({ 
  scene, 
  className 
}: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove watermark immediately
    removeWatermark();

    // Set up MutationObserver to continuously remove watermark if it reappears
    const observer = new MutationObserver(() => {
      removeWatermark();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Also check periodically as fallback
    const interval = setInterval(removeWatermark, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleLoad = () => {
    // Remove watermark when scene loads
    setTimeout(removeWatermark, 100);
    setTimeout(removeWatermark, 500);
    setTimeout(removeWatermark, 1000);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`} 
      style={{ 
        filter: 'hue-rotate(260deg) saturate(1.5) brightness(1.3) contrast(1.15)'
      }}
    >
      <Suspense
      fallback={
        <div 
          className={`w-full h-full flex items-center justify-center bg-gray-900 text-white ${className}`}
        >
          <svg 
            className="animate-spin h-5 w-5 text-white mr-3" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
            />
          </svg>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={handleLoad}
      />
    </Suspense>

      {/* Fubotics branding overlay to cover watermark */}
      <div 
        className="absolute bottom-2 right-2 z-[9999] pointer-events-none select-none"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(15, 15, 15, 0.95) 100%)',
          backdropFilter: 'blur(12px)',
          padding: '12px 28px',
          borderRadius: '8px',
          border: '1.5px solid rgba(212, 196, 179, 0.3)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 196, 179, 0.1)',
          minWidth: '160px',
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span 
          style={{
            background: 'linear-gradient(135deg, #f5f3f0 0%, #d4c4b3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '15px',
            fontWeight: '600',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', 'Georgia', serif",
            textTransform: 'uppercase',
            display: 'block',
            lineHeight: '1'
          }}
        >
          Fubotics
        </span>
      </div>
      
      {/* Aggressive watermark hiding styles */}
      <style>{`
        /* Hide all potential watermark elements */
        #spline-watermark,
        [id*="watermark" i],
        [class*="watermark" i],
        [class*="spline-watermark" i],
        [class*="logo" i],
        a[href*="spline.design"],
        a[href*="spline"],
        div[style*="z-index: 9999"],
        div[style*="z-index:9999"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        /* Hide any fixed or absolute positioned elements that might be watermarks */
        canvas ~ div[style*="position: fixed"],
        canvas ~ div[style*="position: absolute"] {
          display: none !important;
        }

        /* Additional aggressive hiding */
        * [id*="spline" i],
        * [class*="spline" i] {
          pointer-events: none !important;
        }

        /* Keep only the canvas visible */
        canvas {
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
}
