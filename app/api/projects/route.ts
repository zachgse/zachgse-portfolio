import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export type Project = {
    id: number
    slug: string
    name: string
    description: string
    tags: {
        tag: string
    }[]
    images: {
        url: string
    }[]
    developed_at: string
}

export async function GET():Promise<NextResponse<Project[]>>{
    const supabase = await createClient();
    const { data,error } = await supabase
                                    .from("projects")
                                    .select("*")
                                    .order("created_at",{ascending:false});
    
    if (error) {
        return NextResponse.json([],{status:500})
    }
    return NextResponse.json(data);
}