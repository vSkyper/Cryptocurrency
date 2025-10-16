import { useCallback } from 'react';
import { SwitchProps } from './interface';
import {
  BarChart as BarChartIcon,
  BarChartOutlined as BarChartOutlinedIcon,
} from '@mui/icons-material';

export default function Switch({ toggle, setToggle, mobile }: SwitchProps) {
  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, [setToggle]);

  const iconSize = mobile ? '1rem' : '1.2rem';

  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full ' +
    'backdrop-blur-md border transition-all duration-300 ease-out relative ' +
    'overflow-hidden group active:translate-y-0';

  const sizeClasses = mobile ? 'px-5 py-3 text-sm' : 'px-5 py-2.5 text-base';

  const activeClasses =
    'bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white ' +
    'shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)] ' +
    'hover:bg-[color-mix(in_srgb,var(--brand-blue)_90%,black)]';

  const inactiveClasses =
    'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)] ' +
    'to-[color-mix(in_srgb,var(--brand-blue)_4%,transparent)] ' +
    'border-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] text-white/70 ' +
    'hover:from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] ' +
    'hover:to-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] ' +
    'hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)] ' +
    'hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]';

  const buttonClasses = `${baseClasses} ${sizeClasses} ${
    toggle ? activeClasses : inactiveClasses
  }`;

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
          className='absolute top-0 -left-full w-full h-full bg-gradient-to-r 
                     from-transparent via-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] 
                     to-transparent transition-all duration-500 group-hover:left-full'
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
