import * as React from 'react';
import { GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef } from '@mui/x-data-grid';
import { Edit, Trash2 } from "lucide-react";
import type { Employee } from '@/features/crud/data/employees';

interface UseEmployeeColumnsProps {
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

export function useEmployeeColumns({ onEdit, onDelete }: UseEmployeeColumnsProps): GridColDef[] {
  return React.useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'Name', width: 140 },
      { field: 'age', headerName: 'Age', type: 'number' },
      {
        field: 'joinDate',
        headerName: 'Join date',
        type: 'date',
        valueGetter: (value: any) => value && new Date(value),
        width: 140,
      },
      {
        field: 'role',
        headerName: 'Department',
        type: 'singleSelect',
        valueOptions: ['Market', 'Finance', 'Development'],
        width: 160,
      },
      { field: 'isFullTime', headerName: 'Full-time', type: 'boolean' },
      {
        field: 'actions',
        type: 'actions',
        flex: 1,
        align: 'right',
        getActions: ({ row }: { row: Employee }) => [
          <GridActionsCellItem
            icon={<Edit size={20} />}
            key="edit-item"
            label="Edit"
            onClick={() => onEdit(row)}
          />,
          <GridActionsCellItem
            icon={<Trash2 size={20} />}
            key="delete-item"
            label="Delete"
            onClick={() => onDelete(row)}
          />,
        ],
      },
    ],
    [onEdit, onDelete],
  );
}
