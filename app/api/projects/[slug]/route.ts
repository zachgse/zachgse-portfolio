import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/supabase/server";
import type { Project } from "../route";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
): Promise<NextResponse<Project | null>> {

    const { slug } = await context.params; 

    const supabase = await createClient();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        return NextResponse.json(null, { status: 500 });
    }

    return NextResponse.json(data);
}