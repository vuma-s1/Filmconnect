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
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div className="relative">
            <img
              src={post.author.profilePictureUrl}
              alt={post.author.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            {post.author.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm sm:text-base">{post.author.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {post.author.role} • {formatTimeAgo(post.timestamp)}
                </p>
              </div>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="mt-3 whitespace-pre-wrap text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">{post.content}</p>
            
            {post.imageUrl && (
              <div className="mt-4">
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="w-full rounded-lg object-cover max-h-60 sm:max-h-80"
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
                className={`${post.isLiked ? 'text-red-500 hover:text-red-600' : ''} text-xs sm:text-sm`}
              >
                <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{post.likes}</span>
                <span className="sm:hidden">{post.likes > 999 ? `${(post.likes/1000).toFixed(1)}k` : post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">{post.comments.length}</span>
                <span className="sm:hidden">{post.comments.length > 999 ? `${(post.comments.length/1000).toFixed(1)}k` : post.comments.length}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Share className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">{post.shares}</span>
                <span className="sm:hidden">{post.shares > 999 ? `${(post.shares/1000).toFixed(1)}k` : post.shares}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedPost;