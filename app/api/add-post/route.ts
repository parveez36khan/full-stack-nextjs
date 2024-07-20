import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const res = await request.json();
        
        const { title, content } = res;
        
        const result = await prisma.post.create({
            data: {
                title,
                content,
                published: true,
                author: {
                    create: {
                        name: 'khan',
                    },
                },
            },
        });

        return NextResponse.json({ result });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
}
