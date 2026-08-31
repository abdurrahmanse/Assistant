import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box, { type BoxProps } from '@mui/material/Box';

/**
 * A reusable flexbox container that centers its children horizontally and vertically.
 */
export const FlexCenter: React.FC<BoxProps> = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * A reusable flexbox container with space-between alignment.
 */
export const FlexBetween: React.FC<BoxProps> = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

/**
 * Visually hides content for accessibility (screen readers) while removing it from the document flow.
 */
export const VisuallyHidden: React.FC<React.HTMLAttributes<HTMLSpanElement>> = styled('span')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});
