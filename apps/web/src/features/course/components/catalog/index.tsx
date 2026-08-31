import { useCoursesQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import Typography from '@mui/material/Typography';
import { Compass } from 'lucide-react';
import * as React from 'react';
import { CourseCard } from '../card';
import { CourseFilters } from '../filters';

export default function CourseCatalog() {
  const [filterType, setFilterType] = React.useState<'All' | 'Free' | 'Premium'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedStack, setSelectedStack] = React.useState<string>('All');

  const { data: allData, isLoading } = useCoursesQuery();

  if (isLoading || !allData) {
    return (
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>

        <Skeleton variant="rectangular" width="40%" height={48} sx={{ mx: 'auto', mb: 2, borderRadius: 2 }} />
        <Skeleton width="60%" height={24} sx={{ mx: 'auto', mb: 4 }} />
        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: '20px' }} /></Grid>)}
        </Grid>

      </Box>
    );
  }

  const filterLabels = allData.filterLabels ?? { all: 'All', free: 'Free', premium: 'Premium' };
  const stacks = ['All', ...(allData.stacks || [])];

  let filtered = allData.items;

  if (filterType !== 'All') {
    filtered = filtered.filter((c) => c.type === filterType);
  }

  if (selectedStack !== 'All') {
    filtered = filtered.filter((c) => c.stack === selectedStack);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags?.some(tag => tag.toLowerCase().includes(q))
    );
  }

  return (
    <Box id="courses" sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.1 }}><Compass size={36} color="var(--template-palette-primary-main)" style={{ verticalAlign: 'middle', marginRight: '12px', transform: 'translateY(-4px)' }} />{allData.title}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4, fontSize: '1rem', lineHeight: 1.7 }}>{allData.subtitle}</Typography>
      </Box>

      <CourseFilters
        filterType={filterType} setFilterType={setFilterType}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        selectedStack={selectedStack} setSelectedStack={setSelectedStack}
        filterLabels={filterLabels} stacks={stacks}
      />

      {filtered.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h6" fontWeight={700} color="text.secondary">No courses found matching your criteria.</Typography>
          <Button variant="outline" sx={{ mt: 2, borderRadius: '12px' }} onClick={() => { setSearchQuery(''); setSelectedStack('All'); setFilterType('All'); }}>
            Clear Filters
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {filtered.map((course) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
              <CourseCard
                course={course}
                enrollFreeLabel={allData.enrollCtaFree ?? 'Start Free'}
                enrollPremiumLabel={allData.enrollCtaPremium ?? 'Enroll Now'}
              />
            </Grid>
          ))}
        </Grid>
      )}

    </Box>
  );
}
