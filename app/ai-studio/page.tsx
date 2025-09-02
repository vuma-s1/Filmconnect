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
  AlertTriangle
} from "lucide-react";

interface AIAgent {
  id: string;
  name: string;
  category: string;
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
}

export default function AIStudioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoResults, setDemoResults] = useState<{[key: string]: any}>({});
  const [processingAgents, setProcessingAgents] = useState<string[]>([]);

  // AI Agents Data
  const aiAgents: AIAgent[] = [
    // Writing & Story Development
    {
      id: 'script-writer',
      name: 'Script Writing Agent',
      category: 'writing',
      icon: FileText,
      description: 'Generates draft screenplays from concepts, themes, or outlines',
      features: ['Concept to Script', 'Scene Generation', 'Character Development', 'Plot Structuring'],
      usage: 2450,
      rating: 4.8,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-15 minutes',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'dialogue-polisher',
      name: 'Dialogue Polisher',
      category: 'writing',
      icon: MessageCircle,
      description: 'Refines dialogues for tone, culture, and emotional impact',
      features: ['Tone Adjustment', 'Cultural Adaptation', 'Emotional Resonance', 'Natural Flow'],
      usage: 1875,
      rating: 4.7,
      premium: false,
      featured: false,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-green-500 to-teal-500'
    },
    
    // Pre-Production & Direction
    {
      id: 'script-breakdown',
      name: 'Script Breakdown Agent',
      category: 'pre-production',
      icon: FileText,
      description: 'Extracts characters, props, locations, and scenes from scripts',
      features: ['Element Extraction', 'Scene Analysis', 'Character Tracking', 'Prop Management'],
      usage: 1560,
      rating: 4.6,
      premium: false,
      featured: true,
      new: false,
      processingTime: '1-3 minutes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'shot-list-generator',
      name: 'Shot List Generator',
      category: 'pre-production',
      icon: Camera,
      description: 'Creates detailed shot lists with camera angles and equipment needs',
      features: ['Shot Planning', 'Equipment Lists', 'Camera Angles', 'Scene Visualization'],
      usage: 1320,
      rating: 4.5,
      premium: true,
      featured: false,
      new: true,
      processingTime: '3-7 minutes',
      color: 'from-amber-500 to-orange-500'
    },

    // Cinematography
    {
      id: 'lens-simulator',
      name: 'Lens & Lighting Simulator',
      category: 'cinematography',
      icon: Camera,
      description: 'Tests different lenses and lighting setups virtually',
      features: ['Lens Simulation', 'Lighting Preview', 'Scene Testing', 'Equipment Planning'],
      usage: 980,
      rating: 4.7,
      premium: true,
      featured: true,
      new: true,
      processingTime: '2-5 minutes',
      color: 'from-cyan-500 to-blue-500'
    },

    // Post-Production
    {
      id: 'rough-cut',
      name: 'AI Rough Cut Agent',
      category: 'post-production',
      icon: Video,
      description: 'Generates initial rough cuts from raw footage & metadata',
      features: ['Auto-Editing', 'Scene Selection', 'Timeline Assembly', 'Pacing Analysis'],
      usage: 2100,
      rating: 4.8,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-15 minutes',
      color: 'from-violet-500 to-purple-500'
    },

    // Sound & Music
    {
      id: 'dialogue-cleanup',
      name: 'Dialogue Cleanup Agent',
      category: 'sound',
      icon: Headphones,
      description: 'Removes noise, normalizes levels, and enhances clarity',
      features: ['Noise Reduction', 'Level Normalization', 'Voice Clarity', 'Background Removal'],
      usage: 1780,
      rating: 4.9,
      premium: false,
      featured: false,
      new: true,
      processingTime: '3-8 minutes',
      color: 'from-emerald-500 to-green-500'
    },

    // Marketing & Distribution
    {
      id: 'trailer-generator',
      name: 'AI Trailer Generator',
      category: 'marketing',
      icon: Film,
      description: 'Crafts multiple trailer versions for different markets',
      features: ['Auto-Editing', 'Music Sync', 'Emotional Pacing', 'Market Adaptation'],
      usage: 1560,
      rating: 4.7,
      premium: true,
      featured: true,
      new: true,
      processingTime: '5-10 minutes',
      color: 'from-rose-500 to-pink-500'
    },

    // Piracy & Compliance
    {
      id: 'piracy-tracker',
      name: 'Piracy Tracker Agent',
      category: 'compliance',
      icon: AlertTriangle,
      description: 'Scans web & torrents for illegal uploads',
      features: ['Web Monitoring', 'DMCA Automation', 'Content Protection', 'Legal Compliance'],
      usage: 890,
      rating: 4.6,
      premium: true,
      featured: false,
      new: true,
      processingTime: 'Continuous Monitoring',
      color: 'from-red-500 to-orange-500'
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
                <p className="text-sm text-muted-foreground">{agent.category}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
              <span className="text-sm font-medium">{agent.rating}</span>
            </div>
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
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search AI tools..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`flex items-center w-full p-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    <span>{category.label}</span>
                    <span className="ml-auto text-xs bg-muted rounded-full px-2 py-0.5">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {aiAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
