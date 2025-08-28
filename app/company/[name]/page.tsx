"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Building, 
  MapPin, 
  Users, 
  Briefcase, 
  Globe, 
  Mail, 
  Phone,
  Star,
  Calendar,
  TrendingUp,
  Award,
  CheckCircle,
  ExternalLink,
  UserPlus,
  MessageCircle
} from 'lucide-react';
import { mockJobs, mockUsers } from '@/data/mock-data';
import Link from 'next/link';

interface CompanyPageProps {
  params: {
    name: string;
  };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const [company, setCompany] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const companyJobs = mockJobs.filter(job => 
        job.productionHouse.toLowerCase().includes(params.name.toLowerCase())
      );
      
      if (companyJobs.length > 0) {
        const companyData = {
          name: companyJobs[0].productionHouse,
          location: companyJobs[0].location,
          description: `${companyJobs[0].productionHouse} is a leading production house in the Indian film industry, known for producing high-quality commercial and art films. We specialize in action, drama, and comedy genres with a focus on storytelling excellence.`,
          founded: '2010',
          employeeCount: '150-500',
          industry: 'Film Production',
          website: 'https://example.com',
          email: 'contact@example.com',
          phone: '+91 98765 43210',
          rating: 4.5,
          reviews: 127,
          followers: 2847,
          jobs: companyJobs,
          employees: mockUsers.slice(0, 8),
          recentActivity: [
            { type: 'job', title: 'New job posted: Cinematographer', time: '2 hours ago' },
            { type: 'post', title: 'Celebrating our latest film success', time: '1 day ago' },
            { type: 'award', title: 'Won Best Production House Award', time: '1 week ago' }
          ]
        };
        setCompany(companyData);
      }
      setIsLoading(false);
    }, 1000);
  }, [params.name]);

  if (isLoading) {
    return <CompanySkeleton />;
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Company Not Found</h2>
          <p className="text-muted-foreground">The company you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="h-24 w-24 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="h-12 w-12 text-primary" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-black" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{company.name}</h1>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                                             <div className="flex items-center space-x-1">
                         <Users className="h-4 w-4" />
                         <span>{company.employeeCount} employees</span>
                       </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{company.rating} ({company.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{company.industry}</Badge>
                      <Badge variant="outline">Verified</Badge>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    <Button
                      onClick={() => setIsFollowing(!isFollowing)}
                      variant={isFollowing ? "secondary" : "primary"}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{company.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="jobs">Jobs ({company.jobs.length})</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {company.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {company.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">{company.founded}</div>
                        <div className="text-sm text-muted-foreground">Founded</div>
                      </div>
                                             <div className="text-center p-4 border rounded-lg">
                         <div className="text-2xl font-bold text-primary">{company.employeeCount}</div>
                         <div className="text-sm text-muted-foreground">Employees</div>
                       </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">{company.followers}</div>
                        <div className="text-sm text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-primary">{company.jobs.length}</div>
                        <div className="text-sm text-muted-foreground">Open Jobs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Website</p>
                          <a href={company.website} className="text-primary hover:underline">
                            {company.website}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                            {company.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href={`tel:${company.phone}`} className="text-primary hover:underline">
                            {company.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">{company.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <div className="space-y-4">
                  {company.jobs.map((job: any) => (
                    <Card key={job.id} className="hover:bg-card/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">{job.productionHouse}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{job.jobType}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{job.applications} applicants</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                              {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">{job.roleRequired}</Badge>
                              {job.salary && (
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  {job.salary}
                                </Badge>
                              )}
                              {job.isUrgent && (
                                <Badge variant="destructive">Urgent</Badge>
                              )}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="people" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Employees at {company.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {company.employees.map((employee: any) => (
                        <div key={employee.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={employee.profilePictureUrl} />
                            <AvatarFallback>
                              {employee.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <Link href={`/${employee.username}`} className="block">
                              <h4 className="font-medium hover:text-primary transition-colors truncate">
                                {employee.name}
                              </h4>
                            </Link>
                            <p className="text-sm text-muted-foreground truncate">{employee.role}</p>
                            <p className="text-xs text-muted-foreground truncate">{employee.location}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {company.recentActivity.map((activity: any, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Company Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Reviews</span>
                  <span className="font-medium">{company.reviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Followers</span>
                  <span className="font-medium">{company.followers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Open Positions</span>
                  <span className="font-medium">{company.jobs.length}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase className="h-4 w-4 mr-2" />
                  View All Jobs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  See All Employees
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Company
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const CompanySkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex items-center space-x-8">
            <Skeleton className="h-24 w-24 rounded-lg" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);
