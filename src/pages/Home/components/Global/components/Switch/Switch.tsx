import { SwitchProps } from './interface';
import {
  BarChart as BarChartIcon,
  BarChartOutlined as BarChartOutlinedIcon,
} from '@mui/icons-material';

export default function Switch({ toggle, setToggle, mobile }: SwitchProps) {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const iconSize = mobile ? '1rem' : '1.2rem';

  const sizeClasses = mobile ? 'px-4 py-2 text-xs' : 'px-6 py-2.5 text-base';

  const stateClasses = toggle
    ? 'bg-(--brand-blue) border-(--brand-blue) text-black shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-(--brand-blue-light)'
    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20';

  const buttonClasses = `flex items-center justify-center gap-2 font-bold rounded-full backdrop-blur-md border transition-all duration-300 ease-out relative overflow-hidden group active:translate-y-0 ${sizeClasses} ${stateClasses}`;

  const Icon = toggle ? BarChartIcon : BarChartOutlinedIcon;

  return (
    <div className={mobile ? 'flex justify-center' : ''}>
      <button
        onClick={handleToggle}
        className={buttonClasses}
        aria-pressed={toggle}
        aria-label='Toggle statistics display'
      >
        {/* Shine effect */}
        <span
          className='absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full'
          aria-hidden='true'
        />

        <span className='relative z-10 flex items-center gap-2 transition-all duration-200'>
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
