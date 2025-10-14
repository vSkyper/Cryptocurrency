import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  borderRadius: 24,
  border: 'none',
  backgroundColor: 'transparent !important',
  background: 'transparent !important',
  '& .MuiDataGrid-main': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiDataGrid-withBorderColor': {
    borderColor: 'transparent !important',
  },
  '& .MuiDataGrid-cell, & .MuiDataGrid-row, & .MuiDataGrid-columnHeader': {
    borderBottom: 'none !important',
    borderTop: 'none !important',
  },
  '& .MuiDataGrid-container--top [role=row]': {
    backgroundColor: 'transparent !important',
    background: 'transparent !important',
  },
  '& .MuiDataGrid-virtualScroller': {
    transform: 'translateZ(0)',
    willChange: 'transform',
  },
  '& .MuiDataGrid-row': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    contain: 'layout style paint',
    pointerEvents: 'auto',
    willChange: 'background-color',
    '&:focus, &:focus-within': {
      backgroundColor:
        'color-mix(in srgb, var(--brand-blue) 10%, transparent) !important',
      outline: 'none',
    },
    '&.Mui-selected': {
      backgroundColor:
        'color-mix(in srgb, var(--brand-blue) 12%, transparent) !important',
      '&:hover': {
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 15%, transparent) !important',
      },
    },
    // Alternating row pattern - even rows get subtle background
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(20, 30, 48, 0.4)',
    },
    // Hover effect for all rows
    [theme.breakpoints.up('md')]: {
      transition: 'background-color 100ms ease',
      '&:hover': {
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 8%, transparent) !important',
      },
    },
    [theme.breakpoints.down('md')]: {
      '&:focus, &:focus-within, &:active': {
        backgroundColor:
          'color-mix(in srgb, var(--brand-blue) 10%, transparent) !important',
        outline: 'none',
      },
    },
  },
  '& .MuiDataGrid-cell': {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    padding: '12px 16px',
    fontSize: '0.875rem',
    fontWeight: 500,
    '&:focus, &:focus-within': {
      backgroundColor: 'transparent !important',
      outline: 'none',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent !important',
    },
  },
  '& .MuiDataGrid-cellEmpty': {
    display: 'none !important',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'var(--bg-tertiary-dark) !important',
    background: 'var(--bg-tertiary-dark) !important',
    borderBottom: 'none',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    color: 'var(--brand-blue)',
    fontWeight: 700,
    minHeight: '56px !important',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: 'transparent !important',
      background: 'transparent !important',
      padding: '0 16px',
      '&:focus': {
        outline: 'none',
      },
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      color: 'rgba(255, 255, 255, 0.95)',
      fontWeight: 600,
      fontSize: '0.85rem',
      letterSpacing: '0.8px',
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
