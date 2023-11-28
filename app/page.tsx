import React from 'react';
import { Button } from '@/components/ui/button';

import { FaRegEdit } from "react-icons/fa";
import Sidebar from '@/components/Sidebar';
import { Input } from '@/components/ui/input';

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import { Card } from '@/components/ui/card';
import GPTLogo from './assets/chatgpt.svg';
import Image from 'next/image';
import ChatBody from '@/components/Chatbody';


export default async function Home() {

  return (
    <div className="p-2 w-full h-full flex items-center justify-center">
      <Sidebar />
      <ChatBody />
    </div>
  );
}
