import { DataGrid } from '@mui/x-data-grid';
import { DataTable } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';

export default function Table(props: TableProps) {
  const { coins } = props;

  return (
    <DataTable>
      <DataGrid
        pagination
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
