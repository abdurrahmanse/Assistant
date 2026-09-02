import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Card, CardContent } from '@repo/ui';
import Grid from '@mui/material/Grid';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

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
  marginBottom: theme.spacing(4),
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
  borderRadius: '16px',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.5),
  ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2) }),
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 4px 20px rgba(0,0,0,0.02)`,
  position: 'relative',
  '&::after': {
    content: '""', position: 'absolute', inset: 0,
    borderRadius: '16px', border: '1px solid transparent',
    transition: 'border-color 0.3s', pointerEvents: 'none'
  },
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: `0 12px 32px ${alpha(brand[500], 0.1)}`,
    '&::after': { borderColor: alpha(brand[400], 0.4) },
  }
}));

export const CardFooterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
