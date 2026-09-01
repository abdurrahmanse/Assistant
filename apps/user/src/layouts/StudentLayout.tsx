import AssistantLogo from '@/components/AssistantLogo';
import { mockUser } from '@/data/mock';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useColorScheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import { Award, X as CloseIcon, Compass, FileText, LayoutDashboard, LogOut, Medal, Menu as MenuIcon, Moon, Settings, Sun, Trophy, User } from 'lucide-react';
import { Award, Compass, FileText, LayoutDashboard, LogOut, Medal, Settings, Sun, Moon, Trophy, User } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

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

export default function StudentLayout({ children, disableCustomTheme }: { children: React.ReactNode, disableCustomTheme?: boolean }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileDrawer = (newOpen: boolean) => () => {
    setMobileOpen(newOpen);
  };

  const { mode, setMode } = useColorScheme();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  const navItems: { label: string; path: string; icon: React.ReactNode; external?: boolean }[] = [
    { label: 'Dashboard', path: '/home', icon: <LayoutDashboard size={16} /> },
    { label: 'Assignments', path: '/assignments', icon: <FileText size={16} /> },
    { label: 'Marks', path: '/marks', icon: <Award size={16} /> },
    { label: 'Certificates', path: '/certificates', icon: <Medal size={16} /> },
    { label: 'Rankings', path: '/rankings', icon: <Trophy size={16} /> },
    { label: 'Profile', path: '/profile', icon: <User size={16} /> },
    { label: 'Discover', path: '/courses', icon: <Compass size={16} /> },
  ];

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      
      {/* Exact Same Fixed Navbar as Main Website */}
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 'none !important',
          bgcolor: 'transparent !important',
          backgroundImage: 'none !important',
          border: 'none !important',
          mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2, px: 1 }} onClick={() => handleNavigate('/home')}>
              <AssistantLogo />
            </Box>

            {/* Desktop Navigation (Center) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button 
                  key={item.label}
                  variant="ghost"
                  onClick={() => item.external ? window.location.href = item.path : handleNavigate(item.path)}
                  sx={{ 
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                    fontWeight: location.pathname === item.path ? 800 : 600,
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </Box>
            {/* Spacer to push right menu to the edge */}
            <Box sx={{ flexGrow: 1 }} />

            {/* User Menu (Right) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton 
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                color="inherit"
                size="small"
                sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}
              >
                {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              
              <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="subtitle2" fontWeight={800}>{mockUser.name}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Student</Typography>
              </Box>
              
              <IconButton onClick={handleMenu} size="small" sx={{ p: 0.5, border: '2px solid', borderColor: 'divider', borderRadius: '50%' }}>
                <Avatar sx={{ width: 32, height: 32 }} src={mockUser.avatar} />
              </IconButton>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.1))',
                    mt: 1.5,
                    borderRadius: '16px',
                    minWidth: 200,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1.5, display: { xs: 'block', sm: 'none' } }}>
                  <Typography variant="subtitle2" fontWeight={800}>{mockUser.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{mockUser.email}</Typography>
                  <Divider sx={{ mt: 1.5 }} />
                </Box>
                
                {navItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => item.external ? window.location.href = item.path : handleNavigate(item.path)} sx={{ py: 1.5, fontWeight: 600 }}>
                    <Box sx={{ mr: 1.5, display: 'flex', color: 'text.secondary' }}>
                      {item.icon}
                    </Box>
                    {item.label}
                  </MenuItem>
                ))}
                
                <Divider />
                <MenuItem onClick={() => handleNavigate('/settings')} sx={{ py: 1.5, fontWeight: 600 }}>
                  <Box sx={{ mr: 1.5, display: 'flex', color: 'text.secondary' }}><Settings size={16} /></Box>
                  Account Settings
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/signin')} sx={{ py: 1.5, fontWeight: 600, color: 'error.main' }}>
                  <Box sx={{ mr: 1.5, display: 'flex', color: 'error.main' }}><LogOut size={16} /></Box>
                  Sign Out
                </MenuItem>
              </Menu>
            </Box>

            {/* Mobile Navigation Drawer */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleMobileDrawer(true)}>
                <MenuIcon size={20} />
              </IconButton>
              <Drawer anchor="top" open={mobileOpen} onClose={toggleMobileDrawer(false)} slotProps={{ paper: { sx: { top: 'var(--template-frame-height, 0px)' } } }}>
                <Box sx={{ p: 2, bgcolor: 'background.default' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                    <IconButton onClick={toggleMobileDrawer(false)}><CloseIcon size={20} /></IconButton>
                  </Box>
                  {navItems.map((link) => (
                    <MenuItem key={link.label} sx={{ fontWeight: 600, display: 'flex', gap: 1.5, alignItems: 'center', py: 1.5 }} 
                      onClick={() => {
                        if (link.external) window.location.href = link.path;
                        else { navigate(link.path); toggleMobileDrawer(false)(); }
                      }}>
                      {link.icon} {link.label}
                    </MenuItem>
                  ))}
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={[
        { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
        (theme) => ({
          '&::before': {
            content: '""', display: 'block', position: 'fixed', zIndex: -1, inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            ...theme.applyStyles('dark', {
              backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
            }),
          }
        })
      ]}>
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: '100px' }}>
        {children}
      </Box>

      {/* Footer Exact Match */}
      <Box component="footer" sx={{ py: 4, textAlign: 'center', borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary" fontWeight={600}>
          © {new Date().getFullYear()} Learn with Abdur Rahman. All rights reserved.
        </Typography>
      </Box>
    </Box>
    </AppTheme>
  );
}
