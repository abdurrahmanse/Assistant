import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Award, CheckCircle2, FileText } from 'lucide-react';
import React from 'react';
import type { ActivityItem } from '../../../types';

interface RecentActivityFeedProps {
  activities: ActivityItem[];
}

export function RecentActivityFeed({ activities }: RecentActivityFeedProps) {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'completion': return <CheckCircle2 size={16} />;
      case 'grade': return <FileText size={16} />;
      case 'badge': return <Award size={16} />;
      default: return <CheckCircle2 size={16} />;
    }
  };
  
  const getColorScheme = (type: string) => {
    switch (type) {
      case 'completion': return { bg: 'success.50', color: 'success.main' };
      case 'grade': return { bg: 'warning.50', color: 'warning.main' };
      case 'badge': return { bg: 'primary.50', color: 'primary.main' };
      default: return { bg: 'success.50', color: 'success.main' };
    }
  };

  return (
    <Paper variant="outlined" sx={{ p: 0, flexGrow: 1, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={800}>Recent Activity</Typography>
      </Box>
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        
        {activities.map((activity, idx) => {
          const colors = getColorScheme(activity.type);
          return (
            <React.Fragment key={activity.id}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ mt: 0.5, p: 1, borderRadius: '50%', bgcolor: colors.bg, color: colors.color, height: 'fit-content' }}>
                  {getIcon(activity.type)}
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>{activity.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{activity.description}</Typography>
                  <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>{activity.time}</Typography>
                </Box>
              </Stack>
              {idx < activities.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}

      </Box>
      <Button variant="ghost" fullWidth sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', borderRadius: '0 0 24px 24px' }}>
        View All Activity
      </Button>
    </Paper>
  );
}

