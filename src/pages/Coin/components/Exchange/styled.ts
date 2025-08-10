import { InputBase, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputBaseExchange = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  flex: 1,
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})) as typeof InputBase;

export const InputCard = styled(Paper)(({ theme }) => ({
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
  alignItems: 'center',
  width: 320,
  height: 60,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  boxShadow: theme.shadows[3],
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
  '&:focus-within': {
    boxShadow: theme.shadows[6],
    transform: 'translateY(-1px)',
  },
  [theme.breakpoints.up('lg')]: {
    height: 70,
  },
})) as typeof Paper;
