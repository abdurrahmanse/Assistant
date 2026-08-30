import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '@repo/ui/shared-theme/ColorModeIconDropdown';
import AssistantLogo from './AssistantLogo';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
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
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <AssistantLogo />
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Button variant="text" color="info" size="small" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Features
            </Button>
            <Button variant="text" color="info" size="small" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>
              Testimonials
            </Button>
            <Button variant="text" color="info" size="small" onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}>
              Highlights
            </Button>
            <Button variant="text" color="info" size="small" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Pricing
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
              FAQ
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
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
            <Button color="primary" variant="text" size="small" href="http://localhost:5174/signin">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small" href="http://localhost:5174/signup">
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
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
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</MenuItem>
                <MenuItem onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</MenuItem>
                <MenuItem onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}>Highlights</MenuItem>
                <MenuItem onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</MenuItem>
                <MenuItem onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth href="http://localhost:5174/signup">
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth href="http://localhost:5174/signin">
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
