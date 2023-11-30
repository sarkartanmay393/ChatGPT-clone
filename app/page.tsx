import AuthButton from "@/components/AuthButton";
import ChatgptLogo from "@/components/icons/chatgpt";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
      <div className="bg-white rounded-full p-2">
        <ChatgptLogo />
      </div>
      <h4 className="text-xl ">Welcome to ChadGPT</h4>
      <div className={`flex ${user ? 'flex-col items-center' : 'flex-row-reverse'} `}>
        <AuthButton />
        <Link
          href="/chat"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          <Button>Start Chat</Button>
        </Link>
      </div>
    </div>
  );
}