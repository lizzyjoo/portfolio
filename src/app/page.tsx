import Header from "@/components/Header";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Software from "@/components/sections/Software";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Music from "@/components/sections/Music";
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Skills />
      <Research />
      <Music />
      <About />
    </main>
  );
}
