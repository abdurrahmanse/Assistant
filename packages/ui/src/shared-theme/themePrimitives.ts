/* eslint-disable @typescript-eslint/no-empty-object-type */
import { alpha, createTheme, type PaletteMode, type Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
  interface PaletteColor extends ColorRange {}
  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();
const customShadows: Shadows = [...defaultTheme.shadows];

// Tech-inspired color palette (Electric Blue, Deep Navy, Neon Purple, vibrant Cyan)
export const brand = {
  50: '#e0f7ff',
  100: '#b3e8ff',
  200: '#80d8ff',
  300: '#4dc8ff',
  400: '#26baff',
  500: '#00a8ff', // Electric Blue
  600: '#0097e6',
  700: '#0083c7',
  800: '#0070a8',
  900: '#004c7a',
};

// Dark Navy / Slate for grayscale
export const gray = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

export const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
};

export const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
};

export const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[700],
        contrastText: '#fff',
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[300],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[300],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: '#ffffff',
        paper: '#f8fafc', // Light gray-blue
      },
      text: {
        primary: gray[900],
        secondary: gray[600],
        warning: orange[500],
      },
      action: {
        hover: alpha(gray[200], 0.5),
        selected: `${alpha(gray[200], 0.8)}`,
      },
      baseShadow: 'rgba(15, 23, 42, 0.08) 0px 4px 16px 0px, rgba(15, 23, 42, 0.04) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: '#fff',
        light: brand[300],
        main: brand[400],
        dark: brand[600],
      },
      info: {
        contrastText: brand[100],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: '#030712', // Deep dark navy almost black
        paper: '#0b0f19', // Slightly lighter dark
      },
      text: {
        primary: '#f8fafc',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow: 'rgba(0, 0, 0, 0.8) 0px 4px 16px 0px, rgba(0, 0, 0, 0.9) 0px 8px 16px -5px',
    },
  },
};

export const typography = {
  fontFamily: '"Rajdhani", sans-serif',
  h1: { fontFamily: '"Rajdhani", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' },
  h2: { fontFamily: '"Rajdhani", sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' },
  h3: { fontFamily: '"Rajdhani", sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
  h4: { fontFamily: '"Rajdhani", sans-serif', fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
  h5: { fontFamily: '"Rajdhani", sans-serif', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em' },
  h6: { fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em' },
  subtitle1: { fontFamily: '"Rajdhani", sans-serif', fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0em' },
  subtitle2: { fontFamily: '"Rajdhani", sans-serif', fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '0em' },
  body1: { fontFamily: '"Rajdhani", sans-serif', fontSize: defaultTheme.typography.pxToRem(16), fontWeight: 500, letterSpacing: '0em' },
  body2: { fontFamily: '"Rajdhani", sans-serif', fontSize: defaultTheme.typography.pxToRem(14), fontWeight: 500, letterSpacing: '0em' },
  caption: { fontFamily: '"Rajdhani", sans-serif', fontSize: defaultTheme.typography.pxToRem(12), fontWeight: 600 },
  overline: { fontFamily: '"Rajdhani", sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' },
};

export const shape = {
  borderRadius: 6, // Slightly sharper corners for technical feel
};

// @ts-expect-error - MUI type mismatch
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
