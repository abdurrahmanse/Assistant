import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { TextInput as TextField } from '@repo/ui';
import { Button } from '@repo/ui';
import InputAdornment from '@mui/material/InputAdornment';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { Mail, Send } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import AssistantLogo from '@/components/AssistantLogo';
import { useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { landingService } from '@/features/landing/services/landing.service';

export default function Footer() {
  const navigate = useNavigate();
  const { data: siteMeta } = useSiteMetaQuery();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const navLinks = [
    { label: 'Blog', path: '/blog' }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await landingService.subscribeNewsletter(email);
      toast.success("You're in! Check your inbox.");
      setEmail('');
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="footer" sx={{ 
      py: { xs: 4, md: 4 }, 
      borderTop: '1px solid', 
      borderColor: 'divider',
      bgcolor: 'background.default'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4
        }}>
          {/* Left Side */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
            <Box sx={{ cursor: 'pointer', transition: 'opacity 0.2s', '&:hover': { opacity: 0.8 }, mb: 1, transform: 'scale(0.85)', transformOrigin: { xs: 'center', md: 'left' } }} onClick={() => navigate('/')}>
              <AssistantLogo />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.disabled', fontWeight: 500, fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} {siteMeta?.copyright ?? 'Learn with Abdur Rahman'}. All rights reserved.
            </Typography>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', gap: 1, width: '100%', maxWidth: 280 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Subscribe to newsletter..."
                variant="outlined"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
                required
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start"><Mail size={14} color="var(--template-palette-text-secondary)" /></InputAdornment>,
                    sx: { borderRadius: '8px', bgcolor: 'background.paper', fontSize: '0.875rem' }
                  }
                }}
              />
              <Button 
                type="submit" 
                variant="primary" 
                disabled={loading}
                sx={{ borderRadius: '8px', minWidth: 40, px: 0 }}
              >
                <Send size={14} />
              </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/blog')}
                sx={{ 
                  color: 'text.secondary', 
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Blog
              </Link>
              <Stack direction="row" spacing={1} sx={{ color: 'text.secondary' }}>
                <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.twitter ?? '#'} sx={{ p: 0.5, '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                  <TwitterIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.github ?? '#'} sx={{ p: 0.5, '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                  <GitHubIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.linkedin ?? '#'} sx={{ p: 0.5, '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
                  <LinkedInIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
