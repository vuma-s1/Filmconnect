"use client";

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import ProfileStrength from '@/components/features/profile/profile-strength';
import { mockUsers, mockCredits, mockProjectReels } from '@/data/mock-data';
import { User, Credit, ProjectReel } from '@/lib/types';


import { 
  MapPin, 
  MessageCircle, 
  UserPlus, 
  Users, 
  Calendar,
  Play,
  ExternalLink,
  CheckCircle,
  Star,
  Plus,
  Camera,
  Share
} from 'lucide-react';

interface ProfilePageProps {
  params: {
    username: string;
  };
}

const ProfilePage = ({ params }: ProfilePageProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userCredits, setUserCredits] = useState<Credit[]>([]);
  const [userReels, setUserReels] = useState<ProjectReel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReel, setSelectedReel] = useState<ProjectReel | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [showContactInfo, setShowContactInfo] = useState(false);

  const currentUserUsername = 'raviteja'; // Mock current user

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundUser = mockUsers.find(u => u.username === params.username);
      if (!foundUser) {
        notFound();
      }
      setUser(foundUser!);
      setUserCredits(mockCredits);
      setUserReels(mockProjectReels);
      setIsLoading(false);
    }, 1000);
  }, [params.username]);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!user) {
    return notFound();
  }

  const isOwnProfile = user.username === currentUserUsername;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <img
                  src={user.profilePictureUrl}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                {user.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{user.role}</Badge>
                      {user.isVerified && (
                        <Badge variant="verified">Verified Professional</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    {!isOwnProfile && (
                      <>
                        <Button
                          onClick={() => setIsConnected(!isConnected)}
                          variant={isConnected ? "secondary" : "primary"}
                        >
                          <UserPlus className="h-4 w-4 mr-2" />
                          {isConnected ? 'Connected' : 'Connect'}
                        </Button>
                        <Button variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{user.connections} connections</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{user.experience} experience</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="credits">Credits</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Skills & Expertise</h3>
                      {isOwnProfile && (
                        <Button variant="ghost" size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Skill
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-black cursor-pointer">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Professional Summary</h3>
                      {isOwnProfile && (
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {user.bio}
                    </p>
                    
                    {/* Experience Timeline */}
                    <div className="mt-6">
                      <h4 className="font-medium mb-4">Experience</h4>
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <h5 className="font-medium">Lead Actor</h5>
                            <p className="text-sm text-muted-foreground">Mythri Movie Makers • 2020 - Present</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Leading roles in major Telugu films including action and comedy genres.
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                          <div className="flex-1">
                            <h5 className="font-medium">Supporting Actor</h5>
                            <p className="text-sm text-muted-foreground">Various Productions • 2015 - 2020</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Character roles in independent and commercial films.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    {(isOwnProfile || showContactInfo) && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-3">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-muted-foreground">Email:</span>
                            <span>{user.email}</span>
                          </div>
                          {user.phone && (
                            <div className="flex items-center space-x-2">
                              <span className="text-muted-foreground">Phone:</span>
                              <span>{user.phone}</span>
                            </div>
                          )}
                          {user.website && (
                            <div className="flex items-center space-x-2">
                              <span className="text-muted-foreground">Website:</span>
                              <a href={user.website} className="text-primary hover:underline">
                                {user.website}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {!isOwnProfile && !showContactInfo && (
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setShowContactInfo(true)}
                      >
                        View Contact Info
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                {isOwnProfile && (
                  <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-8 text-center">
                      <Plus className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h4 className="font-medium mb-2">Add New Project</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Showcase your latest work to attract more opportunities
                      </p>
                      <Button>
                        Upload Project
                      </Button>
                    </CardContent>
                  </Card>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userReels.map((reel) => (
                    <Card key={reel.id} className="hover:bg-card/50 transition-colors cursor-pointer">
                      <div 
                        className="relative overflow-hidden rounded-t-lg"
                        onClick={() => setSelectedReel(reel)}
                      >
                        <img
                          src={reel.thumbnailUrl}
                          alt={reel.title}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary">{reel.year}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{reel.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{reel.role}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                          <span>{reel.duration}</span>
                          <span>{reel.views.toLocaleString()} views</span>
                          <span>{reel.likes.toLocaleString()} likes</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{reel.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="credits" className="space-y-6">
                {isOwnProfile && (
                  <Card className="border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <Plus className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-medium mb-2">Add New Credit</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Add your latest film or project credit
                      </p>
                      <Button size="sm">
                        Add Credit
                      </Button>
                    </CardContent>
                  </Card>
                )}
                
                <div className="space-y-4">
                  {userCredits.map((credit) => (
                    <Card key={credit.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={credit.posterUrl || 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'}
                            alt={credit.title}
                            className="w-16 h-24 rounded object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-lg">{credit.title}</h4>
                                <p className="text-muted-foreground">{credit.rolePlayed}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                                  <span>{credit.year}</span>
                                  <span>{credit.genre}</span>
                                  <span>Dir: {credit.director}</span>
                                </div>
                                {credit.budget && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Budget: {credit.budget}
                                    {credit.boxOffice && ` • Box Office: ${credit.boxOffice}`}
                                  </p>
                                )}
                                {credit.awards && credit.awards.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {credit.awards.map(award => (
                                      <Badge key={award} variant="outline" className="text-xs bg-primary/10 text-primary">
                                        🏆 {award}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                {credit.isVerifiedByProduction && (
                                  <Badge variant="secondary" className="flex items-center space-x-1 bg-green-600">
                                    <Star className="h-3 w-3" />
                                    <span>Verified</span>
                                  </Badge>
                                )}
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {isOwnProfile && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Completion</span>
                      <span className="font-medium">{user.profileStrength}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${user.profileStrength}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Quick Actions</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {isOwnProfile ? (
                  <>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Camera className="h-4 w-4 mr-2" />
                      Upload Portfolio
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="h-4 w-4 mr-2" />
                      Request Verification
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share className="h-4 w-4 mr-2" />
                      Share Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Mutual Connections
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Profile Analytics</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="text-muted-foreground mb-1">Profile views</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">156 in the last 30 days</p>
                    <Badge variant="secondary" className="text-green-600">+12%</Badge>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground mb-1">Connection growth</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">+23 new connections</p>
                    <Badge variant="secondary" className="text-green-600">This month</Badge>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground mb-1">Search appearances</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">89 times</p>
                    <Badge variant="secondary" className="text-blue-600">+5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Activity Timeline</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Updated portfolio</p>
                      <p className="text-muted-foreground text-xs">2 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Added new credit: "Agent"</p>
                      <p className="text-muted-foreground text-xs">1 week ago</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Connected with 15 new professionals</p>
                      <p className="text-muted-foreground text-xs">2 weeks ago</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Joined 24 Crafts</p>
                      <p className="text-muted-foreground text-xs">6 months ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedReel} onOpenChange={() => setSelectedReel(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedReel?.title}</DialogTitle>
          </DialogHeader>
          {selectedReel && (
            <div className="aspect-video">
              <iframe
                src={selectedReel.videoUrl}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title={selectedReel.title}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ProfileSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <Skeleton className="w-32 h-32 rounded-full" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default ProfilePage;