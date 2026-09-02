import * as React from 'react';
import { alpha, type Components, type Theme } from '@mui/material/styles';
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
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:active': {
          transform: 'scale(0.97)',
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        fontFamily: '"Rajdhani", sans-serif',
        '&:active': {
          transform: 'scale(0.97)',
        },
        variants: [
          {
            props: { size: 'small' },
            style: { padding: '6px 16px', fontSize: '0.875rem' },
          },
          {
            props: { size: 'medium' },
            style: { padding: '8px 24px' },
          },
          {
            props: { size: 'large' },
            style: { padding: '12px 32px', fontSize: '1rem' },
          },
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              background: `linear-gradient(135deg, ${brand[400]}, ${brand[600]})`,
              color: '#fff',
              border: '1px solid transparent',
              boxShadow: `0 4px 14px 0 ${alpha(brand[500], 0.39)}`,
              '&:hover': {
                background: `linear-gradient(135deg, ${brand[300]}, ${brand[500]})`,
                boxShadow: `0 6px 20px rgba(0, 118, 255, 0.23)`,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: theme.palette.text.primary,
              border: `1px solid ${alpha(gray[300], 0.8)}`,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: alpha(gray[100], 0.5),
                borderColor: gray[400],
              },
              ...theme.applyStyles('dark', {
                border: `1px solid ${alpha(gray[700], 0.8)}`,
                '&:hover': {
                  backgroundColor: alpha(gray[800], 0.5),
                  borderColor: gray[600],
                },
              }),
            },
          },
          {
            props: { variant: 'text' },
            style: {
              color: theme.palette.text.primary,
              '&:hover': { backgroundColor: alpha(gray[200], 0.3) },
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: 8,
        color: theme.palette.text.primary,
        border: `1px solid ${alpha(gray[200], 0.5)}`,
        backgroundColor: 'transparent',
        transition: 'all 0.2s',
        '&:hover': {
          backgroundColor: alpha(gray[100], 0.5),
          borderColor: gray[300],
        },
        ...theme.applyStyles('dark', {
          border: `1px solid ${alpha(gray[800], 0.5)}`,
          '&:hover': {
            backgroundColor: alpha(gray[800], 0.5),
            borderColor: gray[700],
          },
        }),
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '8px 16px',
        textTransform: 'none',
        fontWeight: 500,
        border: 'none',
        color: theme.palette.text.secondary,
        [`&.${toggleButtonClasses.selected}`]: {
          color: brand[500],
          backgroundColor: alpha(brand[500], 0.1),
        },
        ...theme.applyStyles('dark', {
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
            backgroundColor: alpha(brand[300], 0.1),
          },
        }),
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'transparent' }} />,
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 4,
        border: `1px solid ${alpha(gray[300], 0.8)}`,
        backgroundColor: alpha(gray[100], 0.4),
        transition: 'all 120ms ease-in',
        '&:hover': {
          borderColor: brand[300],
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: brand[500],
          borderColor: brand[500],
        },
        ...theme.applyStyles('dark', {
          borderColor: alpha(gray[700], 0.8),
          backgroundColor: alpha(gray[900], 0.8),
          '&:hover': {
            borderColor: brand[300],
          },
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: { border: 'none' },
      input: {
        '&::placeholder': { opacity: 0.7, color: gray[500] },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: { padding: 0 },
      root: ({ theme }) => ({
        padding: '10px 14px',
        color: theme.palette.text.primary,
        borderRadius: 8,
        border: `1px solid ${alpha(gray[300], 0.8)}`,
        backgroundColor: theme.palette.background.paper,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderColor: gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: 'none',
          borderColor: brand[500],
          boxShadow: `0 0 0 2px ${alpha(brand[500], 0.2)}`,
        },
        ...theme.applyStyles('dark', {
          border: `1px solid ${alpha(gray[700], 0.8)}`,
          '&:hover': {
            borderColor: gray[600],
          },
          [`&.${outlinedInputClasses.focused}`]: {
            borderColor: brand[400],
            boxShadow: `0 0 0 2px ${alpha(brand[400], 0.2)}`,
          },
        }),
        variants: [
          { props: { size: 'small' }, style: { height: '2.25rem', padding: '6px 12px' } },
          { props: { size: 'medium' }, style: { height: '2.75rem' } },
        ],
      }),
      notchedOutline: { border: 'none' },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        fontWeight: 600,
        marginBottom: 8,
      }),
    },
  },
};
