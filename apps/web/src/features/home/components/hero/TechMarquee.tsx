import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';
import { 
  Code2, Database, Server, Cloud, Terminal, Cpu,
  Globe, Smartphone, Blocks, Layers, Box as BoxIcon, Webhook,
  Braces, Binary, FileJson, MonitorPlay, Palette, GitBranch, GitMerge, Gauge
} from 'lucide-react';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const techs = [
  { name: 'Frontend', icon: MonitorPlay },
  { name: 'Backend', icon: Server },
  { name: 'Databases', icon: Database },
  { name: 'Cloud', icon: Cloud },
  { name: 'API', icon: Webhook },
  { name: 'Mobile', icon: Smartphone },
  { name: 'Web', icon: Globe },
  { name: 'Architecture', icon: Blocks },
  { name: 'DevOps', icon: Terminal },
  { name: 'Microservices', icon: Layers },
  { name: 'Scripting', icon: Braces },
  { name: 'Design', icon: Palette },
  { name: 'Source Control', icon: GitBranch },
  { name: 'CI/CD', icon: GitMerge },
  { name: 'Data Structures', icon: Binary },
  { name: 'Algorithms', icon: Cpu },
  { name: 'Containers', icon: BoxIcon },
  { name: 'Optimization', icon: Gauge },
  { name: 'JSON', icon: FileJson },
  { name: 'Clean Code', icon: Code2 }
];

// Duplicate the array to ensure seamless looping
const marqueeItems = [...techs, ...techs];

export function TechMarquee() {
  return (
    <Box sx={{ 
      py: 4, 
      borderTop: '1px solid', 
      borderBottom: '1px solid', 
      borderColor: 'divider',
      overflow: 'hidden',
      bgcolor: 'background.default',
      position: 'relative'
    }}>
      {/* Left/Right fading gradients */}
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
        animation: `${scroll} 30s linear infinite`,
        '&:hover': {
          animationPlayState: 'paused'
        }
      }}>
        {marqueeItems.map((tech, index) => (
          <Box key={index} sx={{ 
            px: { xs: 3, md: 5 }, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1.25,
            justifyContent: 'center',
            transition: 'all 0.2s',
            opacity: 0.6,
            '&:hover': { 
              transform: 'scale(1.1)',
              opacity: 1
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
              <tech.icon size={15} strokeWidth={2.5} />
            </Box>
            <Typography sx={{ 
              fontSize: '0.875rem',
              fontWeight: 900, 
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              lineHeight: 1,
              background: 'linear-gradient(90deg, var(--template-palette-primary-main) 0%, var(--template-palette-secondary-main) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {tech.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
