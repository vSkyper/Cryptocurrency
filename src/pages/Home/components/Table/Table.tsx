import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../../../constants';
import { Coins } from '../../../../interfaces/coins';
import { DataTable } from './styled';

interface Props {
  coins: Coins[]
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