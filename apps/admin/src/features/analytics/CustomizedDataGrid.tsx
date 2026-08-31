import { DataGrid } from '@mui/x-data-grid';
import { useAnalyticsQuery } from './hooks/queries/useAnalyticsQuery';
import Skeleton from '@mui/material/Skeleton';

export default function CustomizedDataGrid() {
  const { data, isLoading } = useAnalyticsQuery();

  if (isLoading || !data) {
    return <Skeleton variant="rectangular" width="100%" height={400} />;
  }

  const { columns, rows } = data.grid;

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params: any) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: { variant: 'outlined', size: 'small' },
            columnInputProps: { variant: 'outlined', size: 'small', sx: { mt: 'auto' } },
            operatorInputProps: { variant: 'outlined', size: 'small', sx: { mt: 'auto' } },
            valueInputProps: { InputComponentProps: { variant: 'outlined', size: 'small' } },
          },
        },
      }}
    />
  );
}
