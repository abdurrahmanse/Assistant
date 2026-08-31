import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Play, Code2, Brain, TrendingUp, MonitorPlay, BarChart, ArrowRight } from 'lucide-react';
import {
  CatalogWrapper,
  CatalogContainer,
  CourseGrid,
  CourseCard,
  CourseBadge,
  PriceTag,
} from './CourseCatalog.styles';
import { useLandingQuery } from '../hooks/queries/useLandingQuery';
import { useNavigate } from 'react-router';
import Skeleton from '@mui/material/Skeleton';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Brain: <Brain size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  MonitorPlay: <MonitorPlay size={24} />,
  BarChart: <BarChart size={24} />,
};

export default function CourseCatalog() {
  const navigate = useNavigate();
  const { data, isLoading } = useLandingQuery();

  if (isLoading || !data) {
    return (
      <CatalogWrapper id="courses">
        <CatalogContainer>
          <Skeleton variant="rectangular" width="40%" height={40} />
          <CourseGrid>
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} variant="rectangular" height={250} sx={{ borderRadius: '16px' }} />
            ))}
          </CourseGrid>
        </CatalogContainer>
      </CatalogWrapper>
    );
  }

  return (
    <CatalogWrapper id="courses">
      <CatalogContainer>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {data.courses?.title || 'Featured Courses'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {data.courses?.subtitle || 'Explore our library of free and premium courses.'}
          </Typography>
        </Box>

        <CourseGrid>
          {data.courses?.items.map((course: any) => (
            <CourseCard key={course.id} onClick={() => navigate(`/courses/${course.id}`)}>
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                  <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {iconMap[course.icon] || <Play size={24} />}
                  </Box>
                  <CourseBadge 
                    label={course.type} 
                    color={course.type === 'Free' ? 'success' : 'primary'} 
                    size="small"
                  />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {course.level}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5, mb: 1, lineHeight: 1.2 }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {course.description}
                </Typography>
              </Box>
              
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <PriceTag>{course.price}</PriceTag>
                  <Button onClick={(e) => { e.stopPropagation(); navigate(`/courses/${course.id}`); }} 
                    variant={course.type === 'Free' ? 'outlined' : 'contained'}
                    color="inherit"
                    endIcon={<ArrowRight size={16} />}
                    sx={{ 
                      fontWeight: 800, 
                      borderRadius: '8px',
                      textTransform: 'none',
                      ...(course.type === 'Premium' && {
                        bgcolor: 'text.primary',
                        color: 'background.default',
                        '&:hover': { bgcolor: 'text.secondary' }
                      })
                    }}
                  >
                    Enroll
                  </Button>
                </Stack>
              </Box>
            </CourseCard>
          ))}
        </CourseGrid>
      </CatalogContainer>
    </CatalogWrapper>
  );
}
