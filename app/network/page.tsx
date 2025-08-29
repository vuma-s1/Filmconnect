"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUsers } from '@/data/mock-data';
import { User } from '@/lib/types';
import { Search, UserPlus, MessageCircle, Check, X, Users } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const NetworkPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingRequests] = useState(mockUsers.slice(1, 3));
  const [connections] = useState(mockUsers.slice(0, 6));
  const [suggestions] = useState(mockUsers.slice(3, 8));
  const [connectedUsers, setConnectedUsers] = useState<string[]>([mockUsers[0].id]);
  const currentUser = mockUsers[0]; // Current user for filtering

  // Add search functionality
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => {
        const results = mockUsers.filter(user =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.role.toLowerCase().includes(query.toLowerCase()) ||
          user.location.toLowerCase().includes(query.toLowerCase()) ||
          user.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase()))
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 500);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  const handleConnect = (userId: string) => {
    setConnectedUsers([...connectedUsers, userId]);
  };

  const handleAcceptRequest = (userId: string) => {
    // Handle accepting connection request
    console.log('Accepted request from:', userId);
  };

  const handleRejectRequest = (userId: string) => {
    // Handle rejecting connection request
    console.log('Rejected request from:', userId);
  };

  const filteredSuggestions = suggestions.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ConnectionCard = ({ user, variant = 'suggestion' }: { user: User; variant?: 'suggestion' | 'request' | 'connected' }) => (
    <Card className="hover:bg-card/50 transition-colors">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="relative">
            <img
              src={user.profilePictureUrl}
              alt={user.name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
            {user.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center">
                <Check className="h-2 w-2 sm:h-3 sm:w-3 text-black" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold hover:text-primary cursor-pointer text-sm sm:text-base">{user.name}</h3>
            <div className="flex items-center space-x-2 mt-1 flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">{user.role}</Badge>
              {user.isVerified && (
                <Badge variant="verified" className="text-xs">Verified</Badge>
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{user.location}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{user.connections} connections</p>
            
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">{user.bio}</p>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {user.skills.slice(0, 2).map(skill => (
                <Badge key={skill} variant="skill" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {user.skills.length > 2 && (
                <Badge variant="skill" className="text-xs">
                  +{user.skills.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
          {variant === 'suggestion' && (
            <>
              <Button
                className="flex-1"
                onClick={() => handleConnect(user.id)}
                disabled={connectedUsers.includes(user.id)}
                size="sm"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                {connectedUsers.includes(user.id) ? 'Request Sent' : 'Connect'}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </>
          )}
          
          {variant === 'request' && (
            <>
              <Button
                className="flex-1"
                onClick={() => handleAcceptRequest(user.id)}
                size="sm"
              >
                <Check className="h-4 w-4 mr-2" />
                Accept
              </Button>
              <Button
                variant="outline"
                onClick={() => handleRejectRequest(user.id)}
                size="sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          )}
          
          {variant === 'connected' && (
            <>
              <Button variant="outline" className="flex-1" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="ghost" size="sm">
                View Profile
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Network</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your professional connections and discover new opportunities to collaborate
          </p>
        </div>

        <Tabs defaultValue="connections" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="connections" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Connections</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Requests ({pendingRequests.length})</span>
            </TabsTrigger>
            <TabsTrigger value="discover" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Discover</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">My Connections ({connections.length})</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search your connections..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                {isSearching ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Skeleton className="w-16 h-16 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-3 w-1/2" />
                              <Skeleton className="h-3 w-2/3" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : searchQuery && searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map(user => (
                      <ConnectionCard key={user.id} user={user} variant="connected" />
                    ))}
                  </div>
                ) : searchQuery && searchResults.length === 0 ? (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No connections found matching "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {connections.map(user => (
                      <ConnectionCard key={user.id} user={user} variant="connected" />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Connection Requests ({pendingRequests.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {pendingRequests.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pendingRequests.map(user => (
                      <ConnectionCard key={user.id} user={user} variant="request" />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <UserPlus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No pending connection requests</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discover" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>People You May Know</CardTitle>
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search professionals..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isSearching ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Skeleton className="w-16 h-16 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-3 w-1/2" />
                              <Skeleton className="h-3 w-2/3" />
                              <div className="flex space-x-2 mt-4">
                                <Skeleton className="h-8 w-20" />
                                <Skeleton className="h-8 w-8" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : searchQuery && searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map(user => (
                      <ConnectionCard key={user.id} user={user} variant="suggestion" />
                    ))}
                  </div>
                ) : searchQuery && searchResults.length === 0 ? (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No professionals found matching "{searchQuery}"</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSearchQuery('')}>
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Recommended for you</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {suggestions.slice(0, 4).map(user => (
                          <ConnectionCard key={user.id} user={user} variant="suggestion" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">People in your industry</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockUsers.filter(user => 
                          user.role === currentUser.role && user.id !== currentUser.id
                        ).slice(0, 2).map(user => (
                          <ConnectionCard key={user.id} user={user} variant="suggestion" />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">From your location</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockUsers.filter(user => 
                          user.location.includes('Hyderabad') && user.id !== currentUser.id
                        ).slice(0, 2).map(user => (
                          <ConnectionCard key={user.id} user={user} variant="suggestion" />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NetworkPage;