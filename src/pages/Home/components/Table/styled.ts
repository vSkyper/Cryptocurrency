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
    backgroundColor: 'rgba(10, 10, 15, 0.7) !important',
    backdropFilter: 'blur(20px) saturate(180%)',
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 800,

    // Mobile responsive sizing
    [theme.breakpoints.down('sm')]: {
      height: '56px !important',
    },

    '& .MuiDataGrid-columnHeader': {
      backgroundColor: TRANSPARENT,
      padding: '0 24px',

      // Mobile responsive padding
      [theme.breakpoints.down('sm')]: {
        padding: '0 16px',
        height: '56px !important',
      },

      '&:focus': {
        outline: 'none',
      },

      // Hover effect for sortable headers
      '&:hover .MuiDataGrid-columnHeaderTitle': {
        color: 'rgba(255, 255, 255, 0.9)',
      },
    },

    '& .MuiDataGrid-columnHeaderTitle': {
      color: 'rgba(255, 255, 255, 0.4)',
      fontWeight: 800,
      fontSize: '0.7rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      transition: 'color 0.2s ease',

      // Mobile responsive font sizes
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem !important',
        letterSpacing: '0.05em',
      },
    },

    // Sort icon style
    '& .MuiDataGrid-sortIcon': {
      color: 'rgba(255, 255, 255, 0.4)',
      opacity: 0.5,
      transition: 'opacity 0.2s ease',
    },
    '& .MuiDataGrid-columnHeader:hover .MuiDataGrid-sortIcon': {
      opacity: 1,
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

export const gridMenuSx = {
  '& .MuiPaper-root': {
    background:
      'linear-gradient(145deg, rgba(25, 25, 35, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%) !important',
    backdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    boxShadow:
      '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  '& .MuiMenuItem-root': {
    fontFamily: 'inherit',
    fontSize: '0.85rem',
    fontWeight: 500,
    padding: '10px 16px',
    color: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.2s ease',
    gap: '8px',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
    },

    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },

  // Mobile adjustments
  '@media (max-width: 600px)': {
    '& .MuiPaper-root': {
      minWidth: '110px !important',
    },
    '& .MuiMenuItem-root': {
      fontSize: '0.6rem',
      padding: '4px 8px',
      minHeight: '28px',
      gap: '6px',
    },
    '& .MuiListItemIcon-root': {
      minWidth: '20px !important',
      '& svg': {
        fontSize: '1.1rem',
      },
    },
  },
};
