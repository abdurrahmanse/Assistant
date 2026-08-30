import Box from '@mui/material/Box';

export default function AssistantLogo() {
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
      <img src="/logo.jpg" alt="Assistant Logo" style={{ height: 32, width: 'auto', borderRadius: 8 }} />
    </Box>
  );
}
