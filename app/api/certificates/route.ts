import { NextRequest,NextResponse } from "next/server";
import { createClient } from "@/supabase/server";

export type Certificate = {
    id: number;
    title: string;
    issuer: string;
    url: string;
    icon: string;
    image: string;
    achieved_at: string;
};

export async function GET(request:NextRequest
): Promise<NextResponse<Certificate[]>> {
    const params = request.nextUrl.searchParams;
    const type = params.get("type");
    const supabase = await createClient();

    switch(type){
        case "limit":
            const { data:limit, error:limit_error } = await supabase
                            .from("certifications")
                            .select("*")
                            .limit(4);
            if (limit_error) return NextResponse.json([], { status: 500 });
            return NextResponse.json(limit ?? []);
        default:
            const { data:all, error:all_error } = await supabase
                            .from("certifications")
                            .select("*");
            if (all_error) return NextResponse.json([], { status: 500 });
            return NextResponse.json(all ?? []);

    }
}

    