import {
  Cloud,
  Code,
  Database,
  HomeIcon,
  NotebookIcon,
  Settings,
} from "lucide-react";
import { DiVisualstudio } from "react-icons/di";
import { FaAws, FaRobot } from "react-icons/fa";
import {
  SiAmazondynamodb,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSharp,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { Icons } from "@/components/icons";
import type { ResumeData } from "@/types";

export const DATA: ResumeData = {
  name: "Deepak Jangra",
  initials: "DJ",
  url: "https://www.deepakjangra.com",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Transforming businesses with AI-driven solutions and lightning-fast web experiences. From AI integrations to enterprise-scale platforms, I build what converts and scales 🚀",
  summary:
    "Since **2016**, I've evolved from a passionate **software engineer** to an **AI-forward entrepreneur**, staying ahead of the tech curve. I specialize in integrating **cutting-edge AI technologies**: from **LLM-powered applications** to **intelligent automation**, into robust **full-stack solutions**. My expertise spans **modern frameworks**, **cloud architectures**, and **AI/ML implementations** that solve real business problems. Currently **building in public** and helping businesses leverage AI to gain **competitive advantages**. Ready to transform your ideas into intelligent, scalable products that users love and businesses profit from.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      category: "Languages",
      items: [
        { title: "C#", icon: SiSharp },
        { title: "JavaScript", icon: SiJavascript },
        { title: "TypeScript", icon: SiTypescript },
        { title: "Python", icon: SiPython },
        { title: "Go", icon: SiGo },
      ],
    },
    {
      category: "Backend",
      items: [
        { title: ".NET Core", icon: SiDotnet },
        { title: "Node.js", icon: SiNodedotjs },
        { title: "Nest.js", icon: SiNestjs },
        { title: "ORMs", icon: SiDrizzle },
        { title: "gRPC", icon: Code },
        { title: "SignalR", icon: Code },
        { title: "Web Sockets", icon: SiSocketdotio },
        { title: "OpenAPI", icon: SiSwagger },
      ],
    },
    {
      category: "Frontend",
      items: [
        { title: "Angular", icon: SiAngular },
        { title: "Next.js", icon: SiNextdotjs },
        { title: "React", icon: SiReact },
        { title: "HTML", icon: SiHtml5 },
        { title: "CSS", icon: SiCss3 },
        { title: "Bootstrap", icon: SiBootstrap },
        { title: "TailwindCSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "Databases",
      items: [
        { title: "SQL Server", icon: Database },
        { title: "MySQL", icon: SiMysql },
        { title: "Postgres", icon: SiPostgresql },
        { title: "DynamoDB", icon: SiAmazondynamodb },
        { title: "CosmosDB", icon: Database },
        { title: "Redis", icon: SiRedis },
      ],
    },
    {
      category: "Tools",
      items: [
        { title: "Git", icon: SiGit },
        { title: "Monorepos", icon: Code },
        { title: "GitHub", icon: SiGithub },
        { title: "Azure DevOps", icon: VscAzureDevops },
        { title: "Visual Studio", icon: DiVisualstudio },
        { title: "VS Code", icon: TbBrandVisualStudio },
        { title: "Docker", icon: SiDocker },
        { title: "Terraform", icon: SiTerraform },
      ],
    },
    {
      category: "Clouds",
      items: [
        { title: "AWS", icon: FaAws },
        { title: "Azure", icon: VscAzure },
        { title: "GCP", icon: SiGooglecloud },
      ],
    },
    {
      category: "AI",
      items: [
        { title: "AI Integration", icon: SiOpenai },
        { title: "AI Agents", icon: FaRobot },
      ],
    },
    {
      category: "Standards",
      items: [
        { title: "Design Patterns", icon: Settings },
        { title: "Serverless Architecture", icon: Cloud },
        { title: "Clean Architecture", icon: Code },
        { title: "Microservices", icon: Settings },
        { title: "Event Driven Architecture", icon: Settings },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blogs" },
  ],
  contact: {
    email: "heydeepakjangra@gmail.com",
    tel: "+91 9992204407",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/heydeepakjangra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/heydeepakjangra",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heydeepakjangra",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@heydeepakjangra",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Nagarro",
      href: "https://nagarro.com",
      badges: [],
      location: "Remote",
      title: "Staff Engineer",
      logoUrl: "/nagarro.jpg",
      start: "Aug 2019",
      end: "Present",
      highlights: [
        "Architected and developed several enterprise level products from the ground up, leveraging cloud-native services to ensure high availability, scalability, and maintainability.",
        "Leveraged serverless, event driven and microservices architectures on both AWS and Azure, optimizing cost, resource utilization and enhancing scalability.",
        "Successfully migrated multiple products from on-premises to the cloud, achieving cost efficiency, scalability, and enhanced security.",
        "Created both high-level and low-level designs for system architectures, with a strong focus on comprehensive documentation to facilitate onboarding for new team members.",
        "Led and architected an online medical equipment training solution for hospitals and individual healthcare practitioners which reduced turnaround time by 75% (weeks to days) and 400% increase in revenue for the organization.",
        "Enhanced system performance by meticulously identifying and eliminating bottlenecks, leveraging caching mechanisms, optimizing database queries, and fine-tuning resource allocation.",
        "Mentored and led a cross-functional team of 10 developers, ensuring successful collaboration and efficient project delivery.",
        "Developed a JSON to SQL query builder integrated with a PostgreSQL database, facilitating the generation of user defined graphical and tabular widgets.",
        "Developed a robust and scalable notification system platform utilized across multiple products within the organization.",
      ],
    },
    {
      company: "Moodys Analytics",
      badges: [],
      href: "https://www.moodys.com",
      location: "Gurugram, India",
      title: "Software Engineer",
      logoUrl: "/moodys.jpg",
      start: "Jun 2019",
      end: "Aug 2019",
      highlights: [
        "Designed and implemented a centralized logging system across multiple microservices using the Elasticsearch, Fluentd, and Kibana (EFK) stack, enabling comprehensive log aggregation, real-time monitoring, and enhanced debugging capabilities.",
      ],
    },
    {
      company: "TBO",
      href: "https://tbo.com",
      badges: [],
      location: "Gurugram, India",
      title: "Software Engineer",
      logoUrl: "/tbo.jpg",
      start: "Mar 2018",
      end: "Jun 2019",
      highlights: [
        "Initiated the adoption of the latest .NET Core framework for developing a trip management software, successfully delivered the organization's first product built with .NET Core.",
        "Led a team of 3 junior backend developers, ensuring seamless collaboration and efficient development processes.",
        "Designed and developed a comprehensive dashboard application for monitoring logs, API performance, error alerts, and API key management, enhancing operational efficiency and monitoring capabilities.",
        "Developed a comprehensive mobile notifications system for Android and iOS, providing real-time updates on flight details such as web check-in, flight delays, gate changes, terminal information, and cancellations.",
        "Collaborated with cross-functional teams, including mobile app, web app, and third-party API consumers.",
        "Documented API endpoints using OpenAPI (formerly Swagger) and versioned APIs to ensure backward compatibility, facilitating seamless integration of backend services.",
      ],  
    },
    {
      company: "Aegis Ltd",
      href: "https://www.startek.com",
      badges: [],
      location: "Gurugram, India",
      title: "Software Engineer",
      logoUrl: "/aegis.jpg",
      start: "Sep 2016",
      end: "Mar 2018",
      highlights: [
        "Led the migration of several modules from ASP.NET Web Forms to ASP.NET Web API2 and Angular.",
        "Took ownership of improving our unit test coverage to meet industry standards.",
        "Collaborated with a team of 10 members to achieve project milestones and deliver high-quality results.",
        "Engaged in collaborative backend design discussions and contributed to the documentation process.",
      ],
    },
  ],
  education: [
    {
      school: "D.C.R.U.S.T Murthal",
      href: "https://dcrustm.ac.in",
      degree: "Bachelor's of Technology in Computer Science (B.Tech)",
      logoUrl: "/dcrust.png",
      start: "2012",
      end: "2016",
    },
    {
      school: "Hindu Vidyapeeth Sonipat",
      href: "https://hvpsonepat.edu.in/",
      degree: "Higher Secondary (12th)",
      logoUrl: "/hvp.png",
      start: "2009",
      end: "2011",
    },
  ],
  projects: [
    {
      title: "Software Engineering Cheatsheets",
      href: "https://cheatsheets.deepakjangra.com",
      dates: "Jun 2025",
      status: "active",
      description:
        "Master essential tools and technologies with our comprehensive cheatsheets. From Git commands to Docker containers, find everything you need in one place.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Fumadocs",
        "MDX",
      ],
      links: [
        {
          type: "Website",
          href: "https://cheatsheets.deepakjangra.com",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/heydeepakjangra/cheatsheets",
          icon: Icons.github,
        },
      ],
      image: "/cheatsheets.png",
      video: "",
    },
    {
      title: "UPI Payment Link Generator",
      href: "https://upi.me",
      dates: "Jan 2024",
      status: "active",
      description:
        "UPI Payment Link Generator is a tool that allows you to create a payment link for UPI payments. You can create a payment link for any UPI app like Google Pay, PhonePe, Paytm, etc. and share it with your customers to receive payments.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://upi.me",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/heydeepakjangra/upi.me",
          icon: Icons.github,
        },
      ],
      image: "/upi.me.jpg",
      video: "",
    },
  ],
} as const;
