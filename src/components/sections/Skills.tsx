export default function Skills() {
  return (
    <section
      id="services"
      data-section-name="services"
      className="sect relative w-full px-8 py-16 md:px-16 lg:px-24 flex items-center min-h-screen"
      style={{ backgroundColor: "#f5f5f0" }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 items-start">
        <h2
          className="text-6xl md:text-8xl text-gray-500 gsap-section-title font-bold"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, -18.2199px, 0px)",
            opacity: 1,
            visibility: "inherit",
          }}
        >
          Skills
        </h2>
        <div className="">
          <p
            className="text-3xl md:text-4xl text-black gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            Check out what I can do below and see how I can help bring your
            vision to life 👇
          </p>
          <div className="flex flex-col gap-24 mt-8">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 mb-4">01</span>
                <h3 className="font-mono text-4xl md:text-5xl text-black">
                  &lt;Frontend /&gt;
                </h3>
                {/* <p className="text-brand-gray mt-4 text-sm">
                  Languages & Frameworks
                </p> */}
              </div>
              <ul className="md:col-span-2 flex flex-col">
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">React</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">Tailwind CSS</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">HTML/CSS</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4">
                  <span className="text-lg">TipTap</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
              </ul>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 mb-4">02</span>
                <h3 className="font-mono text-4xl md:text-5xl text-black">
                  {"{"} Backend {"}"}
                </h3>
                {/* <p className="text-brand-gray mt-4 text-sm">
                  Tools I work with to deploy the apps &amp; scale it.
                </p> */}
              </div>
              <ul className="md:col-span-2 flex flex-col">
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">Node.js / Express</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">PostgreSQL</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">Prisma ORM</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-gray-800">
                  <span className="text-lg">REST APIs / JWT / OAuth</span>{" "}
                  <span className="text-gray-600"></span>
                </li>

                <li className="flex justify-between items-center py-4">
                  <span className="text-lg">Testing (Jest / Vitest)</span>{" "}
                  <span className="text-gray-600"></span>
                </li>
              </ul>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 mb-4">03</span>
                <h3 className="font-display text-5xl md:text-6xl text-black">
                  Languages
                </h3>
                {/* <p className="text-brand-gray mt-4 text-sm">
                  Certifications I have acquired for the programming languages.
                </p> */}
              </div>
              <ul className="md:col-span-2 flex flex-col">
                <li>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/F36DHCLWW7KY"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">Javascript / Typescript</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                    href="https://www.udemy.com/certificate/UC-8022c668-4f52-4ce4-9f57-7d2ff1344b7a/"
                    target="_blank"
                  >
                    <span className="text-lg">Python</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                    href="https://www.coursera.org/account/accomplishments/verify/LZYQ9PFKZ33U"
                    target="_blank"
                  >
                    <span className="text-lg">SQL</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/FSGH2BHVKVDS"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">JAVA</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.certificates.dev/certificates/9df3592d-dd7f-4eb7-aac6-9c7ac9fd06d1/download?signature=2ca514f104d6a6598e154ca1798087f3d3c2e4f967ca9b250dfe4221a61b783d"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">R</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.certificates.dev/certificates/9df3592d-dd7f-4eb7-aac6-9c7ac9fd06d1/download?signature=2ca514f104d6a6598e154ca1798087f3d3c2e4f967ca9b250dfe4221a61b783d"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">MATLAB</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 mb-4">04</span>
                <h3 className="font-display text-5xl md:text-6xl text-black">
                  Tools
                </h3>
                {/* <p className="text-brand-gray mt-4 text-sm">
                  Certifications I have acquired for the programming languages.
                </p> */}
              </div>
              <ul className="md:col-span-2 flex flex-col">
                <li>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/F36DHCLWW7KY"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">Git / GitHub</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                    href="https://www.udemy.com/certificate/UC-8022c668-4f52-4ce4-9f57-7d2ff1344b7a/"
                    target="_blank"
                  >
                    <span className="text-lg">Docker</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                    href="https://www.coursera.org/account/accomplishments/verify/LZYQ9PFKZ33U"
                    target="_blank"
                  >
                    <span className="text-lg">Railway / Vercel</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/FSGH2BHVKVDS"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">Linux</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.certificates.dev/certificates/9df3592d-dd7f-4eb7-aac6-9c7ac9fd06d1/download?signature=2ca514f104d6a6598e154ca1798087f3d3c2e4f967ca9b250dfe4221a61b783d"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">VS Code</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.certificates.dev/certificates/9df3592d-dd7f-4eb7-aac6-9c7ac9fd06d1/download?signature=2ca514f104d6a6598e154ca1798087f3d3c2e4f967ca9b250dfe4221a61b783d"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">Jupyter</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.certificates.dev/certificates/9df3592d-dd7f-4eb7-aac6-9c7ac9fd06d1/download?signature=2ca514f104d6a6598e154ca1798087f3d3c2e4f967ca9b250dfe4221a61b783d"
                    target="_blank"
                    className="flex justify-between items-center py-4 border-b border-gray-800 hover:text-brand-green transition-colors"
                  >
                    <span className="text-lg">Figma</span>{" "}
                    <span className="text-gray-600"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
