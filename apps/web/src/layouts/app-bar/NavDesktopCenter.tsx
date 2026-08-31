import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import { Skeleton } from '@repo/ui';
import { useNavigate } from 'react-router';
import { navIconMap } from './navIconMap';

export interface NavDesktopCenterProps {
  navLinks: { path: string; label: string; icon: string }[];
  isLoading: boolean;
}

export function NavDesktopCenter({ navLinks, isLoading }: NavDesktopCenterProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
      {isLoading
        ? [1, 2, 3, 4].map((i) => <Skeleton key={i} width={70} height={32} sx={{ mx: 0.5 }} />)
        : navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              color="info"
              size="small"
              sx={{ fontWeight: 600 }}
              onClick={() => navigate(link.path)}
              startIcon={navIconMap[link.icon]}
            >
              {link.label}
            </Button>
          ))}
    </Box>
  );
}
