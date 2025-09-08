"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Search, Users, Wrench } from 'lucide-react';
import { castCategories, crewDepartments, languages, experienceLevels } from '@/data/mock-data';

interface CastCrewFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const CastCrewFilters = ({ onFiltersChange }: CastCrewFiltersProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Cast' | 'Crew'>('All');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedCastCategories, setSelectedCastCategories] = useState<string[]>([]);
  const [selectedCrewDepartments, setSelectedCrewDepartments] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  const availabilityOptions = ['Available', 'Busy', 'On Project', 'Not Available'];

  const handleLanguageToggle = (language: string) => {
    const updated = selectedLanguages.includes(language)
      ? selectedLanguages.filter(lang => lang !== language)
      : [...selectedLanguages, language];
    setSelectedLanguages(updated);
    applyFilters({ languages: updated });
  };

  const handleExperienceToggle = (level: string) => {
    const updated = selectedExperienceLevels.includes(level)
      ? selectedExperienceLevels.filter(exp => exp !== level)
      : [...selectedExperienceLevels, level];
    setSelectedExperienceLevels(updated);
    applyFilters({ experienceLevels: updated });
  };

  const handleCastCategoryToggle = (category: string) => {
    const updated = selectedCastCategories.includes(category)
      ? selectedCastCategories.filter(cat => cat !== category)
      : [...selectedCastCategories, category];
    setSelectedCastCategories(updated);
    applyFilters({ castCategories: updated });
  };

  const handleCrewDepartmentToggle = (department: string) => {
    const updated = selectedCrewDepartments.includes(department)
      ? selectedCrewDepartments.filter(dept => dept !== department)
      : [...selectedCrewDepartments, department];
    setSelectedCrewDepartments(updated);
    applyFilters({ crewDepartments: updated });
  };

  const handleAvailabilityToggle = (status: string) => {
    const updated = selectedAvailability.includes(status)
      ? selectedAvailability.filter(avail => avail !== status)
      : [...selectedAvailability, status];
    setSelectedAvailability(updated);
    applyFilters({ availability: updated });
  };

  const applyFilters = (partialFilters = {}) => {
    const filters = {
      keyword,
      location,
      category: selectedCategory,
      languages: selectedLanguages,
      experienceLevels: selectedExperienceLevels,
      castCategories: selectedCastCategories,
      crewDepartments: selectedCrewDepartments,
      availability: selectedAvailability,
      ...partialFilters
    };
    onFiltersChange(filters);
  };

  const clearAllFilters = () => {
    setKeyword('');
    setLocation('');
    setSelectedCategory('All');
    setSelectedLanguages([]);
    setSelectedExperienceLevels([]);
    setSelectedCastCategories([]);
    setSelectedCrewDepartments([]);
    setSelectedAvailability([]);
    onFiltersChange({
      keyword: '',
      location: '',
      category: 'All',
      languages: [],
      experienceLevels: [],
      castCategories: [],
      crewDepartments: [],
      availability: []
    });
  };

  const hasActiveFilters = keyword || location || selectedCategory !== 'All' || 
    selectedLanguages.length > 0 || selectedExperienceLevels.length > 0 || 
    selectedCastCategories.length > 0 || selectedCrewDepartments.length > 0 || 
    selectedAvailability.length > 0;

  return (
    <Card className="h-fit sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-primary" />
            Cast & Crew Filters
          </CardTitle>
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
          <label className="text-sm font-medium mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Name, craft, film, awards..."
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

        {/* Category Toggle */}
        <div>
          <label className="text-sm font-medium mb-3 block">Category</label>
          <div className="grid grid-cols-3 gap-2">
            {['All', 'Cast', 'Crew'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category as 'All' | 'Cast' | 'Crew');
                  applyFilters({ category: category as 'All' | 'Cast' | 'Crew' });
                }}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Languages */}
        <div>
          <label className="text-sm font-medium mb-3 block">Languages</label>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <Badge
                key={language}
                variant={selectedLanguages.includes(language) ? 'secondary' : 'outline'}
                className="cursor-pointer hover:bg-primary hover:text-black transition-colors"
                onClick={() => handleLanguageToggle(language)}
              >
                {language}
                {selectedLanguages.includes(language) && (
                  <X className="h-3 w-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Experience Level */}
        <div>
          <label className="text-sm font-medium mb-3 block">Experience Level</label>
          <div className="space-y-2">
            {experienceLevels.map((level) => (
              <label key={level} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedExperienceLevels.includes(level)}
                  onChange={() => handleExperienceToggle(level)}
                  className="rounded border-border"
                />
                <span className="text-sm">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <Separator />

        {/* Cast Categories */}
        {selectedCategory === 'All' || selectedCategory === 'Cast' ? (
          <div>
            <label className="text-sm font-medium mb-3 block">Cast Categories</label>
            <div className="space-y-2">
              {castCategories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCastCategories.includes(category)}
                    onChange={() => handleCastCategoryToggle(category)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
        ) : null}

        {/* Crew Departments */}
        {selectedCategory === 'All' || selectedCategory === 'Crew' ? (
          <div>
            <label className="text-sm font-medium mb-3 block">Crew Departments</label>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {crewDepartments.map((department) => (
                <label key={department} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCrewDepartments.includes(department)}
                    onChange={() => handleCrewDepartmentToggle(department)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">{department}</span>
                </label>
              ))}
            </div>
          </div>
        ) : null}

        <Separator />

        {/* Availability */}
        <div>
          <label className="text-sm font-medium mb-3 block">Availability</label>
          <div className="space-y-2">
            {availabilityOptions.map((status) => (
              <label key={status} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedAvailability.includes(status)}
                  onChange={() => handleAvailabilityToggle(status)}
                  className="rounded border-border"
                />
                <span className="text-sm">{status}</span>
              </label>
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
                    <span className="text-muted-foreground">Search:</span>
                    <Badge variant="secondary">{keyword}</Badge>
                  </div>
                )}
                {location && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <Badge variant="secondary">{location}</Badge>
                  </div>
                )}
                {selectedCategory !== 'All' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="secondary">{selectedCategory}</Badge>
                  </div>
                )}
                {selectedLanguages.length > 0 && (
                  <div className="text-sm">
                    <span className="text-muted-foreground mb-1 block">Languages:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedLanguages.map(lang => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {selectedExperienceLevels.length > 0 && (
                  <div className="text-sm">
                    <span className="text-muted-foreground mb-1 block">Experience:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedExperienceLevels.map(level => (
                        <Badge key={level} variant="secondary" className="text-xs">
                          {level.split(' ')[0]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {selectedAvailability.length > 0 && (
                  <div className="text-sm">
                    <span className="text-muted-foreground mb-1 block">Availability:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedAvailability.map(status => (
                        <Badge key={status} variant="secondary" className="text-xs">
                          {status}
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

export default CastCrewFilters;
