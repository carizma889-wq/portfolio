 import { useEffect, useState } from "react";
import { ROLES,hero__stats } from "../assets/assets";
 export default function Hero() {
function useTyping(words, speed = 80, pause = 1800) {
      const [text, setText] = useState("");
      const [idx, setIdx] = useState(0);
      const [deleting, setDeleting] = useState(false);
    
      useEffect(() => {
        const word = words[idx % words.length];
        const timeout = setTimeout(() => {
          if (!deleting) {
            setText(word.slice(0, text.length + 1));
            if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), pause);
          } else {
            setText(word.slice(0, text.length - 1));
            if (text.length - 1 === 0) { setDeleting(false); setIdx((i) => i + 1); }
          }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
      }, [text, deleting, idx, words, speed, pause]);
    
      return text;
    }

    
  const typed = useTyping(ROLES);
  return (
    <section className="hero" id="home">
      <div className="hero__grid" />
      <div className="hero__glow" />
      <div className="hero__glow2" />
      <div className="hero__content">
        <div className="hero__tag">
          <span className="dot" /> Available for work
        </div>
        <h1 className="hero__name">
          <span className="line1">Abdullah</span>
          <span className="line2">El-Developer</span>
        </h1>
        <p className="hero__role">
          I'm a <span className="typed-text">{typed}</span>
          <span className="cursor-blink">|</span>
        </p>
        <p className="hero__desc">
        I build high-quality websites and web applications that combine clean code with modern design.
        My work is more than just code — it's a complete user experience.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects"><span>View My Work</span> →</a>
          <a className="btn btn--outline" href="#contact">Get In Touch</a>
        </div>
        <div className="hero__stats">
          {hero__stats.map(([n, l]) => (
            <div className="stat" key={l}>
              <div className="stat__num">{n}</div>
              <div className="stat__label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  
}