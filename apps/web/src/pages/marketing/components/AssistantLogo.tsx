import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Box from '@mui/material/Box';

export default function AssistantLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <AutoAwesomeIcon color="primary" />
      <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: 1 }}>
        ASSISTANT
      </Typography>
    </Box>
  );
}
