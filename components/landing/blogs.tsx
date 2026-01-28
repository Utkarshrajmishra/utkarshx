'use client';
import { blogConfig } from '@/config/blog';
import Image from 'next/image';
import { BlogType } from '@/types/blog';
import { useEffect, useState } from 'react';
import Wrapper from '../common/wrapper';
import { Button } from '../ui/button';
import SectionHeading from '../common/section-heading';
import Link from 'next/link';
import Medium from '../svgs/Medium';
import BlogCard from '../common/blog-card';

export default function MediumBlogs() {
  const [posts, setPosts] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await fetch('/api/blogs');
        const json = await data.json();
        setPosts(json.post);
      } catch (error) {
          console.error(
          'Failed to fetch GitHub contributions:',
          error,
        );
        setHasError(true);}
      finally{
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
         <div className="flex justify-center py-16">
                    <div className="text-center">
                      <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
                      <p className="text-muted-foreground text-sm">
                        {blogConfig.loadingState.description}
                      </p>
                    </div>
                  </div>
    )
  }

  return (
    <Wrapper className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
{ hasError ?
  <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Medium className="h-8 w-8" />
            </div>

            <p className="mb-2 font-medium">
              {blogConfig.errorState.title}
            </p>

            <p className="mb-4 text-sm">
              {blogConfig.errorState.description}
            </p>

            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/`}
                className="inline-flex items-center gap-2"
              >
                <Medium className="h-4 w-4" />
                {blogConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
:

<>      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {posts.slice(0, 4).map((post, index) => (
        <BlogCard post={post} index={index} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blogs">Show all blogs</Link>
        </Button>
      </div>
      </>

}
    </Wrapper>
  );
}
