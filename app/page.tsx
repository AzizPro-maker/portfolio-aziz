import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col relative overflow-x-hidden">
      {/* Background Grid Effect 
        (Kelas ini sudah kita definisikan di globals.css pada Part 1)
      */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      
      <div className="z-10 w-full flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubStats />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}