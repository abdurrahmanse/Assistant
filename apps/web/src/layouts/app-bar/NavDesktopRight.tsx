import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router';
import { navIconMap } from './navIconMap';

export interface NavDesktopRightProps {
  cta: {
    portal: { label: string; icon: string };
    signin: { label: string; icon: string };
    signup: { label: string; icon: string };
  };
  portalUrl: string;
  signinUrl: string;
}

export function NavDesktopRight({ cta, portalUrl, signinUrl }: NavDesktopRightProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <Button color="inherit" variant="ghost" size="small" sx={{ fontWeight: 600 }} href={portalUrl} startIcon={navIconMap[cta.portal.icon]}>
        {cta.portal.label}
      </Button>
      <Button color="primary" variant="ghost" size="small" sx={{ fontWeight: 600 }} href={signinUrl} startIcon={navIconMap[cta.signin.icon]}>
        {cta.signin.label}
      </Button>
      <Button color="primary" variant="primary" size="small" sx={{ fontWeight: 700 }} onClick={() => navigate('/contact')} startIcon={navIconMap[cta.signup.icon]}>
        {cta.signup.label}
      </Button>
      <ThemeToggle />
    </Box>
  );
}
