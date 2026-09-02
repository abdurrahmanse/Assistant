import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { PageHeader } from '@repo/ui';
import { Activity, Users, Database, Cpu, TrendingUp } from 'lucide-react';
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { useSystemMetricsQuery } from '../features/analytics/hooks/queries/useAnalyticsQuery';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

const StatCard = ({ title, value, delta, icon, suffix = '' }: any) => (
  <Card sx={{ 
    p: 3, 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid',
    borderColor: 'divider',
    background: `linear-gradient(135deg, ${alpha(brand[500], 0.05)} 0%, transparent 100%)`,
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: `0 8px 24px -4px ${alpha(brand[500], 0.15)}`,
      borderColor: alpha(brand[500], 0.3)
    }
  }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
      <Typography variant="body2" color="text.secondary" fontWeight={600}>
        {title}
      </Typography>
      <Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500] }}>
        {icon}
      </Box>
    </Box>
    <Box>
      <Typography variant="h3" fontWeight={800} sx={{ mb: 1, letterSpacing: '-0.02em' }}>
        {value.toLocaleString()}{suffix}
      </Typography>
      {delta !== undefined && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: delta >= 0 ? 'success.main' : 'error.main' }}>
          <TrendingUp size={16} style={{ transform: delta < 0 ? 'rotate(180deg)' : 'none' }} />
          <Typography variant="body2" fontWeight={700}>
            {Math.abs(delta)}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            vs last month
          </Typography>
        </Box>
      )}
    </Box>
  </Card>
);

export default function AnalyticsPage() {
  const { data: metrics, isLoading } = useSystemMetricsQuery();

  if (isLoading || !metrics) {
    return <Box sx={{ p: 4, textAlign: 'center' }}>Loading Telemetry...</Box>;
  }

  return (
    <Box>
      <PageHeader 
        icon={<Activity size={32} />}
        title="System Telemetry"
        description="Real-time observability of platform usage, model training throughput, and infrastructure load."
      />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard 
            title="Active Students" 
            value={metrics.activeStudents} 
            delta={metrics.activeStudentsDelta} 
            icon={<Users size={20} />} 
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard 
            title="Pipeline Executions" 
            value={metrics.pipelineExecutions} 
            delta={metrics.pipelineExecutionsDelta} 
            icon={<Database size={20} />} 
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard 
            title="Training Uptime" 
            value={metrics.modelTrainingUptime} 
            suffix="%"
            icon={<Activity size={20} />} 
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard 
            title="System Load" 
            value={metrics.systemLoad} 
            suffix="%"
            icon={<Cpu size={20} />} 
          />
        </Grid>
      </Grid>

      <Card sx={{ 
        p: { xs: 2, sm: 4 }, 
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        boxShadow: 'none'
      }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 4 }}>
          Enrollment Trajectory
        </Typography>
        <Box sx={{ width: '100%', height: 400 }}>
          <LineChart
            dataset={metrics.enrollmentTrends as any[]}
            xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
            series={[{ 
              dataKey: 'students', 
              color: brand[500],
              area: true,
              showMark: true
            }]}
            sx={{
              [`.${lineElementClasses.root}`]: {
                strokeWidth: 3,
              },
              [`.${markElementClasses.root}`]: {
                scale: '1.5',
                fill: brand[500],
                stroke: 'background.paper',
                strokeWidth: 2,
              },
              '.MuiAreaElement-root': {
                fill: `url(#gradient)`,
              },
            }}
            
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={alpha(brand[500], 0.3)} />
                <stop offset="100%" stopColor={alpha(brand[500], 0.0)} />
              </linearGradient>
            </defs>
          </LineChart>
        </Box>
      </Card>
    </Box>
  );
}
