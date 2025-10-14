import { memo } from 'react';
import { DataTable, StyledDataGrid } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

function Table(props: TableProps) {
  const { coins } = props;

  return (
    <DataTable>
      <StyledDataGrid
        density='comfortable'
        pagination
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        rows={coins}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 50 } },
        }}
        pageSizeOptions={[50, 100]}
        sx={{
          height: 'auto',
          minHeight: 400,
          '& .MuiDataGrid-virtualScroller': {
            minHeight: 400,
          },
        }}
      />
    </DataTable>
  );
}

export default memo(Table);
