const fs = require('fs');
const file = 'apps/user/src/interfaces/models.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/export interface CourseDetails extends Course \{/, "export interface CourseDetails {\n  id: string;\n  slug: string;\n  title: string;\n  instructor: string;\n  thumbnail?: string;");

fs.writeFileSync(file, content, 'utf8');
