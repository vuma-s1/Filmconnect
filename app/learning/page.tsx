"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LearningPathCard } from '@/components/learning/LearningPathCard';
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
  GraduationCap,
  Trophy,
  Clock3,
  Loader2,
  Languages,
  BookText,
  Briefcase,
  UserCog,
  BrainCircuit,
  ShieldCheck,
  Rocket,
  BarChart2,
  Users2,
  ArrowRightCircle,
  CheckCircle2,
  Globe,
  ChevronDown
} from 'lucide-react';

// Types
type Language = {
  code: string;
  name: string;
  flag: string;
};

type LearningPath = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  category: 'long' | 'short' | 'crew' | 'ai';
  tags: string[];
  featured?: boolean;
};

const LearningPage = () => {
  // State
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({ code: 'en', name: 'English', flag: '🇬🇧' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPathway, setSelectedPathway] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [enrollingCourses, setEnrollingCourses] = useState<string[]>([]);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  // Available languages
  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  ];

  // Learning paths data
  const learningPaths: LearningPath[] = [
    {
      id: 'cinematography',
      title: 'Advanced Cinematography',
      description: 'Master the art of visual storytelling through camera work',
      icon: <Camera className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'long',
      tags: ['Camera', 'Lighting', 'Visual Storytelling'],
      featured: true
    },
    {
      id: 'screenwriting',
      title: 'Screenwriting Fundamentals',
      description: 'Learn the basics of writing compelling scripts',
      icon: <BookText className="h-5 w-5" />,
      duration: '6 weeks',
      level: 'Beginner',
      progress: 25,
      category: 'long',
      tags: ['Writing', 'Story Structure', 'Character Development']
    },
    {
      id: 'sound-design',
      title: 'Sound Design Essentials',
      description: 'Create immersive audio experiences',
      icon: <Headphones className="h-5 w-5" />,
      duration: '4 weeks',
      level: 'Intermediate',
      progress: 60,
      category: 'short',
      tags: ['Audio', 'Sound Effects', 'Music']
    },
    {
      id: 'editing',
      title: 'Video Editing Masterclass',
      description: 'Professional editing techniques and workflows',
      icon: <Video className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Editing', 'Post-Production', 'Workflow']
    },
    {
      id: 'acting',
      title: 'Method Acting Workshop',
      description: 'Develop your acting skills with proven techniques',
      icon: <Users className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Beginner',
      progress: 0,
      category: 'long',
      tags: ['Acting', 'Performance', 'Character']
    },
    {
      id: 'production',
      title: 'Film Production Management',
      description: 'Learn to manage film projects from start to finish',
      icon: <Briefcase className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'crew',
      tags: ['Management', 'Production', 'Leadership']
    },
    {
      id: 'vfx',
      title: 'Visual Effects Basics',
      description: 'Introduction to VFX and digital compositing',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '6 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'short',
      tags: ['VFX', 'Digital', 'Compositing']
    },
    {
      id: 'ai-cinematography',
      title: 'AI-Powered Cinematography',
      description: 'Learn AI tools for lighting, camera movement, and visual effects',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '4 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'ai',
      tags: ['AI', 'Cinematography', 'Technology']
    },
    {
      id: 'ai-editing',
      title: 'AI Video Editing Assistant',
      description: 'Master AI-powered editing tools and workflows',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '3 weeks',
      level: 'Beginner',
      progress: 0,
      category: 'ai',
      tags: ['AI', 'Editing', 'Automation']
    },
    {
      id: 'sop-safety',
      title: 'On-Set Safety & SOPs',
      description: 'Essential safety protocols and standard operating procedures',
      icon: <ShieldCheck className="h-5 w-5" />,
      duration: '2 weeks',
      level: 'Beginner',
      progress: 0,
      category: 'short',
      tags: ['Safety', 'SOPs', 'Compliance']
    },
    {
      id: 'directing',
      title: 'Film Directing Workshop',
      description: 'Master the art of film direction',
      icon: <Video className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'long',
      tags: ['Directing', 'Filmmaking', 'Leadership']
    }
  ];

  // Filter learning paths based on search, pathway, and category
  const filteredLearningPaths = useMemo(() => {
    return learningPaths.filter(path => {
      const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPathway = selectedPathway === 'all' || path.category === selectedPathway;
      const matchesCategory = selectedCategory === 'all' || path.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      return matchesSearch && matchesPathway && matchesCategory;
    });
  }, [searchQuery, selectedPathway, selectedCategory]);

  // Handle bookmark toggle
  const toggleBookmark = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Handle enrollment
  const handleEnroll = async (id: string) => {
    setEnrollingCourses(prev => [...prev, id]);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEnrollingCourses(prev => prev.filter(courseId => courseId !== id));
    // Update progress or navigate to course
  };

  // Calculate stats
  const stats = useMemo(() => ({
    totalCourses: learningPaths.length,
    inProgress: learningPaths.filter(p => p.progress > 0 && p.progress < 100).length,
    completed: learningPaths.filter(p => p.progress === 100).length,
    bookmarked: favorites.length,
  }), [favorites, learningPaths]);

  // Learning pathways
  const pathways = [
    { id: 'all', label: 'All Pathways', icon: BookOpen, count: learningPaths.length },
    { id: 'long', label: 'Long-Form Mastery', icon: CalendarDays, count: learningPaths.filter(p => p.category === 'long').length },
    { id: 'short', label: 'Short-Form SOPs', icon: Clock, count: learningPaths.filter(p => p.category === 'short').length },
    { id: 'crew', label: 'Labour & Crew', icon: Users, count: learningPaths.filter(p => p.category === 'crew').length },
    { id: 'ai', label: 'AI-Powered', icon: Sparkles, count: learningPaths.filter(p => p.category === 'ai').length }
  ];

  // Learning categories
  const categories = [
    { id: 'all', label: 'All Crafts', icon: BookOpen, count: learningPaths.length },
    { id: 'cinematography', label: 'Cinematography', icon: Camera, count: learningPaths.filter(p => p.tags.includes('Camera')).length },
    { id: 'directing', label: 'Directing', icon: Video, count: learningPaths.filter(p => p.tags.includes('Directing')).length },
    { id: 'editing', label: 'Editing', icon: Film, count: learningPaths.filter(p => p.tags.includes('Editing')).length },
    { id: 'sound', label: 'Sound Design', icon: Headphones, count: learningPaths.filter(p => p.tags.includes('Audio')).length },
    { id: 'acting', label: 'Acting', icon: Mic, count: learningPaths.filter(p => p.tags.includes('Acting')).length },
    { id: 'production', label: 'Production', icon: Briefcase, count: learningPaths.filter(p => p.tags.includes('Production')).length }
  ];

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
            
            {/* Language Selector */}
            <div className="mt-6 flex items-center justify-center">
              <Button
                variant="outline"
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="bg-background/80 backdrop-blur-sm border-primary/30 hover:border-primary/50"
              >
                <Globe className="h-4 w-4 mr-2" />
                {selectedLanguage.flag} {selectedLanguage.name}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            {showLanguageSelector && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-2xl mx-auto">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageSelector(false);
                    }}
                    className={`h-12 ${selectedLanguage.code === lang.code ? 'bg-primary text-black' : 'bg-background/60 hover:bg-background/80'}`}
                  >
                    <span className="text-lg mr-2">{lang.flag}</span>
                    <span className="text-xs">{lang.name}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-4 lg:p-6">
              <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                <BookOpen className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-2xl font-bold mb-1">200+</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">Learning Paths</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-4 lg:p-6">
              <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                <Users className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-2xl font-bold mb-1">50K+</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">Active Learners</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-4 lg:p-6">
              <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                <Award className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-2xl font-bold mb-1">100+</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">Industry Experts</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-4 lg:p-6">
              <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                <CheckCircle className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-2xl font-bold mb-1">95%</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">Completion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground" />
              <Input
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 lg:pl-12 h-10 lg:h-12 text-base lg:text-lg bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Button variant="outline" className="flex-1 sm:flex-none h-10 lg:h-12 px-4 lg:px-6 border-border/50 hover:border-primary/50 text-sm lg:text-base">
                <Filter className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
              <Button className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-primary/80 text-black font-bold h-10 lg:h-12 px-4 lg:px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm lg:text-base border border-primary/20">
                <Crown className="h-4 w-4 lg:h-5 lg:w-5 mr-2 text-black" />
                <span className="hidden sm:inline text-black font-bold">Premium</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: Icon-Based Tab System */}
        <div className="lg:hidden mb-16">
          <Tabs value={`${selectedPathway}-${selectedCategory}`} onValueChange={(value) => {
            const [pathway, category] = value.split('-');
            setSelectedPathway(pathway);
            setSelectedCategory(category);
          }}>
            <TabsList className="flex w-full justify-center bg-transparent border-none p-0 gap-4">
                             {/* All Paths Tab */}
               <TabsTrigger 
                 value="all-all" 
                 className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-xl min-h-[60px] min-w-[60px] bg-card/50 border border-border/30 hover:border-primary/40 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black"
               >
                 <BookOpen className="h-6 w-6 text-white [&[data-state=active]]:!text-black" />
               </TabsTrigger>
               
               {/* Long-Form Mastery Tab */}
               <TabsTrigger 
                 value="long-all" 
                 className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-xl min-h-[60px] min-w-[60px] bg-card/50 border border-border/30 hover:border-primary/40 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black"
               >
                 <CalendarDays className="h-6 w-6 text-white [&[data-state=active]]:!text-black" />
               </TabsTrigger>
               
               {/* Short-Form SOPs Tab */}
               <TabsTrigger 
                 value="short-all" 
                 className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-xl min-h-[60px] min-w-[60px] bg-card/50 border border-border/30 hover:border-primary/40 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black"
               >
                 <Clock className="h-6 w-6 text-white [&[data-state=active]]:!text-black" />
               </TabsTrigger>
               
               {/* Labour & Crew Tab */}
               <TabsTrigger 
                 value="crew-all" 
                 className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-xl min-h-[60px] min-w-[60px] bg-card/50 border border-border/30 hover:border-primary/40 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black"
               >
                 <Users className="h-6 w-6 text-white [&[data-state=active]]:!text-black" />
               </TabsTrigger>
               
               {/* AI-Powered Tab */}
               <TabsTrigger 
                 value="ai-all" 
                 className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-xl min-h-[60px] min-w-[60px] bg-card/50 border border-border/30 hover:border-primary/40 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black"
               >
                 <Sparkles className="h-6 w-6 text-white [&[data-state=active]]:!text-black" />
               </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop: Original Pathway Tabs (unchanged) */}
        <div className="hidden lg:block mb-12">
          <Tabs value={selectedPathway} onValueChange={setSelectedPathway}>
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 bg-card/50 border-border/50 p-1 gap-1 [&_[data-state=active]]:text-black [&_[data-state=active]]:!text-black">
              {pathways.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <TabsTrigger 
                    key={pathway.id} 
                    value={pathway.id} 
                    className="flex items-center justify-center space-x-1 lg:space-x-2 data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 text-xs lg:text-sm px-2 lg:px-3 py-2 min-h-[40px] data-[state=active]:font-bold text-muted-foreground data-[state=active]:!text-black data-[state=active]:border-primary/20 [&[data-state=active]]:text-black [&[data-state=active]]:!text-black [&[data-state=active]_*]:text-black [&[data-state=active]_*]:!text-black"
                  >
                    <Icon className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0 text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:!text-black" />
                    <span className="hidden sm:inline lg:inline truncate text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:!text-black">{pathway.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 bg-card/50 border-border/50 p-1 gap-1 [&_[data-state=active]]:text-black [&_[data-state=active]]:!text-black">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="flex items-center justify-center space-x-1 lg:space-x-2 data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 text-xs lg:text-sm px-2 lg:px-3 py-2 min-h-[40px] data-[state=active]:font-bold text-muted-foreground data-[state=active]:!text-black data-[state=active]:border-primary/20 [&[data-state=active]]:text-black [&[data-state=active]]:!text-black [&[data-state=active]_*]:text-black [&[data-state=active]_*]:!text-black"
                  >
                    <Icon className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0 text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:!text-black" />
                    <span className="hidden sm:inline lg:inline truncate text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:!text-black">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Learning Paths Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredLearningPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              {...path}
              isBookmarked={favorites.includes(path.id)}
              isEnrolling={enrollingCourses.includes(path.id)}
              onBookmark={() => toggleBookmark(path.id)}
              onEnroll={() => handleEnroll(path.id)}
            />
          ))}
        </div>

        {filteredLearningPaths.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No learning paths found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria or browse all paths</p>
            <Button 
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold"
            >
              Browse All Paths
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;
