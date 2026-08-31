import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router';
import AssistantLogo from '@/components/AssistantLogo';
import { useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export default function Footer() {
  const navigate = useNavigate();
  const { data: siteMeta } = useSiteMetaQuery();
  
  const navLinks = [
    { label: 'Blog', path: '/blog' },
    { label: 'Newsletter', path: '/newsletter' },
  ];

  return (
    <Box component="footer" sx={{ 
      py: { xs: 4, md: 6 }, 
      borderTop: '1px solid', 
      borderColor: 'divider',
      bgcolor: 'background.default'
    }}>
      <Container maxWidth="lg">
        <Stack 
          direction="column" 
          alignItems="center" 
          spacing={4}
        >
          {/* Logo */}
          <Box sx={{ cursor: 'pointer', transition: 'opacity 0.2s', '&:hover': { opacity: 0.8 } }} onClick={() => navigate('/')}>
            <AssistantLogo />
          </Box>

          {/* Minimal Links */}
          <Stack 
            direction="row" 
            spacing={{ xs: 3, sm: 6 }} 
            flexWrap="wrap" 
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                component="button"
                variant="body2"
                onClick={() => navigate(link.path)}
                sx={{ 
                  color: 'text.secondary', 
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} sx={{ color: 'text.secondary' }}>
            <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.twitter ?? '#'} sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.github ?? '#'} sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.linkedin ?? '#'} sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Copyright */}
          <Typography variant="body2" sx={{ color: 'text.disabled', fontWeight: 500, mt: 2 }}>
            © {new Date().getFullYear()} {siteMeta?.copyright ?? 'SkillForge'}. All rights reserved.
          </Typography>

        </Stack>
      </Container>
    </Box>
  );
}
