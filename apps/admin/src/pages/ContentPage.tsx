import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState, Button } from '@repo/ui';
import { Video, Plus, Search } from 'lucide-react';
import { ContentTable } from '../features/content/components/ContentTable';
import { ContentFormDrawer } from '../features/content/components/ContentFormDrawer';
import { useContentQuery } from '../features/content/hooks/queries/useContentQuery';
import { useCreateContent, useUpdateContent, useDeleteContent } from '../features/content/hooks/mutations/useContentMutation';
import type { ContentAsset } from '@repo/api-client';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function ContentPage() {
  const { data: content = [], isLoading } = useContentQuery();
  const createMutation = useCreateContent();
  const updateMutation = useUpdateContent();
  const deleteMutation = useDeleteContent();

  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<ContentAsset | null>(null);

  const filteredContent = content.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.courseId.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenCreate = () => {
    setEditingAsset(null);
    setDrawerOpen(true);
  };

  const handleOpenEdit = (asset: ContentAsset) => {
    setEditingAsset(asset);
    setDrawerOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this content asset?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (data: any) => {
    if (editingAsset) {
      updateMutation.mutate({ id: editingAsset.id, updates: data }, {
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
        icon={<Video size={32} />}
        title="Content Hub"
        description="Manage the core learning assets including videos, assignments, and reading materials."
      />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: 'space-between', alignItems: 'center' }}>
        <TextField
          placeholder="Search content by title or course ID..."
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
          Upload Asset
        </Button>
      </Box>

      {content.length === 0 && !isLoading ? (
        <EmptyState 
          icon={<Video size={48} />}
          title="No content assets found"
          description="Upload videos, assignments, or readings to map them to course blueprints."
          actionText="Upload Asset"
          onAction={handleOpenCreate}
        />
      ) : (
        <ContentTable 
          content={filteredContent} 
          loading={isLoading} 
          onEdit={handleOpenEdit} 
          onDelete={handleDelete}
        />
      )}

      <ContentFormDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        asset={editingAsset}
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />
    </Box>
  );
}
