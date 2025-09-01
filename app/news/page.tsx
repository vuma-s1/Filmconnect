"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Clock, 
  TrendingUp, 
  Film, 
  Award, 
  Users, 
  Calendar,
  ExternalLink,
  Bookmark,
  Share2,
  Eye
} from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  views: number;
  isBreaking: boolean;
  tags: string[];
  source: string;
}

const mockNews: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Bollywood Box Office Breaks Records with ₹500 Crore Weekend',
    summary: 'Three major releases dominate theaters as audiences return to cinemas in unprecedented numbers.',
    content: 'The Indian film industry witnessed a historic weekend as three major Bollywood releases collectively earned over ₹500 crores globally...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Rajesh Kumar',
    publishedAt: '2024-01-21T08:00:00Z',
    category: 'Box Office',
    readTime: '3 min read',
    views: 12450,
    isBreaking: true,
    tags: ['Bollywood', 'Box Office', 'Records'],
    source: 'Film Trade Weekly'
  },
  {
    id: 'n7',
    title: 'Mumbai Film Festival Announces Record 200+ Film Submissions',
    summary: 'International and domestic filmmakers showcase diverse stories at India\'s premier film festival.',
    content: 'The Mumbai International Film Festival has received a record number of submissions from filmmakers worldwide...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Festival Reporter',
    publishedAt: '2024-01-21T06:00:00Z',
    category: 'Festivals',
    readTime: '4 min read',
    views: 8950,
    isBreaking: false,
    tags: ['Mumbai Film Festival', 'Submissions', 'International Cinema'],
    source: 'Festival Daily'
  },
  {
    id: 'n8',
    title: 'Virtual Production Technology Transforms Indian Film Studios',
    summary: 'LED wall technology and real-time rendering revolutionize how films are made in India.',
    content: 'Major Indian film studios are adopting virtual production technology to create immersive environments...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Tech Correspondent',
    publishedAt: '2024-01-20T11:00:00Z',
    category: 'Technology',
    readTime: '5 min read',
    views: 6780,
    isBreaking: false,
    tags: ['Virtual Production', 'LED Walls', 'Film Technology', 'Innovation'],
    source: 'Tech Cinema Weekly'
  },
  {
    id: 'n9',
    title: 'New Film City Complex Opens in Chennai with State-of-Art Facilities',
    summary: 'Modern production facility features 12 sound stages and advanced post-production suites.',
    content: 'Chennai\'s newest film city complex has opened with world-class infrastructure for film production...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Infrastructure Reporter',
    publishedAt: '2024-01-19T14:00:00Z',
    category: 'Infrastructure',
    readTime: '3 min read',
    views: 5430,
    isBreaking: false,
    tags: ['Film City', 'Chennai', 'Infrastructure', 'Production Facilities'],
    source: 'Industry Infrastructure'
  },
  {
    id: 'n2',
    title: 'Netflix Announces ₹2000 Crore Investment in Indian Original Content',
    summary: 'Streaming giant commits to producing 50+ original series and films over the next two years.',
    content: 'Netflix has announced its largest investment in Indian content to date, with plans to produce over 50 original series and films...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Priya Sharma',
    publishedAt: '2024-01-20T14:30:00Z',
    category: 'Streaming',
    readTime: '5 min read',
    views: 8760,
    isBreaking: false,
    tags: ['Netflix', 'Streaming', 'Investment', 'Original Content'],
    source: 'Entertainment Today'
  },
  {
    id: 'n3',
    title: 'Cannes Film Festival 2024: Indian Films Make Strong Showing',
    summary: 'Five Indian productions selected for various categories, marking a significant presence at the prestigious festival.',
    content: 'The Cannes Film Festival 2024 lineup includes five Indian productions across different categories...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Anita Desai',
    publishedAt: '2024-01-19T16:45:00Z',
    category: 'Festivals',
    readTime: '4 min read',
    views: 15680,
    isBreaking: false,
    tags: ['Cannes', 'Film Festival', 'International', 'Indian Cinema'],
    source: 'Cinema International'
  },
  {
    id: 'n4',
    title: 'AI Technology Revolutionizes VFX Industry in Indian Cinema',
    summary: 'Major studios adopt artificial intelligence tools for faster, cost-effective visual effects production.',
    content: 'Leading VFX studios in India are embracing AI technology to streamline their production pipelines...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Tech Film Reporter',
    publishedAt: '2024-01-18T10:15:00Z',
    category: 'Technology',
    readTime: '6 min read',
    views: 9340,
    isBreaking: false,
    tags: ['AI', 'VFX', 'Technology', 'Innovation'],
    source: 'VFX World'
  },
  {
    id: 'n5',
    title: 'South Indian Cinema Gains Global Recognition at International Awards',
    summary: 'Telugu and Tamil films receive nominations at major international film awards ceremonies.',
    content: 'South Indian cinema continues its global expansion with multiple nominations at prestigious international awards...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Awards Correspondent',
    publishedAt: '2024-01-17T12:00:00Z',
    category: 'Awards',
    readTime: '4 min read',
    views: 11230,
    isBreaking: false,
    tags: ['South Indian Cinema', 'Awards', 'International', 'Recognition'],
    source: 'Global Cinema News'
  },
  {
    id: 'n6',
    title: 'New Film City Project Announced in Hyderabad Worth ₹5000 Crores',
    summary: 'Telangana government partners with private investors to create world-class film production facility.',
    content: 'The Telangana government has announced plans for a new film city project in Hyderabad...',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Industry Reporter',
    publishedAt: '2024-01-16T09:30:00Z',
    category: 'Infrastructure',
    readTime: '5 min read',
    views: 7890,
    isBreaking: false,
    tags: ['Film City', 'Infrastructure', 'Hyderabad', 'Investment'],
    source: 'Trade Magazine'
  }
];

