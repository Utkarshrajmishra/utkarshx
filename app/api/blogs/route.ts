import { NextResponse } from "next/server";
import { fetchMediumPosts } from "@/lib/blogParse";


export const revalidate = 3600; 

export async function GET() {
    try{
        const post=await fetchMediumPosts();
        return NextResponse.json({
            success: true,
            count: post.length,
            post: post,
        },{
            status: 200,
        })
    }
    catch(error){
        return NextResponse.json({
            success: false,
            message: "Failed to fetch blog posts",
        },{
            status: 500,
        })
    }
}