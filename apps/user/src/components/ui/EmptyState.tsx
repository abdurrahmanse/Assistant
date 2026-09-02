import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Inbox } from 'lucide-react';
import React from 'react';

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
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        p: { xs: 4, md: 6 },
        bgcolor: 'background.paper',
        borderRadius: '24px',
        border: '2px dashed',
        borderColor: 'divider',
        width: '100%',
        minHeight: '200px'
      }}
    >
      <Box sx={{ color: 'text.disabled', mb: 2 }}>
        {icon || <Inbox size={48} strokeWidth={1.5} />}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400, mb: actionText ? 3 : 0 }}>
        {description}
      </Typography>
      {actionText && onAction && (
        <Button variant="outline" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </Box>
  );
}
