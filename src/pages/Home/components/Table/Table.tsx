import { StyledDataGrid, gridMenuSx, gridPanelSx } from './styled';
import { columns } from 'constants/dataTable';
import { TableProps } from './interface';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme, { createDarkThemeFromVars } from 'styles/muiTheme';
import { useEffect, useState } from 'react';

const PAGINATION_CONFIG = {
  pageSize: 50,
  pageSizeOptions: [50, 100],
} as const;

export default function Table({ coins }: TableProps) {
  // Use a client-side theme created from CSS variables when available.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runtimeTheme = mounted ? createDarkThemeFromVars() : darkTheme;

  return (
    <div className='mt-6 sm:mt-8 relative transform-gpu will-change-transform'>
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
          slotProps={{
            basePopper: { sx: gridMenuSx } as any,
            panel: { sx: gridPanelSx } as any,
            columnsPanel: { sx: gridPanelSx } as any,
            filterPanel: { sx: gridPanelSx } as any,
          }}
          sx={{ height: 'auto', minHeight: 400, border: 'none' }}
        />
      </ThemeProvider>
    </div>
  );
}
