// import { useProjects } from "../feature/useProjects";
import { PROJECTS } from "../assets/assets";
import { useEffect,useState } from "react";
import { supabase } from "../../supabase";

export default function Projects() {
  const[dataValue,setDataValue]=useState([])
  useEffect(()=>{

    async function  getData (){
const {data,error}=await supabase.from("projects").select("*")
    if(data){
      setDataValue(data)
    }
    if(error){
      console.log(error)
    }
    }
    getData()
    console.log(dataValue)
  },[])
  
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="reveal">
          <div className="section-label">Work</div>
          <h2 className="section-title">My selected projects</h2>
          <p className="section-sub">A few of the best projects I've worked on — from concept to production.</p>
        </div>
        <div className="projects__grid">
          {dataValue.length === 0?PROJECTS.map((p,i)=>{
            return <div className="projects__card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="card-img-wrap">
                <div className="card-img" style={{ background: p.bg }}>
                
                  <img src={p.img} alt=""/>
                  
                  </div>
                <div className="project-links">
                  <a href="#" title="Live Demo">🔗</a>
                </div>
              </div>
              <div className="card-body">
                <div className="project-type">{p.type}</div>
                <h3 className="project-title"> {p.title}</h3>
                <p className="project-desc">{p.desc} <a href={p.github}>more</a> </p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                
              </div>
            </div>
          }):dataValue.map((p, i) => {
             return <div className="projects__card reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="card-img-wrap">
                <div className="card-img" style={{ background: p.bg }}><img src={p.img} alt=""/></div>
                <div className="project-links">
                  <a href="#" title="Live Demo">🔗</a>
                </div>
              </div>
              <div className="card-body">
                <div className="project-type">{p.type}</div>
                <h3 className="project-title"> {p.title} </h3>
                <p className="project-desc">{p.desc} <a href={p.github}>more</a> </p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
            })}
        </div>
      </div>
    </section>
  );
}