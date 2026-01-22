'use client';

import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/common/wrapper';
import SectionHeading from '@/components/common/section-heading';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { projects } from '@/config/project';
import { ArrowRight, Github, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <Wrapper className="mt-20">
 <div className='text-center relative'>
                <h1 className='text-4xl text-neutral-100 font-bold'>Projects</h1>
                <p className='text-muted-foreground mt-2 text-base'>My projects and work across different technologies and domains.</p>
                <div className='mt-8 h-[1px] w-full bg-neutral-800'></div>
            </div>
    
                <p className='text-left mt-8 text-neutral-100 text-xl font-semibold'>All Projects <span className='text-neutral-400 text-base'>({projects.length})</span></p>  

      <div className="grid gap-6 md:grid-cols-2 mt-4 pb-8">
      {projects.map((project, index) => (
          <Link
            href={project.link}
            key={project.title + index}
            className="bg-neutral-900 rounded-md overflow-hidden h-[460px] flex flex-col border border-neutral-800 hover:border-neutral-700 transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-1/2">
              <Image
                src="/projects/code-editor.png"
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index < 2}
              />
            </div>

            {/* CONTENT */}
            <div className="h-1/2 p-4 flex flex-col gap-2">
            <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-white line-clamp-2">
                {project.title}
              </h3>
              <div className='flex gap-2'>
              <Globe className='size-4 text-neutral-400 hover:text-white transition-all'/>
              <Github className='size-4 text-neutral-400 hover:text-white transition-all'/>
              </div>
              </div>

              <p className="text-sm text-neutral-400 line-clamp-2">
                {project.description}
              </p>

              <h4 className="text-neutral-200 text-sm font-medium mt-2">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tag, i) => (
                  <Tooltip key={tag.name + i}>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer">
                        {tag.icon}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tag.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              <div className='mt-4 flex items-center justify-between'>
                <p
                  className={`text-xs px-3 py-1 rounded-full font-medium ${project.isWorking
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                >
                  {project.isWorking ? 'All systems operational' : 'Completed'}
                </p>
                <p className="text-sm text-neutral-400 flex items-center gap-1 group ">View Details <ArrowRight className='size-4 group-hover:translate-x-1 transition'/></p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      
    </Wrapper>
  );
}
