import * as React from 'react';
import Typography, { type TypographyProps } from '@mui/material/Typography';

export interface HeadingProps extends Omit<TypographyProps, 'variant'> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
}

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(({
  level,
  gradient,
  sx,
  ...props
}, ref) => {
  const variant = `h${level}` as TypographyProps['variant'];
  
  const gradientStyles = gradient ? {
    background: 'linear-gradient(90deg, var(--template-palette-primary-main) 0%, var(--template-palette-secondary-main) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  } : {};

  return (
    <Typography
      ref={ref}
      variant={variant}
      sx={{
        fontWeight: 900,
        fontFamily: level <= 2 ? "'Kalam', cursive" : undefined,
        ...gradientStyles,
        ...sx
      }}
      {...props}
    />
  );
});

Heading.displayName = 'Heading';
