import { useEffect } from "react";
import { useSkills } from "../feature/useSkills";
import { SKILLS_DATA } from "../assets/assets";
function useSkillBars() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".fill").forEach((b) => b.classList.add("animated"));
      }),
      { threshold: 0.3 }
    );
    document.querySelectorAll(".skills__card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Skills() {
  const { data, loading, error } = useSkills();
  useSkillBars();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <section id="skills" style={{ maxWidth: "unset" }}>
      <div className="skills">
        <div className="reveal" style={{ maxWidth: 600 }}>
          <div className="section-label">Skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">The set of technologies I use daily to build real and scalable projects.</p>
        </div>
        <div className="skills__grid">
          {data.length===0?
          SKILLS_DATA.map((cat, ci)=>(
            <div className="skills__card" key={ci} style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className="card-icon"><img src={cat.img} alt="" /></div>
              <h3 className="card-title">{cat.title}</h3>
              {cat.items.map((item) => {
                return<div className="skill-bar" key={item.name}>
                  <div className="skill-bar__info">
                    <span className="name">{item.name}</span>
                    <span className="pct">{item.pct}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="fill" style={{ "width": `${item.pct}%` }} />
                  </div>
                </div>
            })}
            </div>
          ))
          :data.map((cat, ci) => (
            <div className="skills__card" key={ci} style={{ transitionDelay: `${ci * 0.1}s` }}>
              <div className="card-icon"><img src={cat.img} alt="" /></div>
              <h3 className="card-title">{cat.title}</h3>
              {cat.skills.map((item) => {
                return<div className="skill-bar" key={item.name}>
                  <div className="skill-bar__info">
                    <span className="name">{item.name}</span>
                    <span className="pct">{item.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div className="fill" style={{ "width": `${item.level}%` }} />
                  </div>
                </div>
            })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}