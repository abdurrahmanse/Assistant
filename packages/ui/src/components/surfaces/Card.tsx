import * as React from 'react';
import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card';
import Box, { type BoxProps } from '@mui/material/Box';

export interface CardProps extends MuiCardProps {
  glass?: boolean;
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  glass,
  hoverable,
  sx,
  ...props
}, ref) => {
  return (
    <MuiCard
      ref={ref}
      sx={{
        borderRadius: '24px',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: glass ? 'rgba(255,255,255,0.6)' : 'background.paper',
        backdropFilter: glass ? 'blur(24px)' : undefined,
        '[data-mui-color-scheme="dark"] &': {
          bgcolor: glass ? 'rgba(20,20,25,0.6)' : 'background.paper',
        },
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...(hoverable && {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderColor: 'primary.main',
          }
        }),
        ...sx
      }}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export const CardContent = React.forwardRef<HTMLDivElement, BoxProps>(({ sx, ...props }, ref) => (
  <Box ref={ref} sx={{ p: 3, ...sx }} {...props} />
));

CardContent.displayName = 'CardContent';
