import { cookies } from 'next/headers'

export default async function Index() {
  const cookieStore = cookies()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      
    </div>
  )
}
