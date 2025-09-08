'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProfileCardSkeleton = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3 flex-1">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-4 rounded-full" />
              </div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-20 mb-2" />
              
              <div className="flex items-center space-x-4 mb-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          </div>
          <Skeleton className="h-8 w-8 rounded" />
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-1 mb-2">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-10 rounded-full" />
        </div>

        {/* Bio Preview */}
        <div className="mb-3">
          <Skeleton className="h-3 w-full mb-1" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-1 mb-3">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-18 rounded-full" />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Skeleton className="h-9 flex-1 rounded" />
          <Skeleton className="h-9 w-9 rounded" />
          <Skeleton className="h-9 w-9 rounded" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCardSkeleton;
