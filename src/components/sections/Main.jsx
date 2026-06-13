export default function Main() {
  return (
    <section
      id="home"
      data-section-name="home"
      className="sect relative min-h-screen w-full p-8 lg:p-12 text-black flex items-center bg-[var(--background-light-brand)]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-16 pt-32">
        <div className="md:col-span-3">
          <h1
            id="hero-name"
            className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tighter leading-none gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            Lizzy Joo
          </h1>
        </div>
        <div className="md:col-span-3">
          <p
            className="text-2xl lg:text-3xl max-w-2xl gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            I’m a <span style={{ fontWeight: 700 }}>software engineer</span>{" "}
            with a background in{" "}
            <span style={{ fontStyle: "italic" }}>neuroscience research</span>{" "}
            and lifelong connection to{" "}
            <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
              music
            </span>
            .
          </p>
        </div>
        <div className="md:col-start-4 md:col-span-2 flex flex-col gap-8 text-sm text-gray-600">
          <p
            className="gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            I love playing classical music, going out for culinary adventures,
            <br></br>and building web apps!
          </p>
          <p
            className="gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            Currently a software engineer{" "}
            <a className="underline" href="https://boredm.com/">
              @BoreDM
            </a>
            {" & "}
            <a className="underline" href="https://www.pcuro.com/">
              @Pcuro
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