const trendingTopics = [
  { topic: 'Box Office Records', count: 1240 },
  { topic: 'Netflix Originals', count: 890 },
  { topic: 'Film Festivals', count: 756 },
  { topic: 'Virtual Production', count: 567 },
  { topic: 'Film Infrastructure', count: 445 }
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedArticles, setSavedArticles] = useState<string[]>([]);

  const categories = ['all', 'Box Office', 'Streaming', 'Festivals', 'Technology', 'Infrastructure'];

  const filteredNews = mockNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const handleSaveArticle = (articleId: string) => {
    setSavedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const handleShareArticle = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${article.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Film Industry News
              </h1>
              <p className="text-muted-foreground mt-2">Stay updated with the latest happenings in cinema</p>
            </div>
            <Badge className="bg-red-500 text-white animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Live Updates
            </Badge>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full sm:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs">
                    {category === 'all' ? 'All' : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main News Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Breaking News */}
            {filteredNews.filter(article => article.isBreaking).length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                  Breaking News
                </h2>
                <div className="space-y-4">
                  {filteredNews.filter(article => article.isBreaking).map((article) => (
                    <Card key={article.id} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <Badge className="bg-red-500 text-white mb-2">Breaking</Badge>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleSaveArticle(article.id)}
                                  className={savedArticles.includes(article.id) ? 'text-primary' : 'text-muted-foreground'}
                                >
                                  <Bookmark className={`h-4 w-4 ${savedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleShareArticle(article)}
                                >
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground mb-3 line-clamp-2">{article.summary}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{article.source}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatTimeAgo(article.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{article.views.toLocaleString()}</span>
                              </div>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular News */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Film className="h-5 w-5 mr-2 text-primary" />
                Latest News
              </h2>
              <div className="space-y-6">
                {filteredNews.filter(article => !article.isBreaking).map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-32 h-24 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant="outline">{article.category}</Badge>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleSaveArticle(article.id)}
                                className={savedArticles.includes(article.id) ? 'text-primary' : 'text-muted-foreground'}
                              >
                                <Bookmark className={`h-4 w-4 ${savedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleShareArticle(article)}
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 hover:text-primary cursor-pointer transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">{article.summary}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="font-medium">{article.source}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatTimeAgo(article.publishedAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{article.views.toLocaleString()}</span>
                              </div>
                              <span>{article.readTime}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Read More
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg cursor-pointer transition-colors">
                    <div>
                      <p className="font-medium text-sm">{topic.topic}</p>
                      <p className="text-xs text-muted-foreground">{topic.count} posts</p>
                    </div>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Industry Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Projects</span>
                  <span className="font-medium text-primary">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Box Office This Week</span>
                  <span className="font-medium text-primary">₹500Cr+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Releases</span>
                  <span className="font-medium text-primary">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Upcoming Events</span>
                  <span className="font-medium text-primary">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Daily Digest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest film industry news delivered to your inbox every morning.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
