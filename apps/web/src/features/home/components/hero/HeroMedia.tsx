import * as React from 'react';
import Box from '@mui/material/Box';
import { Reveal } from '@/components/Reveal';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Play, Star } from 'lucide-react';
import { keyframes } from '@emotion/react';

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
    <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 280, sm: 320, md: 360 }, mx: 'auto' }}>
      
      {/* Main Reels Video Container */}
      <Box sx={{
        position: 'relative', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.15)', '[data-mui-color-scheme="dark"] &': { boxShadow: '0 30px 80px rgba(0,0,0,0.6)' },
        border: '8px solid', borderColor: 'background.paper', aspectRatio: '9/16',
        bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center',
        '&::before': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))', zIndex: 2, pointerEvents: 'none' }
      }}>
        {media?.type === 'video' ? (
          <video autoPlay muted loop playsInline poster={media.poster} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={media.url} type="video/mp4" />
          </video>
        ) : (
          <Box component="img" src={media?.url || media?.poster} alt="Platform Preview" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
        
        {/* Play Button Overlay */}
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3,
          width: { xs: 60, md: 80 }, aspectRatio: '1', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}>
          <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
        </Box>
      </Box>

      {/* Floating Glass Card 1: Top Right */}
      <Box sx={{
        position: 'absolute', top: 40, right: { xs: -20, md: -40 }, zIndex: 4,
        bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)',
        border: '1px solid', borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: '16px', p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5,
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        animation: `${float} 6s ease-in-out infinite`,
        color: 'white'
      }}>
         <Avatar src="https://i.pravatar.cc/100?img=1" sx={{ width: 32, height: 32, border: '2px solid white' }} />
         <Box>
           <Typography variant="caption" sx={{ fontWeight: 800, display: 'block', lineHeight: 1, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>20k+</Typography>
           <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.65rem', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>{heroData.activeStudentsLabel}</Typography>
         </Box>
      </Box>

      {/* Floating Glass Card 2: Bottom Left */}
      <Box sx={{
        position: 'absolute', bottom: 60, left: { xs: -20, md: -40 }, zIndex: 4,
        bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)',
        border: '1px solid', borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: '16px', p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        animation: `${float} 8s ease-in-out infinite reverse`,
        color: 'white'
      }}>
         <Box sx={{ display: 'flex', p: 0.5, bgcolor: '#f59e0b', borderRadius: '50%', color: 'white', border: '2px solid rgba(255,255,255,0.2)' }}>
           <Star size={16} fill="currentColor" />
         </Box>
         <Box>
           <Typography variant="caption" sx={{ fontWeight: 800, display: 'block', lineHeight: 1 }}>4.9/5 Rating</Typography>
           <Typography variant="caption" sx={{ opacity: 0.8, fontSize: '0.65rem', fontWeight: 500 }}>From 2k+ reviews</Typography>
         </Box>
      </Box>

    </Box>
    </Reveal>
  );
}
