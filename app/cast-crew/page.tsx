"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import CastCrewFilters from '@/components/features/cast-crew/cast-crew-filters';
import ProfileCard from '@/components/features/cast-crew/profile-card';
import ProfileDetails from '@/components/features/cast-crew/profile-details';
import ProfileCardSkeleton from '@/components/features/cast-crew/profile-card-skeleton';
import FilterChips from '@/components/features/cast-crew/filter-chips';
import { mockCastCrewProfiles } from '@/data/mock-data';
import { CastCrewProfile } from '@/lib/types';
import { 
  ArrowLeft, 
  Users, 
  Filter, 
  Grid, 
  List, 
  Bookmark, 
  Share,
  Star,
  Award,
  Play,
  X,
  Search
} from 'lucide-react';

const CastCrewPage = () => {
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<CastCrewProfile[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<CastCrewProfile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<CastCrewProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [savedProfiles, setSavedProfiles] = useState<string[]>([]);
  const [connectedProfiles, setConnectedProfiles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProfiles(mockCastCrewProfiles);
      setFilteredProfiles(mockCastCrewProfiles);
      setSelectedProfile(mockCastCrewProfiles[0]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Apply comprehensive filtering
  useEffect(() => {
    let filtered = [...profiles];

    // Apply global search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(profile =>
        profile.name.toLowerCase().includes(query) ||
        profile.craft.toLowerCase().includes(query) ||
        profile.bio.toLowerCase().includes(query) ||
        profile.skills.some(skill => skill.toLowerCase().includes(query)) ||
        profile.filmography.some(film => film.title.toLowerCase().includes(query)) ||
        profile.languages.some(lang => lang.toLowerCase().includes(query))
      );
    }

    // Apply keyword filter
    if (filters.keyword) {
      filtered = filtered.filter(profile =>
        profile.name.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        profile.craft.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        profile.bio.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        profile.skills.some(skill => 
          skill.toLowerCase().includes(filters.keyword.toLowerCase())
        ) ||
        profile.filmography.some(film => 
          film.title.toLowerCase().includes(filters.keyword.toLowerCase())
        ) ||
        profile.awards.some(award => 
          award.name.toLowerCase().includes(filters.keyword.toLowerCase())
        )
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(profile =>
        profile.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(profile => profile.category === filters.category);
    }

    // Apply language filter
    if (filters.languages && filters.languages.length > 0) {
      filtered = filtered.filter(profile =>
        filters.languages.some((lang: string) => profile.languages.includes(lang))
      );
    }

    // Apply experience level filter
    if (filters.experienceLevels && filters.experienceLevels.length > 0) {
      filtered = filtered.filter(profile =>
        filters.experienceLevels.some((level: string) => 
          profile.experienceLevel === level.split(' ')[0]
        )
      );
    }

    // Apply cast category filter
    if (filters.castCategories && filters.castCategories.length > 0) {
      filtered = filtered.filter(profile =>
        profile.category === 'Cast' && 
        filters.castCategories.includes(profile.subcategory)
      );
    }

    // Apply crew department filter
    if (filters.crewDepartments && filters.crewDepartments.length > 0) {
      filtered = filtered.filter(profile =>
        profile.category === 'Crew' && 
        filters.crewDepartments.includes(profile.subcategory)
      );
    }

    // Apply availability filter
    if (filters.availability && filters.availability.length > 0) {
      filtered = filtered.filter(profile =>
        filters.availability.includes(profile.availabilityStatus)
      );
    }

    setFilteredProfiles(filtered);
    if (filtered.length > 0 && (!selectedProfile || !filtered.includes(selectedProfile))) {
      setSelectedProfile(filtered[0]);
    } else if (filtered.length === 0) {
      setSelectedProfile(null);
    }
  }, [filters, profiles, selectedProfile, searchQuery]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProfiles];
    
    switch (value) {
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'experience':
        sorted.sort((a, b) => {
          const expA = parseInt(a.experience.replace(/\D/g, '')) || 0;
          const expB = parseInt(b.experience.replace(/\D/g, '')) || 0;
          return expB - expA;
        });
        break;
      case 'recent':
        sorted.sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());
        break;
      case 'views':
        sorted.sort((a, b) => b.profileViews - a.profileViews);
        break;
      default:
        // Keep original order for relevance
        break;
    }
    
    setFilteredProfiles(sorted);
  };

  const handleSaveProfile = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    const isCurrentlySaved = savedProfiles.includes(profileId);
    
    setSavedProfiles(prev => 
      prev.includes(profileId) 
        ? prev.filter(id => id !== profileId)
        : [...prev, profileId]
    );

    toast({
      title: isCurrentlySaved ? "Profile Removed" : "Profile Saved",
      description: isCurrentlySaved 
        ? `${profile?.name} removed from saved profiles` 
        : `${profile?.name} added to saved profiles`,
      variant: "success",
    });
  };

  const handleConnectProfile = (message: string, projectType: string) => {
    // Handle connection request
    console.log('Connection request sent:', { message, projectType });
    
    toast({
      title: "Connection Request Sent",
      description: `Your connection request has been sent successfully for ${projectType} project`,
      variant: "success",
    });
  };

  const handleMessageProfile = (subject: string, message: string, priority: string) => {
    // Handle message sending
    console.log('Message sent:', { subject, message, priority });
    
    toast({
      title: "Message Sent",
      description: `Your ${priority} priority message "${subject}" has been sent successfully`,
      variant: "success",
    });
  };

  const handleHireProfile = (projectDetails: any) => {
    // Handle hiring proposal
    console.log('Hiring proposal sent:', projectDetails);
    
    toast({
      title: "Hiring Proposal Sent",
      description: `Your proposal for "${projectDetails.projectName}" has been sent to ${projectDetails.profileName}`,
      variant: "success",
    });
  };

  const handleShareProfile = (profile: CastCrewProfile) => {
    if (navigator.share) {
      navigator.share({
        title: `${profile.name} - ${profile.craft}`,
        text: `Check out ${profile.name}'s profile on 24 Crafts`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleRemoveFilter = (filterType: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'keyword' || filterType === 'location') {
        newFilters[filterType] = '';
      } else if (Array.isArray(newFilters[filterType])) {
        newFilters[filterType] = newFilters[filterType].filter((item: string) => item !== value);
      }
      
      return newFilters;
    });
  };

  const handleClearAllFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const castProfiles = filteredProfiles.filter(p => p.category === 'Cast');
  const crewProfiles = filteredProfiles.filter(p => p.category === 'Crew');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Cast & Crew Directory</h1>
          <p className="text-muted-foreground mb-4">
            Discover {profiles.length}+ film industry professionals. 
            {savedProfiles.length > 0 && ` You have ${savedProfiles.length} saved profiles.`}
          </p>
          
          {/* Global Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search professionals, skills, films..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Header with Filter Button */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-semibold text-lg">
                {filteredProfiles.length} Professionals
              </h2>
              <p className="text-sm text-muted-foreground">
                Tap to view details
              </p>
            </div>
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CastCrewFilters onFiltersChange={setFilters} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Filters Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:col-span-3">
            <CastCrewFilters onFiltersChange={setFilters} />
          </div>

          {/* Profiles List */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {/* Desktop Header */}
              <div className="hidden lg:flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <h2 className="font-semibold">
                    {filteredProfiles.length} Professionals Found
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
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
                      <SelectItem value="rating">Highest Rating</SelectItem>
                      <SelectItem value="experience">Most Experience</SelectItem>
                      <SelectItem value="recent">Recently Joined</SelectItem>
                      <SelectItem value="views">Most Viewed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="lg:hidden flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-1">
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="h-8 w-8 p-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                </div>
                
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-28 h-8 text-xs">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="views">Most Viewed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filter Chips */}
              <FilterChips 
                filters={filters} 
                onRemoveFilter={handleRemoveFilter}
                onClearAll={handleClearAllFilters}
              />

              {/* Category Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 h-9">
                  <TabsTrigger value="all" className="text-xs text-center leading-none flex items-center justify-center -mt-0.5">All ({filteredProfiles.length})</TabsTrigger>
                  <TabsTrigger value="cast" className="text-xs text-center leading-none flex items-center justify-center -mt-0.5">Cast ({castProfiles.length})</TabsTrigger>
                  <TabsTrigger value="crew" className="text-xs text-center leading-none flex items-center justify-center -mt-0.5">Crew ({crewProfiles.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  {isLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                      <ProfileCardSkeleton key={i} />
                    ))
                  ) : filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onClick={() => {
                          setSelectedProfile(profile);
                          // On mobile, also open the profile details sheet
                          if (window.innerWidth < 1024) {
                            setShowProfileDetails(true);
                          }
                        }}
                        isSelected={selectedProfile?.id === profile.id}
                        isSaved={savedProfiles.includes(profile.id)}
                        isConnected={connectedProfiles.includes(profile.id)}
                        onSave={() => handleSaveProfile(profile.id)}
                        onConnect={handleConnectProfile}
                        onMessage={handleMessageProfile}
                        onHire={handleHireProfile}
                      />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <div className="text-muted-foreground mb-4">
                          <Users className="h-12 w-12 mx-auto mb-4" />
                          <p className="text-lg mb-2">No professionals found</p>
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
                </TabsContent>

                <TabsContent value="cast" className="mt-4">
                  {castProfiles.length > 0 ? (
                    castProfiles.map((profile) => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onClick={() => {
                          setSelectedProfile(profile);
                          // On mobile, also open the profile details sheet
                          if (window.innerWidth < 1024) {
                            setShowProfileDetails(true);
                          }
                        }}
                        isSelected={selectedProfile?.id === profile.id}
                        isSaved={savedProfiles.includes(profile.id)}
                        isConnected={connectedProfiles.includes(profile.id)}
                        onSave={() => handleSaveProfile(profile.id)}
                        onConnect={handleConnectProfile}
                        onMessage={handleMessageProfile}
                        onHire={handleHireProfile}
                      />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <div className="text-muted-foreground mb-4">
                          <Users className="h-12 w-12 mx-auto mb-4" />
                          <p className="text-lg mb-2">No cast members found</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="crew" className="mt-4">
                  {crewProfiles.length > 0 ? (
                    crewProfiles.map((profile) => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onClick={() => {
                          setSelectedProfile(profile);
                          // On mobile, also open the profile details sheet
                          if (window.innerWidth < 1024) {
                            setShowProfileDetails(true);
                          }
                        }}
                        isSelected={selectedProfile?.id === profile.id}
                        isSaved={savedProfiles.includes(profile.id)}
                        isConnected={connectedProfiles.includes(profile.id)}
                        onSave={() => handleSaveProfile(profile.id)}
                        onConnect={handleConnectProfile}
                        onMessage={handleMessageProfile}
                        onHire={handleHireProfile}
                      />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <div className="text-muted-foreground mb-4">
                          <Users className="h-12 w-12 mx-auto mb-4" />
                          <p className="text-lg mb-2">No crew members found</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Profile Details - Desktop */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-20">
              {selectedProfile ? (
                <ProfileDetails
                  profile={selectedProfile}
                  isSaved={savedProfiles.includes(selectedProfile.id)}
                  isConnected={connectedProfiles.includes(selectedProfile.id)}
                  onSave={() => handleSaveProfile(selectedProfile.id)}
                  onConnect={handleConnectProfile}
                  onMessage={handleMessageProfile}
                  onHire={handleHireProfile}
                />
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Select a professional to view details
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Mobile Profile Details Sheet */}
          <Sheet open={showProfileDetails} onOpenChange={setShowProfileDetails}>
            <SheetContent side="right" className="w-full sm:w-96 p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Profile Details</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowProfileDetails(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
                {selectedProfile && (
                  <ProfileDetails
                    profile={selectedProfile}
                    isSaved={savedProfiles.includes(selectedProfile.id)}
                    isConnected={connectedProfiles.includes(selectedProfile.id)}
                    onSave={() => handleSaveProfile(selectedProfile.id)}
                    onConnect={handleConnectProfile}
                    onMessage={handleMessageProfile}
                    onHire={handleHireProfile}
                  />
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default CastCrewPage;
