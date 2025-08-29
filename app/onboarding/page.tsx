"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Film, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  Camera, 
  Check, 
  MapPin,
  Briefcase,
  Star,
  FileText,
  Users,
  X,
  AlertCircle,
  CheckCircle,
  Loader2,
  Heart,
  Target,
  Globe,
  Settings
} from 'lucide-react';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Profile Setup
    displayName: '',
    bio: '',
    location: '',
    
    // Step 2: Preferences
    interests: [] as string[],
    notifications: true,
    
    // Step 3: Goals
    goals: [] as string[],
    experienceLevel: '',
    
    // Step 4: Final Setup
    termsAccepted: false,
    newsletter: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    { title: 'Profile Setup', description: 'Complete your profile', icon: Users },
    { title: 'Preferences', description: 'Set your preferences', icon: Settings },
    { title: 'Goals', description: 'Define your goals', icon: Target },
    { title: 'Final Setup', description: 'Complete setup', icon: CheckCircle }
  ];

  const interests = [
    'Film Making', 'Acting', 'Directing', 'Cinematography', 'Editing', 'Screenwriting',
    'Producing', 'Sound Design', 'VFX', 'Animation', 'Casting', 'Art Direction'
  ];

  const goals = [
    'Find Collaborators', 'Get Casting Calls', 'Showcase Work', 'Learn New Skills',
    'Network with Professionals', 'Find Funding', 'Get Distribution', 'Win Awards'
  ];

  const experienceLevels = [
    'Student/Fresh Graduate',
    '1-2 years experience',
    '3-5 years experience',
    '6-10 years experience',
    '10+ years experience',
    'Industry Veteran'
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0:
        if (!formData.displayName.trim()) newErrors.displayName = 'Display name is required';
        if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        break;
      
      case 1:
        if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest';
        break;
      
      case 2:
        if (formData.goals.length === 0) newErrors.goals = 'Please select at least one goal';
        if (!formData.experienceLevel) newErrors.experienceLevel = 'Please select experience level';
        break;
      
      case 3:
        if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleComplete = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Mark onboarding as completed
      localStorage.setItem('onboardingCompleted', 'true');
      // Redirect to main site
      window.location.href = '/';
    }, 2000);
  };

  const handleSkip = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Mark onboarding as completed (skipped)
      localStorage.setItem('onboardingCompleted', 'true');
      // Redirect to main site
      window.location.href = '/';
    }, 1000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const toggleInterest = (interest: string) => {
    const currentInterests = formData.interests;
    if (currentInterests.includes(interest)) {
      handleInputChange('interests', currentInterests.filter(i => i !== interest));
    } else if (currentInterests.length < 5) {
      handleInputChange('interests', [...currentInterests, interest]);
    }
  };

  const toggleGoal = (goal: string) => {
    const currentGoals = formData.goals;
    if (currentGoals.includes(goal)) {
      handleInputChange('goals', currentGoals.filter(g => g !== goal));
    } else if (currentGoals.length < 4) {
      handleInputChange('goals', [...currentGoals, goal]);
    }
  };

  const renderStepContent = () => {
    const StepIcon = steps[currentStep].icon;

    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <StepIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
              <p className="text-muted-foreground">Let's set up your profile to get started</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  placeholder="Enter your display name"
                  value={formData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  className={errors.displayName ? 'border-red-500' : ''}
                />
                {errors.displayName && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.displayName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className={`w-full p-3 border rounded-md bg-background ${errors.bio ? 'border-red-500' : 'border-border'}`}
                  rows={4}
                />
                {errors.bio && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.bio}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className={`pl-10 ${errors.location ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.location && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <StepIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Set Your Preferences</h3>
              <p className="text-muted-foreground">Choose what interests you most</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Your Interests (max 5)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        formData.interests.includes(interest)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
                {errors.interests && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.interests}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notifications"
                  checked={formData.notifications}
                  onCheckedChange={(checked) => handleInputChange('notifications', checked)}
                />
                <Label htmlFor="notifications">Receive notifications about opportunities</Label>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <StepIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Define Your Goals</h3>
              <p className="text-muted-foreground">What do you want to achieve?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Your Goals (max 4)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        formData.goals.includes(goal)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                {errors.goals && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.goals}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                  <SelectTrigger className={errors.experienceLevel ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.experienceLevel && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.experienceLevel}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <StepIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Final Setup</h3>
              <p className="text-muted-foreground">Almost done! Just a few more things</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.terms}
                </p>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Subscribe to our newsletter for industry updates
                </Label>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Summary</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Display Name: {formData.displayName}</p>
                  <p>• Location: {formData.location}</p>
                  <p>• Interests: {formData.interests.join(', ')}</p>
                  <p>• Goals: {formData.goals.join(', ')}</p>
                  <p>• Experience: {formData.experienceLevel}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
        <CardHeader className="space-y-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Film className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Welcome to 24 Crafts
            </CardTitle>
            <p className="text-muted-foreground">Let's get you set up</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center space-x-2">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center space-y-1 ${
                    index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? 'bg-primary text-white' : 'bg-muted'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <StepIcon className="h-4 w-4" />
                    )}
                  </div>
                  <span className="text-xs text-center max-w-16">{step.title}</span>
                </div>
              );
            })}
          </div>
        </CardHeader>

        <CardContent>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex items-center space-x-3">
              {/* Skip Button */}
              <Button
                variant="ghost"
                onClick={handleSkip}
                disabled={isLoading}
                className="text-muted-foreground hover:text-foreground"
              >
                Skip for now
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleComplete}
                  disabled={isLoading}
                  className="flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Completing Setup...
                    </>
                  ) : (
                    <>
                      Complete Setup
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingPage;
