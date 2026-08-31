import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import { Settings2, Wrench, ThumbsUp, Sparkles, Headphones, BarChart3, Zap } from 'lucide-react';
import Box from '@mui/material/Box';
import {
  HighlightsWrapper,
  HighlightsContainer,
  HighlightsHeader,
  HighlightCard,
} from './styles';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';

const iconMap: Record<string, React.ReactNode> = {
  Settings:  <Settings2 size={24} />,
  Wrench:    <Wrench size={24} />,
  ThumbsUp:  <ThumbsUp size={24} />,
  Wand2:     <Sparkles size={24} />,
  Headset:   <Headphones size={24} />,
  BarChart3: <BarChart3 size={24} />,
};

export default function Highlights() {
  const { data, isLoading } = useLandingQuery();

  if (isLoading || !data) {
    return (
      <HighlightsWrapper id="highlights">
        <HighlightsContainer>
        <Container maxWidth="lg">
          <Skeleton variant="rectangular" width="40%" height={40} />
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Skeleton variant="rectangular" height={150} sx={{ borderRadius: '16px' }} />
              </Grid>
            ))}
          </Grid>
        </Container>
        </HighlightsContainer>
      </HighlightsWrapper>
    );
  }

  const { highlights } = data;

  return (
    <HighlightsWrapper id="highlights">
      <HighlightsContainer>
        <Container maxWidth="lg">
        <HighlightsHeader>
          <Typography component="h2" variant="h2" gutterBottom sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Zap size={40} color="#f59e0b" /> {highlights.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {highlights.subtitle}
          </Typography>
        </HighlightsHeader>
        <Grid container spacing={2}>
          {highlights.items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <HighlightCard direction="column" spacing={1.5} useFlexGap>
                <Box sx={{ color: 'primary.main' }}>{iconMap[item.iconName]}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </div>
              </HighlightCard>
            </Grid>
          ))}
        </Grid>
        </Container>
      </HighlightsContainer>
    </HighlightsWrapper>
  );
}
