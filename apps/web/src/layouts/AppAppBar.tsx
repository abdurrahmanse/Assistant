import * as React from 'react';
import { styled, alpha } from "@mui/material/styles";
import { Star, MessageSquare, Sparkles, CreditCard, HelpCircle, ChevronRight, LogIn, UserPlus } from "lucide-react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { Menu, X as CloseIcon } from "lucide-react";
import ColorModeIconDropdown from '@repo/ui/shared-theme/ColorModeIconDropdown';
import AssistantLogo from '@/components/AssistantLogo';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(9, 9, 11, 0.4)',
  }),
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 'none !important',
        bgcolor: 'transparent !important',
        backgroundImage: 'none !important',
        border: 'none !important',
        outline: 'none !important',
        backdropFilter: 'none !important',
        WebkitBackdropFilter: 'none !important',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <AssistantLogo />
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} startIcon={<Star size={18} />}>
              Features
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} startIcon={<MessageSquare size={18} />}>
              Testimonials
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })} startIcon={<Sparkles size={18} />}>
              Highlights
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} startIcon={<CreditCard size={18} />}>
              Pricing
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600, minWidth: 0 }} onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} startIcon={<HelpCircle size={18} />}>
              FAQ
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600, minWidth: 0 }} startIcon={<ChevronRight size={18} />}>
              Blog
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Button color="primary" variant="text" size="small" sx={{ fontWeight: 600 }} href="http://localhost:5174/signin" startIcon={<LogIn size={18} />}>
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small" sx={{ fontWeight: 600 }} href="http://localhost:5174/signup" startIcon={<UserPlus size={18} />}>
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <Menu size={20} />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                paper: {
                  sx: {
                    top: 'var(--template-frame-height, 0px)',
                  },
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                  </IconButton>
                </Box>

                <MenuItem sx={{ fontWeight: 600 }} onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}>Highlights</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }}>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem sx={{ fontWeight: 600 }}>
                  <Button color="primary" variant="contained" fullWidth href="http://localhost:5174/signup" startIcon={<UserPlus size={18} />}>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem sx={{ fontWeight: 600 }}>
                  <Button color="primary" variant="outlined" fullWidth href="http://localhost:5174/signin" startIcon={<LogIn size={18} />}>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
