import { useEffect, useState } from "react";

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-apple-blue/20 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-apple-blue/15 rounded-full animate-float-medium" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-apple-blue/25 rounded-full animate-float-fast" 
           style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-apple-blue/20 rounded-full animate-float-slow" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-1/3 w-1.5 h-1.5 bg-apple-blue/18 rounded-full animate-float-medium" 
           style={{ animationDelay: '3s' }} />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-radial from-apple-blue/5 to-transparent rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-16 w-40 h-40 bg-gradient-radial from-apple-blue/3 to-transparent rounded-full animate-pulse-slow" 
           style={{ animationDelay: '3s' }} />
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--apple-blue))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--apple-blue))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--apple-blue))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path 
          d="M 0,20 Q 25,15 50,20 T 100,20" 
          stroke="url(#lineGradient)" 
          strokeWidth="0.1" 
          fill="none"
          className="animate-draw-line"
        />
        <path 
          d="M 0,80 Q 25,75 50,80 T 100,80" 
          stroke="url(#lineGradient)" 
          strokeWidth="0.1" 
          fill="none"
          className="animate-draw-line"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

export default FloatingElements;