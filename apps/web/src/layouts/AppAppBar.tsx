import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Menu, X as CloseIcon, Home, BookOpen, Info, Mail, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';
import ColorModeIconDropdown from '@repo/ui/shared-theme/ColorModeIconDropdown';
import AssistantLogo from '@/components/AssistantLogo';
import { useNavigate } from 'react-router';
import { useNavQuery, useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';

// Icon map driven entirely by the data layer
const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={18} />,
  BookOpen: <BookOpen size={18} />,
  Info: <Info size={18} />,
  Mail: <Mail size={18} />,
  LayoutDashboard: <LayoutDashboard size={18} />,
  LogIn: <LogIn size={18} />,
  UserPlus: <UserPlus size={18} />,
};

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
  const { data: navData, isLoading: navLoading } = useNavQuery();
  const { data: siteMeta } = useSiteMetaQuery();

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const portalUrl = siteMeta?.portalUrl ?? 'http://localhost:5174';
  const signinUrl = siteMeta?.signinUrl ?? 'http://localhost:5174/signin';
  const signupUrl = siteMeta?.signupUrl ?? 'http://localhost:5174/signup';

  const navLinks = navData?.links ?? [];
  const cta = navData?.cta ?? { portal: { label: 'My Portal', icon: 'LayoutDashboard' }, signin: { label: 'Sign in', icon: 'LogIn' }, signup: { label: 'Sign up free', icon: 'UserPlus' } };

  return (
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
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <AssistantLogo />
          </Box>

          {/* Center nav — desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {navLoading
              ? [1, 2, 3, 4].map((i) => <Skeleton key={i} width={70} height={32} sx={{ mx: 0.5 }} />)
              : navLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="text"
                    color="info"
                    size="small"
                    sx={{ fontWeight: 600 }}
                    onClick={() => navigate(link.path)}
                    startIcon={iconMap[link.icon]}
                  >
                    {link.label}
                  </Button>
                ))}
          </Box>

          {/* Right CTAs — desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button color="inherit" variant="text" size="small" sx={{ fontWeight: 600 }} href={portalUrl} startIcon={iconMap[cta.portal.icon]}>
              {cta.portal.label}
            </Button>
            <Button color="primary" variant="text" size="small" sx={{ fontWeight: 600 }} href={signinUrl} startIcon={iconMap[cta.signin.icon]}>
              {cta.signin.label}
            </Button>
            <Button color="primary" variant="contained" size="small" sx={{ fontWeight: 700 }} href={signupUrl} startIcon={iconMap[cta.signup.icon]}>
              {cta.signup.label}
            </Button>
            <ColorModeIconDropdown />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}><Menu size={20} /></IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} slotProps={{ paper: { sx: { top: 'var(--template-frame-height, 0px)' } } }}>
              <Box sx={{ p: 2, bgcolor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>
                </Box>
                {navLinks.map((link) => (
                  <MenuItem key={link.path} sx={{ fontWeight: 600 }} onClick={() => { navigate(link.path); toggleDrawer(false)(); }}>
                    {link.label}
                  </MenuItem>
                ))}
                <Divider sx={{ my: 2 }} />
                <MenuItem><Button color="primary" variant="contained" fullWidth href={signupUrl} startIcon={iconMap[cta.signup.icon]}>{cta.signup.label}</Button></MenuItem>
                <MenuItem><Button color="primary" variant="outlined" fullWidth href={signinUrl} startIcon={iconMap[cta.signin.icon]}>{cta.signin.label}</Button></MenuItem>
                <MenuItem><Button color="inherit" variant="text" fullWidth href={portalUrl} startIcon={iconMap[cta.portal.icon]}>{cta.portal.label}</Button></MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
