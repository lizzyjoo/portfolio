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
            className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tighter leading-none animate-on-scroll"
          >
            Lizzy Joo
          </h1>
        </div>
        <div className="md:col-span-3">
          <p className="text-2xl lg:text-3xl max-w-2xl animate-on-scroll">
            I'm a <span className="font-bold">software engineer</span> with a
            background in <span className="italic">neuroscience research</span>{" "}
            and lifelong connection to{" "}
            <span className="italic underline">music</span>.
          </p>
        </div>
        <div className="md:col-start-4 md:col-span-2 flex flex-col gap-8 text-sm text-gray-600">
          <p className="animate-on-scroll">
            I love playing classical music, going out for culinary adventures,
            <br></br>and building web apps!
          </p>
          <p className="animate-on-scroll">
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
