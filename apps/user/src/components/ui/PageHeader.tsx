import Box from '@mui/material/Box';
import { Heading, Text } from '@repo/ui';
import type { SxProps, Theme } from '@mui/material/styles';

interface PageHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sx?: SxProps<Theme>;
}

export function PageHeader({ icon, title, description, sx }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2, ...sx }}>
      <Box sx={{ 
        p: 2, 
        bgcolor: 'primary.main', 
        color: 'white', 
        borderRadius: '16px', 
        boxShadow: '0 8px 16px rgba(236,72,153,0.3)' 
      }}>
        {icon}
      </Box>
      <Box>
        <Heading level={2}>{title}</Heading>
        <Text muted>{description}</Text>
      </Box>
    </Box>
  );
}
