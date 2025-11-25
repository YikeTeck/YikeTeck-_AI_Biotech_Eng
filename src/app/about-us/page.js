"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/chi-siamo');
  }, [router]);
  
  return <p>Redirecting...</p>;
}