import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { X } from 'lucide-react';
import { TextInput, Button } from '@repo/ui';
import type { Course, CourseLevel, CourseStatus } from '@repo/api-client';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface CourseFormDrawerProps {
  open: boolean;
  onClose: () => void;
  course: Course | null;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export function CourseFormDrawer({ open, onClose, course, onSubmit, isLoading }: CourseFormDrawerProps) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    instructor: '',
    level: 'Beginner' as CourseLevel,
    status: 'Draft' as CourseStatus,
    tags: ''
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title,
        slug: course.slug,
        instructor: course.instructor,
        level: course.level,
        status: course.status,
        tags: course.tags.join(', ')
      });
    } else {
      setFormData({
        title: '',
        slug: '',
        instructor: '',
        level: 'Beginner',
        status: 'Draft',
        tags: ''
      });
    }
  }, [course, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
    });
  };

  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 500 }, bgcolor: 'background.paper' }
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={700}>
          {course ? 'Edit Blueprint' : 'Initialize Blueprint'}
        </Typography>
        <IconButton onClick={onClose} size="small"><X size={20} /></IconButton>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        <Stack spacing={3}>
          <TextInput 
            label="Course Title" 
            value={formData.title} 
            onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
            required 
          />
          <TextInput 
            label="URL Slug" 
            value={formData.slug} 
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })} 
            required 
          />
          <TextInput 
            label="Instructor Name" 
            value={formData.instructor} 
            onChange={(e) => setFormData({ ...formData, instructor: e.target.value })} 
            required 
          />
          
          <FormControl fullWidth>
            <InputLabel>Difficulty Level</InputLabel>
            <Select
              value={formData.level}
              label="Difficulty Level"
              onChange={(e) => setFormData({ ...formData, level: e.target.value as CourseLevel })}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Publish Status</InputLabel>
            <Select
              value={formData.status}
              label="Publish Status"
              onChange={(e) => setFormData({ ...formData, status: e.target.value as CourseStatus })}
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
            </Select>
          </FormControl>

          <TextInput 
            label="Tags (comma separated)" 
            value={formData.tags} 
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })} 
          />
        </Stack>
      </Box>

      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, bgcolor: alpha(brand[500], 0.02) }}>
        <Button variant="outline" fullWidth onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="primary" fullWidth type="submit" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Saving...' : (course ? 'Save Changes' : 'Initialize Course')}
        </Button>
      </Box>
    </Drawer>
  );
}
