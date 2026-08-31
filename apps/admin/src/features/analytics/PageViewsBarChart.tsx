import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import { useAnalyticsQuery } from './hooks/queries/useAnalyticsQuery';
import Skeleton from '@mui/material/Skeleton';

export default function PageViewsBarChart() {
  const theme = useTheme();
  const { data, isLoading } = useAnalyticsQuery();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  if (isLoading || !data) {
    return <Skeleton variant="rectangular" width="100%" height={300} />;
  }

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {data.charts.pageViewsTitle}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              1.3M
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Page views and downloads for the last 6 months
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={
            [
              {
                scaleType: 'band',
                categoryGapRatio: 0.5,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              },
            ] as any
          }
          series={[
            {
              id: 'page-views',
              label: 'Page views',
              data: [3942, 4202, 4192, 4013, 5201, 5801, 6200],
              stack: 'A',
            },
            {
              id: 'downloads',
              label: 'Downloads',
              data: [2092, 2221, 2011, 2583, 3110, 3105, 3012],
              stack: 'A',
            },
            {
              id: 'conversions',
              label: 'Conversions',
              data: [422, 382, 312, 302, 403, 392, 591],
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }} hideLegend
        />
      </CardContent>
    </Card>
  );
}
