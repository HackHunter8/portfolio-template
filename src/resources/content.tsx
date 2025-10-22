import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line,  Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "David",
  lastName: "Ukanna",
  name: `David Ukanna`,
  role: "Platform Engineering Consultant",
  avatar: "/images/fct.jpeg",
  email: "realdavidwealth@gmail.com",
  location: "Europe/Dublin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on DevOps, ML, AI and cloud-native engineering</>, // Updated
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HackHunter8",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/david-u-4642662a7/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:realdavidwealth@gmail.com?subject=Portfolio%20Contact",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/fct.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  headline: "Building bridges between DevOps & Machine Learning Systems",
  description: `Portfolio website showcasing my work as a ${person.role}. DevOps and Machine Learning Systems at Scale.`,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-system",
  },
  subline: undefined
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi I'm a Platform Engineer with experience building and maintaining scalable cloud-native applications and systems.
        I have powered everything from ML model deployment to intelligent automation in operation.
        Setting up robust K8s clusters, streamlining ML pipelines and applying AI to improve system reliability across multiple cloud environment.
        If you're looking for someone who understands systems and can bridge the gap between DevOps and ML.... Let's discuss your infrastructure needs!
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Twitch",
        timeframe: "2023 - Present",
        role: "Platform Engineer",
        achievements: [
          <>
            I architected and maintained Kubernetes clusters serving <strong>10,000+ daily active users</strong>,
            achieving 99.9% uptime while reducing deployment time by 40% through GitOps automation.
          </>,
          <>
            I designed and implemented an end-to-end ML pipeline that automated model deployment,
            reducing data scientist deployment time from <strong>2 days to 30 minutes</strong>—a 96% improvement.
          </>,
          <>
            I led the integration of AI-powered monitoring and alerting systems,
            enabling the team to detect and resolve incidents <strong>50% faster</strong> and reducing MTTR by 35%.
          </>,
        ],
        images: [],
      },
      {
        company: "Mace",
        timeframe: "2020 - 2022",
        role: "DevOps Engineer",
        achievements: [
          <>
            I pioneered Infrastructure as Code adoption across 15+ microservices,
            cutting infrastructure provisioning time by <strong>60%</strong> and eliminating configuration drift.
          </>,
          <>
            I re-engineered CI/CD pipelines using Jenkins and GitHub Actions,
            reducing deployment time by <strong>35%</strong> while improving system reliability by 25%.
          </>,
          <>
            I collaborated with product and engineering teams to launch new platform features,
            contributing to a <strong>15% increase in company revenue</strong> through improved delivery velocity.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Kubernetes & Container Orchestration",
        description: (
          <>I architect and operate production Kubernetes environments built for scale and resilience. 
          My clusters are designed with HA topologies, dynamic autoscaling policies, and tested disaster recovery runbooks that guarantee uptime when it matters.</>
        ),
        tags: [
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "Helm", icon: "helm" },
        ],
        images: [],
      },
      {
        title: "Cloud Infrastructure & IaC",
        description: (
          <>I provision and manage multi-cloud infrastructure entirely through code. Terraform and CloudFormation are my default. 
           This approach has consistently cut deployment cycles by 60%+ while eliminating configuration drift and manual errors.</>
        ),
        tags: [
          { name: "Terraform", icon: "terraform" },
          { name: "AWS", icon: "aws" },
          { name: "Azure", icon: "azure" },
        ],
        images: [],
      },
      {
        title: "ML Operations & CI/CD",
        description: (
          <>I build end-to-end CI/CD pipelines that take ML models from development to production with automated testing, deployment, and monitoring. 
          My pipelines bridge the gap between data science experimentation and production reliability.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "GitHub Actions", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Monitoring & Observability",
        description: (
          <>I design observability stacks using Prometheus, Grafana, and ELK that provide real-time visibility into system health. 
          My monitoring setups don't just alert,  they enable root cause analysis and sub-15-minute incident response.</>
        ),
        tags: [
          { name: "Prometheus", icon: "prometheus" },
          { name: "Grafana", icon: "grafana" },
          { name: "ELK Stack", icon: "elastic" },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "",
    institutions: []
  }
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on DevOps & ML Infrastructure", // Updated
  description: `Technical deep-dives and lessons learned from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
