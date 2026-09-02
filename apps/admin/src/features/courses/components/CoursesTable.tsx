import React from 'react';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@repo/ui';
import { Edit2, Trash2 } from 'lucide-react';
import type { Course, CourseStatus } from '@repo/api-client';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface CoursesTableProps {
  courses: Course[];
  loading: boolean;
  onEdit: (course: Course) => void;
  onDelete: (id: string) => void;
}

const getStatusColor = (status: CourseStatus) => {
  switch (status) {
    case 'Published': return 'success';
    case 'Archived': return 'error';
    case 'Draft': return 'warning';
    default: return 'info';
  }
};

export function CoursesTable({ courses, loading, onEdit, onDelete }: CoursesTableProps) {
  const columns: GridColDef<Course>[] = [
    { field: 'title', headerName: 'Course Title', flex: 2, minWidth: 200 },
    { field: 'level', headerName: 'Level', width: 130 },
    { field: 'instructor', headerName: 'Instructor', flex: 1, minWidth: 150 },
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
      field: 'enrolledStudents', 
      headerName: 'Students', 
      width: 100,
      type: 'number'
    },
    { 
      field: 'lastUpdated', 
      headerName: 'Last Updated', 
      flex: 1,
      minWidth: 150,
      valueFormatter: (value) => value ? new Date(value as string).toLocaleDateString() : 'Never'
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
        rows={courses}
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
