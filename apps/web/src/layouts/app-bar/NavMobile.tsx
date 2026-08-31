import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X as CloseIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { navIconMap } from './navIconMap';

export interface NavMobileProps {
  navLinks: { path: string; label: string; icon: string }[];
  cta: {
    portal: { label: string; icon: string };
    signin: { label: string; icon: string };
    signup: { label: string; icon: string };
  };
  portalUrl: string;
  signinUrl: string;
}

export function NavMobile({ navLinks, cta, portalUrl, signinUrl }: NavMobileProps) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
      <ThemeToggle />
      <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}><Menu size={20} /></IconButton>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} slotProps={{ paper: { sx: { top: 'var(--template-frame-height, 0px)' } } }}>
        <Box sx={{ p: 2, bgcolor: 'background.default' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>
          </Box>
          {navLinks.map((link) => (
            <MenuItem key={link.path} sx={{ fontWeight: 600, display: 'flex', gap: 1.5, alignItems: 'center' }} onClick={() => { navigate(link.path); toggleDrawer(false)(); }}>
              {navIconMap[link.icon]} {link.label}
            </MenuItem>
          ))}
          <Divider sx={{ my: 2 }} />
          <MenuItem><Button color="primary" variant="primary" fullWidth onClick={() => { navigate('/contact'); toggleDrawer(false)(); }} startIcon={navIconMap[cta.signup.icon]}>{cta.signup.label}</Button></MenuItem>
          <MenuItem><Button color="primary" variant="outline" fullWidth href={signinUrl} startIcon={navIconMap[cta.signin.icon]}>{cta.signin.label}</Button></MenuItem>
          <MenuItem><Button color="inherit" variant="ghost" fullWidth href={portalUrl} startIcon={navIconMap[cta.portal.icon]}>{cta.portal.label}</Button></MenuItem>
        </Box>
      </Drawer>
    </Box>
  );
}
