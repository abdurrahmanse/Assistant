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
    <Box sx={styles.card} onClick={() => onEnroll(course.slug)}>
      <Box sx={styles.thumbnailWrapper}>
        <Box component="img" src={course.thumbnail} alt={course.title} sx={styles.image} />
        <Box sx={styles.priceChipWrapper}>
          <Chip label={course.price} size="small" sx={styles.priceChip} />
        </Box>
      </Box>
      
      <Box sx={styles.contentWrapper}>
        <Stack direction="row" spacing={1} mb={2}>
          {course.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" sx={styles.tagChip} />
          ))}
        </Stack>
        <Typography variant="h5" sx={styles.title}>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={styles.author}>
          by {course.instructor}
        </Typography>
        
        <Box sx={styles.footer}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={styles.statsRow}>
              <Star size={16} fill="currentColor" />
              <Typography variant="body2" fontWeight={700} color="text.primary">{course.rating}</Typography>
            </Stack>
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
