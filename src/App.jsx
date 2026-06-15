// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// hook
import { useEffect, useRef } from "react";

// css
import './App.css'

// functions
function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX - 6 + "px";
        ref.current.style.top = e.clientY - 6 + "px";
      }
    };
    const over = (e) => { if (e.target.closest("a,button")) ref.current?.classList.add("cursor--big"); };
    const out  = () => ref.current?.classList.remove("cursor--big");
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);
  return <div className="cursor" ref={ref} />;
}






function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
function App() {
    useScrollReveal();
  return (
    <>
      <div className="noise" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App