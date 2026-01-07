import { ArrowRight, Book, FilmIcon, MoveIcon } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Wrapper from '../common/wrapper';
import SectionHeading from '../common/section-heading';

const setup = [
  {
    name: 'Books',
    description: 'Books that have influenced my thinking and growth.',
    icon: <Book className="size-4" />,
    href: '/gears',
  },
  {
    name: 'Movies',
    description: 'Movies and shows that inspired and entertained me.',
    icon: <FilmIcon className="size-4" />,
    href: '/setup',
  },
];

function PersonalLife() {
  return (
    <Wrapper className="mt-20">
      <SectionHeading subHeading="Development" heading="Setup" />
      <div className="mt-8 flex flex-col gap-4">
        {setup.map((item) => (
          <Link className="group" href={item.href} key={item.name}>
            <section className="flex bg-neutral-900 rounded-md border border-neutral-700 border-dashed flex-row items-center justify-between gap-4 px-4 py-2">
              <div className="bg-neutral-700  flex items-center justify-center rounded-md p-2">
                {item.icon}
              </div>
              <div className="flex w-full flex-col">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="hidden size-4 transition-all duration-300 group-hover:block" />
            </section>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

export default PersonalLife;