'use client';

import Link from 'next/link';
import Wrapper from '../common/wrapper';
import SectionHeading from '../common/section-heading';
import { Button } from '../ui/button';
import { projects } from '@/config/project';
import ProjectCard from '../common/project-card';

export default function Projects() {
  return (
    <Wrapper className="mt-20 font-host ">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard project={project} index={index} key={index}/>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Wrapper>
  );
}
