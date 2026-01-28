'use client';
import { blogConfig } from '@/config/blog';
import { BlogType } from '@/types/blog';
import { useEffect, useState } from 'react';
import Wrapper from '@/components/common/wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BlogCard from '@/components/common/blog-card';
import Medium from '@/components/svgs/Medium';

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
                // console.error(
                //     'Failed to fetch GitHub contributions:',
                //     error,
                // );
                setHasError(true);
            }
            finally {
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
        <Wrapper className="mt-20 font-host">
            <div className='text-center '>

                <h1 className='text-4xl text-neutral-100 font-bold'>Blogs</h1>
                <p className='text-muted-foreground mt-2 text-base'>Thoughts, tutorials, and insights on engineering, and programming.</p>
                <div className='mt-8 h-[1px] w-full bg-neutral-800'></div>
            </div>
            {hasError ?
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

                <>
                    <p className='text-left mt-8 text-neutral-100 text-xl font-semibold'>All Blogs <span className='text-neutral-400 text-base'>({posts.length})</span></p>
                    <div className="grid gap-6 md:grid-cols-2 mt-4 pb-8">
                        {posts.map((post, index) => (
                            <BlogCard post={post} index={index} />
                        ))}
                    </div>

                </>

            }
        </Wrapper>
    );
}
