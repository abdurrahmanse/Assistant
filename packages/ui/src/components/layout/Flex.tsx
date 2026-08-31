import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

export interface FlexProps extends BoxProps {
  center?: boolean;
  column?: boolean;
  gap?: number | string;
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(({
  center,
  column,
  gap,
  justify,
  align,
  wrap,
  sx,
  ...props
}, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: column ? 'column' : 'row',
        alignItems: align || (center ? 'center' : undefined),
        justifyContent: justify || (center ? 'center' : undefined),
        flexWrap: wrap,
        gap,
        ...sx,
      }}
      {...props}
    />
  );
});

Flex.displayName = 'Flex';
