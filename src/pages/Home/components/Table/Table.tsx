import { memo } from 'react';
import { StyledDataGrid } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

function Table(props: TableProps) {
  const { coins } = props;

  return (
    <div className='mt-2 sm:mt-3 rounded-xl sm:rounded-2xl bg-transparent relative overflow-hidden transform-gpu will-change-transform [contain:layout_style_paint]'>
      <StyledDataGrid
        density='comfortable'
        pagination
        disableRowSelectionOnClick
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
    </div>
  );
}

export default memo(Table);
