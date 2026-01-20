"use client";
import { useState } from "react";
import "./music.css";
export default function Music() {
  const [menu, setMenu] = useState("");
  return (
    <section
      id="music"
      data-section-name="music"
      className="sect relative min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 flex items-center"
      style={{ backgroundColor: "white", color: "#0f0f0f" }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 md:gap-16 items-start">
        <h2
          className="text-6xl md:text-8xl text-gray-500 gsap-section-title font-bold"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, -5.844px, 0px)",
            opacity: 1,
            visibility: "inherit",
          }}
        >
          Music
        </h2>
        <div id="piano" className="">
          {" "}
          <div className="keys">
            <button className="ext-links">
              <a href="https://youtu.be/NVWJocvldm8">
                December 2025 Violin & Piano Duo Recital @MIT
              </a>
            </button>
            <button></button>
            <button className="normal"></button>
            <button></button>
            <button className="ext-links">
              <a
                href=" https://youtu.be/oy46v--n0lc?si=tFqdZIihY99f_0lQ&t=1440"
                className="ext-links"
              >
                Feburary 2018 Concerto Competition Winners&apos; Concert
              </a>
            </button>
            <button></button>
            <button>gallery</button>
            <button></button>
            <button>interests</button>
            <button></button>
            <button>upcoming</button>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
}
