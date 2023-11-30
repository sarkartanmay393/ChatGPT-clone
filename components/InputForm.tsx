'use client'

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

import { useEnterSubmit } from "@/utils/hooks/useEnterSubmit";
import { IoMdArrowUp } from "react-icons/io";
import { useParams } from "next/navigation";

const InputForm = () => {
  const [input, setInput] = useState('');
  const { handleKeyDown } = useEnterSubmit();

  const { slug } = useParams();

  const handleSend = () => {
    if (!slug) {
      (async () => {
        const resp = await fetch('/api/chat', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await resp.json();
        console.log(data)
      })();
    } else {
      (async () => {
        const js = JSON.stringify({
          text: input,
          chat_id: slug,
          type: 'user',
        });
        const resp = await fetch('/api/chat/' + slug, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: js,
        });
        const data = await resp.json();
        console.log(data)
      })();
    }
  }

  return (
    <div className='flex border mb-4 p-2 rounded-md items-center'>
      <Textarea
        name="input"
        onKeyDown={handleKeyDown}
        className='grow border-0 w-[80%] focus-visible:ring-0 max-h-[200px]'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={handleSend}
        disabled={!input}
        className='p-2 h-fit mr-2'
      >
        <IoMdArrowUp fontSize='12px' />
      </Button>
    </div>
  );
}

export default InputForm;