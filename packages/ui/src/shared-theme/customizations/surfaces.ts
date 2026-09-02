import { alpha, type Components, type Theme } from '@mui/material/styles';
import { gray, brand } from '../themePrimitives';

export const surfacesCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 4,
        overflow: 'clip',
        backgroundColor: (theme.vars || theme).palette.background.default,
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        ':before': {
          backgroundColor: 'transparent',
        },
        '&:not(:last-of-type)': {
          borderBottom: 'none',
        },
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        borderRadius: 8,
        '&:hover': { backgroundColor: gray[50] },
        '&:focus-visible': { backgroundColor: 'transparent' },
        ...theme.applyStyles('dark', {
          '&:hover': { backgroundColor: gray[800] },
        }),
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { mb: 20, border: 'none' },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 12,
        border: '1px solid',
        borderColor: alpha(gray[300], 0.4),
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        backgroundImage: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ...theme.applyStyles('dark', {
          backgroundColor: '#0b0f19',
          borderColor: alpha(gray[700], 0.6),
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        }),
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 24,
          gap: 16,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: theme.palette.background.paper,
          borderRadius: 12,
          border: '1px solid',
          borderColor: alpha(gray[300], 0.6),
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '2px',
            background: 'transparent',
            transition: 'background 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
            borderColor: alpha(brand[400], 0.4),
            '&::before': {
              background: `linear-gradient(90deg, ${brand[400]}, ${brand[600]})`,
            }
          },
          ...theme.applyStyles('dark', {
            backgroundColor: '#0b0f19',
            borderColor: alpha(gray[700], 0.8),
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            '&:hover': {
              boxShadow: `0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px ${alpha(brand[500], 0.1)}`,
              borderColor: alpha(brand[500], 0.5),
            }
          }),
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                }
              },
            },
          ],
        };
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: { padding: 0 },
      title: {
        fontFamily: '"Rajdhani", sans-serif',
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: { padding: 0 },
    },
  },
};
