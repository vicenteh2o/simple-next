import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://my-json-server.typicode.com/vicenteh2o/json-server/todos");
    const todos = await res.json();

    return NextResponse.json(todos)
}