"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { CastCrewProfile } from '@/lib/types';
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
  ExternalLink,
  Calendar,
  Globe,
  Share,
  Briefcase
} from 'lucide-react';

interface ProfileDetailsProps {
  profile: CastCrewProfile;
  isSaved?: boolean;
  isConnected?: boolean;
  onSave: () => void;
  onConnect: (message: string, projectType: string) => void;
  onMessage: (subject: string, message: string, priority: string) => void;
  onHire: (projectDetails: any) => void;
}

const ProfileDetails = ({ 
  profile, 
  isSaved = false, 
  isConnected = false,
  onSave, 
  onConnect, 
  onMessage,
  onHire
}: ProfileDetailsProps) => {
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
      case 'Available': return 'text-green-600';
      case 'Busy': return 'text-yellow-600';
      case 'On Project': return 'text-blue-600';
      case 'Not Available': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile.profilePictureUrl} alt={profile.name} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-xl font-bold">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-background ${
              profile.isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <CardTitle className="text-2xl">{profile.name}</CardTitle>
              {profile.isVerified && (
                <CheckCircle className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <p className="text-primary font-medium text-lg mb-1">{profile.craft}</p>
            <p className="text-muted-foreground mb-2">{profile.subcategory}</p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{profile.experience}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">{profile.rating}</span>
              </div>
              <span className="text-muted-foreground">({profile.reviews} reviews)</span>
              <Badge className={`${getAvailabilityColor(profile.availabilityStatus)} border-current`}>
                {profile.availabilityStatus}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Languages */}
        <div>
          <h3 className="font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((language) => (
              <Badge key={language} variant="outline">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bio */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-muted-foreground leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold mb-3">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools */}
        {profile.tools.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Tools & Equipment</h3>
            <div className="flex flex-wrap gap-2">
              {profile.tools.map((tool) => (
                <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator />

        {/* Recent Filmography */}
        <div>
          <h3 className="font-semibold mb-3">Recent Work</h3>
          <div className="space-y-3">
            {profile.filmography.slice(0, 3).map((film) => (
              <div key={film.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-12 h-16 bg-muted rounded flex-shrink-0">
                  {film.posterUrl && (
                    <img src={film.posterUrl} alt={film.title} className="w-full h-full object-cover rounded" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{film.title}</h4>
                  <p className="text-sm text-muted-foreground">{film.role} • {film.year}</p>
                  <p className="text-xs text-muted-foreground">{film.director}</p>
                  {film.isVerified && (
                    <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        {profile.awards.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Awards & Recognition</h3>
            <div className="space-y-2">
              {profile.awards.slice(0, 3).map((award) => (
                <div key={award.id} className="flex items-center space-x-2 p-2 bg-yellow-500/10 rounded">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium">{award.name}</p>
                    <p className="text-xs text-muted-foreground">{award.organization} • {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{profile.profileViews.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Profile Views</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{profile.connections.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Connections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{profile.filmography.length}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>

        <Separator />

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{profile.email}</span>
            </div>
            {profile.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{profile.phone}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {profile.website}
                </a>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Response time: {profile.contactInfo.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            className="flex-1"
            disabled={isConnected}
            onClick={() => setShowConnectModal(true)}
          >
            {isConnected ? 'Connected' : 'Connect'}
          </Button>
          <Button 
            variant="outline"
            onClick={() => setShowMessageModal(true)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
          <Button 
            variant="outline"
            onClick={() => setShowHireModal(true)}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Hire
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={onSave}
            className={isSaved ? 'text-primary border-primary' : ''}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </CardContent>

      {/* Modals */}
      <ConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        profile={profile}
        onConnect={(message, projectType) => {
          onConnect(message, projectType);
          setShowConnectModal(false);
        }}
      />
      
      <MessageModal
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
        profile={profile}
        onSendMessage={(subject, message, priority) => {
          onMessage(subject, message, priority);
          setShowMessageModal(false);
        }}
      />
      
      <HireModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        profile={profile}
        onHire={(projectDetails) => {
          onHire(projectDetails);
          setShowHireModal(false);
        }}
      />
    </Card>
  );
};

export default ProfileDetails;
