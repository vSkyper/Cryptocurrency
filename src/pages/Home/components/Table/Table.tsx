import { StyledDataGrid } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme, { createDarkThemeFromVars } from 'styles/muiTheme';
import { useEffect, useState } from 'react';

const PAGINATION_CONFIG = {
  pageSize: 50,
  pageSizeOptions: [50, 100],
} as const;

const TABLE_STYLES = {
  height: 'auto',
  minHeight: 400,
  '& .MuiDataGrid-virtualScroller': {
    minHeight: 400,
  },
} as const;

export default function Table({ coins }: TableProps) {
  // Use a client-side theme created from CSS variables when available.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runtimeTheme = mounted ? createDarkThemeFromVars() : darkTheme;

  return (
    <div className='mt-2 sm:mt-3 rounded-xl sm:rounded-2xl bg-transparent relative overflow-hidden transform-gpu will-change-transform'>
      <ThemeProvider theme={runtimeTheme}>
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
      </ThemeProvider>
    </div>
  );
}
