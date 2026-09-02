import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Inbox, Database } from 'lucide-react';
import React from 'react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionText, onAction }: EmptyStateProps) {
  return (
    <Box 
      sx={(theme) => ({ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        p: { xs: 4, md: 6 },
        bgcolor: 'background.paper',
        borderRadius: '16px',
        border: '1px dashed',
        borderColor: alpha(theme.palette.divider, 0.5),
        ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2), bgcolor: '#0b0f19' }),
        width: '100%',
        minHeight: '250px'
      })}
    >
      <Box sx={{ 
        color: brand[500], mb: 3, p: 2, borderRadius: '16px',
        bgcolor: alpha(brand[500], 0.05), border: `1px solid ${alpha(brand[500], 0.1)}`
      }}>
        {icon || <Database size={48} strokeWidth={1.5} />}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary', letterSpacing: '-0.02em' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400, mb: actionText ? 3 : 0 }}>
        {description}
      </Typography>
      {actionText && onAction && (
        <Button variant="outline" onClick={onAction} sx={{ color: brand[500], borderColor: brand[500] }}>
          {actionText}
        </Button>
      )}
    </Box>
  );
}
