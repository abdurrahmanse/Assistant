import React from 'react';
import { useBlogQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { BlogHero } from '@/features/blog/components/hero';
import { BlogGrid } from '@/features/blog/components/grid';

export default function BlogPage() {
  const { data: blog, isLoading } = useBlogQuery();

  return (
    <MarketingLayout>
      <BlogHero />
      <BlogGrid posts={blog} isLoading={isLoading} />
    </MarketingLayout>
  );
}
