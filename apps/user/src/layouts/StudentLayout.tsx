import AssistantLogo from '@/components/AssistantLogo';
import { mockUser } from '@/data/mock';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { styled, useColorScheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Award, Bell, BookOpen, Compass, CreditCard, FileText, Flame, LayoutDashboard, LifeBuoy, LogOut, Medal, Moon, Settings, Sun, Trophy, User } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { styles } from './StudentLayout.styles';

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

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const topBarItems = [
    { label: 'Dashboard', path: '/home' },
    { label: 'My Courses', path: '/my-courses' },
    { label: 'Discover', path: '/courses' },
    { label: 'Announcements', path: '/announcements' },
    { label: 'Support', path: '/support' },
  ];

  const dropdownItems = [
    { label: 'Profile', path: '/profile', icon: <User size={16} /> },
    { label: 'Assignments', path: '/assignments', icon: <FileText size={16} /> },
    { label: 'Marks', path: '/marks', icon: <Award size={16} /> },
    { label: 'Certificates', path: '/certificates', icon: <Medal size={16} /> },
    { label: 'Rankings', path: '/rankings', icon: <Trophy size={16} /> },
  ];

  return (
    <>
      <CssBaseline enableColorScheme />
      
      {/* Exact Same Fixed Navbar as Main Website */}
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={styles.appBar}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            {/* Logo */}
            <Box sx={styles.logoWrapper} onClick={() => handleNavigate('/home')}>
              <AssistantLogo />
            </Box>

            {/* Desktop Navigation */}
            <Stack direction="row" spacing={1} sx={styles.desktopNavStack}>
              {topBarItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <Box
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    sx={styles.navItem(isActive)}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Stack>

            {/* Spacer to push right menu to the edge */}
            <Box sx={{ flexGrow: 1 }} />

            {/* User Menu (Right) */}
            <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
              {/* Streak Counter */}
              <Box sx={styles.streakBadge}>
                <Flame size={18} fill="currentColor" />
                <Typography variant="body2" fontWeight={800} sx={{ display: { xs: 'none', sm: 'block' } }}>{`3 Day Streak`}</Typography>
                <Typography variant="body2" fontWeight={800} sx={{ display: { xs: 'block', sm: 'none' } }}>{`3`}</Typography>
              </Box>

              <IconButton 
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                color="inherit"
                size="small"
                sx={styles.themeToggle}
              >
                {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              
              <Box sx={styles.userInfoBlock}>
                <Typography variant="subtitle2" fontWeight={800}>{mockUser.name}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>Student</Typography>
              </Box>
              
              <IconButton onClick={handleMenu} size="small" sx={styles.avatarButton}>
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
                  sx: styles.menuPaper,
                }}
              >
                <Box sx={styles.mobileUserInfo}>
                  <Typography variant="subtitle2" fontWeight={800}>{mockUser.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{mockUser.email}</Typography>
                  <Divider sx={{ mt: 1.5 }} />
                </Box>
                
                {/* Mobile Navigation Links (Hidden on Desktop) */}
                <Box sx={styles.mobileNavBlock}>
                  {topBarItems.map((item) => (
                    <MenuItem key={item.label} onClick={() => handleNavigate(item.path)} sx={styles.menuItem}>
                      <Box sx={styles.menuItemIcon}>
                        {item.label === 'Dashboard' && <LayoutDashboard size={16} />}
                        {item.label === 'My Courses' && <BookOpen size={16} />}
                        {item.label === 'Discover' && <Compass size={16} />}
                        {item.label === 'Announcements' && <Bell size={16} />}
                        {item.label === 'Support' && <LifeBuoy size={16} />}
                      </Box>
                      {item.label}
                    </MenuItem>
                  ))}
                  <Divider />
                </Box>
                
                {dropdownItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => handleNavigate(item.path)} sx={styles.menuItem}>
                    <Box sx={styles.menuItemIcon}>
                      {item.icon}
                    </Box>
                    {item.label}
                  </MenuItem>
                ))}
                
                <Divider />
                <MenuItem onClick={() => handleNavigate('/settings')} sx={styles.menuItem}>
                  <Box sx={styles.menuItemIcon}><Settings size={16} /></Box>
                  Account Settings
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/billing')} sx={styles.menuItem}>
                  <Box sx={styles.menuItemIcon}><CreditCard size={16} /></Box>
                  Billing & Subscription
                </MenuItem>
                <MenuItem onClick={() => handleNavigate('/signin')} sx={styles.signOutMenuItem}>
                  <Box sx={styles.signOutIcon}><LogOut size={16} /></Box>
                  Sign Out
                </MenuItem>
              </Menu>
            </Stack>

          </StyledToolbar>
        </Container>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={styles.mainWrapper}>
        <Box component="main" sx={styles.mainContent}>
          {children}
        </Box>

        {/* Footer Exact Match */}
        <Box component="footer" sx={styles.footer}>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            © {new Date().getFullYear()} Learn with Abdur Rahman. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
