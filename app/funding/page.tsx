"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Users, 
  Calendar,
  ExternalLink,
  Download,
  Calculator,
  Building,
  Globe,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Target,
  Lightbulb,
  Video,
  PieChart,
  Shield,
  Smartphone,
  Tv,
  Monitor
} from 'lucide-react';

interface FundingSource {
  id: string;
  name: string;
  type: 'Government' | 'Private' | 'International' | 'Crowdfunding';
  maxAmount: string;
  description: string;
  requirements: string[];
  timeline: string | {
    application: string;
    review: string;
    decision: string;
  };
  successRate: string;
  contactInfo: {
    email?: string;
    phone?: string;
    website?: string;
  };
  tags: string[];
}

const fundingSources: FundingSource[] = [
  {
    id: 'nfdc',
    name: 'National Film Development Corporation (NFDC)',
    type: 'Government',
    maxAmount: '₹2 Crores',
    description: 'India\'s premier film financing organization supporting quality cinema and emerging filmmakers.',
    requirements: [
      'Complete screenplay with treatment',
      'Director with proven track record',
      'Detailed budget and schedule',
      'Cast confirmation letters',
      'Distribution strategy'
    ],
    timeline: '4-6 months',
    successRate: '15%',
    contactInfo: {
      email: 'info@nfdcindia.com',
      phone: '+91-11-2338-9876',
      website: 'https://nfdcindia.com'
    },
    tags: ['Feature Films', 'Art Cinema', 'Regional Films']
  },
  {
    id: 'reliance',
    name: 'Reliance Entertainment',
    type: 'Private',
    maxAmount: '₹50 Crores',
    description: 'Leading entertainment conglomerate investing in commercial cinema across multiple languages.',
    requirements: [
      'Proven director/producer track record',
      'Star cast confirmation',
      'P&L projections',
      'Marketing plan',
      'Completion guarantee'
    ],
    timeline: '2-3 months',
    successRate: '85%',
    contactInfo: {
      email: 'submissions@relianceentertainment.com',
      phone: '+91-22-3038-6000',
      website: 'https://relianceentertainment.com'
    },
    tags: ['Commercial Films', 'Big Budget']
  },
  {
    id: 'wishberry',
    name: 'Wishberry Crowdfunding',
    type: 'Crowdfunding',
    maxAmount: '₹1 Crore',
    description: 'India\'s largest crowdfunding platform for creative projects with 70% success rate.',
    requirements: [
      'Compelling pitch video',
      'Reward structure for backers',
      'Social media presence',
      'Project timeline',
      'Professional materials'
    ],
    timeline: '1-3 months',
    successRate: '70%',
    contactInfo: {
      email: 'support@wishberry.in',
      phone: '+91-22-6123-4567',
      website: 'https://wishberry.in'
    },
    tags: ['Independent Films', 'Community Funded']
  }
];

const budgetBreakdown = [
  { category: 'Pre-Production', percentage: '15%' },
  { category: 'Production', percentage: '60%' },
  { category: 'Post-Production', percentage: '15%' },
  { category: 'Marketing & Distribution', percentage: '10%' }
];

