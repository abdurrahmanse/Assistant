import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export const HeroWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
  ...theme.applyStyles('dark', {
    backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
  }),
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(12),
  },
}));

export const HeroContentStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 'clamp(3rem, 10vw, 3.5rem)',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: (theme.vars || theme).palette.text.secondary,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));

export const EmailFormStack = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '350px',
  },
}));
