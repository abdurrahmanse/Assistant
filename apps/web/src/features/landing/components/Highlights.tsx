import { Settings, Wrench, ThumbsUp, Wand2, Headset, BarChart3 } from 'lucide-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  HighlightsWrapper,
  HighlightsContainer,
  HighlightsHeader,
  HighlightCard,
} from './Highlights.styles';

const items = [
  {
    icon: <Settings size={20} />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbsUp size={20} />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <Wand2 size={20} />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <Headset size={20} />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <HighlightsWrapper id="highlights">
      <HighlightsContainer>
        <HighlightsHeader>
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </HighlightsHeader>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <HighlightCard>
                <Stack direction="column" spacing={1} useFlexGap sx={{ height: '100%' }}>
                  <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
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
