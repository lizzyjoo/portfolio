import { ItemHeaderDemo } from "../ui/ItemHeaderDemo";
export default function Research() {
  return (
    <section
      id="research"
      data-section-name="research"
      className="relative min-h-screen w-full px-8 py-16 md:px-16 lg:px-24 flex items-center"
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
          Research
        </h2>
        <div className="w-full flex flex-col justify-between">
          <div className="mb-6">
            I have a background in various domains of neuroscience research.
          </div>
          <ItemHeaderDemo />
        </div>
      </div>
    </section>
  );
}
