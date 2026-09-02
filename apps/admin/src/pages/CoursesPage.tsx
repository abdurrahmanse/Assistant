import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState, Button } from '@repo/ui';
import { BookOpen, Plus, Search } from 'lucide-react';
import { CoursesTable } from '../features/courses/components/CoursesTable';
import { CourseFormDrawer } from '../features/courses/components/CourseFormDrawer';
import { useCoursesQuery } from '../features/courses/hooks/queries/useCoursesQuery';
import { useCreateCourse, useUpdateCourse, useDeleteCourse } from '../features/courses/hooks/mutations/useCoursesMutation';
import type { Course } from '@repo/api-client';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function CoursesPage() {
  const { data: courses = [], isLoading } = useCoursesQuery();
  const createMutation = useCreateCourse();
  const updateMutation = useUpdateCourse();
  const deleteMutation = useDeleteCourse();

  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.instructor.toLowerCase().includes(search.toLowerCase()) || 
    c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  const handleOpenCreate = () => {
    setEditingCourse(null);
    setDrawerOpen(true);
  };

  const handleOpenEdit = (course: Course) => {
    setEditingCourse(course);
    setDrawerOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this course?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (data: any) => {
    if (editingCourse) {
      updateMutation.mutate({ id: editingCourse.id, updates: data }, {
        onSuccess: () => setDrawerOpen(false)
      });
    } else {
      createMutation.mutate(data, {
        onSuccess: () => setDrawerOpen(false)
      });
    }
  };

  return (
    <Box>
      <PageHeader 
        icon={<BookOpen size={32} />}
        title="Course Blueprints"
        description="Design and manage curriculum architectures, modules, and lessons."
      />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: 'space-between', alignItems: 'center' }}>
        <TextField
          placeholder="Search courses..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 300 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} color="inherit" style={{ opacity: 0.5 }} />
                </InputAdornment>
              ),
            }
          }}
        />
        
        <Button 
          variant="primary" 
          onClick={handleOpenCreate}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <Plus size={18} />
          Initialize Blueprint
        </Button>
      </Box>

      {courses.length === 0 && !isLoading ? (
        <EmptyState 
          icon={<BookOpen size={48} />}
          title="No blueprints available"
          description="Initialize a new course architecture to begin."
          actionText="Initialize Blueprint"
          onAction={handleOpenCreate}
        />
      ) : (
        <CoursesTable 
          courses={filteredCourses} 
          loading={isLoading} 
          onEdit={handleOpenEdit} 
          onDelete={handleDelete}
        />
      )}

      <CourseFormDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        course={editingCourse}
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />
    </Box>
  );
}
