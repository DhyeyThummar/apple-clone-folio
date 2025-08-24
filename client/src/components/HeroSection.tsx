import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 dark:bg-gradient-dark bg-gradient-subtle">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Profile Image with Apple-style reveal */}
        <div className="mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <img
              src={heroPortrait}
              alt="Professional portrait"
              className="w-full h-full object-cover rounded-full shadow-large scale-on-hover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-border/20" />
          </div>
        </div>

        {/* Name - Apple headline style */}
        <h1 className="apple-headline text-foreground mb-6 fade-in-up" style={{ animationDelay: "0.4s" }}>
          Your Name
        </h1>

        {/* Tagline - Apple subheadline style */}
        <p className="apple-subheadline text-muted-foreground mb-12 max-w-4xl mx-auto fade-in-up" style={{ animationDelay: "0.6s" }}>
          B.Tech CSE Student | Aspiring Data/Business Analyst | Tech Enthusiast
        </p>

        {/* Apple-style CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button className="apple-button-primary">
            View My Work
          </Button>
          <Button variant="outline" className="apple-button-secondary">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;