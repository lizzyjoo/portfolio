export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 flex items-center bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 md:gap-16">
        <h2 className="text-6xl md:text-8xl text-gray-500 font-bold">About</h2>
        <div className="grid grid-cols1 md:grid-cols-2 gap-12">
          <p
            className="text-3xl md:text-4xl text-white gsap-fade-up"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            hello, I&apos;m Lizzy Joo 👋 a full-stack developer based in Boston.
            I love to travel &amp; create websites.
          </p>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div
              className="w-fit h-fit lg:h-64 bg-gray-800 rounded-md gsap-fade-up bg-no-repeat aspect-square bg-contain"
              style={{
                backgroundImage:
                  'url("https://avatars.githubusercontent.com/u/58314282")',
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            />
            <p
              className="md:w-1/2 text-brand-gray gsap-fade-up"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            >
              I love to collaborate and create fun websites. I also love to try
              out new things and travel. I&apos;m also an avid gamer, weeb and
              love to attend conventions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
