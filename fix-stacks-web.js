const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('apps/web/src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/<Stack(.*?)direction="row"(.*?)justifyContent="space-between"(.*?)>/g, (match, p1, p2, p3) => {
      // Don't replace if it's already got responsive
      if (match.includes("direction={{")) return match;
      return `<Stack${p1}direction={{ xs: 'column', sm: 'row' }}${p2}justifyContent="space-between"${p3}>`;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
