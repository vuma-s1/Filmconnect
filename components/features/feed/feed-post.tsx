"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Post } from '@/lib/types';
import { Heart, MessageCircle, Share, MoreHorizontal, Video } from 'lucide-react';

interface FeedPostProps {
  post: Post;
  onLike: (postId: string) => void;
}

const FeedPost = ({ post, onLike }: FeedPostProps) => {
  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <Card className="hover:bg-card/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <div className="relative">
            <img
              src={post.author.profilePictureUrl}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {post.author.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{post.author.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {post.author.role} • {formatTimeAgo(post.timestamp)}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="mt-3 whitespace-pre-wrap">{post.content}</p>
            
            {post.imageUrl && (
              <div className="mt-4">
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="w-full rounded-lg object-cover max-h-80"
                />
              </div>
            )}
            
            {post.videoUrl && (
              <div className="mt-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Video className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLike(post.id)}
                className={post.isLiked ? 'text-red-500 hover:text-red-600' : ''}
              >
                <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                {post.comments.length}
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-1" />
                {post.shares}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedPost;