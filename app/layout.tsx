import { GeistSans } from 'geist/font/sans';
import './globals.css';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEnterSubmit } from '@/components/hooks/useEnterSubmit';
import { useChatController } from '@/components/hooks/useChatController';
import { IoMdArrowUp } from 'react-icons/io';


export const metadata = {
  title: 'ChadGPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { formRef, handleKeyDown } = useEnterSubmit();
  const { input, setInput, inputRef, handleSend, model, setModel } = useChatController();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground overflow-hidden">
        <main className="h-screen w-screen">
          <div className="p-2 w-full h-full flex items-center justify-center">
            <Sidebar />
            <div className='w-full sm:w-[80%] h-full flex flex-col bg-background sm:p-2 '>
              <nav className='h-max flex gap-2'>
                <Select value={model} onValueChange={(e) => setModel(e)}>
                  <SelectTrigger className="w-[140px] sm:w-[180px]">
                    <SelectValue>Chat{model}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GPT 3.5">
                      GPT 3.5
                    </SelectItem>
                    <SelectItem value="GPT 4">
                      GPT 4
                    </SelectItem>
                  </SelectContent>
                </Select>
              </nav>
              <div className='overflow-hidden w-full h-full p-2 flex flex-col items-center'>
                <div className="overflow-hidden w-full h-[95%] flex">
                  {children}
                </div >
                <div className="w-full sm:w-[80%] h-max">
                  <form ref={formRef} className='flex border mb-4 p-2 rounded-md items-center'>
                    <Textarea
                      ref={inputRef}
                      onKeyDown={handleKeyDown}
                      className='grow border-0 w-[80%] focus-visible:ring-0 max-h-[200px]'
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                      onClick={handleSend}
                      type="submit"
                      disabled={!input}
                      className='p-2 h-fit mr-2'
                    >
                      <IoMdArrowUp fontSize='12px' />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
