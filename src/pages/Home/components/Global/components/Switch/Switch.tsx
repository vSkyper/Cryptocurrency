import { FormControlLabel } from '@mui/material';
import { IOSSwitch } from './styled';
import { memo, useCallback } from 'react';
import { SwitchProps } from './interface';

function Switch(props: SwitchProps) {
  const { toggle, setToggle, mobile } = props;

  const handleChange = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  return (
    <FormControlLabel
      control={
        <IOSSwitch
          checked={toggle}
          sx={{
            mr: mobile ? 0.5 : 1,
            transform: mobile ? 'scale(0.85)' : 'scale(1)',
          }}
          onChange={handleChange}
        />
      }
      label='Show Stats'
      sx={{
        m: 0,
        '.MuiFormControlLabel-label': {
          fontWeight: 600,
          color: '#ffffff',
          fontSize: mobile ? '0.9rem' : '1.1rem',
        },
        ...(mobile
          ? { ml: 0, display: { xs: 'block', md: 'none' } }
          : { ml: 0, display: { xs: 'none', md: 'flex' } }),
      }}
    />
  );
}

export default memo(Switch);
