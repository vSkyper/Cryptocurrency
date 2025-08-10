import { DataGrid } from '@mui/x-data-grid';
import { DataTable } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

export default function Table(props: TableProps) {
  const { coins } = props;

  return (
    <DataTable>
      <DataGrid
        density='comfortable'
        pagination
        disableRowSelectionOnClick
        autoHeight
        disableVirtualization
        rows={coins}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 50 } },
        }}
        sx={{
          borderRadius: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          '& .MuiDataGrid-row': {
            alignItems: 'center',
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: (theme) => theme.palette.action.selected,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: (theme) => theme.palette.action.hover,
          },
        }}
      />
    </DataTable>
  );
}
