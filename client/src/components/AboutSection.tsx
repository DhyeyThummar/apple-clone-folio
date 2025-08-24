import { useEffect, useRef } from "react";

const AboutSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Animated Stars Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="apple-headline text-foreground">About Me</h2>
              <div className="w-12 h-1 bg-apple-blue rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="apple-body text-muted-foreground">
                I'm a passionate Computer Science Engineering student with a deep interest in data analytics and business intelligence. My journey in technology is driven by curiosity and the desire to solve real-world problems through innovative solutions.
              </p>

              <p className="apple-body text-muted-foreground">
                Currently pursuing my B.Tech degree, I'm focused on building expertise in data analysis, machine learning, and software development. I believe in the power of data to drive meaningful insights and business decisions.
              </p>

              <p className="apple-body text-muted-foreground">
                When I'm not coding or analyzing data, you'll find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in the tech industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="apple-subheadline text-apple-blue font-bold">15+</div>
                <div className="apple-caption text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="apple-subheadline text-apple-blue font-bold">3+</div>
                <div className="apple-caption text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="apple-subheadline text-apple-blue font-bold">5+</div>
                <div className="apple-caption text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="apple-card bg-gradient-subtle border border-border/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-apple-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-apple-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">My Mission</h3>
                  <p className="text-muted-foreground">
                    To leverage technology and data analytics to create meaningful impact and drive innovation in the digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;