"use client";
import { useState, useEffect } from "react";
const sectionThemes = {
  home: {
    textColor: "black",
  },
  software: {
    textColor: "white",
  },
  services: {
    textColor: "black",
  },
  research: {
    textColor: "black",
  },
  music: {
    textColor: "black",
  },
  about: {
    textColor: "black",
  },
} as const;

type SectionId = keyof typeof sectionThemes;

export default function Header() {
  const [currentSection, setCurrentSection] = useState<SectionId>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (id in sectionThemes) {
              setCurrentSection(id);
            }
          }
        });
      },
      {
        // Triggers when section crosses roughly where the header sits
        rootMargin: "-10% 0px -85% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const theme = sectionThemes[currentSection];

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full p-8 lg:p-12 z-[100] transition-colors duration-500"
      style={{ color: theme.textColor }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="relative">
          <div
            id="header-initial-left"
            className="flex gap-x-6"
            style={{ opacity: 1, visibility: "inherit" }}
          >
            <a
              href="#skills"
              data-cursor-view=""
              className="hover:opacity-60 transition-opacity"
            >
              Software
            </a>{" "}
            <a
              href="#research"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Research
            </a>
            <a
              href="#music"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Music
            </a>{" "}
            <a
              href="#about"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              About
            </a>{" "}
          </div>
          <p
            id="header-scrolled-left"
            className="absolute top-0 left-0 font-bold text-brand-light opacity-0 pointer-events-none"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <span className="md:inline hidden">lizzyjoo</span>{" "}
            <span className="md:hidden inline">lizzyjoo</span>
          </p>
        </div>
        <div className="relative">
          <p
            id="header-initial-right"
            className="hidden md:block"
            style={{ opacity: 1, visibility: "inherit" }}
          >
            Web Developer
          </p>
          <div
            id="header-scrolled-right"
            className="absolute top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 right-0 flex gap-x-6 text-brand-light opacity-0 pointer-events-none"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <a
              href="#work"
              data-cursor-view=""
              className="hover:text-gray-400 transition-colors"
            >
              Work
            </a>{" "}
            <a
              href="#about"
              data-cursor-view=""
              className="hover:text-gray-400 transition-colors"
            >
              About
            </a>{" "}
            <a
              href="#network"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Network
            </a>{" "}
            <a
              href="#contact"
              data-cursor-view=""
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
