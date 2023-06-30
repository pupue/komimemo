'use client';
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default async function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="text-3xl">
      <Form />
    </div>
  );
}
