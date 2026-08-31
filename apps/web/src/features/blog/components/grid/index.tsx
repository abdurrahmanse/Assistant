import React from 'react';
import Grid from '@mui/material/Grid';
import { Reveal } from '@/components/Reveal';
import { PostCard } from '../card';

export interface BlogGridProps {
  posts?: any[];
  isLoading?: boolean;
}

export function BlogGrid({ posts, isLoading }: BlogGridProps) {
  if (isLoading || !posts) {
    return (
      <Grid container spacing={4}>
        {[1, 2, 3].map(i => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <PostCard isLoading={true} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={4}>
      {posts.map((post: any, index: number) => (
        <Grid size={{ xs: 12, md: 4 }} key={post.id}>
          <Reveal delay={0.2 + (index * 0.15)} direction="up">
            <PostCard post={post} />
          </Reveal>
        </Grid>
      ))}
    </Grid>
  );
}
