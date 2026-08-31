import React from 'react';
import Container from '@mui/material/Container';
import { useBlogQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { BlogHero } from '@/features/blog/components/hero';
import { BlogGrid } from '@/features/blog/components/grid';

export default function BlogPage() {
  const { data: blog, isLoading } = useBlogQuery();

  return (
    <MarketingLayout>
      <Container maxWidth="lg">
        <BlogHero />
        <Container maxWidth="lg" sx={{ mb: 12, px: { xs: 0, sm: 2 } }}>
          <BlogGrid posts={blog} isLoading={isLoading} />
        </Container>
      </Container>
    </MarketingLayout>
  );
}
