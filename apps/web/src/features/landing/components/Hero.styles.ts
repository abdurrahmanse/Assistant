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

import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(168, 85, 247, 0); }
  100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
`;

export const TracksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(8),
  width: '100%',
}));

export const TrackCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3),
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.divider}`,
  minWidth: '220px',
  flex: '1 1 0',
  animation: `${float} 6s ease-in-out infinite`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    animationPlayState: 'paused',
    boxShadow: theme.shadows[8],
  },
  '&:nth-of-type(1)': { animationDelay: '0s' },
  '&:nth-of-type(2)': { animationDelay: '1s' },
  '&:nth-of-type(3)': { animationDelay: '2s' },
  ...theme.applyStyles('dark', {
    background: 'rgba(9, 9, 11, 0.6)',
  }),
}));

export const TrackIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  background: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.primary.main}40)`,
  color: theme.palette.primary.main,
  animation: `${pulseGlow} 2s infinite`,
  ...theme.applyStyles('dark', {
    color: theme.palette.primary.light,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}40, ${theme.palette.primary.main}60)`,
  }),
}));
