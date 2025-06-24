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
  name: "Gaurav Jain",
  initials: "GJ",
  url: "https://gauravjain.dev/",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Transforming businesses with AI-driven solutions and lightning-fast web experiences. From AI integrations to enterprise-scale platforms, I build what converts and scales 🚀",
  summary:
    "Since **2012**, I've evolved from a passionate **software engineer** to an **AI-forward entrepreneur**, staying ahead of the tech curve. I specialize in integrating **cutting-edge AI technologies**: from **LLM-powered applications** to **intelligent automation**, into robust **full-stack solutions**. My expertise spans **modern frameworks**, **cloud architectures**, and **AI/ML implementations** that solve real business problems. Currently **building in public** and helping businesses leverage AI to gain **competitive advantages**. Ready to transform your ideas into intelligent, scalable products that users love and businesses profit from.",
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
    email: "gauravdosi124@gmail.com",
    tel: "+91 8800100101",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/heygauravjain",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/heygauravjain",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heygauravjain",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@heygauravjain",
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
      "company": "HCL Technologies",
      "badges": [],
      "href": "https://www.hcltech.com",
      "location": "India",
      "title": "Software Engineer",
      "logoUrl": "/hcl.png",
      "start": "Jan 2018",
      "end": "Mar 2019",
      "highlights": [
        "Prepared Product Requirement Documents (PRD) and System Design Documents (SDD) in collaboration with clients and secured necessary sign-offs.",
        "Led the architecture design and end-to-end development of scalable solutions.",
        "Designed and developed microservices using Spring Boot, Eureka, Zuul, and Hystrix for a resilient distributed system.",
        "Engaged in direct client interactions for requirement gathering and solution discussion.",
        "Delivered rapid enhancements by handling Change Management Requests (CMRs) and implementing updates efficiently.",
        "Resolved defects across multiple lifecycle phases, ensuring application stability and performance."
      ]
    },
    {
      "company": "Accenture Pvt. Ltd",
      "badges": [],
      "href": "https://www.accenture.com",
      "location": "India",
      "title": "Senior Software Developer",
      "logoUrl": "/accenture.png",
      "start": "May 2015",
      "end": "Dec 2017",
      "highlights": [
        "Led deliverables as a Senior Developer, ensuring timely completion of tasks while guiding the team for effective execution.",
        "Contributed to the coding and development of client/server, object-oriented, and web-based applications.",
        "Acted as the primary point of contact for clients, capturing requirements and providing tailored solutions to meet expectations.",
        "Managed and mentored a team, delivering training sessions on various modules and technologies.",
        "Handled production bug fixes and issues raised by the QA team, ensuring smooth and reliable application performance."
      ]
    },
    {
      "company": "VVDN Technologies",
      "badges": [],
      "href": "https://www.vvdntech.com",
      "location": "India",
      "title": "Senior Software Developer",
      "logoUrl": "/vvdn.jpg",
      "start": "Feb 2014",
      "end": "Mar 2015",
      "highlights": [
        "Owned delivery responsibilities, ensured timelines were met, and guided the team to achieve goals efficiently.",
        "Worked extensively on the coding and development of client/server, object-oriented, and web-based software applications.",
        "Served as the first point of contact for clients, capturing requirements and delivering appropriate technical solutions.",
        "Led and mentored a team, providing hands-on training across multiple modules and technologies.",
        "Resolved production bugs and QA-raised issues to maintain application stability and performance."
      ]
    },
  ],
  education: [
    {
      school: "Vyas Institute of Engineering & Technology (Affiliated to RTU, Kota)",
      href: "https://www.vyasinstitutepnp.org",
      degree: "Bachelor of Technology in Electronics and Communication (B.Tech)",
      logoUrl: "/vyas.jpg",
      start: "2008",
      end: "2012"
    },
    {
      school: "Rajasthan Board of Secondary Education (RBSE)",
      href: "https://rajeduboard.rajasthan.gov.in/",
      degree: "Higher Secondary (12th), Science Stream",
      logoUrl: "/rbse.jpg",
      start: "2006",
      end: "2008"
    },
    {
      school: "Rajasthan Board of Secondary Education (RBSE)",
      href: "https://rajeduboard.rajasthan.gov.in/",
      degree: "Secondary School (10th)",
      logoUrl: "/rbse.jpg",
      start: "2004",
      end: "2006"
    }
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
          href: "https://github.com/heygauravjain/cheatsheets",
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
          href: "https://github.com/heygauravjain/upi.me",
          icon: Icons.github,
        },
      ],
      image: "/upi.me.jpg",
      video: "",
    },
  ],
} as const;
