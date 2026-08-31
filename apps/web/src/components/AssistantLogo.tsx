import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AssistantLogo({ hideText = false }: { hideText?: boolean }) {
  return (
    <Box 
      component="a" 
      href="/" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        textDecoration: 'none',
        '&:hover': { opacity: 0.8 }
      }}
    >
            <img src="/logo.jpg" alt="Learn with Abdur Rahman" style={{ height: 36, width: 'auto', borderRadius: 8 }} />
      {!hideText && (
        <Typography variant="h6" sx={{ 
          ml: 1.5, 
          fontWeight: 900, 
          fontFamily: "'Kalam', cursive",
          background: 'linear-gradient(90deg, var(--template-palette-primary-main) 0%, #EC4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}>
          Learn with Abdur Rahman
        </Typography>
      )}
    </Box>
  );
}
