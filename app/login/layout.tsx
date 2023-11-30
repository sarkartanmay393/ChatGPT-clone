interface LoginLayoutProps {
  children: React.ReactNode
}

export default async function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className='w-[full] h-full flex flex-col items-center justify-center'>
      {children}
    </div >
  );
}
