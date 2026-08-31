import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Award, BookOpen, Globe, Target, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={26} />,
  Users: <Users size={26} />,
  BookOpen: <BookOpen size={26} />,
  TrendingUp: <TrendingUp size={26} />,
  Award: <Award size={26} />,
  Globe: <Globe size={26} />,
};

export interface AboutValuesProps {
  heading: string;
  subheading: string;
  values: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export function AboutValues({ heading, subheading, values }: AboutValuesProps) {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, textAlign: 'center' }}>{heading}</Typography>
      <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>{subheading}</Typography>
      <Grid container spacing={3} sx={{ mb: 12 }}>
        {values.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Box sx={{
              p: 4, height: '100%', borderRadius: '20px',
              bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
              transition: 'all 0.2s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 4, borderColor: 'primary.main' },
            }}>
              <Box sx={{ color: 'primary.main', mb: 2 }}>{iconMap[item.icon]}</Box>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

