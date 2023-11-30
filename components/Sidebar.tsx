'use client'

import React from 'react';
import { Button } from '@/components/ui/button';

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IChat } from '@/utils/types';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';


interface SidebarProps {
  chatList: IChat[],
}
export default function Sidebar({ chatList }: SidebarProps) {
  const { slug } = useParams();
  const [showMenu, setShowMenu] = React.useState(true);
  const handlMenu = () => { }
  const router = useRouter();

  const handleNewChat = () => {
    (async () => {
      const resp = await fetch('/api/chat', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      console.log(data)
      if (data) {
        router.push('/chat/' + data.id);
      }
    })();
  }

  return (
    <React.Fragment>
      <div className='w-full h-full flex flex-col border rounded-md p-2 gap-2'>
        <Button onClick={handleNewChat} className='w-full flex justify-between items-center ' variant='outline'>
          <p>New Chat</p>
          <FaRegEdit />
        </Button>
        {chatList.map((cl, i) => (
          <Link key={i} href={'/chat/' + cl.id}>
            <Button className={`w-full flex justify-between items-center ${cl.id == slug ? 'bg-gray-300' : ''}`} variant='outline'>
              <p>{cl.title}</p>
            </Button>
          </Link>
        ))}
      </div>
      <div className='p-0 m-0 w-min h-full flex flex-col justify-center'>
        <Button className='bg-transparent hover:bg-transparent ' onClick={handlMenu}>
          {showMenu ? <MdOutlineArrowForwardIos fill='white' color='primary' />
            : <MdOutlineArrowBackIosNew fill='white' color='primary' />}
        </Button>
      </div>
    </React.Fragment>
  );
}
