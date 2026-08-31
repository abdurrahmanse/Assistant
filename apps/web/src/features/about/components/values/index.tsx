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
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}><Target size={36} color="#ec4899" /> {heading}</Typography>
      <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>{subheading}</Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {values.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Box sx={{
              p: 4, height: '100%', borderRadius: '24px',
              bgcolor: 'rgba(255,255,255,0.6)',
              '[data-mui-color-scheme="dark"] &': { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' },
              backdropFilter: 'blur(24px)', border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '&:hover': { transform: 'translateY(-6px) rotate(-1deg)', boxShadow: '6px 6px 0px rgba(236,72,153,1)', borderColor: 'primary.main' },
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

