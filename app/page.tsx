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
  Lightbulb
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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // FORCE modal on every visit - no access without authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const isOnboarding = window.location.pathname === '/onboarding';
    const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted') === 'true';
    
    // ALWAYS show modal if not fully authenticated (logged in + completed onboarding)
    if (!isAuthenticated || !hasCompletedOnboarding) {
      if (!isOnboarding) {
        setShowAuthModal(true);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form data
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to 4-step process after login
      window.location.href = '/onboarding';
    }, 2000);
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

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-background via-background to-muted/20 ${showAuthModal ? 'blur-sm' : ''}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Card */}
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
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
                    <div className="flex items-center justify-center mb-3">
                      <Badge variant="outline" className="mr-2">
                        <Award className="h-3 w-3 mr-1" />
                        Award Winner
                      </Badge>
                      <Badge variant="outline">
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
              <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    Quick Actions
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Post a Job
                </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Find Connections
                </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
                  <Button variant="outline" className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Film className="h-4 w-4 mr-2" />
                    Upload Showreel
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
          <div className="md:col-span-8">
              <div className="space-y-6">
                {/* Welcome Banner */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2">Welcome back, John! 🎬</h2>
                        <p className="text-muted-foreground">Discover new opportunities and connect with industry professionals.</p>
                      </div>
                      <div className="hidden md:flex">
                        <Button className="bg-primary hover:bg-primary/90">
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
          <div className="md:col-span-2 space-y-6">
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

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
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

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
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
    </>
  );
}