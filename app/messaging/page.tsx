"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { mockUsers, mockConversations, mockMessages } from '@/data/mock-data';
import { Conversation, Message, User } from '@/lib/types';
import { 
  Search, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip,
  Smile,
  Image,
  ArrowLeft
} from 'lucide-react';

const MessagingPage = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    mockConversations[0] || null
  );
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isMobileView, setIsMobileView] = useState(false);

  const currentUser = mockUsers[0]; // Ravi Teja as current user

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const message: Message = {
      id: `m${Date.now()}`,
      senderId: currentUser.id,
      receiverId: selectedConversation.participants.find(p => p.id !== currentUser.id)!.id,
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
      isRead: false,
      type: 'text'
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const ConversationList = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-semibold mb-3">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {mockConversations.map((conversation) => {
          const otherUser = conversation.participants.find(p => p.id !== currentUser.id);
          if (!otherUser) return null;

          const matchesSearch = otherUser.name.toLowerCase().includes(searchQuery.toLowerCase());
          if (searchQuery && !matchesSearch) return null;

          return (
            <div
              key={conversation.id}
              className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                selectedConversation?.id === conversation.id ? 'bg-muted' : ''
              }`}
              onClick={() => {
                setSelectedConversation(conversation);
                setIsMobileView(true);
              }}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <img
                    src={otherUser.profilePictureUrl}
                    alt={otherUser.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {otherUser.isVerified && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                  )}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium truncate">{otherUser.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(conversation.lastMessage.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-1">
                    {conversation.lastMessage.content}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {otherUser.role}
                    </Badge>
                    {conversation.unreadCount > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ChatView = () => {
    if (!selectedConversation) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
            <p className="text-muted-foreground">Choose from your existing conversations or start a new one</p>
          </div>
        </div>
      );
    }

    const otherUser = selectedConversation.participants.find(p => p.id !== currentUser.id)!;

    return (
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileView(false)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <img
              src={otherUser.profilePictureUrl}
              alt={otherUser.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <h3 className="font-semibold">{otherUser.name}</h3>
              <p className="text-sm text-muted-foreground">{otherUser.role} • Active now</p>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => {
            const isCurrentUser = message.senderId === currentUser.id;
            const sender = isCurrentUser ? currentUser : otherUser;

            return (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <img
                  src={sender.profilePictureUrl}
                  alt={sender.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                
                <div className={`max-w-xs lg:max-w-md ${isCurrentUser ? 'text-right' : ''}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      isCurrentUser
                        ? 'bg-primary !text-black'
                        : 'bg-muted'
                    }`}
                    style={isCurrentUser ? { color: 'black' } : {}}
                  >
                    <p 
                      className={`text-sm ${isCurrentUser ? '!text-black' : ''}`}
                      style={isCurrentUser ? { color: 'black' } : {}}
                    >
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="h-4 w-4" />
            </Button>
            
            <div className="flex-1 relative">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            
            <Button onClick={sendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="h-[80vh]">
          <CardContent className="p-0 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Conversation List */}
              <div className={`lg:col-span-2 border-r border-border ${
                isMobileView ? 'hidden lg:block' : 'block'
              }`}>
                <ConversationList />
              </div>
              
              {/* Chat View */}
              <div className={`lg:col-span-3 ${
                !isMobileView ? 'hidden lg:block' : 'block'
              }`}>
                <ChatView />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MessagingPage;