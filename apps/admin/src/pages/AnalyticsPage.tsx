import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PageHeader, Card } from '@repo/ui';
import { Activity, Users, Database, Zap } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

const stats = [
  { label: 'Active Students', value: '14,209', change: '+12%', icon: Users },
  { label: 'Pipeline Executions', value: '1.2M', change: '+34%', icon: Activity },
  { label: 'Total Models Trained', value: '842', change: '+5%', icon: Database },
  { label: 'System Load', value: '42%', change: '-2%', icon: Zap },
];

export default function AnalyticsPage() {
  return (
    <Box>
      <PageHeader 
        icon={<Activity size={32} />}
        title="System Monitoring"
        description="Real-time analytics and telemetry for the learning ecosystem."
      />

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={i}>
            <Card sx={{ p: 3, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: -20, right: -20, color: alpha(brand[500], 0.05) }}>
                <stat.icon size={120} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha(brand[500], 0.1), color: brand[500] }}>
                  <stat.icon size={24} />
                </Box>
                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                  {stat.label}
                </Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: stat.change.startsWith('+') ? 'success.main' : 'error.main', fontWeight: 600 }}>
                {stat.change} vs last month
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Placeholder for complex charts */}
      <Card sx={{ p: 4, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="text.secondary">Telemetry Visualizations Coming Soon</Typography>
      </Card>
    </Box>
  );
}
