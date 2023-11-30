import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 } from "uuid";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const requestUrl = new URL(request.url);
  const user = await supabase.auth.getUser();

  const newChat = {
    id: v4(),
    user_id: user.data.user?.id,
    title: "New Chat",
  };

  const insertNewChat = await supabase.from("chats").insert(newChat);
  if (insertNewChat.status != 201) {
    return NextResponse.json({
      error: `Error while creating new chat: ${insertNewChat.error?.message}`,
    });
  }

  return NextResponse.json(newChat);
}
