import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const PricingContainer = styled(Container)(({ theme }) => ({
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

export const PricingHeader = styled(Box)(({ theme }) => ({
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

export const PricingGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

export const PricingCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isProfessional',
})<{ isProfessional?: boolean }>(({ theme, isProfessional }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  ...(isProfessional && {
    border: 'none',
    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
    ...theme.applyStyles('dark', {
      background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
    }),
  }),
}));

export const CardHeaderBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isProfessional',
})<{ isProfessional?: boolean }>(({ theme, isProfessional }) => ({
  marginBottom: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(2),
  color: isProfessional ? theme.palette.grey[100] : undefined,
}));

export const CardPriceBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isProfessional',
})<{ isProfessional?: boolean }>(({ theme, isProfessional }) => ({
  display: 'flex',
  alignItems: 'baseline',
  color: isProfessional ? theme.palette.grey[50] : undefined,
}));

export const FeatureLineBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
}));

export const FeatureLineText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isProfessional',
})<{ isProfessional?: boolean }>(({ theme, isProfessional }) => ({
  color: isProfessional ? theme.palette.grey[50] : undefined,
}));

import { CheckCircle2 } from 'lucide-react';
export const StyledCheckCircle = styled(CheckCircle2, {
  shouldForwardProp: (prop) => prop !== 'isProfessional',
})<{ isProfessional?: boolean }>(({ theme, isProfessional }) => ({
  width: 20,
  color: isProfessional ? theme.palette.primary.light : theme.palette.primary.main,
}));
