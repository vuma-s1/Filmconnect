import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bookmark, Clock, Star, Users, Zap } from "lucide-react";

interface LearningPathCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  tags: string[];
  featured?: boolean;
  onEnroll?: (id: string) => void;
  onBookmark?: (id: string) => void;
  isBookmarked?: boolean;
  isEnrolling?: boolean;
}

export function LearningPathCard({
  id,
  title,
  description,
  icon,
  duration,
  level,
  progress,
  tags,
  featured = false,
  onEnroll,
  onBookmark,
  isBookmarked = false,
  isEnrolling = false,
}: LearningPathCardProps) {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800',
  };

  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-md ${featured ? 'border-2 border-primary' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white">
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className={levelColors[level]}>
                  {level}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {duration}
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onBookmark?.(id)}
          >
            <Bookmark 
              className={`h-4 w-4 ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
            />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Button 
          className="w-full group" 
          onClick={() => onEnroll?.(id)}
          disabled={isEnrolling}
        >
          {progress > 0 ? 'Continue Learning' : 'Start Learning'}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
