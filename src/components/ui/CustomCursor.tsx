import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CustomCursor Component
 * A simple, futuristic blue glowing dot cursor.
 * Replaces the robotic brackets with a clean, glowing orb design.
 */
const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if target is interactive
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'input' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.getAttribute('role') === 'button' ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    // Don't render on touch devices
    if (typeof navigator !== 'undefined' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 0) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
                x: mousePosition.x - 6, // Center the 12px dot
                y: mousePosition.y - 6,
                opacity: isVisible ? 1 : 0,
                scale: isHovering ? 1.5 : 1, // Slight pulse on hover
            }}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 40,
                mass: 0.1
            }}
        >
            <div
                className="w-3 h-3 rounded-full"
                style={{
                    backgroundColor: '#252bc8ff',
                    boxShadow: '0 0 15px 2px rgba(92, 107, 226, 0.6), 0 0 30px rgba(71, 78, 230, 0.3)'
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
