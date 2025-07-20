import { Icons } from "@/components/icons";

import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "10May",
  about:
    "Full-stack developer who builds and ships products at lightning speed. Known for completing complex apps in days. Currently focused on Web3 and AI technology.",
  location: "Toronto, ON",
  website: "https://tanmay.xyz",
  url: "https://tanmay.xyz",
  description: "Software Engineer. I love building things and helping people.",
  summary:
    "Full-stack developer who builds and ships products at lightning speed. Known for completing complex apps in days. Currently focused on Web3 and AI technology.",
  avatarUrl:
    "https://i.pinimg.com/736x/fb/4a/9b/fb4a9bf8f08402caaaf3d416e3f55688.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "WordPress",
    "Shopify",
    "Docker",
    "MySQL",
    "Firebase",
    "Shadcn/UI",
    "Postman",
    "PHP",
    "Redux",
    "React Router",
    "React Query",
    "Appwrite",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-kumar-soni-6811a0233",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/babyo77",
        icon: Icons.globe,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/tanmay7_",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/tanm3y_",
        icon: Icons.globe,
        navbar: true,
      },
      NPM: {
        name: "NPM",
        url: "https://www.npmjs.com/~babyo77",
        icon: Icons.globe,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/tanmay11117/",
        icon: Icons.globe,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "discord://users/497085547970560021",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Hire Roger",
      href: "https://hireroger.com",
      badges: [""],
      location: "San Francisco Bay Area",
      title: "Software Engineer",
      logoUrl:
        "https://bookface-images.s3.amazonaws.com/small_logos/ed7adf2496c4443a8cb1ccf4a4aba4e346b8d33c.png",
      start: "January 2025",
      end: "Present",
      description:
        "Developing LinkedIn automation, onboarding system, and creating lead finder tools.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Puppeteer",
        "AWS",
      ],
    },
    {
      company: "CardLift",
      href: "https://withcardlift.com",
      badges: [""],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1817256992517259264/Cirq4Pag_400x400.jpg",
      start: "December 2024",
      end: "Present",
      description: "Working as a Software Engineer at CardLift",
    },
    {
      company: "IAS Sathi",
      href: "https://iassathi.com/",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl:
        "https://play-lh.googleusercontent.com/hXkgGiyJD_xP55IgqhuAYxxGKe5THXQe0XGf6QVi-XEo_aYWlY7aJ5jGFZCxAfa62WPL=w600-h300-pc0xffffff-pd",
      start: "June 2024",
      end: "December 2024",
      badges: [""],
      description: "Built and deployed the complete web application.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
      ],
    },
  ],
  education: [
    {
      school: "Army Public School (APS)",
      href: "#",
      degree: "High School",
      logoUrl:
        "https://www.careerpower.in/blog/wp-content/uploads/2024/10/31160546/AWES-Admit-Card-2024.webp",
      start: "2016",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Text-in-between",
      href: "https://thumbnail.tanmay.xyz",
      dates: "",
      active: true,
      description: "Create text-in-between thumbnail",
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://thumbnail.tanmay.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/babyo77/Text-Thumbnail",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/text-in-between.png",
      video: "",
    },

    {
      title: "PayCrypt",
      href: "https://paycrypt.tech/",
      dates: "",
      active: true,
      description: "Payment rails for the new internet",
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "Blockchain"],
      links: [
        {
          type: "Website",
          href: "https://paycrypt.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/babyo77/paycrypt-landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/paycrypt.png",
      video: "",
    },
    {
      title: "Vibe",
      href: "https://vibe-drx.vercel.app",
      dates: "",
      active: true,
      description: "An app to Jam together (ad-free music)",
      technologies: [
        "Next.js",
        "Socket.io",
        "MongoDB",
        "Node.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://vibe-drx.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/babyo77/vibe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vibe.png",
      video: "",
    },
    {
      title: "Ship",
      href: "https://ship-file.vercel.app/",
      dates: "",
      active: true,
      description: "An app for seamless file transfers over Wi-Fi",
      technologies: ["Electron", "Node.js", "React", "TypeScript", "Socket.io"],
      links: [
        {
          type: "Website",
          href: "https://ship-file.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/babyo77/ship",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ship.png",
      video: "",
    },
    {
      title: "Hmm-api",
      href: "https://hmm-api.vercel.app",
      dates: "",
      active: true,
      description: "Package for handling api error",
      technologies: ["TypeScript", "Node.js", "Express.js", "NPM Package"],
      links: [
        {
          type: "Website",
          href: "https://hmm-api.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/babyo77/hmm-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hmm-api.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
