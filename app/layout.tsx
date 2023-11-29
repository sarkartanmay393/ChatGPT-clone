import { GeistSans } from 'geist/font/sans';
import './globals.css';

import Sidebar from '@/components/Sidebar';
import ModelSelect from '@/components/ModelSelect';
import InputForm from '@/components/InputForm';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'ChadGPT',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground overflow-hidden">
        <StoreProvider>
          <main className="h-screen w-screen">
            <div className="p-2 w-full h-full flex items-center justify-center">
              <div className='max-w-[20%] h-full w-[20%] hidden sm:flex'>
                <Sidebar />
              </div>
              <div className='w-full sm:w-[80%] h-full flex flex-col bg-background sm:p-2 '>
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
          </main>
        </StoreProvider>
      </body>
    </html>
  )
}
