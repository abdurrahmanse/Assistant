import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';
import { useFooterQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export function FooterLinks() {
  const navigate = useNavigate();
  const { data: footer, isLoading } = useFooterQuery();
  const linkSx = {
    color: 'text.secondary',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left' as const,
    p: 0,
  };

  if (isLoading) {
    return (
      <>
        {[1, 2, 3].map((g) => (
          <Box key={g} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
            <Skeleton width={80} height={18} />
            {[1, 2, 3].map((i) => <Skeleton key={i} width={100} height={16} />)}
          </Box>
        ))}
      </>
    );
  }

  return (
    <>
      {(footer?.linkGroups ?? []).map((group) => (
        <Box key={group.heading} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>{group.heading}</Typography>
          {group.links.map((link) =>
            link.path ? (
              <Link
                key={link.label}
                component="button"
                variant="body2"
                onClick={() => navigate(link.path!)}
                sx={linkSx}
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.label} href={link.href ?? '#'} variant="body2" sx={{ color: 'text.secondary' }}>
                {link.label}
              </Link>
            )
          )}
        </Box>
      ))}
    </>
  );
}
