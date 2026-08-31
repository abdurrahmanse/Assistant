import * as React from 'react';
import { Settings, Wrench, ThumbsUp, Wand2, Headset, BarChart3 } from 'lucide-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import {
  HighlightsWrapper,
  HighlightsContainer,
  HighlightsHeader,
  HighlightCard,
} from './Highlights.styles';
import { useLandingData } from '../hooks/useLandingData';

// Map string icon names from mock API to lucide components
const iconMap: Record<string, React.ReactNode> = {
  Settings: <Settings size={20} />,
  Wrench: <Wrench size={20} />,
  ThumbsUp: <ThumbsUp size={20} />,
  Wand2: <Wand2 size={20} />,
  Headset: <Headset size={20} />,
  BarChart3: <BarChart3 size={20} />
};

export default function Highlights() {
  const { data, isLoading } = useLandingData();

  if (isLoading || !data) {
    return (
      <HighlightsWrapper id="highlights">
        <HighlightsContainer>
          <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 2, bgcolor: 'grey.700' }} />
          <Skeleton variant="text" width="60%" height={24} sx={{ mb: 4, bgcolor: 'grey.700' }} />
          <Grid container spacing={2} sx={{ width: '100%' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Skeleton variant="rectangular" width="100%" height={150} sx={{ bgcolor: 'grey.700' }} />
              </Grid>
            ))}
          </Grid>
        </HighlightsContainer>
      </HighlightsWrapper>
    );
  }

  const { highlights } = data;

  return (
    <HighlightsWrapper id="highlights">
      <HighlightsContainer>
        <HighlightsHeader>
          <Typography component="h2" variant="h4" gutterBottom>
            {highlights.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            {highlights.subtitle}
          </Typography>
        </HighlightsHeader>
        <Grid container spacing={2}>
          {highlights.items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <HighlightCard>
                <Stack direction="column" spacing={1} useFlexGap sx={{ height: '100%' }}>
                  <Box sx={{ opacity: '50%' }}>{iconMap[item.iconName]}</Box>
                  <div>
                    <Typography gutterBottom sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                      {item.description}
                    </Typography>
                  </div>
                </Stack>
              </HighlightCard>
            </Grid>
          ))}
        </Grid>
      </HighlightsContainer>
    </HighlightsWrapper>
  );
}
