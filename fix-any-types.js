const fs = require('fs');

function replaceFile(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  content = replacer(content);
  fs.writeFileSync(path, content, 'utf8');
}

// CurriculumSidebar.tsx
replaceFile('apps/user/src/features/classroom/components/CurriculumSidebar.tsx', (content) => {
  content = content.replace(/import \{ CheckCircle, Circle, Lock, PlayCircle \} from 'lucide-react';/, "import { CheckCircle, Circle, Lock, PlayCircle } from 'lucide-react';\nimport type { CourseDetails, CourseLesson, CourseModule } from '@/interfaces';");
  
  content = content.replace(/course: any;/, "course: CourseDetails;");
  content = content.replace(/currentLesson: any;/, "currentLesson: CourseLesson;");
  content = content.replace(/onLessonSelect: \(lesson: any\) => void;/, "onLessonSelect: (lesson: CourseLesson) => void;");
  content = content.replace(/const allLessons = course\.modules\.flatMap\(\(m: any\) => m\.lessons\);/, "const allLessons = course.modules?.flatMap((m: CourseModule) => m.lessons) || [];");
  content = content.replace(/const isLessonLocked = \(lesson: any\) => \{/, "const isLessonLocked = (lesson: CourseLesson) => {");
  content = content.replace(/const currentIndex = allLessons\.findIndex\(\(l: any\) => l\.id === lesson\.id\);/, "const currentIndex = allLessons.findIndex((l: CourseLesson) => l.id === lesson.id);");
  content = content.replace(/allLessons\.slice\(0, currentIndex\)\.some\(\(l: any\) => !l\.isCompleted\);/, "allLessons.slice(0, currentIndex).some((l: CourseLesson) => !l.isCompleted);");
  content = content.replace(/\{course\.modules\.map\(\(mod: any, idx: number\) => \(/, "{course.modules?.map((mod: CourseModule, idx: number) => (");
  content = content.replace(/\{mod\.lessons\.map\(\(lesson: any\) => \{/, "{mod.lessons.map((lesson: CourseLesson) => {");
  
  return content;
});

// VideoPlayer.tsx
replaceFile('apps/user/src/features/classroom/components/VideoPlayer.tsx', (content) => {
  content = content.replace(/interface VideoPlayerProps \{/, "import type { CourseLesson } from '@/interfaces';\n\ninterface VideoPlayerProps {");
  content = content.replace(/currentLesson: any;/, "currentLesson: CourseLesson;");
  return content;
});

// CourseProgressCard.tsx
replaceFile('apps/user/src/features/dashboard/components/CourseProgressCard.tsx', (content) => {
  content = content.replace(/interface CourseProgressCardProps \{/, "import type { EnrolledCourse } from '@/interfaces';\n\ninterface CourseProgressCardProps {");
  content = content.replace(/course: any;/, "course: EnrolledCourse;");
  return content;
});

