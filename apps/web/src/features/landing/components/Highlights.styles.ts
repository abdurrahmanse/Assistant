import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Stack';

export const HighlightsWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(16),
  },
}));

export const HighlightsContainer = styled(Container)(({ theme }) => ({
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
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
    textAlign: 'center',
  },
}));

export const HighlightCard = styled(Card)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(3),
  height: '100%',
  borderColor: 'hsla(220, 25%, 25%, 0.3)',
  backgroundColor: theme.palette.grey[800],
}));
