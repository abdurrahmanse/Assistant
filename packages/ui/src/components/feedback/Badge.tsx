import * as React from 'react';
import Chip, { type ChipProps } from '@mui/material/Chip';

export interface BadgeProps extends Omit<ChipProps, 'variant' | 'color'> {
  variant?: 'solid' | 'outline' | 'subtle';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({
  variant = 'solid',
  color = 'primary',
  sx,
  ...props
}, ref) => {
  return (
    <Chip
      ref={ref}
      color={color}
      variant={variant === 'outline' ? 'outlined' : 'filled'}
      sx={{
        fontWeight: 800,
        borderRadius: '8px',
        ...(variant === 'subtle' && {
          bgcolor: `${color}.light`,
          color: `${color}.dark`,
        }),
        ...sx
      }}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';
