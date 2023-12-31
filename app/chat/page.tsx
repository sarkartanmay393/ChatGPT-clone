'use client'

import { Card } from "@/components/ui/card";
import ChatgptLogo from "@/components/icons/chatgpt";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();

  const handleSuggestion = () => {
    (async () => {
      const resp = await fetch('/api/chat', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await resp.json();
      if (data) {
        router.push('/chat/' + data.id);
      }
    })();
  }



  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className='w-full sm:w-[75%] h-full flex flex-col items-center justify-center gap-2'>
        <div className="bg-white rounded-full p-2">
          <ChatgptLogo />
        </div>
        <h4 className="text-xl ">How Can I Help You?</h4>
      </div>
      <div className='w-full sm:w-[75%] grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4'>
        {Suggestions.map((s, i) => {
          return (
            <Card
              key={i}
              onClick={handleSuggestion}
              className='p-2 px-3 cursor-pointer font-normal hover:bg-secondary '
            >
              <h3 className=''>{s.text.substring(0, s.breaker)}</h3>
              <p className='text-gray-600'>{s.text.substring(s.breaker, s.text.length)}</p>
            </Card>
          )
        })}
      </div>
    </div >
  );
}

const Suggestions = [
  {
    text: "Generate Project Idea for becoming ultimate engineer",
    breaker: 22,
  },
  {
    text: "Generate Project Idea for becoming ultimate engineer",
    breaker: 22,
  },
  {
    text: "Generate Project Idea for becoming ultimate engineer",
    breaker: 22,
  },
  {
    text: "Generate Project Idea for becoming ultimate engineer",
    breaker: 22,
  },
];
