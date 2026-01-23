import { projects } from "@/config/project"



export const projectSlug = (slug: string) => {
    return projects.find((project) => project.slug === slug)
}