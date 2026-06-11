import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import LearningHub from "@/components/sections/LearningHub";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import AgeGroups from "@/components/sections/AgeGroups";
import Campuses from "@/components/sections/Campuses";
import Inquiry from "@/components/sections/Inquiry";
import Blog from "@/components/sections/Blog";
import Gallery from "@/components/sections/Gallery";
import Instagram from "@/components/sections/Instagram";
import Events from "@/components/sections/Events";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Offset for the fixed top-strip + nav bar */}
      <main className="pt-[88px] lg:pt-[96px]">
        <Hero />
        <LogoStrip />
        <LearningHub />
        <Stats />
        <Features />
        <Testimonials />
        <AgeGroups />
        <Campuses />
        <Inquiry />
        <Blog />
        <Gallery />
        <Instagram />
        <Events />
      </main>
      <Footer />
    </>
  );
}
