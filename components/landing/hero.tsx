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

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

const Hero = () => {
  const { name, title, avatar, skills, description, buttons } = HeroConfig;

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
          <b key={part.key} className="text-white whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Wrapper className="max-auto px-4">
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-yellow-300"
      />

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I'm {name} - <span className="text-neutral-500">{title}</span>
        </h1>

        <div className="mt-4  flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-xl">
          {renderDescription()}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const ButtonIcon =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
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
