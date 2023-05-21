import { FormControlLabel } from '@mui/material';
import { IOSSwitch } from './styled';
import { useCallback } from 'react';

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

export default function Switch({ toggle, setToggle, mobile }: Props) {
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
