import type { SxProps, Theme } from '@mui/material/styles';

export const styles = {
  container: { 
    py: { xs: 4, md: 8 } 
  } as SxProps<Theme>,
  
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
  
  gridRow1: { 
    mb: 3 
  } as SxProps<Theme>,
  
  gridRow2: { 
    mb: 8 
  } as SxProps<Theme>,
  
  activityPaper: { 
    p: 4, 
    height: '100%', 
    borderRadius: '24px', 
    border: '1px solid', 
    borderColor: 'divider', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)', 
    display: 'flex', 
    flexDirection: 'column' 
  } as SxProps<Theme>,
  
  activityHeaderStack: { 
    mb: 4 
  } as SxProps<Theme>,
  
  activityTitle: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1 
  } as SxProps<Theme>,
  
  chartWrapper: { 
    width: '100%', 
    flexGrow: 1, 
    minHeight: 250 
  } as SxProps<Theme>
};
