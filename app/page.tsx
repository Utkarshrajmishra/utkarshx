import Wrapper from "@/components/common/wrapper";
import About from "@/components/landing/about";
import ExperienceSection from "@/components/landing/experience-section";
import Hero from "@/components/landing/hero";
import Spotify from "@/components/landing/spotify";
import Github from "@/components/landing/github";
import Image from "next/image";
import MediumBlogs from "@/components/landing/blogs";
import PersonalLife from "@/components/landing/life";
import Projects from "@/components/landing/projects";
import CTA from "@/components/landing/cta";
import CalComContextProvider from "@/context/calcom-context";
import StatusContextProvider from "@/context/status-context";

export default function Home() {
  return (
    <div className="min-h-screen  py-20 px-8 ">
      <StatusContextProvider>
      <Hero />
      <Spotify />
      <ExperienceSection />
      <Projects />
      <About />
      <Github />
      <MediumBlogs />
      <CalComContextProvider>
        <CTA />
      </CalComContextProvider>
      <PersonalLife />
      </StatusContextProvider>

    </div>

  );
}
