import * as React from 'react';
import Typography, { type TypographyProps } from '@mui/material/Typography';

export interface TextProps extends Omit<TypographyProps, 'variant'> {
  variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption';
  muted?: boolean;
  bold?: boolean;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(({
  variant = 'body1',
  muted,
  bold,
  sx,
  ...props
}, ref) => {
  return (
    <Typography
      ref={ref}
      variant={variant}
      color={muted ? 'text.secondary' : undefined}
      sx={{
        fontWeight: bold ? 700 : undefined,
        ...sx
      }}
      {...props}
    />
  );
});

Text.displayName = 'Text';
