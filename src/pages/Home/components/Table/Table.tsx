import { StyledDataGrid } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

const PAGINATION_CONFIG = {
  pageSize: 50,
  pageSizeOptions: [50, 100],
};

const TABLE_STYLES = {
  height: 'auto',
  minHeight: 400,
  '& .MuiDataGrid-virtualScroller': {
    minHeight: 400,
  },
};

export default function Table({ coins }: TableProps) {
  return (
    <div className='mt-2 sm:mt-3 rounded-xl sm:rounded-2xl bg-transparent relative overflow-hidden transform-gpu will-change-transform'>
      <StyledDataGrid
        density='comfortable'
        pagination
        disableRowSelectionOnClick
        rows={coins}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: PAGINATION_CONFIG.pageSize,
            },
          },
        }}
        pageSizeOptions={PAGINATION_CONFIG.pageSizeOptions}
        sx={TABLE_STYLES}
      />
    </div>
  );
}
