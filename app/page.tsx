"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Camera, 
  Film, 
  X, 
  Plus,
  Briefcase, 
  Users, 
  Calendar, 
  Bell,
  Settings,
  HelpCircle,
  Play,
  Star,
  Award,
  TrendingUp,
  MapPin,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Sparkles,
  Crown,
  Zap,
  Target,
  Video,
  FileText,
  Link as LinkIcon,
  Globe,
  Lightbulb,
  Search,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import FeedPost from '@/components/features/feed/feed-post';
import { mockPosts, mockUsers } from '@/data/mock-data';

// Enhanced mock data for cinema industry
const trendingTopics = [
  { id: 1, topic: 'Film Festival Season', posts: 1240, trending: 'up', category: 'Events' },
  { id: 2, topic: 'Independent Cinema', posts: 890, trending: 'up', category: 'Industry' },
  { id: 3, topic: 'Streaming Platforms', posts: 567, trending: 'down', category: 'Technology' },
  { id: 4, topic: 'Film Awards 2024', posts: 2340, trending: 'up', category: 'Awards' },
  { id: 5, topic: 'Cinematography Trends', posts: 456, trending: 'up', category: 'Technical' }
];

const upcomingEvents = [
  { id: 1, title: 'Sundance Film Festival', date: 'Jan 25', attendees: 45000, type: 'Festival', location: 'Park City, UT' },
  { id: 2, title: 'Cinematography Masterclass', date: 'Jan 28', attendees: 23, type: 'Workshop', location: 'Los Angeles, CA' },
  { id: 3, title: 'Screenwriting Seminar', date: 'Feb 2', attendees: 67, type: 'Seminar', location: 'New York, NY' },
  { id: 4, title: 'Film Industry Mixer', date: 'Feb 5', attendees: 120, type: 'Networking', location: 'London, UK' }
];

  const recentActivity = [
  { id: 1, user: mockUsers[3], action: 'posted a new showreel', time: '1h ago', type: 'showreel' },
  { id: 2, user: mockUsers[4], action: 'joined Cinematographers Guild', time: '2h ago', type: 'group' },
  { id: 3, user: mockUsers[5], action: 'shared a casting call', time: '3h ago', type: 'job' },
  { id: 4, user: mockUsers[6], action: 'updated their filmography', time: '4h ago', type: 'profile' }
];

  const suggestedConnections = mockUsers.slice(2, 6);

const industryStats = [
  { label: 'Active Projects', value: '2,847', change: '+12%', icon: Film },
  { label: 'Job Opportunities', value: '156', change: '+8%', icon: Briefcase },
  { label: 'Industry Events', value: '23', change: '+5%', icon: Calendar },
  { label: 'New Connections', value: '1,234', change: '+15%', icon: Users }
];

const premiumFeatures = [
  { title: 'Advanced Analytics', description: 'Track your profile views and engagement', icon: TrendingUp },
  { title: 'Priority Support', description: 'Get help when you need it most', icon: Crown },
  { title: 'Exclusive Events', description: 'Access to premium networking events', icon: Sparkles },
  { title: 'Enhanced Search', description: 'Find the perfect collaborators', icon: Target }
];

