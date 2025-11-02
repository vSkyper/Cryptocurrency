import { Link } from 'react-router-dom';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { NAVBAR } from 'styles/styles';

export default function Title() {
  const logoClasses = `${NAVBAR.title.logoBase} ${NAVBAR.title.logoGradient} ${NAVBAR.title.logoHover} ${NAVBAR.title.logoActive} ${NAVBAR.title.logoPadding}`;
  const desktopTitleClasses = `${NAVBAR.title.desktopTitleBase} ${NAVBAR.title.desktopTitleHover} ${NAVBAR.title.desktopTitleUnderline}`;

  return (
    <div className='flex items-center justify-center gap-2 sm:gap-3'>
      {/* Logo Button */}
      <Link to='/' title='Go to Homepage' className={logoClasses}>
        <span className={NAVBAR.title.shineEffect} />
        <TrendingUpIcon
          sx={{ fontSize: '1.4rem' }}
          className={NAVBAR.title.logoIcon}
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
        <Link to='/' className={NAVBAR.title.mobileTitleBase}>
          Crypto
        </Link>
      </h1>
    </div>
  );
}
