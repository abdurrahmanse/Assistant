import { Theme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export const styles = {
  appBar: {
    boxShadow: 'none !important',
    bgcolor: 'transparent !important',
    backgroundImage: 'none !important',
    border: 'none !important',
    mt: 'calc(var(--template-frame-height, 0px) + 28px)',
  },
  logoWrapper: { 
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer', 
    mr: 2, 
    px: 1 
  },
  spacer: { 
    flexGrow: 1 
  },
  streakBox: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1, 
    px: 2, 
    py: 0.75, 
    borderRadius: '12px', 
    bgcolor: 'rgba(249, 115, 22, 0.1)', 
    color: '#f97316', 
    fontWeight: 800 
  },
  streakTextDesktop: { 
    display: { xs: 'none', sm: 'block' } 
  },
  streakTextMobile: { 
    display: { xs: 'block', sm: 'none' } 
  },
  themeToggle: { 
    transition: 'transform 0.2s', 
    '&:hover': { transform: 'scale(1.1)' } 
  },
  userInfoBox: { 
    textAlign: 'right', 
    display: { xs: 'none', sm: 'block' } 
  },
  userRole: { 
    fontWeight: 600 
  },
  avatarButton: { 
    p: 0.5, 
    border: '2px solid', 
    borderColor: 'divider', 
    borderRadius: '50%' 
  },
  avatar: { 
    width: 32, 
    height: 32 
  },
  menuPaper: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.1))',
    mt: 1.5,
    borderRadius: '16px',
    minWidth: 200,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper'
  },
  mobileMenuHeader: { 
    px: 2, 
    py: 1.5, 
    display: { xs: 'block', sm: 'none' } 
  },
  menuItem: { 
    py: 1.5, 
    fontWeight: 700 
  },
  menuItemIcon: { 
    mr: 1.5, 
    display: 'flex', 
    color: 'text.secondary' 
  },
  signOutItem: { 
    py: 1.5, 
    fontWeight: 700, 
    color: 'error.main' 
  },
  signOutIcon: { 
    mr: 1.5, 
    display: 'flex', 
    color: 'error.main' 
  },
  mainWrapper: [
    { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
    (theme: Theme) => ({
      '&::before': {
        content: '""', display: 'block', position: 'fixed', zIndex: -1, inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        ...theme.applyStyles('dark', {
          backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
      }
    })
  ],
  mainContent: { 
    flexGrow: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    pt: '100px' 
  },
  footer: { 
    py: 4, 
    textAlign: 'center', 
    borderTop: '1px solid', 
    borderColor: 'divider', 
    bgcolor: 'background.paper', 
    mt: 'auto' 
  },
  footerText: { 
    fontWeight: 600 
  }
};
