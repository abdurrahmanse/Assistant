import os

new_content = """import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
    <Box 
      component="a" 
      href="/" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        textDecoration: 'none',
        '&:hover': { opacity: 0.8 }
      }}
    >
      <img src="/logo.jpg" alt="Assistant Logo" style={{ height: 32, width: 'auto', borderRadius: 8 }} />
    </Box>
  );
}
"""

paths = [
    'apps/admin/src/components/SitemarkIcon.tsx',
    'apps/user/src/components/SitemarkIcon.tsx'
]

for p in paths:
    if os.path.exists(p):
        with open(p, 'w') as f:
            f.write(new_content)
