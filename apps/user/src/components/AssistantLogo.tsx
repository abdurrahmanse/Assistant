import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { Terminal } from 'lucide-react';

export default function AssistantLogo({ hideText = false }: { hideText?: boolean }) {
  return (
    <Box 
      component="a" 
      href="/" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        textDecoration: 'none',
        '&:hover': { opacity: 0.9 },
        transition: 'opacity 0.2s'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: brand[500], 
        color: 'white', 
        width: 36, 
        height: 36, 
        borderRadius: '8px',
        boxShadow: `0 4px 12px ${brand[500]}40`
      }}>
        <Terminal size={20} />
      </Box>
      {!hideText && (
        <Typography variant="h6" sx={{ 
          ml: 1.5, 
          fontWeight: 700, 
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: '-0.02em',
          color: 'text.primary',
          lineHeight: 1
        }}>
          Learn with <Box component="span" sx={{ color: brand[500] }}>Abdur Rahman</Box>
        </Typography>
      )}
    </Box>
  );
}
