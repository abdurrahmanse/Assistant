const fs = require('fs');
const glob = require('glob'); // Note: we can't reliably require glob without installing it, so I'll write a simple recursive function

const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('apps/user/src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Convert hardcoded row + space-between to responsive direction
    content = content.replace(/<Stack(.*?)direction="row"(.*?)justifyContent="space-between"(.*?)>/g, (match, p1, p2, p3) => {
      return `<Stack${p1}direction={{ xs: 'column', sm: 'row' }}${p2}justifyContent="space-between"${p3}>`;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
