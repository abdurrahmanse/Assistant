import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useNavQuery, useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { NavLogo } from './app-bar/NavLogo';
import { NavDesktopCenter } from './app-bar/NavDesktopCenter';
import { NavDesktopRight } from './app-bar/NavDesktopRight';
import { NavMobile } from './app-bar/NavMobile';

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
  const { data: navData, isLoading: navLoading } = useNavQuery();
  const { data: siteMeta } = useSiteMetaQuery();

  const portalUrl = siteMeta?.portalUrl ?? 'http://localhost:5174';
  const signinUrl = siteMeta?.signinUrl ?? 'http://localhost:5174/signin';
  
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
          <NavLogo />
          <NavDesktopCenter navLinks={navLinks} isLoading={navLoading} />
          <NavDesktopRight cta={cta} portalUrl={portalUrl} signinUrl={signinUrl} />
          <NavMobile navLinks={navLinks} cta={cta} portalUrl={portalUrl} signinUrl={signinUrl} />
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
