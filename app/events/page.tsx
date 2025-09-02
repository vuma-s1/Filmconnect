"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EventsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/learning');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 flex items-center justify-center">
          <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to Learning...</p>
      </div>
    </div>
  );
};

export default EventsPage;
