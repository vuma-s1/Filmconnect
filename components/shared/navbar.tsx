"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Search, 
  MessageCircle, 
  Briefcase, 
  Users, 
  Home, 
  Film,
  Camera,
  Settings,
  LogIn,
  UserPlus,
  Crown,
  Sparkles,
  TrendingUp,
  BookOpen,
  MapPin
} from "lucide-react";
import { NotificationsDropdown } from "./notifications-dropdown";
import { SearchDropdown } from "./search-dropdown";
import { MobileMenu } from "./mobile-menu";
import { UserMenu } from "./user-menu";
import { MobileLeftSidebar } from "./mobile-left-sidebar";
import { MobileRightSidebar } from "./mobile-right-sidebar";


export function Navbar() {
  const pathname = usePathname();

  // Don't show navbar on auth pages and onboarding
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/onboarding';
  
  // Check if user is authenticated
  const isAuthenticated = typeof window !== 'undefined' ? localStorage.getItem('isAuthenticated') === 'true' : false;
  const hasCompletedOnboarding = typeof window !== 'undefined' ? localStorage.getItem('onboardingCompleted') === 'true' : false;
  
  // Show navbar if authenticated and completed onboarding, or if not on auth pages
  if (isAuthPage && (!isAuthenticated || !hasCompletedOnboarding)) {
    return null;
  }

  const navItems = [
    { href: "/", label: "Home", icon: Home, badge: null },
    { href: "/news", label: "News", icon: Sparkles, badge: null },
    { href: "/ai-studio", label: "AI Studio", icon: Sparkles, badge: "New" },
    { href: "/reccee", label: "Reccee", icon: MapPin, badge: "New" },
    { href: "/jobs", label: "Jobs", icon: Briefcase, badge: null },
    { href: "/funding", label: "Funding", icon: TrendingUp, badge: null },
    { href: "/learning", label: "Learn", icon: BookOpen, badge: "New" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-12 sm:h-14 lg:h-16 items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <MobileMenu />
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative flex items-center">
                <img 
                  src="/24_crafts_logo.png" 
                  alt="24 Crafts" 
                  className="h-12 w-auto sm:h-16 object-contain group-hover:scale-105 max-w-[140px] sm:max-w-[180px]"
                  onError={(e) => {
                    console.error('Logo failed to load:', e);
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <SearchDropdown />
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "primary" : "ghost"}
                    size="sm"
                    className={`relative flex items-center space-x-2 ${
                      isActive 
                        ? "shadow-md !text-black" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <Icon 
                      className={`h-4 w-4 ${isActive ? "!text-black" : ""}`}
                      style={isActive ? { color: 'black' } : {}}
                    />
                    <span 
                      className={isActive ? "!text-black" : ""}
                      style={isActive ? { color: 'black' } : {}}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge 
                        variant={item.badge === "New" ? "default" : 
                               item.badge === "Live" ? "destructive" : "secondary"}
                        className={`absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full p-0 text-[8px] font-semibold flex items-center justify-center shadow-sm ${
                          item.badge === "New" 
                            ? "bg-primary text-black" 
                            : item.badge === "Live" 
                            ? "bg-red-500 text-white animate-pulse" 
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            {/* Mobile Sidebar Buttons - Only visible on mobile */}
            <div className="flex items-center space-x-1 md:hidden">
              <MobileLeftSidebar />
              <MobileRightSidebar />
            </div>

            {/* Premium Badge */}
            <div className="hidden md:flex">
              <Badge className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold border-2 border-primary/20 shadow-lg">
                <Crown className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            </div>

            {/* Notifications */}
            <div className="hidden sm:block">
              <NotificationsDropdown />
            </div>

            {/* Profile */}
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}