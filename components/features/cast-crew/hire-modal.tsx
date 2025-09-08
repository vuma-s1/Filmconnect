'use client';

import { useState } from 'react';
import { CastCrewProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Briefcase, Calendar, DollarSign } from 'lucide-react';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CastCrewProfile | null;
  onHire: (projectDetails: any) => void;
}

export default function HireModal({ isOpen, onClose, profile, onHire }: HireModalProps) {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleHire = async () => {
    if (!projectName.trim() || !projectType || !budget || !startDate || !description.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const projectDetails = {
      projectName,
      projectType,
      budget,
      startDate,
      duration,
      location,
      description,
      profileId: profile?.id,
      profileName: profile?.name
    };
    
    onHire(projectDetails);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Close modal after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setProjectName('');
      setProjectType('');
      setBudget('');
      setStartDate('');
      setDuration('');
      setLocation('');
      setDescription('');
      onClose();
    }, 3000);
  };

  if (!profile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5" />
            <span>Hire {profile.name}</span>
          </DialogTitle>
          <DialogDescription>
            Send a professional hiring proposal to {profile.name}. Include all project details for better response.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-700 mb-2">Hiring Proposal Sent!</h3>
            <p className="text-sm text-muted-foreground">
              {profile.name} will review your proposal and get back to you soon.
            </p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name *</Label>
                <Input
                  id="project-name"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type *</Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature-film">Feature Film</SelectItem>
                    <SelectItem value="short-film">Short Film</SelectItem>
                    <SelectItem value="web-series">Web Series</SelectItem>
                    <SelectItem value="documentary">Documentary</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="music-video">Music Video</SelectItem>
                    <SelectItem value="corporate-video">Corporate Video</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget *</Label>
                <Input
                  id="budget"
                  placeholder="e.g., ₹50,000 - ₹1,00,000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date *</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-day">1 Day</SelectItem>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="2-months">2 Months</SelectItem>
                    <SelectItem value="3-months">3 Months</SelectItem>
                    <SelectItem value="6-months">6 Months</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Mumbai, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your project, requirements, and what you're looking for..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                {description.length}/1000 characters
              </p>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                onClick={handleHire}
                disabled={!projectName.trim() || !projectType || !budget || !startDate || !description.trim() || isSubmitting}
                className="flex-1"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Proposal'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
