import { Link } from 'react-router-dom';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { UTILITY } from 'styles/styles';

const LOGO_BASE_CLASSES =
  `${UTILITY.flexCenter} backdrop-blur-md rounded-lg ${UTILITY.transitionAll} ` +
  'duration-300 ease-out relative overflow-hidden group';

const LOGO_GRADIENT_CLASSES =
  'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] ' +
  'to-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)] ' +
  'border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]';

const LOGO_HOVER_CLASSES =
  'hover:bg-gradient-to-br hover:from-[color-mix(in_srgb,var(--brand-blue)_25%,transparent)] ' +
  'hover:to-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] hover:-translate-y-0.5 ' +
  'hover:scale-105 hover:shadow-[0_8px_25px_color-mix(in_srgb,var(--brand-blue)_25%,transparent),0_4px_12px_rgba(0,0,0,0.15)] ' +
  'hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]';

const LOGO_ACTIVE_CLASSES = 'active:-translate-y-px active:scale-[1.02]';

const SHINE_EFFECT_CLASSES =
  'absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent ' +
  'via-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] to-transparent ' +
  'transition-all duration-500 group-hover:left-full';

const DESKTOP_TITLE_BASE_CLASSES =
  `relative bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-light)] ` +
  `to-[var(--brand-blue)] bg-[length:200%_100%] bg-clip-text text-transparent ` +
  `${UTILITY.transitionAll} duration-[400ms] ease-out no-underline`;

const DESKTOP_TITLE_HOVER_CLASSES =
  'hover:bg-[position:100%_0] hover:-translate-y-px ' +
  'hover:[filter:drop-shadow(0_4px_8px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]';

const DESKTOP_TITLE_UNDERLINE_CLASSES =
  "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 " +
  'after:bg-gradient-to-r after:from-[var(--brand-blue)] after:to-[var(--brand-blue-light)] ' +
  `after:rounded-b-xs after:${UTILITY.transitionAll} after:duration-300 after:ease-out hover:after:w-full`;

const MOBILE_TITLE_CLASSES =
  `bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] ` +
  `bg-clip-text text-transparent ${UTILITY.transitionAll} duration-300 ease-out no-underline ` +
  'hover:[filter:drop-shadow(0_2px_4px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]';

export default function Title() {
  const logoClasses = `${LOGO_BASE_CLASSES} ${LOGO_GRADIENT_CLASSES} ${LOGO_HOVER_CLASSES} ${LOGO_ACTIVE_CLASSES} p-1.5 sm:p-2 text-[var(--brand-blue)]`;
  const desktopTitleClasses = `${DESKTOP_TITLE_BASE_CLASSES} ${DESKTOP_TITLE_HOVER_CLASSES} ${DESKTOP_TITLE_UNDERLINE_CLASSES}`;

  return (
    <div className={`${UTILITY.flexCenter} gap-2 sm:gap-3`}>
      {/* Logo Button */}
      <Link to='/' title='Go to Homepage' className={logoClasses}>
        <span className={SHINE_EFFECT_CLASSES} />
        <TrendingUpIcon
          sx={{ fontSize: '1.4rem' }}
          className='[filter:drop-shadow(var(--shadow-dropdown))]'
        />
      </Link>

      {/* Desktop Title */}
      <h1 className='hidden sm:block font-bold text-lg md:text-xl tracking-wide'>
        <Link to='/' className={desktopTitleClasses}>
          Cryptocurrency
        </Link>
      </h1>

      {/* Mobile Title */}
      <h1 className='block sm:hidden font-bold text-base tracking-wide'>
        <Link to='/' className={MOBILE_TITLE_CLASSES}>
          Crypto
        </Link>
      </h1>
    </div>
  );
}
