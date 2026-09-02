import type { SxProps, Theme } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export const styles = {
  card: ((theme: Theme) => ({
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    borderRadius: '16px', 
    border: '1px solid', 
    borderColor: alpha(theme.palette.divider, 0.5),
    bgcolor: theme.palette.background.paper,
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `0 4px 24px rgba(0,0,0,0.05)`,
    ...theme.applyStyles('dark', { 
      borderColor: alpha(theme.palette.divider, 0.2), 
      bgcolor: '#0b0f19',
      boxShadow: `0 8px 32px rgba(0,0,0,0.4)`
    }),
    '&::after': {
      content: '""', position: 'absolute', inset: 0,
      borderRadius: '16px', border: '1px solid transparent',
      transition: 'border-color 0.3s',
      pointerEvents: 'none'
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 16px 40px ${alpha(brand[500], 0.1)}`,
      '&::after': {
        borderColor: alpha(brand[400], 0.4),
      }
    }
  })) as SxProps<Theme>,
  thumbnailWrapper: { 
    width: '100%', 
    aspectRatio: '16/9', 
    position: 'relative', 
    overflow: 'hidden',
    bgcolor: '#0f172a'
  },
  image: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    opacity: 0.9,
    transition: 'opacity 0.3s'
  },
  priceChipWrapper: { 
    position: 'absolute', 
    top: 16, 
    right: 16 
  },
  priceChip: { 
    fontWeight: 600, 
    borderRadius: '6px', 
    bgcolor: 'rgba(15, 23, 42, 0.7)', 
    color: '#fff', 
    backdropFilter: 'blur(8px)',
    border: `1px solid rgba(255,255,255,0.1)`
  },
  contentWrapper: { 
    p: 3, 
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1 
  },
  tagChip: { 
    borderRadius: '4px', 
    fontWeight: 600, 
    bgcolor: alpha(brand[500], 0.1), 
    color: brand[500],
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  title: { 
    fontWeight: 700, 
    mb: 1.5, 
    lineHeight: 1.2, 
    letterSpacing: '-0.02em'
  },
  author: { 
    fontWeight: 500, 
    mb: 3,
    color: 'text.secondary'
  },
  footer: { 
    mt: 'auto' 
  },
  statsRow: { 
    color: brand[400] 
  },
  studentsRow: { 
    color: 'text.secondary',
    fontSize: '0.85rem'
  }
};
