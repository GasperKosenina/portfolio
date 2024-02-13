"use client";
import Projects from "./ui/projects";
import { useEffect } from "react";
import AboutMe from "./ui/aboutMe";
import Skills from "./ui/skills";
import Experience from "./ui/experience";
import Education from "./ui/education";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex max-w-screen-md mx-auto flex-col mt-14">
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </main>
  );
}
