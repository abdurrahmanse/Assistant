const fs = require('fs');
const file = 'src/pages/ProfilePage.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('Github, Globe, Linkedin, Mail, MapPin, Save, Twitter, User', 'Globe, Link, Mail, MapPin, Save, User');
content = content.replace('<Github size={18} />', '<Link size={18} />');
content = content.replace('<Linkedin size={18} />', '<Link size={18} />');
content = content.replace('<Twitter size={18} />', '<Link size={18} />');

fs.writeFileSync(file, content, 'utf8');
