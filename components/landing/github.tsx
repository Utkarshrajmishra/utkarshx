'use client';

import { githubConfig } from '@/config/github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionHeading from '../common/section-heading';
import Wrapper from '../common/wrapper';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

/**
 * react-activity-calendar exports a NAMED component.
 * No default export, no props type export.
 */
const ActivityCalendar = dynamic(
  () =>
    import('react-activity-calendar').then(
      (mod) => mod.ActivityCalendar
    ),
  { ssr: false }
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
};

/**
 * Filter contributions to last 12 months
 */
function filterLastYear(
  contributions: ContributionItem[],
): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    return new Date(item.date) >= oneYearAgo;
  });
}

 function Github() {
  const { theme } = useTheme();

  const [contributions, setContributions] =
    useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] =
    useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchContributions() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
        );

        const data: { contributions?: unknown[] } =
          await response.json();

        if (!Array.isArray(data?.contributions)) {
          setHasError(true);
          return;
        }

        const flattened = data.contributions.flat();

        const levelMap = {
          NONE: 0,
          FIRST_QUARTILE: 1,
          SECOND_QUARTILE: 2,
          THIRD_QUARTILE: 3,
          FOURTH_QUARTILE: 4,
        } as const;

        const parsed: ContributionItem[] = flattened
          .filter(
            (item): item is GitHubContributionResponse =>
              typeof item === 'object' &&
              item !== null &&
              'date' in item &&
              'contributionCount' in item &&
              'contributionLevel' in item,
          )
          .map((item) => ({
            date: String(item.date),
            count: Number(item.contributionCount ?? 0),
            level:
              levelMap[
                item.contributionLevel as keyof typeof levelMap
              ] ?? 0,
          }));

        if (parsed.length === 0) {
          setHasError(true);
          return;
        }

        setTotalContributions(
          parsed.reduce((sum, item) => sum + item.count, 0),
        );

        setContributions(filterLastYear(parsed));
      } catch (error) {
        console.error(
          'Failed to fetch GitHub contributions:',
          error,
        );
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContributions();
  }, []);

  return (
    <Wrapper className="mt-20">
              <SectionHeading subHeading="Featured" heading= {githubConfig.title} />

      <div className="space-y-6">
        {/* Header */}
        <div className='flex justify-between items-center'>
         
          <p className="text-neutral-200 text-sm">
            My {" "}
            {githubConfig.subtitle}
          </p>

          {!isLoading && !hasError && totalContributions > 0 && (
            <p className="text-white mt-1 text-sm font-medium">
              Total:{' '}
              <span className="font-black">
                {totalContributions.toLocaleString()}
              </span>{' '}
              contributions
            </p>
          )}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
              <p className="text-muted-foreground text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GithubIcon className="h-8 w-8" />
            </div>

            <p className="mb-2 font-medium">
              {githubConfig.errorState.title}
            </p>

            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>

            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className=" rounded-lg border border-dashed p-6 backdrop-blur-sm border-white/10 bg-[#131313]">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={10.5}
                  blockMargin={2}
                  fontSize={githubConfig.fontSize}
                  colorScheme={ 'dark'}
                  maxLevel={githubConfig.maxLevel}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                  style={{
                    color: 'rgb(139, 148, 158)',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}


export default Github;