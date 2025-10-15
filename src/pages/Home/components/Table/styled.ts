import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const BORDER_RADIUS = 24;
const TRANSPARENT = 'transparent !important';

const createColorMix = (color: string, percentage: number) =>
  `color-mix(in srgb, ${color} ${percentage}%, transparent)`;

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  borderRadius: BORDER_RADIUS,
  border: 'none',
  backgroundColor: TRANSPARENT,
  background: TRANSPARENT,

  // Main container
  '& .MuiDataGrid-main': {
    backgroundColor: TRANSPARENT,
  },

  // Border colors
  '& .MuiDataGrid-withBorderColor': {
    borderColor: TRANSPARENT,
  },

  // Remove cell borders
  '& .MuiDataGrid-cell, & .MuiDataGrid-row, & .MuiDataGrid-columnHeader': {
    borderBottom: 'none !important',
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
  },

  // Row styles
  '& .MuiDataGrid-row': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    contain: 'layout style paint',
    pointerEvents: 'auto',
    willChange: 'background-color',

    // Focus states
    '&:focus, &:focus-within': {
      backgroundColor: `${createColorMix('var(--brand-blue)', 10)} !important`,
      outline: 'none',
    },

    // Selected state
    '&.Mui-selected': {
      backgroundColor: `${createColorMix('var(--brand-blue)', 12)} !important`,
      '&:hover': {
        backgroundColor: `${createColorMix(
          'var(--brand-blue)',
          15
        )} !important`,
      },
    },

    // Alternating row pattern
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(20, 30, 48, 0.4)',
    },

    // Desktop hover effect
    [theme.breakpoints.up('md')]: {
      transition: 'background-color 100ms ease',
      '&:hover': {
        backgroundColor: `${createColorMix('var(--brand-blue)', 8)} !important`,
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
    padding: '12px 16px',
    fontSize: '0.875rem',
    fontWeight: 500,

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

  // Column headers
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'var(--bg-tertiary-dark) !important',
    background: 'var(--bg-tertiary-dark) !important',
    borderBottom: 'none',
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    color: 'var(--brand-blue)',
    fontWeight: 700,
    minHeight: '56px !important',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',

    '& .MuiDataGrid-columnHeader': {
      backgroundColor: TRANSPARENT,
      background: TRANSPARENT,
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

  // Footer
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: createColorMix('var(--brand-blue)', 5),
    borderTop: `1px solid ${createColorMix('var(--brand-blue)', 15)}`,
    color: 'rgba(255, 255, 255, 0.8)',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  // Pagination
  '& .MuiTablePagination-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },

  // Icon buttons
  '& .MuiIconButton-root': {
    color: createColorMix('var(--brand-blue)', 80),
    transition: 'background-color 150ms ease, color 150ms ease',

    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: createColorMix('var(--brand-blue)', 15),
        color: 'var(--brand-blue)',
      },
    },
  },

  // Selected row count
  '& .MuiDataGrid-selectedRowCount': {
    color: 'rgba(255, 255, 255, 0.8)',
  },

  // Custom scrollbar
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
      backgroundColor: createColorMix('var(--brand-blue)', 30),
      borderRadius: '4px',

      '&:hover': {
        backgroundColor: createColorMix('var(--brand-blue)', 50),
      },
    },
  },
}));
