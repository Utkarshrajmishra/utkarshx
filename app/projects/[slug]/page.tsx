import Wrapper from "@/components/common/wrapper"
import { projectSlug } from "@/lib/project-slug"
import { Project } from "@/types/projects"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe } from "lucide-react"
import Github from "@/components/svgs/Github"
import { cn } from "@/lib/utils"
import NotFound from "@/app/not-found"
import Link from "next/link"
export default async function Page({
params
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params

    const project: Project | undefined = projectSlug(slug)

    if (!project) {
        return <NotFound />
    }
    return (
        <Wrapper className="font-host ">
           <Link href="/projects"><Button variant="outline" className="text-sm  cursor-pointer h-8 mt-18 w-fit flex gap-1 items-center"><ChevronLeft className="size-4.5" /> Back to projects</Button></Link>
            <article className="mt-10 flex flex-col gap-12">
                <div className="flex flex-col gap-6">                <Image src={project.image} alt={project.title} width={1000} height={1000} className="rounded-md border-2 border-neutral-900" />
                    <div className="flex justify-between items-center ">
                        <p className="text-neutral-100 text-4xl font-semibold">{project.title}</p>
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
                    </div>
                    <p className="text-lg text-neutral-400">{project.description}</p>
                    <div className="flex gap-4">
                        <Button className="group"><Globe className="group-hover:animate-bounce" /> Live Demo</Button>
                        <Button variant="outline" className="group"><Github className="group-hover:animate-bounce" /> Source Code</Button>
                    </div>
                </div>
                <div className="h-[0.7px] bg-neutral-700 w-full"></div>

                <div>
                    <h2 className="text-neutral-100 text-2xl font-semibold">Overview</h2>
                    <p className=" text-neutral-500 mt-4">{project.overview}</p>
                </div>
                <div>
                    <h2 className="text-neutral-100 text-2xl font-semibold">Features</h2>
                    <ul className="list-disc list-inside mt-4">
                        {project.features.map((feature, index) => (
                            <li key={index} className=" text-neutral-500">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-neutral-100 text-2xl font-semibold">Reason</h2>
                    <div className="list-disc list-inside mt-4">
                        {project.reason.map((reason, index) => (
                            <p key={index} className=" text-neutral-500">{reason}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-neutral-100 text-2xl font-semibold">Technologies</h2>
                    <div className="mt-4">
                        <h3 className="text-neutral-100 text-xl font-semibold">Frontend</h3>
                        <ul className="list-disc list-inside mt-4">
                            {project.fontend.map((frontend: string, index: number) => {
                                // Split only on the first colon
                                const [title, ...rest] = frontend.split(":")
                                const description = rest.join(":") // handles extra colons safely

                                return (
                                    <li key={index} className="text-neutral-500">
                                        <span className="font-medium text-neutral-200 mr-1">
                                            {title}{rest.length > 0 && ":"}
                                        </span>
                                        {description}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                  {project.backend.length>0 && <div className="mt-4">
                        <h3 className="text-neutral-100 text-xl font-semibold">Backend</h3>
                        <ul className="list-disc list-inside mt-4">
                            {project.backend.map((backend: string, index: number) => {
                                // Split only on the first colon
                                const [title, ...rest] = backend.split(":")
                                const description = rest.join(":") // handles extra colons safely

                                return (
                                    <li key={index} className="text-neutral-500">
                                        <span className="font-medium text-neutral-200 mr-1">
                                            {title}{rest.length > 0 && ":"}
                                        </span>
                                        {description}
                                    </li>
                                )
                            })}
                        </ul>
                        </div>}
                </div>
            </article>
        </Wrapper>
    )
}