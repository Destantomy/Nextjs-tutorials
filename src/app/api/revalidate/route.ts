import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');
    if(secret !== process.env.SECRET_TOKEN) {
        return NextResponse.json({status: 401, message: 'invalid secret code'},
            {status: 401},
        );
    }
    if(!tag) {
        return NextResponse.json({status: 400, message: 'missing tag param'}, {status: 401});
    }
    revalidateTag(tag);
    return NextResponse.json({revalidate: true, now: Date.now()});
}