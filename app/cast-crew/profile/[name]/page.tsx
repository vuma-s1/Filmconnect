'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Star, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  Camera, 
  Mic, 
  Scissors, 
  Music, 
  Palette,
  Play,
  Download,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle,
  Clock,
  Briefcase
} from 'lucide-react';

// Extended profile interface
interface ProfileUser {
  id: string;
  name: string;
  username: string;
  role: string;
  craft: string;
  department?: string;
  location: string;
  profilePictureUrl: string;
  isVerified: boolean;
  bio: string;
  skills: string[];
  experience: string;
  languages: string[];
  rating?: number;
  reviews?: number;
  projects?: number;
  awards?: string[];
  availability: 'Available' | 'Busy' | 'On Project';
  email: string;
  phone?: string;
  website?: string;
  joinedDate: string;
  profileViews: number;
  connections: number;
  filmography: FilmographyItem[];
  portfolio: PortfolioItem[];
  certifications: Certification[];
  endorsements: Endorsement[];
}

interface FilmographyItem {
  id: string;
  title: string;
  year: number;
  role: string;
  type: 'Film' | 'TV Series' | 'Web Series' | 'Commercial';
  posterUrl?: string;
  director?: string;
  productionHouse?: string;
  status: 'Released' | 'Post-Production' | 'Filming' | 'Pre-Production';
  rating?: number;
  awards?: string[];
}

interface PortfolioItem {
  id: string;
  title: string;
  type: 'Video' | 'Image' | 'Audio' | 'Document';
  thumbnailUrl: string;
  url?: string;
  description: string;
  category: string;
  year: number;
  views?: number;
  likes?: number;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: 'Bronze' | 'Silver' | 'Gold';
  description: string;
}

interface Endorsement {
  id: string;
  endorser: {
    name: string;
    role: string;
    profilePictureUrl: string;
  };
  message: string;
  date: string;
  skill: string;
}

