import { Autocomplete, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled(Autocomplete)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.spacing(2),
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'rgba(255, 255, 255, 0.9)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  marginLeft: 0,
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  '& .MuiAutocomplete-popupIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
})) as typeof Autocomplete;

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  zIndex: 1,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.75, 1.5, 0.75, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create(['width', 'color']),
    fontSize: '0.875rem',
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.25, 1.5, 1.25, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      fontSize: '0.95rem',
    },
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.6)',
      opacity: 1,
    },
  },
})) as typeof InputBase;
