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
  ChevronDown,
  Menu,
  X,
  Home,
  BookmarkCheck,
  Calendar,
  Settings,
  HelpCircle,
  ChevronRight,
  Minus
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
  detailedDescription: string;
  instructor: string;
  instructorBio: string;
  instructorImage: string;
  instructorCredits: string[];
  courseModules: CourseModule[];
  industryUseCases: string[];
  certification: string;
  prerequisites: string[];
  toolsRequired: string[];
  projectBased: boolean;
  liveSessions: boolean;
  mentorship: boolean;
  jobPlacement: boolean;
  pricing: string;
  originalPrice: string;
  discount: string;
  enrollmentCount: number;
  rating: number;
  reviewCount: number;
  lastUpdated: string;
  language: string[];
  subtitles: boolean;
  lifetimeAccess: boolean;
  mobileAccess: boolean;
  certificate: boolean;
  assignments: boolean;
  communityAccess: boolean;
  industryPartners: string[];
  successStories: SuccessStory[];
};

type CourseModule = {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  topics: string[];
  practical: boolean;
  assignment: boolean;
  quiz: boolean;
};

type SuccessStory = {
  id: string;
  studentName: string;
  role: string;
  company: string;
  testimonial: string;
  beforeImage: string;
  afterImage: string;
  salaryIncrease: string;
  projectCount: number;
  rating: number;
};

