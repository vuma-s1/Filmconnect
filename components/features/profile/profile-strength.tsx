"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Plus } from 'lucide-react';

interface ProfileStrengthProps {
  currentStrength: number;
}

const ProfileStrength = ({ currentStrength }: ProfileStrengthProps) => {
  const getStrengthLevel = (strength: number) => {
    if (strength >= 90) return { label: 'Expert', color: 'text-green-500' };
    if (strength >= 70) return { label: 'Advanced', color: 'text-primary' };
    if (strength >= 50) return { label: 'Intermediate', color: 'text-blue-500' };
    return { label: 'Beginner', color: 'text-orange-500' };
  };

  const strengthLevel = getStrengthLevel(currentStrength);

  const completionItems = [
    { label: 'Profile picture', completed: true, points: 10 },
    { label: 'Bio and description', completed: true, points: 15 },
    { label: 'Professional skills', completed: true, points: 10 },
    { label: 'Work experience', completed: true, points: 20 },
    { label: 'Portfolio/demo reels', completed: currentStrength >= 80, points: 25 },
    { label: 'Verified credits', completed: currentStrength >= 90, points: 15 },
    { label: 'Contact information', completed: true, points: 5 },
  ];

  const completedItems = completionItems.filter(item => item.completed);
  const nextItem = completionItems.find(item => !item.completed);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Profile Strength</span>
          <Badge variant="outline" className={strengthLevel.color}>
            {strengthLevel.label}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Completion</span>
            <span className="font-medium">{currentStrength}%</span>
          </div>
          <Progress value={currentStrength} className="h-2" />
        </div>

        {nextItem && (
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium text-sm mb-2">Next step to improve:</h4>
            <div className="flex items-center space-x-2">
              <Plus className="h-4 w-4 text-primary" />
              <span className="text-sm">{nextItem.label}</span>
              <Badge variant="outline" className="ml-auto">
                +{nextItem.points}%
              </Badge>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Completed ({completedItems.length}/{completionItems.length})</h4>
          {completionItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              {item.completed ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className={item.completed ? 'text-foreground' : 'text-muted-foreground'}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {currentStrength >= 90 && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
            <p className="text-sm font-medium text-primary mb-1">🎉 Outstanding Profile!</p>
            <p className="text-xs text-muted-foreground">
              You're 5x more likely to be discovered by industry professionals
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileStrength;