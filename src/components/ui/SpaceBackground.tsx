import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 60;
        const connectionDistance = 150;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(92, 133, 255, 0.6)'; // Blue-ish
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            canvas.width = width;
            canvas.height = height;
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            if (!ctx) return;
            ctx.strokeStyle = 'rgba(92, 133, 255, 0.15)';
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Particles & Connections
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawConnections();

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-bg-primary">
            {/* Hexagon Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233D5EFF' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Neural Network Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 z-10" />

            {/* Scanning Beam */}
            <div className="absolute inset-0 z-20 pointer-events-none animate-scan bg-gradient-to-b from-transparent via-accent-400/10 to-transparent h-[200px]" />

            {/* Vignette */}
            <div className="absolute inset-0 z-30 bg-radial-gradient from-transparent to-bg-900 opacity-80" />
        </div>
    );
};

export default SpaceBackground;
