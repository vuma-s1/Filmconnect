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
  Sparkles
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
  if (isAuthPage) {
    return null;
  }

  const navItems = [
    { href: "/", label: "Home", icon: Home, badge: null },
    { href: "/network", label: "Network", icon: Users, badge: "New" },
    { href: "/jobs", label: "Jobs", icon: Briefcase, badge: null },
    { href: "/messaging", label: "Messages", icon: MessageCircle, badge: "3" },
    { href: "/events", label: "Events", icon: Film, badge: "Live" },
    { href: "/learning", label: "Learn", icon: Camera, badge: null },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <MobileMenu />
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Film className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  24 Crafts
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Cinema Network
                </span>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
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
                    className={`relative flex items-center space-x-2 transition-all duration-200 ${
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
          <div className="flex items-center space-x-3">
            {/* Mobile Sidebar Buttons - Only visible on mobile */}
            <div className="flex items-center space-x-2 md:hidden">
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
            <NotificationsDropdown />

            {/* Profile */}
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}