import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero /><a 
  href="https://github.com/olaiyabayo2026-ux/portfolio2/blob/main/cv-olaiya-adebayo.pdff"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
>
  Download My CV
</a>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
