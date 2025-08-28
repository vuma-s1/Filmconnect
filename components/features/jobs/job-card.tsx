"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { JobPosting } from '@/lib/types';
import { MapPin, Clock, Users, Bookmark, ExternalLink, Share } from 'lucide-react';

interface JobCardProps {
  job: JobPosting;
  onClick: () => void;
  isSelected?: boolean;
  isSaved?: boolean;
  isApplied?: boolean;
  onSave: () => void;
  onApply: () => void;
  onShare: () => void;
}

const JobCard = ({ job, onClick, isSelected, isSaved = false, isApplied = false, onSave, onApply, onShare }: JobCardProps) => {

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave();
  };

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation();
    onApply();
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare();
  };

  return (
    <Card 
      className={`hover:bg-card/50 transition-colors cursor-pointer ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-primary font-medium mb-1">{job.productionHouse}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatTimeAgo(job.postedDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{job.applications} applicants</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSave}
            className={isSaved ? 'text-primary' : 'text-muted-foreground'}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{job.jobType}</Badge>
          <Badge variant="outline">{job.roleRequired}</Badge>
          {job.salary && (
            <Badge variant="outline" className="text-green-600 border-green-600">
              {job.salary}
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {job.requiredSkills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="skill" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.requiredSkills.length > 4 && (
            <Badge variant="skill" className="text-xs">
              +{job.requiredSkills.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex space-x-2">
          <Button 
            className="flex-1"
            onClick={handleApply}
            disabled={isApplied}
          >
            {isApplied ? 'Applied' : 'Apply Now'}
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleShare}
          >
            <Share className="h-4 w-4" />
          </Button>
        </div>

        {/* Job Status Indicators */}
        <div className="flex items-center justify-between mt-2">
          {isApplied && (
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-500">
              Applied
            </Badge>
          )}
          {isSaved && (
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
              Saved
            </Badge>
          )}
          {job.isUrgent && (
            <Badge variant="destructive" className="text-xs">
              Urgent
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;