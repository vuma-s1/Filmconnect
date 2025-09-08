'use client';

import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface FilterChipsProps {
  filters: any;
  onRemoveFilter: (filterType: string, value: string) => void;
  onClearAll: () => void;
}

const FilterChips = ({ filters, onRemoveFilter, onClearAll }: FilterChipsProps) => {
  const activeFilters: Array<{ type: string; value: string; label: string }> = [];

  // Collect active filters
  if (filters.keyword) {
    activeFilters.push({ type: 'keyword', value: filters.keyword, label: `Search: "${filters.keyword}"` });
  }
  if (filters.location) {
    activeFilters.push({ type: 'location', value: filters.location, label: `Location: "${filters.location}"` });
  }
  if (filters.languages && filters.languages.length > 0) {
    filters.languages.forEach((lang: string) => {
      activeFilters.push({ type: 'languages', value: lang, label: `Language: ${lang}` });
    });
  }
  if (filters.experienceLevels && filters.experienceLevels.length > 0) {
    filters.experienceLevels.forEach((level: string) => {
      activeFilters.push({ type: 'experienceLevels', value: level, label: `Experience: ${level}` });
    });
  }
  if (filters.castCategories && filters.castCategories.length > 0) {
    filters.castCategories.forEach((category: string) => {
      activeFilters.push({ type: 'castCategories', value: category, label: `Cast: ${category}` });
    });
  }
  if (filters.crewDepartments && filters.crewDepartments.length > 0) {
    filters.crewDepartments.forEach((dept: string) => {
      activeFilters.push({ type: 'crewDepartments', value: dept, label: `Crew: ${dept}` });
    });
  }
  if (filters.availability && filters.availability.length > 0) {
    filters.availability.forEach((status: string) => {
      activeFilters.push({ type: 'availability', value: status, label: `Status: ${status}` });
    });
  }

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="text-xs sm:text-sm text-muted-foreground">Active filters:</span>
      {activeFilters.map((filter, index) => (
        <Badge
          key={`${filter.type}-${filter.value}-${index}`}
          variant="secondary"
          className="flex items-center gap-1 pr-1 text-xs"
        >
          <span className="text-xs truncate max-w-20 sm:max-w-none">{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.type, filter.value)}
            className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5 flex-shrink-0"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      {activeFilters.length > 1 && (
        <button
          onClick={onClearAll}
          className="text-xs text-muted-foreground hover:text-foreground underline"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default FilterChips;
