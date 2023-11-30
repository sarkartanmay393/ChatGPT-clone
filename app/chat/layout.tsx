import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import Sidebar from '@/components/Sidebar';
import ModelSelect from '@/components/ModelSelect';
import InputForm from '@/components/InputForm';
import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: 'Chat | ChadGPT'
}

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: ChatLayoutProps) {
  const cookieStore = cookies()
  const superbase = createClient(cookieStore)
  const user = await superbase.auth.getUser();
  if (!user.data.user) {
    redirect('/login');
  }

  return (
    <div className={`p-2 w-full h-full flex items-center justify-center`} >
      <div className='max-w-[20%] h-full w-[20%] hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='w-full sm:w-[80%] h-full flex flex-col sm:p-2 '>
        <nav className='h-max flex gap-2'>
          <ModelSelect />
        </nav>
        <div className='overflow-hidden w-full h-full p-2 flex flex-col items-center'>
          <div className="overflow-hidden w-full h-[95%] flex">
            {children}
          </div >
          <div className="w-full sm:w-[80%] h-max">
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  )
}
