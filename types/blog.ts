export interface BlogType{
    title: string;
    link: string;
    pubDate: string;
    description: string | null;
    tags: string[];
    thumbnail: string | null;
}