const fs = require('fs');
const path = 'apps/user/src/layouts/StudentLayout.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('CommandPalette')) {
  content = content.replace("import Box from '@mui/material/Box';", "import Box from '@mui/material/Box';\nimport { CommandPalette } from '@/components/ui/CommandPalette';");
  
  content = content.replace(
    "</Box>\n    </Box>\n  );\n}", 
    "  <CommandPalette />\n      </Box>\n    </Box>\n  );\n}"
  );
  
  // also add the shortcut visual to the search bar in the Header
  // The header is in a separate component? Let's check where the search bar is.
  fs.writeFileSync(path, content, 'utf8');
}
