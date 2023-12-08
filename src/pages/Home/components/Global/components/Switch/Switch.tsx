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
      sx={
        mobile
          ? { ml: 1.3, display: { xs: 'none', sm: 'block' } }
          : { ml: 0.1, mt: 2, display: { xs: 'block', sm: 'none' } }
      }
    />
  );
}
