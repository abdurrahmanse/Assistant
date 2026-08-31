import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';

export const HighlightsWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  backgroundColor: (theme.vars || theme).palette.background.default,
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(16),
  },
}));

export const HighlightsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
  },
}));

export const HighlightsHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

export const HighlightCard = styled(Stack)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(4),
  minHeight: '100%',
  borderRadius: '24px',
  border: '2px solid',
  borderColor: 'rgba(0,0,0,0.1)',
  ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)' }),
  backgroundColor: 'rgba(255,255,255,0.6)',
  ...theme.applyStyles('dark', { backgroundColor: 'rgba(20,20,25,0.6)' }),
  backdropFilter: 'blur(24px)',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&:hover': {
    transform: 'translateY(-6px) rotate(-1deg)',
    boxShadow: '8px 8px 0px rgba(16,185,129,1)',
    borderColor: theme.palette.primary.main,
  }
}));
