import { FormControlLabel } from '@mui/material';
import { IOSSwitch } from './styled';
import { useCallback } from 'react';
import { SwitchProps } from './interface';

export default function Switch(props: SwitchProps) {
  const { toggle, setToggle, mobile } = props;

  const handleChange = useCallback(() => {
    setToggle(!toggle);
  }, [setToggle, toggle]);

  return (
    <FormControlLabel
      control={
        <IOSSwitch checked={toggle} sx={{ mr: 1 }} onChange={handleChange} />
      }
      label='Show Stats'
      sx={{
        m: 0,
        '.MuiFormControlLabel-label': {
          fontWeight: 600,
          color: '#ffffff',
          fontSize: '1.1rem',
        },
        ...(mobile
          ? { ml: 1.3, display: { xs: 'block', md: 'none' } }
          : { ml: 0, display: { xs: 'none', md: 'flex' } }),
      }}
    />
  );
}
