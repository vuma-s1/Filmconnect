"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserMenu() {
  const pathname = usePathname();
  
  // Mock authentication state - you can replace this with your actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = pathname === '/login' || pathname === '/onboarding' ? false : (localStorage.getItem('isAuthenticated') === 'true' && localStorage.getItem('onboardingCompleted') === 'true');
      setIsAuthenticated(auth);
    }
  }, [pathname]);

  // Don't show auth buttons on auth pages and onboarding
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/onboarding';

  // If user is not authenticated, show sign in/sign up buttons
  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-black" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }

  // If user is authenticated, show user menu
  return (
    <div className="flex items-center">
      {/* Profile Icon - Clickable to go directly to profile */}
      <Link href="/profile" className="group">
        <div className="relative">
          <Avatar className="h-8 w-8 hover:ring-2 hover:ring-primary/30 cursor-pointer group-hover:scale-105">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback className="bg-primary/20 text-primary font-semibold">JD</AvatarFallback>
          </Avatar>
          {/* Hover indicator */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-black text-[8px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 font-medium shadow-sm">
            Profile
          </div>
        </div>
      </Link>
    </div>
  );
}
