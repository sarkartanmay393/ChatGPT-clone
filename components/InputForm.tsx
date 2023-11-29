'use client'

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

import { useChatController } from "@/utils/hooks/useChatController";
import { useEnterSubmit } from "@/utils/hooks/useEnterSubmit";
import { IoMdArrowUp } from "react-icons/io";

const InputForm = () => {
  const { formRef, handleKeyDown } = useEnterSubmit();
  const { input, setInput, inputRef, handleSend } = useChatController();

  return (
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
  );
}

export default InputForm;