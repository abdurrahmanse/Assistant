import type { SxProps, Theme } from '@mui/material/styles';

export const styles = {
  colorModeSelect: { 
    position: 'fixed', 
    top: '1rem', 
    right: '1rem' 
  } as SxProps<Theme>,
  
  mainStack: {
    justifyContent: 'center',
    height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
    marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
    minHeight: '100vh',
    bgcolor: 'background.default'
  } as SxProps<Theme>,
  
  outerStack: {
    justifyContent: 'center',
    gap: { xs: 6, sm: 12 },
    p: 2,
    mx: 'auto',
  } as SxProps<Theme>,
  
  innerStack: {
    justifyContent: 'center',
    gap: { xs: 6, sm: 12 },
    p: { xs: 2, sm: 4 },
    m: 'auto',
  } as SxProps<Theme>
};
