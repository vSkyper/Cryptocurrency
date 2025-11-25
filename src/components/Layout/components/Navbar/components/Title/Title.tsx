import { Link } from 'react-router-dom';
import { MdTrendingUp as TrendingUpIcon } from 'react-icons/md';

export default function Title() {
  return (
    <div className='flex items-center justify-center gap-2 sm:gap-3'>
      {/* Logo Button */}
      <Link
        to='/'
        title='Go to Homepage'
        className='flex items-center justify-center rounded-xl transition-all duration-300 ease-out relative overflow-hidden group bg-linear-to-br from-white/10 to-white/5 border border-white/10 hover:bg-white/15 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/20 active:-translate-y-px active:scale-[1.02] p-1 sm:p-2 text-white'
      >
        <span className='absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full' />
        <TrendingUpIcon className='text-[1.4rem]! filter-[drop-shadow(0_0_5px_rgba(255,255,255,0.2))]' />
      </Link>

      {/* Desktop Title */}
      <h1 className='hidden sm:block font-bold text-lg md:text-xl tracking-wide'>
        <Link
          to='/'
          className='relative text-white font-bold tracking-tight text-lg transition-all duration-300 hover:text-white/80'
        >
          Cryptocurrency
        </Link>
      </h1>

      {/* Mobile Title */}
      <h1 className='block sm:hidden font-bold text-base tracking-wide'>
        <Link
          to='/'
          className='text-white font-bold tracking-tight transition-all duration-300 hover:text-white/80'
        >
          Crypto
        </Link>
      </h1>
    </div>
  );
}
