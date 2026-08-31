import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export const FeaturesContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
}));

export const FeaturesHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

export const FeaturesLayoutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
  },
}));

export const DesktopFeatureList = styled(Box)(({ theme }) => ({
  display: 'none',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

export const FeatureItemButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  padding: theme.spacing(2),
  height: '100%',
  width: '100%',
  backgroundColor: selected ? (theme.vars || theme).palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
  },
}));

export const FeatureItemContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  textAlign: 'left',
  textTransform: 'none',
  color: selected ? (theme.vars || theme).palette.text.primary : (theme.vars || theme).palette.text.secondary,
}));

export const DesktopImageWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  width: '100%',
  height: 'var(--items-image-height)',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

export const DesktopImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'none',
  pointerEvents: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

export const FeatureImage = styled(Box)(({ theme }) => ({
  margin: 'auto',
  width: 420,
  height: 500,
  backgroundSize: 'contain',
  backgroundImage: 'var(--items-imageLight)',
  ...theme.applyStyles('dark', {
    backgroundImage: 'var(--items-imageDark)',
  }),
}));
