import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

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
        bgcolor: alpha(brand[500], 0.1), 
        color: brand[500], 
        borderRadius: '16px', 
        border: `1px solid ${alpha(brand[500], 0.2)}`,
        boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
      }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
