import "./about.css";
export default function About() {
  return (
    <section
      id="about"
      data-section-name="about"
      className="sect relative min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 "
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
        About
      </h2>
      <div className="about mt-10 flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-16 ">
        <div className="section section-bio">
          <h2 className="label">BIO</h2>
          <div data-copy-wrapper="true">
            <p>
              Violinist. Full-stack developer. Neuroscience researcher at Boston
              University. I like making music, food, and web apps.
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
              projects; I love bringing ideas into reality and I&apos;m always
              planning something new.
            </p>
            <br />
            <p>
              My most recent full-stack project is{" "}
              <a href="https://github.com/lizzyjoo/blog-project">URTEXT</a>, a
              blogging platform for classical musicians. I am currently working
              on <a href="https://github.com/lizzyjoo/triplog">TripLog</a>, a
              travel blogging platform with AI-powered semantic search, built
              with Next.js and TypeScript.
            </p>
            <br />
            <p>
              Right now, I&apos;m completing my M.S. in Neuroscience and
              transitioning into software engineering through full-stack
              projects.
            </p>
          </div>
        </div>
        <div className="section section-connect">
          <h2 className="label">CONNECT</h2>
          <div data-copy-wrapper="true">
            <p>
              For business inquiries, email me at{" "}
              <a href="mailto:lizzy99joo@gmail.com">lizzy99joo@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="socials mt-0">
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
          <a href="mailto:lizzy99joo@gmail.com" target="_blank">
            email
          </a>
        </div>
      </div>
    </section>
  );
}
