import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export const TestimonialsContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(16),
    gap: theme.spacing(6),
  },
}));

export const TestimonialsHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
    textAlign: 'center',
  },
}));

export const StyledGridItem = styled(Grid)({
  display: 'flex',
});

export const TestimonialCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
  borderRadius: '24px',
  border: '2px solid',
  borderColor: 'rgba(0,0,0,0.1)',
  ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)' }),
  backgroundColor: 'rgba(255,255,255,0.6)',
  ...theme.applyStyles('dark', { backgroundColor: 'rgba(20,20,25,0.6)' }),
  backdropFilter: 'blur(24px)',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&:hover': {
    transform: 'translateY(-6px) rotate(1deg)',
    boxShadow: '8px 8px 0px rgba(236,72,153,1)',
    borderColor: theme.palette.primary.main,
  }
}));

export const CardFooterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
