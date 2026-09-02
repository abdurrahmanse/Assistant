import type { SxProps, Theme } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export const styles = {
  headerWrapper: { 
    mb: 6, 
    display: 'flex', 
    alignItems: 'center', 
    gap: 2 
  } as SxProps<Theme>,
  
  headerIconBox: { 
    p: 2, 
    bgcolor: alpha(brand[500], 0.1), 
    color: brand[500], 
    borderRadius: '16px', 
    border: `1px solid ${alpha(brand[500], 0.2)}`,
    boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
  } as SxProps<Theme>,
  
  banner: { 
    height: 120, 
    background: `linear-gradient(135deg, ${alpha(brand[800], 0.9)} 0%, ${alpha(brand[500], 0.9)} 100%)`,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
    }
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
    boxShadow: `0 8px 24px rgba(0,0,0,0.1)`
  } as SxProps<Theme>,
  
  cameraButton: { 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    bgcolor: brand[500], 
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
    color: '#10b981', 
    mb: 3,
    bgcolor: alpha('#10b981', 0.1),
    px: 1.5, py: 0.5, borderRadius: '8px'
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
