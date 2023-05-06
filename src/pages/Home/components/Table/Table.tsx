import { DataGrid } from '@mui/x-data-grid';
import { DataTable } from './styled';
import { ICoins } from 'interfaces';
import { columns } from 'constants/dataTable';

interface Props {
  coins: ICoins[]
};

export default function Table({ coins }: Props) {
  return (
    <>
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
    </>
  )
}