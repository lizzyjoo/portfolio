export default function Header() {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full p-8 lg:p-12 z-[100] transition-colors duration-500"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="relative">
          <div
            id="header-initial-left"
            className="flex gap-x-6 text-black"
            style={{ opacity: 1, visibility: "inherit" }}
          >
            <a
              href="#about"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              About
            </a>{" "}
            <a
              href="#software"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Software
            </a>{" "}
            <a
              href="#music"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Music
            </a>{" "}
            <a
              href="#Research"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Research
            </a>
            <a
              href="#contact"
              data-cursor-view=""
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </a>
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
            className="text-black hidden md:block"
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
