"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Plus, 
  Briefcase, 
  Users, 
  Calendar,
  Settings,
  LogOut
} from "lucide-react";
import { mockUsers } from '@/data/mock-data';

export function MobileLeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for recent activity
  const recentActivity = [
    {
      id: '1',
      user: mockUsers[1],
      action: 'liked your post',
      time: '2 hours ago'
    },
    {
      id: '2',
      user: mockUsers[2],
      action: 'commented on your post',
      time: '4 hours ago'
    },
    {
      id: '3',
      user: mockUsers[3],
      action: 'shared your post',
      time: '1 day ago'
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden p-2 h-9 w-9">
          <User className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 sm:w-80 overflow-y-auto p-0">
        <div className="flex flex-col h-full">
          {/* Profile Card */}
          <Card className="border-0 shadow-none rounded-none">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="text-center">
                <Avatar className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <AvatarImage src={mockUsers[0].profilePictureUrl} alt="Your profile" />
                  <AvatarFallback className="text-lg sm:text-xl lg:text-2xl">JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">John Doe</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-2 sm:mb-3">Film Director</p>
                <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-xs sm:text-sm lg:text-base">
                  <div className="flex items-center justify-between">
                    <span>Profile Views</span>
                    <span className="font-medium">1,240</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Connections</span>
                    <span className="font-medium">847</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-none rounded-none">
            <CardHeader className="pb-2 pt-0 px-3 sm:px-4 lg:px-6">
              <CardTitle className="text-xs sm:text-sm lg:text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Create Post
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Post a Job
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Find Connections
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Create Event
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-none rounded-none">
            <CardHeader className="pb-2 pt-0 px-3 sm:px-4 lg:px-6">
              <CardTitle className="text-xs sm:text-sm lg:text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
              <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-2 sm:space-x-2.5 lg:space-x-3">
                    <Avatar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8">
                      <AvatarImage src={activity.user.profilePictureUrl} alt={activity.user.name} />
                      <AvatarFallback className="text-xs sm:text-xs lg:text-sm">{activity.user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-xs lg:text-sm leading-tight">
                        <span className="font-medium">{activity.user.name}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="border-0 shadow-none rounded-none mt-auto">
            <CardHeader className="pb-2 pt-0 px-3 sm:px-4 lg:px-6">
              <CardTitle className="text-xs sm:text-sm lg:text-base">Account</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base">
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start h-8 sm:h-9 lg:h-10 text-xs sm:text-sm lg:text-base text-red-600 hover:text-red-700">
                  <LogOut className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
