import Image from "next/image"
import Wrapper from "../common/wrapper"
import Skill from "../common/skill";
import { HeroConfig, skillIcons, socialLinks } from '@/config/hero';
import { parseTemplate } from "@/lib/parseTemplate";
const Hero=()=>{
  const { name, title, avatar, skills, description, buttons } = HeroConfig;
    
  const renderDescription = () => {
    const parts=parseTemplate(description.template, skills);

    return parts.map((part)=>{
        if(part.type==='skill' && 'skill' in part && part.skill){
            const SkillComponent=
            skillIcons[part.skill.component as keyof typeof skillIcons]

            return (
                <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
                    <SkillComponent/>
                </Skill>
            )
        }
        else if(part.type==='bold'&& 'text' in part){
            return(
                <b key={part.key} className="text-white whitespace-pre-wrap">
                    {part.text}
                </b>
            )
        }
         else if(part.type==='text'&&'text' in part){
            return(
                <span key={part.key} className="whitespace-pre-wrap">
                    {part.text}
                </span>
            )
         }
         return null
    })
  }
 
  return(
        <Wrapper className="max-auto px-12">
            <Image 
            src={avatar} alt="hero" width={100} height={100} 
            className="size-24 rounded-full bg-yellow-300"/>

            <div className="mt-8 flex flex-col gap-2">
                <h1 className="text-4xl font-bold">
                    Hi, I'm {name} - <span className="text-neutral-500">{title}</span>
                </h1>

                <div className="mt-4  flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-xl">
                    {renderDescription()}
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero