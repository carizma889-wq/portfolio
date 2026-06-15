import { useState,useEffect } from "react";
import { listNavbar } from "../assets/assets";
export default function Navbar() {
  // =============state===========
  const [scrolled, setScrolled] = useState(false);

  // ============Effect============
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="logo">
        <span>&lt;</span>DEV<span>/&gt;</span>
      </div>
      <nav>
        {listNavbar.map((s) => (
          <a key={s} href={`#${s.toLowerCase()}`}>{s}</a>
        ))}
      </nav>
    </header>
  );
}