const LearningPage = () => {
  // State
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({ code: 'en', name: 'English', flag: '🇬🇧' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPathway, setSelectedPathway] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [enrollingCourses, setEnrollingCourses] = useState<string[]>([]);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    learning: true,
    categories: true,
    resources: true,
    support: true,
    levels: true,
    duration: true,
    status: true
  });
  const [selectedCraft, setSelectedCraft] = useState<string | null>(null);

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

  // Learning paths data (comprehensive 24 crafts coverage)
  const learningPaths: LearningPath[] = [
    {
      id: 'complete-cinema-craftsmanship',
      title: 'Complete Cinema Craftsmanship',
      description: 'Master all 24 crafts of cinema from basic to advanced levels',
      icon: <Crown className="h-5 w-5" />,
      duration: '24 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'long',
      tags: ['All Crafts', 'Master Course', 'Complete Learning'],
      featured: true,
      detailedDescription: 'The ultimate comprehensive course covering all 24 crafts of cinema. From story writing to distribution, master every aspect of filmmaking with industry experts.',
      instructor: 'Cinema Masters Collective',
      instructorBio: 'A curated team of industry professionals with decades of combined experience across all cinema crafts.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Multiple Award Winners', 'Industry Veterans', 'Working Professionals'],
      courseModules: [
        { id: 'module1', title: 'Creative Arts Foundation', description: 'Story writing, direction, acting, and creative fundamentals', duration: '8 weeks', lessons: 40, topics: ['Screenwriting', 'Direction', 'Acting', 'Choreography'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Visual Arts Mastery', description: 'Cinematography, art direction, costumes, and visual elements', duration: '8 weeks', lessons: 40, topics: ['Cinematography', 'Art Direction', 'Costume Design', 'Lighting'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Technical Arts Excellence', description: 'Editing, VFX, sound, and post-production mastery', duration: '8 weeks', lessons: 40, topics: ['Editing', 'VFX', 'Sound Design', 'Color Grading'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Documentaries', 'Commercials', 'Web Series', 'Music Videos'],
      certification: 'Master of Cinema Crafts',
      prerequisites: ['Passion for filmmaking', 'Basic computer skills'],
      toolsRequired: ['Professional Software Suite', 'Industry Equipment Access'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$999',
      originalPrice: '$1499',
      discount: '33% off',
      enrollmentCount: 500,
      rating: 4.9,
      reviewCount: 200,
      lastUpdated: '2024-01-15',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Sony', 'Red', 'Arri', 'Adobe', 'Blackmagic Design'],
      successStories: [
        { id: 'story1', studentName: 'Rajesh Kumar', role: 'Filmmaker', company: 'Independent Studio', testimonial: 'This course transformed me from a beginner to a professional filmmaker. Every craft is covered in detail.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 15, rating: 5 },
        { id: 'story2', studentName: 'Priya Sharma', role: 'Cinematographer', company: 'Bollywood Productions', testimonial: 'The comprehensive coverage of all crafts gave me a complete understanding of filmmaking.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '150%', projectCount: 12, rating: 5 }
      ]
    },
    {
      id: 'story-writing-mastery',
      title: 'Story Writing Mastery',
      description: 'Master scriptwriting, screenplays, dialogues, and storytelling',
      icon: <BookText className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Story Writing', 'Screenplay', 'Dialogues', 'Scriptwriting'],
      featured: true,
      detailedDescription: 'Learn the art of storytelling from concept to final screenplay. Master character development, plot structure, and compelling dialogue writing.',
      instructor: 'Amitabh Bachchan',
      instructorBio: 'Legendary actor and screenwriter with over 50 years in Indian cinema. Known for his powerful dialogue delivery and storytelling.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Padma Vibhushan', '50+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'Story Development', description: 'Concept creation, character building, and plot structure', duration: '2 weeks', lessons: 10, topics: ['Story Concept', 'Character Development', 'Plot Structure'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Screenplay Writing', description: 'Format, structure, and screenplay techniques', duration: '3 weeks', lessons: 15, topics: ['Screenplay Format', 'Scene Writing', 'Dialogue Crafting'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Advanced Techniques', description: 'Genre-specific writing and industry standards', duration: '3 weeks', lessons: 15, topics: ['Genre Writing', 'Industry Standards', 'Pitching'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Web Series', 'TV Shows', 'Documentaries'],
      certification: 'Master Storyteller Certificate',
      prerequisites: ['Basic writing skills', 'Love for storytelling'],
      toolsRequired: ['Screenwriting Software', 'Notebook', 'Creative Mind'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$399',
      originalPrice: '$599',
      discount: '33% off',
      enrollmentCount: 1200,
      rating: 4.8,
      reviewCount: 180,
      lastUpdated: '2024-01-10',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Screenwriters Association', 'Film Writers Guild'],
      successStories: [
        { id: 'story1', studentName: 'Vikram Singh', role: 'Screenwriter', company: 'Netflix India', testimonial: 'Learned the art of screenplay writing from the legend himself. Now writing for major platforms.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 8, rating: 5 },
        { id: 'story2', studentName: 'Anjali Patel', role: 'Story Writer', company: 'Amazon Prime', testimonial: 'The course structure and mentorship helped me break into the industry.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '150%', projectCount: 6, rating: 4.9 }
      ]
    },
    {
      id: 'cinematography-excellence',
      title: 'Cinematography Excellence',
      description: 'Master camera work, lighting, and visual storytelling',
      icon: <Camera className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'long',
      tags: ['Cinematography', 'Camera', 'Lighting', 'Visual Storytelling'],
      featured: true,
      detailedDescription: 'Advanced cinematography course covering camera techniques, lighting design, and visual storytelling. Learn from industry professionals.',
      instructor: 'Ravi Varman',
      instructorBio: 'Award-winning cinematographer known for his work in films like "Dilwale Dulhania Le Jayenge" and "Lagaan".',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Multiple Filmfare Awards', '30+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'Camera Mastery', description: 'Camera types, lenses, and shooting techniques', duration: '3 weeks', lessons: 15, topics: ['Camera Types', 'Lens Selection', 'Shooting Techniques'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Lighting Design', description: 'Natural and artificial lighting techniques', duration: '4 weeks', lessons: 20, topics: ['Natural Lighting', 'Artificial Lighting', 'Color Theory'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Visual Storytelling', description: 'Composition, movement, and visual narrative', duration: '3 weeks', lessons: 15, topics: ['Composition', 'Camera Movement', 'Visual Narrative'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Commercials', 'Music Videos', 'Documentaries'],
      certification: 'Master Cinematographer Certificate',
      prerequisites: ['Basic camera knowledge', 'Understanding of filmmaking'],
      toolsRequired: ['Professional Camera', 'Lighting Equipment', 'Editing Software'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$599',
      originalPrice: '$799',
      discount: '25% off',
      enrollmentCount: 800,
      rating: 4.9,
      reviewCount: 120,
      lastUpdated: '2024-01-12',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Sony', 'Red', 'Arri', 'Canon'],
      successStories: [
        { id: 'story1', studentName: 'Arjun Mehta', role: 'Cinematographer', company: 'Bollywood Productions', testimonial: 'Learned advanced techniques from Ravi sir. Now working on major films.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 10, rating: 5 },
        { id: 'story2', studentName: 'Riya Kapoor', role: 'DOP', company: 'Independent Films', testimonial: 'The practical workshops were incredible. Real industry experience.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 8, rating: 4.9 }
      ]
    },
    {
      id: 'acting-masterclass',
      title: 'Acting Masterclass',
      description: 'Master the art of acting for cinema and television',
      icon: <Users className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Acting', 'Performance', 'Character Development', 'Method Acting'],
      featured: true,
      detailedDescription: 'Comprehensive acting course covering method acting, character development, and performance techniques for cinema and television.',
      instructor: 'Naseeruddin Shah',
      instructorBio: 'Legendary actor and acting coach with over 40 years of experience. Known for his versatile performances and teaching methods.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Padma Shri', '40+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'Acting Fundamentals', description: 'Basic acting techniques and character building', duration: '4 weeks', lessons: 20, topics: ['Acting Basics', 'Character Building', 'Emotion Expression'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Method Acting', description: 'Advanced acting techniques and performance methods', duration: '4 weeks', lessons: 20, topics: ['Method Acting', 'Character Analysis', 'Performance Techniques'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Industry Preparation', description: 'Audition techniques and industry navigation', duration: '4 weeks', lessons: 20, topics: ['Audition Skills', 'Industry Knowledge', 'Career Guidance'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'TV Shows', 'Web Series', 'Theater'],
      certification: 'Master Actor Certificate',
      prerequisites: ['Passion for acting', 'Basic communication skills'],
      toolsRequired: ['Mirror', 'Recording Device', 'Acting Space'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$499',
      originalPrice: '$699',
      discount: '28% off',
      enrollmentCount: 1500,
      rating: 4.8,
      reviewCount: 250,
      lastUpdated: '2024-01-08',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['National School of Drama', 'Film and Television Institute'],
      successStories: [
        { id: 'story1', studentName: 'Karan Malhotra', role: 'Actor', company: 'Bollywood Films', testimonial: 'Naseer sir\'s guidance changed my acting career completely. Now getting lead roles.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '300%', projectCount: 5, rating: 5 },
        { id: 'story2', studentName: 'Zara Khan', role: 'TV Actress', company: 'Major TV Networks', testimonial: 'The method acting techniques are incredible. My performances have improved dramatically.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 3, rating: 4.9 }
      ]
    },
    {
      id: 'music-composition-cinema',
      title: 'Music Composition for Cinema',
      description: 'Master music composition, background scores, and film music',
      icon: <Headphones className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Music Composition', 'Background Score', 'Film Music', 'Soundtrack'],
      featured: false,
      detailedDescription: 'Learn to compose music for films, create background scores, and understand the relationship between music and visual storytelling.',
      instructor: 'A.R. Rahman',
      instructorBio: 'Oscar-winning composer and music director. Known for his innovative compositions and global impact on film music.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Oscar Winner', 'Grammy Winner', 'National Film Award Winner'],
      courseModules: [
        { id: 'module1', title: 'Music Theory', description: 'Fundamentals of music theory and composition', duration: '3 weeks', lessons: 15, topics: ['Music Theory', 'Composition Basics', 'Harmony'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Film Music', description: 'Creating music for different film genres', duration: '4 weeks', lessons: 20, topics: ['Genre Music', 'Emotional Scoring', 'Film Integration'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Production & Mixing', description: 'Music production and final mixing techniques', duration: '3 weeks', lessons: 15, topics: ['Music Production', 'Mixing', 'Mastering'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Documentaries', 'Commercials', 'Web Series'],
      certification: 'Film Music Composer Certificate',
      prerequisites: ['Basic music knowledge', 'Understanding of emotions'],
      toolsRequired: ['Music Software', 'MIDI Controller', 'Studio Equipment'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$699',
      originalPrice: '$899',
      discount: '22% off',
      enrollmentCount: 600,
      rating: 4.9,
      reviewCount: 100,
      lastUpdated: '2024-01-05',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['KM Music Conservatory', 'Professional Studios'],
      successStories: [
        { id: 'story1', studentName: 'Rahul Sharma', role: 'Music Composer', company: 'Bollywood Films', testimonial: 'Learning from A.R. Rahman sir was a dream come true. Now composing for major films.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '250%', projectCount: 8, rating: 5 },
        { id: 'story2', studentName: 'Priya Iyer', role: 'Background Score Composer', company: 'Documentary Films', testimonial: 'The course structure is perfect for understanding film music composition.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 6, rating: 4.8 }
      ]
    },
    {
      id: 'vfx-animation-mastery',
      title: 'VFX & Animation Mastery',
      description: 'Master visual effects, CGI, and animation for cinema',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'ai',
      tags: ['VFX', 'Animation', 'CGI', 'Visual Effects'],
      featured: false,
      detailedDescription: 'Comprehensive course covering visual effects, computer-generated imagery, and animation techniques used in modern cinema.',
      instructor: 'Vikram Adve',
      instructorBio: 'Leading VFX supervisor with credits on major Hollywood and Bollywood films. Expert in cutting-edge visual effects technology.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['VFX Supervisor', 'Industry Innovator', '20+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'VFX Fundamentals', description: 'Basic visual effects and compositing', duration: '4 weeks', lessons: 20, topics: ['VFX Basics', 'Compositing', 'Green Screen'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: '3D Animation', description: '3D modeling, animation, and rendering', duration: '4 weeks', lessons: 20, topics: ['3D Modeling', 'Animation', 'Rendering'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Advanced VFX', description: 'Advanced techniques and industry workflows', duration: '4 weeks', lessons: 20, topics: ['Advanced VFX', 'Industry Workflows', 'Project Management'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Commercials', 'Gaming', 'Architecture'],
      certification: 'VFX & Animation Master Certificate',
      prerequisites: ['Basic computer skills', 'Creative mindset'],
      toolsRequired: ['VFX Software', 'High-end Computer', 'Graphics Tablet'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$799',
      originalPrice: '$1099',
      discount: '27% off',
      enrollmentCount: 400,
      rating: 4.8,
      reviewCount: 80,
      lastUpdated: '2024-01-03',
      language: ['English'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Autodesk', 'Adobe', 'Foundry', 'SideFX'],
      successStories: [
        { id: 'story1', studentName: 'Amit Patel', role: 'VFX Artist', company: 'Major VFX Studios', testimonial: 'The course covered everything from basics to advanced techniques. Now working on blockbuster films.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '300%', projectCount: 12, rating: 5 },
        { id: 'story2', studentName: 'Neha Singh', role: '3D Animator', company: 'Animation Studios', testimonial: 'The practical projects were industry-standard. Great preparation for real work.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '250%', projectCount: 8, rating: 4.9 }
      ]
    },
    {
      id: 'editing-post-production',
      title: 'Editing & Post-Production Mastery',
      description: 'Master film editing, color grading, and post-production',
      icon: <Film className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Editing', 'Post-Production', 'Color Grading', 'Film Editing'],
      featured: false,
      detailedDescription: 'Comprehensive course covering film editing, color grading, and complete post-production workflows used in professional cinema.',
      instructor: 'Aarti Bajaj',
      instructorBio: 'Award-winning film editor known for her work on critically acclaimed films. Expert in narrative editing and post-production.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Multiple Filmfare Awards', '25+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'Editing Fundamentals', description: 'Basic editing techniques and storytelling', duration: '3 weeks', lessons: 15, topics: ['Editing Basics', 'Storytelling', 'Pacing'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Advanced Editing', description: 'Advanced techniques and industry workflows', duration: '4 weeks', lessons: 20, topics: ['Advanced Editing', 'Workflows', 'Collaboration'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Color Grading', description: 'Color correction and grading techniques', duration: '3 weeks', lessons: 15, topics: ['Color Theory', 'Grading', 'Final Output'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Documentaries', 'Commercials', 'Web Series'],
      certification: 'Film Editor Certificate',
      prerequisites: ['Basic computer skills', 'Understanding of storytelling'],
      toolsRequired: ['Editing Software', 'High-end Computer', 'Color Calibrated Monitor'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$599',
      originalPrice: '$799',
      discount: '25% off',
      enrollmentCount: 700,
      rating: 4.8,
      reviewCount: 120,
      lastUpdated: '2024-01-07',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Adobe', 'Blackmagic Design', 'Avid'],
      successStories: [
        { id: 'story1', studentName: 'Rajiv Mehta', role: 'Film Editor', company: 'Bollywood Productions', testimonial: 'Aarti ma\'am\'s guidance was invaluable. Now editing major films.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 10, rating: 5 },
        { id: 'story2', studentName: 'Sneha Reddy', role: 'Post-Production Artist', company: 'Independent Films', testimonial: 'The course covered everything from basic editing to advanced color grading.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 7, rating: 4.8 }
      ]
    },
    {
      id: 'sound-design-cinema',
      title: 'Sound Design for Cinema',
      description: 'Master sound design, mixing, and audio post-production',
      icon: <Headphones className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'short',
      tags: ['Sound Design', 'Audio Mixing', 'Foley', 'Sound Effects'],
      featured: false,
      detailedDescription: 'Comprehensive course covering sound design, foley, sound effects, and audio mixing for professional cinema.',
      instructor: 'Resul Pookutty',
      instructorBio: 'Oscar-winning sound designer and re-recording mixer. Known for his innovative sound work in international cinema.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Oscar Winner', 'National Film Award Winner', 'International Recognition'],
      courseModules: [
        { id: 'module1', title: 'Sound Fundamentals', description: 'Basic sound theory and recording techniques', duration: '2 weeks', lessons: 10, topics: ['Sound Theory', 'Recording', 'Microphones'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Sound Design', description: 'Creating sound effects and foley', duration: '3 weeks', lessons: 15, topics: ['Sound Effects', 'Foley', 'Ambience'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Audio Mixing', description: 'Final mixing and mastering techniques', duration: '3 weeks', lessons: 15, topics: ['Mixing', 'Mastering', 'Final Output'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Documentaries', 'Commercials', 'Gaming'],
      certification: 'Sound Designer Certificate',
      prerequisites: ['Basic audio knowledge', 'Good hearing'],
      toolsRequired: ['Audio Software', 'Microphones', 'Audio Interface'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$499',
      originalPrice: '$699',
      discount: '28% off',
      enrollmentCount: 500,
      rating: 4.9,
      reviewCount: 90,
      lastUpdated: '2024-01-04',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Pro Tools', 'Avid', 'Professional Studios'],
      successStories: [
        { id: 'story1', studentName: 'Vikram Singh', role: 'Sound Designer', company: 'Major Studios', testimonial: 'Learning from Oscar winner Resul sir was incredible. Now working on international projects.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '300%', projectCount: 15, rating: 5 },
        { id: 'story2', studentName: 'Anjali Desai', role: 'Audio Mixer', company: 'Independent Films', testimonial: 'The practical workshops were industry-standard. Great hands-on experience.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 10, rating: 4.9 }
      ]
    },
    {
      id: 'art-direction-mastery',
      title: 'Art Direction Mastery',
      description: 'Master set design, props, and visual style for cinema',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Art Direction', 'Set Design', 'Props', 'Visual Style'],
      featured: false,
      detailedDescription: 'Comprehensive course covering art direction, set design, prop creation, and visual style development for professional cinema.',
      instructor: 'Sabu Cyril',
      instructorBio: 'Award-winning production designer known for his work on epic films like "Baahubali" and "RRR".',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Multiple Filmfare Awards', 'Epic Film Specialist'],
      courseModules: [
        { id: 'module1', title: 'Design Fundamentals', description: 'Basic design principles and visual concepts', duration: '3 weeks', lessons: 15, topics: ['Design Principles', 'Visual Concepts', 'Color Theory'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Set Design', description: 'Creating sets and environments', duration: '4 weeks', lessons: 20, topics: ['Set Creation', 'Environment Design', 'Spatial Planning'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Prop Design', description: 'Designing and creating props', duration: '3 weeks', lessons: 15, topics: ['Prop Design', 'Material Selection', 'Construction'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Period Dramas', 'Fantasy Films', 'Commercials'],
      certification: 'Art Director Certificate',
      prerequisites: ['Basic design skills', 'Creative imagination'],
      toolsRequired: ['Design Software', 'Sketching Materials', '3D Modeling Tools'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$599',
      originalPrice: '$799',
      discount: '25% off',
      enrollmentCount: 400,
      rating: 4.8,
      reviewCount: 80,
      lastUpdated: '2024-01-02',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Art Directors Guild', 'Design Studios'],
      successStories: [
        { id: 'story1', studentName: 'Rahul Verma', role: 'Art Director', company: 'Major Productions', testimonial: 'Sabu sir\'s guidance helped me understand the scale of epic filmmaking.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '250%', projectCount: 8, rating: 5 },
        { id: 'story2', studentName: 'Priya Sharma', role: 'Set Designer', company: 'Independent Films', testimonial: 'The practical workshops were incredible. Real industry experience.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 6, rating: 4.8 }
      ]
    },
    {
      id: 'stunts-action-cinema',
      title: 'Stunts & Action Cinema',
      description: 'Master fight choreography and stunt coordination',
      icon: <Zap className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'short',
      tags: ['Stunts', 'Action', 'Fight Choreography', 'Stunt Coordination'],
      featured: false,
      detailedDescription: 'Comprehensive course covering stunt coordination, fight choreography, and action sequence design for cinema.',
      instructor: 'Vijay Singh',
      instructorBio: 'Leading stunt coordinator and action director with credits on major action films. Expert in safe and spectacular action sequences.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Stunt Coordinator', 'Action Director', 'Safety Specialist'],
      courseModules: [
        { id: 'module1', title: 'Stunt Fundamentals', description: 'Basic stunt techniques and safety', duration: '2 weeks', lessons: 10, topics: ['Stunt Basics', 'Safety Protocols', 'Equipment'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Fight Choreography', description: 'Creating fight sequences and action', duration: '3 weeks', lessons: 15, topics: ['Fight Sequences', 'Choreography', 'Camera Angles'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Advanced Stunts', description: 'Complex stunts and coordination', duration: '3 weeks', lessons: 15, topics: ['Complex Stunts', 'Coordination', 'Risk Management'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Action Films', 'Martial Arts Films', 'Commercials', 'Music Videos'],
      certification: 'Stunt Coordinator Certificate',
      prerequisites: ['Physical fitness', 'Basic martial arts knowledge'],
      toolsRequired: ['Safety Equipment', 'Training Space', 'Video Recording'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$499',
      originalPrice: '$699',
      discount: '28% off',
      enrollmentCount: 300,
      rating: 4.7,
      reviewCount: 60,
      lastUpdated: '2024-01-01',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Stunt Guild', 'Action Studios'],
      successStories: [
        { id: 'story1', studentName: 'Arjun Singh', role: 'Stunt Coordinator', company: 'Action Films', testimonial: 'Vijay sir taught me the importance of safety in stunts.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 5, rating: 4.8 },
        { id: 'story2', studentName: 'Karan Patel', role: 'Fight Choreographer', company: 'Martial Arts Films', testimonial: 'The practical training was intense and professional.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 4, rating: 4.7 }
      ]
    },
    {
      id: 'costume-design-cinema',
      title: 'Costume Design for Cinema',
      description: 'Master costume design, styling, and character wardrobe',
      icon: <Users className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'long',
      tags: ['Costume Design', 'Styling', 'Character Wardrobe', 'Fashion'],
      featured: false,
      detailedDescription: 'Comprehensive course covering costume design, character styling, and wardrobe creation for cinema and television.',
      instructor: 'Neeta Lulla',
      instructorBio: 'Award-winning costume designer known for her work on period films and contemporary cinema. Expert in character transformation.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Multiple Filmfare Awards', 'Period Film Specialist'],
      courseModules: [
        { id: 'module1', title: 'Design Fundamentals', description: 'Basic design principles and fashion theory', duration: '3 weeks', lessons: 15, topics: ['Design Principles', 'Fashion Theory', 'Color Psychology'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Character Costuming', description: 'Creating costumes for different characters', duration: '4 weeks', lessons: 20, topics: ['Character Analysis', 'Costume Creation', 'Fitting'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Period & Contemporary', description: 'Designing for different time periods', duration: '3 weeks', lessons: 15, topics: ['Period Research', 'Contemporary Design', 'Fabric Selection'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Period Films', 'Contemporary Cinema', 'TV Shows', 'Fashion Films'],
      certification: 'Costume Designer Certificate',
      prerequisites: ['Basic sewing skills', 'Fashion sense'],
      toolsRequired: ['Sewing Machine', 'Fabric Samples', 'Design Software'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$599',
      originalPrice: '$799',
      discount: '25% off',
      enrollmentCount: 350,
      rating: 4.8,
      reviewCount: 70,
      lastUpdated: '2023-12-30',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Fashion Institutes', 'Textile Companies'],
      successStories: [
        { id: 'story1', studentName: 'Anjali Kapoor', role: 'Costume Designer', company: 'Period Films', testimonial: 'Neeta ma\'am\'s guidance helped me understand character transformation through costumes.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '220%', projectCount: 6, rating: 4.9 },
        { id: 'story2', studentName: 'Riya Singh', role: 'Stylist', company: 'Contemporary Films', testimonial: 'The course covered everything from design to execution.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 5, rating: 4.7 }
      ]
    },
    {
      id: 'production-management-cinema',
      title: 'Production Management for Cinema',
      description: 'Master production planning, crew management, and film logistics',
      icon: <Briefcase className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'crew',
      tags: ['Production Management', 'Crew Management', 'Film Logistics', 'Planning'],
      featured: false,
      detailedDescription: 'Comprehensive course covering production management, crew coordination, scheduling, and logistics for professional filmmaking.',
      instructor: 'Ramesh Sippy',
      instructorBio: 'Legendary filmmaker and producer known for blockbuster films. Expert in large-scale production management and crew coordination.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Legendary Filmmaker', 'Blockbuster Producer', '40+ Years Experience'],
      courseModules: [
        { id: 'module1', title: 'Production Planning', description: 'Pre-production planning and scheduling', duration: '4 weeks', lessons: 20, topics: ['Script Breakdown', 'Scheduling', 'Budget Planning'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Crew Management', description: 'Hiring, organizing, and managing film crews', duration: '4 weeks', lessons: 20, topics: ['Crew Hiring', 'Department Heads', 'Communication'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Production Logistics', description: 'Location management and production logistics', duration: '4 weeks', lessons: 20, topics: ['Location Scouting', 'Equipment Management', 'Safety Protocols'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'TV Shows', 'Commercials', 'Documentaries'],
      certification: 'Production Manager Certificate',
      prerequisites: ['Basic organizational skills', 'Leadership qualities'],
      toolsRequired: ['Production Software', 'Planning Tools', 'Communication Systems'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$699',
      originalPrice: '$899',
      discount: '22% off',
      enrollmentCount: 450,
      rating: 4.8,
      reviewCount: 90,
      lastUpdated: '2023-12-28',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Film Producers Guild', 'Production Houses'],
      successStories: [
        { id: 'story1', studentName: 'Vikram Malhotra', role: 'Production Manager', company: 'Major Productions', testimonial: 'Ramesh sir\'s course taught me the art of managing large-scale productions efficiently.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '250%', projectCount: 8, rating: 5 },
        { id: 'story2', studentName: 'Priya Sharma', role: 'Line Producer', company: 'Independent Films', testimonial: 'The practical approach to crew management was invaluable for my career.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 6, rating: 4.8 }
      ]
    },
    {
      id: 'crew-coordination-cinema',
      title: 'Crew Coordination & Leadership',
      description: 'Master crew coordination, leadership, and team management in cinema',
      icon: <Users2 className="h-5 w-5" />,
      duration: '8 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'crew',
      tags: ['Crew Coordination', 'Leadership', 'Team Management', 'Communication'],
      featured: false,
      detailedDescription: 'Essential course for anyone managing film crews. Learn leadership skills, communication techniques, and team coordination for successful filmmaking.',
      instructor: 'Mani Ratnam',
      instructorBio: 'Award-winning director known for his ability to manage large crews and create cinematic masterpieces. Expert in crew coordination.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['National Film Award Winner', 'Multiple Filmfare Awards', 'Crew Management Expert'],
      courseModules: [
        { id: 'module1', title: 'Leadership Fundamentals', description: 'Basic leadership principles and team dynamics', duration: '2 weeks', lessons: 10, topics: ['Leadership Styles', 'Team Dynamics', 'Motivation'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Communication Skills', description: 'Effective communication with crew members', duration: '3 weeks', lessons: 15, topics: ['Clear Communication', 'Conflict Resolution', 'Feedback Systems'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Crew Coordination', description: 'Coordinating different departments and crew', duration: '3 weeks', lessons: 15, topics: ['Department Coordination', 'Timeline Management', 'Problem Solving'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'TV Productions', 'Commercial Shoots', 'Event Management'],
      certification: 'Crew Coordinator Certificate',
      prerequisites: ['Basic communication skills', 'Team player mindset'],
      toolsRequired: ['Communication Tools', 'Project Management Software', 'Leadership Resources'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$499',
      originalPrice: '$699',
      discount: '28% off',
      enrollmentCount: 600,
      rating: 4.7,
      reviewCount: 120,
      lastUpdated: '2023-12-25',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Directors Guild', 'Film Associations'],
      successStories: [
        { id: 'story1', studentName: 'Arjun Singh', role: 'Crew Coordinator', company: 'Major Studios', testimonial: 'Mani sir\'s leadership techniques transformed my approach to crew management.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '220%', projectCount: 10, rating: 4.9 },
        { id: 'story2', studentName: 'Neha Patel', role: 'Assistant Director', company: 'Independent Films', testimonial: 'The communication skills I learned are essential for my daily work.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '180%', projectCount: 7, rating: 4.7 }
      ]
    },
    {
      id: 'film-labor-laws',
      title: 'Film Labor Laws & Regulations',
      description: 'Master labor laws, contracts, and regulations for cinema industry',
      icon: <ShieldCheck className="h-5 w-5" />,
      duration: '6 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'crew',
      tags: ['Labor Laws', 'Contracts', 'Regulations', 'Legal Compliance'],
      featured: false,
      detailedDescription: 'Essential course covering labor laws, contract negotiations, and legal compliance in the cinema industry. Protect your crew and production.',
      instructor: 'Justice Leila Seth',
      instructorBio: 'Renowned legal expert specializing in entertainment law and labor regulations. Former Chief Justice with deep understanding of cinema industry.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Former Chief Justice', 'Entertainment Law Expert', 'Legal Scholar'],
      courseModules: [
        { id: 'module1', title: 'Labor Law Basics', description: 'Fundamental labor laws and regulations', duration: '2 weeks', lessons: 10, topics: ['Labor Rights', 'Working Hours', 'Safety Regulations'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Contract Management', description: 'Creating and managing crew contracts', duration: '2 weeks', lessons: 10, topics: ['Contract Types', 'Negotiation', 'Legal Protection'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Compliance & Safety', description: 'Industry compliance and safety standards', duration: '2 weeks', lessons: 10, topics: ['Safety Standards', 'Insurance', 'Legal Compliance'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Production Houses', 'Studios', 'Independent Films', 'TV Networks'],
      certification: 'Film Labor Law Specialist Certificate',
      prerequisites: ['Basic legal understanding', 'Interest in compliance'],
      toolsRequired: ['Legal Resources', 'Contract Templates', 'Compliance Checklists'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$399',
      originalPrice: '$599',
      discount: '33% off',
      enrollmentCount: 300,
      rating: 4.9,
      reviewCount: 80,
      lastUpdated: '2023-12-20',
      language: ['English', 'Hindi'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Legal Firms', 'Entertainment Lawyers'],
      successStories: [
        { id: 'story1', studentName: 'Rajiv Kumar', role: 'Legal Advisor', company: 'Major Studios', testimonial: 'Justice Seth\'s course gave me the legal foundation to protect productions and crew.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '300%', projectCount: 15, rating: 5 },
        { id: 'story2', studentName: 'Anjali Desai', role: 'HR Manager', company: 'Production House', testimonial: 'The legal knowledge is crucial for managing crew contracts and compliance.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '200%', projectCount: 8, rating: 4.8 }
      ]
    },
    {
      id: 'ai-storytelling-mastery',
      title: 'AI Storytelling Mastery',
      description: 'Master AI-powered script development and storytelling innovation',
      icon: <BrainCircuit className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'ai',
      tags: ['AI Storytelling', 'Script Development', 'Character AI', 'Plot Optimization'],
      featured: true,
      detailedDescription: 'Revolutionary course combining AI technology with traditional storytelling. Learn to use AI tools for script analysis, character development, and plot optimization while maintaining creative control.',
      instructor: 'Christopher Nolan',
      instructorBio: 'Visionary filmmaker known for innovative storytelling and embracing cutting-edge technology. Pioneer in merging traditional cinema with technological advancement.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Oscar Winner', 'Innovative Storyteller', 'Technology Pioneer'],
      courseModules: [
        { id: 'module1', title: 'AI Story Fundamentals', description: 'Understanding AI in storytelling and creative collaboration', duration: '2 weeks', lessons: 10, topics: ['AI Basics', 'Creative Collaboration', 'Ethics'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'AI Script Analysis', description: 'Using AI for script optimization and structure analysis', duration: '3 weeks', lessons: 15, topics: ['Script Analysis', 'Structure Optimization', 'AI Tools'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'AI Character Development', description: 'AI-assisted character creation and development', duration: '3 weeks', lessons: 15, topics: ['Character AI', 'Development Tools', 'Consistency'], practical: true, assignment: true, quiz: true },
        { id: 'module4', title: 'Advanced AI Storytelling', description: 'Cutting-edge AI storytelling techniques and tools', duration: '2 weeks', lessons: 10, topics: ['Advanced Techniques', 'Future Tools', 'Industry Trends'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'TV Series', 'Web Content', 'Gaming'],
      certification: 'AI Storytelling Specialist Certificate',
      prerequisites: ['Basic storytelling knowledge', 'Interest in technology'],
      toolsRequired: ['AI Writing Tools', 'Script Analysis Software', 'Creative AI Platforms'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$899',
      originalPrice: '$1199',
      discount: '25% off',
      enrollmentCount: 350,
      rating: 4.9,
      reviewCount: 120,
      lastUpdated: '2024-01-15',
      language: ['English'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['OpenAI', 'Anthropic', 'Major Studios'],
      successStories: [
        { id: 'story1', studentName: 'Alex Chen', role: 'AI Story Developer', company: 'Netflix', testimonial: 'This course revolutionized my approach to storytelling. AI tools are now essential to my creative process.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '350%', projectCount: 12, rating: 5 },
        { id: 'story2', studentName: 'Sarah Johnson', role: 'Screenwriter', company: 'Amazon Studios', testimonial: 'Learning AI storytelling from Christopher Nolan was a game-changer. My scripts are now more engaging and structured.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '280%', projectCount: 8, rating: 4.9 }
      ]
    },
    {
      id: 'ai-vfx-revolution',
      title: 'AI VFX Revolution',
      description: 'Master AI-powered visual effects and post-production automation',
      icon: <Sparkles className="h-5 w-5" />,
      duration: '14 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'ai',
      tags: ['AI VFX', 'Deep Learning', 'Automation', 'Post-Production'],
      featured: true,
      detailedDescription: 'Cutting-edge course covering AI-powered visual effects, deep learning applications, and post-production automation. Learn the techniques used in major Hollywood blockbusters.',
      instructor: 'Joe Letteri',
      instructorBio: 'Oscar-winning VFX supervisor from Weta Digital. Pioneer in AI and motion capture technology. Known for groundbreaking work on Avatar, Lord of the Rings, and Planet of the Apes.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Oscar Winner', 'VFX Pioneer', 'AI Technology Leader'],
      courseModules: [
        { id: 'module1', title: 'AI VFX Fundamentals', description: 'Core concepts of AI in visual effects', duration: '3 weeks', lessons: 15, topics: ['AI Basics', 'VFX Integration', 'Workflow'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Deep Learning for VFX', description: 'Neural networks and AI-powered effects', duration: '4 weeks', lessons: 20, topics: ['Neural Networks', 'AI Effects', 'Training Models'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'AI Post-Production', description: 'Automated editing and enhancement', duration: '4 weeks', lessons: 20, topics: ['Automated Editing', 'AI Enhancement', 'Quality Control'], practical: true, assignment: true, quiz: true },
        { id: 'module4', title: 'Advanced AI VFX', description: 'Cutting-edge techniques and industry tools', duration: '3 weeks', lessons: 15, topics: ['Advanced Techniques', 'Industry Tools', 'Future Trends'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Blockbuster Films', 'High-End TV', 'Commercials', 'Gaming'],
      certification: 'AI VFX Master Certificate',
      prerequisites: ['Basic VFX knowledge', 'Understanding of AI concepts'],
      toolsRequired: ['AI VFX Software', 'Deep Learning Tools', 'High-end Computing'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$1299',
      originalPrice: '$1699',
      discount: '23% off',
      enrollmentCount: 280,
      rating: 4.9,
      reviewCount: 95,
      lastUpdated: '2024-01-10',
      language: ['English'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Weta Digital', 'Industrial Light & Magic', 'Digital Domain'],
      successStories: [
        { id: 'story1', studentName: 'Michael Rodriguez', role: 'AI VFX Artist', company: 'Marvel Studios', testimonial: 'Joe\'s course opened doors to the most advanced VFX techniques. Now working on blockbuster films.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '400%', projectCount: 15, rating: 5 },
        { id: 'story2', studentName: 'Emma Thompson', role: 'VFX Supervisor', company: 'Disney', testimonial: 'The AI VFX techniques I learned are revolutionizing our post-production pipeline.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '320%', projectCount: 10, rating: 4.9 }
      ]
    },
    {
      id: 'ai-production-intelligence',
      title: 'AI Production Intelligence',
      description: 'Master AI-driven production management and optimization',
      icon: <BarChart2 className="h-5 w-5" />,
      duration: '12 weeks',
      level: 'Advanced',
      progress: 0,
      category: 'ai',
      tags: ['AI Production', 'Predictive Analytics', 'Optimization', 'Management'],
      featured: false,
      detailedDescription: 'Comprehensive course on using AI for production management, predictive analytics, resource optimization, and intelligent decision-making in film production.',
      instructor: 'Kathleen Kennedy',
      instructorBio: 'Legendary producer and president of Lucasfilm. Known for managing some of the biggest film franchises in history. Pioneer in using technology to optimize production processes.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Legendary Producer', 'Lucasfilm President', 'Production Innovator'],
      courseModules: [
        { id: 'module1', title: 'AI Production Basics', description: 'Fundamentals of AI in production management', duration: '3 weeks', lessons: 15, topics: ['AI Basics', 'Production Integration', 'Data Analysis'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'Predictive Analytics', description: 'Using AI to predict production outcomes', duration: '3 weeks', lessons: 15, topics: ['Predictive Models', 'Risk Assessment', 'Performance Analysis'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'Resource Optimization', description: 'AI-powered resource management and scheduling', duration: '3 weeks', lessons: 15, topics: ['Resource Management', 'Scheduling AI', 'Cost Optimization'], practical: true, assignment: true, quiz: true },
        { id: 'module4', title: 'AI Decision Making', description: 'Intelligent decision support systems', duration: '3 weeks', lessons: 15, topics: ['Decision AI', 'Support Systems', 'Industry Applications'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Major Studios', 'Production Houses', 'TV Networks', 'Streaming Platforms'],
      certification: 'AI Production Intelligence Certificate',
      prerequisites: ['Production management experience', 'Basic AI understanding'],
      toolsRequired: ['AI Analytics Platforms', 'Production Software', 'Data Tools'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$999',
      originalPrice: '$1299',
      discount: '23% off',
      enrollmentCount: 200,
      rating: 4.8,
      reviewCount: 75,
      lastUpdated: '2024-01-08',
      language: ['English'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Lucasfilm', 'Disney', 'Major Studios'],
      successStories: [
        { id: 'story1', studentName: 'David Kim', role: 'AI Production Manager', company: 'Warner Bros', testimonial: 'Kathleen\'s insights into AI production management transformed our studio\'s efficiency.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '300%', projectCount: 12, rating: 5 },
        { id: 'story2', studentName: 'Lisa Wang', role: 'Production Executive', company: 'Universal Pictures', testimonial: 'The AI production techniques are saving us millions and improving quality.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '250%', projectCount: 8, rating: 4.8 }
      ]
    },
    {
      id: 'ai-post-production-automation',
      title: 'AI Post-Production Automation',
      description: 'Master AI-powered editing, color grading, and sound automation',
      icon: <Film className="h-5 w-5" />,
      duration: '10 weeks',
      level: 'Intermediate',
      progress: 0,
      category: 'ai',
      tags: ['AI Editing', 'Automated Color Grading', 'AI Sound', 'Post-Production'],
      featured: false,
      detailedDescription: 'Learn to use AI for automated post-production workflows, intelligent editing, AI-powered color grading, and automated sound mixing for professional cinema.',
      instructor: 'Walter Murch',
      instructorBio: 'Legendary film editor and sound designer. Three-time Oscar winner known for his innovative editing techniques. Pioneer in using technology to enhance storytelling.',
      instructorImage: 'https://via.placeholder.com/150',
      instructorCredits: ['Three-time Oscar Winner', 'Legendary Editor', 'Sound Design Pioneer'],
      courseModules: [
        { id: 'module1', title: 'AI Editing Fundamentals', description: 'Basic AI editing concepts and tools', duration: '2 weeks', lessons: 10, topics: ['AI Editing', 'Basic Tools', 'Workflow'], practical: true, assignment: true, quiz: true },
        { id: 'module2', title: 'AI Color Grading', description: 'Automated color correction and grading', duration: '3 weeks', lessons: 15, topics: ['AI Color', 'Automation', 'Quality Control'], practical: true, assignment: true, quiz: true },
        { id: 'module3', title: 'AI Sound Automation', description: 'AI-powered sound mixing and enhancement', duration: '3 weeks', lessons: 15, topics: ['AI Sound', 'Automated Mixing', 'Enhancement'], practical: true, assignment: true, quiz: true },
        { id: 'module4', title: 'Advanced AI Workflows', description: 'Complete AI post-production pipelines', duration: '2 weeks', lessons: 10, topics: ['Workflow Integration', 'Advanced Tools', 'Industry Standards'], practical: true, assignment: true, quiz: true }
      ],
      industryUseCases: ['Feature Films', 'Documentaries', 'Commercials', 'Web Series'],
      certification: 'AI Post-Production Specialist Certificate',
      prerequisites: ['Basic editing knowledge', 'Understanding of post-production'],
      toolsRequired: ['AI Editing Software', 'Color Grading Tools', 'Sound AI Platforms'],
      projectBased: true,
      liveSessions: true,
      mentorship: true,
      jobPlacement: true,
      pricing: '$799',
      originalPrice: '$1099',
      discount: '27% off',
      enrollmentCount: 320,
      rating: 4.8,
      reviewCount: 110,
      lastUpdated: '2024-01-05',
      language: ['English'],
      subtitles: true,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
      assignments: true,
      communityAccess: true,
      industryPartners: ['Adobe', 'Blackmagic Design', 'Avid'],
      successStories: [
        { id: 'story1', studentName: 'Robert Chen', role: 'AI Post-Production Artist', company: 'Paramount Pictures', testimonial: 'Walter\'s AI post-production course revolutionized my editing workflow. Now 3x faster with better quality.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '280%', projectCount: 18, rating: 5 },
        { id: 'story2', studentName: 'Maria Garcia', role: 'Colorist', company: 'Independent Films', testimonial: 'The AI color grading techniques are incredible. My work now looks Hollywood-quality.', beforeImage: 'https://via.placeholder.com/100', afterImage: 'https://via.placeholder.com/100', salaryIncrease: '220%', projectCount: 12, rating: 4.8 }
      ]
    }
  ];

  // Learning pathways
  const pathways = [
    { id: 'all', label: 'All Pathways', icon: BookOpen, count: learningPaths.length },
    { id: 'long', label: 'Long-Form Mastery', icon: CalendarDays, count: learningPaths.filter(p => p.category === 'long').length },
    { id: 'short', label: 'Short-Form SOPs', icon: Clock, count: learningPaths.filter(p => p.category === 'short').length },
    { id: 'crew', label: 'Labour & Crew', icon: Users, count: learningPaths.filter(p => p.category === 'crew').length },
    { id: 'ai', label: 'AI-Powered', icon: Sparkles, count: learningPaths.filter(p => p.category === 'ai').length }
  ];

  // Learning categories (comprehensive 24 crafts coverage)
  const categories = [
    { id: 'all', label: 'All Crafts', icon: BookOpen, count: learningPaths.length },
    { id: 'story-writing', label: 'Story Writing', icon: BookText, count: learningPaths.filter(p => p.tags.includes('Story Writing') || p.tags.includes('Screenplay')).length },
    { id: 'direction', label: 'Direction', icon: Video, count: learningPaths.filter(p => p.tags.includes('Direction')).length },
    { id: 'production', label: 'Production', icon: Briefcase, count: learningPaths.filter(p => p.tags.includes('Production')).length },
    { id: 'cinematography', label: 'Cinematography', icon: Camera, count: learningPaths.filter(p => p.tags.includes('Cinematography')).length },
    { id: 'art-direction', label: 'Art Direction', icon: Sparkles, count: learningPaths.filter(p => p.tags.includes('Art Direction')).length },
    { id: 'stunts-action', label: 'Stunts & Action', icon: Zap, count: learningPaths.filter(p => p.tags.includes('Stunts')).length },
    { id: 'costume-design', label: 'Costume Design', icon: Users, count: learningPaths.filter(p => p.tags.includes('Costume')).length },
    { id: 'makeup-hair', label: 'Makeup & Hair', icon: Star, count: learningPaths.filter(p => p.tags.includes('Makeup')).length },
    { id: 'music-composition', label: 'Music Composition', icon: Headphones, count: learningPaths.filter(p => p.tags.includes('Music Composition')).length },
    { id: 'playback-singing', label: 'Playback Singing', icon: Mic, count: learningPaths.filter(p => p.tags.includes('Singing')).length },
    { id: 'choreography', label: 'Choreography', icon: TrendingUp, count: learningPaths.filter(p => p.tags.includes('Choreography')).length },
    { id: 'acting', label: 'Acting', icon: Users, count: learningPaths.filter(p => p.tags.includes('Acting')).length },
    { id: 'editing', label: 'Editing', icon: Film, count: learningPaths.filter(p => p.tags.includes('Editing')).length },
    { id: 'sound-design', label: 'Sound Design', icon: Headphones, count: learningPaths.filter(p => p.tags.includes('Sound Design')).length },
    { id: 'dialogue-recording', label: 'Dialogue Recording', icon: Mic, count: learningPaths.filter(p => p.tags.includes('Dialogue')).length },
    { id: 'lyrics-writing', label: 'Lyrics Writing', icon: BookText, count: learningPaths.filter(p => p.tags.includes('Lyrics')).length },
    { id: 'background-score', label: 'Background Score', icon: Headphones, count: learningPaths.filter(p => p.tags.includes('Background Score')).length },
    { id: 'vfx-animation', label: 'VFX & Animation', icon: Sparkles, count: learningPaths.filter(p => p.tags.includes('VFX')).length },
    { id: 'di-color-grading', label: 'DI & Color Grading', icon: Film, count: learningPaths.filter(p => p.tags.includes('Color Grading')).length },
    { id: 'lighting', label: 'Lighting', icon: Lightbulb, count: learningPaths.filter(p => p.tags.includes('Lighting')).length },
    { id: 'production-design', label: 'Production Design', icon: Sparkles, count: learningPaths.filter(p => p.tags.includes('Production Design')).length },
    { id: 'publicity-marketing', label: 'Publicity & Marketing', icon: TrendingUp, count: learningPaths.filter(p => p.tags.includes('Marketing')).length },
    { id: 'distribution-exhibition', label: 'Distribution & Exhibition', icon: Rocket, count: learningPaths.filter(p => p.tags.includes('Distribution')).length },
    { id: 'subtitling-dubbing', label: 'Subtitling & Dubbing', icon: Languages, count: learningPaths.filter(p => p.tags.includes('Subtitling')).length }
  ];

  // Filter learning paths based on search and pathway
  const filteredLearningPaths = useMemo(() => {
    return learningPaths.filter(path => {
      const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPathway = selectedPathway === 'all' || path.category === selectedPathway;
      
      return matchesSearch && matchesPathway;
    });
  }, [searchQuery, selectedPathway]);

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEnrollingCourses(prev => prev.filter(courseId => courseId !== id));
  };

  // Toggle sidebar section
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/About Section - Behind The Scenes.png" 
            alt="Professional studio environment with dramatic lighting and modern production setup" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Subtle Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.15),transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                <BookOpen className="h-5 w-5 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Cinema Learning
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">Master Your Craft</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Master all 24 crafts of cinema from basic to advanced levels. Learn from industry legends and comprehensive courses.
            </p>
            
            {/* Language Selector */}
            <div className="flex items-center justify-center">
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
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-2xl mx-auto">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageSelector(false);
                    }}
                    className={`h-10 ${selectedLanguage.code === lang.code ? 'bg-primary text-black' : 'bg-background/60 hover:bg-background/80'}`}
                  >
                    <span className="text-base mr-2">{lang.flag}</span>
                    <span className="text-xs">{lang.name}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Hidden on mobile, overlay on mobile when open */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-20'} transition-all duration-300 ease-in-out bg-card/80 backdrop-blur-sm border-r border-border/50 min-h-screen sticky top-0 hidden lg:block`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-black" />
                </div>
                {sidebarOpen && (
                  <div>
                    <h3 className="font-semibold text-foreground">Learning Hub</h3>
                    <p className="text-xs text-muted-foreground">Your Cinema Journey</p>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 space-y-6">
            {/* Learning Progress */}
            {sidebarOpen && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Learning Progress</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Overall Progress</span>
                    <span className="text-xs font-medium text-foreground">24%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">3</div>
                      <div className="text-xs text-muted-foreground">In Progress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-500">1</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground">8</div>
                      <div className="text-xs text-muted-foreground">Not Started</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Navigation */}
            <div className="space-y-2">
              {sidebarOpen && <h4 className="text-sm font-medium text-foreground mb-3">Quick Navigation</h4>}
              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                  <Home className="h-4 w-4 mr-3 text-primary" />
                  {sidebarOpen && <span className="text-sm">Dashboard</span>}
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                  <BookmarkCheck className="h-4 w-4 mr-3 text-primary" />
                  {sidebarOpen && <span className="text-sm">My Learning</span>}
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                  <Bookmark className="h-4 w-4 mr-3 text-primary" />
                  {sidebarOpen && <span className="text-sm">Bookmarks</span>}
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                  <Trophy className="h-4 w-4 mr-3 text-primary" />
                  {sidebarOpen && <span className="text-sm">Certificates</span>}
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                {sidebarOpen && <h4 className="text-sm font-medium text-foreground">Categories</h4>}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSection('categories')}
                  className="h-6 w-6 p-0 hover:bg-primary/10"
                >
                  {expandedSections.categories ? <Minus className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </Button>
              </div>
              {expandedSections.categories && (
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCraft(category.id)}
                      className="w-full justify-start h-9 hover:bg-primary/10 text-xs"
                      title={category.label}
                    >
                      <category.icon className="h-3 w-3 mr-2 text-primary" />
                      {sidebarOpen && <span className="truncate">{category.label}</span>}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            {sidebarOpen && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Recent Activity</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Started Story Writing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Completed Cinematography</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Watched VFX Tutorial</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
            <div className="fixed left-0 top-0 h-full w-80 bg-card/95 backdrop-blur-md border-r border-border/50 z-50 p-4" onClick={(e) => e.stopPropagation()}>
              {/* Mobile Sidebar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Learning Hub</h3>
                    <p className="text-xs text-muted-foreground">Your Cinema Journey</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Sidebar Content - Simplified */}
              <div className="space-y-6">
                {/* Categories Only - Mobile Focused */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Cinema Crafts</h4>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedCraft(category.id);
                          setSidebarOpen(false);
                        }}
                        className="w-full justify-start h-10 hover:bg-primary/10 text-sm"
                      >
                        <category.icon className="h-4 w-4 mr-3 text-primary" />
                        <span className="truncate">{category.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Quick Actions</h4>
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                      <BookmarkCheck className="h-4 w-4 mr-3 text-primary" />
                      <span className="text-sm">My Learning</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start h-10 hover:bg-primary/10">
                      <Trophy className="h-4 w-4 mr-3 text-primary" />
                      <span className="text-sm">Certificates</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="lg:hidden p-4 border-b border-border/30">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="w-full justify-start h-12 bg-card/50 border border-border/30 hover:border-primary/40"
            >
              <Menu className="h-5 w-5 mr-3 text-primary" />
              <span className="text-sm font-medium">Open Learning Menu</span>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
              <Card className="border-border/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 lg:p-6">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                    <BookOpen className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-1">24</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Cinema Crafts</p>
                </CardContent>
              </Card>
              <Card className="border-border/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 lg:p-6">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                    <Users className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-1">50K+</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Active Learners</p>
                </CardContent>
              </Card>
              <Card className="border-border/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 lg:p-6">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                    <Award className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-1">100+</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Industry Experts</p>
                </CardContent>
              </Card>
              <Card className="border-border/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 lg:p-6">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                    <CheckCircle className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-1">95%</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">Completion Rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-8 lg:mb-12">
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search learning paths, courses, or skills..."
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

            {/* Mobile: Enhanced Icon-Based Tab System */}
            <div className="lg:hidden mb-8">
              <Tabs value={selectedPathway} onValueChange={setSelectedPathway}>
                <TabsList className="flex w-full justify-center bg-transparent border-none p-0 gap-3">
                             {/* All Paths Tab */}
               <TabsTrigger 
                    value="all" 
                    className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-2xl min-h-[70px] min-w-[70px] bg-card/60 border border-border/40 hover:border-primary/50 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black backdrop-blur-sm"
               >
                    <BookOpen className="h-7 w-7 text-white [&[data-state=active]]:!text-black mb-1" />
                    <span className="text-xs font-medium text-white [&[data-state=active]]:!text-black">All</span>
               </TabsTrigger>
               
               {/* Long-Form Mastery Tab */}
               <TabsTrigger 
                    value="long" 
                    className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-2xl min-h-[70px] min-w-[70px] bg-card/60 border border-border/40 hover:border-primary/50 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black backdrop-blur-sm"
               >
                    <CalendarDays className="h-7 w-7 text-white [&[data-state=active]]:!text-black mb-1" />
                    <span className="text-xs font-medium text-white [&[data-state=active]]:!text-black">Long</span>
               </TabsTrigger>
               
               {/* Short-Form SOPs Tab */}
               <TabsTrigger 
                    value="short" 
                    className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-2xl min-h-[70px] min-w-[70px] bg-card/60 border border-border/40 hover:border-primary/50 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black backdrop-blur-sm"
               >
                    <Clock className="h-7 w-7 text-white [&[data-state=active]]:!text-black mb-1" />
                    <span className="text-xs font-medium text-white [&[data-state=active]]:!text-black">Short</span>
               </TabsTrigger>
               
               {/* Labour & Crew Tab */}
               <TabsTrigger 
                    value="crew" 
                    className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-2xl min-h-[70px] min-w-[70px] bg-card/60 border border-border/40 hover:border-primary/50 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black backdrop-blur-sm"
               >
                    <Users className="h-7 w-7 text-white [&[data-state=active]]:!text-black mb-1" />
                    <span className="text-xs font-medium text-white [&[data-state=active]]:!text-black">Crew</span>
               </TabsTrigger>
               
               {/* AI-Powered Tab */}
               <TabsTrigger 
                    value="ai" 
                    className="flex flex-col items-center justify-center data-[state=active]:bg-primary data-[state=active]:shadow-lg transition-all duration-300 p-3 rounded-2xl min-h-[70px] min-w-[70px] bg-card/60 border border-border/40 hover:border-primary/50 data-[state=active]:border-primary/50 [&[data-state=active]_*]:!text-black backdrop-blur-sm"
               >
                    <Sparkles className="h-7 w-7 text-white [&[data-state=active]]:!text-black mb-1" />
                    <span className="text-xs font-medium text-white [&[data-state=active]]:!text-black">AI</span>
               </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

            {/* Desktop: Pathway Tabs */}
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
                        <Icon className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0 text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:text-black" />
                        <span className="hidden sm:inline lg:inline truncate text-muted-foreground data-[state=active]:!text-black [&[data-state=active]]:text-black [&[data-state=active]]:text-black">{pathway.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Learning Paths Grid */}
            {!selectedCraft && (
              <div className="mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
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
            )}

            {filteredLearningPaths.length === 0 && !selectedCraft && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
                <h3 className="text-xl font-semibold mb-2">No learning paths found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters to find relevant courses.</p>
              </div>
            )}

            {/* Craft Detail Content */}
            {selectedCraft && (
              <div className="mt-8 lg:mt-16">
                {/* Back Button and Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
            <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCraft(null)}
                      className="hover:bg-primary/10"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                      Back to Learning Paths
            </Button>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      {(() => {
                        const category = categories.find(c => c.id === selectedCraft);
                        if (category) {
                          const Icon = category.icon;
                          return <Icon className="h-6 w-6 text-black" />;
                        }
                        return <BookOpen className="h-6 w-6 text-black" />;
                      })()}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        {categories.find(c => c.id === selectedCraft)?.label || 'Cinema Craft'}
                      </h2>
                      <p className="text-muted-foreground">Master the art of {categories.find(c => c.id === selectedCraft)?.label?.toLowerCase() || 'cinema'}</p>
                    </div>
                  </div>
                </div>

                {/* Craft Learning Levels */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                  {/* Basic Level */}
                  <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Basic Level</CardTitle>
                          <CardDescription>Foundation & Fundamentals</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {(() => {
                          const craft = categories.find(c => c.id === selectedCraft);
                          if (!craft) return null;
                          
                          const basicContent = {
                            'story-writing': [
                              'Script formatting and structure',
                              'Character development basics',
                              'Three-act story structure',
                              'Dialogue writing fundamentals'
                            ],
                            'direction': [
                              'Script analysis and breakdown',
                              'Shot composition basics',
                              'Working with actors',
                              'Set etiquette and safety'
                            ],
                            'production': [
                              'Budget planning fundamentals',
                              'Schedule creation basics',
                              'Location scouting essentials',
                              'Permit and legal requirements'
                            ],
                            'cinematography': [
                              'Camera operation basics',
                              'Lens selection fundamentals',
                              'Exposure triangle mastery',
                              'Basic lighting setup'
                            ],
                            'art-direction': [
                              'Set design principles',
                              'Color theory basics',
                              'Prop selection and placement',
                              'Mood board creation'
                            ],
                            'stunts-action': [
                              'Safety protocols and procedures',
                              'Basic stunt coordination',
                              'Equipment handling',
                              'Risk assessment fundamentals'
                            ],
                            'costume-design': [
                              'Fabric selection basics',
                              'Character costume analysis',
                              'Basic sewing techniques',
                              'Historical period research'
                            ],
                            'makeup-hair': [
                              'Basic makeup application',
                              'Hair styling fundamentals',
                              'Product knowledge',
                              'Hygiene and safety'
                            ],
                            'music-composition': [
                              'Music theory basics',
                              'Instrument fundamentals',
                              'Melody and harmony',
                              'Basic recording techniques'
                            ],
                            'playback-singing': [
                              'Vocal technique basics',
                              'Breathing exercises',
                              'Pitch and rhythm training',
                              'Studio etiquette'
                            ],
                            'choreography': [
                              'Dance fundamentals',
                              'Movement vocabulary',
                              'Rhythm and timing',
                              'Basic choreography structure'
                            ],
                            'acting': [
                              'Character analysis',
                              'Emotional preparation',
                              'Voice and speech training',
                              'Basic movement skills'
                            ],
                            'editing': [
                              'Editing software basics',
                              'Cutting techniques',
                              'Timeline management',
                              'Basic transitions'
                            ],
                            'sound-design': [
                              'Audio recording basics',
                              'Sound editing fundamentals',
                              'Mixing principles',
                              'Audio file management'
                            ],
                            'dialogue-recording': [
                              'Microphone techniques',
                              'Voice projection basics',
                              'Script reading skills',
                              'Studio recording etiquette'
                            ],
                            'lyrics-writing': [
                              'Rhyme scheme basics',
                              'Meter and rhythm',
                              'Emotional expression',
                              'Song structure fundamentals'
                            ],
                            'background-score': [
                              'Theme development',
                              'Mood creation basics',
                              'Instrumental composition',
                              'Basic orchestration'
                            ],
                            'vfx-animation': [
                              'Software fundamentals',
                              'Basic animation principles',
                              'Compositing basics',
                              'Digital asset management'
                            ],
                            'di-color-grading': [
                              'Color theory basics',
                              'Software interface',
                              'Basic correction tools',
                              'File format knowledge'
                            ],
                            'lighting': [
                              'Light types and sources',
                              'Basic lighting setup',
                              'Safety procedures',
                              'Equipment maintenance'
                            ],
                            'production-design': [
                              'Visual concept development',
                              'Space planning basics',
                              'Material selection',
                              'Budget considerations'
                            ],
                            'publicity-marketing': [
                              'Brand identity basics',
                              'Social media fundamentals',
                              'Press release writing',
                              'Target audience analysis'
                            ],
                            'distribution-exhibition': [
                              'Film festival basics',
                              'Theatrical distribution',
                              'Digital platform knowledge',
                              'Audience engagement'
                            ],
                            'subtitling-dubbing': [
                              'Translation basics',
                              'Timing and synchronization',
                              'Voice matching techniques',
                              'Cultural adaptation'
                            ]
                          };
                          
                          const content = basicContent[craft.id as keyof typeof basicContent] || [
                            'Core principles and rules',
                            'Essential tools and equipment',
                            'Basic techniques and workflows',
                            'Industry terminology'
                          ];
                          
                          return content.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ));
                        })()}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-black hover:from-primary/80 hover:to-primary font-semibold">
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Intermediate Level */}
                  <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Intermediate Level</CardTitle>
                          <CardDescription>Advanced Techniques & Methods</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {(() => {
                          const craft = categories.find(c => c.id === selectedCraft);
                          if (!craft) return null;
                          
                          const intermediateContent = {
                            'story-writing': [
                              'Advanced character arcs',
                              'Complex plot structures',
                              'Genre-specific techniques',
                              'Script doctoring skills'
                            ],
                            'direction': [
                              'Advanced shot planning',
                              'Actor direction techniques',
                              'Visual storytelling methods',
                              'Production workflow management'
                            ],
                            'production': [
                              'Advanced budgeting strategies',
                              'Risk management',
                              'International co-production',
                              'Distribution planning'
                            ],
                            'cinematography': [
                              'Advanced lighting techniques',
                              'Camera movement mastery',
                              'Color grading preparation',
                              'Multi-camera setups'
                            ],
                            'art-direction': [
                              'Advanced set construction',
                              'Period-accurate design',
                              'Sustainable production methods',
                              'Digital design integration'
                            ],
                            'stunts-action': [
                              'Complex stunt choreography',
                              'Special effects integration',
                              'International stunt coordination',
                              'Safety innovation'
                            ],
                            'costume-design': [
                              'Advanced construction techniques',
                              'Historical accuracy mastery',
                              'Sustainable fashion integration',
                              'Digital design tools'
                            ],
                            'makeup-hair': [
                              'Special effects makeup',
                              'Historical period accuracy',
                              'Prosthetic application',
                              'Advanced styling techniques'
                            ],
                            'music-composition': [
                              'Advanced orchestration',
                              'Film scoring techniques',
                              'Digital music production',
                              'Collaborative composition'
                            ],
                            'playback-singing': [
                              'Advanced vocal techniques',
                              'Genre-specific styles',
                              'Harmony and arrangement',
                              'Performance psychology'
                            ],
                            'choreography': [
                              'Complex dance sequences',
                              'Multi-dancer coordination',
                              'Storytelling through movement',
                              'Cultural dance integration'
                            ],
                            'acting': [
                              'Advanced character development',
                              'Method acting techniques',
                              'Physical transformation',
                              'Emotional range mastery'
                            ],
                            'editing': [
                              'Advanced cutting techniques',
                              'Story pacing mastery',
                              'Sound design integration',
                              'Color correction basics'
                            ],
                            'sound-design': [
                              'Advanced mixing techniques',
                              'Foley artistry',
                              'Ambient sound creation',
                              'Spatial audio design'
                            ],
                            'dialogue-recording': [
                              'Advanced voice acting',
                              'Character voice development',
                              'ADR techniques',
                              'Multi-language dubbing'
                            ],
                            'lyrics-writing': [
                              'Advanced poetic techniques',
                              'Cultural integration',
                              'Emotional depth mastery',
                              'Collaborative writing'
                            ],
                            'background-score': [
                              'Advanced orchestration',
                              'Emotional manipulation',
                              'Cultural music integration',
                              'Digital composition'
                            ],
                            'vfx-animation': [
                              'Advanced animation techniques',
                              '3D modeling and rigging',
                              'Compositing mastery',
                              'Real-time rendering'
                            ],
                            'di-color-grading': [
                              'Advanced color theory',
                              'HDR workflow',
                              'Look development',
                              'Color management'
                            ],
                            'lighting': [
                              'Advanced lighting design',
                              'LED technology mastery',
                              'Atmospheric lighting',
                              'Energy efficiency'
                            ],
                            'production-design': [
                              'Advanced concept development',
                              'Sustainable design',
                              'Digital visualization',
                              'Cultural integration'
                            ],
                            'publicity-marketing': [
                              'Advanced digital marketing',
                              'International campaigns',
                              'Data analytics',
                              'Brand strategy'
                            ],
                            'distribution-exhibition': [
                              'International distribution',
                              'Digital platform strategy',
                              'Audience analytics',
                              'Revenue optimization'
                            ],
                            'subtitling-dubbing': [
                              'Advanced translation',
                              'Cultural adaptation',
                              'Voice casting',
                              'Quality assurance'
                            ]
                          };
                          
                          const content = intermediateContent[craft.id as keyof typeof intermediateContent] || [
                            'Advanced techniques and methods',
                            'Professional workflows',
                            'Industry standards & quality',
                            'Practical projects & case studies'
                          ];
                          
                          return content.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ));
                        })()}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-black hover:from-primary/80 hover:to-primary font-semibold">
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Advanced Level */}
                  <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Advanced Level</CardTitle>
                          <CardDescription>Expert Mastery & Corporate</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {(() => {
                          const craft = categories.find(c => c.id === selectedCraft);
                          if (!craft) return null;
                          
                          const advancedContent = {
                            'story-writing': [
                              'Industry leadership in storytelling',
                              'Studio executive decision making',
                              'Global market adaptation',
                              'Innovation in narrative forms'
                            ],
                            'direction': [
                              'Auteur filmmaking mastery',
                              'Studio production leadership',
                              'International co-production direction',
                              'Industry trend setting'
                            ],
                            'production': [
                              'Major studio production management',
                              'International market strategy',
                              'Industry policy influence',
                              'Corporate leadership'
                            ],
                            'cinematography': [
                              'Visual innovation leadership',
                              'Technology advancement contribution',
                              'Industry standard setting',
                              'Corporate creative direction'
                            ],
                            'art-direction': [
                              'Creative vision leadership',
                              'Industry trend setting',
                              'Corporate design strategy',
                              'Global brand development'
                            ],
                            'stunts-action': [
                              'Industry safety leadership',
                              'Innovation in action cinema',
                              'Corporate stunt coordination',
                              'Global stunt industry influence'
                            ],
                            'costume-design': [
                              'Fashion industry leadership',
                              'Cultural influence and trends',
                              'Corporate brand development',
                              'Global fashion direction'
                            ],
                            'makeup-hair': [
                              'Industry innovation leadership',
                              'Technology advancement',
                              'Corporate creative direction',
                              'Global beauty trends'
                            ],
                            'music-composition': [
                              'Musical industry leadership',
                              'Innovation in film scoring',
                              'Corporate music direction',
                              'Global musical influence'
                            ],
                            'playback-singing': [
                              'Vocal industry leadership',
                              'Performance innovation',
                              'Corporate entertainment direction',
                              'Global vocal trends'
                            ],
                            'choreography': [
                              'Dance industry leadership',
                              'Movement innovation',
                              'Corporate entertainment direction',
                              'Global dance influence'
                            ],
                            'acting': [
                              'Performance industry leadership',
                              'Acting method innovation',
                              'Corporate entertainment direction',
                              'Global acting influence'
                            ],
                            'editing': [
                              'Post-production leadership',
                              'Editing innovation',
                              'Corporate creative direction',
                              'Global editing standards'
                            ],
                            'sound-design': [
                              'Audio industry leadership',
                              'Sound innovation',
                              'Corporate audio direction',
                              'Global sound standards'
                            ],
                            'dialogue-recording': [
                              'Voice industry leadership',
                              'Recording innovation',
                              'Corporate voice direction',
                              'Global voice standards'
                            ],
                            'lyrics-writing': [
                              'Lyrical industry leadership',
                              'Writing innovation',
                              'Corporate creative direction',
                              'Global lyrical influence'
                            ],
                            'background-score': [
                              'Score industry leadership',
                              'Musical innovation',
                              'Corporate music direction',
                              'Global score standards'
                            ],
                            'vfx-animation': [
                              'VFX industry leadership',
                              'Technology innovation',
                              'Corporate creative direction',
                              'Global VFX standards'
                            ],
                            'di-color-grading': [
                              'Color industry leadership',
                              'Technology innovation',
                              'Corporate creative direction',
                              'Global color standards'
                            ],
                            'lighting': [
                              'Lighting industry leadership',
                              'Technology innovation',
                              'Corporate creative direction',
                              'Global lighting standards'
                            ],
                            'production-design': [
                              'Design industry leadership',
                              'Creative innovation',
                              'Corporate design direction',
                              'Global design standards'
                            ],
                            'publicity-marketing': [
                              'Marketing industry leadership',
                              'Strategy innovation',
                              'Corporate marketing direction',
                              'Global marketing trends'
                            ],
                            'distribution-exhibition': [
                              'Distribution industry leadership',
                              'Strategy innovation',
                              'Corporate distribution direction',
                              'Global market strategy'
                            ],
                            'subtitling-dubbing': [
                              'Localization industry leadership',
                              'Technology innovation',
                              'Corporate localization direction',
                              'Global accessibility standards'
                            ]
                          };
                          
                          const content = advancedContent[craft.id as keyof typeof advancedContent] || [
                            'Expert-level mastery techniques',
                            'Industry leadership & management',
                            'Corporate decision making',
                            'Strategic planning & innovation'
                          ];
                          
                          return content.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ));
                        })()}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 text-black hover:from-primary/80 hover:to-primary font-semibold">
                        Master Level
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Career Progression Path */}
                <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Career Progression Path</span>
                    </CardTitle>
                    <CardDescription>Your journey from beginner to corporate executive in {categories.find(c => c.id === selectedCraft)?.label?.toLowerCase() || 'cinema'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {(() => {
                        const craft = categories.find(c => c.id === selectedCraft);
                        if (!craft) return null;
                        
                        const careerStages = {
                          'story-writing': [
                            { title: 'Entry Level', roles: 'Script Reader, Assistant Writer, Story Analyst', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Screenwriter, Script Doctor, Story Consultant', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Head Writer, Creative Director, Story Supervisor', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Development, Studio Executive', icon: 'Crown' }
                          ],
                          'direction': [
                            { title: 'Entry Level', roles: 'Assistant Director, Script Supervisor, Production Assistant', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Director, Unit Director, Second Unit Director', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Director, Creative Director, Head of Directing', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Production, Studio Executive', icon: 'Crown' }
                          ],
                          'production': [
                            { title: 'Entry Level', roles: 'Production Assistant, Coordinator, Assistant Manager', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Production Manager, Line Producer, Unit Manager', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Producer, Executive Producer, Head of Production', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Production, Head of Studio, CEO', icon: 'Crown' }
                          ],
                          'cinematography': [
                            { title: 'Entry Level', roles: 'Camera Assistant, Loader, Focus Puller', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Camera Operator, DOP, Lighting Cameraman', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior DOP, Visual Consultant, Head of Photography', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Visual Arts, Studio Executive', icon: 'Crown' }
                          ],
                          'art-direction': [
                            { title: 'Entry Level', roles: 'Art Department Assistant, Set Dresser, Props Assistant', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Art Director, Set Designer, Props Master', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Art Director, Production Designer, Head of Art', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Design, Studio Executive', icon: 'Crown' }
                          ],
                          'stunts-action': [
                            { title: 'Entry Level', roles: 'Stunt Performer, Safety Assistant, Equipment Handler', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Stunt Coordinator, Fight Master, Action Director', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Stunt Coordinator, Action Consultant, Head of Stunts', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Production, Head of Action, Studio Executive', icon: 'Crown' }
                          ],
                          'costume-design': [
                            { title: 'Entry Level', roles: 'Costume Assistant, Dresser, Seamstress', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Costume Designer, Wardrobe Supervisor, Stylist', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Costume Designer, Head of Wardrobe, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Design, Studio Executive', icon: 'Crown' }
                          ],
                          'makeup-hair': [
                            { title: 'Entry Level', roles: 'Makeup Assistant, Hair Assistant, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Makeup Artist, Hair Stylist, Special Effects Artist', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Makeup Artist, Head of Makeup, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Beauty, Studio Executive', icon: 'Crown' }
                          ],
                          'music-composition': [
                            { title: 'Entry Level', roles: 'Music Assistant, Arranger, Instrumentalist', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Composer, Music Director, Orchestrator', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Composer, Head of Music, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Music, Studio Executive', icon: 'Crown' }
                          ],
                          'playback-singing': [
                            { title: 'Entry Level', roles: 'Background Singer, Choir Member, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Playback Singer, Solo Artist, Harmony Singer', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Singer, Vocal Consultant, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Music, Studio Executive', icon: 'Crown' }
                          ],
                          'choreography': [
                            { title: 'Entry Level', roles: 'Dance Assistant, Background Dancer, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Choreographer, Dance Master, Movement Director', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Choreographer, Head of Dance, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Movement, Studio Executive', icon: 'Crown' }
                          ],
                          'acting': [
                            { title: 'Entry Level', roles: 'Background Actor, Extra, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Supporting Actor, Character Artist, Lead Actor', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Actor, Acting Coach, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Talent, Studio Executive', icon: 'Crown' }
                          ],
                          'editing': [
                            { title: 'Entry Level', roles: 'Assistant Editor, Apprentice, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Editor, Assistant Editor, Post Coordinator', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Editor, Head of Post, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Post-Production, Studio Executive', icon: 'Crown' }
                          ],
                          'sound-design': [
                            { title: 'Entry Level', roles: 'Sound Assistant, Boom Operator, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Sound Designer, Mixer, Foley Artist', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Sound Designer, Head of Sound, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Audio, Studio Executive', icon: 'Crown' }
                          ],
                          'dialogue-recording': [
                            { title: 'Entry Level', roles: 'Voice Assistant, Dubbing Artist, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Voice Actor, ADR Artist, Dubbing Director', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Voice Actor, Head of Voice, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Voice, Studio Executive', icon: 'Crown' }
                          ],
                          'lyrics-writing': [
                            { title: 'Entry Level', roles: 'Lyric Assistant, Poet, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Lyricist, Songwriter, Creative Writer', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Lyricist, Head of Lyrics, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Writing, Studio Executive', icon: 'Crown' }
                          ],
                          'background-score': [
                            { title: 'Entry Level', roles: 'Score Assistant, Arranger, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Composer, Music Director, Arranger', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Composer, Head of Score, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Music, Studio Executive', icon: 'Crown' }
                          ],
                          'vfx-animation': [
                            { title: 'Entry Level', roles: 'VFX Assistant, Animator, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'VFX Artist, Animator, Compositor', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior VFX Artist, Head of VFX, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of VFX, Studio Executive', icon: 'Crown' }
                          ],
                          'di-color-grading': [
                            { title: 'Entry Level', roles: 'Color Assistant, Trainee, Apprentice', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Colorist, DI Artist, Grading Specialist', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Colorist, Head of DI, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Post, Studio Executive', icon: 'Crown' }
                          ],
                          'lighting': [
                            { title: 'Entry Level', roles: 'Lighting Assistant, Grip, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Gaffer, Lighting Technician, Key Grip', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Gaffer, Head of Lighting, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Technical, Studio Executive', icon: 'Crown' }
                          ],
                          'production-design': [
                            { title: 'Entry Level', roles: 'Design Assistant, Trainee, Apprentice', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Production Designer, Art Director, Set Designer', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Designer, Head of Design, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Design, Studio Executive', icon: 'Crown' }
                          ],
                          'publicity-marketing': [
                            { title: 'Entry Level', roles: 'Marketing Assistant, PR Assistant, Trainee', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Marketing Manager, PR Specialist, Digital Marketer', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Marketer, Head of Marketing, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Marketing, Head of PR, Studio Executive', icon: 'Crown' }
                          ],
                          'distribution-exhibition': [
                            { title: 'Entry Level', roles: 'Distribution Assistant, Trainee, Apprentice', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Distribution Manager, Sales Executive, Marketing Coordinator', icon: 'Briefcase' },
                            {title: 'Senior Level', roles: 'Senior Distributor, Head of Distribution, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Distribution, Head of Sales, Studio Executive', icon: 'Crown' }
                          ],
                          'subtitling-dubbing': [
                            { title: 'Entry Level', roles: 'Translation Assistant, Trainee, Apprentice', icon: 'Users' },
                            { title: 'Mid Career', roles: 'Translator, Subtitler, Dubbing Artist', icon: 'Briefcase' },
                            { title: 'Senior Level', roles: 'Senior Translator, Head of Localization, Creative Director', icon: 'Award' },
                            { title: 'Executive', roles: 'VP Creative, Head of Localization, Studio Executive', icon: 'Crown' }
                          ]
                        };
                        
                        const stages = careerStages[craft.id as keyof typeof careerStages] || [
                          { title: 'Entry Level', roles: 'Assistant, Junior, Trainee positions', icon: 'Users' },
                          { title: 'Mid Career', roles: 'Specialist, Coordinator, Team Lead', icon: 'Briefcase' },
                          { title: 'Senior Level', roles: 'Manager, Director, Head of Department', icon: 'Award' },
                          { title: 'Executive', roles: 'VP, C-Level, Corporate Leadership', icon: 'Crown' }
                        ];
                        
                        const iconMap = { Users, Briefcase, Award, Crown };
                        
                        return stages.map((stage, index) => {
                          const Icon = iconMap[stage.icon as keyof typeof iconMap];
                          if (!Icon) return null;
                          return (
                            <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <h4 className="font-semibold mb-2">{stage.title}</h4>
                              <p className="text-sm text-muted-foreground">{stage.roles}</p>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </CardContent>
                </Card>

                {/* Related Courses */}
                <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Related Learning Paths</span>
                    </CardTitle>
                    <CardDescription>Courses specifically designed for {categories.find(c => c.id === selectedCraft)?.label?.toLowerCase() || 'this craft'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {learningPaths
                        .filter(path => 
                          path.tags.some(tag => 
                            tag.toLowerCase().includes(categories.find(c => c.id === selectedCraft)?.label?.toLowerCase() || '')
                          )
                        )
                        .slice(0, 6)
                        .map((path) => (
                          <div key={path.id} className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                {path.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm">{path.title}</h4>
                                <p className="text-xs text-muted-foreground">{path.level} • {path.duration}</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-primary">{path.pricing}</span>
                              <Button size="sm" variant="outline">View Course</Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
