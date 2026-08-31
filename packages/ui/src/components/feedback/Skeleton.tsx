import * as React from 'react';
import MuiSkeleton, { type SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends MuiSkeletonProps {
  rounded?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({
  rounded,
  sx,
  ...props
}, ref) => {
  return (
    <MuiSkeleton
      ref={ref}
      sx={{
        borderRadius: rounded ? '12px' : undefined,
        ...sx
      }}
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';
