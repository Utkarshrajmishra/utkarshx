// config/hero.ts
import TypeScript from "@/components/technologies/TypeScript";
import ReactIcon from "@/components/technologies/ReactIcon";
import NextJs from "@/components/technologies/NextJs";
import Bun from "@/components/technologies/Bun";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import NodeJs from "@/components/technologies/NodeJs";
import MongoDB from "@/components/technologies/MongoDB";
import Prisma from "@/components/technologies/Prisma";
import JavaScript from "@/components/technologies/JavaScript";

// Social Icons
import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import {  Youtube, YoutubeIcon } from "lucide-react";
import Medium from "@/components/svgs/Medium";
import Instagram from "@/components/svgs/Instagram";
import { Peerlist } from "@/components/svgs/Peerlist";

/* ---------------------------------
   Skill component map
---------------------------------- */
export const skillIcons = {
  TypeScript,
  ReactIcon,
  NextJs,
  Bun,
  PostgreSQL,
  NodeJs,
  MongoDB,
  Prisma,
  JavaScript,
};

export type SkillIconKey = keyof typeof skillIcons;

/* ---------------------------------
   Hero config
---------------------------------- */
export const HeroConfig = {
  name: "Utkarsh",
  title: "A Full Stack Web Developer.",
  avatar: "/assets/logo.png",

  skills: [
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript" as SkillIconKey,
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon" as SkillIconKey,
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs" as SkillIconKey,
    },
    {
      name: "Bun",
      href: "https://bun.sh/",
      component: "Bun" as SkillIconKey,
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL" as SkillIconKey,
    },
  ],

  description: {
    template:
      "I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.",
  },

  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

/* ---------------------------------
   Social links
---------------------------------- */
export const socialLinks = [
  // {
  //   name: "X",
  //   href: "https://x.com/ramxcodes",
  //   icon: X,
  // },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ramxcodes/",
    icon: LinkedIn,
  },
  {
    name: "Github",
    href: "https://github.com/ramxcodes",
    icon: Github,
  },
  
   {
    name: "Youtube",
    href: "mailto:ramxcodes@gmail.com",
    icon: YoutubeIcon,
  },

  {
    name: "Instagram",
    href: "mailto:ramxcodes@gmail.com",
    icon: Instagram,
  },

  {
    name: "Medium",
    href: "mailto:ramxcodes@gmail.com",
    icon: Medium,
  },

  {
    name: "Peerlist",
    href: "mailto:ramxcodes@gmail.com",
    icon: Peerlist,
  },
  {
    name: "Email",
    href: "mailto:ramxcodes@gmail.com",
    icon: Mail,
  },
];
