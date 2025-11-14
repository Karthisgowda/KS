/**
 * Portfolio Data Configuration
 *
 * Centralized content management for the portfolio.
 * Update this file to modify portfolio content without touching component code.
 */

export const personalInfo = {
  name: "Karthik S Gowda",
  title: "Designer & Developer",
  tagline: "Creating thoughtful digital experiences through clean design and purposeful code.",
  email: "karthiksgowda28@gmail.com",
  phone: "+91 80508 28798",
  location: "Bangalore, India",
  availability: "Open to Opportunities",
  bio: {
    main: "I'm a designer and developer focused on creating meaningful digital experiences that merge aesthetic clarity with functional precision.",
    secondary: "Currently pursuing BCA with hands-on experience in full-stack development. I specialize in building clean, user-centered applications using modern web technologies and design principles."
  }
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/karthisg",
    handle: "karthisg"
  },
  {
    name: "GitHub",
    url: "https://github.com/Karthisgowda",
    handle: "Karthisgowda"
  },
  {
    name: "Email",
    url: "mailto:karthiksgowda28@gmail.com",
    handle: "karthiksgowda28@gmail.com"
  }
];

export const projects = [
  {
    id: "crowdchoice",
    title: "CrowdChoice",
    category: "Web Application",
    year: "2024",
    description: "A responsive crowdsourced decision-making platform featuring real-time voting, user authentication, and intuitive interface design. Built with a focus on user experience and scalability.",
    technologies: ["React", "Python", "PHP", "REST API"],
    role: "Full Stack Developer",
    highlights: [
      "Real-time voting system with WebSocket integration",
      "Secure user authentication and authorization",
      "Responsive design for all device sizes",
      "RESTful API architecture"
    ],
    links: {
      live: "https://crowdchoice-1-2.onrender.com",
      github: "https://github.com/Karthisgowda/CrowdChoice-1.git"
    },
    featured: true
  },
  {
    id: "chatbot-flow",
    title: "Chatbot Flow",
    category: "AI Application",
    year: "2024",
    description: "An interactive AI chatbot system with seamless conversational flow and dynamic response handling. Features intelligent context management and natural language processing.",
    technologies: ["React", "JavaScript", "Python", "NLP"],
    role: "Frontend & Integration Developer",
    highlights: [
      "Dynamic conversation flow management",
      "Natural language processing integration",
      "Intuitive chat interface",
      "Context-aware responses"
    ],
    links: {
      live: "https://chatbot-flow-jsj6.onrender.com",
      github: null
    },
    featured: true
  }
];

export const skills = {
  core: [
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP"
  ],
  frontend: [
    "React",
    "Vue.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Responsive Design"
  ],
  backend: [
    "Node.js",
    "NestJS",
    "RESTful APIs",
    "GraphQL"
  ],
  database: [
    "MySQL",
    "MongoDB"
  ],
  tools: [
    "Git",
    "VS Code",
    "Figma"
  ]
};

export const experience = [
  {
    id: "salesine-intern",
    role: "Full Stack Developer Intern",
    company: "Salesine Technology Ltd",
    location: "Bangalore",
    period: {
      start: "Dec 2024",
      end: "Mar 2025",
      current: true
    },
    description: "Building full-stack web applications with modern frameworks and implementing scalable solutions.",
    responsibilities: [
      "Built a full-stack web application using NestJS for backend architecture and Vue.js for frontend development",
      "Designed and implemented RESTful APIs following MVC architecture patterns in TypeScript",
      "Developed dynamic, state-managed user interfaces using Vue Router and Vuex",
      "Integrated GraphQL APIs and implemented secure authentication workflows",
      "Successfully deployed production-ready, responsive application to live environment"
    ],
    technologies: ["NestJS", "Vue.js", "TypeScript", "GraphQL", "REST API"]
  }
];

export const education = {
  degree: "Bachelor of Computer Applications",
  institution: "University Name",
  period: "2022 - 2025",
  status: "In Progress"
};

export const seo = {
  title: "Karthik S Gowda - Designer & Developer",
  description: "Full-stack developer and designer creating thoughtful digital experiences. Specializing in React, Vue.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Designer",
    "React Developer",
    "Vue.js Developer",
    "Frontend Developer",
    "Bangalore Developer",
    "UI/UX Designer"
  ],
  ogImage: "/og-image.png"
};
