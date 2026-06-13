import "./about.css";
export default function About() {
  return (
    <section
      id="about"
      data-section-name="about"
      className="sect relative min-h-[100svh] w-full px-8 py-16 md:px-16 lg:px-24"
      style={{ backgroundColor: "#faf9f6" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl text-gray-500animate-on-scroll font-bold">
          About
        </h2>
        <div className="about mt-10 flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-16 ">
          <div className="section section-bio">
            <h2 className="label">BIO</h2>
            <div data-copy-wrapper="true">
              <p>
                I identify as all of the following: Violinist, Software
                Engineer, (ex) neuroscience grad student at Boston University. I
                love playing classical music, going out for culinary adventures,
                and building web apps!
              </p>
              <br />
              <p>Currently based in Boston, Massachusetts.</p>
            </div>
          </div>
          <div className="section section-clients">
            <h2 className="label">PERSONAL STORY</h2>
            <div data-copy-wrapper="true">
              <p>
                My first exposure to Python was in college in 2021. I started
                writing data analysis scripts and scientific code, then got into
                web development in 2024. What I love the most about software
                engineering is the art of finding that sweet balance of
                constraint and creativity.
              </p>
              <br />
              <p>
                My most recent full-stack project is{" "}
                <a href="https://github.com/lizzyjoo/blog-project">URTEXT</a>, a
                blogging platform for classical musicians.
              </p>
              <br />
              <p>
                I'm also the lead frontend developer at{" "}
                <a className="underline" href="https://www.pcuro.com/">
                  @Pcuro
                </a>
                , a B2B procurement marketplace where I build the UI/UX
                workflows that help buyers and suppliers run competitive RFQ
                processes.
              </p>
            </div>
          </div>
          <div className="section section-connect">
            <h2 className="label">CONNECT</h2>
            <div data-copy-wrapper="true">
              <p>
                Email me at{" "}
                <a href="mailto:lizzy99joo@gmail.com">lizzy99joo@gmail.com</a>{" "}
                for any inquiries!
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
      </div>
    </section>
  );
}
