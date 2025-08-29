"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Clock, 
  Filter,
  Play,
  Award,
  Camera,
  Film,
  Globe,
  TrendingUp,
  Bookmark,
  Share2,
  Plus,
  Video,
  Mic,
  Users2,
  Sparkles,
  Heart,
  Eye,
  Zap,
  Crown,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  CalendarDays,
  MapPinIcon
} from 'lucide-react';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  // Mock data for cinema industry events
  const upcomingEvents = [
    {
      id: 1,
      title: "Sundance Film Festival 2024",
      date: "Jan 25 - Feb 4, 2024",
      time: "All Day",
      location: "Park City, Utah",
      type: "Festival",
      attendees: 45000,
      price: "Free - $500",
      image: "/api/placeholder/400/200",
      description: "The premier showcase for independent films, featuring world premieres, panels, and networking opportunities.",
      category: "Festival",
      featured: true,
      tags: ["Independent", "Premieres", "Networking"],
      organizer: "Sundance Institute",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.9,
      reviews: 1247,
      isVirtual: false,
      isLive: true
    },
    {
      id: 2,
      title: "Cinematography Masterclass",
      date: "Jan 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Los Angeles, CA",
      type: "Workshop",
      attendees: 23,
      price: "$150",
      image: "/api/placeholder/400/200",
      description: "Learn advanced lighting techniques and camera movement from award-winning cinematographer.",
      category: "Workshop",
      featured: false,
      tags: ["Cinematography", "Lighting", "Technical"],
      organizer: "ASC Masterclass",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.8,
      reviews: 892,
      isVirtual: true,
      isLive: false
    },
    {
      id: 3,
      title: "Screenwriting Seminar",
      date: "Feb 2, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "New York, NY",
      type: "Seminar",
      attendees: 67,
      price: "$200",
      image: "/api/placeholder/400/200",
      description: "Master the art of storytelling with industry professionals and get feedback on your scripts.",
      category: "Seminar",
      featured: false,
      tags: ["Screenwriting", "Storytelling", "Feedback"],
      organizer: "Writers Guild",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.7,
      reviews: 567,
      isVirtual: false,
      isLive: false
    },
    {
      id: 4,
      title: "Film Industry Mixer",
      date: "Feb 5, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "London, UK",
      type: "Networking",
      attendees: 120,
      price: "$75",
      image: "/api/placeholder/400/200",
      description: "Connect with producers, directors, and industry professionals in an intimate networking setting.",
      category: "Networking",
      featured: false,
      tags: ["Networking", "Industry", "Connections"],
      organizer: "British Film Institute",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.6,
      reviews: 234,
      isVirtual: false,
      isLive: false
    },
    {
      id: 5,
      title: "Oscars Watch Party",
      date: "Mar 10, 2024",
      time: "5:00 PM - 11:00 PM",
      location: "Multiple Cities",
      type: "Watch Party",
      attendees: 500,
      price: "$25",
      image: "/api/placeholder/400/200",
      description: "Join fellow film enthusiasts to watch the Academy Awards and celebrate cinema's biggest night.",
      category: "Watch Party",
      featured: true,
      tags: ["Oscars", "Celebration", "Community"],
      organizer: "Film Enthusiasts Network",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.9,
      reviews: 1892,
      isVirtual: true,
      isLive: false
    },
    {
      id: 6,
      title: "Documentary Filmmaking Workshop",
      date: "Feb 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      type: "Workshop",
      attendees: 35,
      price: "$300",
      image: "/api/placeholder/400/200",
      description: "Learn documentary filmmaking techniques, from pre-production to post-production.",
      category: "Workshop",
      featured: false,
      tags: ["Documentary", "Filmmaking", "Production"],
      organizer: "Doc Society",
      organizerAvatar: "/api/placeholder/40/40",
      rating: 4.5,
      reviews: 123,
      isVirtual: false,
      isLive: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar, count: upcomingEvents.length },
    { id: 'festival', label: 'Festivals', icon: Award, count: upcomingEvents.filter(e => e.category === 'Festival').length },
    { id: 'workshop', label: 'Workshops', icon: Camera, count: upcomingEvents.filter(e => e.category === 'Workshop').length },
    { id: 'seminar', label: 'Seminars', icon: Video, count: upcomingEvents.filter(e => e.category === 'Seminar').length },
    { id: 'networking', label: 'Networking', icon: Users2, count: upcomingEvents.filter(e => e.category === 'Networking').length },
    { id: 'watch-party', label: 'Watch Parties', icon: Play, count: upcomingEvents.filter(e => e.category === 'Watch Party').length }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (eventId: number) => {
    setFavorites(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const EventCard = ({ event }: { event: typeof upcomingEvents[0] }) => (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative">
        {/* Event Image/Background */}
        <div className="h-40 sm:h-56 bg-gradient-to-br from-primary/10 via-primary/5 to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Film className="h-12 w-12 sm:h-20 sm:w-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" />
                <div className="absolute inset-0 animate-pulse">
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-primary/20 absolute top-2 right-2" />
                </div>
              </div>
            </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {event.featured && (
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          {event.isLive && (
            <Badge className="bg-red-500 text-white animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-1 animate-ping" />
              LIVE
            </Badge>
          )}
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30">
            {event.type}
          </Badge>
          {event.isVirtual && (
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-blue-500/30 text-blue-400">
              <Globe className="h-3 w-3 mr-1" />
              Virtual
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={() => toggleFavorite(event.id)}
        >
          <Heart className={`h-4 w-4 ${favorites.includes(event.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </Button>
      </div>
      
      <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Event Title & Rating */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium ml-1">{event.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({event.reviews.toLocaleString()} reviews)</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <CalendarDays className="h-4 w-4 mr-2 text-primary" />
            <span className="text-foreground">{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
            <span className="text-foreground">{event.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-primary" />
            <span className="text-foreground">{event.attendees.toLocaleString()} attendees</span>
          </div>
        </div>

        {/* Organizer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 ring-2 ring-primary/20">
              <AvatarImage src={event.organizerAvatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {event.organizer.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{event.organizer}</p>
              <p className="text-xs text-muted-foreground">Organizer</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-semibold bg-primary/10 text-primary border-primary/20">
            {event.price}
          </Badge>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2">
          {event.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-background/50 border-border/50">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300">
            Register Now
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/25">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Cinema Events
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mt-1">Discover & Connect</p>
              </div>
            </div>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the world of cinema through exclusive festivals, masterclasses, 
              networking events, and industry gatherings curated for film professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-4 sm:p-6">
              <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1">150+</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Upcoming Events</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50K+</h3>
              <p className="text-muted-foreground text-sm">Active Attendees</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">25+</h3>
              <p className="text-muted-foreground text-sm">Cities Worldwide</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">4.8</h3>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search events, locations, or organizers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
              />
            </div>
            <Button variant="outline" className="lg:w-auto h-12 px-6 border-border/50 hover:border-primary/50">
              <Filter className="h-5 w-5 mr-2" />
              Advanced Filters
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold h-12 px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Plus className="h-5 w-5 mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-6 bg-card/50 border-border/50 p-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No events found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria or browse all events</p>
            <Button 
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold"
            >
              Browse All Events
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
