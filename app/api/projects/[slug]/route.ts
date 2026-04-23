import { NextResponse } from "next/server";
import { createClient } from "@/supabase/server";
import type { Project } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse<Project | null>> {
    const slug = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug.slug) 
        .single();

    if (error) {
        return NextResponse.json(null, { status: 500 });
    }

    return NextResponse.json(data);
}