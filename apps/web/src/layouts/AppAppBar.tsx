import * as React from 'react';
import { styled } from "@mui/material/styles";
import { LogIn, UserPlus, BookOpen, Mail, Home, Info, LayoutDashboard } from "lucide-react";
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
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();

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
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>
            <AssistantLogo />
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => navigate('/')} startIcon={<Home size={18} />}>
              Home
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => navigate('/courses')} startIcon={<BookOpen size={18} />}>
              Courses
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => navigate('/about')} startIcon={<Info size={18} />}>
              About
            </Button>
            <Button variant="text" color="info" size="small" sx={{ fontWeight: 600 }} onClick={() => navigate('/contact')} startIcon={<Mail size={18} />}>
              Contact
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
            <Button color="inherit" variant="text" size="small" sx={{ fontWeight: 600 }} onClick={() => navigate('/dashboard')} startIcon={<LayoutDashboard size={18} />}>
              Dashboard
            </Button>
            <Button color="primary" variant="text" size="small" sx={{ fontWeight: 600 }} href="http://localhost:5174/signin" startIcon={<LogIn size={18} />}>
              Sign in
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
                    <CloseIcon />
                  </IconButton>
                </Box>

                <MenuItem sx={{ fontWeight: 600 }} onClick={() => { navigate('/'); toggleDrawer(false)(); }}>Home</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => { navigate('/courses'); toggleDrawer(false)(); }}>Courses</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => { navigate('/about'); toggleDrawer(false)(); }}>About</MenuItem>
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => { navigate('/contact'); toggleDrawer(false)(); }}>Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem sx={{ fontWeight: 600 }} onClick={() => { navigate('/dashboard'); toggleDrawer(false)(); }}>
                  <LayoutDashboard size={18} style={{ marginRight: 8 }} /> Dashboard
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
