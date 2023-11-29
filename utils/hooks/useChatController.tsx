'use client'

import React, { useState } from 'react'
import { Message } from '../types';

export function useChatController(): {
  messages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  useSuggestion: (text: string) => void,
} {
  const [messages, setMessages] = useState<Message[]>([]);

  const useSuggestion = (text: string) => {
    console.log("sugg");
  }

  return { messages, setMessages, useSuggestion };
}

