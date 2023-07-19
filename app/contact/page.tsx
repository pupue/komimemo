'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default async function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return <div className="text-3xl"></div>;
}
