import { GmailIcon } from "../icons/simple-icons-gmail";
import { RefinedgithubIcon } from "../icons/simple-icons-refinedgithub";
import { InstagramIcon } from "../icons/simple-icons-instagram";
import { LinkedinIcon } from "../icons/simple-icons-linkedin";

export default function Contact() {
  return (
    <section
      id="contact"
      data-section-name="contact"
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
          Contact
        </h2>
        <RefinedgithubIcon className="mr-2 h-40 w-40" />
        <InstagramIcon />
        <LinkedinIcon />
        <GmailIcon />
      </div>
    </section>
  );
}
