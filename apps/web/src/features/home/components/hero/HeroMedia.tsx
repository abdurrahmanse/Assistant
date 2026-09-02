import * as React from 'react';
import Box from '@mui/material/Box';
import { Reveal } from '@/components/Reveal';
import Typography from '@mui/material/Typography';
import { Play, Terminal, Database, Code2 } from 'lucide-react';
import { keyframes, alpha } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 168, 255, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(0, 168, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 168, 255, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

import type { HeroData } from '@repo/api-client';

export interface HeroMediaProps {
  heroData: HeroData;
}

export function HeroMedia({ heroData }: HeroMediaProps) {
  const media = heroData.media;
  return (
    <Reveal delay={0.4} direction="left">
      <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 320, sm: 400, md: 500 }, mx: 'auto' }}>
        
        {/* Main Terminal/Editor Window Container */}
        <Box sx={(theme) => ({
          position: 'relative', borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          ...theme.applyStyles('dark', { boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }),
          border: '1px solid', borderColor: theme.palette.divider, aspectRatio: '16/10',
          bgcolor: '#0f172a', display: 'flex', flexDirection: 'column'
        })}>
          
          {/* Fake Mac Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5, bgcolor: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box sx={{ w: 12, h: 12, borderRadius: '50%', bgcolor: '#ef4444', width: 12, height: 12 }} />
              <Box sx={{ w: 12, h: 12, borderRadius: '50%', bgcolor: '#eab308', width: 12, height: 12 }} />
              <Box sx={{ w: 12, h: 12, borderRadius: '50%', bgcolor: '#22c55e', width: 12, height: 12 }} />
            </Box>
            <Typography sx={{ ml: 2, fontSize: '12px', color: '#94a3b8' }}>
              model_training.py — Data Science Workspace
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {media?.type === 'video' ? (
              <video autoPlay muted loop playsInline poster={media.poster} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}>
                <source src={media.url} type="video/mp4" />
              </video>
            ) : (
              <Box component="img" src={media?.url || media?.poster} alt="Platform Preview" sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            )}
            
            <Box sx={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3,
              width: { xs: 60, md: 80 }, aspectRatio: '1', borderRadius: '50%', bgcolor: 'rgba(0, 168, 255, 0.2)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00a8ff',
              border: '1px solid rgba(0, 168, 255, 0.5)', animation: `${pulse} 2s infinite`
            }}>
              <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
            </Box>
          </Box>
        </Box>

        {/* Floating Data Node 1 */}
        <Box sx={{
          position: 'absolute', top: -20, right: -30, zIndex: 4,
          bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
          borderRadius: '12px', p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          animation: `${float} 5s ease-in-out infinite`
        }}>
          <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'rgba(0, 168, 255, 0.1)', color: '#00a8ff' }}>
            <Database size={20} />
          </Box>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', color: 'text.primary' }}>Dataset Loaded</Typography>
            <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>1.2M rows • 24 features</Typography>
          </Box>
        </Box>

        {/* Floating Data Node 2 */}
        <Box sx={{
          position: 'absolute', bottom: 40, left: -40, zIndex: 4,
          bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
          borderRadius: '12px', p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          animation: `${float} 7s ease-in-out infinite reverse`
        }}>
          <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
            <Terminal size={20} />
          </Box>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', color: 'text.primary' }}>Accuracy: 98.4%</Typography>
            <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>Epoch 42/50 completed</Typography>
          </Box>
        </Box>

      </Box>
    </Reveal>
  );
}
