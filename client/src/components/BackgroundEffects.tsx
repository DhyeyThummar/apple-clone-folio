import { useEffect, useRef, useState } from "react";

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      color: string;
    }> = [];
    
    const isDarkMode = document.documentElement.classList.contains('dark');
    const numParticles = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: isDarkMode ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ',
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with subtle background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle gradient overlay based on scroll
      const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      if (isDarkMode) {
        gradient.addColorStop(0, `rgba(0, 20, 40, ${0.02 + scrollProgress * 0.03})`);
        gradient.addColorStop(0.5, `rgba(10, 30, 60, ${0.01 + scrollProgress * 0.02})`);
        gradient.addColorStop(1, `rgba(0, 10, 20, ${0.03 + scrollProgress * 0.02})`);
      } else {
        gradient.addColorStop(0, `rgba(200, 220, 255, ${0.02 + scrollProgress * 0.03})`);
        gradient.addColorStop(0.5, `rgba(220, 230, 255, ${0.01 + scrollProgress * 0.02})`);
        gradient.addColorStop(1, `rgba(240, 245, 255, ${0.03 + scrollProgress * 0.02})`);
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default BackgroundEffects;