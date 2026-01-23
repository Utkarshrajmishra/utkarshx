import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/projects';


export const projects: Project[] = [
  {
    title: 'KeyboardWars',
    description:
      'Practice typing, challenge friends, and track improvements with real-time stats in a sleek, minimalist interface.',
    image: '/projects/keyboardwars.png',
    role: 'Full Stack',
    team: "Solo",
    overview: "KeyboardWars is a real-time competitive typing platform designed to help users improve their typing speed and accuracy through interactive challenges and performance analytics. The platform enables live multiplayer typing battles using WebSockets, creating an engaging environment where players can compete and track their words per minute (WPM) in real time. A dynamic leaderboard powered by useSWR ensures rankings stay up to date, while a detailed analytics dashboard visualizes WPM trends, accuracy, and match history to support continuous improvement. Authentication is handled securely via Auth.js, with Supabase used to manage user data, match records, and leaderboard statistics.",
    features: [
      "Typing challenges",
      "Competitive leaderboard",
      "Personalized typing analytics",
      "Customizable typing challenges",
      "Progress tracking",
      "Cross-device synchronization",
      "Leaderboard rankings",
      "Real-time multiplayer functionalit",
    ],
    reason: [
      "To explore and implement real-time design using WebSockets and Socket.io (state sync, WPM tracking, chat)",
    ],
    fontend: [
      "Nextjs : ",
      "TypeScript: Ensuring type safety and better developer experience",
      "Zustand: Lightweight state management with minimal boilerplate",
      "Tailwind CSS + Shadcn UI: For rapid UI development with consistent design",
      "Hot Toast: For elegant notifications and feedback",
      "Rechart: For creating interactive and visually appealing charts",
      "Shadcn: For rapid UI development with consistent design",
    ],
    backend: [

      "Nodejs : Powers the core server infrastructure",
      "Supabase: Handles data persistence with flexible schema",
      "Prisma: Handles database schema and migrations",
      "Auth.js : Manages user authentication and authorization",
      "Socket.io : Enables real-time bi-directional communication",
      "Express.js: Handles API routes and middleware"
    ],
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'MongoDB', icon: <div className='size-7'> <MongoDB key="mongodb" /> </div> },
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
    slug: 'keyboardwars'
  },
  {
    title: 'Algochunk',
    description:
      'A platform offering 30 Data Structures and Algorithms (DSA) challenges, releasing one challenge per day to build consistent learning habits.',
    overview: "A platform offering 30 Data Structures and Algorithms (DSA) challenges, releasing one challenge per day to build consistent learning habits. Built an interactive practice environment for front-end machine coding problems using a custom React-based editor integrated with StackBlitz to deliver a seamless coding experience. Incorporated Google Gemini for AI-powered code reviews and developer assistance, enhancing code quality, debugging efficiency, and overall learning outcomes. Further optimized performance through intelligent caching and local storage strategies, reducing data retrieval times and ensuring a smooth, responsive user experience.",
    image: '/projects/algochunk.png',
    role: 'Full Stack',
    team: "Solo",
    features: [
      "Daily DSA Challenge System",
      "Interactive Coding Environment",
      "AI-Powered Code Review & Assistant",
      "Real Time Code Execution",
      "Leaderboard Rankings",
      "Progress Tracking",
    ],
    reason: [
      "I built this platform to turn inconsistent DSA practice into a habit-driven, real-world coding experience enhanced by AI-powered feedback."
    ],
    fontend: [
      "React : ",
      "TypeScript: Ensuring type safety and better developer experience",
      "Tailwind CSS + Shadcn UI: For rapid UI development with consistent design",
      "Zod: For form validation.",
      "Redux Toolkit: For state management.",
      "Rechart: For creating interactive and visually appealing charts",
      "Shadcn: For rapid UI development with consistent design",
    ],
    backend: [
      "Firebase : Handles data persistence and authentication.",
      "JudgeO: Handles real time code execution.",
      "Gemini : AI-Powered Code Review & Assistant",

    ],
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
      { name: 'Bun', icon: <div className='size-7'> <Bun key="bun" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'Appwrite', icon: <div className='size-7'> <Appwrite key="appwrite" /> </div> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
    slug: 'algochunk'
  },
  {
    title: 'XCode',
    description: "A collaborative online code execution platform that enables users to write and run code in multiple programming languages with real-time execution",
    overview: "A collaborative online code execution platform that enables users to write and run code in multiple programming languages with real-time execution. It implements Socket.io and WebRTC for real-time collaboration, allowing multiple users to code together seamlessly with integrated video chat for smooth communication.",
    image: '/projects/collobrative-code-editor.png',
    role: 'Full Stack',
    team: "Solo",
    features: [
      "Multi-Language Code Execution",
      "Real-Time Collaborative Coding",
      "Live Video Communication",
      "Customizable Editor Themes",
      "Instant Feedback & Syntax Checking",
      "Modern UI with Shadcn UI",
    ],
    reason: [
      "To combine code execution, live collaboration, and communication into a single platform for a seamless pair-programming experience.",

      "To gain hands-on experience with real-time technologies like Socket.io and WebRTC while building a production-ready system."
    ],
    fontend: [
      "Nextjs : ",
      "TypeScript: Ensuring type safety and better developer experience",
      "Zustand: Lightweight state management with minimal boilerplate",
      "Tailwind CSS + Shadcn UI: For rapid UI development with consistent design",
      "Hot Toast: For elegant notifications and feedback",
      "Rechart: For creating interactive and visually appealing charts",
      "Shadcn: For rapid UI development with consistent design",
    ],
    backend: [

      "Nodejs : Powers the core server infrastructure",
      "WebRTC: Handles real-time bi-directional video communication",
      "Socket.io: Enables real-time bi-directional communication",
      "Express.js: Handles API routes and middleware"
    ],
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://syncify.rocks',
    technologies: [
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
      { name: 'Node.js', icon: <div className='size-7'> <NodeJs key="nodejs" /> </div> },
      { name: 'MongoDB', icon: <div className='size-7'> <MongoDB key="mongodb" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
      { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/ramxcodes/syncify',
    live: 'https://syncify.rocks',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
    slug: 'xcode'
  },
  {
    title: 'Git Map',
    description:
      'GitMap is a tool that transforms your Git commit history and branches into an interactive mind map.',

    image: '/project/pasandida.png',
    overview: "GitMap is a tool that transforms your Git commit history and branches into an interactive mind map, making it easier to understand and explore your project's evolution.",
    role: 'Full Stack',
    team: "Solo",
    features: [
      "Interactive Commit Mind Map",
      "Branch & Merge Visualization",
      "Commit Metadata Insights",
    ],
    reason: [
      "I built GitMap to make complex Git histories easier to understand by turning commits and branches into an intuitive visual mind map, helping developers quickly grasp project evolution, branching logic, and decision points without digging through long commit logs."
    ],
    fontend: [
      "Nextjs : ",
      "TypeScript: Ensuring type safety and better developer experience",
      "Tailwind CSS + Shadcn UI: For rapid UI development with consistent design",
      "Hot Toast: For elegant notifications and feedback",
      "Shadcn: For rapid UI development with consistent design",

    ],
    backend: [],
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
      { name: 'Prisma', icon: <div className='size-7'> <Prisma key="prisma" /> </div> },
      { name: 'PostgreSQL', icon: <div className='size-7'> <PostgreSQL key="postgresql" /> </div> },
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
      { name: 'Socket.io', icon: <div className='size-7'> <SocketIo key="socketio" /> </div> },
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false,
    slug: 'git-map'
  },
  {
    title: 'React Snippet Box',
    description:
      'A platform for exploring react machine coding challenges solutions.',
    image: '/project/quest.png',
    overview: "GitMap is a tool that transforms your Git commit history and branches into an interactive mind map, making it easier to understand and explore your project's evolution.",
    role: 'Full Stack',
    team: "Solo",
    features: [
      "Interactive Commit Mind Map",
      "Branch & Merge Visualization",
      "Commit Metadata Insights",
    ],
    reason: [
      "I built GitMap to make complex Git histories easier to understand by turning commits and branches into an intuitive visual mind map, helping developers quickly grasp project evolution, branching logic, and decision points without digging through long commit logs."
    ],
    fontend: [
      "Nextjs : ",
      "TypeScript: Ensuring type safety and better developer experience",
      "Tailwind CSS + Shadcn UI: For rapid UI development with consistent design",
      "Hot Toast: For elegant notifications and feedback",
      "Shadcn: For rapid UI development with consistent design",

    ],
    backend: [],
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
      { name: 'MDX', icon: <div className='size-7'> <MDXIcon key="mdx" /> </div> },
      { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div> },
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/the-quest',
    isWorking: true,
    slug: 'react-snippet-box'
  },
  // {
  //   title: 'FestX',
  //   description:
  //     "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
  //   image: '/project/festx.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
  //   link: 'https://fest-x.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'MongoDB', icon: <div className='size-7'> <MongoDB key="mongodb" /> </div> },
  //     { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div> },
  //   ],
  //   github: 'https://github.com/ramxcodes/fest-x',
  //   live: 'https://fest-x.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/fest-x',
  //   isWorking: true,
  // },
  // {
  //   title: "I'm a chill guy",
  //   description:
  //     'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
  //   image: '/project/chillguy.png',
  //   link: 'https://chillguy.ramx.in',
  //   technologies: [
  //     { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
  //     { name: 'Express.js', icon: <div className='size-7'> <ExpressJs key="expressjs" /> </div> },
  //     { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'Netlify', icon: <div className='size-7'> <Netlify key="netlify" /> </div> },
  //     { name: 'GitHub', icon: <div className='size-7'> <Github key="github" /> </div> },
  //   ],
  //   github: 'https://github.com/ramxcodes/chill-guy',
  //   live: 'https://chillguy.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/chill-guy',
  //   isWorking: true,
  // },
  // {
  //   title: "Ram's Space",
  //   description:
  //     'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
  //   image: '/project/ramspace.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
  //   link: 'https://blog.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'MDX', icon: <div className='size-7'> <MDXIcon key="mdx" /> </div> },
  //   ],
  //   live: 'https://blog.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/poems-blog',
  //   isWorking: true,
  // },
  // {
  //   title: 'Intent JS',
  //   description:
  //     'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
  //   image: '/project/intent.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
  //   link: 'https://intent-js.ramx.in',
  //   technologies: [
  //     { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
  //     { name: 'Motion', icon: <div className='size-7'> <Motion key="motion" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div> },
  //   ],
  //   github: 'https://github.com/ramxcodes/intent-js',
  //   live: 'https://intent-js.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/intent-js',
  //   isWorking: true,
  // },
  // {
  //   title: 'Moonstone 2K25',
  //   description:
  //     "Official website for Medicaps University's premier annual college festival with event management and registration",
  //   image: '/project/moonstone.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
  //   link: 'https://moonstone.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'Motion', icon: <div className='size-7'> <Motion key="motion" /> </div> },
  //     { name: 'Three.js', icon: <div className='size-7'> <ThreeJs key="threejs" /> </div> },
  //     { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: 'https://github.com/ramxcodes/moonstone-fest',
  //   live: 'https://moonstone.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/moonstone-fest',
  //   isWorking: true,
  // },
  // {
  //   title: 'Valorant Remastered',
  //   description:
  //     'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
  //   image: '/project/valorant.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
  //   link: 'https://valorant.ramx.in',
  //   technologies: [
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
  //   ],
  //   github: 'https://github.com/ramxcodes/valorant-remastered',
  //   live: 'https://valorant.ramx.in',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/valorant-remastered',
  //   isWorking: true,
  // },
  // {
  //   title: 'That Startup',
  //   description:
  //     'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
  //   image: '/project/that-startup.png',
  //   video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
  //   link: 'https://that-startup.ramx.in/',
  //   technologies: [
  //     { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div> },
  //     { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div> },
  //     { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
  //     { name: 'Sanity', icon: <div className='size-7'> <Sanity key="sanity" /> </div> },
  //     { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
  //   ],
  //   github: 'https://github.com/ramxcodes/that-startup',
  //   live: 'https://that-startup.ramx.in/',
  //   details: true,
  //   projectDetailsPageSlug: '/projects/that-startup',
  //   isWorking: true,
  // },
];
