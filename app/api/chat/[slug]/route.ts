import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = await request.json();
  const newMsg = data;

  const insertNewChat = await supabase.from("messages").insert(newMsg);
  if (insertNewChat.status != 201) {
    return NextResponse.json({
      error: `Error while creating new chat: ${insertNewChat.error?.message}`,
    });
  }

  return NextResponse.json(data);
}
