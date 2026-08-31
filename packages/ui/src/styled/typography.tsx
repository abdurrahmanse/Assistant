import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography, { type TypographyProps } from '@mui/material/Typography';

/**
 * A reusable typography component that applies the primary brand gradient to text.
 */
export const GradientText: React.FC<TypographyProps> = styled(Typography)(({ theme }) => ({
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  ...theme.applyStyles('dark', {
    backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  }),
}));

/**
 * Muted secondary text for descriptions and captions.
 */
export const MutedText: React.FC<TypographyProps> = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));
