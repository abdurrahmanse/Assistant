import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Copyright from '@/features/analytics/internals/components/Copyright';
import ChartUserByCountry from '@/features/analytics/ChartUserByCountry';
import CustomizedTreeView from '@/features/analytics/CustomizedTreeView';
import CustomizedDataGrid from '@/features/analytics/CustomizedDataGrid';
import HighlightedCard from '@/features/analytics/HighlightedCard';
import PageViewsBarChart from '@/features/analytics/PageViewsBarChart';
import SessionsChart from '@/features/analytics/SessionsChart';
import StatCard from '@/features/analytics/StatCard';
import { useAnalyticsQuery } from './hooks/queries/useAnalyticsQuery';

export default function MainGrid() {
  const { data, isLoading } = useAnalyticsQuery();

  if (isLoading || !data) {
    return <Skeleton variant="rectangular" width="100%" height={800} />;
  }

  const { overview } = data;

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {overview.title}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {overview.statCards.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {overview.detailsTitle}
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row', lg: 'column' }}
            sx={{ gap: 2 }}
          >
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
