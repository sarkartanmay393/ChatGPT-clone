'use client'

import { useEffect, useRef, useState } from 'react'
import { Message } from '../types';

export function useChatController(): {
  model: string,
  setModel: React.Dispatch<React.SetStateAction<string>>,
  input: string,
  messages: Message[],
  setInput: React.Dispatch<React.SetStateAction<string>>,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  useSuggestion: (text: string) => void,
  handleSend: () => void,
  messagesEndRef: React.RefObject<HTMLDivElement>,
  inputRef: React.RefObject<HTMLTextAreaElement>,
} {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [model, setModel] = useState('GPT 3.5');

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    setMessages((p) => [...p, {
      id: Math.random().toString(),
      text: input,
      type: 'user'
    }]);
    setInput('');
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  const useSuggestion = (text: string) => {
    setInput(text);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  return { model, setModel, input, setInput, messages, setMessages, useSuggestion, handleSend, inputRef, messagesEndRef };
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



