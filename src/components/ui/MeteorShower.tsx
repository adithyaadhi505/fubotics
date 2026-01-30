import React, { useEffect, useRef } from 'react';

interface Meteor {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
}

const MeteorShower: React.FC<{ className?: string }> = ({ className = '' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let meteors: Meteor[] = [];
        let animationFrameId: number;
        let w = 0;
        let h = 0;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight; // Fixed height, will be positioned absolutely/fixed
        };

        const createMeteor = (): Meteor => {
            return {
                x: Math.random() * w, // Start anywhere horizontally
                y: Math.random() * -200 - 100, // Start above screen
                length: Math.random() * 80 + 20,
                speed: Math.random() * 2 + 0.5, // Much slower: 0.5 to 2.5
                opacity: Math.random() * 0.5 + 0.1,
            };
        };

        const init = () => {
            resize();
            window.addEventListener('resize', resize);

            // Initialize some meteors
            for (let i = 0; i < 5; i++) {
                meteors.push(createMeteor());
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            // Randomly add new meteors, keep density high but spawn slowly
            if (meteors.length < 40 && Math.random() < 0.05) {
                meteors.push(createMeteor());
            }

            meteors.forEach((m, index) => {
                // Draw meteor
                ctx.beginPath();

                // Direction: Top-Left to Bottom-Right
                // Head is at (m.x, m.y)
                // Tail is behind, so (m.x - len, m.y - len)
                const endX = m.x - m.length;
                const endY = m.y - m.length;

                const grad = ctx.createLinearGradient(m.x, m.y, endX, endY);
                grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.moveTo(m.x, m.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Move: Top-Left to Bottom-Right means X increases, Y increases
                m.x += m.speed;
                m.y += m.speed;

                // Reset if out of bounds (Bottom or Right)
                if (m.y > h + 100 || m.x > w + 100) {
                    meteors[index] = createMeteor();
                    // Randomize start x to cover full width, focusing on left side to drift right
                    meteors[index].x = Math.random() * (w * 1.5) - (w * 0.5);
                    meteors[index].y = -150;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };


        init();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none fixed inset-0 z-0 ${className}`}
        />
    );
};

export default MeteorShower;
