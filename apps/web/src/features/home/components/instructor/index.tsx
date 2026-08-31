import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import { CheckCircle2, User } from 'lucide-react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useInstructorQuery } from '@/features/landing/hooks/queries/useLandingQuery';

const iconMap: Record<string, React.ReactNode> = {
  Twitter: <TwitterIcon fontSize="small" />,
  GitHub: <GitHubIcon fontSize="small" />,
  LinkedIn: <LinkedInIcon fontSize="small" />
};

export default function InstructorProfile() {
  const { data: instructor, isLoading } = useInstructorQuery();

  if (isLoading || !instructor) {
    return <Box sx={{ py: 12, px: 2 }}><Skeleton variant="rectangular" height={500} sx={{ borderRadius: 4, maxWidth: 1200, mx: 'auto' }} /></Box>;
  }

  const firstName = instructor.name.split(' ')[0];

  return (
    <Box sx={{ py: { xs: 8, md: 16 }, px: 2, position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Aurora element */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '10%', width: '40vw', height: '40vw',
        bgcolor: 'primary.main', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Chip label="Your Mentor" color="primary" sx={{ fontWeight: 900, borderRadius: '8px', border: '2px solid #000', boxShadow: '2px 2px 0px #000', mb: 3 }} />
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.02em', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}><User size={40} color="#6366f1" /> {instructor.heading}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 500 }}>
            {instructor.subheading}
          </Typography>
        </Box>

        {/* Main Editorial Card */}
        <Box sx={{ 
          p: { xs: 3, md: 6 }, borderRadius: '40px',
          bgcolor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(32px)', 
          border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
          '[data-mui-color-scheme="dark"] &': { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' },
          boxShadow: '12px 12px 0px rgba(16,185,129,1)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
          '&:hover': { transform: 'translateY(-4px)', boxShadow: '16px 16px 0px rgba(16,185,129,1)' }
        }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            
            {/* Left: Magazine Style Photo */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{
                  width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden',
                  border: '4px solid', borderColor: 'primary.main', bgcolor: 'primary.dark',
                  boxShadow: '8px 8px 0px #000', position: 'relative',
                  '&::after': {
                    content: '""', position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', pointerEvents: 'none'
                  }
                }}>
                  <Box component="img" src={instructor.avatar} alt={instructor.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  
                  {/* Name overlay on image */}
                  <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24, zIndex: 2 }}>
                    <Typography variant="h4" fontWeight={900} color="white" sx={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>{instructor.name}</Typography>
                    <Typography variant="subtitle1" fontWeight={700} color="primary.light">{instructor.title}</Typography>
                  </Box>
                </Box>

                {/* Floating Brutalist Stats */}
                <Box sx={{ 
                  position: 'absolute', top: -20, right: -20, 
                  bgcolor: '#f59e0b', color: '#000', p: 2, borderRadius: '16px',
                  border: '2px solid #000', boxShadow: '4px 4px 0px #000', transform: 'rotate(6deg)'
                }}>
                  <Typography variant="h5" fontWeight={900} textAlign="center">{instructor.stats[0]?.value}</Typography>
                  <Typography variant="caption" fontWeight={800} sx={{ textTransform: 'uppercase' }}>{instructor.stats[0]?.label}</Typography>
                </Box>

                <Box sx={{ 
                  position: 'absolute', bottom: 40, right: -30, 
                  bgcolor: '#3b82f6', color: '#fff', p: 2, borderRadius: '16px',
                  border: '2px solid #000', boxShadow: '4px 4px 0px #000', transform: 'rotate(-4deg)',
                  display: 'flex', alignItems: 'center', gap: 1
                }}>
                  <CheckCircle2 size={24} />
                  <Box>
                    <Typography variant="h6" fontWeight={900} lineHeight={1}>{instructor.stats[1]?.value}</Typography>
                    <Typography variant="caption" fontWeight={700} sx={{ opacity: 0.9 }}>{instructor.stats[1]?.label}</Typography>
                  </Box>
                </Box>

              </Box>
            </Grid>

            {/* Right: Copy & Details */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" fontWeight={900} sx={{ mb: 4, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Hey! I'm <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '4px' }}>{firstName}</Box>.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 500 }}>
                {instructor.bio}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500 }}>
                My goal isn't just to teach you syntax—it's to show you exactly how real-world, enterprise-level products are architected, built, and scaled. We cut the fluff and focus on the skills that actually get you hired and promoted.
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 4, borderTop: '2px dashed', borderColor: 'divider' }}>
                <Typography variant="subtitle2" fontWeight={800} color="text.primary" sx={{ textTransform: 'uppercase', letterSpacing: 1, mr: 2 }}>
                  Follow me
                </Typography>
                {instructor.socials?.map((social: any) => (
                  <Box key={social.platform} component="a" href={social.url} target="_blank" rel="noopener noreferrer"
                    sx={{
                      width: 48, height: 48, borderRadius: '12px', bgcolor: 'background.paper', color: 'text.primary',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '2px solid', borderColor: 'divider',
                      transition: 'all 0.2s', '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main', transform: 'translateY(-4px)' }
                    }}>
                    {iconMap[social.icon] || <TwitterIcon fontSize="small" />}
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
