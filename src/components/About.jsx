import { AboutLang,lang } from "../assets/assets";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="reveal-left about__visual">

          <div className="floating-badge floating-badge--exp">
            <div className="badge-num">03+</div>
            <div style={{ fontSize: "0.7rem", color: "#8892a4" }}>Years Experience</div>
          </div>
          <div className="floating-badge floating-badge--stack">
            <div style={{ fontSize: "0.7rem", color: "#8892a4", marginBottom: 4 }}>Tech Stack</div>
            <div className="stack-icons">
              {lang.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>

        <div className="reveal-right about__text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who am I?</h2>
          <p className="about-desc">
            I'm a front-end developer passionate about writing clean code and building exceptional user experiences.
            I work on both frontend and backend, and I love transforming complex ideas into simple and beautiful things.
          </p>
          <p className="about-desc" style={{ marginTop: "-1rem" }}>
            I've been in the field for over 3 years, working with startups and large companies.
            My journey began with my passion for problem-solving and beautiful design.
          </p>
          <ul className="skills-list">
            {AboutLang.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  
  );
}