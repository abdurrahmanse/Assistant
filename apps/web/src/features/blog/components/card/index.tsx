import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@repo/ui';
import CardMedia from '@mui/material/CardMedia';
import { Badge as Chip } from '@repo/ui';
import Stack from '@mui/material/Stack';
import { ArrowRight } from 'lucide-react';
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
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={post.image}
          alt={post.title}
        />
        <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
          <Chip label={post.category} color="primary" size="small" variant="solid" sx={{ fontWeight: 800, backdropFilter: 'blur(10px)', bgcolor: 'rgba(255,255,255,0.9)', color: 'text.primary' }} />
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 2, color: 'text.secondary', fontSize: '0.85rem', fontWeight: 600 }}>
          <Box>{post.date}</Box>
          <Box>•</Box>
          <Box>{post.readTime}</Box>
        </Stack>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
          {post.excerpt}
        </Typography>
        
        <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', color: 'primary.main', fontWeight: 700, gap: 1 }}>
          Read Article <ArrowRight size={16} />
        </Box>
      </CardContent>
    </Card>
  );
}
