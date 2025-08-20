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
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: 'rgba(208, 188, 255, 0.08)',
              transform: 'translateX(4px)',
            },
            '&:nth-of-type(even)': {
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            },
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(208, 188, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            fontSize: '0.875rem',
            fontWeight: 500,
          },
          '& .MuiDataGrid-cellEmpty': {
            display: 'none !important',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(208, 188, 255, 0.08) !important',
            background: 'rgba(208, 188, 255, 0.08) !important',
            borderBottom: '2px solid rgba(208, 188, 255, 0.2)',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            color: '#D0BCFF',
            fontWeight: 700,
            minHeight: '56px !important',
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'transparent !important',
              background: 'transparent !important',
              padding: '0 16px',
              '&:focus': {
                outline: 'none',
              },
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#D0BCFF',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            },
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'rgba(208, 188, 255, 0.05)',
            borderTop: '1px solid rgba(208, 188, 255, 0.15)',
            color: 'rgba(255, 255, 255, 0.8)',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          },
          '& .MuiTablePagination-root': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiIconButton-root': {
            color: 'rgba(208, 188, 255, 0.8)',
            transition: 'all 200ms ease',
            '&:hover': {
              backgroundColor: 'rgba(208, 188, 255, 0.15)',
              color: '#D0BCFF',
            },
          },
          '& .MuiDataGrid-selectedRowCount': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiDataGrid-scrollbar': {
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(208, 188, 255, 0.3)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(208, 188, 255, 0.5)',
              },
            },
          },
        }}
      />
    </DataTable>
  );
}
