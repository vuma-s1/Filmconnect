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
  MessageCircle, 
  Bell,
  User,
  Settings,
  LogOut,
  Search
} from "lucide-react";
import { SearchDropdown } from "./search-dropdown";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/network", label: "Network", icon: Users },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/messaging", label: "Messaging", icon: MessageCircle },
  ];

  const profileItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/logout", label: "Logout", icon: LogOut },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center space-x-3 p-4 border-b">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">Film Director</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b">
            <SearchDropdown />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Navigation</h3>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                      {item.label === "Messaging" && (
                        <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">
                          3
                        </Badge>
                      )}
                      {item.label === "Network" && (
                        <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">
                          5
                        </Badge>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-1 pt-4 border-t">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Account</h3>
              {profileItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>FilmLinked v1.0</span>
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
