import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
        { name: "GitHub", href: "https://github.com/yourusername" },
        { name: "Email", href: "mailto:your.email@gmail.com" },
        { name: "Resume", href: "/resume.pdf" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "Python", href: "#" },
        { name: "Machine Learning", href: "#" },
        { name: "Data Analytics", href: "#" },
        { name: "React", href: "#" },
        { name: "Flutter", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Your Name</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              B.Tech CSE Student passionate about data analytics, machine learning, and creating meaningful solutions through technology.
            </p>
            <div className="pt-4">
              <p className="text-xs text-primary-foreground/60">
                Available for internships and full-time opportunities
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>© {currentYear} Your Name. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-center">
            <p className="text-xs text-primary-foreground/60">
              Inspired by Apple's design philosophy - Simple, elegant, and user-focused.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;