export default function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  
  // Share Update Modal State
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareData, setShareData] = useState({
    content: '',
    postType: 'update',
    hashtags: '',
    media: [] as string[],
    privacy: 'public',
    location: '',
    project: ''
  });
  const [isSharing, setIsSharing] = useState(false);

  // FORCE modal on every visit - no access without authentication
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      const isOnboarding = window.location.pathname === '/onboarding';
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted') === 'true';
      
      console.log('Auth Debug:', { 
        isAuthenticated, 
        isOnboarding, 
        hasCompletedOnboarding, 
        showAuthModal,
        currentPath: window.location.pathname 
      });
      
      // Hide modal only if fully authenticated and not on onboarding
      if (isAuthenticated && hasCompletedOnboarding && !isOnboarding) {
        setShowAuthModal(false);
      } else if (isAuthenticated && !hasCompletedOnboarding && !isOnboarding) {
        // User is authenticated but hasn't completed onboarding - redirect to onboarding
        console.log('User authenticated but not completed onboarding, redirecting...');
        window.location.href = '/onboarding';
      } else {
        setShowAuthModal(true);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', loginData);
    setIsLoading(true);
    
    // Validate form data
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    console.log('Login validation passed, processing...');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Setting authentication state...');
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      // Clear any existing onboarding completion
      localStorage.removeItem('onboardingCompleted');
      // Hide the modal immediately to prevent it from showing again
      setShowAuthModal(false);
      console.log('Redirecting to onboarding...');
      // Redirect to 4-step process after login
      window.location.href = '/onboarding';
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowAuthModal(false);
      // Handle signup logic here
    }, 2000);
  };

  const handleShareUpdate = () => {
    setShowShareModal(true);
  };

  const handleShareSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSharing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSharing(false);
      setShowShareModal(false);
      setShareData({
        content: '',
        postType: 'update',
        hashtags: '',
        media: [],
        privacy: 'public',
        location: '',
        project: ''
      });
      alert('Post shared successfully!');
    }, 2000);
  };

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-background via-background to-muted/20 ${showAuthModal ? 'blur-sm' : ''}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Profile Card */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-primary/20">
                    <AvatarImage src={mockUsers[0].profilePictureUrl} alt="Your profile" />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-lg font-bold">
                          JD
                        </AvatarFallback>
                  </Avatar>
                      <div className="absolute -bottom-1 -right-1">
                        <Badge variant="secondary" className="bg-green-500 text-white">
                          <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                          Online
                        </Badge>
                      </div>
                    </div>
                  <h3 className="font-semibold text-lg mb-1">John Doe</h3>
                    <p className="text-sm text-muted-foreground mb-2">Film Director</p>
                    <div className="flex items-center justify-center mb-3 flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Award Winner
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Profile Views</span>
                        <span className="font-medium text-primary">1,240</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Connections</span>
                        <span className="font-medium text-primary">847</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Projects</span>
                        <span className="font-medium text-primary">23</span>
                    </div>
                  </div>
                </div>
                </CardContent>
              </Card>

              {/* Industry Stats */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Industry Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {industryStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{stat.label}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-sm">{stat.value}</div>
                          <div className="text-xs text-green-600">{stat.change}</div>
                  </div>
                </div>
                    );
                  })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    Quick Actions
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-4 sm:p-6">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => alert('Create Post feature coming soon!')}
                  >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => window.location.href = '/jobs'}
                  >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Post a Job
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => window.location.href = '/network'}
                  >
                  <Users className="h-4 w-4 mr-2" />
                  Find Connections
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => window.location.href = '/events'}
                  >
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => alert('Upload Showreel feature coming soon!')}
                  >
                    <Film className="h-4 w-4 mr-2" />
                    Upload Showreel
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => window.location.href = '/jobs'}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Find Work
                </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors text-sm h-10"
                    onClick={() => alert('Awards section coming soon!')}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    View Awards
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.user.profilePictureUrl} alt={activity.user.name} />
                        <AvatarFallback className="text-xs">{activity.user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user.name}</span> {activity.action}
                      </p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                {/* Welcome Banner */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2">Welcome back, John! 🎬</h2>
                        <p className="text-sm sm:text-base text-muted-foreground">Discover new opportunities and connect with industry professionals.</p>
                      </div>
                                              <div className="flex sm:hidden">
                    <Button
                            className="bg-primary hover:bg-primary/90 w-full text-black"
                            onClick={handleShareUpdate}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Share Update
                      </Button>
                        </div>
                        <div className="hidden sm:flex">
                          <Button 
                            className="bg-primary hover:bg-primary/90 text-black"
                            onClick={handleShareUpdate}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Share Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feed Posts */}
                {mockPosts.map((post) => (
                  <FeedPost key={post.id} post={post} onLike={() => {}} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-3">
            {/* Trending Topics */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Trending Topics
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">#{topic.topic}</p>
                        <div className="flex items-center space-x-2">
                      <p className="text-xs text-muted-foreground">{topic.posts} posts</p>
                          <Badge variant="outline" className="text-xs">
                            {topic.category}
                          </Badge>
                    </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        topic.trending === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {topic.trending === 'up' ? '↗' : '↘'}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{event.title}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{event.date} • {event.attendees} attending</span>
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {event.type}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="ml-2">
                        Join
                      </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Suggested Connections */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    People You May Know
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestedConnections.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.profilePictureUrl} alt={user.name} />
                        <AvatarFallback className="text-xs">{user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                    </div>
                    <Button variant="outline" size="sm">
                        <Users className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

              {/* Premium Features */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm">
              <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <Crown className="h-4 w-4 mr-2 text-yellow-600" />
                    Premium Features
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                  {premiumFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon className="h-4 w-4 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                    );
                  })}
                  <Button variant="outline" className="w-full mt-3 border-yellow-500/50 text-yellow-600 hover:bg-yellow-500/10">
                    <Crown className="h-4 w-4 mr-2" />
                    Upgrade to Premium
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                  <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                  <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                  <Button variant="ghost" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Suggestions
                </Button>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Auth Modal Overlay */}
              {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md relative border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
              {/* REMOVED CLOSE BUTTON - NO ESCAPE */}
            
            <CardHeader className="space-y-1 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Film className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Welcome to 24 Crafts
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Join the leading platform for film industry professionals
              </p>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" onClick={() => window.location.href = '/signup'}>Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 border-border/50 focus:border-primary"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 border-border/50 focus:border-primary"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          required
                        />
              <Button
                          type="button"
                          variant="ghost"
                size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
              </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox id="remember" />
                        <span className="text-sm text-muted-foreground">Remember me</span>
                      </label>
                      <Link 
                        href="/forgot-password" 
                        className="text-sm text-primary hover:text-primary/80"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full hover:bg-muted/50">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
              </Button>
                    <Button variant="outline" className="w-full hover:bg-muted/50">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
              </Button>
                  </div>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="firstName"
                            placeholder="First name"
                            className="pl-10 border-border/50 focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          className="border-border/50 focus:border-primary"
                          required
                        />
                      </div>
            </div>

                    <div className="space-y-2">
                      <Label htmlFor="signupEmail">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signupEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signupPassword">Password</Label>
              <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signupPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="pl-10 pr-10 border-border/50 focus:border-primary"
                          required
                />
              <Button
                          type="button"
                  variant="ghost"
                size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
              </Button>
              </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 border-border/50 focus:border-primary"
                          required
                />
              <Button
                          type="button"
                  variant="ghost"
                size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
              </Button>
              </div>
            </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:text-primary/80">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:text-primary/80">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                </Button>
                  </form>

              <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full hover:bg-muted/50">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-muted/50">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  {/* Skip Button */}
                  <div className="text-center mt-4">
                <Button
                  variant="ghost"
                      onClick={() => setShowAuthModal(false)}
                      className="text-muted-foreground hover:text-foreground text-sm"
                >
                      Skip for now
                </Button>
          </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
              </div>
            )}

      {/* Share Update Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 overflow-hidden">
          <div className="w-full max-w-4xl h-full max-h-[98vh] sm:max-h-[95vh] flex flex-col">
            <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="flex-shrink-0 flex items-center justify-between border-b border-border p-3 sm:p-4">
                <CardTitle className="flex items-center space-x-2">
                  <Film className="h-5 w-5 text-primary" />
                  <span>Share Update</span>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowShareModal(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              
              <div className="flex-1 overflow-y-auto">
                <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleShareSubmit} className="space-y-6">
                  {/* Post Type Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Post Type</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { value: 'update', label: 'General Update', icon: MessageCircle, desc: 'Share industry insights or personal updates' },
                        { value: 'showreel', label: 'Showreel/Work', icon: Film, desc: 'Showcase your latest creative work' },
                        { value: 'project', label: 'Project News', icon: Briefcase, desc: 'Announce new projects or collaborations' },
                        { value: 'achievement', label: 'Achievement', icon: Award, desc: 'Celebrate awards, recognition, or milestones' },
                        { value: 'casting', label: 'Casting Call', icon: Users, desc: 'Post casting opportunities or auditions' },
                        { value: 'event', label: 'Event', icon: Calendar, desc: 'Promote industry events or screenings' }
                      ].map((type) => {
                        const Icon = type.icon;
                        const isSelected = shareData.postType === type.value;
                        return (
                          <Button
                            key={type.value}
                            type="button"
                            variant={isSelected ? "secondary" : "outline"}
                            className={`justify-start h-auto p-3 sm:p-4 flex-col items-start space-y-1 ${isSelected ? 'bg-primary border-primary' : 'hover:bg-muted/50'}`}
                            onClick={() => setShareData({ ...shareData, postType: type.value })}
                          >
                            <div className="flex items-center space-x-2 w-full">
                              <Icon className={`h-5 w-5 ${isSelected ? 'text-black' : 'text-primary'}`} />
                              <span className={`font-medium text-sm ${isSelected ? 'text-black' : ''}`}>{type.label}</span>
                            </div>
                            <p className={`text-xs text-left ${isSelected ? 'text-black/80' : 'text-muted-foreground'}`}>
                              {type.desc}
                            </p>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <Label htmlFor="content" className="text-sm font-medium">
                      {shareData.postType === 'casting' ? 'Casting Details' : 
                       shareData.postType === 'event' ? 'Event Description' :
                       shareData.postType === 'achievement' ? 'Achievement Details' :
                       shareData.postType === 'project' ? 'Project Announcement' :
                       shareData.postType === 'showreel' ? 'Work Description' :
                       'What\'s happening?'}
                    </Label>
                    <div className="relative">
                      <textarea
                        id="content"
                        value={shareData.content}
                        onChange={(e) => setShareData({ ...shareData, content: e.target.value })}
                        placeholder={
                          shareData.postType === 'casting' ? 'Describe the role, requirements, audition details, and application process...' :
                          shareData.postType === 'event' ? 'Share event details, date, venue, and what attendees can expect...' :
                          shareData.postType === 'achievement' ? 'Share your accomplishment, award, recognition, or milestone...' :
                          shareData.postType === 'project' ? 'Announce your new project, collaboration, or production update...' :
                          shareData.postType === 'showreel' ? 'Describe your creative work, techniques used, and project background...' :
                          'Share your latest work, project updates, industry insights, or achievements...'
                        }
                        className="w-full p-4 border rounded-lg bg-background border-border focus:border-primary resize-none text-sm"
                        rows={5}
                        maxLength={2000}
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                        {shareData.content.length}/2000
                      </div>
                    </div>
                    
                    {/* Media Upload Options */}
                    <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-4 p-3 bg-muted/30 rounded-lg">
                      <Button type="button" variant="ghost" size="sm" className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 h-10">
                        <Video className="h-4 w-4 text-primary" />
                        <span className="text-xs sm:text-sm">Add Video</span>
                      </Button>
                      <Button type="button" variant="ghost" size="sm" className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 h-10">
                        <Camera className="h-4 w-4 text-primary" />
                        <span className="text-xs sm:text-sm">Add Photos</span>
                      </Button>
                      <Button type="button" variant="ghost" size="sm" className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 h-10">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="text-xs sm:text-sm">Add Document</span>
                      </Button>
                      <Button type="button" variant="ghost" size="sm" className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 h-10">
                        <LinkIcon className="h-4 w-4 text-primary" />
                        <span className="text-xs sm:text-sm">Add Link</span>
                      </Button>
                    </div>
                  </div>

                  {/* Dynamic Post Type Specific Fields */}
                  {shareData.postType === 'casting' && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Casting Call Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Role/Character</Label>
                          <Input placeholder="e.g., Lead Actor, Supporting Actress" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Age Range</Label>
                          <Input placeholder="e.g., 25-35 years" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Audition Date</Label>
                          <Input type="date" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Application Deadline</Label>
                          <Input type="date" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Requirements</Label>
                        <textarea 
                          placeholder="Experience, skills, physical requirements, etc."
                          className="w-full p-3 border rounded-md bg-background border-border focus:border-primary resize-none mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  {shareData.postType === 'event' && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Event Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Event Name</Label>
                          <Input placeholder="e.g., Film Premiere, Workshop" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Event Type</Label>
                          <select className="w-full p-2 border rounded-md bg-background border-border focus:border-primary mt-1">
                            <option>Premiere</option>
                            <option>Workshop</option>
                            <option>Networking</option>
                            <option>Festival</option>
                            <option>Screening</option>
                            <option>Awards</option>
                          </select>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Date & Time</Label>
                          <Input type="datetime-local" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Venue</Label>
                          <Input placeholder="Theater, studio, or venue name" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Ticket Info</Label>
                        <Input placeholder="Free, ₹500, Registration required, etc." className="mt-1" />
                      </div>
                    </div>
                  )}

                  {shareData.postType === 'achievement' && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Achievement Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Achievement Type</Label>
                          <select className="w-full p-2 border rounded-md bg-background border-border focus:border-primary mt-1">
                            <option>Award Won</option>
                            <option>Film Completed</option>
                            <option>Recognition</option>
                            <option>Milestone</option>
                            <option>Certification</option>
                            <option>Collaboration</option>
                          </select>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Date</Label>
                          <Input type="date" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Organization/Festival</Label>
                          <Input placeholder="e.g., Cannes, IFFI, Local Film Society" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Category</Label>
                          <Input placeholder="e.g., Best Director, Best Cinematography" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {shareData.postType === 'project' && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Project Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Project Status</Label>
                          <select className="w-full p-2 border rounded-md bg-background border-border focus:border-primary mt-1">
                            <option>Pre-Production</option>
                            <option>In Production</option>
                            <option>Post-Production</option>
                            <option>Completed</option>
                            <option>Released</option>
                            <option>Seeking Funding</option>
                          </select>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Genre</Label>
                          <Input placeholder="e.g., Drama, Documentary, Thriller" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Budget Range</Label>
                          <select className="w-full p-2 border rounded-md bg-background border-border focus:border-primary mt-1">
                            <option>Under ₹1 Lakh</option>
                            <option>₹1-5 Lakhs</option>
                            <option>₹5-25 Lakhs</option>
                            <option>₹25 Lakhs - ₹1 Crore</option>
                            <option>₹1-5 Crores</option>
                            <option>₹5+ Crores</option>
                          </select>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Looking For</Label>
                          <Input placeholder="e.g., Investors, Cast, Crew, Distribution" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {shareData.postType === 'showreel' && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border border-primary/20">
                      <h3 className="font-semibold text-primary flex items-center">
                        <Film className="h-4 w-4 mr-2" />
                        Work Showcase
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Work Type</Label>
                          <select className="w-full p-2 border rounded-md bg-background border-border focus:border-primary mt-1">
                            <option>Short Film</option>
                            <option>Feature Film</option>
                            <option>Documentary</option>
                            <option>Music Video</option>
                            <option>Commercial</option>
                            <option>Web Series</option>
                            <option>Animation</option>
                          </select>
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Your Role</Label>
                          <Input placeholder="e.g., Director, Cinematographer, Editor" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Duration</Label>
                          <Input placeholder="e.g., 15 minutes, 2 hours" className="mt-1" />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Release Year</Label>
                          <Input type="number" placeholder="2024" min="1900" max="2030" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Equipment/Software Used</Label>
                        <Input placeholder="e.g., RED Camera, DaVinci Resolve, After Effects" className="mt-1" />
                      </div>
                    </div>
                  )}

                  {/* Hashtags */}
                  <div className="space-y-3">
                    <Label htmlFor="hashtags" className="text-sm font-medium">Hashtags</Label>
                    <Input
                      id="hashtags"
                      value={shareData.hashtags}
                      onChange={(e) => setShareData({ ...shareData, hashtags: e.target.value })}
                      placeholder="#filmmaking #cinematography #networking"
                      className="border-border/50 focus:border-primary"
                    />
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {['#filmmaking', '#cinematography', '#directing', '#casting', '#production', '#vfx', '#editing', '#screenwriting', '#postproduction', '#documentary'].map((tag) => (
                        <Button
                          key={tag}
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-6 sm:h-7 px-2 sm:px-3 text-xs hover:bg-primary hover:text-black"
                          onClick={() => {
                            const currentTags = shareData.hashtags.split(' ').filter(t => t.trim());
                            if (!currentTags.includes(tag)) {
                              setShareData({ ...shareData, hashtags: [...currentTags, tag].join(' ') });
                            }
                          }}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Options */}
                  <div className="space-y-3 border-t border-border pt-4">
                    <Label className="text-sm font-medium">Advanced Options</Label>
                    
                    {/* Schedule Post */}
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Schedule Post</p>
                          <p className="text-xs text-muted-foreground">Post at optimal engagement time</p>
                        </div>
                      </div>
                      <Checkbox />
                    </div>

                    {/* Tag Collaborators */}
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Tag Collaborators</p>
                          <p className="text-xs text-muted-foreground">Mention team members or partners</p>
                        </div>
                      </div>
                      <Button type="button" variant="ghost" size="sm" className="text-primary">
                        Add People
                      </Button>
                    </div>

                    {/* Cross-post to other platforms */}
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Share2 className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Cross-post</p>
                          <p className="text-xs text-muted-foreground">Share to LinkedIn, Twitter, Instagram</p>
                        </div>
                      </div>
                      <Checkbox />
                    </div>

                    {/* Enable Comments */}
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Allow Comments</p>
                          <p className="text-xs text-muted-foreground">Let others engage with your post</p>
                        </div>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </div>

                  {/* Location & Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-medium">Location (optional)</Label>
                      <Input
                        id="location"
                        value={shareData.location}
                        onChange={(e) => setShareData({ ...shareData, location: e.target.value })}
                        placeholder="Film location, studio, or city"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project" className="text-sm font-medium">Project (optional)</Label>
                      <Input
                        id="project"
                        value={shareData.project || ''}
                        onChange={(e) => setShareData({ ...shareData, project: e.target.value })}
                        placeholder="Project name or production"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Audience Targeting */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Target Audience</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {[
                        { value: 'all', label: 'All Professionals', icon: Globe, desc: 'Visible to all film industry professionals' },
                        { value: 'connections', label: 'My Network', icon: Users, desc: 'Only your connections and followers' },
                        { value: 'role-specific', label: 'Role-Specific', icon: Target, desc: 'Target specific film industry roles' },
                        { value: 'private', label: 'Private', icon: Lock, desc: 'Only visible to you' }
                      ].map((audience) => {
                        const Icon = audience.icon;
                        const isSelected = shareData.privacy === audience.value;
                        return (
                          <Button
                            key={audience.value}
                            type="button"
                            variant={isSelected ? "secondary" : "outline"}
                            className={`justify-start h-auto p-2 sm:p-3 flex-col items-start space-y-1 ${isSelected ? 'bg-primary border-primary' : 'hover:bg-muted/50'}`}
                            onClick={() => setShareData({ ...shareData, privacy: audience.value })}
                          >
                            <div className="flex items-center space-x-2 w-full">
                              <Icon className={`h-4 w-4 ${isSelected ? 'text-black' : 'text-primary'}`} />
                              <span className={`font-medium text-xs sm:text-sm ${isSelected ? 'text-black' : ''}`}>{audience.label}</span>
                            </div>
                            <p className={`text-xs text-left ${isSelected ? 'text-black/80' : 'text-muted-foreground'} hidden sm:block`}>
                              {audience.desc}
                            </p>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 sm:space-x-3 pt-4 border-t border-border">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowShareModal(false)}
                      className="w-full sm:w-auto"
                    >
                  Cancel
                </Button>
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                      style={{ color: 'black' }}
                      disabled={isSharing || !shareData.content.trim()}
                    >
                      {isSharing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" style={{ color: 'black' }} />
                          <span style={{ color: 'black' }}>Sharing...</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="h-4 w-4 mr-2" style={{ color: 'black' }} />
                          <span style={{ color: 'black' }}>Share Update</span>
                        </>
                      )}
                </Button>
              </div>
                </form>
                </CardContent>
              </div>
            </Card>
            </div>
          </div>
      )}
    </>
  );
}