import { FormControlLabel } from "@mui/material";
import { IOSSwitch } from "./styled";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
};

export default function Switch({ toggle, setToggle, mobile }: Props) {
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          checked={toggle}
          sx={{ mr: 1 }}
          onChange={() => setToggle(!toggle)}
        />
      }
      label='Show Stats'
      sx={mobile ? { ml: 1.3, display: { xs: 'none', sm: 'block' } } : { ml: 0.1, mt: 2, display: { xs: 'block', sm: 'none' } }}
    />
  )
}