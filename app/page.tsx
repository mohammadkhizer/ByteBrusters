import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TeamSection from '@/components/sections/TeamSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import StatsSection from '@/components/sections/StatsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}