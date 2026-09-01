import { Theme } from '@mui/material/styles';
import type { Theme, SxProps } from '@mui/material/styles';

export const styles = {
  card: (theme: Theme) => ({
  card: ((theme: Theme) => ({
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    borderRadius: '24px', 
    border: '2px solid', 
    borderColor: 'rgba(0,0,0,0.1)',
    bgcolor: 'rgba(255,255,255,0.6)',
    ...theme.applyStyles('dark', { 
      borderColor: 'rgba(255,255,255,0.1)', 
      bgcolor: 'rgba(20,20,25,0.6)' 
    }),
    backdropFilter: 'blur(24px)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '8px 8px 0px rgba(99,102,241,1)',
      borderColor: 'primary.main',
    }
  }),
  })) as SxProps<Theme>,
  thumbnailWrapper: { 
    width: '100%', 
    aspectRatio: '16/9', 
    position: 'relative', 
    overflow: 'hidden' 
  },
  image: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
  priceChipWrapper: { 
    position: 'absolute', 
    top: 16, 
    right: 16 
  },
  priceChip: { 
    fontWeight: 700, 
    borderRadius: '8px', 
    bgcolor: 'background.paper', 
    color: 'text.primary', 
    border: '2px solid #000', 
    boxShadow: '2px 2px 0px #000' 
  },
  contentWrapper: { 
    p: 3, 
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1 
  },
  tagChip: { 
    borderRadius: '6px', 
    fontWeight: 700, 
    bgcolor: 'primary.50', 
    color: 'primary.main' 
  },
  title: { 
    fontWeight: 700, 
    mb: 1.5, 
    lineHeight: 1.2, 
    letterSpacing: '-0.02em' 
  },
  author: { 
    fontWeight: 600, 
    mb: 3 
  },
  footer: { 
    mt: 'auto' 
  },
  statsRow: { 
    color: '#f59e0b' 
  },
  studentsRow: { 
    color: 'text.secondary' 
  }
};
