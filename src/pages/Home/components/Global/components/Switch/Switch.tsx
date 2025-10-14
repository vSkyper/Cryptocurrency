import { memo, useCallback } from 'react';
import { ToggleButton, ToggleButtonContainer } from './styled';
import { SwitchProps } from './interface';
import {
  BarChart as BarChartIcon,
  BarChartOutlined as BarChartOutlinedIcon,
} from '@mui/icons-material';

function Switch(props: SwitchProps) {
  const { toggle, setToggle, mobile } = props;

  const handleChange = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  return (
    <ToggleButtonContainer mobile={mobile}>
      <ToggleButton onClick={handleChange} active={toggle} mobile={mobile}>
        {toggle ? (
          <BarChartIcon
            sx={{
              fontSize: mobile ? '1rem' : '1.2rem',
              transition: 'all 200ms ease',
            }}
          />
        ) : (
          <BarChartOutlinedIcon
            sx={{
              fontSize: mobile ? '1rem' : '1.2rem',
              transition: 'all 200ms ease',
            }}
          />
        )}
        <span>Show Stats</span>
      </ToggleButton>
    </ToggleButtonContainer>
  );
}

export default memo(Switch);
