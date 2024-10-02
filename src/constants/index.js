import * as Assets from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Ping Me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: Assets.web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: Assets.mobile,
  // },
  {
    title: "Backend Developer",
    icon: Assets.backend,
  },
  {
    title: "Cybersecurity Analyst",
    icon: Assets.creator,
  },
];

const technologies = [

  // {
  //   name: "HTML 5",
  //   icon: Assets.html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: Assets.css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: Assets.javascript,
  // },
  {
    name: "React JS",
    icon: Assets.reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: Assets.tailwind,
  },
  {
    name: "git",
    icon: Assets.git,
  },
  // Cybersecurity technologies
  {
    name: "Windows Security",
    icon: Assets.windowsSecurity,
  },
  // {
  //   name: "Kali Linux",
  //   icon: Assets.kaliLinux,
  // },
  {
    name: "Cybersecurity Tools",
    icon: Assets.cybersecurityTools,
  },
  {
    name: "Base Scripting",
    icon: Assets.scripting,
  },
  {
    name: "Python",
    icon: Assets.python,
  },
  // {
  //   name: "Nmap",
  //   icon: Assets.nmap,
  // },
  // {
  //   name: "Wireshark",
  //   icon: Assets.wireshark,
  // },
  // {
  //   name: "Metasploit",
  //   icon: Assets.metasploit,
  // },
  // {
  //   name: "Burp Suite",
  //   icon: Assets.burpSuite,
  // },
];

const experiences = [
  {
    title: "Full-Stack Web Developer & Cybersecurity Enthusiast",
    subtitle: "Self-Taught | 2020 - Present",
    type: "web",
    points: [
      "Developed and launched practical, real-world web applications, actively used by diverse users.",
      "Expertise in React.js, Tailwind CSS for responsive design, and backend integration with Firebase and SQL databases.",
      "Created user-friendly projects that gained recognition for their simplicity, efficiency, and real-world relevance.",
      "Built custom cybersecurity tools for network scanning and analysis, enhancing online security measures.",
      "Continuously learning and contributing to open-source projects, with a growing focus on cybersecurity advancements."
    ]
  },
  {
    title: "Cybersecurity Tool Developer",
    subtitle: "Independent Projects | 2022 - Present",
    type: "security",
    points: [
      "Designed advanced tools for threat detection and vulnerability analysis using multiple technologies.",
      "Automated network scanning and data analysis processes to significantly reduce response times.",
      "Engaged with online security communities to share knowledge, improve tools, and promote security best practices.",
      "Developed secure, real-world applications, recognized for their robustness and practical utility by users and peers.",
      "Created a cybersecurity learning website where users can easily learn from basic to advanced concepts, making cybersecurity accessible to all."
    ]
  }
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

const cyberProjects = [
  {
    name: "Custom CLI Tool",
    description:
      "A command-line interface (CLI) tool developed for various utility tasks, showcasing my ability to create efficient and user- friendly CLI applications.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: Assets.cli,
    source_code_link: "https://github.com/Kushal129/",
  },
  {
    name: "Python Projects",
    description:
      "A collection of Python projects demonstrating various functionalities and applications, from automation scripts to data analysis.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: Assets.pythonP,
    source_code_link: "https://github.com/Kushal129/",
  },
  {
    name: "Phishing Email Detection System",
    description:
      "A System designed to detect phishing emails. It analyzes email content, checks for suspicious URLs, and identifies phishing indicators using Datas. This project also includes an online teaser for advanced scanning capabilities, allowing users to test the system's efficiency in real-time.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.peds,
    source_code_link: "https://github.com/Kushal129/Phishing_Email_Detection_System",
  },

];

const projects = [
  {
    name: "Barcode Generator",
    description:
      "A robust barcode generator website built with React.js and Tailwind CSS that can generate over 100 unique barcodes in a single batch. Designed for efficiency and user-friendliness, this tool addresses limitations of existing options and provides a reliable solution for bulk barcode generation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.barcode,
    source_code_link: "https://github.com/",
    live_preview_link: "https://barcodegeneratorkhp.netlify.app/"
  },
  {
    name: "Bus Pass Management System",
    description:
      "A comprehensive PHP application for managing bus passes, featuring effortless online pass generation, user-friendly and responsive design, and secure online payments. The system streamlines pass issuance, minimizes errors, and provides 24/7 accessibility. It enhances efficiency for authorities by simplifying pass generation and reducing manual errors.",
    tags: [
      {
        name: "PHP",
        color: "purple-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.bpms,
    source_code_link: "https://github.com/Kushal129/Bus-Pass-Management-System",
  },
  {
    name: "Auction Management System",
    description:
      "Developed with ASP.NET and C#, this Auction Management System provides a comprehensive platform for organizing and managing auctions. Key features include secure user authentication, auction creation with detailed settings, a real-time bidding system, an admin dashboard for managing auctions and viewing bidding history, and reporting tools for generating comprehensive auction outcomes and participant activity reports.",
    tags: [
      {
        name: "ASP.Net",
        color: "purple-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.ams,
    source_code_link: "https://github.com/Kushal129/Auction_Management_System/",
  },
  {
    name: "Perfume Store",
    description:
      "A modern and responsive e-commerce site for perfumes built with ReactJS and Tailwind CSS, offering a sleek user experience and seamless navigation.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.perfume,
    source_code_link: "https://github.com/Kushal129/PerfumeStoreFrontend",
    live_preview_link: "https://examplehkperfumestore.netlify.app/"
  },
  {
    name: "Smart Learning with KHP",
    description:
      "A ReactJS and Tailwind CSS-based site focused on cybersecurity learning, providing an interactive platform for users to enhance their skills and knowledge.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: Assets.slwkhp,
    source_code_link: "https://github.com/Kushal129/SmartLearningWithKHP",
    live_preview_link: "https://smartlearningwithkhp.netlify.app/"
  },

];


export { services, technologies, experiences, testimonials, projects, cyberProjects };