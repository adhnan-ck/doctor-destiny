import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        let pulses = [];

        const PARTICLE_COUNT = 60;
        const CONNECTION_DISTANCE = 120;
        const PULSE_INTERVAL = 3000;

        // Colors from the existing palette
        const GOLD = { r: 213, g: 173, b: 54 };
        const CYAN = { r: 0, g: 191, b: 255 };

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticle() {
            const useGold = Math.random() > 0.4;
            const color = useGold ? GOLD : CYAN;
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                color,
                alpha: Math.random() * 0.15 + 0.05,
                pulseSpeed: Math.random() * 0.01 + 0.005,
                pulseOffset: Math.random() * Math.PI * 2,
            };
        }

        function createPulse() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 0,
                maxRadius: Math.random() * 80 + 40,
                alpha: 0.12,
                speed: Math.random() * 0.4 + 0.3,
                color: Math.random() > 0.5 ? GOLD : CYAN,
            };
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(createParticle());
            }
        }

        function updateParticle(p, time) {
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.height + 10;
            if (p.y > canvas.height + 10) p.y = -10;

            // Gentle pulse in opacity
            p.currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.04;
        }

        function drawParticle(p) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.currentAlpha})`;
            ctx.fill();

            // Soft glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.currentAlpha * 0.3})`;
            ctx.fill();
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.06;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function updatePulses() {
            for (let i = pulses.length - 1; i >= 0; i--) {
                const pulse = pulses[i];
                pulse.radius += pulse.speed;
                pulse.alpha = 0.12 * (1 - pulse.radius / pulse.maxRadius);

                if (pulse.radius >= pulse.maxRadius) {
                    pulses.splice(i, 1);
                }
            }
        }

        function drawPulses() {
            for (const pulse of pulses) {
                ctx.beginPath();
                ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${pulse.color.r}, ${pulse.color.g}, ${pulse.color.b}, ${pulse.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        let lastPulseTime = 0;

        function animate(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn pulse rings periodically
            if (time - lastPulseTime > PULSE_INTERVAL) {
                pulses.push(createPulse());
                lastPulseTime = time;
            }

            // Update & draw particles
            for (const p of particles) {
                updateParticle(p, time);
                drawParticle(p);
            }

            // Draw connections
            drawConnections();

            // Update & draw pulses
            updatePulses();
            drawPulses();

            animationId = requestAnimationFrame(animate);
        }

        resize();
        initParticles();
        animationId = requestAnimationFrame(animate);

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
}
