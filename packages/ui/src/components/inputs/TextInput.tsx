import * as React from 'react';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

export interface TextInputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard';
}

export const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(({
  variant = 'outlined',
  sx,
  ...props
}, ref) => {
  return (
    <TextField
      ref={ref}
      variant={variant}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          bgcolor: 'background.paper',
        },
        ...sx
      }}
      {...props}
    />
  );
});

TextInput.displayName = 'TextInput';
