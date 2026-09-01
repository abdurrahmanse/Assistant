import { type Components, type Theme } from '@mui/material/styles';
import { gray } from '../themePrimitives';

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
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 24,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
        ...theme.applyStyles('dark', {
          backgroundColor: 'rgba(20, 20, 25, 0.6)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
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
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // Playful spring animation
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 24,
          border: '2px solid',
          borderColor: 'rgba(0, 0, 0, 0.05)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)', // Base minimalism shadow
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
          ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(20, 20, 25, 0.65)',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }
          }),
          variants: [
            {
              props: {
                variant: 'outlined',
              },
              style: {
                border: '2px solid',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: 'none',
                background: 'rgba(255, 255, 255, 0.5)',
                ...theme.applyStyles('dark', {
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  background: 'rgba(20, 20, 25, 0.5)',
                }),
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
      root: {
        padding: 0,
      },
      title: {
        fontVariant: 'small-caps',
        textTransform: 'lowercase',
        fontSize: 'clamp(16px, 2vw, 22px)',
        lineHeight: 1.2,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};
