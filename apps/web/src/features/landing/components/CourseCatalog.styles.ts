import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';

export const CatalogWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(12, 0),
  backgroundColor: (theme.vars || theme).palette.background.default,
}));

export const CatalogContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
}));

export const CourseGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

// Glassmorphism + Neo-Brutalist Hover
export const CourseCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(16px)',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: `2px solid ${theme.palette.text.primary}`,
    boxShadow: `6px 6px 0px ${theme.palette.text.primary}`,
  },
  ...theme.applyStyles('dark', {
    background: 'rgba(20, 20, 25, 0.6)',
    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
      boxShadow: `6px 6px 0px ${theme.palette.primary.main}`,
    },
  }),
}));

export const CourseBadge = styled(Chip)(({ theme }) => ({
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  borderRadius: '4px', // Slightly neo-brutalist blocky look
  height: '24px',
}));

export const PriceTag = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));
