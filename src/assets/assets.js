
import react from '/img/react.png'
import front from '/img/front.png'
import uiux from '/img/uiuxpng.png'
import fu from '/img/fu.png'
import landing from '/img/landing.png'
import gravityteam from '/img/gravityteam.png'
import github from '/img/github.png'
import email from '/img/email.png'
import facebook from '/img/facebook.png'
import phone from '/img/phone.png'

export const listNavbar=["Home", "About", "Skills", "Projects", "Contact"]
export const ROLES = ["front-end Developer", "UI/UX Designer", "React Specialist", "Problem Solver"];
export const hero__stats=[["03+", "Years Exp"], ["30+", "Projects"], ["15+", "Clients"], ["100%", "Satisfaction"]]

export const lang=["JS", "C++", "PY", "GO"]
export const AboutLang=["React & js", "React", "System Design", "UI/UX Principles", "Agile / Scrum", "Open Source"]
// done
export const SKILLS_DATA = [
  {
    icon:front,
    title: "Frontend",
    items: [
      { name: "React / Node.js", pct: 92 },
      { name: "Javascript", pct: 85 },
      { name: "SCSS / Tailwind", pct: 90 },
      { name: "Framer Motion", pct: 78 },
    ],
  },
  {
    icon: react,
    title: "React",
    items: [
      { name: "Node.js / Express", pct: 85 },
      { name: "Python / Django", pct: 75 },
      { name: "PostgreSQL", pct: 80 },
      { name: "REST & GraphQL", pct: 82 },
    ],
  },
  {
    icon: uiux,
    title: "UI UX",
    items: [
      { name: "figma ", pct: 70 },
      { name: "adobe", pct: 78 },
      { name: "Git & GitHub", pct: 88 },
      { name: "Linux", pct: 42 },
    ],
  },
]
// done
export const PROJECTS = [
  {
    type: "Web App",
    title: "fullWebsite",
    desc: "A modern and fully responsive e-commerce website built with React, Redux, SCSS, Bootstrap, and Tailwind CSS. The project integrates real API data, dynamic UI components, and scalable state management. Designed from a professional Figma prototype and optimized for different screen sizes using responsive design techniques..",
    tags: ["React", "js", "supabase","scss",'redux'],
    bg: "linear-gradient(135deg,#0d1220,#1a0a2e)",
    img: fu,
    gitHub:'https://github.com/carizma889-wq/fullWebsite.git'
  },
  {
    type: "landing page",
    title: "gravityteam",
    desc: "A modern landing page inspired by the Gravity Team website, created to practice frontend development and UI implementation. The project focuses on design accuracy, layout structure, and visual presentation. Currently optimized for desktop view, with responsive support planned for future updates.",
    tags: ["React", "scss", "animation"],
    bg: "linear-gradient(135deg,#0d1220,#002a1a)",
    img: gravityteam,
    gitHub:'https://github.com/carizma889-wq/gravityteam.git'
  },
  {
    type: "AI Tool",
    title: "portfolio",
    desc: "Personal portfolio built with React + SCSS + Vite. Features typing animation, scroll reveal effects, animated skill bars, project showcase with hover effects, custom cursor, and a contact form. Fully responsive dark-mode design.",
    tags: ['React','scss','AI','Claude'],
    bg: "linear-gradient(135deg,#0d1220,#001a2a)",
    img:landing,
    gitHub:"https://github.com/carizma889-wq/portfolio.git"
  },


];
export const contact=[
            { icon: github, label: "GitHub", href: "https://github.com/carizma889-wq" },
            { icon: facebook, label: "Facebook", href: "https://www.facebook.com/abdallh.nader.16/" },
            { icon: phone, label: "Phone", href: "https://wa.me/201553599815" },
            { icon: email, label: "Email", href: "carizma889@gmail.com" },          
]

