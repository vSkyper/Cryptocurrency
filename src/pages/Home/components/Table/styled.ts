import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const BORDER_RADIUS = 24;
const TRANSPARENT = 'transparent !important';

const createColorMix = (color: string, percentage: number) =>
  `color-mix(in srgb, ${color} ${percentage}%, transparent)`;

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  borderRadius: BORDER_RADIUS,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  backgroundColor: 'rgba(10, 10, 15, 0.4)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',

  // Main container
  '& .MuiDataGrid-main': {
    backgroundColor: TRANSPARENT,
  },

  // Border colors
  '& .MuiDataGrid-withBorderColor': {
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },

  // Remove cell borders
  '& .MuiDataGrid-cell, & .MuiDataGrid-row, & .MuiDataGrid-columnHeader': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.03) !important',
    borderTop: 'none !important',
  },

  // Top container
  '& .MuiDataGrid-container--top [role=row]': {
    backgroundColor: TRANSPARENT,
    background: TRANSPARENT,
  },

  // Virtual scroller optimization
  '& .MuiDataGrid-virtualScroller': {
    transform: 'translateZ(0)',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    perspective: 1000,
  },

  // Row styles
  '& .MuiDataGrid-row': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    contain: 'layout style paint',
    pointerEvents: 'auto',
    transition: 'background-color 150ms ease',

    // Focus states
    '&:focus, &:focus-within': {
      backgroundColor: `${createColorMix('var(--brand-blue)', 5)} !important`,
      outline: 'none',
    },

    // Selected state
    '&.Mui-selected': {
      backgroundColor: `${createColorMix('var(--brand-blue)', 8)} !important`,
      '&:hover': {
        backgroundColor: `${createColorMix(
          'var(--brand-blue)',
          12
        )} !important`,
      },
    },

    // Desktop hover effect
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.03) !important',
      },
    },

    // Mobile focus effect
    [theme.breakpoints.down('md')]: {
      '&:focus, &:focus-within, &:active': {
        backgroundColor: `${createColorMix(
          'var(--brand-blue)',
          10
        )} !important`,
        outline: 'none',
      },
    },
  },

  // Cell styles
  '& .MuiDataGrid-cell': {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    padding: '16px 24px',
    fontSize: '0.9rem',
    fontWeight: 500,
    contain: 'layout style',

    // Mobile responsive sizing
    [theme.breakpoints.down('sm')]: {
      padding: '10px 12px',
      fontSize: '0.75rem',
    },

    [theme.breakpoints.between('sm', 'md')]: {
      padding: '12px 16px',
      fontSize: '0.8rem',
    },

    '&:focus, &:focus-within': {
      backgroundColor: TRANSPARENT,
      outline: 'none',
    },

    '&.Mui-selected': {
      backgroundColor: TRANSPARENT,
    },
  },

  // Hide empty cells
  '& .MuiDataGrid-cellEmpty': {
    display: 'none !important',
  },

  // Column separator / resize handle
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },

  // Column headers
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'rgba(15, 15, 20, 0.8) !important',
    backdropFilter: 'blur(10px)',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 700,
    minHeight: '60px !important',

    // Mobile responsive sizing
    [theme.breakpoints.down('sm')]: {
      minHeight: '48px !important',
    },

    '& .MuiDataGrid-columnHeader': {
      backgroundColor: TRANSPARENT,
      padding: '0 24px',

      // Mobile responsive padding
      [theme.breakpoints.down('sm')]: {
        padding: '0 12px',
      },

      '&:focus': {
        outline: 'none',
      },
    },

    '& .MuiDataGrid-columnHeaderTitle': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',

      // Mobile responsive font sizes
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.65rem',
        letterSpacing: '0.5px',
      },
    },
  },

  // Footer
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'rgba(10, 10, 15, 0.6)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    color: 'rgba(255, 255, 255, 0.6)',
    minHeight: '60px',

    // Mobile responsive sizing
    [theme.breakpoints.down('sm')]: {
      minHeight: '50px',
    },
  },

  // Pagination
  '& .MuiTablePagination-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.85rem',

    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
      fontSize: '0.85rem',
      marginBottom: 0,
    },

    '& .MuiTablePagination-select': {
      fontSize: '0.85rem',
    },

    '& .MuiTablePagination-actions': {
      marginLeft: '16px',
    },

    // Mobile responsive font sizes
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',

      '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows':
        {
          fontSize: '0.75rem',
        },

      '& .MuiTablePagination-select': {
        fontSize: '0.75rem',
      },
    },
  },

  // Icon buttons
  '& .MuiIconButton-root': {
    color: 'rgba(255, 255, 255, 0.4)',
    transition: 'background-color 150ms ease, color 150ms ease',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--brand-blue)',
    },

    '&.Mui-disabled': {
      color: 'rgba(255, 255, 255, 0.1)',
    },
  },

  // Selected row count
  '& .MuiDataGrid-selectedRowCount': {
    color: 'rgba(255, 255, 255, 0.5)',
  },

  // Custom scrollbar
  '& .MuiDataGrid-scrollbar': {
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',

      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
}));
