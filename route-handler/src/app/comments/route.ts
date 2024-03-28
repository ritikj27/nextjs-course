import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query")
  const filterComments = query ? comments.filter((comment) => comment.text.toLowerCase().includes(query)) : comments
  return Response.json(filterComments);
}

export async function POST(request:Request) {
  const comment = await request.json();
  const newComments = {
    id:comments.length + 1,
    text:comment.text
  }
  comments.push(newComments);

  return new Response(JSON.stringify(newComments),{
    headers:{
      "content-Type":"application/json"
    },
    status:201
  })
}
