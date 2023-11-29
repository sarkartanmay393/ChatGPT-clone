'use client'

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { v4 as uuidv4 } from 'uuid';

import { useEnterSubmit } from "@/utils/hooks/useEnterSubmit";
import { IoMdArrowUp } from "react-icons/io";
import { useStoreActions, useStoreState } from "@/utils/store/typedStoreHooks";
import { useParams, useRouter } from "next/navigation";

const InputForm = () => {
  const { input } = useStoreState((state) => state);
  const { setInput, setOneMessage } = useStoreActions((action) => action);
  const { handleKeyDown } = useEnterSubmit();

  const router = useRouter();
  const { slug } = useParams();

  const handleSend = () => {
    if (!slug) {
      const chatId = uuidv4();
      router.push('/chat/' + chatId)
    }
    const time = new Date().getTime().toString();
    setOneMessage({
      id: uuidv4(),
      text: input,
      type: 'user',
      sentOn: time
    });
    setInput('');
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