const fs = require('fs');
const path = 'apps/user/src/pages/CoursePlayerPage.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('SwipeableDrawer')) {
  // Add imports
  content = content.replace(
    "import Paper from '@mui/material/Paper';", 
    "import Paper from '@mui/material/Paper';\nimport SwipeableDrawer from '@mui/material/SwipeableDrawer';\nimport Fab from '@mui/material/Fab';\nimport { Menu as MenuIcon } from 'lucide-react';\nimport { useTheme, useMediaQuery } from '@mui/material';"
  );
  
  // Add state and hooks
  content = content.replace(
    "const [localCourse, setLocalCourse] = useState(course);",
    "const [localCourse, setLocalCourse] = useState(course);\n  const [drawerOpen, setDrawerOpen] = useState(false);\n  const theme = useTheme();\n  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));"
  );
  
  // Replace the Right Grid rendering to handle the Drawer conditionally
  const oldGrid = `{/* Right: Curriculum Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
                <CurriculumSidebar 
                  course={localCourse} 
                  currentLesson={currentLesson} 
                  onLessonSelect={handleLessonSelect} 
                  strictMode={true}
                />
              </Paper>
            </Grid>`;
            
  const newGrid = `{/* Right: Curriculum Sidebar (Desktop) */}
            {!isMobile && (
              <Grid size={{ xs: 12, lg: 4 }}>
                <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', border: 'none', boxShadow: '0 24px 48px rgba(0,0,0,0.05)' }}>
                  <CurriculumSidebar 
                    course={localCourse} 
                    currentLesson={currentLesson} 
                    onLessonSelect={handleLessonSelect} 
                    strictMode={true}
                  />
                </Paper>
              </Grid>
            )}

            {/* Mobile Curriculum Drawer */}
            {isMobile && (
              <>
                <Fab 
                  color="primary" 
                  aria-label="curriculum" 
                  onClick={() => setDrawerOpen(true)}
                  sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
                >
                  <MenuIcon />
                </Fab>
                <SwipeableDrawer
                  anchor="bottom"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  onOpen={() => setDrawerOpen(true)}
                  sx={{ '& .MuiDrawer-paper': { height: '80vh', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' } }}
                >
                  <Box sx={{ width: 40, height: 6, bgcolor: 'divider', borderRadius: 3, mx: 'auto', mt: 2, mb: 1 }} />
                  <CurriculumSidebar 
                    course={localCourse} 
                    currentLesson={currentLesson} 
                    onLessonSelect={(l) => { handleLessonSelect(l); setDrawerOpen(false); }} 
                    strictMode={true}
                  />
                </SwipeableDrawer>
              </>
            )}`;

  content = content.replace(oldGrid, newGrid);
  fs.writeFileSync(path, content, 'utf8');
}
