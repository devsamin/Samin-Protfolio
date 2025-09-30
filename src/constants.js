// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import DSAlogo from './assets/tech_logo/DSA.png'
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import djangologo from './assets/tech_logo/Django.png'
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import onrender from './assets/tech_logo/onrender.png'
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import E1logo from './assets/company_logo/CP_logo.jpg';
import E2logo from './assets/company_logo/DSA.jpg';
import E3logo from './assets/company_logo/coding.png';

// Education Section Logo's
import BSPILogo from './assets/education_logo/collage_logo.jpeg'
// import sat_col_logo from './assets/education_logo/satkania_collage.png';
import satkania_sch_logo from './assets/education_logo/satkania_school.jpg';

// Project Section Logo's
import dragonNewsLogo from './assets/work_logo/dragon.png';
import Task_management from './assets/work_logo/task_management.png';
import library_management_logo from './assets/work_logo/library_management.png';
import trust_bank from './assets/work_logo/trast_bank.png';
import Car_Shop from './assets/work_logo/Car_Shop.png';
import Food_Search from './assets/work_logo/Food Search.png';
import Find_Job from './assets/work_logo/find_job.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: djangologo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'DSA', logo: DSAlogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: onrender },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
    id: 0,
    img: E1logo,
    role: "Problem Solving Guide",
    company: "Self-Driven",
    date: "January 2024 - Present",
    desc: "Guiding learners through problem solving and algorithmic thinking. Providing advice and support whenever they face challenges, helping improve their coding skills and logical reasoning.",
    skills: [
      "Problem Solving",
      "Algorithms",
      "Data Structures",
      "Debugging",
      "Python",
      "C++",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: E2logo,
    role: "Programming Advisor",
    company: "Self-Driven",
    date: "March 2023 - Present",
    desc: "Advising beginners on how to start and progress in programming. Offering tips on learning resources, project building, and overcoming common challenges in the coding journey.",
    skills: [
      "Programming Guidance",
      "Mentorship",
      "Learning Strategies",
      "Project-Based Learning",
    ],
  },
  {
    id: 2,
    img: E1logo,
    role: "DSA Supporter",
    company: "Self-Driven",
    date: "June 2023 - Present",
    desc: "Supporting learners in understanding Data Structures and Algorithms by answering questions and clarifying concepts as they prepare for coding interviews and contests.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Coding Interview Preparation",
      "Problem Solving",
    ],
  },
  {
    id: 3,
    img: E3logo, // you can add logo here if you want
    role: "Programming Journey Advisor",
    company: "Journey Batch",
    date: "Ongoing",
    desc: "Helping new programmers navigate their learning path by sharing advice on selecting languages, practicing coding, and building projects to gain practical experience.",
    skills: [
      "Mentorship",
      "Programming Basics",
      "Learning Resources",
      "Motivation",
    ],
  },
  ];
  
export const education = [
  {
    id: 0,
    img: BSPILogo,
    school: "Bangladesh Sweden Polytechnic Institute",
    date: "2022 - 2025",
    grade: "Currently 7th Semester",
    degree: "Diploma in Computer Science and Engineering",
    desc: "Currently enrolled in the Diploma in Computer Science and Engineering program, gaining hands-on experience in programming, data structures, algorithms, database management, and software development. Actively working on projects to strengthen practical skills and prepare for a career in software engineering.",
  },
  {
    id: 1,
    img: satkania_sch_logo,
    school: "Satkania Model High School",
    date: "2021 - 2022",
    grade: "Secondary School Certificate (SSC), GPA: 4.61",
    degree: "Vocational (GM)",
    desc: "Completed Secondary School Certificate with a GPA of 4.61, focusing on Science subjects. Developed essential academic and analytical skills during this period that laid the groundwork for higher education.",
  },
  {
    id: 2,
    img: satkania_sch_logo,
    school: "Satkania Model High School",
    date: "2021 - 2022",
    grade: "Secondary School Certificate (SSC), GPA: 4.61",
    degree: "Vocational (GM)",
    desc: "Completed Secondary School Certificate with a GPA of 4.61, focusing on Science subjects. Developed essential academic and analytical skills during this period that laid the groundwork for higher education.",
  },
];
  
  export const projects = [
    {
    id: 0,
    title: "Find Job",
    description:
      "A job search platform with a Django REST Framework backend providing APIs and a frontend built with raw JavaScript, CSS, and HTML. Users can search and explore job listings efficiently through a clean, responsive interface.",
    image: Find_Job,
    tags: ["Django REST Framework", "API", "Raw JavaScript", "CSS", "HTML"],
    github: "https://github.com/devsamin/Find-Job-Backend-Code",
    webapp: "https://find-job-lyart.vercel.app/",
    },
    {
      id: 2,
      title: "Trust Bank",
      description:
        "A full-featured bank management system built with Django. It offers secure account creation, transaction management, balance tracking, and user authentication to ensure smooth and reliable banking operations.",
      image: trust_bank,
      tags: ["Django", "Banking System", "Account Management", "Transaction Management"],
      github: "https://github.com/devsamin/Bank-Management",
      webapp: "https://trust-bank.onrender.com/",
    },
{
  id: 1,
  title: "Dragon News Project",
  description:
    "A modern and fully responsive news portal built with React.js, styled using Tailwind CSS and DaisyUI. The application integrates Firebase Authentication for secure user login and registration, ensuring a smooth authentication flow. It delivers categorized news content with a clean, user-friendly interface, making it easy for readers to explore and engage with the latest updates.",
  image: dragonNewsLogo, // replace with your actual logo import
  tags: ["React JS", "Tailwind CSS", "DaisyUI", "Firebase Auth"],
  github: "https://github.com/devsamin/Dragon-News",
  webapp: "https://dragon-news-17140.web.app/",
},
    {
    id: 4,
    title: "Library Management System",
    description:
      "A Django-based web application for managing library operations, including book inventory, member registration, book issuance, and return tracking. Designed for efficiency and ease of use in library environments.",
    image: library_management_logo,
    tags: ["Django", "Library System", "Book Management", "User Authentication"],
    github: "https://github.com/devsamin/Library-Management-System",
    webapp: "https://library-management-system-1-pmcs.onrender.com/",
  },
  {
  id: 5,
  title: "Car Shop",
  description:
    "A Django-based car sales management system that allows users to browse available cars, view detailed specifications, and manage sales operations efficiently. Includes admin panel for managing car listings and customer inquiries.",
  image: Car_Shop,
  tags: ["Django", "Car Sales", "Inventory Management", "Bootstrap"],
  github: "https://github.com/devsamin/Car-Shop",
  webapp: "https://car-shop-yexv.onrender.com/",
},


{
id: 7,
title: "Task Management",
description:
  "A Django-based task management platform with full CRUD functionality. Users can create, edit, update, and delete tasks (posts), view detailed task stats, and manage profiles. Includes user authentication, admin panel for management, and RESTful APIs for integration.",
image: Task_management,
tags: ["Django", "CRUD", "User Authentication", "REST API", "Task Management"],
github: "https://github.com/devsamin/Task-Management",
webapp: "https://task-management-co20.onrender.com/",
},
    {
    id: 6,
    title: "Food Search",
    description:
      "A simple and interactive web application for searching food recipes using an external API. Built with HTML, CSS, Bootstrap, and JavaScript, it provides a clean UI and real-time search functionality.",
    image: Food_Search,
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    github: "https://github.com/devsamin/Food-Search",
    webapp: "https://devsamin.github.io/Food-Search/",
  },
];  