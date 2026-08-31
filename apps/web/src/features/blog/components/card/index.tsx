import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@repo/ui';
import CardMedia from '@mui/material/CardMedia';
import { Badge as Chip } from '@repo/ui';
import Stack from '@mui/material/Stack';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface PostCardProps {
  post?: any;
  isLoading?: boolean;
}

export function PostCard({ post, isLoading }: PostCardProps) {
  if (isLoading || !post) {
    return <Skeleton variant="rectangular" height={500} sx={{ borderRadius: '24px' }} />;
  }

  return (
    <Box 
      sx={(theme) => ({ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '24px',
        border: '2px solid',
        borderColor: 'rgba(0,0,0,0.1)',
        bgcolor: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(24px)',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer',
        ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
        '&:hover': {
          transform: 'translateY(-6px) rotate(-1deg)',
          boxShadow: '8px 8px 0px rgba(99,102,241,1)',
          borderColor: 'primary.main',
          '& .post-arrow': { transform: 'translateX(4px)' }
        }
      })}
    >
      <Box sx={{ position: 'relative', p: 1.5, pb: 0 }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            height="220"
            image={post.image}
            alt={post.title}
            sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
          />
          {/* Playful Neo-Brutalist Badge */}
          <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
            <Chip 
              label={post.category} 
              size="small" 
              sx={{ 
                fontWeight: 900, 
                borderRadius: '8px', 
                bgcolor: '#ec4899', 
                color: '#fff',
                border: '2px solid #000', 
                boxShadow: '2px 2px 0px #000',
                textTransform: 'uppercase', 
                letterSpacing: 0.5
              }} 
            />
          </Box>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3, pt: 4, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={2} sx={{ mb: 2, color: 'text.secondary', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><CalendarDays size={14} /> {post.date}</Box>
          <Box>•</Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Clock size={14} /> {post.readTime}</Box>
        </Stack>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, fontWeight: 500, flexGrow: 1 }}>
          {post.excerpt}
        </Typography>
        
        <Box sx={(theme) => ({ 
          mt: 'auto', pt: 2, borderTop: '2px dashed', borderColor: 'rgba(0,0,0,0.1)', 
          display: 'flex', alignItems: 'center', color: 'primary.main', fontWeight: 800, gap: 1,
          ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)' })
        })}>
          Read Article <ArrowRight size={16} className="post-arrow" style={{ transition: 'transform 0.2s' }} />
        </Box>
      </CardContent>
    </Box>
  );
}
