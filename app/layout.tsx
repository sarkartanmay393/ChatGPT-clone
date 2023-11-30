import { GeistSans } from 'geist/font/sans';
import './globals.css';

import StoreProvider from './StoreProvider';

import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: 'ChadGPT',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = cookies()
  const superbase = createClient(cookieStore)
  const user = await superbase.auth.getUser().then((user) => {
    if (!user.data.user?.email) {
      // redirect('/login');
    }
  });


  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground overflow-hidden">
        <StoreProvider>
          <main className="h-screen w-screen">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html >
  )
}
