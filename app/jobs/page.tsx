"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobFilters from '@/components/features/jobs/job-filters';
import JobCard from '@/components/features/jobs/job-card';
import { mockJobs } from '@/data/mock-data';
import { JobPosting } from '@/lib/types';
import { ArrowLeft, MapPin, Clock, Users, Building, ExternalLink, Filter, Grid, List, Bookmark, Share } from 'lucide-react';

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setJobs(mockJobs);
      setFilteredJobs(mockJobs);
      setSelectedJob(mockJobs[0]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Add more comprehensive job filtering
  useEffect(() => {
    let filtered = [...jobs];

    // Apply keyword filter
    if (filters.keyword) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.productionHouse.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.requiredSkills.some(skill => 
          skill.toLowerCase().includes(filters.keyword.toLowerCase())
        )
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply job type filter
    if (filters.jobTypes && filters.jobTypes.length > 0) {
      filtered = filtered.filter(job =>
        filters.jobTypes.includes(job.jobType)
      );
    }

    // Apply skills filter
    if (filters.skills && filters.skills.length > 0) {
      filtered = filtered.filter(job =>
        filters.skills.some((skill: string) =>
          job.requiredSkills.some(jobSkill =>
            jobSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      );
    }

    setFilteredJobs(filtered);
    if (filtered.length > 0 && !filtered.includes(selectedJob!)) {
      setSelectedJob(filtered[0]);
    } else if (filtered.length === 0) {
      setSelectedJob(null);
    }
  }, [filters, jobs, selectedJob]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredJobs];
    
    switch (value) {
      case 'newest':
        sorted.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
        break;
      case 'salary':
        sorted.sort((a, b) => {
          const salaryA = a.salary ? parseInt(a.salary.replace(/[^\d]/g, '')) : 0;
          const salaryB = b.salary ? parseInt(b.salary.replace(/[^\d]/g, '')) : 0;
          return salaryB - salaryA;
        });
        break;
      case 'applications':
        sorted.sort((a, b) => a.applications - b.applications);
        break;
      default:
        // Keep original order for relevance
        break;
    }
    
    setFilteredJobs(sorted);
  };

  const handleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const handleApplyJob = (jobId: string) => {
    setAppliedJobs(prev => [...prev, jobId]);
  };

  const handleShareJob = (job: JobPosting) => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this ${job.roleRequired} position at ${job.productionHouse}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground">
            Discover {jobs.length}+ film industry jobs from top production houses. 
            {savedJobs.length > 0 && ` You have ${savedJobs.length} saved jobs.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-3">
            <JobFilters onFiltersChange={setFilters} />
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <h2 className="font-semibold">
                    {filteredJobs.length} Jobs Found
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'list' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'grid' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="salary">Highest Salary</SelectItem>
                      <SelectItem value="applications">Fewest Applications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-4" />
                      <Skeleton className="h-16 w-full mb-4" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => setSelectedJob(job)}
                    isSelected={selectedJob?.id === job.id}
                    isSaved={savedJobs.includes(job.id)}
                    isApplied={appliedJobs.includes(job.id)}
                    onSave={() => handleSaveJob(job.id)}
                    onApply={() => handleApplyJob(job.id)}
                    onShare={() => handleShareJob(job)}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <div className="text-muted-foreground mb-4">
                      <Building className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg mb-2">No jobs found</p>
                      <p className="text-sm">
                        Try adjusting your filters to see more results
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setFilters({})}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              {selectedJob ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{selectedJob.title}</CardTitle>
                        <p className="text-primary font-medium text-lg">{selectedJob.productionHouse}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="lg:hidden">
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Job Meta */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{formatTimeAgo(selectedJob.postedDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{selectedJob.applications} applicants</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{selectedJob.jobType}</span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{selectedJob.jobType}</Badge>
                      <Badge variant="outline">{selectedJob.roleRequired}</Badge>
                      {selectedJob.salary && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {selectedJob.salary}
                        </Badge>
                      )}
                    </div>

                    <Separator />

                    {/* Application Status */}
                    {appliedJobs.includes(selectedJob.id) && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-green-500">Application Submitted</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your application was submitted successfully. The hiring team will review it within 3-5 business days.
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <div>
                      <h3 className="font-semibold mb-3">Job Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="font-semibold mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <h3 className="font-semibold mb-3">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.requiredSkills.map((skill) => (
                          <Badge key={skill} variant="skill">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1"
                        disabled={appliedJobs.includes(selectedJob.id)}
                        onClick={() => handleApplyJob(selectedJob.id)}
                      >
                        {appliedJobs.includes(selectedJob.id) ? 'Applied' : 'Apply for This Job'}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleSaveJob(selectedJob.id)}
                        className={savedJobs.includes(selectedJob.id) ? 'text-primary border-primary' : ''}
                      >
                        <Bookmark className={`h-4 w-4 mr-2 ${savedJobs.includes(selectedJob.id) ? 'fill-current' : ''}`} />
                        {savedJobs.includes(selectedJob.id) ? 'Saved' : 'Save'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleShareJob(selectedJob)}
                      >
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Similar Jobs */}
                    <div>
                      <h3 className="font-semibold mb-3">Similar Jobs</h3>
                      <div className="space-y-2">
                        {jobs.filter(job => 
                          job.id !== selectedJob.id && 
                          job.roleRequired === selectedJob.roleRequired
                        ).slice(0, 3).map((job) => (
                          <div 
                            key={job.id}
                            className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                          >
                            <h4 className="font-medium text-sm">{job.title}</h4>
                            <p className="text-xs text-muted-foreground">{job.productionHouse}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-primary">{job.salary}</span>
                              <span className="text-xs text-muted-foreground">{job.location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2">About {selectedJob.productionHouse}</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedJob.productionHouse} is a leading production house in the Indian film industry, 
                        known for high-quality films and maintaining a professional work environment. 
                        We've produced over 50 successful films and are committed to nurturing talent 
                        while creating compelling stories that resonate with audiences worldwide.
                      </p>
                      <div className="flex items-center space-x-4 mt-3 text-sm text-muted-foreground">
                        <span>Founded: {selectedJob.productionHouse === 'Mythri Movie Makers' ? '2015' : '2010'}</span>
                        <span>Employees: {selectedJob.productionHouse === 'T-Series' ? '1000+' : '500+'}</span>
                        <span>Films: {selectedJob.productionHouse === 'T-Series' ? '200+' : '50+'}</span>
                      </div>
                      
                      {/* Recent Projects */}
                      <div className="mt-4">
                        <h5 className="font-medium text-sm mb-2">Recent Projects</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedJob.productionHouse === 'Mythri Movie Makers' && (
                            <>
                              <Badge variant="outline" className="text-xs">Pushpa 2</Badge>
                              <Badge variant="outline" className="text-xs">Sarkaru Vaari Paata</Badge>
                              <Badge variant="outline" className="text-xs">Rangasthalam</Badge>
                            </>
                          )}
                          {selectedJob.productionHouse === 'T-Series' && (
                            <>
                              <Badge variant="outline" className="text-xs">Bhool Bhulaiyaa 3</Badge>
                              <Badge variant="outline" className="text-xs">Satyaprem Ki Katha</Badge>
                              <Badge variant="outline" className="text-xs">Shehzada</Badge>
                            </>
                          )}
                          {selectedJob.productionHouse === 'Dharma Productions' && (
                            <>
                              <Badge variant="outline" className="text-xs">Rocky Aur Rani</Badge>
                              <Badge variant="outline" className="text-xs">Brahmāstra</Badge>
                              <Badge variant="outline" className="text-xs">Shershaah</Badge>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Application Process */}
                      <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                        <h5 className="font-medium text-sm mb-2 text-primary">Application Process</h5>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <p>1. Submit your application with portfolio</p>
                          <p>2. Initial screening within 3-5 days</p>
                          <p>3. Technical/Creative assessment</p>
                          <p>4. Final interview with department heads</p>
                          <p>5. Reference checks and offer</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Select a job to view details
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;