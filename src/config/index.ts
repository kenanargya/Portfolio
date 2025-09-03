import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ken Anargya Alkausar - Portfolio",
  author: "Ken Anargya Alkausar",
  description:
    "My journey in Informatics Engineering at Institut Teknologi Sepuluh Nopember has ignited a strong interest in the intersection of IT and business. As a recent graduate, I'm eager to embark on a career as an IT especially web development, utilizing my expertise to drive growth and innovation",
  lang: "en",
  siteLogo: "/car.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/ken-anargya-alkausar-22abbb22b/",
    },
    { text: "Github", href: "https://github.com/kenanargya" },
  ],
  socialImage: "/kenlogo.png",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ken Anargya Alkausar",
    specialty: "",
    summary:
      "My journey in Informatics Engineering at Institut Teknologi Sepuluh Nopember has ignited a strong interest in the intersection of IT and business. As a recent graduate, I'm eager to embark on a career as an IT especially web development, utilizing my expertise to drive growth and innovation",
    email: "kenanargyaalkausar2@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/ken-anargya-alkausar-22abbb22b/",
  },
  experience: [
    {
      company: "PLN Unit Induk Distribusi Jawa Timur",
      position: "Full Stack Developer Intern",
      startDate: "Aug 2024",
      endDate: "Mar 2025",
      summary: [
        "Collaborated with a teammate to develop a land asset monitoring web application (Laravel, Google Maps API, Leaflet) for managing 649 assets, improving monitoring efficiency by ~40% compared to Excel tracking.",
        "Led User Acceptance Testing (UAT) and system evaluation, ensuring test cases passed and aligning results with company requirements to enable data-driven decision-making.",
      ],
    },
  ],
  projects: [
    {
      name: "GiziCare",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "https://gizicare-vert.vercel.app/",
      linkSource: "https://github.com/kenanargya/fe-gizicare",
      image: "/gizicare.png",
    },
    {
      name: "PLN Land Asset Monitoring",
      summary:
        "Developed a land asset monitoring web app (Laravel, Google Maps API, Leaflet) to manage 649 PLN assets. Improved monitoring efficiency by ~40% compared to Excel-based tracking.",
      linkPreview: "/",
      linkSource: "https://github.com/adrianismu/kp-aset",
      image: "/plnjatim.jpg",
    },
    {
      name: "SkyAfra",
      summary: "Bangkit capstone: social app integrating an AI waste-classification system. Deployed APIs & ML model on Google Cloud, achieving 93% classification accuracy.",
      linkPreview: "/",
      linkSource: "https://github.com/kenanargya/SkyAfra",
      image: "/skyafra.png",
    },
  ],
  about: {
    description: `
      Hi, Im Ken Anargya Alkausar, an Informatics Engineering student at ITS specializing in web development and cloud computing. I’ve built scalable applications, including a land asset monitoring system at PLN that improved efficiency by ~40%, and cloud-based solutions deployed on Google Cloud. Skilled in Laravel, React, Next.js, and CI/CD, I thrive on solving problems, collaborating in teams, and delivering impactful digital products.
    `,
    image: "/ken.jpg",
  },
};

// #5755ff
