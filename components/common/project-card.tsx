"use client"
import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ArrowRight, Github, Globe } from "lucide-react";

const ProjectCard=({project, index}:{project:Project, index:number})=>{
    return(
        <div

            key={project.title + index}
            className="bg-neutral-900 rounded-md overflow-hidden h-[460px] flex flex-col border border-neutral-800 hover:border-neutral-700 transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-1/2">
              <Image
                src={project.image}
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
                  <Link href={project.live}><Globe className='size-4 text-neutral-400 hover:text-white transition-all' /></Link>
                  <Link href={project.github}>   <Github className='size-4 text-neutral-400 hover:text-white transition-all' /></Link>
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
                                            className={cn(
                                                "text-xs py-0.5 rounded-lg px-3",
                                                project.isWorking
                                                    ? "text-green-700 bg-green-900/20"
                                                    : "text-red-700 bg-red-900/20"
                                            )}
                                        >
                                            {project.isWorking ? "Completed" : "Ongoing"}
                                        </p>
                <Link href={`/projects/${project.slug}`} className="text-sm text-neutral-400 flex items-center gap-1 group ">View Details <ArrowRight className='size-4 group-hover:translate-x-1 transition' /></Link>
              </div>
            </div>
          </div> 
    )
}

export default ProjectCard