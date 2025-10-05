import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => {
  const checkedTranslateX = 22;
  return {
    width: 52,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: `translateX(${checkedTranslateX}px)`,
        color: '#fff',
        '& + .MuiSwitch-track': {
          background: 'linear-gradient(135deg, #409CFF 0%, #3B82F6 100%)',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        boxShadow: `0 0 0 6px rgba(102, 126, 234, 0.3)`,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 28,
      height: 28,
      background: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    '& .MuiSwitch-track': {
      borderRadius: 32 / 2,
      background: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
      }),
    },
  };
}) as typeof Switch;
