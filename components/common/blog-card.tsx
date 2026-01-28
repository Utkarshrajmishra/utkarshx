import { BlogType } from "@/types/blog"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Globe, Globe2, MoveUpRightIcon } from 'lucide-react';

const BlogCard=({post, index}:{post:BlogType, index:number})=>{
    return(
          <Link
          href={post.link}
            key={index}
            className="bg-neutral-900  cursor-pointer rounded-md overflow-hidden h-[400px] flex flex-col border border-neutral-800"
          >
            <div className="relative w-full h-1/2">
              <Image
                src={post.thumbnail || '/assets/logo.png'}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index < 2}
              />
            </div>

            {/* CONTENT — BOTTOM HALF */}
            <div className="h-1/2 p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white line-clamp-2">
                {post.title}
              </h3>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between  text-xs text-neutral-500">
                <div className="flex items-center gap-1">
                  <Calendar className="size-3.5" />{' '}
                  {new Date(post.pubDate || '').toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </div>
                <Globe className="size-4" />
              </div>
            </div>
          </Link>

    )
}

export default BlogCard