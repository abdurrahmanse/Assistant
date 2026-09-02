const fs = require('fs');
const path = 'apps/user/src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('Toaster')) {
  content = content.replace("import AppTheme from '@repo/ui/shared-theme/AppTheme';", "import AppTheme from '@repo/ui/shared-theme/AppTheme';\nimport { Toaster } from 'sonner';");
  
  content = content.replace("<AppTheme>", "<AppTheme>\n        <Toaster position=\"top-center\" richColors />");
  fs.writeFileSync(path, content, 'utf8');
}

const playerPath = 'apps/user/src/pages/CoursePlayerPage.tsx';
let playerContent = fs.readFileSync(playerPath, 'utf8');
if (!playerContent.includes('toast.success')) {
  playerContent = playerContent.replace("import { PlayerControls } from '@/features/classroom/components/PlayerControls';", "import { PlayerControls } from '@/features/classroom/components/PlayerControls';\nimport { toast } from 'sonner';");
  
  playerContent = playerContent.replace(
    "setCurrentLesson({ ...currentLesson, isCompleted: true });\n    \n    handleNextLesson();",
    "setCurrentLesson({ ...currentLesson, isCompleted: true });\n    \n    toast.success('🎉 Lesson completed! +50 Points');\n    handleNextLesson();"
  );
  fs.writeFileSync(playerPath, playerContent, 'utf8');
}
