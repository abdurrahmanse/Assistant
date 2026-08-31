import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const FAQContainer = styled(Container)(({ theme }) => ({
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

export const FAQHeader = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.primary,
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
    textAlign: 'center',
  },
}));

export const FAQBox = styled(Box)({
  width: '100%',
});

export const FAQDetailText = styled(Typography)(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '70%',
  },
}));
