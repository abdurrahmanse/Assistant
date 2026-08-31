import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useBlogQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const { data: blog, isLoading } = useBlogQuery();

  return (
    <MarketingLayout>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center' }}>
        <Reveal delay={0.1}>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
            Engineering <Box component="span" sx={{ color: 'primary.main' }}>Insights</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1rem', lineHeight: 1.6, mb: 6 }}>
            Deep dives into modern web architecture, performance optimization, and scalable systems.
          </Typography>
        </Reveal>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 12 }}>
        {isLoading || !blog ? (
          <Grid container spacing={4}>
            {[1, 2, 3].map(i => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Skeleton variant="rectangular" height={250} sx={{ borderRadius: 4 }} />
                <Skeleton height={40} sx={{ mt: 2 }} />
                <Skeleton height={20} width="60%" />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {blog.map((post: any, index: number) => (
              <Grid size={{ xs: 12, md: 4 }} key={post.id}>
                <Reveal delay={0.2 + (index * 0.15)} direction="up">
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
                        <Chip label={post.category} color="primary" size="small" sx={{ fontWeight: 800, backdropFilter: 'blur(10px)', bgcolor: 'rgba(255,255,255,0.9)' }} />
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
                </Reveal>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </MarketingLayout>
  );
}
