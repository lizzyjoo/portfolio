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
      // section reveal
      gsap.utils.toArray<HTMLElement>(".sect").forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.75,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
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
