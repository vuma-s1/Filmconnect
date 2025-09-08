"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CastCrewProfile } from '@/lib/types';
import Link from 'next/link';
import ConnectModal from './connect-modal';
import MessageModal from './message-modal';
import HireModal from './hire-modal';
import { 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Bookmark, 
  MessageCircle, 
  Phone, 
  Mail,
  Award,
  Play,
  Eye,
  CheckCircle,
  Circle,
  Briefcase
} from 'lucide-react';

interface ProfileCardProps {
  profile: CastCrewProfile;
  onClick: () => void;
  isSelected?: boolean;
  isSaved?: boolean;
  isConnected?: boolean;
  onSave: () => void;
  onConnect: (message: string, projectType: string) => void;
  onMessage: (subject: string, message: string, priority: string) => void;
  onHire: (projectDetails: any) => void;
}

const ProfileCard = ({ 
  profile, 
  onClick, 
  isSelected = false, 
  isSaved = false, 
  isConnected = false,
  onSave, 
  onConnect, 
  onMessage,
  onHire
}: ProfileCardProps) => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-500';
      case 'Busy': return 'bg-yellow-500';
      case 'On Project': return 'bg-blue-500';
      case 'Not Available': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave();
  };

  const handleConnect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConnectModal(true);
  };

  const handleMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMessageModal(true);
  };

  const handleHire = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHireModal(true);
  };

  const handleConnectSubmit = (message: string, projectType: string) => {
    onConnect(message, projectType);
    setShowConnectModal(false);
  };

  const handleMessageSubmit = (subject: string, message: string, priority: string) => {
    onMessage(subject, message, priority);
    setShowMessageModal(false);
  };

  const handleHireSubmit = (projectDetails: any) => {
    onHire(projectDetails);
    setShowHireModal(false);
  };

  return (
    <Card 
      className={`hover:bg-card/50 transition-colors cursor-pointer ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3 flex-1 min-w-0">
            <div className="relative flex-shrink-0">
              <Avatar className="h-14 w-14 sm:h-16 sm:w-16">
                <AvatarImage src={profile.profilePictureUrl} alt={profile.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-sm sm:text-lg font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {/* Online Status */}
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-background ${
                profile.isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`} />
              {/* Availability Status */}
              <div className={`absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-background ${getAvailabilityColor(profile.availabilityStatus)}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Link href={`/cast-crew/${profile.username}`} className="hover:text-primary transition-colors">
                  <h3 className="font-semibold text-base sm:text-lg truncate">
                    {profile.name}
                  </h3>
                </Link>
                {profile.isVerified && (
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                )}
              </div>
              
              <p className="text-primary font-medium text-sm sm:text-base mb-1 truncate">{profile.craft}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 truncate">{profile.subcategory}</p>
              
              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-muted-foreground mb-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">{profile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{profile.experience}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                  <span className="text-xs sm:text-sm font-medium">{profile.rating}</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">({profile.reviews})</span>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSave}
            className={`h-7 w-7 sm:h-8 sm:w-8 ${isSaved ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <Bookmark className={`h-3 w-3 sm:h-4 sm:w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1 mb-2">
          {profile.languages.slice(0, 3).map((language) => (
            <Badge key={language} variant="outline" className="text-xs">
              {language}
            </Badge>
          ))}
          {profile.languages.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{profile.languages.length - 3} more
            </Badge>
          )}
        </div>

        {/* Bio Preview */}
        <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
          {profile.bio}
        </p>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-1 mb-3">
          {profile.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {profile.skills.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{profile.skills.length - 4} more
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{profile.profileViews.toLocaleString()} views</span>
            <span className="sm:hidden">{profile.profileViews.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{profile.connections.toLocaleString()} connections</span>
            <span className="sm:hidden">{profile.connections.toLocaleString()}</span>
          </div>
          {profile.awards.length > 0 && (
            <div className="flex items-center space-x-1">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{profile.awards.length}</span>
            </div>
          )}
        </div>

        {/* Showreel Preview */}
        {profile.showreel && (
          <div className="mb-3">
            <div className="relative bg-muted rounded-lg p-3 flex items-center space-x-3">
              <div className="w-12 h-8 bg-primary/20 rounded flex items-center justify-center">
                <Play className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Showreel Available</p>
                <p className="text-xs text-muted-foreground">Click to view portfolio</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            className="flex-1 h-8 sm:h-9 text-xs sm:text-sm"
            onClick={handleConnect}
            disabled={isConnected}
          >
            {isConnected ? 'Connected' : 'Connect'}
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleMessage}
            title="Send Message"
            className="h-8 w-8 sm:h-9 sm:w-9"
          >
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleHire}
            title="Hire/Contact"
            className="h-8 w-8 sm:h-9 sm:w-9"
          >
            <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between mt-3">
          {isSaved && (
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
              Saved
            </Badge>
          )}
          {isConnected && (
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-500">
              Connected
            </Badge>
          )}
          <Badge 
            variant="outline" 
            className={`text-xs ${
              profile.availabilityStatus === 'Available' ? 'text-green-600 border-green-600' :
              profile.availabilityStatus === 'Busy' ? 'text-yellow-600 border-yellow-600' :
              profile.availabilityStatus === 'On Project' ? 'text-blue-600 border-blue-600' :
              'text-red-600 border-red-600'
            }`}
          >
            {profile.availabilityStatus}
          </Badge>
        </div>
      </CardContent>

      {/* Modals */}
      <ConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        profile={profile}
        onConnect={handleConnectSubmit}
      />
      
      <MessageModal
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
        profile={profile}
        onSendMessage={handleMessageSubmit}
      />
      
      <HireModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        profile={profile}
        onHire={handleHireSubmit}
      />
    </Card>
  );
};

export default ProfileCard;
