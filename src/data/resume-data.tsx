import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Microsoft,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sami Ait Ouahmane",
  initials: "SAO",
  location: "Seattle, USA, PST",
  locationLink: "https://www.google.com/maps/place/Seattle",
  about:
    "Backend Engineer who loves solving problems with a focus on Security and LLMs",
  summary:
    "As a Junior Software Engineer, I have successfully created services that make it easier to detect malicious activity and prevent threat actors from accessing customer data.",
  avatarUrl: "https://avatars.githubusercontent.com/samiad2788",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "samiad2788 at gmail dot com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/samiad2788",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sami-ait-ouahmane-762655145/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "McGill University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Microsoft",
      link: "https://microsoft.com",
      badges: ["Remote"],
      title: "Junior Software Developer",
      logo: Microsoft,
      start: "July 2023",
      end: "",
      description:
        "Implemented a plugin in Security Copilot containing several skills allowing security researchers to detect anomalies, subsample, and find similarities in log data. Technologies: PyTorch, Python, C#, KQL",
    },
  ],
  skills: [
    "Python",
    "Java",
    "C#",
    "KQL",
    "GPU Optimization",
    "Azure Cloud",
    "Huggingface Transformers",
  ],
  projects: [
    {
      title: "Capstone Project: Building Mini-Blockchain System",
      techStack: [
        "School Project",
        "Rust",
        "UDP/TCP protocols",
        "Asymmetric encryption",
        "OOP",
      ],
      description: "A simplified, scalable blockchain system built from scratch",
      logo: ConsultlyLogo,
      link: {
        label: "Blockchain Capstone",
        href: "https://github.com/aaronmills0/blockchain-capstone",
      },
    },
  ],
} as const;
