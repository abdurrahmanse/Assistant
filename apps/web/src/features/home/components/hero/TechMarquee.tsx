import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes, alpha } from '@mui/material/styles';
import { 
  Database, Terminal, Cpu,
  Layers, Binary, MonitorPlay, ScatterChart, 
  Network, Share2, Workflow, Box as BoxIcon, FileJson, Activity, LineChart, Code2
} from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const techs = [
  { name: 'Machine Learning', icon: Network },
  { name: 'Deep Learning', icon: Layers },
  { name: 'Data Engineering', icon: Database },
  { name: 'Neural Networks', icon: Share2 },
  { name: 'Model Serving', icon: BoxIcon },
  { name: 'Pipelines', icon: Workflow },
  { name: 'Big Data', icon: Binary },
  { name: 'Analytics', icon: ScatterChart },
  { name: 'Algorithms', icon: Cpu },
  { name: 'Visualization', icon: LineChart },
  { name: 'Predictive Models', icon: Activity },
  { name: 'Python', icon: Code2 },
  { name: 'Notebooks', icon: Terminal },
];

const marqueeItems = [...techs, ...techs, ...techs];

export function TechMarquee() {
  return (
    <Box sx={{ 
      py: 3, 
      borderTop: '1px solid', 
      borderBottom: '1px solid', 
      borderColor: 'divider',
      overflow: 'hidden',
      bgcolor: 'background.default',
      position: 'relative'
    }}>
      <Box sx={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: { xs: 40, md: 100 },
        background: 'linear-gradient(to right, var(--template-palette-background-default), transparent)', zIndex: 1
      }} />
      <Box sx={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: { xs: 40, md: 100 },
        background: 'linear-gradient(to left, var(--template-palette-background-default), transparent)', zIndex: 1
      }} />

      <Box sx={{
        display: 'flex',
        width: 'max-content',
        animation: `${scroll} 40s linear infinite`,
        '&:hover': {
          animationPlayState: 'paused'
        }
      }}>
        {marqueeItems.map((tech, index) => (
          <Box key={index} sx={{ 
            px: { xs: 3, md: 5 }, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1.5,
            justifyContent: 'center',
            transition: 'all 0.2s',
            opacity: 0.5,
            '&:hover': { 
              opacity: 1,
              transform: 'scale(1.05)',
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: brand[500] }}>
              <tech.icon size={16} strokeWidth={2} />
            </Box>
            <Typography sx={{ 
              fontSize: '0.85rem',
              fontWeight: 600, 
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              lineHeight: 1,
              color: 'text.secondary',
             
            }}>
              {tech.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
