import type { SxProps, Theme } from '@mui/material/styles';

export const styles = {
  headerWrapper: { 
    mb: 6, 
    display: 'flex', 
    alignItems: 'center', 
    gap: 2 
  } as SxProps<Theme>,
  
  headerIconBox: { 
    p: 2, 
    bgcolor: 'primary.main', 
    color: 'white', 
    borderRadius: '16px', 
    boxShadow: '0 8px 16px rgba(236,72,153,0.3)' 
  } as SxProps<Theme>,
  
  banner: { 
    height: 100, 
    background: 'linear-gradient(135deg, var(--template-palette-primary-main) 0%, var(--template-palette-secondary-main) 100%)' 
  } as SxProps<Theme>,
  
  cardContent: { 
    pt: 0, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center' 
  } as SxProps<Theme>,
  
  avatarWrapper: { 
    position: 'relative', 
    mt: -6, 
    mb: 2 
  } as SxProps<Theme>,
  
  avatar: { 
    width: 100, 
    height: 100, 
    border: '4px solid', 
    borderColor: 'background.paper',
    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
  } as SxProps<Theme>,
  
  cameraButton: { 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    bgcolor: 'primary.main', 
    color: 'white', 
    p: 0.75, 
    borderRadius: '50%', 
    cursor: 'pointer',
    border: '2px solid', 
    borderColor: 'background.paper',
    transition: 'transform 0.2s', 
    '&:hover': { transform: 'scale(1.1)' }
  } as SxProps<Theme>,
  
  verifiedBadge: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1, 
    color: 'success.main', 
    mb: 3 
  } as SxProps<Theme>,
  
  statsRow: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  } as SxProps<Theme>,
  
  formCardContent: { 
    p: { xs: 3, md: 4 } 
  } as SxProps<Theme>,
  
  actionButtons: { 
    display: 'flex', 
    justifyContent: 'flex-end', 
    gap: 2, 
    pt: 2 
  } as SxProps<Theme>
};
