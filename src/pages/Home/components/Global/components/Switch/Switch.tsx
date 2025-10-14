import { memo, useCallback } from 'react';
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
    <div className={mobile ? 'flex justify-center' : ''}>
      <button
        onClick={handleChange}
        className={`
          inline-flex items-center justify-center gap-2
          ${mobile ? 'px-5 py-3 text-sm' : 'px-5 py-2.5 text-base'}
          font-semibold rounded-full backdrop-blur-md border transition-all duration-300 ease-out relative overflow-hidden group
          ${
            toggle
              ? 'bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)]'
              : 'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_4%,transparent)] border-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] text-white/70'
          }
          ${
            !toggle &&
            'hover:bg-gradient-to-br hover:from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]'
          }
          ${
            toggle &&
            'hover:bg-[color-mix(in_srgb,var(--brand-blue)_90%,black)]'
          }
          active:translate-y-0
        `}
      >
        {/* Shine effect */}
        <span className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] to-transparent transition-all duration-500 group-hover:left-full' />

        <span className='relative z-10 flex items-center gap-2 transition-all duration-200'>
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
        </span>
      </button>
    </div>
  );
}

export default memo(Switch);
