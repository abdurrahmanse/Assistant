import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';

const SmartCounter = ({ text }: { text: string }) => {
  const match = text.match(/^([^0-9.-]*)([0-9.]+)(.*)$/);
  if (!match) return <>{text}</>;
  const [_, prefix, num, suffix] = match;
  return (
    <CountUp 
      start={0} 
      end={parseFloat(num)} 
      decimals={num.includes('.') ? 1 : 0} 
      duration={2.5} 
      prefix={prefix} 
      suffix={suffix} 
      enableScrollSpy 
      scrollSpyOnce 
    />
  );
};


export interface AboutStatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

const statIcons = [<Users size={32} color="var(--template-palette-primary-main)" />, <Globe size={32} color="var(--template-palette-primary-main)" />, <Award size={32} color="var(--template-palette-primary-main)" />, <TrendingUp size={32} color="var(--template-palette-primary-main)" />];

export function AboutStats({ stats }: AboutStatsProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 6 }}>
      {stats.map((s, i) => (
        <Grid size={{ xs: 6, md: 3 }} key={s.label}>
          <Box sx={{ 
            textAlign: 'center', p: 3, 
            borderRadius: '24px', 
            bgcolor: 'rgba(255,255,255,0.6)',
backdropFilter: 'blur(24px)',
            border: '2px solid', 
            borderColor: 'rgba(0,0,0,0.1)',
'[data-mui-color-scheme="dark"] &': { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' },
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              transform: 'translateY(-6px) rotate(1deg)',
              boxShadow: '6px 6px 0px rgba(99,102,241,1)',
              borderColor: 'primary.main',
            }
          }}>
            <Box sx={{ mb: 2 }}>{statIcons[i % statIcons.length]}</Box>
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main' }}><SmartCounter text={s.value} /></Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>{s.label}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

