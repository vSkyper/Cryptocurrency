import { styled, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const DataTable = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: 16,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    borderRadius: 12,
  },
  background: 'color-mix(in srgb, var(--bg-primary) 40%, transparent)',
  position: 'relative',
  overflow: 'hidden',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  '& .MuiDataGrid-root': {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .negative': {
    color: 'var(--brand-negative)',
    fontWeight: 600,
  },
  '& .positive': {
    color: 'var(--brand-positive)',
    fontWeight: 600,
  },
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  borderRadius: 24,
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
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 8%, transparent)',
      },
    },
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
    },
  },
  '& .MuiDataGrid-cell': {
    display: 'flex',
    alignItems: 'center',
    borderBottom:
      '1px solid color-mix(in srgb, var(--brand-blue) 8%, transparent)',
    color: 'rgba(255, 255, 255, 0.9)',
    padding: '12px 16px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  '& .MuiDataGrid-cellEmpty': {
    display: 'none !important',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor:
      'color-mix(in srgb, var(--brand-blue) 8%, transparent) !important',
    background:
      'color-mix(in srgb, var(--brand-blue) 8%, transparent) !important',
    borderBottom:
      '2px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    color: 'var(--brand-blue)',
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
      color: 'var(--brand-blue)',
      fontWeight: 700,
      fontSize: '0.9rem',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'color-mix(in srgb, var(--brand-blue) 5%, transparent)',
    borderTop:
      '1px solid color-mix(in srgb, var(--brand-blue) 15%, transparent)',
    color: 'rgba(255, 255, 255, 0.8)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  '& .MuiTablePagination-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  '& .MuiIconButton-root': {
    color: 'color-mix(in srgb, var(--brand-blue) 80%, transparent)',
    transition: 'background-color 150ms ease, color 150ms ease',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 15%, transparent)',
        color: 'var(--brand-blue)',
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
      backgroundColor: 'color-mix(in srgb, var(--brand-blue) 30%, transparent)',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 50%, transparent)',
      },
    },
  },
}));
