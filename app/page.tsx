import Wrapper from "@/components/common/wrapper";
import Hero from "@/components/landing/hero";
import Spotify from "@/components/landing/spotify";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-16 ">
      <Hero/>
      <Spotify/>
    </div>

  );
}
