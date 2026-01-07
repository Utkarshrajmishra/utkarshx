import Wrapper from "@/components/common/wrapper";
import About from "@/components/landing/about";
import ExperienceSection from "@/components/landing/experience-section";
import Hero from "@/components/landing/hero";
import Spotify from "@/components/landing/spotify";
import Github from "@/components/landing/github";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  py-20 px-8 ">
      <Hero/>
      <Spotify/>
      <ExperienceSection/>
      <About/>
      <Github/>
    </div>

  );
}
