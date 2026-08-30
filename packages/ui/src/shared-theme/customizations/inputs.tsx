import { alpha, type Theme, type Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { svgIconClasses } from '@mui/material/SvgIcon';
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { gray, brand } from '../themePrimitives';

export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: () => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${'rgba(168, 85, 247, 0.5)'}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: () => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        fontWeight: 700,
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translate(-2px, -2px)',
        },
        '&:active': {
          transform: 'translate(2px, 2px)',
        },
        variants: [
          {
            props: { size: 'small' },
            style: { height: '2.25rem', padding: '8px 12px' },
          },
          {
            props: { size: 'medium' },
            style: { height: '2.5rem' },
          },
          {
            props: { color: 'primary', variant: 'contained' },
            style: {
              color: '#ffffff',
              backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899, #f43f5e)',
              backgroundSize: '200% 200%',
              animation: 'aurora 4s ease infinite',
              border: '2px solid #000',
              boxShadow: '4px 4px 0px #000',
              '&:hover': {
                boxShadow: '6px 6px 0px #000',
                backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899, #f43f5e)',
              },
              '&:active': {
                boxShadow: '2px 2px 0px #000',
              },
              ...theme.applyStyles('dark', {
                border: '2px solid #fff',
                boxShadow: '4px 4px 0px #fff',
                '&:hover': { boxShadow: '6px 6px 0px #fff' },
                '&:active': { boxShadow: '2px 2px 0px #fff' },
              }),
            },
          },
          {
            props: { color: 'secondary', variant: 'contained' },
            style: {
              color: 'white',
              backgroundColor: brand[300],
              backgroundImage: 'none',
              border: '2px solid #000',
              boxShadow: '4px 4px 0px #000',
              '&:hover': {
                backgroundColor: brand[400],
                boxShadow: '6px 6px 0px #000',
              },
              '&:active': {
                boxShadow: '2px 2px 0px #000',
              },
              ...theme.applyStyles('dark', {
                border: '2px solid #fff',
                boxShadow: '4px 4px 0px #fff',
                '&:hover': { boxShadow: '6px 6px 0px #fff' },
                '&:active': { boxShadow: '2px 2px 0px #fff' },
              }),
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              border: '2px solid #000',
              boxShadow: '4px 4px 0px #000',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: alpha(gray[200], 0.3),
                border: '2px solid #000',
                boxShadow: '6px 6px 0px #000',
              },
              '&:active': {
                boxShadow: '2px 2px 0px #000',
              },
              ...theme.applyStyles('dark', {
                border: '2px solid #fff',
                boxShadow: '4px 4px 0px #fff',
                '&:hover': { border: '2px solid #fff', boxShadow: '6px 6px 0px #fff' },
                '&:active': { boxShadow: '2px 2px 0px #fff' },
              }),
            },
          },
          {
            props: { color: 'primary', variant: 'text' },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              '&:hover': { backgroundColor: alpha(gray[200], 0.3) },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              color: gray[600],
              '&:hover': { backgroundColor: alpha(gray[200], 0.3) },
              ...theme.applyStyles('dark', {
                color: gray[50],
              }),
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: () => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: 0,
        color: (theme.vars || theme).palette.text.primary,
        border: '1px solid ',
        borderColor: gray[200],
        backgroundColor: alpha(gray[50], 0.3),
        '&:hover': {
          backgroundColor: gray[100],
          borderColor: gray[300],
        },
        '&:active': {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
          borderColor: gray[700],
          '&:hover': {
            backgroundColor: gray[900],
            borderColor: gray[600],
          },
          '&:active': {
            backgroundColor: gray[900],
          },
        }),
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              width: '2.25rem',
              height: '2.25rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' },
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              width: '2.5rem',
              height: '2.5rem',
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: () => ({
        borderRadius: '10px',
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500],
        },
        ...theme.applyStyles('dark', {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: '#fff',
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
        }),
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: () => ({
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 600,
        ...theme.applyStyles('dark', {
          color: gray[400],
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
          },
        }),
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: (
        <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'hsla(210, 0%, 0%, 0.0)' }} />
      ),
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
    },
    styleOverrides: {
      root: () => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: '1px solid ',
        borderColor: alpha(gray[300], 0.8),
        boxShadow: '0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset',
        backgroundColor: alpha(gray[100], 0.4),
        transition: 'border-color, background-color, 120ms ease-in',
        '&:hover': {
          borderColor: brand[300],
        },
        '&.Mui-focusVisible': {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: '2px',
          borderColor: brand[400],
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: brand[600],
          },
        },
        ...theme.applyStyles('dark', {
          borderColor: alpha(gray[700], 0.8),
          boxShadow: '0 0 0 1.5px hsl(210, 0%, 0%) inset',
          backgroundColor: alpha(gray[900], 0.8),
          '&:hover': {
            borderColor: brand[300],
          },
          '&.Mui-focusVisible': {
            borderColor: brand[400],
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: '2px',
          },
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none',
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: { padding: 0 },
      root: () => ({
        padding: '8px 12px',
        color: (theme.vars || theme).palette.text.primary,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: '2px solid #000',
        backgroundColor: (theme.vars || theme).palette.background.default,
        transition: 'all 0.2s ease',
        boxShadow: '2px 2px 0px #000',
        '&:hover': {
          transform: 'translate(-1px, -1px)',
          boxShadow: '4px 4px 0px #000',
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: 'none',
          borderColor: '#ec4899',
          boxShadow: '4px 4px 0px #000',
        },
        ...theme.applyStyles('dark', {
          border: '2px solid #fff',
          boxShadow: '2px 2px 0px #fff',
          '&:hover': {
            boxShadow: '4px 4px 0px #fff',
          },
          [`&.${outlinedInputClasses.focused}`]: {
            borderColor: '#ec4899',
            boxShadow: '4px 4px 0px #fff',
          },
        }),
        variants: [
          { props: { size: 'small' }, style: { height: '2.25rem' } },
          { props: { size: 'medium' }, style: { height: '2.5rem' } },
        ],
      }),
      notchedOutline: { border: 'none' },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: () => ({
        color: (theme.vars || theme).palette.grey[500],
        ...theme.applyStyles('dark', {
          color: (theme.vars || theme).palette.grey[400],
        }),
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: () => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
};
