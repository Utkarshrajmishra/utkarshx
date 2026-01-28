'use client';
import Wrapper from '@/components/common/wrapper';
import { projects } from '@/config/project';
import ProjectCard from '@/components/common/project-card';

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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>


    </Wrapper>
  );
}
