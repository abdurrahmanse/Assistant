import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  
  if (!mode) return null;

  return (
    <IconButton 
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      color="inherit"
      size="small"
      sx={{ 
        ml: 1,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.1)' }
      }}
    >
      {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  );
}
