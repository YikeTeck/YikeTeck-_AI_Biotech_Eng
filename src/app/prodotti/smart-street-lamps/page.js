"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SmartStreetLampsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/prodotti/lampade-stradali-intelligenti');
  }, [router]);
  
  return <p>Redirecting...</p>;
}