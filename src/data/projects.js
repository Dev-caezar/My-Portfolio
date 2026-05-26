import bookTrackerLogo from "../assets/image/book-tracker.png";
import zScoutsLogo from "../assets/image/zscouts.png";
import quicklahLogo from "../assets/image/quicklah.png";
import divinusGratiaLogo from "../assets/image/divinusgratia.png";
import arouraLogo from "../assets/image/aruora.png";
import wavePassLogo from "../assets/image/wavepass.png";
import invoiceManagementLogo from "../assets/image/invoice.png";
import taskManagementLogo from "../assets/image/taskify.png";

export const projects = [
  {
    title: "Book Management Tracker",
    description:
      "A thoughtfully designed reading companion that empowers book lovers to track progress, manage libraries, and set reading goals.",
    logo: bookTrackerLogo,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    responsibilities: [
      "Built responsive React components",
      "Integrated book tracking APIs on the frontend",
      "Implemented UI/UX features for tracking progress",
      "Ensured cross-browser compatibility and responsiveness",
    ],
    liveLink: "https://book-management-tracker.vercel.app/",
    githubLink: "https://github.com/Dev-caezar/book-management-tracker",
  },
  {
    title: "Z-Scouts",
    description:
      "A sports networking platform connecting grassroots players, scouts, and professional clubs.",
    logo: zScoutsLogo,
    technologies: ["React Js", "CSS3", "Axios", "Redux"],
    responsibilities: [
      "Developed responsive UI components using React",
      "Managed global state with Redux",
      "Integrated APIs to display player and club information",
      "Optimized user experience and navigation flows",
    ],
    liveLink: "https://z-scoutsf.vercel.app/",
    githubLink: "https://github.com/Dev-caezar/ZScouts",
  },
  {
    title: "Quicklah",
    description:
      "A modern food delivery platform with real-time order tracking and driver management.",
    logo: quicklahLogo,
    technologies: ["React.js", "Tailwind CSS", "Redux", "Axios"],
    responsibilities: [
      "Implemented interactive UI components with React and Tailwind CSS",
      "Managed frontend state using Redux",
      "Integrated real-time order APIs for live tracking",
      "Ensured seamless UX for customers and drivers",
    ],
    liveLink: "https://quicklah.vercel.app/",
    githubLink: "https://github.com/Quicklah/Quicklah",
  },
  {
    title: "DivinusGratia",
    description:
      "A UK-based cleaning service app for booking services, viewing packages, and managing appointments.",
    logo: divinusGratiaLogo,
    technologies: ["React", "Next.js", "Tailwind CSS", "Zustand", "Square API"],
    responsibilities: [
      "Built responsive pages with Next.js and Tailwind CSS",
      "Managed client-side state using Zustand",
      "Integrated Square API for frontend bookings",
      "Ensured clean and maintainable UI components",
    ],
    liveLink: "https://divinusgratia.vercel.app/",
    githubLink: "https://github.com/Dev-caezar/divinusgratia",
  },
  {
    title: "Aroura",
    description:
      "A fashion e-commerce app where users browse products, filter categories, manage carts, and make purchases.",
    logo: arouraLogo,
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    responsibilities: [
      "Developed responsive product and category pages",
      "Implemented client-side state management with Zustand",
      "Optimized UI components for performance",
      "Ensured smooth UX interactions across devices",
    ],
    liveLink: "https://aroura-two.vercel.app/",
    githubLink: "https://github.com/Dev-caezar/aroura",
  },
  {
    title: "WavePass",
    description:
      "An event ticketing platform that enables users to discover events, purchase tickets, and manage event attendance through a seamless digital experience.",
    logo: wavePassLogo,
    technologies: ["React", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    responsibilities: [
      "Developed attendee-facing features for event registration and ticket access",
      "Built responsive and reusable frontend components",
      "Implemented ticket booking and attendee management workflows",
      "Integrated APIs for authentication and ticket verification",
      "Managed global application state with Redux Toolkit and RTK Query",
      "Optimized UI responsiveness and user experience across devices",
    ],
    liveLink: "https://wavepass-frontend.vercel.app/",
    githubLink: "https://github.com/wavepassofficial/wavepass-frontend.git",
  },
  {
    title: "Invoice Management System",
    description:
      "A full-stack invoice and payment management application that helps users create, manage, and track invoices efficiently through a modern dashboard interface.",
    logo: invoiceManagementLogo,
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Context API",
      "Tailwind CSS",
    ],
    responsibilities: [
      "Developed both frontend and backend architecture for the application",
      "Built RESTful APIs for invoice and customer management",
      "Implemented invoice creation, editing, and status tracking features",
      "Designed responsive dashboard interfaces and reusable UI components",
      "Integrated authentication and secure data handling workflows",
      "Managed database operations using MongoDB",
    ],
    liveLink: "https://invoice-menagent.vercel.app",
    githubLink: "https://github.com/Dev-caezar/Invoice-Menagent.git",
  },
  {
    title: "Taskify",
    description:
      "A full-stack productivity application that allows users to organize tasks, manage workflows, and track project progress efficiently.",
    logo: taskManagementLogo,
    technologies: [
      "React/Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
      "Socket.IO",
      "React Query",
      "Tailwind CSS",
    ],
    responsibilities: [
      "Built and maintained both frontend and backend systems",
      "Developed RESTful APIs for task and user management",
      "Implemented task creation, priority, and status tracking features",
      "Managed global state and API caching using Zustand and React Query",
      "Designed responsive and interactive user interfaces",
      "Structured scalable application architecture for maintainability",
    ],
    liveLink: "https://tasklify-ecru.vercel.app",
    githubLink: "https://github.com/Dev-caezar/Tasklify.git",
  },
];
