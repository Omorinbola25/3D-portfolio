import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Ecommerce,
  Dashboard,
  threejs,
  paysteriod,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Php Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SBSC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "I'm currently working as a Web Developer at a tech company, where I build and maintain responsive, user-friendly web applications. I mostly work with React, JavaScript, HTML, and CSS to create clean interfaces and improve user experience. I collaborate closely with designers and other developers, handle bug fixes, and integrate APIs to bring ideas to life. Being part of a real development team has helped me grow and sharpen my skills every day.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "SBSC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2024 - Present ",
    points: [
      "As a React.js developer, I've built responsive and user-friendly web interfaces using React, JavaScript, and Tailwind CSS. I focused on creating reusable components, integrating APIs, and ensuring smooth performance with tools like React Query and lazy loading. I collaborated closely with designers and teammates to bring UI designs to life, and used Git, and Figma to stay organized.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "SBSC",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 -  November 2024",
    points: [
      "I previously worked as a PHP Developer at a tech company, where I focused on building and maintaining dynamic web applications. I worked with tools like Laravel and MySQL to create clean, efficient backends, and often collaborated with the frontend team to ensure smooth integration. That real-world development experience helped me grow quickly—debugging, writing reusable code, and delivering features that met users needs.",
    ],
  },
  {
    title: "Content Creater",
    company_name: "Self Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "I’m a self-employed content creator who writes inspiring quotes and composes songs. I love using my creativity to bring joy and put smiles on people’s faces in my own little way. Through my work, I aim to uplift, motivate, and connect with others by sharing meaningful and heartfelt content.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Omorinbola proved me wrong.",
    name: "Damosky",
    designation: "SoftEng",
    company: "SBSC",
    image: "/tes-images/dammy.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Omorinbola does.",
    name: "Boluwatifeh Precious",
    designation: "ABO",
    company: "GTB BANK",
    image: "/tes-images/tifeh.png",
  },
  {
    testimonial:
      "After Omorinbola optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Jokotola Akinwunmi",
    designation: "Team Lead",
    company: "Cardinal Stone",
    image: "/tes-images/Tola.png",
  },
];

const projects = [
  {
    name: "CS Dashboard",
    description:
      "Web application that allows students to register, enroll in courses, and access learning content, while admins manage users, courses, and site content through a dashboard.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: Dashboard,
    source_code_link: "https://github.com/Omorinbola25/my-website.git",
  
  },
  {
    name: "Ecommerce",
    description:
      "Web application that allows users to browse products, add items to their cart, make secure payments, and track orders, with an admin dashboard to manage inventory and sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/",
    live_demo:"https://fav-shadcn.netlify.app"
  },
  {
    name: "Paysteriod",
    description:
      "A powerful payroll management platform replicate that helps businesses handle employee salaries, track pay periods, generate payslips, and automate salary calculations effortlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paysteriod,
    source_code_link: "https://github.com/Omorinbola25/paysteriod-dashboard.git",
    live_demo: "https://chipper-moonbeam-41c178.netlify.app"
  },
];

export { services, technologies, experiences, testimonials, projects };
