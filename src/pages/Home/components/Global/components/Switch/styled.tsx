import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => {
  const checkedTranslateX = 20;
  return {
    width: 48,
    height: 28,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '200ms',
      '&.Mui-checked': {
        transform: `translateX(${checkedTranslateX}px)`,
        color: theme.palette.common.white,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          boxShadow: `inset 0 0 0 1.5px ${theme.palette.primary.main}`,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        boxShadow: `0 0 0 4px ${theme.palette.primary.main}33`,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[700],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.6 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 24,
      height: 24,
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
    },
    '& .MuiSwitch-track': {
      borderRadius: 28 / 2,
      backgroundColor: theme.palette.grey[800],
      backgroundClip: 'padding-box',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
  };
}) as typeof Switch;
