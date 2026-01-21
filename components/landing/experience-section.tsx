import { type Experience, experiences } from '@/config/experience';
import { Link } from 'next-view-transitions';
import React from 'react';
import { Button } from '../ui/button';
import Wrapper from '../common/wrapper';
import SectionHeading from '../common/section-heading';
import { ExperienceCard } from '../common/experience-card';

export default function ExperienceSection() {
  return (
    <Wrapper className="mt-20 px-5 font-host">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Wrapper>
  );
}
