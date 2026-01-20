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
    image: '/project/notesbuddy.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
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
  },
  {
    title: 'Appwrite MCP Server',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/appwrite.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon:<div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'Bun', icon: <div className='size-7'> <Bun key="bun" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'Appwrite', icon: <div className='size-7'> <Appwrite key="appwrite" /> </div> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Syncify',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/project/syncify.png',
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
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'Prisma', icon: <div className='size-7'> <Prisma key="prisma" /> </div>},
      { name: 'PostgreSQL', icon: <div className='size-7'> <PostgreSQL key="postgresql" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'Socket.io', icon: <div className='size-7'> <SocketIo key="socketio" /> </div>},
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  },
  {
    title: 'The Quest',
    description:
      'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
    image: '/project/quest.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'MDX', icon: <div className='size-7'> <MDXIcon key="mdx" /> </div>},
      { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div>},
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/the-quest',
    isWorking: true,
  },
  {
    title: 'FestX',
    description:
      "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
    image: '/project/festx.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'MongoDB', icon: <div className='size-7'> <MongoDB key="mongodb" /> </div>},
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div>},
    ],
    github: 'https://github.com/ramxcodes/fest-x',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: true,
  },
  {
    title: "I'm a chill guy",
    description:
      'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
    image: '/project/chillguy.png',
    link: 'https://chillguy.ramx.in',
    technologies: [
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div> },
      { name: 'Express.js', icon: <div className='size-7'> <ExpressJs key="expressjs" /> </div> },
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div> },
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div> },
      { name: 'Netlify', icon: <div className='size-7'> <Netlify key="netlify" /> </div> },
      { name: 'GitHub', icon: <div className='size-7'> <Github key="github" /> </div> },
    ],
    github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://chillguy.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/chill-guy',
    isWorking: true,
  },
  {
    title: "Ram's Space",
    description:
      'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
    image: '/project/ramspace.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://blog.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'MDX', icon: <div className='size-7'> <MDXIcon key="mdx" /> </div>},
    ],
    live: 'https://blog.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/poems-blog',
    isWorking: true,
  },
  {
    title: 'Intent JS',
    description:
      'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
    image: '/project/intent.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://intent-js.ramx.in',
    technologies: [
      { name: 'Next.js', icon:<div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div>},
      { name: 'Motion', icon: <div className='size-7'> <Motion key="motion" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'shadcn/ui', icon: <div className='size-7'> <Shadcn key="shadcn" /> </div>},
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://intent-js.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/intent-js',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      { name: 'Next.js', icon:<div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'Motion', icon: <div className='size-7'> <Motion key="motion" /> </div>},
      { name: 'Three.js', icon: <div className='size-7'> <ThreeJs key="threejs" /> </div>},
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
  {
    title: 'Valorant Remastered',
    description:
      'Gaming website with immersive 3D animations, agent showcases, and performance-optimized Valorant experience',
    image: '/project/valorant.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/valorant.mp4',
    link: 'https://valorant.ramx.in',
    technologies: [
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'React', icon: <div className='size-7'> <ReactIcon key="react" /> </div>},
    ],
    github: 'https://github.com/ramxcodes/valorant-remastered',
    live: 'https://valorant.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/valorant-remastered',
    isWorking: true,
  },
  {
    title: 'That Startup',
    description:
      'Startup listing and pitching platform where entrepreneurs can submit ideas, vote on concepts, and connect with founders',
    image: '/project/that-startup.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/that-startup.mp4',
    link: 'https://that-startup.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <div className='size-7'> <NextJs key="nextjs" /> </div>},
      { name: 'TypeScript', icon: <div className='size-7'> <TypeScript key="typescript" /> </div>},
      { name: 'Tailwind CSS', icon: <div className='size-7'> <TailwindCss key="tailwindcss" /> </div>},
      { name: 'Sanity', icon: <div className='size-7'> <Sanity key="sanity" /> </div>},
      { name: 'Vercel', icon: <div className='size-7'> <Vercel key="vercel" /> </div>},
    ],
    github: 'https://github.com/ramxcodes/that-startup',
    live: 'https://that-startup.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/that-startup',
    isWorking: true,
  },
];
