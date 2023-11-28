'use client'

import React from 'react';
import { Button } from '@/components/ui/button';

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


export default function Sidebar() {
  const [showMenu, setShowMenu] = React.useState(true);
  const handlMenu = () => {
    // setShowMenu(!showMenu)
  }

  return (
    <div className='max-w-[20%] h-full w-[20%] flex '>
      <div className='w-full h-full flex flex-col border rounded-md p-2'>
        <Button className='w-full flex justify-between items-center ' variant='outline'>
          <p>New Chat</p>
          <FaRegEdit />
        </Button>
      </div>
      <div className='p-0 m-0 w-min h-full flex flex-col justify-center'>
        <Button className='bg-transparent hover:bg-transparent ' onClick={handlMenu}>
          {showMenu ? <MdOutlineArrowForwardIos fill='white' color='primary' />
            : <MdOutlineArrowBackIosNew fill='white' color='primary' />}
        </Button>
      </div>
    </div>
  );
}
