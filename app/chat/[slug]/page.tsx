'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatController } from "@/utils/hooks/useChatController";

interface ChatPageProps {
  params: { slug: string }
}

export default function Chat({ params }: ChatPageProps) {
  const { messages, messagesEndRef } = useChatController();

  return (
    <ScrollArea className="w-full h-full flex justify-items-center">
      <div id="msgscrollview" className='w-full h-full grid grid-cols-1 justify-items-center gap-10'>
        {messages.map((m, i) => (
          <div key={i} className='w-full sm:w-[75%] h-fit p-2 px-3 flex gap-2'>
            <div className={`w-[24px] h-[24px] rounded-full ${m.type === 'ai' ? 'bg-blue-400' : 'bg-green-500'} mt-[2px]`}></div>
            <div className="w-full flex flex-col gap-0">
              <p className='text-lg font-semibold'>{m.type === 'ai' ? 'ChatGPT' : 'You'}</p>
              <SyntaxHighlighter
                wrapLongLines
                style={oneLight}
                customStyle={{
                  background: 'transparent',
                  overflow: 'hidden',
                  padding: 0,

                }}
                className=""
                language="plaintext"
              >
                {m.text.trim()}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
        <div className="h-[30px]" ref={messagesEndRef}></div>
      </div>
    </ScrollArea>
  )
}