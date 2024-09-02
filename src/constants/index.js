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
  barcode,
  bpms,
  ams,
  cli,
  slwkhp,
  pythonP,
  perfume,
  windowsSecurity,
  kaliLinux,
  kaliLinuxw,
  cybersecurityTools,
  scripting,
  python,
  nmap,
  wireshark,
  metasploit,
  burpSuite,

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity Analyst",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  // Cybersecurity technologies
  {
    name: "Windows Security",
    icon: windowsSecurity,
  },
  {
    name: "Kali Linux",
    icon: kaliLinuxw,
  },
  {
    name: "Cybersecurity Tools",
    icon: cybersecurityTools,
  },
  {
    name: "Base Scripting",
    icon: scripting,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "Burp Suite",
    icon: burpSuite,
  },
];


const experiences = [
  {
    title: "PHP Developer",
    company_name: "Tech Innovators Ltd.",
    icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/64dc6a8abb8fcb6fa88fc404/0x0.png",
    iconBg: "#ffff",
    date: "March 2021 - August 2022",
    points: [
      "Developed and maintained dynamic web applications using PHP and MySQL.",
      "Integrated third-party APIs to enhance application functionality.",
      "Optimized application performance and conducted code reviews.",
      "Collaborated with frontend developers to ensure seamless integration of user-facing elements."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Creative Solutions",
    icon: "https://s.tmimgcdn.com/scr/1200x750/288200/creative-solutions-logo-template_288281-original.jpg",
    iconBg: "#e8e8e8",
    date: "September 2022 - 2024",
    points: [
      "Designed and developed both frontend and backend features using React.js.",
      "Implemented RESTful APIs and integrated them with various client-side applications.",
      "Ensured high performance and responsiveness of applications across different devices and platforms.",
      "Led a team of junior developers and participated in agile development processes."
    ]
  },
  {
    title: "Cybersecurity Analyst",
    company_name: "Fortify Security Group",
    icon: "https://expertinsights.com/insights/wp-content/uploads/2023/10/Group-151.png",
    iconBg: "#ffff",
    date: "March 2024 - Present",
    points: [
      "Conducted security assessments and vulnerability scans to identify potential threats.",
      "Developed and implemented security policies and procedures to safeguard sensitive information.",
      "Monitored network traffic and analyzed security incidents to prevent breaches.",
      "Collaborated with IT teams to ensure compliance with industry standards and regulations."
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
    image: barcode,
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
    image: bpms,
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
    image: ams,
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
    image: perfume,
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
    image: slwkhp,
    source_code_link: "https://github.com/Kushal129/SmartLearningWithKHP",
    live_preview_link: "https://smartlearningwithkhp.netlify.app/"
  },
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
    image: cli,
    source_code_link: "https://github.com/Kushal129/",
  },
  {
    name: "Python Projects",
    description:
      "A collection of Python projects demonstrating various functionalities and applications, from automation scripts to data analysis.",
    tags: [
      {
        name: "Python",
        color: "yellow-blue-text-gradient",
      },
    ],
    image: pythonP,
    source_code_link: "https://github.com/Kushal129/",
  },
];

export { services, technologies, experiences, testimonials, projects };