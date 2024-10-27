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
    carrent,
    jobit,
    tripguide,
    threejs,
    pickle,
    kent,
    ppf,
    hdk,
    php,
    devsite
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
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    // {
    //   title: "Buys Pickles for GF",
    //   icon: pickle,
    // },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "php",
      icon: php,
    },
    ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Kent University",
      icon: kent,
      iconBg: "#FFFFFF",
      date: "January 2021 - April 2021",
      points: [
        "My first tech role following graduating Makers Academy",
        "Desgined and developed a Web Application for an online conference.",
        "Developed in Ruby, Rails HTML and Bootstrap.",
        "Acted as the primary point of contact and support during the conference.",
        "Debugged and troubleshooted issues for presenters and attendees."
      ],
    },
    {
      title: "Apprentice Software Developer",
      company_name: "Pension Protection Fund",
      icon: ppf,
      iconBg: "#FFFFFF",
      date: "May 2021 - December 2022",
      points: [
        "Tech stack includes HTML, CSS/SASS, JavaScript and C#.",
        "Acted as third line support for contact centre.",
        "Performed updates and bug fixes on multiple sites.",
        "Ensured all sites were up to WCAG 2.1 standards.",
        "Assisted SQL Developers with technical support.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "HdK",
      icon: hdk,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Ongoing",
      points: [
        "Developed and maintained custom WordPress themes and plugins using PHP, enhancing website functionality and user experience.",
        "Implemented responsive and dynamic web designs, ensuring compatibility across various devices and browsers.",
        "Optimised website performance and speed through efficient PHP coding practices and database management.",
        "Integrated third-party APIs and services into WordPress sites to expand functionality and improve user engagement.",
        "Collaborated with cross-functional teams to gather requirements, troubleshoot issues, and deliver high-quality web solutions on time.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Development Website",
      description:
        "Web-based platform built for prospective employers to see what I can do.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: devsite,
      source_code_link: "https://github.com/LinusMjorn/DevSite",
    },
    {
      name: "Yoga with Rae",
       description:
         "A dynamic website for a North London yoga instructor, featuring an integrated contact form and seamless API integration to display live EventBrite event listings.",
       tags: [
         {
           name: "PHP",
           color: "blue-text-gradient",
         },
         {
           name: "restapi",
           color: "green-text-gradient",
         },
         {
           name: "scss",
           color: "pink-text-gradient",
         },
       ],
       image: jobit,
       source_code_link: "https://github.com/LinusMjorn/YogaWithRae",
     },
    {
       name: "Notes App",
       description:
         "A notes app that utilizes the useState hook to manage note content dynamically, allowing users to add, edit, and delete notes.",
       tags: [
         {
           name: "React",
           color: "blue-text-gradient",
         },
         {
           name: "CSS",
           color: "green-text-gradient",
         },
         {
           name: "HTML",
           color: "pink-text-gradient",
         },
       ],
       image: tripguide,
       source_code_link: "https://github.com/LinusMjorn/NotesApp",
     },
  ];
  
  export { services, technologies, experiences, testimonials, projects };