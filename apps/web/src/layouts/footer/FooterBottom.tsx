import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

export function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link href="https://mui.com/" sx={{ color: 'text.secondary' }}>
        Assistant
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export function FooterBottom() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: { xs: 4, sm: 8 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <div>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
          Privacy Policy
        </Link>
        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>
          Terms of Service
        </Link>
        <Copyright />
      </div>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ justifyContent: 'left', color: 'text.secondary' }}
      >
        <IconButton
          color="inherit"
          size="small"
          href="https://github.com/mui"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://x.com/MaterialUI"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://www.linkedin.com/company/mui/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
        </IconButton>
      </Stack>
    </Box>
  );
}
