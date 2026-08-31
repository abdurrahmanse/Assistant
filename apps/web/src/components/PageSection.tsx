import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { ContainerProps } from '@mui/material/Container';

export interface PageSectionProps extends BoxProps {
  children: React.ReactNode;
  containerProps?: ContainerProps;
}

export function PageSection({ children, containerProps, ...boxProps }: PageSectionProps) {
  return (
    <Box component="section" {...boxProps}>
      <Container maxWidth="lg" {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}
