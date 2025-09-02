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
  TrendingUp,
  Camera,
  Video,
  Music,
  Film,
  Theater,
  Languages,
  Shield,
  FileText,
  Image,
  Play,
  Mic,
  Zap,
  Target,
  Clock,
  Eye,
  Heart,
  Download,
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  Trophy,
  Medal,
  Certificate,
  Safety,
  Users,
  Handshake,
  Building,
  Flag,
  Globe2,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Lock,
  Unlock,
  EyeOff,
  EyeOn
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('identity');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration - in real app this would come from API
  const profileData = {
    // Basic Identity
    profilePhoto: "/api/placeholder/200/200",
    fullName: "Rajesh Kumar",
    screenName: "Rajesh K",
    languages: ["Telugu", "Tamil", "Hindi", "English"],
    contactPreferences: {
      publicEmail: "rajesh.kumar@email.com",
      managerDetails: "Sunil Productions - +91 98765 43210",
      privateContact: "+91 98765 43210"
    },
    location: "Mumbai, Maharashtra",
    unionMemberships: ["CINTAA", "FWICE", "South Indian Artists Association"],
    
    // Career Role & Tags
    primaryRole: "Actor",
    secondarySkills: ["Singing", "Dancing", "Voice Acting", "Stunt Work"],
    industryTags: ["Bollywood", "Tollywood", "OTT", "Theatre"],
    yearsExperience: 8,
    
    // Filmography
    filmography: [
      {
        title: "The Rising Star",
        role: "Lead Actor",
        year: 2023,
        director: "Karan Johar",
        production: "Dharma Productions",
        type: "Film"
      },
      {
        title: "City Dreams",
        role: "Supporting Actor",
        year: 2022,
        director: "Zoya Akhtar",
        production: "Excel Entertainment",
        type: "Film"
      },
      {
        title: "Web Series Season 1",
        role: "Main Character",
        year: 2023,
        director: "Anurag Kashyap",
        production: "Netflix",
        type: "OTT"
      }
    ],
    
    // Awards & Recognition
    awards: [
      { name: "Best Actor", category: "Filmfare Awards", year: 2023, verified: true },
      { name: "Outstanding Performance", category: "National Awards", year: 2022, verified: true },
      { name: "Best Debut", category: "State Awards", year: 2021, verified: false }
    ],
    
    // Portfolio Media
    portfolio: {
      photos: ["/api/placeholder/300/400", "/api/placeholder/300/400", "/api/placeholder/300/400"],
      showreel: "https://youtube.com/watch?v=example",
      voiceSamples: ["/api/placeholder/audio1", "/api/placeholder/audio2"],
      danceClips: ["/api/placeholder/video1", "/api/placeholder/video2"]
    },
    
    // Learning & Certification
    learning: {
      completedCourses: ["Advanced Acting", "Voice Modulation", "Screen Presence"],
      sopBadges: ["Set Safety", "Fire Safety", "Equipment Handling"],
      certificationLevel: "Gold",
      progress: 85
    },
    
    // Professional Network
    network: {
      collaborators: ["Karan Johar", "Zoya Akhtar", "Anurag Kashyap"],
      endorsements: ["Sunil Productions", "Dharma Productions"],
      unionRecommendations: ["CINTAA - Outstanding Member", "FWICE - Professional Excellence"]
    },
    
    // Career Goals
    careerGoals: {
      seekingRoles: "Lead Actor in OTT Series, Supporting in Feature Films",
      availability: "Available from March 2024",
      preferredLocation: "Mumbai, Chennai, Hyderabad",
      aiSuggestions: ["Voice Acting Course", "Digital Marketing for Actors", "International Film Markets"]
    },
    
    // Verification
    verification: {
      kycVerified: true,
      unionVerified: true,
      awardVerified: true,
      piracyTracking: "Active monitoring enabled"
    },
    
    // Public View
    publicBio: "Versatile actor with 8+ years of experience in Indian cinema. Known for intense performances and dedication to craft. Fluent in multiple languages and comfortable in various genres.",
    socialMedia: {
      instagram: "@rajeshkumar",
      twitter: "@rajeshk",
      youtube: "Rajesh Kumar Official",
      linkedin: "rajesh-kumar-actor"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <BreadcrumbNav className="mb-6" />

        {/* Profile Header - Basic Identity Section */}
        <Card className="mb-8">
          <CardContent className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Profile Photo & Verification */}
              <div className="relative">
                <Avatar className="h-32 w-32 lg:h-40 lg:w-40">
                  <AvatarImage src={profileData.profilePhoto} />
                  <AvatarFallback className="text-4xl lg:text-5xl bg-primary/20">
                    {profileData.fullName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {profileData.verification.kycVerified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {profileData.fullName}
                    {profileData.screenName !== profileData.fullName && (
                      <span className="text-xl lg:text-2xl text-primary ml-3">
                        ({profileData.screenName})
                      </span>
                    )}
                  </h1>
                  <p className="text-xl lg:text-2xl text-primary font-semibold mb-3">
                    {profileData.primaryRole} • {profileData.yearsExperience} Years Experience
                  </p>
                  
                  {/* Languages */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Languages className="h-5 w-5 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {profileData.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Location & Union */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{profileData.unionMemberships.length} Unions</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Press Kit
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Profile Content with Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Quick Stats & Navigation */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Profile Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Views</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Connections</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Projects</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Awards</span>
                  <span className="font-medium">{profileData.awards.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Verification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">KYC Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Union Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Award Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Piracy Monitoring</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
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

          {/* Main Content - Tabbed Sections */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-6 lg:grid-cols-12 gap-2">
                <TabsTrigger value="identity" className="text-xs">Identity</TabsTrigger>
                <TabsTrigger value="career" className="text-xs">Career</TabsTrigger>
                <TabsTrigger value="filmography" className="text-xs">Filmography</TabsTrigger>
                <TabsTrigger value="awards" className="text-xs">Awards</TabsTrigger>
                <TabsTrigger value="portfolio" className="text-xs">Portfolio</TabsTrigger>
                <TabsTrigger value="learning" className="text-xs">Learning</TabsTrigger>
                <TabsTrigger value="network" className="text-xs">Network</TabsTrigger>
                <TabsTrigger value="goals" className="text-xs">Goals</TabsTrigger>
                <TabsTrigger value="verification" className="text-xs">Verification</TabsTrigger>
                <TabsTrigger value="public" className="text-xs">Public</TabsTrigger>
                <TabsTrigger value="actor" className="text-xs">Actor</TabsTrigger>
                <TabsTrigger value="crew" className="text-xs">Crew</TabsTrigger>
              </TabsList>

              {/* Identity Tab */}
              <TabsContent value="identity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Basic Identity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Public Email</p>
                              <p className="text-sm text-muted-foreground">{profileData.contactPreferences.publicEmail}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Manager</p>
                              <p className="text-sm text-muted-foreground">{profileData.contactPreferences.managerDetails}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Location & Unions</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Base City</p>
                              <p className="text-sm text-muted-foreground">{profileData.location}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-medium">Union Memberships</p>
                            <div className="flex flex-wrap gap-2">
                              {profileData.unionMemberships.map((union) => (
                                <Badge key={union} variant="secondary">
                                  {union}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Career Tab */}
              <TabsContent value="career" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Career Role & Tags</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Primary Role</h3>
                        <Badge className="text-lg px-4 py-2">{profileData.primaryRole}</Badge>
                        
                        <h3 className="font-semibold text-lg">Secondary Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.secondarySkills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Industry Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.industryTags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="font-semibold text-lg">Experience</h3>
                        <p className="text-2xl font-bold text-primary">{profileData.yearsExperience} Years</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Filmography Tab */}
              <TabsContent value="filmography" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Film className="h-5 w-5" />
                      <span>Filmography & Credits</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {profileData.filmography.map((project, index) => (
                        <div key={index} className="border-l-4 border-primary pl-6 py-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{project.title}</h3>
                              <p className="text-primary font-medium">{project.role}</p>
                              <p className="text-sm text-muted-foreground">
                                {project.year} • {project.director} • {project.production}
                              </p>
                            </div>
                            <Badge variant="outline">{project.type}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Awards Tab */}
              <TabsContent value="awards" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Awards & Recognitions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {profileData.awards.map((award, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{award.name}</h3>
                            {award.verified ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <p className="text-primary font-medium">{award.category}</p>
                          <p className="text-sm text-muted-foreground">{award.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Image className="h-5 w-5" />
                      <span>Portfolio Media</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Photo Gallery */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Photo Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {profileData.portfolio.photos.map((photo, index) => (
                          <div key={index} className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                            <Image className="h-8 w-8 text-muted-foreground" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Showreel */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Showreel</h3>
                      <div className="bg-muted rounded-lg p-6 text-center">
                        <Play className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Showreel Video</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Learning Tab */}
              <TabsContent value="learning" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5" />
                      <span>Learning & Certification</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Completed Courses</h3>
                        <div className="space-y-2">
                          {profileData.learning.completedCourses.map((course) => (
                            <div key={course} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Certification Level</h3>
                        <Badge className="text-lg px-4 py-2 bg-yellow-500 text-black">
                          {profileData.learning.certificationLevel}
                        </Badge>
                        
                        <h3 className="font-semibold text-lg">Progress</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Overall Progress</span>
                            <span>{profileData.learning.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${profileData.learning.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Network Tab */}
              <TabsContent value="network" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Professional Network</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Collaborators</h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.network.collaborators.map((collaborator) => (
                            <Badge key={collaborator} variant="outline">
                              {collaborator}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Endorsements</h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.network.endorsements.map((endorsement) => (
                            <Badge key={endorsement} variant="secondary">
                              {endorsement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Goals Tab */}
              <TabsContent value="goals" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Career Goals & Availability</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Seeking Roles</h3>
                        <p className="text-muted-foreground">{profileData.careerGoals.seekingRoles}</p>
                        
                        <h3 className="font-semibold text-lg">Availability</h3>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{profileData.careerGoals.availability}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Preferred Location</h3>
                        <p className="text-muted-foreground">{profileData.careerGoals.preferredLocation}</p>
                        
                        <h3 className="font-semibold text-lg">AI Suggestions</h3>
                        <div className="space-y-2">
                          {profileData.careerGoals.aiSuggestions.map((suggestion) => (
                            <div key={suggestion} className="flex items-center space-x-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="text-sm">{suggestion}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Verification Tab */}
              <TabsContent value="verification" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Verification & Trust Layer</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Identity Verification</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>KYC/ID Verified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Union Verified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>Award Verified</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Security Features</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Eye className="h-5 w-5 text-blue-500" />
                            <span>Piracy Monitoring</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-blue-500" />
                            <span>ORM Protection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Public Tab */}
              <TabsContent value="public" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5" />
                      <span>Public View & Engagement</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Public Bio</h3>
                        <p className="text-muted-foreground leading-relaxed">{profileData.publicBio}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Social Media</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Instagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </Button>
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Twitter className="h-4 w-4" />
                            <span>Twitter</span>
                          </Button>
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Youtube className="h-4 w-4" />
                            <span>YouTube</span>
                          </Button>
                          <Button variant="outline" className="flex items-center space-x-2">
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Actor Tab */}
              <TabsContent value="actor" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Actor-Specific Modules</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Audition Submissions</h3>
                        <div className="bg-muted rounded-lg p-6 text-center">
                          <Video className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">Upload Video Auditions</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Character Looks</h3>
                        <div className="bg-muted rounded-lg p-6 text-center">
                          <Image className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">Upload Makeup Tests</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Crew Tab */}
              <TabsContent value="crew" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Crew/Technician Modules</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Equipment Mastery</h3>
                        <div className="bg-muted rounded-lg p-6 text-center">
                          <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">Certified Equipment List</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Safety Training</h3>
                        <div className="bg-muted rounded-lg p-6 text-center">
                          <Safety className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">SOP & Safety Status</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
