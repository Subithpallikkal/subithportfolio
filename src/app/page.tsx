import { AboutSection } from "../components/portfolio/about-section";
import { ContactSection } from "../components/portfolio/contact-section";
import { ExperienceSection } from "../components/portfolio/experience-section";
import { Hero } from "../components/portfolio/hero";
import { ProjectsSection } from "../components/portfolio/projects-section";
import { ScrollProgress } from "../components/portfolio/scroll-progress";
import { SiteFooter } from "../components/portfolio/site-footer";
import { SiteNav } from "../components/portfolio/site-nav";
import { SkillsSection } from "../components/portfolio/skills-section";

export default function Home() {
  return (
    <>
      <div className="page-noise" aria-hidden />
      <ScrollProgress />
      <SiteNav />
      <main className="relative z-60">
        <section id="top">
          <Hero />
        </section>
        <section
          id="about"
          className="relative z-70 bg-linear-to-b from-[#070a12]/20 via-[#070a12]/78 to-[#070a12] px-4 py-16 backdrop-blur-[2px] sm:px-6 sm:py-20"
        >
            <AboutSection />
        </section>
        <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
            <SkillsSection />
        </section>
        <section id="experience" className="px-4 py-16 sm:px-6 sm:py-20">
            <ExperienceSection />
        </section>
        <section id="projects" className="px-4 py-16 sm:px-6 sm:py-20">
            <ProjectsSection />
        </section>
        <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
          <ContactSection />
        </section>
        <section id="footer">
          <SiteFooter />
        </section>
      </main>
    </>
  );
}
