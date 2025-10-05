import { DataGrid } from '@mui/x-data-grid';
import { memo } from 'react';
import { DataTable } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

function Table(props: TableProps) {
  const { coins } = props;

  return (
    <DataTable>
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
        sx={(theme) => ({
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
            contain: 'layout style',
            pointerEvents: 'auto',
            [theme.breakpoints.up('md')]: {
              transition: 'background-color 150ms ease',
              '&:hover': {
                backgroundColor: 'rgba(64, 156, 255, 0.08)',
              },
            },
            '&:nth-of-type(even)': {
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            },
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(64, 156, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            fontSize: '0.875rem',
            fontWeight: 500,
          },
          '& .MuiDataGrid-cellEmpty': {
            display: 'none !important',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(64, 156, 255, 0.08) !important',
            background: 'rgba(64, 156, 255, 0.08) !important',
            borderBottom: '2px solid rgba(64, 156, 255, 0.2)',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            color: '#409CFF',
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
              color: '#409CFF',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            },
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'rgba(64, 156, 255, 0.05)',
            borderTop: '1px solid rgba(64, 156, 255, 0.15)',
            color: 'rgba(255, 255, 255, 0.8)',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          },
          '& .MuiTablePagination-root': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiIconButton-root': {
            color: 'rgba(64, 156, 255, 0.8)',
            transition: 'background-color 150ms ease, color 150ms ease',
            [theme.breakpoints.up('md')]: {
              '&:hover': {
                backgroundColor: 'rgba(64, 156, 255, 0.15)',
                color: '#409CFF',
              },
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
              backgroundColor: 'rgba(64, 156, 255, 0.3)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(64, 156, 255, 0.5)',
              },
            },
          },
        })}
      />
    </DataTable>
  );
}

export default memo(Table);
