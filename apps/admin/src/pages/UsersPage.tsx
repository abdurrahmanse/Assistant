import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PageHeader, EmptyState, Button } from '@repo/ui';
import { Users, Plus, Search } from 'lucide-react';
import { UsersTable } from '../features/users/components/UsersTable';
import { UserFormDrawer } from '../features/users/components/UserFormDrawer';
import { useUsersQuery } from '../features/users/hooks/queries/useUsersQuery';
import { useCreateUser, useUpdateUser, useDeleteUser } from '../features/users/hooks/mutations/useUsersMutation';
import type { User } from '@repo/api-client';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function UsersPage() {
  const { data: users = [], isLoading } = useUsersQuery();
  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = users.filter(u => 
    u.firstName.toLowerCase().includes(search.toLowerCase()) || 
    u.lastName.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenCreate = () => {
    setEditingUser(null);
    setDrawerOpen(true);
  };

  const handleOpenEdit = (user: User) => {
    setEditingUser(user);
    setDrawerOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this user?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (data: any) => {
    if (editingUser) {
      updateMutation.mutate({ id: editingUser.id, updates: data }, {
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
        icon={<Users size={32} />}
        title="Member Management"
        description="Manage students, instructors, and system administrators."
      />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: 'space-between', alignItems: 'center' }}>
        <TextField
          placeholder="Search by name or email..."
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
          Provision Member
        </Button>
      </Box>

      {users.length === 0 && !isLoading ? (
        <EmptyState 
          icon={<Users size={48} />}
          title="No members found"
          description="The user database is currently empty or still indexing."
          actionText="Provision Member"
          onAction={handleOpenCreate}
        />
      ) : (
        <UsersTable 
          users={filteredUsers} 
          loading={isLoading} 
          onEdit={handleOpenEdit} 
          onDelete={handleDelete}
        />
      )}

      <UserFormDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={editingUser}
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />
    </Box>
  );
}
