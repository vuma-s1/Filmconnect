'use client';

import { useState } from 'react';
import { CastCrewProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, UserPlus, MessageSquare } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CastCrewProfile | null;
  onConnect: (message: string, projectType: string) => void;
}

export default function ConnectModal({ isOpen, onClose, profile, onConnect }: ConnectModalProps) {
  const [message, setMessage] = useState('');
  const [projectType, setProjectType] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    if (!message.trim() || !projectType) return;
    
    setIsConnecting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onConnect(message, projectType);
    setIsConnected(true);
    setIsConnecting(false);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setIsConnected(false);
      setMessage('');
      setProjectType('');
      onClose();
    }, 2000);
  };

  if (!profile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <UserPlus className="w-5 h-5" />
            <span>Connect with {profile.name}</span>
          </DialogTitle>
          <DialogDescription>
            Send a connection request to {profile.name}. They'll be notified and can accept your request.
          </DialogDescription>
        </DialogHeader>

        {isConnected ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-700 mb-2">Connection Request Sent!</h3>
            <p className="text-sm text-muted-foreground">
              {profile.name} will be notified of your connection request.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feature-film">Feature Film</SelectItem>
                  <SelectItem value="short-film">Short Film</SelectItem>
                  <SelectItem value="web-series">Web Series</SelectItem>
                  <SelectItem value="documentary">Documentary</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="music-video">Music Video</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Connection Message</Label>
              <Textarea
                id="message"
                placeholder={`Hi ${profile.name}, I'd like to connect with you for a potential collaboration...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                {message.length}/500 characters
              </p>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isConnecting}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConnect}
                disabled={!message.trim() || !projectType || isConnecting}
                className="flex-1"
              >
                {isConnecting ? 'Sending...' : 'Send Request'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
