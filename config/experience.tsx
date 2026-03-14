import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Coding Jr.',
    position: 'Frontend Developer Intern',
    location: 'India (Remote)',
    image: '/company/coding.png',
    description: [
      'Created custom React hooks to streamline data retrieval from backend APIs, improving data fetching efficiency by 25% and reducing boilerplate code.',
      'Developed an end-to-end canteen management system with user and admin panels, enabling seamless food ordering, real-time updates via sockets, and integrated backend workflows, improving efficiency and user experience for 5000+ students across 7 colleges.',
      'Developed a LeetCode style competitive programming platform used by 8000+ students across 6+ colleges, implementing live contest, an interactive coding practice platform with progress tracking, and placement preparation modules including mock tests and skill analytics.',
      'Optimized an online test platform leveraging React Query and Zustand, improving load times and reducing response latency by 20%, ensuring smooth real-time performance across multiple modules.',
      'Engineered pixel-perfect, responsive React/Next.js UIs from complex Figma designs, resolving cross-device inconsistencies and reducing QA-reported UI defects by 30%.'
    ],
    startDate: 'August 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
    ],
    website: 'https://www.codingjr.online/',
    github: 'https://www.codingjr.online/',
    x: 'https://www.codingjr.online/',
  },
  
];
