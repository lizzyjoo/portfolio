import "./about.css";
export default function About() {
  return (
    <section
      id="about"
      data-section-name="about"
      className="relative min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 "
      style={{ backgroundColor: "#faf9f6" }}
    >
      <h2
        className="text-6xl md:text-8xl text-gray-500gsap-section-title font-bold"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate3d(0px, -5.844px, 0px)",
          opacity: 1,
          visibility: "inherit",
        }}
      >
        Contact
      </h2>
      <div className="about  mt-10 ">
        <div className="section section-bio">
          <h2 className="label">BIO</h2>
          <div data-copy-wrapper="true">
            <p>
              Violinist. Full-stack developer. Neuroscience researcher at Boston
              University. I like creating things—music, food, web apps.
            </p>
            <br />
            <p>Currently based in Boston, Massachusetts.</p>
          </div>
        </div>
        <div className="section section-clients">
          <h2 className="label">PERSONAL STORY</h2>
          <div data-copy-wrapper="true">
            <p>
              My first exposure to Python was in college in 2021—I started
              writing data analysis scripts and scientific code, then got into
              web development in 2024. Since then, I&apos;ve built a handful of
              projects and worked with some incredible people to bring their
              ideas to life. I love bringing ideas into reality and I&apos;m
              always planning something new. My most recent full-stack project
              is URTEXT, a blogging platform for classical musicians. Currently
              working on TripLog, a travel blogging app. Right now, I&apos;m
              balancing finishing my M.S. in neuroscience with building creative
              web development projects.
            </p>
            <br />
            <p>
              Currently, I aim to strike a balance between finishing my
              neuroscience research m.s degree and working on creative web
              development projects.
            </p>
          </div>
        </div>
        <div className="section section-connect">
          <h2 className="label">CONNECT</h2>
          <div data-copy-wrapper="true">
            <p>
              For business inquiries, email me at{" "}
              <a href="mailto:alxlokasasmita@gmail.com">lizzy99joo@gmail.com</a>
            </p>
            <br />
          </div>
          <br />
        </div>
        <div className="socials">
          <a target="_blank" href="https://www.youtube.com/@elizabethjoo1999">
            youtube
          </a>
          <a target="_blank" href="https://www.instagram.com/lizzy.joo/">
            insta
          </a>
          <a target="_blank" href="https://github.com/lizzyjoo">
            github
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/lizzyjoo">
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
