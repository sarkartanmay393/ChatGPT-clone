import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';

import { createClient } from '@/utils/supabase/server';

interface LoginModalProps {
  searchParams: {
    message: string;
  }
}

export default async function Login({ searchParams }: LoginModalProps) {


  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    const getUserFromDB = await supabase.from('users').select('*').eq('id', data.user.id);
    if (getUserFromDB.error) {
      console.log(`Error while getting user data from db: ` + getUserFromDB.error.message);
    }
    if (!getUserFromDB.data) {
      const insertUserToDB = await supabase.from('users').insert({ id: data.user?.id, email: data.user?.email });
      if (insertUserToDB.error) {
        console.log(`Error while insert user data to db: ` + insertUserToDB.error.message);
      }
    }

    return redirect('/chat')
  }
  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    const insertUserToDB = await supabase.from('users').insert({ id: data.user?.id, email: data.user?.email });
    if (insertUserToDB.error) {
      console.log(insertUserToDB.error);
    }

    return redirect('/login?message=Login with your credentials')
  }

  return (
    <form
      className="animate-in flex flex-col justify-center gap-2 p-2"
      action={signIn}
    >
      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
      />
      <label className="text-md" htmlFor="password">
        Password
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 text-white">
        Sign In
      </button>
      <button
        formAction={signUp}
        className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
      >
        Sign Up
      </button>
      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </form>
  )
}
