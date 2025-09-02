"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  UserPlus, 
  ChevronRight,
  Users,
  Calendar,
  Hash,
  BookOpen,
  Sparkles
} from "lucide-react";
import { mockUsers } from '@/data/mock-data';

export function MobileRightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for trending topics
  const trendingTopics = [
    { id: '1', topic: 'filmmaking', posts: 1240, trending: 'up' as const },
    { id: '2', topic: 'cinematography', posts: 890, trending: 'up' as const },
    { id: '3', topic: 'directing', posts: 567, trending: 'down' as const },
    { id: '4', topic: 'screenwriting', posts: 432, trending: 'up' as const },
    { id: '5', topic: 'postproduction', posts: 321, trending: 'up' as const }
  ];

  // Mock data for suggested connections
  const suggestedConnections = [
    { id: '1', name: 'Sarah Johnson', role: 'Cinematographer', profilePictureUrl: mockUsers[1].profilePictureUrl },
    { id: '2', name: 'Michael Chen', role: 'Film Editor', profilePictureUrl: mockUsers[2].profilePictureUrl },
    { id: '3', name: 'Emma Davis', role: 'Production Designer', profilePictureUrl: mockUsers[3].profilePictureUrl },
    { id: '4', name: 'Alex Rodriguez', role: 'Sound Designer', profilePictureUrl: mockUsers[0].profilePictureUrl }
  ];

  // Mock data for featured courses
  const featuredCourses = [
    { id: '1', title: 'Advanced Cinematography', instructor: 'Roger Deakins', students: 1247 },
    { id: '2', title: 'Screenwriting Fundamentals', instructor: 'Aaron Sorkin', students: 2156 },
    { id: '3', title: 'Film Editing Masterclass', instructor: 'Thelma Schoonmaker', students: 1893 }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Hash className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto">
        <div className="flex flex-col h-full space-y-6">
          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Hash className="h-4 w-4 mr-2" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic) => (
                <div key={topic.id} className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">#{topic.topic}</p>
                    <p className="text-xs text-muted-foreground">{topic.posts} posts</p>
                  </div>
                  <TrendingUp className={`h-4 w-4 ${topic.trending === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Suggested Connections */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Users className="h-4 w-4 mr-2" />
                People You May Know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestedConnections.map((user) => (
                <div key={user.id} className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.profilePictureUrl} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <UserPlus className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                See all suggestions
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Featured Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Featured Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {featuredCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{course.title}</p>
                    <p className="text-xs text-muted-foreground">{course.instructor} • {course.students} students</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enroll
                  </Button>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                View all courses
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* AI Studio Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Studio Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">AI Agents Used</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Projects Processed</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Success Rate</span>
                <span className="font-medium">98%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
