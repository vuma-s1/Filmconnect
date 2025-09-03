"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Home, 
  Users, 
  Briefcase, 
  Film, 
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  DollarSign,
  Newspaper,
  BookOpen,
  Sparkles,
  MapPin
} from "lucide-react";
import { SearchDropdown } from "./search-dropdown";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/news", label: "News", icon: Newspaper },
    { href: "/ai-studio", label: "AI Studio", icon: Sparkles },
    { href: "/reccee", label: "Reccee", icon: MapPin },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/funding", label: "Funding", icon: DollarSign },
    { href: "/learning", label: "Learn", icon: BookOpen },
  ];

  const profileItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/logout", label: "Logout", icon: LogOut },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden p-2 h-9 w-9">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 sm:w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 border-b">
            <Avatar className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback className="text-xs sm:text-xs lg:text-sm">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm sm:text-sm lg:text-base">John Doe</p>
              <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground">Film Director</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-3 sm:p-4 border-b">
            <SearchDropdown />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 sm:p-4 space-y-1">
            <div className="space-y-1">
              <h3 className="text-xs sm:text-xs lg:text-sm font-medium text-muted-foreground mb-2 sm:mb-2.5 lg:mb-3">Navigation</h3>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full justify-start h-8 sm:h-8 lg:h-9 text-xs sm:text-xs lg:text-sm"
                    >
                      <Icon className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 mr-2 sm:mr-2 lg:mr-3" />
                      {item.label}
                      {item.label === "Learn" && (
                        <Badge className="ml-auto h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 rounded-full p-0 text-[8px] sm:text-[8px] lg:text-xs bg-primary text-black">
                          New
                        </Badge>
                      )}
                      {item.label === "AI Studio" && (
                        <Badge className="ml-auto h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 rounded-full p-0 text-[8px] sm:text-[8px] lg:text-xs bg-primary text-black">
                          New
                        </Badge>
                      )}
                      {item.label === "Reccee" && (
                        <Badge className="ml-auto h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 rounded-full p-0 text-[8px] sm:text-[8px] lg:text-xs bg-primary text-black">
                          New
                        </Badge>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-1 pt-3 sm:pt-3.5 lg:pt-4 border-t">
              <h3 className="text-xs sm:text-xs lg:text-sm font-medium text-muted-foreground mb-2 sm:mb-2.5 lg:mb-3">Account</h3>
              {profileItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start h-8 sm:h-8 lg:h-9 text-xs sm:text-xs lg:text-sm">
                      <Icon className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 mr-2 sm:mr-2 lg:mr-3" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t">
            <div className="flex items-center justify-between text-xs sm:text-xs lg:text-sm text-muted-foreground">
              <span>24 Crafts v1.0</span>
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
