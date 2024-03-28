import { headers ,cookies} from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  const headersg = new Headers(request.headers);
  const headersList = headers()

  const theme = request.cookies.get("theme")
  console.log(theme)
  cookies().set("ok","201")

  console.log(headersg.get("Authorization"));
  console.log(headersList.get("Authorization"))
  return new Response("<h1>hello world from profile</h1>",{
    headers:{
      "content-Type":"text/html",
      "set-cookie":"theme=dark"
    }
  });
}


