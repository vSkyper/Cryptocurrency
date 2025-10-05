import { Autocomplete, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled(Autocomplete)(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(20, 30, 48, 0.6)'
      : 'rgba(255, 255, 255, 0.6)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(64, 156, 255, 0.15)'
      : 'rgba(64, 156, 255, 0.2)'
  }`,
  color: theme.palette.text.primary,
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  overflow: 'hidden',
  '&:hover': {
    border: `1px solid ${
      theme.palette.mode === 'dark'
        ? 'rgba(64, 156, 255, 0.3)'
        : 'rgba(64, 156, 255, 0.35)'
    }`,
  },
  '&.Mui-focused': {
    border: `1px solid ${
      theme.palette.mode === 'dark'
        ? 'rgba(64, 156, 255, 0.4)'
        : 'rgba(64, 156, 255, 0.5)'
    }`,
  },
  '& .MuiAutocomplete-popupIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  '& .MuiAutocomplete-paper': {
    background: (theme: any) =>
      theme.palette.mode === 'dark'
        ? 'rgba(20, 30, 48, 0.95)'
        : 'rgba(255, 255, 255, 0.95)',
    border: (theme: any) =>
      `1px solid ${
        theme.palette.mode === 'dark'
          ? 'rgba(64, 156, 255, 0.2)'
          : 'rgba(64, 156, 255, 0.25)'
      }`,
    borderRadius: '12px',
    marginTop: '8px',
    overflow: 'hidden',
  },
  '& .MuiAutocomplete-listbox': {
    padding: '8px',
    '& .MuiAutocomplete-option': {
      borderRadius: '8px',
      margin: '2px 0',
      padding: '12px 16px',
      fontSize: '0.95rem',
      fontWeight: 500,
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'transparent',
      '&:hover, &.Mui-focused': {
        background: 'rgba(64, 156, 255, 0.1)',
        color: '#409CFF',
      },
      '&[aria-selected="true"]': {
        background: 'rgba(64, 156, 255, 0.15)',
        color: '#409CFF',
        fontWeight: 600,
      },
    },
  },
  '& .MuiAutocomplete-noOptions': {
    padding: '16px',
    textAlign: 'center',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  '& .MuiAutocomplete-loading': {
    padding: '16px',
    textAlign: 'center',
    color: '#409CFF',
    fontSize: '0.9rem',
    fontWeight: 500,
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
  color: '#409CFF',
  zIndex: 1,
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiSvgIcon-root': {
      fontSize: '1.3rem',
    },
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
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
  },
})) as typeof InputBase;
