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
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  },
  '&.Mui-focused': {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%)',
    border: `1px solid ${theme.palette.primary.main}60`,
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}20, 0 6px 20px rgba(0,0,0,0.15)`,
    transform: 'translateY(-1px)',
  },
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
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  zIndex: 1,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 1.5, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(['width', 'color']),
    fontSize: '0.95rem',
    fontWeight: 500,
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.6)',
      opacity: 1,
    },
  },
})) as typeof InputBase;
