"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, Search } from 'lucide-react';

interface JobFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const JobFilters = ({ onFiltersChange }: JobFiltersProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const jobTypes = ['Full-time', 'Freelance', 'Short Film', 'Contract'];
  const popularSkills = [
    'Acting', 'Directing', 'Cinematography', 'Editing', 'Writing',
    'VFX', 'Sound Design', 'Music', 'Casting', 'Production'
  ];

  const handleJobTypeToggle = (jobType: string) => {
    const updated = selectedJobTypes.includes(jobType)
      ? selectedJobTypes.filter(type => type !== jobType)
      : [...selectedJobTypes, jobType];
    setSelectedJobTypes(updated);
    applyFilters({ jobTypes: updated });
  };

  const handleSkillToggle = (skill: string) => {
    const updated = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    setSelectedSkills(updated);
    applyFilters({ skills: updated });
  };

  const applyFilters = (partialFilters = {}) => {
    const filters = {
      keyword,
      location,
      jobTypes: selectedJobTypes,
      skills: selectedSkills,
      ...partialFilters
    };
    onFiltersChange(filters);
  };

  const clearAllFilters = () => {
    setKeyword('');
    setLocation('');
    setSelectedJobTypes([]);
    setSelectedSkills([]);
    onFiltersChange({
      keyword: '',
      location: '',
      jobTypes: [],
      skills: []
    });
  };

  const hasActiveFilters = keyword || location || selectedJobTypes.length > 0 || selectedSkills.length > 0;

  return (
    <Card className="h-fit sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Keywords */}
        <div>
          <label className="text-sm font-medium mb-2 block">Keywords</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Job title, company..."
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                applyFilters({ keyword: e.target.value });
              }}
              className="pl-10"
            />
          </div>
        </div>

        <Separator />

        {/* Location */}
        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <Input
            placeholder="City, state, or country"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              applyFilters({ location: e.target.value });
            }}
          />
        </div>

        <Separator />

        {/* Job Type */}
        <div>
          <label className="text-sm font-medium mb-3 block">Job Type</label>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedJobTypes.includes(type)}
                  onChange={() => handleJobTypeToggle(type)}
                  className="rounded border-border"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <Separator />

        {/* Skills */}
        <div>
          <label className="text-sm font-medium mb-3 block">Skills</label>
          <div className="flex flex-wrap gap-2">
            {popularSkills.map((skill) => (
              <Badge
                key={skill}
                                    variant={selectedSkills.includes(skill) ? 'secondary' : 'outline'}
                className="cursor-pointer hover:bg-primary hover:text-black transition-colors"
                onClick={() => handleSkillToggle(skill)}
              >
                {skill}
                {selectedSkills.includes(skill) && (
                  <X className="h-3 w-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <>
            <Separator />
            <div>
              <label className="text-sm font-medium mb-2 block">Active Filters</label>
              <div className="space-y-2">
                {keyword && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Keyword:</span>
                    <Badge variant="secondary">{keyword}</Badge>
                  </div>
                )}
                {location && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <Badge variant="secondary">{location}</Badge>
                  </div>
                )}
                {selectedJobTypes.length > 0 && (
                  <div className="text-sm">
                    <span className="text-muted-foreground mb-1 block">Job Types:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedJobTypes.map(type => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {selectedSkills.length > 0 && (
                  <div className="text-sm">
                    <span className="text-muted-foreground mb-1 block">Skills:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedSkills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default JobFilters;