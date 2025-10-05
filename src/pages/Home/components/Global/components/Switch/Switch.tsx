import { memo, useCallback } from 'react';
import { IOSSwitch, StyledFormControlLabel } from './styled';
import { SwitchProps } from './interface';

function Switch(props: SwitchProps) {
  const { toggle, setToggle, mobile } = props;

  const handleChange = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  return (
    <StyledFormControlLabel
      mobile={mobile}
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
    />
  );
}

export default memo(Switch);
