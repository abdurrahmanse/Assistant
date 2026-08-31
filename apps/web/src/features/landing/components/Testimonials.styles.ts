import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export const TestimonialsContainer = styled(Container)(({ theme }) => ({
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

export const TestimonialCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
});

export const CardFooterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
