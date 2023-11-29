'use client'

import { useRouter } from "next/navigation";

export default function NoSlugChat() {
  const router = useRouter();
  router.push('/');
  return;
}