export default function FundingPage() {
  const [selectedTab, setSelectedTab] = useState('digital-rights');
  const [budgetAmount, setBudgetAmount] = useState('');

  const calculateBudget = () => {
    const total = parseFloat(budgetAmount);
    if (isNaN(total) || total <= 0) return;
    
    alert(`Budget breakdown calculated for ₹${total.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3 sm:mb-4">
            Professional Film Funding Hub
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Comprehensive funding resources, expert guidance, and direct access to investors
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-6 gap-2 sm:gap-4 px-2 sm:px-0">
          <Badge className="bg-primary text-black px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base w-full sm:w-auto text-center">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            ₹500+ Cr Funded
          </Badge>
          <Badge className="bg-black text-primary px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base w-full sm:w-auto text-center">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            1000+ Projects
          </Badge>
          <Badge className="bg-primary text-black px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base w-full sm:w-auto text-center">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            85% Success Rate
          </Badge>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full mt-6 sm:mt-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 h-auto p-1">
            <TabsTrigger value="digital-rights" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-nowrap">Digital Rights</TabsTrigger>
            <TabsTrigger value="sources" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-nowrap">Sources</TabsTrigger>
            <TabsTrigger value="calculator" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-nowrap">Calculator</TabsTrigger>
            <TabsTrigger value="resources" className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-nowrap">Resources</TabsTrigger>
            <TabsTrigger value="overview" className="text-xs sm:text-sm px-1 sm:px-3 py-2 col-span-2 sm:col-span-1 whitespace-nowrap">Overview</TabsTrigger>
          </TabsList>

          {/* Digital Rights Tab */}
          <TabsContent value="digital-rights" className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                <Card className="bg-black border-primary/20">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-primary text-lg sm:text-xl">Digital Rights Management</CardTitle>
                    <CardDescription className="text-gray-300 text-sm sm:text-base">
                      Comprehensive digital rights solutions for your film projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">OTT Platform Rights</h4>
                        <p className="text-xs sm:text-sm text-gray-300">Secure distribution deals with major streaming platforms</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">International Sales</h4>
                        <p className="text-xs sm:text-sm text-gray-300">Global distribution and international market access</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Theatrical Rights</h4>
                        <p className="text-xs sm:text-sm text-gray-300">Cinema chain partnerships and theatrical releases</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Satellite Rights</h4>
                        <p className="text-xs sm:text-sm text-gray-300">Television broadcast rights and satellite partnerships</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 sm:px-6">
                    <Button className="w-full justify-start text-sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Pitch Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Calculator className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Budget Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Training Videos
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3 px-4 sm:px-6">
                    <CardTitle className="text-sm sm:text-base flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      Funding Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">₹2.5 Cr</div>
                      <p className="text-xs text-muted-foreground">Avg. Funding Amount</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">45 Days</div>
                      <p className="text-xs text-muted-foreground">Avg. Processing Time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">85%</div>
                      <p className="text-xs text-muted-foreground">Success Rate</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2">
                <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-primary" />
                      Professional Funding Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { step: 1, title: 'Project Development', desc: 'Script, budget, team assembly' },
                          { step: 2, title: 'Market Research', desc: 'Audience analysis, revenue projections' },
                          { step: 3, title: 'Pitch Preparation', desc: 'Deck creation, financial models' }
                        ].map((item) => (
                          <div key={item.step} className="flex items-start space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-black font-bold text-xs sm:text-sm">{item.step}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { step: 4, title: 'Investor Outreach', desc: 'Targeted approach, networking' },
                          { step: 5, title: 'Due Diligence', desc: 'Legal documentation, contracts' },
                          { step: 6, title: 'Production & Delivery', desc: 'Milestone-based releases' }
                        ].map((item) => (
                          <div key={item.step} className="flex items-start space-x-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-black font-bold text-xs sm:text-sm">{item.step}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-4 sm:px-6">
                    <Button className="w-full justify-start text-sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Pitch Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Calculator className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Budget Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Training Videos
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3 px-4 sm:px-6">
                    <CardTitle className="text-sm sm:text-base flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      Funding Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">₹2.5 Cr</div>
                      <p className="text-xs text-muted-foreground">Avg. Funding Amount</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">45 Days</div>
                      <p className="text-xs text-muted-foreground">Avg. Processing Time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-primary">85%</div>
                      <p className="text-xs text-muted-foreground">Success Rate</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Funding Sources Tab */}
          <TabsContent value="sources" className="mt-4 sm:mt-6">
            <div className="space-y-4 sm:space-y-6">
              {fundingSources.map((source) => (
                <Card key={source.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 space-y-3 sm:space-y-0">
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold">{source.name}</h3>
                          <Badge variant={source.type === 'Government' ? 'default' : 'secondary'} className="self-start sm:self-auto">
                            {source.type}
                          </Badge>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3">{source.description}</p>
                      </div>
                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <div className="text-xl sm:text-2xl font-bold text-primary">{source.maxAmount}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Max Funding</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
                          Requirements
                        </h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          {source.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
                          Timeline
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Timeline:</span>
                            <span className="font-medium">{typeof source.timeline === 'string' ? source.timeline : `${source.timeline.application} - ${source.timeline.decision}`}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary" />
                          Success Rate
                        </h4>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{source.successRate}</div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-1000" 
                              style={{ width: source.successRate }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {source.contactInfo && (
                      <div className="mt-4 sm:mt-6 pt-4 border-t border-border">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span>{source.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <span>{source.contactInfo.phone}</span>
                          </div>
                          {source.contactInfo.website && (
                            <div className="flex items-center space-x-2">
                              <Globe className="h-3 w-3 text-muted-foreground" />
                              <a href={source.contactInfo.website} className="text-primary hover:underline" target="_blank">
                                Visit Website
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-6 pt-4 border-t border-border">
                      <Button className="flex-1 text-sm">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline" className="text-sm">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Download Info
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <Card>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                    Budget Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Total Budget (₹)</label>
                    <Input
                      type="number"
                      placeholder="Enter total budget"
                      value={budgetAmount}
                      onChange={(e) => setBudgetAmount(e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <Button onClick={calculateBudget} className="w-full">
                    Calculate Breakdown
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">₹2,500Cr</div>
                      <div className="text-sm text-muted-foreground">Available Funding</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">68%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Digital Rights Tab */}
          <TabsContent value="digital-rights" className="mt-6">
            <div className="space-y-6">
              {/* Main Digital Rights Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">Digital Rights & Distribution Platform</h3>
                        <Badge variant="default">Premium</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">Comprehensive digital rights management for modern film monetization and distribution strategies.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₹50+ Crores</div>
                      <div className="text-sm text-muted-foreground">Revenue Potential</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Requirements Section */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Shield className="h-4 w-4 mr-2 text-primary" />
                        <h3 className="font-semibold">Requirements</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>Complete chain of title documentation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>All clearances and permissions secured</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>Copyright registration completed</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>Music rights and sync licenses</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>Technical delivery specifications</span>
                        </li>
                      </ul>
                    </div>

                    {/* Details Section */}
                    <div>
                      <div className="flex items-center mb-3">
                        <FileText className="h-4 w-4 mr-2 text-primary" />
                        <h3 className="font-semibold">Details</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Timeline:</span>
                          <span className="font-medium">12-18 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue Share:</span>
                          <span className="font-medium text-primary">75%</span>
                        </div>
                        <Progress value={75} className="mt-2" />
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <h3 className="font-semibold">Contact</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-primary">rights@24crafts.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>+91-11-2338-9876</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="h-3 w-3 text-muted-foreground" />
                          <span className="text-primary hover:underline">Visit Portal</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-6 pt-4 border-t border-border">
                    <Button className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Info
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Rights Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center mb-1">
                          <Tv className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="text-xl font-semibold">OTT Platform Rights</h3>
                          <Badge variant="default">Streaming</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">Exclusive streaming rights for major platforms worldwide.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">₹25 Cr</div>
                        <div className="text-sm text-muted-foreground">Max Revenue</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Target className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Platforms</span>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Netflix: ₹8-25 Cr</li>
                          <li>• Amazon Prime: ₹5-20 Cr</li>
                          <li>• Disney+ Hotstar: ₹3-15 Cr</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Timeline</span>
                        </div>
                        <div className="text-sm">12-16 weeks post-theatrical</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">Mobile & Digital Downloads</h3>
                          <Badge variant="secondary">Downloads</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">Digital downloads and mobile platform distribution.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">₹8 Cr</div>
                        <div className="text-sm text-muted-foreground">Annual Revenue</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Target className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Platforms</span>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• iTunes, Google Play</li>
                          <li>• MX Player, Zee5</li>
                          <li>• YouTube Movies</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Timeline</span>
                        </div>
                        <div className="text-sm">8-12 weeks post-theatrical</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">Satellite & Television Rights</h3>
                          <Badge variant="secondary">Television</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">Satellite and television broadcasting rights.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">₹30 Cr</div>
                        <div className="text-sm text-muted-foreground">Max Revenue</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Target className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Networks</span>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Star Network: ₹5-30 Cr</li>
                          <li>• Sony, Zee TV</li>
                          <li>• Regional channels</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="h-3 w-3 mr-1 text-primary" />
                          <span className="font-semibold">Timeline</span>
                        </div>
                        <div className="text-sm">18+ months post-release</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Pitch Deck Template
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Budget Sheet
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={calculateBudget}>
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Breakdown
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <PieChart className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                    Budget Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-3 sm:space-y-4">
                    {budgetBreakdown.map((item) => (
                      <div key={item.category} className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm">{item.category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="text-xs sm:text-sm font-medium">{item.percentage}</div>
                          <div className="w-16 sm:w-20 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: item.percentage }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Video className="h-4 w-4 mr-2 text-primary" />
                    Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="h-4 w-4 mr-2" />
                    Funding Masterclass
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="h-4 w-4 mr-2" />
                    Pitch Workshop
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Investor Network
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                    Expert Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="font-semibold text-primary mb-1">💡 Pro Tip</p>
                    <p className="text-muted-foreground">Apply to multiple sources simultaneously</p>
                  </div>
                  <div className="p-3 bg-black/10 border border-black/20 rounded-lg">
                    <p className="font-semibold text-black mb-1">📊 Insight</p>
                    <p className="text-muted-foreground">Star cast increases success by 3x</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
