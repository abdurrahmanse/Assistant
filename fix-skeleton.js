const fs = require('fs');
const path = 'apps/user/src/pages/CoursesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('SkeletonCourseCard')) {
  content = content.replace("import { mockCourses } from '@/data/mock';", "import { mockCourses } from '@/data/mock';\nimport { SkeletonCourseCard } from '@/components/ui/SkeletonCourseCard';\nimport { useState, useEffect } from 'react';");
  
  content = content.replace("export default function CoursesPage() {", "export default function CoursesPage() {\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setIsLoading(false), 1500);\n    return () => clearTimeout(timer);\n  }, []);\n");

  const oldMap = `{mockCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              <CourseCard course={course} onClick={() => navigate(\`/courses/\${course.slug}\`)} />
            </Grid>
          ))}`;
          
  const newMap = `{isLoading 
            ? Array.from(new Array(6)).map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                  <SkeletonCourseCard />
                </Grid>
              ))
            : mockCourses.map((course) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
                  <CourseCard course={course} onClick={() => navigate(\`/courses/\${course.slug}\`)} />
                </Grid>
              ))
          }`;

  content = content.replace(oldMap, newMap);
  fs.writeFileSync(path, content, 'utf8');
}
