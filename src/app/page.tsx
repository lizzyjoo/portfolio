"use client";
import Header from "@/components/Header";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Music from "@/components/sections/Music";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate section titles
      gsap.utils
        .toArray<HTMLElement>(".gsap-section-title")
        .forEach((title) => {
          gsap.fromTo(
            title,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        });

      // Animate content blocks
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );
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
