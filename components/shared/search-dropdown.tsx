"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Users, 
  Briefcase, 
  Building, 
  FileText,
  MapPin,
  Star,
  Clock,
  Filter
} from 'lucide-react';
import { mockUsers, mockJobs } from '@/data/mock-data';
import Link from 'next/link';

export function SearchDropdown() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'people' | 'jobs' | 'companies' | 'content'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter data based on query and active tab
  const filteredResults = () => {
    if (!query.trim()) return { people: [], jobs: [], companies: [], content: [] };

    const searchTerm = query.toLowerCase();
    
    const people = mockUsers.filter(user => 
      user.name.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm) ||
      user.location.toLowerCase().includes(searchTerm) ||
      user.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    ).slice(0, 5);

    const jobs = mockJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.productionHouse.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm))
    ).slice(0, 5);

    const companies = mockJobs
      .map(job => job.productionHouse)
      .filter((company, index, arr) => arr.indexOf(company) === index)
      .filter(company => company.toLowerCase().includes(searchTerm))
      .slice(0, 3);

    const content = [
      { id: '1', title: 'Film Making Tips', type: 'article', author: 'John Doe' },
      { id: '2', title: 'Cinematography Guide', type: 'article', author: 'Jane Smith' },
      { id: '3', title: 'Directing Workshop', type: 'video', author: 'Mike Johnson' }
    ].filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.author.toLowerCase().includes(searchTerm)
    ).slice(0, 3);

    return { people, jobs, companies, content };
  };

  const results = filteredResults();
  const totalResults = results.people.length + results.jobs.length + results.companies.length + results.content.length;

  const tabs = [
    { id: 'all', label: 'All', icon: Search },
    { id: 'people', label: 'People', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'companies', label: 'Companies', icon: Building },
    { id: 'content', label: 'Content', icon: FileText },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const renderPeopleResults = () => (
    <div className="space-y-2">
      {results.people.map((person) => (
        <DropdownMenuItem key={person.id} asChild>
          <Link href={`/${person.username}`} className="flex items-center space-x-3 p-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={person.profilePictureUrl} />
              <AvatarFallback>
                {person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{person.name}</p>
              <p className="text-xs text-muted-foreground truncate">{person.role}</p>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{person.location}</span>
              </div>
            </div>
            {person.isVerified && (
              <Star className="h-4 w-4 text-blue-500" />
            )}
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );

  const renderJobResults = () => (
    <div className="space-y-2">
      {results.jobs.map((job) => (
        <DropdownMenuItem key={job.id} asChild>
          <Link href={`/jobs/${job.id}`} className="flex items-start space-x-3 p-2">
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{job.title}</p>
              <p className="text-xs text-muted-foreground truncate">{job.productionHouse}</p>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{job.location}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{job.jobType}</span>
              </div>
            </div>
            {job.isUrgent && (
              <Badge variant="destructive" className="text-xs">Urgent</Badge>
            )}
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );

  const renderCompanyResults = () => (
    <div className="space-y-2">
      {results.companies.map((company) => (
        <DropdownMenuItem key={company} asChild>
          <Link href={`/company/${company}`} className="flex items-center space-x-3 p-2">
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <Building className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{company}</p>
              <p className="text-xs text-muted-foreground">Production House</p>
            </div>
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );

  const renderContentResults = () => (
    <div className="space-y-2">
      {results.content.map((item) => (
        <DropdownMenuItem key={item.id} asChild>
          <Link href={`/content/${item.id}`} className="flex items-center space-x-3 p-2">
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground truncate">by {item.author}</p>
              <Badge variant="outline" className="text-xs mt-1">{item.type}</Badge>
            </div>
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-md" ref={inputRef}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search films, people, companies..."
              value={query}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="pl-10 pr-10"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <Filter className="h-3 w-3" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        
        {isOpen && query.trim() && (
          <DropdownMenuContent align="start" className="w-96 p-0">
            <div className="p-3 border-b">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Search Results</span>
                <span className="text-xs text-muted-foreground">{totalResults} results</span>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "primary" : "ghost"}
                      size="sm"
                      className="h-7 px-2 text-xs"
                      onClick={() => setActiveTab(tab.id as any)}
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto p-3">
              {activeTab === 'all' && (
                <div className="space-y-4">
                  {results.people.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">People</h4>
                      {renderPeopleResults()}
                    </div>
                  )}
                  {results.jobs.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">Jobs</h4>
                      {renderJobResults()}
                    </div>
                  )}
                  {results.companies.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">Companies</h4>
                      {renderCompanyResults()}
                    </div>
                  )}
                  {results.content.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">Content</h4>
                      {renderContentResults()}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'people' && renderPeopleResults()}
              {activeTab === 'jobs' && renderJobResults()}
              {activeTab === 'companies' && renderCompanyResults()}
              {activeTab === 'content' && renderContentResults()}
              
              {totalResults === 0 && (
                <div className="text-center py-8">
                  <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                </div>
              )}
            </div>
            
            {totalResults > 0 && (
              <div className="p-3 border-t">
                <Button variant="outline" className="w-full text-sm">
                  View all results for "{query}"
                </Button>
              </div>
            )}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
