
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML Learner",
    icon: web,
  },
  {
    title: "Web Development Enthusiast",
    icon: mobile,
  },
  {
    title: "Python Programming (Basic)",
    icon: backend,
  },
  {
    title: "Tech Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Intern",
    company_name: "Tantrata",
    icon: tekisky,
    iconBg: "#383E56",
    date: "jun 2025 - present",
    points: [
    "Recently joined as an intern to gain hands-on experience in real-world tech projects.",
    "Actively contributing to ongoing development tasks under team guidance.",
    "Learning and applying concepts in AI and software development through live projects.",
    "Observing real-world workflows to bridge the gap between academics and industry practices."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: firstTestimonial,
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: secondTestimonial,
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "This is my first portfolio website, built with AI assistance to guide design and structure. I customized it to reflect my profile as a BTech AIML student, gaining hands-on experience in front-end development and GitHub deployment.",
    tags: [
      {
        name: "HTML5,CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Git & GitHub",
        color: "white-text-gradient",
      },
      {
        name: "AI Tools",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript ",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "",
    description:
      "",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "white-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
