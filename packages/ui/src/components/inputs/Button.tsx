import * as React from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  isLoading,
  disabled,
  children,
  sx,
  ...props
}, ref) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          '&:hover': { bgcolor: 'primary.dark' },
        };
      case 'secondary':
        return {
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          '&:hover': { bgcolor: 'secondary.dark' },
        };
      case 'outline':
        return {
          bgcolor: 'transparent',
          color: 'text.primary',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': { bgcolor: 'action.hover' },
        };
      case 'ghost':
        return {
          bgcolor: 'transparent',
          color: 'text.primary',
          '&:hover': { bgcolor: 'action.hover' },
        };
      case 'glass':
        return {
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          border: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
        };
      default:
        return {};
    }
  };

  return (
    <MuiButton
      ref={ref}
      disabled={disabled || isLoading}
      sx={{
        borderRadius: '12px',
        textTransform: 'none',
        fontWeight: 600,
        ...getVariantStyles(),
        ...sx,
      }}
      {...props}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : children}
    </MuiButton>
  );
});

Button.displayName = 'Button';
