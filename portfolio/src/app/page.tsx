"use client";

import Hero from "@/Components/hero";
import HomePipeline from "@/Components/home-pipeline";
import Experience from "@/Components/experience";
import FeaturedWork from "@/Components/featured-work";
import ExpertiseSnapshot from "@/Components/expertise-snapshot";
import AboutMe from "@/Components/aboutme";
import Footer from "@/Components/footer";
import { PrincipleBand } from "@/Components/principle-band";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <HomePipeline />
      <Experience />
      <FeaturedWork />
      <PrincipleBand />
      <ExpertiseSnapshot />
      <AboutMe />
      <Footer />
    </main>
  );
}
