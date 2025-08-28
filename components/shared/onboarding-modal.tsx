"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Camera, Check } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    'Acting', 'Directing', 'Cinematography', 'Editing', 'Writing',
    'Producing', 'Sound Design', 'VFX', 'Animation', 'Casting',
    'Stunt Coordination', 'Art Direction', 'Costume Design', 'Music'
  ];

  const steps = [
    {
      title: "Welcome to 24 Crafts!",
      description: "Let's get your profile set up to connect with the film industry",
      content: (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="h-10 w-10 text-black" />
          </div>
          <p className="text-muted-foreground">
            Complete your profile to get discovered by casting directors, producers, and industry professionals.
          </p>
        </div>
      )
    },
    {
      title: "Upload Your Profile Picture",
      description: "A professional photo helps you make a great first impression",
      content: (
        <div className="py-8">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG up to 10MB
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Select Your Top Skills",
      description: "Choose up to 5 skills that best represent your expertise",
      content: (
        <div className="py-8">
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                                    variant={selectedSkills.includes(skill) ? 'secondary' : 'outline'}
                className="cursor-pointer p-3 justify-center hover:bg-primary hover:text-black transition-colors"
                onClick={() => {
                  if (selectedSkills.includes(skill)) {
                    setSelectedSkills(selectedSkills.filter(s => s !== skill));
                  } else if (selectedSkills.length < 5) {
                    setSelectedSkills([...selectedSkills, skill]);
                  }
                }}
              >
                {skill}
                {selectedSkills.includes(skill) && (
                  <Check className="h-3 w-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            {selectedSkills.length}/5 skills selected
          </p>
        </div>
      )
    },
    {
      title: "You're All Set!",
      description: "Welcome to the 24 Crafts community",
      content: (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-10 w-10 text-white" />
          </div>
          <p className="text-muted-foreground mb-4">
            Your profile is now live! Start connecting with industry professionals and exploring opportunities.
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Next steps:</p>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>• Add your work experience and credits</li>
              <li>• Upload your portfolio and demo reels</li>
              <li>• Start connecting with industry professionals</li>
              <li>• Explore job opportunities</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  if (!isOpen) return null;

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {steps[currentStep].description}
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              {currentStep + 1}/{steps.length}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {steps[currentStep].content}
          
          <div className="flex justify-between items-center pt-6">
            <Button
              variant="outline"
              onClick={() => {
                if (currentStep > 0) {
                  setCurrentStep(currentStep - 1);
                } else {
                  onClose();
                }
              }}
            >
              {currentStep === 0 ? 'Skip' : 'Back'}
            </Button>
            
            <Button
              onClick={() => {
                if (isLastStep) {
                  onClose();
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
            >
              {isLastStep ? 'Get Started' : 'Continue'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingModal;