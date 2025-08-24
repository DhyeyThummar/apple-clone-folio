import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <FloatingElements />
      
      <div className="relative z-20">
        <Navigation />
        
        <main>
          <section id="home">
            <HeroSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="skills">
            <SkillsSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="experience">
            <ExperienceSection />
          </section>
          
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
