"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Film, 
  Eye, 
  EyeOff, 
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
  Loader2
} from 'lucide-react';

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Professional Details
    role: '',
    experienceLevel: '',
    location: '',
    bio: '',
    
    // Step 3: Profile Picture
    profilePicture: null as File | null,
    profilePreview: '',
    
    // Step 4: Skills
    skills: [] as string[],
    
    // Step 5: Portfolio
    portfolio: [] as string[],
    
    // Step 6: Verification
    termsAccepted: false,
    newsletter: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValidating, setIsValidating] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const roles = [
    'Actor', 'Actress', 'Director', 'Cinematographer', 'Writer', 'Screenwriter',
    'Producer', 'Editor', 'Sound Designer', 'VFX Artist', 'Animator', 'Casting Director',
    'Production Designer', 'Costume Designer', 'Makeup Artist', 'Stunt Coordinator',
    'Composer', 'Music Director', 'Assistant Director', 'Camera Operator',
    'Gaffer', 'Grip', 'Other'
  ];

  const experienceLevels = [
    'Student/Fresh Graduate',
    '1-2 years experience',
    '3-5 years experience',
    '6-10 years experience',
    '10+ years experience',
    'Industry Veteran'
  ];

  const skills = [
    'Acting', 'Directing', 'Cinematography', 'Editing', 'Screenwriting', 'Producing',
    'Sound Design', 'VFX', 'Animation', 'Casting', 'Stunt Coordination', 'Art Direction',
    'Costume Design', 'Music Composition', 'Color Grading', 'Lighting', 'Camera Operation',
    'Production Management', 'Script Supervision', 'Location Scouting'
  ];

  const steps = [
    { title: 'Basic Information', description: 'Your personal details', icon: Users },
    { title: 'Professional Details', description: 'Your role and experience', icon: Briefcase },
    { title: 'Profile Picture', description: 'Upload your photo', icon: Camera },
    { title: 'Skills & Expertise', description: 'Select your skills', icon: Star },
    { title: 'Portfolio', description: 'Add your work samples', icon: FileText },
    { title: 'Verification', description: 'Review and complete', icon: CheckCircle }
  ];

  const validateField = (field: string, value: any): string => {
    switch (field) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        return '';
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return 'Password must contain uppercase, lowercase, and number';
        }
        return '';
      
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      
      case 'role':
        if (!value) return 'Please select your role';
        return '';
      
      case 'experienceLevel':
        if (!value) return 'Please select experience level';
        return '';
      
      case 'location':
        if (!value.trim()) return 'Location is required';
        return '';
      
      case 'profilePicture':
        if (!value) return 'Profile picture is required';
        return '';
      
      case 'skills':
        if (value.length === 0) return 'Please select at least one skill';
        return '';
      
      case 'termsAccepted':
        if (!value) return 'You must accept the terms of service';
        return '';
      
      default:
        return '';
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0:
        ['firstName', 'lastName', 'email', 'password', 'confirmPassword'].forEach(field => {
          const error = validateField(field, formData[field as keyof typeof formData]);
          if (error) newErrors[field] = error;
        });
        break;
      
      case 1:
        ['role', 'experienceLevel', 'location'].forEach(field => {
          const error = validateField(field, formData[field as keyof typeof formData]);
          if (error) newErrors[field] = error;
        });
        break;
      
      case 2:
        const error = validateField('profilePicture', formData.profilePicture);
        if (error) newErrors.profilePicture = error;
        break;
      
      case 3:
        const skillsError = validateField('skills', formData.skills);
        if (skillsError) newErrors.skills = skillsError;
        break;
      
      case 5:
        const termsError = validateField('termsAccepted', formData.termsAccepted);
        if (termsError) newErrors.terms = termsError;
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

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to second 4-step process
      window.location.href = '/onboarding';
    }, 2000);
  };

  const handleSkip = () => {
    setIsLoading(true);
    // Simulate quick account creation with minimal data
    setTimeout(() => {
      setIsLoading(false);
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');
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
    
    // Real-time validation for certain fields
    if (['email', 'password', 'confirmPassword'].includes(field)) {
      setIsValidating(prev => ({ ...prev, [field]: true }));
      setTimeout(() => {
        const error = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
        setIsValidating(prev => ({ ...prev, [field]: false }));
      }, 500);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, profilePicture: 'Please select an image file' }));
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setErrors(prev => ({ ...prev, profilePicture: 'File size must be less than 10MB' }));
        return;
      }

      handleInputChange('profilePicture', file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('profilePreview', e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = () => {
    handleInputChange('profilePicture', null);
    handleInputChange('profilePreview', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleSkill = (skill: string) => {
    const currentSkills = formData.skills;
    if (currentSkills.includes(skill)) {
      handleInputChange('skills', currentSkills.filter(s => s !== skill));
    } else if (currentSkills.length < 5) {
      handleInputChange('skills', [...currentSkills, skill]);
    }
  };

  const addPortfolioLink = () => {
    if (formData.portfolio.length < 5) {
      handleInputChange('portfolio', [...formData.portfolio, '']);
    }
  };

  const removePortfolioLink = (index: number) => {
    handleInputChange('portfolio', formData.portfolio.filter((_, i) => i !== index));
  };

  const updatePortfolioLink = (index: number, value: string) => {
    const newPortfolio = [...formData.portfolio];
    newPortfolio[index] = value;
    handleInputChange('portfolio', newPortfolio);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
  return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`${errors.firstName ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.firstName}
                  </p>
                )}
          </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name *
                </Label>
                  <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`${errors.lastName ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
                </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <div className="relative">
                  <Input
                  id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Enter your email address"
                />
                {isValidating.email && (
                  <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                )}
                {!isValidating.email && !errors.email && formData.email && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password *
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`pr-10 ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.password}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters with uppercase, lowercase, and number
              </p>
                </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password *
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`pr-10 ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''}`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                Professional Role *
              </Label>
              <Select onValueChange={(value) => handleInputChange('role', value)}>
                <SelectTrigger className={errors.role ? 'border-red-500 focus:border-red-500' : ''}>
                  <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
              {errors.role && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.role}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceLevel" className="text-sm font-medium">
                Experience Level *
              </Label>
              <Select onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                <SelectTrigger className={errors.experienceLevel ? 'border-red-500 focus:border-red-500' : ''}>
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
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.experienceLevel}
                </p>
              )}
                </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location *
              </Label>
                <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="City, Country"
                  className={`pl-10 ${errors.location ? 'border-red-500 focus:border-red-500' : ''}`}
                />
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.location}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself and your experience in the film industry..."
                className="w-full p-3 border border-border rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                {formData.bio.length}/500 characters
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {formData.profilePreview ? (
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={formData.profilePreview}
                    alt="Profile preview"
                    fill
                    className="rounded-full object-cover"
                  />
                  <button
                    onClick={removeProfilePicture}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-center text-sm text-green-600">
                  ✓ Profile picture uploaded successfully
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors cursor-pointer"
                     onClick={() => fileInputRef.current?.click()}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </div>
            )}
            {errors.profilePicture && (
              <p className="text-red-500 text-sm flex items-center gap-1 justify-center">
                <AlertCircle className="h-3 w-3" />
                {errors.profilePicture}
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-sm font-medium">
                Select Your Top Skills (Up to 5) *
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={formData.skills.includes(skill) ? 'secondary' : 'outline'}
                    className="cursor-pointer p-3 justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                    {formData.skills.includes(skill) && <Check className="h-3 w-3 ml-1" />}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {formData.skills.length}/5 skills selected
                </span>
                {formData.skills.length > 0 && (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Great selection!
                  </span>
                )}
              </div>
              {errors.skills && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.skills}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-sm font-medium">
                Portfolio Links <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <p className="text-sm text-muted-foreground">
                Add links to your work samples, showreels, or portfolio websites
              </p>
              
              <div className="space-y-3">
                {formData.portfolio.map((link, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="https://your-portfolio.com"
                      value={link}
                      onChange={(e) => updatePortfolioLink(index, e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removePortfolioLink(index)}
                      className="px-3"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {formData.portfolio.length < 5 && (
                  <Button
                    variant="outline"
                    onClick={addPortfolioLink}
                    className="w-full"
                  >
                    + Add Portfolio Link
                  </Button>
                )}
              </div>
              
              <p className="text-xs text-muted-foreground">
                {formData.portfolio.length}/5 portfolio links
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Review Your Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Role</p>
                  <p className="font-medium">{formData.role}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Experience</p>
                  <p className="font-medium">{formData.experienceLevel}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{formData.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Skills</p>
                  <p className="font-medium">{formData.skills.join(', ')}</p>
                </div>
              </div>
                </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{' '}
                  <Link href="/terms" className="text-primary hover:underline font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                </Label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.terms}
                </p>
              )}

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                />
                <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                  I want to receive updates about new opportunities and industry news
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="24 Crafts" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white">24 Crafts</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-white">Join 24 Crafts</h2>
          <p className="mt-2 text-muted-foreground">
            Connect with film industry professionals and showcase your talent
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
                      <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${Math.round(((currentStep + 1) / steps.length) * 100)}%` }}
              />
            </div>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center space-x-2 sm:space-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center space-y-2 ${
                  index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="hidden sm:block text-xs text-center max-w-20">{step.title}</span>
              </div>
            );
          })}
        </div>

        {/* Main Form */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              {(() => {
                const Icon = steps[currentStep].icon;
                return <Icon className="h-5 w-5" />;
              })()}
              <span>{steps[currentStep].title}</span>
            </CardTitle>
            <p className="text-muted-foreground">{steps[currentStep].description}</p>
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
                {/* Skip Button - Show on all steps except the last one */}
                {currentStep < steps.length - 1 && (
                  <Button
                    variant="ghost"
                    onClick={handleSkip}
                    disabled={isLoading}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Skipping...
                      </>
                    ) : (
                      'Skip for now'
                    )}
                  </Button>
                )}

                {currentStep === steps.length - 1 ? (
                <Button
                    onClick={handleSubmit}
                  disabled={isLoading}
                    className="flex items-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
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

        {/* Social Signup */}
        <div className="text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

          <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;