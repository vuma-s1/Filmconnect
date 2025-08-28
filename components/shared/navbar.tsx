"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, MessageCircle, Briefcase, Users, Home } from "lucide-react";
import { NotificationsDropdown } from "./notifications-dropdown";
import { SearchDropdown } from "./search-dropdown";
import { MobileMenu } from "./mobile-menu";
import { UserMenu } from "./user-menu";
import { MobileLeftSidebar } from "./mobile-left-sidebar";
import { MobileRightSidebar } from "./mobile-right-sidebar";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/network", label: "Network", icon: Users },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/messaging", label: "Messaging", icon: MessageCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <MobileMenu />
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-xl">FilmLinked</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchDropdown />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "primary" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Sidebar Buttons - Only visible on mobile */}
            <div className="flex items-center space-x-2 md:hidden">
              <MobileLeftSidebar />
              <MobileRightSidebar />
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