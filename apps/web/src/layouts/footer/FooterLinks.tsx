import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function FooterLinks() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Product
        </Typography>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Features</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Testimonials</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Highlights</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Pricing</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>FAQs</Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Company
        </Typography>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>About us</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Careers</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Press</Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Legal
        </Typography>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Terms</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Privacy</Link>
        <Link variant="body2" href="#" sx={{ color: 'text.secondary' }}>Contact</Link>
      </Box>
    </>
  );
}
