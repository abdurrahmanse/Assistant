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
import type { User, UserRole, UserStatus } from '@repo/api-client';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface UserFormDrawerProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export function UserFormDrawer({ open, onClose, user, onSubmit, isLoading }: UserFormDrawerProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Student' as UserRole,
    status: 'Active' as UserStatus,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Student',
        status: 'Active',
      });
    }
  }, [user, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 }, bgcolor: 'background.paper' }
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={700}>
          {user ? 'Edit Member' : 'Provision Member'}
        </Typography>
        <IconButton onClick={onClose} size="small"><X size={20} /></IconButton>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        <Stack spacing={3}>
          <TextInput 
            label="First Name" 
            value={formData.firstName} 
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
            required 
          />
          <TextInput 
            label="Last Name" 
            value={formData.lastName} 
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
            required 
          />
          <TextInput 
            label="Email Address" 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required 
          />
          
          <FormControl fullWidth>
            <InputLabel>System Role</InputLabel>
            <Select
              value={formData.role}
              label="System Role"
              onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
            >
              <MenuItem value="Student">Student (Learner Node)</MenuItem>
              <MenuItem value="Instructor">Instructor (Content Provider)</MenuItem>
              <MenuItem value="Admin">Admin (System Operator)</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Account Status</InputLabel>
            <Select
              value={formData.status}
              label="Account Status"
              onChange={(e) => setFormData({ ...formData, status: e.target.value as UserStatus })}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Invited">Pending Invitation</MenuItem>
              <MenuItem value="Suspended">Suspended</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, bgcolor: alpha(brand[500], 0.02) }}>
        <Button variant="outline" fullWidth onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="primary" fullWidth type="submit" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Saving...' : (user ? 'Save Changes' : 'Provision User')}
        </Button>
      </Box>
    </Drawer>
  );
}
