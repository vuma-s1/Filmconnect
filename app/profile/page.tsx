"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { 
  User, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Award,
  Globe,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Edit,
  Share2,
  MessageCircle,
  UserPlus,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { mockUsers } from '@/data/mock-data';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState(mockUsers[0]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <BreadcrumbNav className="mb-4 sm:mb-6" />

        {/* Profile Header */}
        <Card className="mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                  <AvatarImage src={user.profilePictureUrl} />
                  <AvatarFallback className="text-2xl sm:text-3xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {user.isVerified && (
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{user.name}</h1>
                    <p className="text-lg sm:text-xl text-primary font-medium mb-2">{user.role}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{user.rating} ({user.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs sm:text-sm">{user.profileStrength}% Complete</Badge>
                      {user.isVerified && (
                        <Badge variant="outline" className="text-xs sm:text-sm">Verified</Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-0">
                    <Button variant="outline" size="sm" className="sm:size-auto">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button size="sm" className="sm:size-auto">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{user.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-4 sm:space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{user.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Email</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Phone</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{user.phone || 'Not provided'}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Website</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{user.website || 'Not provided'}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Location</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{user.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg">Lead Actor</h3>
                        <p className="text-primary font-medium">Mythri Movie Makers</p>
                        <p className="text-sm text-muted-foreground">2020 - Present</p>
                        <p className="text-muted-foreground mt-2">
                          Leading roles in major Telugu films including action and comedy genres.
                        </p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg">Supporting Actor</h3>
                        <p className="text-primary font-medium">Various Production Houses</p>
                        <p className="text-sm text-muted-foreground">2018 - 2020</p>
                        <p className="text-muted-foreground mt-2">
                          Supporting roles in various regional films.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg">Bachelor in Film Studies</h3>
                        <p className="text-primary font-medium">Film Institute</p>
                        <p className="text-sm text-muted-foreground">2015 - 2019</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Views</span>
                  <span className="font-medium">{user.profileViews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Connections</span>
                  <span className="font-medium">{user.connections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Projects</span>
                  <span className="font-medium">{user.projects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reviews</span>
                  <span className="font-medium">{user.reviews}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
