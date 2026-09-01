import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { ArrowRight, Star, Users } from 'lucide-react';
import { styles } from './CourseCard.styles';

interface CourseCardProps {
  course: {
    id: string;
    slug: string;
    title: string;
    instructor: string;
    thumbnail: string;
    price: string;
    tags: string[];
    rating: number;
    students: number;
  };
  onEnroll: (slug: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <Box sx={(theme) => ({
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '24px', 
      border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
      bgcolor: 'rgba(255,255,255,0.6)',
      ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
      backdropFilter: 'blur(24px)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '8px 8px 0px rgba(99,102,241,1)',
        borderColor: 'primary.main',
      }
    })} onClick={() => onEnroll(course.slug)}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
        <Box component="img" src={course.thumbnail} alt={course.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Chip label={course.price} size="small" sx={{ fontWeight: 900, borderRadius: '8px', bgcolor: 'background.paper', color: 'text.primary', border: '2px solid #000', boxShadow: '2px 2px 0px #000' }} />
    <Box sx={styles.card} onClick={() => onEnroll(course.slug)}>
      <Box sx={styles.thumbnailWrapper}>
        <Box component="img" src={course.thumbnail} alt={course.title} sx={styles.image} />
        <Box sx={styles.priceChipWrapper}>
          <Chip label={course.price} size="small" sx={styles.priceChip} />
        </Box>
      </Box>
      
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Box sx={styles.contentWrapper}>
        <Stack direction="row" spacing={1} mb={2}>
          {course.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" sx={{ borderRadius: '6px', fontWeight: 700, bgcolor: 'primary.50', color: 'primary.main' }} />
            <Chip key={tag} label={tag} size="small" sx={styles.tagChip} />
          ))}
        </Stack>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
        <Typography variant="h5" sx={styles.title}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={600} mb={3}>
        <Typography variant="body2" color="text.secondary" sx={styles.author}>
          by {course.instructor}
        </Typography>
        
        <Box sx={{ mt: 'auto' }}>
        <Box sx={styles.footer}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: '#f59e0b' }}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={styles.statsRow}>
              <Star size={16} fill="currentColor" />
              <Typography variant="body2" fontWeight={800} color="text.primary">{course.rating}</Typography>
              <Typography variant="body2" fontWeight={700} color="text.primary">{course.rating}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} color="text.secondary">
            <Stack direction="row" alignItems="center" spacing={1} sx={styles.studentsRow}>
              <Users size={16} />
              <Typography variant="body2" fontWeight={600}>{course.students}</Typography>
            </Stack>
          </Stack>
          <Button variant="primary" fullWidth endIcon={<ArrowRight size={16} />} onClick={(e) => { e.stopPropagation(); onEnroll(course.slug); }}>
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
