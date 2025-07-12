import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import CertificationsSection from "@/components/Portfolio/CertificationsSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import EducationSection from "@/components/Portfolio/EducationSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="certifications">
          <CertificationsSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
