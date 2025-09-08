'use client';

import { useState } from 'react';
import { CastCrewProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, MessageSquare, Send } from 'lucide-react';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CastCrewProfile | null;
  onSendMessage: (subject: string, message: string, priority: string) => void;
}

export default function MessageModal({ isOpen, onClose, profile, onSendMessage }: MessageModalProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState('normal');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = async () => {
    if (!subject.trim() || !message.trim()) return;
    
    setIsSending(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSendMessage(subject, message, priority);
    setIsSent(true);
    setIsSending(false);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setIsSent(false);
      setSubject('');
      setMessage('');
      setPriority('normal');
      onClose();
    }, 2000);
  };

  if (!profile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Message {profile.name}</span>
          </DialogTitle>
          <DialogDescription>
            Send a direct message to {profile.name}. They'll receive a notification.
          </DialogDescription>
        </DialogHeader>

        {isSent ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-700 mb-2">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">
              Your message has been sent to {profile.name}.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter message subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder={`Hi ${profile.name}, I hope this message finds you well...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                {message.length}/1000 characters
              </p>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSending}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!subject.trim() || !message.trim() || isSending}
                className="flex-1"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSending ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
