import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // ✅ Dark by default
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Force dark theme by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-2xl md:text-3xl font-bold text-foreground hover:text-apple-blue transition-colors duration-200"
            >
              Your Name
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  {item.name}
                  {/* ✅ Diffused Glow Effect */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-10 rounded-full bg-apple-blue/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {/* Underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apple-blue transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="lg"
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full hover:bg-muted"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-11 h-11 rounded-full hover:bg-muted"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-5 space-y-2 bg-background/95 backdrop-blur-xl border-b border-border/50 rounded-b-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative block px-4 py-3 text-lg font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 group"
                >
                  {item.name}
                  {/* ✅ Diffused Glow Effect for Mobile */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-10 rounded-full bg-apple-blue/25 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;