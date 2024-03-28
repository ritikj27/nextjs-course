import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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
