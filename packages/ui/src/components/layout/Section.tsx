import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Container, { type ContainerProps } from '@mui/material/Container';

export interface SectionProps extends Omit<BoxProps, 'maxWidth'> {
  container?: boolean;
  maxWidth?: ContainerProps['maxWidth'];
  noPadding?: boolean;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(({
  container = true,
  maxWidth = 'lg',
  noPadding = false,
  sx,
  children,
  ...props
}, ref) => {
  const content = container ? (
    <Container maxWidth={maxWidth}>{children}</Container>
  ) : children;

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: noPadding ? 0 : { xs: 8, md: 12 },
        ...sx,
      }}
      {...props}
    >
      {content}
    </Box>
  );
});

Section.displayName = 'Section';
