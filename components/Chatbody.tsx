"use client"

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

import { IoMdArrowUp } from "react-icons/io";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Message } from "@/utils/types";
import { useEnterSubmit } from "@/utils/hooks/use-enter-submit";
import { Textarea } from "./ui/textarea";

const Suggestions = [{
  text: "Generate Project Idea for becoming ultimate engineer",
  breaker: 22
}, {
  text: "Generate Project Idea for becoming ultimate engineer",
  breaker: 22
}, {
  text: "Generate Project Idea for becoming ultimate engineer",
  breaker: 22
}, {
  text: "Generate Project Idea for becoming ultimate engineer",
  breaker: 22
},];

export default function ChatBody() {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [model, setModel] = React.useState('GPT 3.5');
  const [welcomeView, setWelcomeView] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([]);
  const { formRef, onKeyDown } = useEnterSubmit()


  const handleSend = () => {
    setMessages((p) => [...p, {
      id: 'asdf',
      text: message,
      type: 'user'
    }]);
    setMessage('');
  }

  React.useEffect(() => {
    if (messages.length > 0) {
      setWelcomeView(false)
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  const useSuggestion = (text: string) => {
    setMessage(text);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className='w-[80%] h-full flex flex-col bg-background p-2 '>
      <nav className='h-max flex gap-2'>
        {/* <Button variant='outline'>
          <FaRegEdit />
        </Button> */}
        <Select value={model} onValueChange={(e) => setModel(e)}>
          <SelectTrigger className="w-[180px]">
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
          {!welcomeView ? (
            <ScrollArea className="w-full h-full flex justify-items-center">
              <div id="msgscrollview" className='w-full h-full grid grid-cols-1 justify-items-center gap-10'>
                {messages.map((m, i) => (
                  <div key={i} className='w-[75%] h-fit p-2 px-3 flex gap-2'>
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
          ) : (
            <div className="w-full h-full flex flex-col items-center">
              <div className='w-[75%] h-full flex flex-col items-center justify-center gap-2'>
                <div className="bg-white rounded-full p-2">
                  <svg color="black" width="41" height="41" fill="black" xmlns="http://www.w3.org/2000/svg" className="prefix__h-2/3 prefix__w-2/3"><text
                    x="-9999" y="-9999">ChatGPT</text>
                    <path
                      d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835A9.964 9.964 0 0018.306.5a10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.01L7.04 23.856a7.504 7.504 0 01-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.113-.01l8.052 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.65-1.132zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z"
                      fill="currentColor" />
                  </svg>
                </div>
                <h4 className="text-xl ">How Can I Help You?</h4>
              </div>
              <div className='w-[75%] grid grid-cols-2 gap-2 mb-4'>
                {Suggestions.map((s, i) => (
                  <Card onClick={() => { useSuggestion(s.text) }} key={i} className='p-2 px-3 cursor-pointer font-normal hover:bg-secondary '>
                    <h3 className=''>{s.text.substring(0, s.breaker)}</h3>
                    <p className='text-gray-600'>{s.text.substring(s.breaker, s.text.length)}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div >
        <div className="w-[80%] h-max">
          <form ref={formRef} className='flex border mb-4 p-2 rounded-md items-center'>
            <Textarea onKeyDown={onKeyDown} ref={inputRef} rows={1} className='grow border-0 w-[80%] focus-visible:ring-0 max-h-[200px]' value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={handleSend} type="submit" disabled={!message} className='p-2 h-fit mr-2'>
              <IoMdArrowUp fontSize='12px' />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}



const f = `and ensure that it is used appropriately in client - specific modules.It's possible that it was mistakenly added to a server module, leading to the reported error.

3. ** Verify Server and Client - Side Code Separation:**
  Confirm that your server - side and client - side code is appropriately separated.Server Components and Client Components often have different capabilities and restrictions, and code intended for one should not be mixed with the other.

4. ** Check Environment Support:**
  Ensure that the environment where you are running the code supports the use of.Some environments, especially older ones, may not fully support these features.

5. ** Update Dependencies:**
  Ensure that your dependencies and tools are up - to - date.Sometimes, issues like this can be caused by outdated libraries or frameworks.

6. ** Consult Documentation or Community Forums:**
  Check the documentation of the specific framework or library you're using for any information about using  in Client Components. Additionally, explore community forums or discussions related to the framework to see if others have encountered similar issues and find solutions.

Without knowing the specific context of your code and the framework or environment you're working in, these are general guidelines. If the issue persists or if you can provide more details, I may be able to offer more targeted assistance.`

const c = `

Features

Customers
Changelog
Help
Pricing
Dashboard
Company News
September 22, 2022
Introducing Dub
Meet Dub – an open-source link-management tool with built-in analytics and free custom domains.

Introducing Dub
Introducing Dub – an open-source link-management tool with built-in analytics and free custom domains.

steventey
Steven Tey
@steventey
·

Sep 22
Link to tweet
Introducing my new side project: dub.sh

It's an open-source link-shortener SaaS with built-in analytics + free custom domains 🚀

Built with ▲ @Vercel Edge Functions + @Upstash Redis
1.7K

84

Analytics that matter
On top of fast redirects, a link management tool also needs data visualization to help marketing teams understand the performance of their links.

Dub provides you with powerful analytics for your short links, including geolocation, device, browser, and referrer information.

Analytics page for a short link on Dub

Analytics page for a short link on Dub
Use your own custom domain for free
Dub also allows you to use your own custom domain for free. This is especially useful for marketing teams that want to use their own branded domain for short links.

Use your own custom domain on Dub for better brand recognition

Use your own custom domain on Dub for better brand recognition
Learn more about how to set up your own custom domain on Dub.

Fully open-source and self-hostable
Dub is also fully open-source, released under the AGPLv3 license.

This means you can clone, modify, and even deploy your own instance of Dub, as long as you open-source it.

steven-tey/dub

An open-source link management tool for modern marketing teams to create, share, and track short links.

13.1K

Stars

1.2K

Forks

Here's a link to the GitHub repository: dub.sh/github

Written by

Steven Tey
Steven Tey

@steventey

Read more

Introducing Dub.co – the new face of Dub

We're thrilled to announce our rebrand. Dub.sh is now Dub.co.

August 21, 2023

Dub Migration Assistants

We've added migration assistants for Bitly and Short.io to help you migrate your links to Dub in a few clicks.

August 4, 2023

Supercharge
your marketing efforts
See why Dub is the link management tool of choice for modern marketing teams

Try Dub For Free

Dub.co Logo
Giving modern marketing teams superpowers with short links that stand out.

Twitter
Github
LinkedIn
Features
Advanced Analytics
Branded Links
QR Codes
Personalization
Team Collaboration
API
Product
Blog
Changelog
Customer Stories
Help Center
Pricing
Legal
Privacy
Terms
Abuse
Tools
ChatGPT Link Shortener
Amazon Link Shortener
Spotify Link Shortener
Metatags API
QR Code Generator
Link Inspector
© 2023 Dub.co

`

const a: Message = {
  id: 'ss',
  text: c,
  type: 'ai',
};
const b: Message = {
  id: 's',
  text: f,
  type: 'user',
}


const d = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 0.5rem;
    
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  .light {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`