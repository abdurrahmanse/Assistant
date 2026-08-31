import os
import glob

# 1. Update MarketingLayout.tsx to have a single Container
with open('apps/web/src/layouts/MarketingLayout.tsx', 'r') as f:
    marketing = f.read()
if 'import Container from' not in marketing:
    marketing = marketing.replace("import CssBaseline", "import CssBaseline from '@mui/material/CssBaseline';\nimport Container from '@mui/material/Container';\nimport Box from '@mui/material/Box';")
    marketing = marketing.replace("<main>\n        {children}\n      </main>", "<Box component=\"main\" sx={{ flexGrow: 1 }}>\n        <Container maxWidth=\"lg\">\n          {children}\n        </Container>\n      </Box>")
with open('apps/web/src/layouts/MarketingLayout.tsx', 'w') as f:
    f.write(marketing)

# 2. Update all components to replace styled(Container) with styled(Box)
for filepath in glob.glob('apps/web/src/features/**/*.styles.ts', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    content = content.replace("import Container from '@mui/material/Container';", "")
    content = content.replace("styled(Container)", "styled(Box)")
    # Also remove fixed heights
    content = content.replace("height: '100%',", "minHeight: '100%',")
    content = content.replace("height: '64px',", "minHeight: '64px',")
    with open(filepath, 'w') as f:
        f.write(content)

def remove_container_tag(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Remove imports
    content = content.replace("import Container from '@mui/material/Container';\n", "")
    
    # Remove <Container maxWidth="lg"> and </Container>
    content = content.replace('<Container maxWidth="lg">', '')
    content = content.replace('</Container>', '')
    
    with open(filepath, 'w') as f:
        f.write(content)

# 3. Apply to pages and components
for filepath in glob.glob('apps/web/src/pages/*.tsx'):
    remove_container_tag(filepath)
    
for filepath in glob.glob('apps/web/src/features/**/*.tsx', recursive=True):
    remove_container_tag(filepath)
    
