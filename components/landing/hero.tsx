"use client"
import Image from 'next/image';
import Wrapper from '../common/wrapper';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import Skill from '../common/skill';
import { HeroConfig, skillIcons, socialLinks } from '@/config/hero';
import { parseTemplate } from '@/lib/parseTemplate';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useEffect, useState } from 'react';
import { useStatus } from '@/context/status-context';
import { Loader2 } from 'lucide-react';
const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, title, avatar, skills, description, buttons } = HeroConfig;
  const { commitNumber, loader, statusError } = useStatus()



  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillIcons[part.skill.component as keyof typeof skillIcons];

        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="text-white font-host whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap font-host">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Wrapper className="max-auto ">
      <div className='relative'>
        <Image
          src={avatar}
          alt="hero"
          width={100}
          height={100}
          className="size-24 relative rounded-full bg-yellow-300"
        />
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='absolute hover:scale-110 cursor-pointer border-1 p-1 border-neutral-700 bg-neutral-950 rounded-full left-20 bottom-2'>
          <div className={cn("h-2 w-2 bg-slate-500 rounded-full", loader && "animate-pulse", !loader && !statusError && commitNumber>0 && "bg-green-500", statusError && "bg-red-500")}></div>

        </div>
        <div className={cn("absolute opacity-0 transition-all duration-300 z-100 bg-neutral-900 border font-host border-neutral-700 rounded-b-md rounded-r-md p-2 left-25 top-20", isHovered && "opacity-100")}>
          {loader ? (
            <div className='flex flex-col justify-center items-center'>
              <Loader2 className='size-4 animate-spin text-neutral-500' />
              <p className='text-neutral-500 text-xs flex items-center gap-1'>Loading Status</p>
            </div>
          ) : statusError ? (
            <div>
              <p className='text-neutral-100 text-sm text-neutral-500 flex items-center gap-1'>Unable to load status</p>
            </div>
          ) : (
           commitNumber>0 ? <>
              <p className='text-sm text-neutral-300'><b>Active Today</b></p>
              <p className='text-sm text-neutral-500'><b>{commitNumber} {commitNumber >= 2 ? 'commits' : 'commit'} </b> made today</p>
            </> :
            <>
             <p className='text-sm text-neutral-300'>Offline Today</p>
                           <p className='text-sm text-neutral-500'>No commits made today</p>

             </>
          )}
        </div>
      </div>

      <div className="mt-8 font-host flex flex-col gap-2">
        <h1 className="text-4xl tracking-tight font-bold">
          Hi, I'm {name} - <span className="text-neutral-500">{title}</span>
        </h1>

        <div className="mt-4 font-host flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-xl">
          {renderDescription()}
        </div>
      </div>

      <div className="mt-8 flex gap-4 font-host">
        {buttons.map((button, index) => {
          const ButtonIcon =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
              className={cn(
                button.variant === 'outline' && 'inset-shadow-indigo-500',
                button.variant === 'default' && 'inset-shadow-indigo-500',
              )}
            >
              {ButtonIcon && <ButtonIcon />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-neutral-500 flex items-center gap-2"
              >
                <span className="size-6">
                  <link.icon className="size-6" />
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Wrapper>
  );
};

export default Hero;
