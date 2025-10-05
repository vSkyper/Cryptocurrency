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
        autoHeight
        rows={coins}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 50 } },
        }}
      />
    </DataTable>
  );
}

export default memo(Table);
