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
import type { ContentAsset, ContentType, ContentStatus } from '@repo/api-client';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface ContentFormDrawerProps {
  open: boolean;
  onClose: () => void;
  asset: ContentAsset | null;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export function ContentFormDrawer({ open, onClose, asset, onSubmit, isLoading }: ContentFormDrawerProps) {
  const [formData, setFormData] = useState({
    title: '',
    courseId: '',
    type: 'Video' as ContentType,
    status: 'Draft' as ContentStatus,
    durationMinutes: 0
  });

  useEffect(() => {
    if (asset) {
      setFormData({
        title: asset.title,
        courseId: asset.courseId,
        type: asset.type,
        status: asset.status,
        durationMinutes: asset.durationMinutes
      });
    } else {
      setFormData({
        title: '',
        courseId: '',
        type: 'Video',
        status: 'Draft',
        durationMinutes: 0
      });
    }
  }, [asset, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      durationMinutes: Number(formData.durationMinutes)
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
          {asset ? 'Edit Content Asset' : 'Upload Content Asset'}
        </Typography>
        <IconButton onClick={onClose} size="small"><X size={20} /></IconButton>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        <Stack spacing={3}>
          <TextInput 
            label="Asset Title" 
            value={formData.title} 
            onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
            required 
          />
          <TextInput 
            label="Course Blueprint ID (e.g. crs_001)" 
            value={formData.courseId} 
            onChange={(e) => setFormData({ ...formData, courseId: e.target.value })} 
            required 
          />
          
          <FormControl fullWidth>
            <InputLabel>Asset Type</InputLabel>
            <Select
              value={formData.type}
              label="Asset Type"
              onChange={(e) => setFormData({ ...formData, type: e.target.value as ContentType })}
            >
              <MenuItem value="Video">Video Lesson</MenuItem>
              <MenuItem value="Assignment">Interactive Assignment</MenuItem>
              <MenuItem value="Reading">Reading Material</MenuItem>
            </Select>
          </FormControl>

          <TextInput 
            label="Duration (minutes)" 
            type="number"
            value={formData.durationMinutes.toString()} 
            onChange={(e) => setFormData({ ...formData, durationMinutes: e.target.value as any })} 
            required 
          />

          <FormControl fullWidth>
            <InputLabel>Publish Status</InputLabel>
            <Select
              value={formData.status}
              label="Publish Status"
              onChange={(e) => setFormData({ ...formData, status: e.target.value as ContentStatus })}
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, bgcolor: alpha(brand[500], 0.02) }}>
        <Button variant="outline" fullWidth onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="primary" fullWidth type="submit" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Saving...' : (asset ? 'Save Changes' : 'Upload Asset')}
        </Button>
      </Box>
    </Drawer>
  );
}
