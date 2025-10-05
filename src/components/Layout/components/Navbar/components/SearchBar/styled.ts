import { Autocomplete, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled(Autocomplete)(() => ({
  position: 'relative',
  borderRadius: '16px',
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
  backdropFilter: 'blur(16px) saturate(180%)',
  border: '1px solid rgba(64, 156, 255, 0.15)',
  color: 'rgba(255, 255, 255, 0.9)',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow:
    '0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(64, 156, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
  width: '100%',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(90deg, transparent 0%, rgba(64, 156, 255, 0.05) 50%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 300ms ease-in-out',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
    border: '1px solid rgba(64, 156, 255, 0.25)',
    boxShadow:
      '0 6px 25px rgba(0,0,0,0.15), 0 2px 8px rgba(64, 156, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
    transform: 'translateY(-1px)',
    '&::before': {
      opacity: 1,
    },
  },
  '&.Mui-focused': {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
    border: '1px solid rgba(64, 156, 255, 0.4)',
    boxShadow:
      '0 8px 30px rgba(0,0,0,0.2), 0 0 0 4px rgba(64, 156, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
    transform: 'translateY(-2px)',
  },
  '& .MuiAutocomplete-popupIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  '& .MuiAutocomplete-paper': {
    background: `linear-gradient(135deg, 
      rgba(64, 156, 255, 0.08) 0%, 
      rgba(59, 130, 246, 0.04) 100%
    )`,
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(64, 156, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: `
      0 12px 40px rgba(0,0,0,0.3),
      0 4px 16px rgba(64, 156, 255, 0.1),
      inset 0 1px 0 rgba(255,255,255,0.08)
    `,
    marginTop: '8px',
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, 
        rgba(64, 156, 255, 0.05), 
        rgba(59, 130, 246, 0.03), 
        transparent 50%
      )`,
      zIndex: 0,
    },
  },
  '& .MuiAutocomplete-listbox': {
    position: 'relative',
    zIndex: 1,
    padding: '12px',
    '& .MuiAutocomplete-option': {
      borderRadius: '12px',
      margin: '4px 0',
      padding: '14px 18px',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.95rem',
      fontWeight: 500,
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(90deg, transparent, rgba(64, 156, 255, 0.15), transparent)',
        transition: 'left 400ms ease',
        zIndex: -1,
      },
      '&:hover, &.Mui-focused': {
        background: `linear-gradient(135deg, 
          rgba(64, 156, 255, 0.12) 0%, 
          rgba(59, 130, 246, 0.06) 100%
        )`,
        color: '#409CFF',
        transform: 'translateX(4px)',
        boxShadow: `
          0 4px 16px rgba(64, 156, 255, 0.15),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
        border: '1px solid rgba(64, 156, 255, 0.2)',
        '&::before': {
          left: '100%',
        },
      },
      '&[aria-selected="true"]': {
        background: `linear-gradient(135deg, 
          rgba(64, 156, 255, 0.2) 0%, 
          rgba(59, 130, 246, 0.1) 100%
        )`,
        color: '#409CFF',
        fontWeight: 600,
        transform: 'translateX(6px)',
        boxShadow: `
          0 6px 20px rgba(64, 156, 255, 0.2),
          inset 0 1px 0 rgba(255,255,255,0.15)
        `,
        border: '1px solid rgba(64, 156, 255, 0.3)',
        '&::after': {
          content: '"→"',
          color: 'rgba(64, 156, 255, 0.8)',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        },
      },
    },
  },
  '& .MuiAutocomplete-noOptions': {
    padding: '20px',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.9rem',
    fontWeight: 500,
    position: 'relative',
    zIndex: 1,
  },
  '& .MuiAutocomplete-loading': {
    padding: '20px',
    textAlign: 'center',
    color: 'rgba(64, 156, 255, 0.8)',
    fontSize: '0.9rem',
    fontWeight: 500,
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
})) as typeof Autocomplete;

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(64, 156, 255, 0.7)',
  zIndex: 1,
  transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
    filter: 'drop-shadow(0 1px 2px rgba(64, 156, 255, 0.3))',
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiSvgIcon-root': {
      fontSize: '1.3rem',
    },
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  width: '100%',
  fontWeight: 500,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 2, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(['width', 'color']),
    fontSize: '0.95rem',
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.5, 2, 1.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4.5)})`,
      fontSize: '1rem',
    },
    '&::placeholder': {
      color: 'rgba(64, 156, 255, 0.6)',
      opacity: 1,
      fontWeight: 400,
    },
    '&:focus::placeholder': {
      color: 'rgba(64, 156, 255, 0.8)',
    },
  },
})) as typeof InputBase;
