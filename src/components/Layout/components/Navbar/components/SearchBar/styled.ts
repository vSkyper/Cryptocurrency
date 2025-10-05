import { Autocomplete, InputBase, Box, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled(Autocomplete)(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  background: 'color-mix(in srgb, var(--bg-primary) 60%, transparent)',
  color: theme.palette.text.primary,
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
  overflow: 'hidden',
  '&:hover': {
    background: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
  },
  '&.Mui-focused': {
    background: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
  },
  '& .MuiAutocomplete-popupIndicator': {
    display: 'none',
  },
  '& .MuiAutocomplete-endAdornment': {
    display: 'none',
  },
  '& .MuiAutocomplete-paper': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 20%, rgb(15, 23, 42)) 0%, color-mix(in srgb, var(--brand-blue) 15%, rgb(20, 30, 48)) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    borderRadius: '16px',
    marginTop: '12px',
    overflow: 'hidden',
    border: '2px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
    boxShadow:
      '0 8px 32px rgba(0, 0, 0, 0.5), 0 4px 16px color-mix(in srgb, var(--brand-blue) 35%, transparent), inset 0 1px 0 color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  },
  '& .MuiAutocomplete-listbox': {
    padding: '12px',
    '& .MuiAutocomplete-option': {
      borderRadius: '10px',
      margin: '3px 0',
      padding: '14px 18px',
      fontSize: '0.95rem',
      fontWeight: 500,
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      background: 'transparent',
      '&:hover, &.Mui-focused': {
        background: 'color-mix(in srgb, var(--brand-blue) 10%, transparent)',
        color: 'var(--brand-blue)',
      },
      '&[aria-selected="true"]': {
        background: 'color-mix(in srgb, var(--brand-blue) 15%, transparent)',
        color: 'var(--brand-blue)',
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
    color: 'var(--brand-blue)',
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
  color: 'var(--brand-blue)',
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
  color: 'var(--brand-blue)',
  width: '100%',
  fontWeight: 500,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25, 2, 1.25, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(['width', 'color']),
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--brand-blue)',
    '&::placeholder': {
      color: 'color-mix(in srgb, var(--brand-blue) 50%, transparent)',
      opacity: 1,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.5, 2, 1.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4.5)})`,
      fontSize: '1rem',
    },
  },
}));

export const OptionContainer = styled(Box)(() => ({
  display: 'flex !important' as any,
  alignItems: 'center !important' as any,
  justifyContent: 'space-between !important' as any,
  padding: '14px 18px !important' as any,
  margin: '4px 0 !important' as any,
  borderRadius: '12px !important' as any,
  cursor: 'pointer !important' as any,
}));

export const OptionContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
}));

export const OptionName = styled(Typography)(() => ({
  color: 'rgba(255, 255, 255, 0.95)',
  fontWeight: 600,
  fontSize: '0.95rem',
  lineHeight: 1.2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const OptionMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

export const SymbolChip = styled(Chip)(() => ({
  height: 20,
  fontSize: '0.7rem',
  fontWeight: 600,
  background: 'rgba(64, 156, 255, 0.15)',
  color: 'var(--brand-blue)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  '& .MuiChip-label': {
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

export const OptionId = styled(Typography)(() => ({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.75rem',
  fontWeight: 400,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
}));

export const InputWrapper = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
}));

export const ArrowIcon = styled(Box)(() => ({
  marginLeft: 16,
  color: 'color-mix(in srgb, var(--brand-blue) 40%, transparent)',
  transition: 'all 200ms ease',
  transform: 'translateX(0)',
  '.MuiAutocomplete-option:hover &': {
    color: 'var(--brand-blue)',
    transform: 'translateX(4px)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '0.8rem',
  },
}));
