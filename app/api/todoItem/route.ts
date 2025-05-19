import { NextResponse } from "next/server";

const BACKEND_URL: any  = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET() {
    const res = await fetch(BACKEND_URL);
    const todos = await res.json();

    return NextResponse.json(todos)
}

export async function POST(request: any) {
    const body = await request.json();

    const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const todo = await res.json();

    return NextResponse.json(todo);
}