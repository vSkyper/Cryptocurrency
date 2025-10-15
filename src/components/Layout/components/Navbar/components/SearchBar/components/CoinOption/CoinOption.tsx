import { ArrowForwardIos } from '@mui/icons-material';
import { CoinOptionProps } from './interface';

const CHIP_CLASSES =
  'inline-flex items-center px-2 py-0.5 text-[0.7rem] font-semibold ' +
  'bg-[var(--chip-bg)] text-[var(--brand-blue)] border border-[var(--chip-border)] ' +
  'rounded-full h-5';

export default function CoinOption({ coin, isFocused }: CoinOptionProps) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex flex-col flex-1 min-w-0'>
        <span
          className={`font-semibold text-[0.95rem] leading-tight truncate ${
            isFocused ? 'text-white' : 'text-white/90'
          }`}
        >
          {coin.name}
        </span>
        <div className='flex items-center gap-2 mt-2.5'>
          <span className={CHIP_CLASSES}>{coin.symbol?.toUpperCase()}</span>
          <span className='text-[0.75rem] text-white/40 truncate flex-1'>
            {coin.id}
          </span>
        </div>
      </div>
      <ArrowForwardIos
        sx={{ fontSize: '0.9rem' }}
        className={`transition-all duration-200 flex-shrink-0 ${
          isFocused
            ? 'text-[var(--brand-blue)] translate-x-1'
            : 'text-white/20 translate-x-0'
        }`}
      />
    </div>
  );
}
