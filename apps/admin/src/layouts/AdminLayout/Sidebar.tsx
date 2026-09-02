import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router';
import { 
  LayoutDashboard, Users, BookOpen, Video, Settings, 
  TerminalSquare, Ticket, FileText, BadgeCheck, LogOut
} from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';
import AssistantLogo from '@/components/AssistantLogo';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Members', href: '/users', icon: Users },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Content Hub', href: '/content', icon: Video },
  { name: 'System Settings', href: '/system', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <Box sx={(theme) => ({
      width: 280,
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      borderRight: '1px solid',
      borderColor: alpha(theme.palette.divider, 0.5),
      bgcolor: 'background.paper',
      ...theme.applyStyles('dark', { bgcolor: '#0b0f19', borderColor: alpha(theme.palette.divider, 0.1) }),
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1200
    })}>
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <AssistantLogo />
      </Box>

      <Typography variant="overline" sx={{ px: 3, mt: 2, mb: 1, color: 'text.secondary', fontWeight: 800 }}>Admin Console</Typography>

      <Stack spacing={1} sx={{ px: 2, flexGrow: 1 }}>
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
          return (
            <Box
              key={item.name}
              component={NavLink}
              to={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2,
                py: 1.5,
                borderRadius: '12px',
                color: isActive ? brand[500] : 'text.secondary',
                bgcolor: isActive ? alpha(brand[500], 0.1) : 'transparent',
                textDecoration: 'none',
                fontWeight: isActive ? 700 : 600,
                transition: 'all 0.2s',
                border: isActive ? `1px solid ${alpha(brand[500], 0.2)}` : '1px solid transparent',
                '&:hover': {
                  bgcolor: isActive ? alpha(brand[500], 0.15) : 'action.hover',
                  color: isActive ? brand[500] : 'text.primary',
                }
              }}
            >
              <item.icon size={20} />
              {item.name}
            </Box>
          );
        })}
      </Stack>

      <Box sx={{ p: 2 }}>
        <Box
          component={NavLink}
          to="/signin"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 2,
            py: 1.5,
            borderRadius: '12px',
            color: 'error.main',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.2s',
            '&:hover': { bgcolor: 'error.50' }
          }}
        >
          <LogOut size={20} />
          Sign Out
        </Box>
      </Box>
    </Box>
  );
}
