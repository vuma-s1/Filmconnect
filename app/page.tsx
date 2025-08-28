"use client";

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { mockUsers } from '@/data/mock-data';
import { 
  Search, 
  UserPlus, 
  MessageCircle, 
  Heart, 
  Share2, 
  MoreHorizontal,
  FileText, 
  ImageIcon, 
  Award, 
  Camera, 
  Video, 
  Send,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  X,
  TrendingUp,
  Calendar,
  MapPin,
  Building,
  Star,
  Eye,
  Users,
  Briefcase,
  Globe,
  Plus,
  ChevronRight,
  Bell,
  Settings,
  HelpCircle
} from 'lucide-react';

const HomePage = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postType, setPostType] = useState<'text' | 'image' | 'achievement' | 'job_share'>('text');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [newPost, setNewPost] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock feed posts
  const feedPosts = [
    {
      id: '1',
      user: mockUsers[0],
      content: 'Just wrapped up filming on my latest short film "Echoes of Tomorrow". The entire crew was incredible and I can\'t wait to share the final cut with everyone! 🎬✨',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      isLiked: false,
      type: 'text' as const,
      tags: ['filmmaking', 'shortfilm', 'cinema']
    },
    {
      id: '2',
      user: mockUsers[1],
      content: 'Excited to announce that I\'ll be directing my first feature film next year! After years of working in commercials and music videos, this feels like a dream come true. Thank you to everyone who believed in my vision. 🙏',
      timestamp: '5 hours ago',
      likes: 156,
      comments: 23,
      shares: 12,
      isLiked: true,
      type: 'achievement' as const,
      tags: ['director', 'featurefilm', 'achievement']
    },
    {
      id: '3',
      user: mockUsers[2],
      content: 'Looking for a talented cinematographer for an upcoming documentary project. Must have experience with nature photography and be available for 3 months starting January. DM me for details!',
      timestamp: '1 day ago',
      likes: 8,
      comments: 15,
      shares: 5,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['hiring', 'cinematographer', 'documentary']
    },
    {
      id: '4',
      user: mockUsers[3],
      content: 'Just finished casting for our upcoming thriller "Shadows in the Night". The chemistry between our lead actors is absolutely electric! Can\'t wait to start production next month. 🎭',
      timestamp: '1 day ago',
      likes: 89,
      comments: 12,
      shares: 7,
      isLiked: false,
      type: 'text' as const,
      tags: ['casting', 'thriller', 'production']
    },
    {
      id: '5',
      user: mockUsers[4],
      content: 'Proud to announce that our indie film "The Last Light" has been selected for the Sundance Film Festival! This has been a 3-year journey and I\'m overwhelmed with gratitude. 🏆',
      timestamp: '2 days ago',
      likes: 342,
      comments: 45,
      shares: 28,
      isLiked: true,
      type: 'achievement' as const,
      tags: ['sundance', 'indiefilm', 'festival']
    },
    {
      id: '6',
      user: mockUsers[5],
      content: 'Behind the scenes of our latest music video shoot. The lighting setup was absolutely perfect today! Sometimes the simplest setups create the most beautiful shots. 📸',
      timestamp: '2 days ago',
      likes: 67,
      comments: 9,
      shares: 4,
      isLiked: false,
      type: 'text' as const,
      tags: ['musicvideo', 'cinematography', 'lighting']
    },
    {
      id: '7',
      user: mockUsers[6],
      content: 'Seeking experienced film editors for a documentary series about climate change. Must be proficient in Premiere Pro and After Effects. Remote work available. Contact for details!',
      timestamp: '3 days ago',
      likes: 15,
      comments: 8,
      shares: 3,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['hiring', 'editor', 'documentary']
    },
    {
      id: '8',
      user: mockUsers[7],
      content: 'Just completed the final edit of my debut feature film! 18 months of hard work, countless sleepless nights, and here we are. The journey has been incredible. 🎬',
      timestamp: '3 days ago',
      likes: 234,
      comments: 31,
      shares: 18,
      isLiked: true,
      type: 'achievement' as const,
      tags: ['featurefilm', 'editing', 'debut']
    },
    {
      id: '9',
      user: mockUsers[0],
      content: 'Working on a new screenplay that explores the complexities of human relationships in the digital age. The first draft is complete and I\'m excited to start revisions! ✍️',
      timestamp: '4 days ago',
      likes: 45,
      comments: 7,
      shares: 2,
      isLiked: false,
      type: 'text' as const,
      tags: ['screenwriting', 'digitalage', 'relationships']
    },
    {
      id: '10',
      user: mockUsers[1],
      content: 'Amazing workshop today with young filmmakers! Teaching the next generation about storytelling and visual narrative. The passion in the room was inspiring. 📚',
      timestamp: '4 days ago',
      likes: 123,
      comments: 19,
      shares: 6,
      isLiked: false,
      type: 'text' as const,
      tags: ['workshop', 'teaching', 'filmmaking']
    },
    {
      id: '11',
      user: mockUsers[2],
      content: 'Just wrapped a 12-hour shoot for a commercial. The client was thrilled with the results! Sometimes the most challenging shoots produce the best work. 💪',
      timestamp: '5 days ago',
      likes: 78,
      comments: 11,
      shares: 4,
      isLiked: true,
      type: 'text' as const,
      tags: ['commercial', 'shoot', 'client']
    },
    {
      id: '12',
      user: mockUsers[3],
      content: 'Looking for talented background actors for a period drama set in the 1920s. Must be available for 2 weeks starting next month. Great opportunity for experience!',
      timestamp: '5 days ago',
      likes: 23,
      comments: 15,
      shares: 8,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['casting', 'background', 'perioddrama']
    },
    {
      id: '13',
      user: mockUsers[4],
      content: 'Our documentary "Voices of the Ocean" just won Best Documentary at the International Film Festival! This project was a labor of love and I\'m so proud of our team. 🌊',
      timestamp: '6 days ago',
      likes: 456,
      comments: 52,
      shares: 34,
      isLiked: true,
      type: 'achievement' as const,
      tags: ['documentary', 'award', 'ocean']
    },
    {
      id: '14',
      user: mockUsers[5],
      content: 'Experimenting with new camera techniques for our upcoming sci-fi project. The results are mind-blowing! Can\'t wait to share some behind-the-scenes footage. 🚀',
      timestamp: '6 days ago',
      likes: 156,
      comments: 22,
      shares: 9,
      isLiked: false,
      type: 'text' as const,
      tags: ['scifi', 'cameratechniques', 'experiment']
    },
    {
      id: '15',
      user: mockUsers[6],
      content: 'Just finished the sound design for our horror film. The atmosphere we created is absolutely terrifying! Sound is such an underrated aspect of filmmaking. 🔊',
      timestamp: '7 days ago',
      likes: 89,
      comments: 13,
      shares: 5,
      isLiked: true,
      type: 'text' as const,
      tags: ['sounddesign', 'horror', 'filmmaking']
    },
    {
      id: '16',
      user: mockUsers[7],
      content: 'Seeking experienced production designers for a fantasy film. Must have experience with large-scale sets and creative problem-solving. Competitive rates!',
      timestamp: '7 days ago',
      likes: 34,
      comments: 6,
      shares: 2,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['hiring', 'productiondesign', 'fantasy']
    },
    {
      id: '17',
      user: mockUsers[0],
      content: 'Working with an amazing stunt coordinator on our action sequence. The choreography is incredible and the safety measures are top-notch. Action films are a whole different beast! 💥',
      timestamp: '8 days ago',
      likes: 234,
      comments: 28,
      shares: 12,
      isLiked: false,
      type: 'text' as const,
      tags: ['stunts', 'action', 'safety']
    },
    {
      id: '18',
      user: mockUsers[1],
      content: 'Just completed a masterclass on visual storytelling. The techniques I learned will completely change how I approach directing. Never stop learning! 📖',
      timestamp: '8 days ago',
      likes: 167,
      comments: 24,
      shares: 8,
      isLiked: true,
      type: 'text' as const,
      tags: ['masterclass', 'storytelling', 'learning']
    },
    {
      id: '19',
      user: mockUsers[2],
      content: 'Behind the scenes of our drone cinematography session. The aerial shots we captured are absolutely breathtaking! Technology is revolutionizing how we tell stories. 🚁',
      timestamp: '9 days ago',
      likes: 198,
      comments: 31,
      shares: 15,
      isLiked: false,
      type: 'text' as const,
      tags: ['drone', 'aerial', 'technology']
    },
    {
      id: '20',
      user: mockUsers[3],
      content: 'Looking for experienced makeup artists for a horror film. Must be skilled in special effects makeup and prosthetics. This is going to be an amazing project!',
      timestamp: '9 days ago',
      likes: 45,
      comments: 12,
      shares: 7,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['hiring', 'makeup', 'horror']
    },
    {
      id: '21',
      user: mockUsers[4],
      content: 'Our short film "The Last Goodbye" has been accepted into 15 film festivals worldwide! The response has been overwhelming and I\'m so grateful for this journey. 🌍',
      timestamp: '10 days ago',
      likes: 567,
      comments: 67,
      shares: 42,
      isLiked: true,
      type: 'achievement' as const,
      tags: ['shortfilm', 'festivals', 'success']
    },
    {
      id: '22',
      user: mockUsers[5],
      content: 'Working on the color grading for our latest project. The mood we\'re creating is exactly what we envisioned. Color is such a powerful storytelling tool! 🎨',
      timestamp: '10 days ago',
      likes: 134,
      comments: 18,
      shares: 6,
      isLiked: false,
      type: 'text' as const,
      tags: ['colorgrading', 'mood', 'storytelling']
    },
    {
      id: '23',
      user: mockUsers[6],
      content: 'Just wrapped filming on our documentary about street artists. The stories we captured are incredible and the visuals are stunning. Can\'t wait to share the final cut! 🎨',
      timestamp: '11 days ago',
      likes: 289,
      comments: 35,
      shares: 19,
      isLiked: true,
      type: 'text' as const,
      tags: ['documentary', 'streetart', 'filming']
    },
    {
      id: '24',
      user: mockUsers[7],
      content: 'Seeking experienced costume designers for a period drama. Must have knowledge of historical fashion and attention to detail. This is a major production!',
      timestamp: '11 days ago',
      likes: 67,
      comments: 9,
      shares: 4,
      isLiked: false,
      type: 'job_share' as const,
      tags: ['hiring', 'costumedesign', 'perioddrama']
    },
    {
      id: '25',
      user: mockUsers[0],
      content: 'Just finished the script for my next feature film. 6 months of writing, rewriting, and refining. The story feels ready to come to life! 📝',
      timestamp: '12 days ago',
      likes: 345,
      comments: 41,
      shares: 23,
      isLiked: false,
      type: 'achievement' as const,
      tags: ['script', 'writing', 'featurefilm']
    }
  ];

  // Mock trending topics
  const trendingTopics = [
    { id: 1, topic: 'Film Festival Season', posts: 1240, trending: 'up' },
    { id: 2, topic: 'Independent Cinema', posts: 890, trending: 'up' },
    { id: 3, topic: 'Streaming Platforms', posts: 567, trending: 'down' },
    { id: 4, topic: 'Film Awards 2024', posts: 2340, trending: 'up' },
    { id: 5, topic: 'Cinematography Trends', posts: 456, trending: 'up' }
  ];

  // Mock recent activity
  const recentActivity = [
    { id: 1, user: mockUsers[3], action: 'posted a new project', time: '1h ago' },
    { id: 2, user: mockUsers[4], action: 'joined a new group', time: '2h ago' },
    { id: 3, user: mockUsers[5], action: 'shared a job opportunity', time: '3h ago' },
    { id: 4, user: mockUsers[6], action: 'updated their profile', time: '4h ago' }
  ];

  // Mock suggested connections
  const suggestedConnections = mockUsers.slice(2, 6);

  // Mock upcoming events
  const upcomingEvents = [
    { id: 1, title: 'Film Industry Meetup', date: 'Jan 25', attendees: 45 },
    { id: 2, title: 'Cinematography Workshop', date: 'Jan 28', attendees: 23 },
    { id: 3, title: 'Screenwriting Seminar', date: 'Feb 2', attendees: 67 }
  ];

  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    
    const post = {
      id: `p${Date.now()}`,
      content: newPost.trim(),
      imageUrl: selectedImage || undefined,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      shares: 0,
      isLiked: false,
      type: postType,
      tags: []
    };
    
    setNewPost('');
    setSelectedImage(null);
    setShowCreatePost(false);
    setPostType('text');
  };

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const PostCard = ({ post }: { post: any }) => (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.user.profilePictureUrl} alt={post.user.name} />
              <AvatarFallback>{post.user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-sm">{post.user.name}</h3>
                {post.user.isVerified && (
                  <Badge variant="verified" className="text-xs">Verified</Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{post.user.role} • {post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm mb-4">{post.content}</p>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Heart className={`h-4 w-4 ${post.isLiked ? 'text-red-500 fill-current' : ''}`} />
              <span className="text-sm">{post.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">{post.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">{post.shares}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={mockUsers[0].profilePictureUrl} alt="Your profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">John Doe</h3>
                  <p className="text-sm text-muted-foreground mb-3">Film Director</p>
                  <div className="space-y-2 text-sm">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Post a Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Connections
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.user.profilePictureUrl} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user.name}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="md:col-span-8">
            {/* Create Post Section */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={mockUsers[0].profilePictureUrl} alt="Your profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-muted-foreground"
                      onClick={() => setShowCreatePost(true)}
                    >
                      Start a post...
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feed Posts */}
            <div className="space-y-6">
              {feedPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Trending Topics</CardTitle>
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
                <CardTitle className="text-base">People You May Know</CardTitle>
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

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date} • {event.attendees} attending</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-sm">
                  See all events
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <Dialog open={showCreatePost} onOpenChange={setShowCreatePost}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create a post</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex space-x-2 mb-4">
              <Button
                variant={postType === 'text' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setPostType('text')}
              >
                <FileText className="h-4 w-4 mr-2" />
                Text
              </Button>
              <Button
                variant={postType === 'image' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setPostType('image')}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Photo
              </Button>
              <Button
                variant={postType === 'achievement' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setPostType('achievement')}
              >
                <Award className="h-4 w-4 mr-2" />
                Achievement
              </Button>
            </div>

            <Textarea
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[120px] resize-none"
            />

            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4 text-white" />
                </Button>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setShowCreatePost(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePost} disabled={!newPost.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;