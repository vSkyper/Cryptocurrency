import { SwitchProps } from './interface';
import {
  BarChart as BarChartIcon,
  BarChartOutlined as BarChartOutlinedIcon,
} from '@mui/icons-material';
import { HOME } from 'styles/styles';

export default function Switch({ toggle, setToggle, mobile }: SwitchProps) {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const iconSize = mobile ? '1rem' : '1.2rem';

  const sizeClasses = mobile ? HOME.switch.sizeMobile : HOME.switch.sizeDesktop;

  const stateClasses = toggle ? HOME.switch.active : HOME.switch.inactive;

  const buttonClasses = `${HOME.switch.base} ${sizeClasses} ${stateClasses}`;

  const Icon = toggle ? BarChartIcon : BarChartOutlinedIcon;

  return (
    <div className={mobile ? HOME.switch.wrapper : ''}>
      <button
        onClick={handleToggle}
        className={buttonClasses}
        aria-pressed={toggle}
        aria-label='Toggle statistics display'
      >
        {/* Shine effect */}
        <span className={HOME.switch.shine} aria-hidden='true' />

        <span className={HOME.switch.content}>
          <Icon
            sx={{
              fontSize: iconSize,
              transition: 'all 200ms ease',
            }}
          />
          <span>Show Stats</span>
        </span>
      </button>
    </div>
  );
}
