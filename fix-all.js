const fs = require('fs');

function replaceFile(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  content = replacer(content);
  fs.writeFileSync(path, content, 'utf8');
}

// 1. Fix CurriculumSidebar
replaceFile('apps/user/src/features/classroom/components/CurriculumSidebar.tsx', (content) => {
  content = content.replace("import { PomodoroWidget } from './PomodoroWidget';", "import { PomodoroWidget } from './PomodoroWidget';\nimport type { CourseDetails, CourseLesson, CourseModule } from '@/interfaces';");
  return content;
});

// 2. Fix CoursePlayerPage
replaceFile('apps/user/src/pages/CoursePlayerPage.tsx', (content) => {
  if (!content.includes('import type { CourseDetails, CourseModule, CourseLesson }')) {
    content = content.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport type { CourseDetails, CourseModule, CourseLesson } from '@/interfaces';");
  }
  return content;
});

// 3. Fix ../../../types imports
const filesWithTypes = [
  'apps/user/src/features/assignments/components/AssignmentCard.tsx',
  'apps/user/src/features/classroom/components/NotesTab.tsx',
  'apps/user/src/features/classroom/components/ResourcesTab.tsx',
  'apps/user/src/features/dashboard/components/RecentActivityFeed.tsx',
  'apps/user/src/features/dashboard/components/StatGridBento.tsx',
  'apps/user/src/features/marks/components/MarkCard.tsx'
];

filesWithTypes.forEach(file => {
  replaceFile(file, (content) => {
    return content.replace(/from '\.\.\/\.\.\/\.\.\/types'/g, "from '@/interfaces'");
  });
});

// 4. Fix EnrolledCourse in models.ts
replaceFile('apps/user/src/interfaces/models.ts', (content) => {
  content = content.replace(/export interface EnrolledCourse extends Course \{/, "export interface EnrolledCourse {\n  id: string;\n  slug: string;\n  title: string;\n  instructor: string;\n  thumbnail: string;");
  return content;
});

