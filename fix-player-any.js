const fs = require('fs');

function replaceFile(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  content = replacer(content);
  fs.writeFileSync(path, content, 'utf8');
}

replaceFile('apps/user/src/pages/CoursePlayerPage.tsx', (content) => {
  content = content.replace(/import \{ CourseDetails \} from '@\/types\/models';/, "import type { CourseDetails, CourseModule, CourseLesson } from '@/interfaces';");
  
  content = content.replace(/import \{ CourseDetails \} from '@\/interfaces\/models';/, "import type { CourseDetails, CourseModule, CourseLesson } from '@/interfaces';");
  
  content = content.replace(/course\.modules\[0\]\?\.lessons\[0\] as any;/, "course.modules?.[0]?.lessons[0] as CourseLesson;");
  
  content = content.replace(/localCourse\.modules\.flatMap\(\(m: any\) => m\.lessons\);/, "localCourse.modules?.flatMap((m: CourseModule) => m.lessons) || [];");
  
  content = content.replace(/allLessons\.findIndex\(\(l: any\) => l\.id === currentLesson\.id\);/, "allLessons.findIndex((l: CourseLesson) => l.id === currentLesson.id);");
  
  content = content.replace(/handleLessonSelect = \(lesson: any\) => \{/, "handleLessonSelect = (lesson: CourseLesson) => {");
  
  content = content.replace(/localCourse\.modules\.map\(\(m: any\) => \(\{/, "localCourse.modules?.map((m: CourseModule) => ({");
  
  content = content.replace(/m\.lessons\.map\(\(l: any\) => l\.id === currentLesson\.id \? \{ \.\.\.l, isCompleted: true \} : l\)/, "m.lessons.map((l: CourseLesson) => l.id === currentLesson.id ? { ...l, isCompleted: true } : l)");
  
  content = content.replace(/updatedModules\.flatMap\(\(m: any\) => m\.lessons\)\.filter\(\(l: any\) => l\.isCompleted\)\.length;/, "updatedModules.flatMap((m: CourseModule) => m.lessons).filter((l: CourseLesson) => l.isCompleted).length;");
  
  return content;
});

