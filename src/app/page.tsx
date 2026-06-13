"use client";
import Header from "@/components/Header";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Music from "@/components/sections/Music";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef}>
      <Header />
      <Main />
      <Skills />
      <Research />
      <Music />
      <About />
    </main>
  );
}
