import React from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Badge } from '@repo/ui';
import { Edit2, Trash2, Video, FileText, FileSpreadsheet } from 'lucide-react';
import type { ContentAsset, ContentStatus, ContentType } from '@repo/api-client';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface ContentTableProps {
  content: ContentAsset[];
  loading: boolean;
  onEdit: (asset: ContentAsset) => void;
  onDelete: (id: string) => void;
}

const getStatusColor = (status: ContentStatus) => {
  switch (status) {
    case 'Published': return 'success';
    case 'Archived': return 'error';
    case 'Draft': return 'warning';
    default: return 'info';
  }
};

const getTypeIcon = (type: ContentType) => {
  switch (type) {
    case 'Video': return <Video size={18} />;
    case 'Assignment': return <FileSpreadsheet size={18} />;
    case 'Reading': return <FileText size={18} />;
    default: return <FileText size={18} />;
  }
};

export function ContentTable({ content, loading, onEdit, onDelete }: ContentTableProps) {
  const columns: GridColDef<ContentAsset>[] = [
    { 
      field: 'title', 
      headerName: 'Asset Title', 
      flex: 2, 
      minWidth: 250,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, height: '100%' }}>
          <Box sx={{ color: 'text.secondary', display: 'flex' }}>
            {getTypeIcon(params.row.type)}
          </Box>
          <Typography variant="body2" fontWeight={600}>
            {params.value}
          </Typography>
        </Box>
      )
    },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'courseId', headerName: 'Course Blueprint', flex: 1, minWidth: 150 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 130,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Badge color={getStatusColor(params.row.status) as any} variant="subtle" label={params.row.status} />
        </Box>
      )
    },
    { 
      field: 'durationMinutes', 
      headerName: 'Duration', 
      width: 120,
      valueFormatter: (value) => value ? `${value} min` : '-'
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', gap: 1 }}>
          <IconButton size="small" onClick={() => onEdit(params.row)} sx={{ color: 'text.secondary', '&:hover': { color: brand[500], bgcolor: alpha(brand[500], 0.1) } }}>
            <Edit2 size={16} />
          </IconButton>
          <IconButton size="small" onClick={() => onDelete(params.row.id)} sx={{ color: 'text.secondary', '&:hover': { color: 'error.main', bgcolor: 'error.50' } }}>
            <Trash2 size={16} />
          </IconButton>
        </Box>
      )
    }
  ];

  return (
    <Box sx={{ 
      height: 600, 
      width: '100%',
      '& .MuiDataGrid-root': {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        bgcolor: 'background.paper',
        overflow: 'hidden',
      },
      '& .MuiDataGrid-columnHeaders': {
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      },
      '& .MuiDataGrid-cell': {
        borderBottom: '1px dashed',
        borderColor: 'divider',
      },
      '& .MuiDataGrid-row:hover': {
        bgcolor: alpha(brand[500], 0.04),
      },
      '& .MuiDataGrid-footerContainer': {
        borderTop: '1px solid',
        borderColor: 'divider',
      }
    }}>
      <DataGrid
        rows={content}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
