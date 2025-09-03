"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  UserPlus, 
  ChevronRight, 
  Hash, 
  Zap, 
  Plus, 
  MessageCircle, 
  BarChart3, 
  BookOpen, 
  Sparkles, 
  Users, 
  Film, 
  Camera, 
  Video, 
  Mic, 
  Headphones, 
  Star, 
  Play, 
  ArrowRight, 
  Loader2, 
  Share2, 
  Heart, 
  CheckCircle,
  FileText,
  AlertTriangle,
  Brain,
  Palette,
  Music,
  TrendingUp,
  Shield,
  Lightbulb,
  Target,
  Clock,
  Settings,
  Wand2,
  Layers,
  Compass,
  Globe,
  Database,
  Cpu,
  Eye,
  Ear,
  Hand,
  Footprints,
  DollarSign
} from "lucide-react";

interface AIAgent {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  icon: any;
  description: string;
  features: string[];
  usage: number;
  rating: number;
  premium: boolean;
  featured: boolean;
  new: boolean;
  processingTime: string;
  color: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  price: 'free' | 'premium' | 'enterprise';
}

export default function AIStudioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoResults, setDemoResults] = useState<{[key: string]: any}>({});
  const [processingAgents, setProcessingAgents] = useState<string[]>([]);

  // AI Agents Data - Expanded with more comprehensive tools
  const aiAgents: AIAgent[] = [
    // Writing & Story Development
    {
      id: 'script-writer-basic',
      name: 'Basic Script Writer',
      category: 'writing',
      subcategory: 'script-writing',
      icon: FileText,
      description: 'Simple script generation from basic concepts and themes',
      features: ['Basic Story Structure', 'Simple Dialogue', 'Character Basics', 'Plot Outlines'],
      usage: 5200,
      rating: 4.2,
      premium: false,
      featured: false,
      new: false,
      processingTime: '2-5 minutes',
      color: 'from-blue-400 to-blue-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'script-writer-advanced',
      name: 'Advanced Script Writer Pro',
      category: 'writing',
      subcategory: 'script-writing',
      icon: FileText,
      description: 'Professional-grade screenplay generation with industry standards',
      features: ['Industry Formatting', 'Complex Character Arcs', 'Advanced Plot Structures', 'Genre Adaptation'],
      usage: 2450,
      rating: 4.8,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-15 minutes',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'dialogue-polisher-basic',
      name: 'Dialogue Enhancer',
      category: 'writing',
      subcategory: 'dialogue',
      icon: MessageCircle,
      description: 'Basic dialogue improvement and natural language flow',
      features: ['Grammar Check', 'Basic Flow', 'Simple Corrections', 'Readability'],
      usage: 3200,
      rating: 4.1,
      premium: false,
      featured: false,
      new: false,
      processingTime: '1-3 minutes',
      color: 'from-green-400 to-green-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'dialogue-polisher-advanced',
      name: 'Dialogue Polisher Pro',
      category: 'writing',
      subcategory: 'dialogue',
      icon: MessageCircle,
      description: 'Advanced dialogue refinement for tone, culture, and emotional impact',
      features: ['Tone Adjustment', 'Cultural Adaptation', 'Emotional Resonance', 'Natural Flow'],
      usage: 1875,
      rating: 4.7,
      premium: true,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-green-500 to-teal-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'character-developer',
      name: 'Character Development AI',
      category: 'writing',
      subcategory: 'character',
      icon: Users,
      description: 'Create complex, multi-dimensional characters with backstories',
      features: ['Backstory Generation', 'Personality Profiles', 'Character Arcs', 'Relationship Mapping'],
      usage: 1560,
      rating: 4.6,
      premium: true,
      featured: true,
      new: true,
      processingTime: '3-8 minutes',
      color: 'from-purple-400 to-purple-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'story-outliner',
      name: 'Story Outliner',
      category: 'writing',
      subcategory: 'plotting',
      icon: Compass,
      description: 'Generate detailed story outlines and plot structures',
      features: ['Plot Mapping', 'Scene Breakdown', 'Conflict Development', 'Resolution Planning'],
      usage: 2100,
      rating: 4.4,
      premium: false,
      featured: false,
      new: true,
      processingTime: '2-6 minutes',
      color: 'from-amber-400 to-amber-500',
      difficulty: 'intermediate',
      price: 'free'
    },
    
    // Pre-Production & Direction
    {
      id: 'script-breakdown-basic',
      name: 'Script Breakdown Basic',
      category: 'pre-production',
      subcategory: 'script-analysis',
      icon: FileText,
      description: 'Basic script analysis and element extraction',
      features: ['Character Lists', 'Basic Props', 'Simple Locations', 'Scene Counts'],
      usage: 2800,
      rating: 4.0,
      premium: false,
      featured: false,
      new: false,
      processingTime: '1-2 minutes',
      color: 'from-purple-400 to-purple-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'script-breakdown-advanced',
      name: 'Script Breakdown Pro',
      category: 'pre-production',
      subcategory: 'script-analysis',
      icon: FileText,
      description: 'Advanced script breakdown with detailed analysis and planning',
      features: ['Element Extraction', 'Scene Analysis', 'Character Tracking', 'Prop Management'],
      usage: 1560,
      rating: 4.6,
      premium: true,
      featured: true,
      new: false,
      processingTime: '1-3 minutes',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'shot-list-generator-basic',
      name: 'Shot List Creator',
      category: 'pre-production',
      subcategory: 'shot-planning',
      icon: Camera,
      description: 'Basic shot list generation with standard camera angles',
      features: ['Basic Shots', 'Simple Angles', 'Equipment Lists', 'Basic Planning'],
      usage: 1800,
      rating: 4.2,
      premium: false,
      featured: false,
      new: false,
      processingTime: '2-4 minutes',
      color: 'from-amber-400 to-amber-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'shot-list-generator-advanced',
      name: 'Shot List Generator Pro',
      category: 'pre-production',
      subcategory: 'shot-planning',
      icon: Camera,
      description: 'Professional shot planning with advanced cinematography techniques',
      features: ['Shot Planning', 'Equipment Lists', 'Camera Angles', 'Scene Visualization'],
      usage: 1320,
      rating: 4.5,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-7 minutes',
      color: 'from-amber-500 to-orange-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'storyboard-generator',
      name: 'AI Storyboard Generator',
      category: 'pre-production',
      subcategory: 'visualization',
      icon: Palette,
      description: 'Generate visual storyboards from script descriptions',
      features: ['Visual Storyboards', 'Scene Layouts', 'Camera Positions', 'Character Blocking'],
      usage: 1200,
      rating: 4.7,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-12 minutes',
      color: 'from-indigo-400 to-indigo-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'budget-calculator',
      name: 'Budget Calculator AI',
      category: 'pre-production',
      subcategory: 'planning',
      icon: BarChart3,
      description: 'AI-powered budget estimation and cost analysis',
      features: ['Cost Estimation', 'Resource Planning', 'Timeline Analysis', 'Risk Assessment'],
      usage: 890,
      rating: 4.5,
      premium: true,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-emerald-400 to-emerald-500',
      difficulty: 'intermediate',
      price: 'premium'
    },

    // Cinematography
    {
      id: 'lens-simulator-basic',
      name: 'Basic Lens Simulator',
      category: 'cinematography',
      subcategory: 'equipment',
      icon: Camera,
      description: 'Simple lens and camera settings simulation',
      features: ['Basic Lenses', 'Simple Settings', 'Basic Preview', 'Equipment Info'],
      usage: 1500,
      rating: 4.0,
      premium: false,
      featured: false,
      new: false,
      processingTime: '1-3 minutes',
      color: 'from-cyan-400 to-cyan-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'lens-simulator-advanced',
      name: 'Lens & Lighting Simulator Pro',
      category: 'cinematography',
      subcategory: 'equipment',
      icon: Camera,
      description: 'Advanced lens and lighting simulation with professional tools',
      features: ['Lens Simulation', 'Lighting Preview', 'Scene Testing', 'Equipment Planning'],
      usage: 980,
      rating: 4.7,
      premium: true,
      featured: true,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-cyan-500 to-blue-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'lighting-planner',
      name: 'Lighting Setup Planner',
      category: 'cinematography',
      subcategory: 'lighting',
      icon: Lightbulb,
      description: 'Plan and visualize lighting setups for different scenes',
      features: ['Lighting Diagrams', 'Equipment Lists', 'Power Requirements', 'Scene Adaptation'],
      usage: 750,
      rating: 4.6,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-6 minutes',
      color: 'from-yellow-400 to-yellow-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'color-grading-assistant',
      name: 'Color Grading Assistant',
      category: 'cinematography',
      subcategory: 'post-processing',
      icon: Palette,
      description: 'AI-powered color grading suggestions and presets',
      features: ['Color Analysis', 'Grading Presets', 'Mood Matching', 'Style Adaptation'],
      usage: 1100,
      rating: 4.8,
      premium: true,
      featured: true,
      new: true,
      processingTime: '2-4 minutes',
      color: 'from-rose-400 to-rose-500',
      difficulty: 'intermediate',
      price: 'premium'
    },

    // Post-Production
    {
      id: 'rough-cut-basic',
      name: 'Basic Rough Cut AI',
      category: 'post-production',
      subcategory: 'editing',
      icon: Video,
      description: 'Simple automatic video editing and scene assembly',
      features: ['Basic Editing', 'Scene Assembly', 'Simple Cuts', 'Timeline Creation'],
      usage: 3200,
      rating: 4.1,
      premium: false,
      featured: false,
      new: false,
      processingTime: '3-8 minutes',
      color: 'from-violet-400 to-violet-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'rough-cut-advanced',
      name: 'AI Rough Cut Agent Pro',
      category: 'post-production',
      subcategory: 'editing',
      icon: Video,
      description: 'Advanced AI editing with professional-grade results',
      features: ['Auto-Editing', 'Scene Selection', 'Timeline Assembly', 'Pacing Analysis'],
      usage: 2100,
      rating: 4.8,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-15 minutes',
      color: 'from-violet-500 to-purple-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'vfx-assistant',
      name: 'VFX Planning Assistant',
      category: 'post-production',
      subcategory: 'vfx',
      icon: Wand2,
      description: 'Plan and estimate VFX requirements for scenes',
      features: ['VFX Planning', 'Cost Estimation', 'Timeline Planning', 'Resource Allocation'],
      usage: 680,
      rating: 4.7,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-7 minutes',
      color: 'from-purple-400 to-purple-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'subtitle-generator',
      name: 'AI Subtitle Generator',
      category: 'post-production',
      subcategory: 'localization',
      icon: FileText,
      description: 'Generate accurate subtitles and captions automatically',
      features: ['Auto-Transcription', 'Multi-Language', 'Timing Sync', 'Format Support'],
      usage: 1450,
      rating: 4.5,
      premium: false,
      featured: false,
      new: true,
      processingTime: '2-6 minutes',
      color: 'from-blue-400 to-blue-500',
      difficulty: 'intermediate',
      price: 'free'
    },

    // Sound & Music
    {
      id: 'dialogue-cleanup-basic',
      name: 'Basic Audio Cleaner',
      category: 'sound',
      subcategory: 'audio-processing',
      icon: Headphones,
      description: 'Simple noise reduction and audio enhancement',
      features: ['Noise Reduction', 'Basic Enhancement', 'Simple Filters', 'Level Adjustment'],
      usage: 2500,
      rating: 4.0,
      premium: false,
      featured: false,
      new: false,
      processingTime: '2-4 minutes',
      color: 'from-emerald-400 to-emerald-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'dialogue-cleanup-advanced',
      name: 'Dialogue Cleanup Agent Pro',
      category: 'sound',
      subcategory: 'audio-processing',
      icon: Headphones,
      description: 'Professional audio cleanup with advanced algorithms',
      features: ['Noise Reduction', 'Level Normalization', 'Voice Clarity', 'Background Removal'],
      usage: 1780,
      rating: 4.9,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-8 minutes',
      color: 'from-emerald-500 to-green-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'music-composer',
      name: 'AI Music Composer',
      category: 'sound',
      subcategory: 'music',
      icon: Music,
      description: 'Generate original music tracks for films',
      features: ['Original Compositions', 'Genre Adaptation', 'Mood Matching', 'Length Control'],
      usage: 920,
      rating: 4.6,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-15 minutes',
      color: 'from-pink-400 to-pink-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'sound-effect-generator',
      name: 'Sound Effect Generator',
      category: 'sound',
      subcategory: 'effects',
      icon: Ear,
      description: 'Create custom sound effects for scenes',
      features: ['Custom Effects', 'Scene Matching', 'Realistic Sounds', 'Variation Generation'],
      usage: 680,
      rating: 4.4,
      premium: true,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-orange-400 to-orange-500',
      difficulty: 'intermediate',
      price: 'premium'
    },

    // Marketing & Distribution
    {
      id: 'trailer-generator-basic',
      name: 'Basic Trailer Creator',
      category: 'marketing',
      subcategory: 'trailers',
      icon: Film,
      description: 'Simple trailer generation from key scenes',
      features: ['Basic Editing', 'Scene Selection', 'Simple Music', 'Basic Pacing'],
      usage: 2100,
      rating: 4.2,
      premium: false,
      featured: false,
      new: false,
      processingTime: '3-8 minutes',
      color: 'from-rose-400 to-rose-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'trailer-generator-advanced',
      name: 'AI Trailer Generator Pro',
      category: 'marketing',
      subcategory: 'trailers',
      icon: Film,
      description: 'Professional trailer creation with advanced editing',
      features: ['Auto-Editing', 'Music Sync', 'Emotional Pacing', 'Market Adaptation'],
      usage: 1560,
      rating: 4.7,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-10 minutes',
      color: 'from-rose-500 to-pink-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'poster-generator',
      name: 'AI Poster Generator',
      category: 'marketing',
      subcategory: 'visuals',
      icon: Palette,
      description: 'Create compelling movie posters automatically',
      features: ['Design Generation', 'Style Adaptation', 'Text Integration', 'Brand Consistency'],
      usage: 890,
      rating: 4.5,
      premium: true,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-indigo-400 to-indigo-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'social-media-assistant',
      name: 'Social Media Content AI',
      category: 'marketing',
      subcategory: 'digital',
      icon: TrendingUp,
      description: 'Generate social media content and campaigns',
      features: ['Content Creation', 'Campaign Planning', 'Platform Optimization', 'Engagement Analysis'],
      usage: 750,
      rating: 4.6,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-6 minutes',
      color: 'from-green-400 to-green-500',
      difficulty: 'intermediate',
      price: 'premium'
    },

    // Compliance & Legal
    {
      id: 'piracy-tracker-basic',
      name: 'Basic Content Monitor',
      category: 'compliance',
      subcategory: 'monitoring',
      icon: AlertTriangle,
      description: 'Basic content monitoring and detection',
      features: ['Basic Scanning', 'Simple Alerts', 'Basic Reports', 'Manual Review'],
      usage: 1200,
      rating: 4.1,
      premium: false,
      featured: false,
      new: false,
      processingTime: 'Continuous',
      color: 'from-red-400 to-red-500',
      difficulty: 'basic',
      price: 'free'
    },
    {
      id: 'piracy-tracker-advanced',
      name: 'Piracy Tracker Agent Pro',
      category: 'compliance',
      subcategory: 'monitoring',
      icon: AlertTriangle,
      description: 'Advanced piracy detection with automated takedown',
      features: ['Web Monitoring', 'DMCA Automation', 'Content Protection', 'Legal Compliance'],
      usage: 890,
      rating: 4.6,
      premium: true,
      featured: false,
      new: true,
      processingTime: 'Continuous Monitoring',
      color: 'from-red-500 to-orange-500',
      difficulty: 'advanced',
      price: 'premium'
    },
    {
      id: 'rights-manager',
      name: 'Rights Management AI',
      category: 'compliance',
      subcategory: 'rights',
      icon: Shield,
      description: 'Manage and track content rights and licenses',
      features: ['Rights Tracking', 'License Management', 'Expiration Alerts', 'Compliance Reports'],
      usage: 450,
      rating: 4.7,
      premium: true,
      featured: false,
      new: true,
      processingTime: '1-3 minutes',
      color: 'from-blue-400 to-blue-500',
      difficulty: 'intermediate',
      price: 'premium'
    },
    {
      id: 'legal-assistant',
      name: 'Legal Compliance Assistant',
      category: 'compliance',
      subcategory: 'legal',
      icon: FileText,
      description: 'AI-powered legal compliance checking and documentation',
      features: ['Compliance Checking', 'Document Review', 'Risk Assessment', 'Legal Templates'],
      usage: 320,
      rating: 4.8,
      premium: true,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-gray-400 to-gray-500',
      difficulty: 'advanced',
      price: 'enterprise'
    }
  ];

  const categories = [
    { id: 'all', label: 'All AI Agents', icon: Sparkles, count: aiAgents.length },
    { id: 'writing', label: 'Writing & Story', icon: FileText, count: aiAgents.filter(a => a.category === 'writing').length },
    { id: 'pre-production', label: 'Pre-Production', icon: BookOpen, count: aiAgents.filter(a => a.category === 'pre-production').length },
    { id: 'cinematography', label: 'Cinematography', icon: Camera, count: aiAgents.filter(a => a.category === 'cinematography').length },
    { id: 'post-production', label: 'Post-Production', icon: Video, count: aiAgents.filter(a => a.category === 'post-production').length },
    { id: 'sound', label: 'Sound & Music', icon: Headphones, count: aiAgents.filter(a => a.category === 'sound').length },
    { id: 'marketing', label: 'Marketing', icon: Film, count: aiAgents.filter(a => a.category === 'marketing').length },
    { id: 'compliance', label: 'Compliance', icon: AlertTriangle, count: aiAgents.filter(a => a.category === 'compliance').length },
  ];

  const difficulties = [
    { id: 'all', label: 'All Levels', icon: Target, count: aiAgents.length },
    { id: 'basic', label: 'Basic', icon: Target, count: aiAgents.filter(a => a.difficulty === 'basic').length },
    { id: 'intermediate', label: 'Intermediate', icon: Target, count: aiAgents.filter(a => a.difficulty === 'intermediate').length },
    { id: 'advanced', label: 'Advanced', icon: Target, count: aiAgents.filter(a => a.difficulty === 'advanced').length },
  ];

  const prices = [
    { id: 'all', label: 'All Pricing', icon: DollarSign, count: aiAgents.length },
    { id: 'free', label: 'Free', icon: DollarSign, count: aiAgents.filter(a => a.price === 'free').length },
    { id: 'premium', label: 'Premium', icon: DollarSign, count: aiAgents.filter(a => a.price === 'premium').length },
    { id: 'enterprise', label: 'Enterprise', icon: DollarSign, count: aiAgents.filter(a => a.price === 'enterprise').length },
  ];

  // Filter AI agents based on selected criteria
  const filteredAgents = aiAgents.filter(agent => {
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || agent.difficulty === selectedDifficulty;
    const matchesPrice = selectedPrice === 'all' || agent.price === selectedPrice;
    const matchesSearch = searchQuery === '' || 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesPrice && matchesSearch;
  });

  const handleProcessAgent = (agentId: string) => {
    setProcessingAgents(prev => [...prev, agentId]);
    setTimeout(() => {
      setProcessingAgents(prev => prev.filter(id => id !== agentId));
    }, 2000);
  };

  const toggleFavorite = (agentId: string) => {
    setFavorites(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId) 
        : [...prev, agentId]
    );
  };

  const handleDemo = (agentId: string) => {
    setActiveDemo(agentId);
    setDemoResults(prev => ({
      ...prev,
      [agentId]: {
        status: 'processing',
        timestamp: new Date().toISOString(),
        result: ''
      }
    }));

    // Simulate processing
    setTimeout(() => {
      setDemoResults(prev => ({
        ...prev,
        [agentId]: {
          status: 'completed',
          timestamp: new Date().toISOString(),
          result: 'Demo completed successfully! This is a sample result from the AI agent.'
        }
      }));
    }, 3000);
  };

  const AgentCard = ({ agent }: { agent: AIAgent }) => {
    const isProcessing = processingAgents.includes(agent.id);
    const demoResult = demoResults[agent.id];
    const Icon = agent.icon;

    const getDifficultyColor = (difficulty: string) => {
      switch (difficulty) {
        case 'basic': return 'bg-green-100 text-green-800 border-green-200';
        case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    };

    const getPriceColor = (price: string) => {
      switch (price) {
        case 'free': return 'bg-green-100 text-green-800 border-green-200';
        case 'premium': return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    };

    return (
      <Card className="w-full max-w-md mx-auto overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${agent.color} text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{agent.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-sm text-muted-foreground capitalize">{agent.category.replace('-', ' ')}</p>
                  <span className="text-xs text-muted-foreground">•</span>
                  <p className="text-sm text-muted-foreground capitalize">{agent.subcategory.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
              <span className="text-sm font-medium">{agent.rating}</span>
            </div>
          </div>

          {/* Difficulty and Price Badges */}
          <div className="flex items-center space-x-2 mb-4">
            <Badge className={`text-xs border ${getDifficultyColor(agent.difficulty)}`}>
              {agent.difficulty.charAt(0).toUpperCase() + agent.difficulty.slice(1)}
            </Badge>
            <Badge className={`text-xs border ${getPriceColor(agent.price)}`}>
              {agent.price.charAt(0).toUpperCase() + agent.price.slice(1)}
            </Badge>
            {agent.new && (
              <Badge className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                New
              </Badge>
            )}
            {agent.featured && (
              <Badge className="text-xs bg-amber-100 text-amber-800 border-amber-200">
                Featured
              </Badge>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">{agent.description}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {agent.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/20">
              <Button 
                className="w-full group text-black font-bold" 
                onClick={() => handleDemo(agent.id)}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin text-black" />
                    <span className="text-black">Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="font-bold text-black">Try Demo</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200 text-black" />
                  </>
                )}
              </Button>
            </div>

            {demoResult && (
              <div className="p-3 bg-muted/30 rounded-lg text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    {demoResult.status === 'processing' ? 'Processing...' : 'Result'}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(demoResult.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                {demoResult.result && (
                  <p className="text-muted-foreground">{demoResult.result}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Studio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover powerful AI tools to enhance your filmmaking workflow
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Enhanced Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="space-y-6">
              {/* Search Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Search & Filter</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search AI tools..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`flex items-center w-full p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="h-4 w-4 mr-3" />
                      <span className="flex-1 text-left">{category.label}</span>
                      <span className="text-xs bg-muted rounded-full px-2 py-1 font-medium">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Levels Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Difficulty Level</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty.id}
                      className={`flex items-center w-full p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedDifficulty === difficulty.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedDifficulty(difficulty.id)}
                    >
                      <difficulty.icon className="h-4 w-4 mr-3" />
                      <span className="flex-1 text-left">{difficulty.label}</span>
                      <span className="text-xs bg-muted rounded-full px-2 py-1 font-medium">
                        {difficulty.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Pricing</h3>
                <div className="space-y-2">
                  {prices.map((price) => (
                    <button
                      key={price.id}
                      className={`flex items-center w-full p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedPrice === price.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedPrice(price.id)}
                    >
                      <price.icon className="h-4 w-4 mr-3" />
                      <span className="flex-1 text-left">{price.label}</span>
                      <span className="text-xs bg-muted rounded-full px-2 py-1 font-medium">
                        {price.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-muted/30 rounded-lg text-center">
                    <div className="font-medium text-foreground">{filteredAgents.length}</div>
                    <div className="text-muted-foreground">Tools Found</div>
                  </div>
                  <div className="p-2 bg-muted/30 rounded-lg text-center">
                    <div className="font-medium text-foreground">{aiAgents.filter(a => a.new).length}</div>
                    <div className="text-muted-foreground">New Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedCategory === 'all' ? 'All AI Tools' : categories.find(c => c.id === selectedCategory)?.label}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredAgents.length} of {aiAgents.length} tools found
                    {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
                    {selectedDifficulty !== 'all' && ` • ${difficulties.find(d => d.id === selectedDifficulty)?.label} level`}
                    {selectedPrice !== 'all' && ` • ${prices.find(p => p.id === selectedPrice)?.label} pricing`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                      setSelectedPrice('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Tools Grid */}
            {filteredAgents.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted/30 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No AI tools found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                    setSelectedPrice('all');
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
