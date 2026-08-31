import { Reveal } from '@/components/Reveal';
import { useInstructorQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Badge as Chip, Skeleton } from '@repo/ui';
import { Award, User, Users } from 'lucide-react';
import React from 'react';
import CountUpModule from 'react-countup';
const CountUp = (CountUpModule as any).default || CountUpModule;

const SmartCounter = ({ text }: { text: string }) => {
  const match = text.match(/^([^0-9.-]*)([0-9.]+)(.*)$/);
  if (!match) return <>{text}</>;
  const [_, prefix, num, suffix] = match;
  return (
    <CountUp
      start={0}
      end={parseFloat(num)}
      decimals={num.includes('.') ? 1 : 0}
      duration={2.5}
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
    />
  );
};


const iconMap: Record<string, React.ReactNode> = {
  Twitter: <TwitterIcon fontSize="small" />,
  GitHub: <GitHubIcon fontSize="small" />,
  LinkedIn: <LinkedInIcon fontSize="small" />
};

export default function InstructorProfile() {
  const { data: instructor, isLoading } = useInstructorQuery();

  if (isLoading || !instructor) {
    return (
      <Box sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Skeleton variant="rectangular" sx={{ width: '100%', aspectRatio: '3/4', borderRadius: '24px' }} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Skeleton variant="rectangular" width={140} height={32} sx={{ mb: 4, borderRadius: '8px' }} />
              <Skeleton variant="text" width="80%" height={56} sx={{ mb: 3 }} />
              <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="90%" height={24} sx={{ mb: 3 }} />
              <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="95%" height={24} sx={{ mb: 5 }} />
              
              <Stack direction="row" spacing={{ xs: 2, sm: 4 }} sx={{ mb: 5 }}>
                <Skeleton variant="rectangular" height={80} sx={{ flex: 1, borderRadius: '16px' }} />
                <Skeleton variant="rectangular" height={80} sx={{ flex: 1, borderRadius: '16px' }} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  const firstName = instructor.name.split(' ')[0];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, position: 'relative', overflow: 'hidden' }}>

      {/* Background ambient glow */}
      <Box sx={{
        position: 'absolute', top: '50%', right: '-10%', width: '60vw', height: '60vw',
        opacity: 0.05, filter: 'blur(120px)', borderRadius: '50%', zIndex: 0,
        transform: 'translateY(-50%)', pointerEvents: 'none'
      }} />

      <Box sx={{ maxWidth: 1000, mx: 'auto', position: 'relative', zIndex: 1 }}>

        {/* Sleek Glassmorphism Card */}
        <Reveal delay={0.2} direction="up">

          <Box>
            <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

              {/* Left: Professional Portrait */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    '[data-mui-color-scheme="dark"] &': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    },
                  }}>
                    <Box component="img" src={instructor.avatar} alt={instructor.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    {/* Subtle elegant gradient overlay */}
                    <Box sx={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 4
                    }}>
                      <Typography variant="h4" fontWeight={900} color="white">{instructor.name}</Typography>
                      <Typography variant="subtitle2" fontWeight={700} sx={{ color: 'primary.light', opacity: 0.9 }}>{instructor.title}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Right: Personal Bio & Trust */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Chip
                  icon={<User size={16} />}
                  label="Your Sole Instructor"
                  color="primary"
                  variant="outline"
                  size="small"
                  sx={{ fontWeight: 800, mb: 4, borderRadius: '8px', borderWidth: 2 }}
                />

                <Typography variant="h2" fontWeight={900} sx={{ mb: 3, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Hey! I'm <Box component="span" sx={{ color: 'primary.main' }}>{firstName}</Box>.
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 500 }}>
                  {instructor.bio}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 500 }}>
                  I personally oversee this entire platform. My goal isn't just to teach you syntax—it's to show you exactly how real-world, enterprise-level products are architected, built, and scaled. We cut the fluff and focus on the skills that actually get you hired and promoted.
                </Typography>

                {/* Stats Row */}
                <Stack direction="row" spacing={{ xs: 2, sm: 4 }} sx={{ mb: 5 }}>
                  {instructor.stats?.slice(0, 2).map((stat: any, i: number) => (
                    <Stack key={i} direction="row" alignItems="center" spacing={2} sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '16px', border: '1px solid', borderColor: 'divider', flex: 1 }}>
                      <Box sx={{ color: i === 0 ? 'primary.main' : 'warning.main' }}>
                        {i === 0 ? <Award size={28} /> : <Users size={28} />}
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight={900} lineHeight={1}><SmartCounter text={stat.value} /></Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>{stat.label}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 3, borderTop: '1px dashed', borderColor: 'divider' }}>
                  <Typography variant="caption" fontWeight={800} color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, mr: 1 }}>
                    Connect with me
                  </Typography>
                  {instructor.socials?.map((social: any) => (
                    <Box key={social.platform} component="a" href={social.url} target="_blank" rel="noopener noreferrer"
                      sx={{
                        width: 40, height: 40, borderRadius: '10px', bgcolor: 'background.paper', color: 'text.secondary',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid', borderColor: 'divider',
                        transition: 'all 0.2s', '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main', transform: 'translateY(-2px)' }
                      }}>
                      {iconMap[social.icon] || <TwitterIcon fontSize="small" />}
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}
