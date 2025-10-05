import { Autocomplete, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled(Autocomplete)(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  background: 'rgba(20, 30, 48, 0.6)',
  color: theme.palette.text.primary,
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  overflow: 'hidden',
  '&:hover': {
    background: 'rgba(25, 35, 55, 0.7)',
  },
  '&.Mui-focused': {
    background: 'rgba(30, 40, 60, 0.8)',
  },
  '& .MuiAutocomplete-popupIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  '& .MuiAutocomplete-paper': {
    background: 'rgba(20, 30, 48, 0.95)',
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
