import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { Skeleton } from '@repo/ui';
import { useSiteMetaQuery, useFooterQuery } from '@/features/landing/hooks/queries/useLandingQuery';

function CopyrightText({ name }: { name: string }) {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link href="/" sx={{ color: 'text.secondary' }}>{name}</Link>
      {' '}{new Date().getFullYear()}
    </Typography>
  );
}

export function FooterBottom() {
  const { data: siteMeta, isLoading: metaLoading } = useSiteMetaQuery();
  const { data: footer, isLoading: footerLoading } = useFooterQuery();
  const isLoading = metaLoading || footerLoading;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        pt: { xs: 4, sm: 8 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <div>
        {isLoading ? (
          <>
            <Skeleton width={220} height={18} />
            <Skeleton width={160} height={16} sx={{ mt: 0.5 }} />
          </>
        ) : (
          <>
            {(footer?.legalLinks ?? []).map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <Typography component="span" sx={{ mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>}
                <Link variant="body2" href={link.href ?? '#'} sx={{ color: 'text.secondary' }}>
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
            <CopyrightText name={siteMeta?.copyright ?? 'Learn with Abdur Rahman'} />
          </>
        )}
      </div>

      <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left', color: 'text.secondary' }}>
        <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.github ?? '#'} aria-label="GitHub" sx={{ alignSelf: 'center' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.twitter ?? '#'} aria-label="X (Twitter)" sx={{ alignSelf: 'center' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" size="small" href={siteMeta?.socialLinks?.linkedin ?? '#'} aria-label="LinkedIn" sx={{ alignSelf: 'center' }}>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
