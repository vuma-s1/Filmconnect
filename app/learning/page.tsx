"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Play, 
  BookOpen, 
  Star, 
  Clock, 
  Users, 
  Filter,
  Award,
  Camera,
  Film,
  Video,
  Mic,
  Users2,
  Sparkles,
  TrendingUp,
  Bookmark,
  Share2,
  Plus,
  Target,
  Lightbulb,
  Zap,
  Crown,
  CheckCircle,
  ArrowRight,
  Headphones,
  Monitor,
  Smartphone,
  Heart,
  Eye,
  ExternalLink,
  CalendarDays,
  MapPinIcon,
  GraduationCap,
  Trophy,
  Clock3
} from 'lucide-react';

const LearningPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  // Mock data for cinema industry learning content
  const courses = [
    {
      id: 1,
      title: "Advanced Cinematography Masterclass",
      instructor: "Roger Deakins",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "8 hours",
      level: "Advanced",
      rating: 4.9,
      students: 1247,
      price: "$299",
      originalPrice: "$399",
      image: "/api/placeholder/400/200",
      description: "Learn advanced lighting techniques, camera movement, and visual storytelling from the legendary cinematographer.",
      category: "Cinematography",
      featured: true,
      tags: ["Lighting", "Camera Movement", "Visual Storytelling"],
      lessons: 24,
      certificate: true,
      progress: 0,
      isBestseller: true,
      isNew: false,
      completionRate: 94,
      lastUpdated: "2 weeks ago"
    },
    {
      id: 2,
      title: "Screenwriting Fundamentals",
      instructor: "Aaron Sorkin",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "12 hours",
      level: "Beginner",
      rating: 4.8,
      students: 2156,
      price: "$199",
      originalPrice: "$249",
      image: "/api/placeholder/400/200",
      description: "Master the basics of screenwriting, from story structure to character development and dialogue.",
      category: "Screenwriting",
      featured: false,
      tags: ["Story Structure", "Character Development", "Dialogue"],
      lessons: 32,
      certificate: true,
      progress: 0,
      isBestseller: false,
      isNew: true,
      completionRate: 89,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Film Editing with Adobe Premiere Pro",
      instructor: "Thelma Schoonmaker",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "10 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 1893,
      price: "$179",
      originalPrice: "$229",
      image: "/api/placeholder/400/200",
      description: "Learn professional editing techniques and workflow optimization for feature films and documentaries.",
      category: "Editing",
      featured: false,
      tags: ["Premiere Pro", "Workflow", "Professional Techniques"],
      lessons: 28,
      certificate: true,
      progress: 0,
      isBestseller: true,
      isNew: false,
      completionRate: 91,
      lastUpdated: "3 weeks ago"
    },
    {
      id: 4,
      title: "Sound Design for Film",
      instructor: "Ben Burtt",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "6 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 892,
      price: "$149",
      originalPrice: "$199",
      image: "/api/placeholder/400/200",
      description: "Create immersive soundscapes and learn the art of sound design for cinematic storytelling.",
      category: "Sound Design",
      featured: false,
      tags: ["Sound Design", "Audio Engineering", "Storytelling"],
      lessons: 18,
      certificate: true,
      progress: 0,
      isBestseller: false,
      isNew: false,
      completionRate: 87,
      lastUpdated: "1 month ago"
    },
    {
      id: 5,
      title: "Acting for Camera",
      instructor: "Meryl Streep",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "14 hours",
      level: "All Levels",
      rating: 4.9,
      students: 3421,
      price: "$249",
      originalPrice: "$299",
      image: "/api/placeholder/400/200",
      description: "Develop your acting skills specifically for film and television with practical exercises and techniques.",
      category: "Acting",
      featured: true,
      tags: ["Acting", "Performance", "Technique"],
      lessons: 36,
      certificate: true,
      progress: 0,
      isBestseller: true,
      isNew: false,
      completionRate: 96,
      lastUpdated: "2 weeks ago"
    },
    {
      id: 6,
      title: "Documentary Filmmaking",
      instructor: "Ken Burns",
      instructorAvatar: "/api/placeholder/40/40",
      duration: "16 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 1567,
      price: "$279",
      originalPrice: "$349",
      image: "/api/placeholder/400/200",
      description: "Learn the art of documentary filmmaking from research to final cut with real-world projects.",
      category: "Documentary",
      featured: false,
      tags: ["Documentary", "Research", "Storytelling"],
      lessons: 42,
      certificate: true,
      progress: 0,
      isBestseller: false,
      isNew: true,
      completionRate: 92,
      lastUpdated: "1 week ago"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen, count: courses.length },
    { id: 'cinematography', label: 'Cinematography', icon: Camera, count: courses.filter(c => c.category === 'Cinematography').length },
    { id: 'screenwriting', label: 'Screenwriting', icon: BookOpen, count: courses.filter(c => c.category === 'Screenwriting').length },
    { id: 'editing', label: 'Editing', icon: Video, count: courses.filter(c => c.category === 'Editing').length },
    { id: 'sound-design', label: 'Sound Design', icon: Headphones, count: courses.filter(c => c.category === 'Sound Design').length },
    { id: 'acting', label: 'Acting', icon: Mic, count: courses.filter(c => c.category === 'Acting').length },
    { id: 'documentary', label: 'Documentary', icon: Film, count: courses.filter(c => c.category === 'Documentary').length }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (courseId: number) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative">
        {/* Course Image/Background */}
        <div className="h-56 bg-gradient-to-br from-primary/10 via-primary/5 to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Video className="h-20 w-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" />
              <div className="absolute inset-0 animate-pulse">
                <Sparkles className="h-6 w-6 text-primary/20 absolute top-2 right-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {course.featured && (
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          {course.isBestseller && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow-lg">
              <Trophy className="h-3 w-3 mr-1" />
              Bestseller
            </Badge>
          )}
          {course.isNew && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg">
              <Zap className="h-3 w-3 mr-1" />
              New
            </Badge>
          )}
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30">
            {course.level}
          </Badge>
          {course.certificate && (
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-blue-500/30 text-blue-400">
              <Award className="h-3 w-3 mr-1" />
              Certificate
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={() => toggleFavorite(course.id)}
        >
          <Heart className={`h-4 w-4 ${favorites.includes(course.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </Button>

        {/* Preview Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 shadow-lg">
            <Play className="h-5 w-5 mr-2" />
            Preview Course
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Course Title & Rating */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium ml-1">{course.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({course.students.toLocaleString()} students)</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center space-x-3 pt-2 border-t border-border/50">
          <Avatar className="h-8 w-8 ring-2 ring-primary/20">
            <AvatarImage src={course.instructorAvatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {course.instructor.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{course.instructor}</p>
            <p className="text-xs text-muted-foreground">Instructor</p>
          </div>
        </div>

        {/* Course Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Clock3 className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              {course.lessons} lessons
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-1" />
              {course.completionRate}% completion
            </div>
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="h-4 w-4 mr-1" />
              {course.lastUpdated}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-2">
          {course.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-background/50 border-border/50">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">{course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
            )}
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Enroll Now
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
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
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Cinema Learning
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mt-1">Master Your Craft</p>
              </div>
            </div>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from industry legends and master the art of filmmaking with expert-led courses, 
              hands-on tutorials, and comprehensive learning paths designed for cinema professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">150+</h3>
              <p className="text-muted-foreground text-sm">Expert Courses</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">25K+</h3>
              <p className="text-muted-foreground text-sm">Active Students</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50+</h3>
              <p className="text-muted-foreground text-sm">Industry Experts</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">95%</h3>
              <p className="text-muted-foreground text-sm">Completion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses, instructors, or topics..."
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
              <Crown className="h-5 w-5 mr-2" />
              Premium Access
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-7 bg-card/50 border-border/50 p-1">
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No courses found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria or browse all courses</p>
            <Button 
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold"
            >
              Browse All Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;
