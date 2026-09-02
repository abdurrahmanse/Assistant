const fs = require('fs');

const path = 'packages/ui/src/shared-theme/AppTheme.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("import { ThemeProvider, createTheme } from '@mui/material/styles';", "import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';");

content = content.replace(
  "return disableCustomTheme\n      ? {}\n      : createTheme({",
  "return disableCustomTheme\n      ? {}\n      : responsiveFontSizes(createTheme({"
);

content = content.replace(
  "            ...themeComponents,\n          },\n        });",
  "            ...themeComponents,\n          },\n        }));"
);

fs.writeFileSync(path, content, 'utf8');