// Mock profile data
const mockProfile: ProfileUser = {
  id: 'cc1',
  name: 'Rajesh Kumar',
  username: 'rajeshkumar',
  role: 'Lead Actor',
  craft: 'Acting',
  department: 'Cast',
  location: 'Hyderabad, India',
  profilePictureUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  isVerified: true,
  bio: 'Versatile lead actor with 15+ years of experience in Telugu and Hindi cinema. Known for action-comedy films and method acting. Passionate about bringing authentic characters to life and pushing creative boundaries. I believe in the power of storytelling to connect people across cultures and languages.',
  skills: ['Action', 'Comedy', 'Method Acting', 'Telugu', 'Hindi', 'Dance', 'Martial Arts', 'Voice Acting'],
  experience: '15+ years',
  languages: ['Telugu', 'Hindi', 'English', 'Tamil'],
  rating: 4.8,
  reviews: 156,
  projects: 45,
  awards: ['Filmfare Award for Best Actor', 'SIIMA Award for Best Performance', 'State Award for Excellence'],
  availability: 'Available',
  email: 'rajesh@24crafts.com',
  phone: '+91 98765 43210',
  website: 'https://rajeshkumar.com',
  joinedDate: '2020-03-15',
  profileViews: 12450,
  connections: 2847,
  filmography: [
    {
      id: 'f1',
      title: 'Vikram',
      year: 2022,
      role: 'Lead Actor',
      type: 'Film',
      posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      director: 'Lokesh Kanagaraj',
      productionHouse: 'Raaj Kamal Films International',
      status: 'Released',
      rating: 4.5,
      awards: ['Filmfare Award for Best Actor']
    },
    {
      id: 'f2',
      title: 'Agent',
      year: 2023,
      role: 'Lead Actor',
      type: 'Film',
      posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      director: 'Surender Reddy',
      productionHouse: 'AK Entertainments',
      status: 'Released',
      rating: 4.2
    },
    {
      id: 'f3',
      title: 'Action Hero',
      year: 2024,
      role: 'Lead Actor',
      type: 'Film',
      posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      director: 'Anil Sharma',
      productionHouse: 'Mythri Movie Makers',
      status: 'Post-Production'
    }
  ],
  portfolio: [
    {
      id: 'p1',
      title: 'Action Sequence Showreel',
      type: 'Video',
      thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Compilation of action sequences from various films',
      category: 'Acting',
      year: 2023,
      views: 125000,
      likes: 8900
    },
    {
      id: 'p2',
      title: 'Emotional Scene - Vikram',
      type: 'Video',
      thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Powerful emotional performance in the climax',
      category: 'Acting',
      year: 2022,
      views: 89000,
      likes: 12400
    }
  ],
  certifications: [
    {
      id: 'c1',
      title: 'Method Acting Mastery',
      issuer: 'AI Learning Hub',
      date: '2023-12-15',
      badge: 'Gold',
      description: 'Advanced method acting techniques and character development'
    },
    {
      id: 'c2',
      title: 'Action Choreography',
      issuer: 'Film Industry Guild',
      date: '2023-08-20',
      badge: 'Silver',
      description: 'Professional action sequence choreography and safety protocols'
    }
  ],
  endorsements: [
    {
      id: 'e1',
      endorser: {
        name: 'Lokesh Kanagaraj',
        role: 'Director',
        profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      message: 'Rajesh is an exceptional actor who brings depth and authenticity to every role. His dedication to the craft is unmatched.',
      date: '2023-10-15',
      skill: 'Method Acting'
    },
    {
      id: 'e2',
      endorser: {
        name: 'Ananya Sharma',
        role: 'Director',
        profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      message: 'Working with Rajesh was a pleasure. His professionalism and talent make him a director\'s dream.',
      date: '2023-09-20',
      skill: 'Professionalism'
    }
  ]
};

export default function ProfilePage({ params }: { params: { name: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const profile = mockProfile; // In real app, fetch based on params.name

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Busy': return 'text-red-600 bg-red-100';
      case 'On Project': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Gold': return 'bg-yellow-100 text-yellow-800';
      case 'Silver': return 'bg-gray-100 text-gray-800';
      case 'Bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <Avatar className="h-32 w-32 mx-auto md:mx-0">
                <AvatarImage src={profile.profilePictureUrl} alt={profile.name} />
                <AvatarFallback className="text-2xl">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  {profile.isVerified && (
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4 text-muted-foreground">
                  <span className="text-lg">{profile.role}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{profile.craft}</span>
                  {profile.department && (
                    <>
                      <Separator orientation="vertical" className="h-4" />
                      <span>{profile.department}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {profile.rating} ({profile.reviews} reviews)
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {profile.connections} connections
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  {profile.languages.map((lang, index) => (
                    <Badge key={index} variant="outline">{lang}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Badge 
                    className={`${getAvailabilityColor(profile.availability)} border-0`}
                  >
                    {profile.availability}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio and Info */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="filmography">Filmography</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="awards">Awards</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Experience & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{profile.experience} in the industry</span>
                    </div>
                    {profile.certifications.map((cert) => (
                      <div key={cert.id} className="flex items-start gap-3 p-3 border rounded-lg">
                        <Badge className={getBadgeColor(cert.badge)}>{cert.badge}</Badge>
                        <div>
                          <h4 className="font-medium">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">{cert.date}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Peer Endorsements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile.endorsements.map((endorsement) => (
                      <div key={endorsement.id} className="flex gap-3 p-4 border rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={endorsement.endorser.profilePictureUrl} />
                          <AvatarFallback>{endorsement.endorser.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{endorsement.endorser.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {endorsement.endorser.role}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{endorsement.message}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {endorsement.skill}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{endorsement.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="filmography" className="space-y-4">
                <div className="grid gap-4">
                  {profile.filmography.map((film) => (
                    <Card key={film.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          {film.posterUrl && (
                            <img 
                              src={film.posterUrl} 
                              alt={film.title}
                              className="w-16 h-20 object-cover rounded"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold">{film.title}</h3>
                                <p className="text-sm text-muted-foreground">{film.year} • {film.type}</p>
                              </div>
                              <Badge 
                                variant={film.status === 'Released' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {film.status}
                              </Badge>
                            </div>
                            <p className="text-sm mb-2">{film.role}</p>
                            {film.director && (
                              <p className="text-xs text-muted-foreground">Director: {film.director}</p>
                            )}
                            {film.rating && (
                              <div className="flex items-center gap-1 mt-2">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs">{film.rating}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.portfolio.map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="relative mb-3">
                          <img 
                            src={item.thumbnailUrl} 
                            alt={item.title}
                            className="w-full h-32 object-cover rounded"
                          />
                          {item.type === 'Video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button size="sm" className="rounded-full">
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{item.category} • {item.year}</span>
                          {item.views && (
                            <span>{item.views.toLocaleString()} views</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="awards" className="space-y-4">
                <div className="grid gap-4">
                  {profile.awards?.map((award, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Award className="h-8 w-8 text-yellow-500" />
                          <div>
                            <h3 className="font-semibold">{award}</h3>
                            <p className="text-sm text-muted-foreground">Recognition for excellence</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Contact & Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.email}</span>
                </div>
                {profile.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{profile.phone}</span>
                  </div>
                )}
                {profile.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a href={profile.website} className="text-sm text-blue-600 hover:underline">
                      {profile.website}
                    </a>
                  </div>
                )}
                <Button className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Profile Views</span>
                  <span className="font-medium">{profile.profileViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Connections</span>
                  <span className="font-medium">{profile.connections.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Projects</span>
                  <span className="font-medium">{profile.projects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Member Since</span>
                  <span className="font-medium">{new Date(profile.joinedDate).getFullYear()}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Currently {profile.availability.toLowerCase()}</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
