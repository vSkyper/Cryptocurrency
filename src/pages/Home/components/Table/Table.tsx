import { DataGrid } from '@mui/x-data-grid';
import { DataTable } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

export default function Table(props: TableProps) {
  const { coins } = props;

  return (
    <DataTable elevation={0}>
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
          border: 'none',
          backgroundColor: 'transparent !important',
          background: 'transparent !important',
          '& .MuiDataGrid-main': {
            backgroundColor: 'transparent !important',
          },
          '& .MuiDataGrid-container--top [role=row]': {
            backgroundColor: 'transparent !important',
            background: 'transparent !important',
          },
          '& .MuiDataGrid-row': {
            alignItems: 'center',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.9)',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'transparent !important',
            background: 'transparent !important',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            fontWeight: 600,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'transparent !important',
              background: 'transparent !important',
              '&:focus': {
                outline: 'none',
              },
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#ffffff',
              fontWeight: 600,
            },
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiTablePagination-root': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiIconButton-root': {
            color: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },
          '& .MuiDataGrid-selectedRowCount': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
        }}
      />
    </DataTable>
  );
}
