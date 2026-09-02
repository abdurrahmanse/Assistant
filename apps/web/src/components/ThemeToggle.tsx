import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();
  
  if (!mode) return null;

  const isDark = mode === 'dark' || (mode === 'system' && systemMode === 'dark');

  return (
    <IconButton 
      onClick={() => setMode(isDark ? 'light' : 'dark')}
      color="inherit"
      size="small"
      sx={{ 
        ml: 1,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.1)' }
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  );
}
