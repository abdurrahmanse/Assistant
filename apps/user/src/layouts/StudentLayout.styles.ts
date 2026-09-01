import type { SxProps, Theme } from '@mui/material/styles';

export const styles = {
  appBar: {
    boxShadow: 'none !important',
    bgcolor: 'transparent !important',
    backgroundImage: 'none !important',
    border: 'none !important',
    mt: 'calc(var(--template-frame-height, 0px) + 28px)',
  } as SxProps<Theme>,
  
  logoWrapper: { 
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer', 
    mr: 2, 
    px: 1 
  } as SxProps<Theme>,
  
  desktopNavStack: { 
    display: { xs: 'none', md: 'flex' }, 
    ml: 2 
  } as SxProps<Theme>,
  
  navItem: (isActive: boolean): SxProps<Theme> => ({
    px: 2,
    py: 1,
    cursor: 'pointer',
    borderRadius: '8px',
    typography: 'subtitle2',
    fontWeight: 700,
    color: isActive ? 'primary.main' : 'text.primary',
    bgcolor: isActive ? 'primary.50' : 'transparent',
    transition: 'all 0.2s',
    '&:hover': {
      bgcolor: isActive ? 'primary.50' : 'action.hover',
    }
  }),

  streakBadge: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1, 
    px: 2, 
    py: 0.75, 
    borderRadius: '12px', 
    bgcolor: 'rgba(249, 115, 22, 0.1)', 
    color: '#f97316', 
    fontWeight: 800 
  } as SxProps<Theme>,

  themeToggle: { 
    transition: 'transform 0.2s', 
    '&:hover': { transform: 'scale(1.1)' } 
  } as SxProps<Theme>,

  userInfoBlock: { 
    textAlign: 'right', 
    display: { xs: 'none', sm: 'block' } 
  } as SxProps<Theme>,

  avatarButton: { 
    p: 0.5, 
    border: '2px solid', 
    borderColor: 'divider', 
    borderRadius: '50%' 
  } as SxProps<Theme>,

  menuPaper: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.1))',
    mt: 1.5,
    borderRadius: '16px',
    minWidth: 200,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper'
  } as SxProps<Theme>,

  mobileUserInfo: { 
    px: 2, 
    py: 1.5, 
    display: { xs: 'block', sm: 'none' } 
  } as SxProps<Theme>,

  mobileNavBlock: { 
    display: { md: 'none' } 
  } as SxProps<Theme>,

  menuItem: { 
    py: 1.5, 
    fontWeight: 700 
  } as SxProps<Theme>,
  
  menuItemIcon: { 
    mr: 1.5, 
    display: 'flex', 
    color: 'text.secondary' 
  } as SxProps<Theme>,

  signOutMenuItem: { 
    py: 1.5, 
    fontWeight: 700, 
    color: 'error.main' 
  } as SxProps<Theme>,
  
  signOutIcon: { 
    mr: 1.5, 
    display: 'flex', 
    color: 'error.main' 
  } as SxProps<Theme>,

  mainWrapper: { 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    bgcolor: 'background.default' 
  } as SxProps<Theme>,
  
  mainContent: { 
    flexGrow: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    pt: '100px' 
  } as SxProps<Theme>,

  footer: { 
    py: 4, 
    textAlign: 'center', 
    borderTop: '1px solid', 
    borderColor: 'divider', 
    bgcolor: 'background.paper', 
    mt: 'auto' 
  } as SxProps<Theme>
};
