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
  padding: theme.spacing(3),
  minHeight: '100%',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main,
  },
}));
