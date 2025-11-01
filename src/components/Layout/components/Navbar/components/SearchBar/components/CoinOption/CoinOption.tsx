import { ArrowForwardIos } from '@mui/icons-material';
import { CoinOptionProps } from './interface';
import { BADGE, UTILITY } from 'styles/styles';

const CHIP_CLASSES =
  `${BADGE.base} text-[0.7rem] px-2 py-0.5 h-5 ` +
  'bg-[var(--chip-bg)] text-[var(--brand-blue)] border-[var(--chip-border)]';

export default function CoinOption({ coin, isFocused }: CoinOptionProps) {
  return (
    <div className={`${UTILITY.flexBetween} gap-4`}>
      <div className='flex flex-col flex-1 min-w-0'>
        <span
          className={`font-semibold text-[0.95rem] leading-tight ${
            UTILITY.truncate
          } ${isFocused ? 'text-white' : 'text-white/90'}`}
        >
          {coin.name}
        </span>
        <div className={`${UTILITY.flexCenter} gap-2 mt-2.5`}>
          <span className={CHIP_CLASSES}>{coin.symbol?.toUpperCase()}</span>
          <span
            className={`text-[0.75rem] text-white/40 ${UTILITY.truncate} flex-1`}
          >
            {coin.id}
          </span>
        </div>
      </div>
      <ArrowForwardIos
        sx={{ fontSize: '0.9rem' }}
        className={`${UTILITY.transitionAll} duration-200 flex-shrink-0 ${
          isFocused
            ? 'text-[var(--brand-blue)] translate-x-1'
            : 'text-white/20 translate-x-0'
        }`}
      />
    </div>
  );
}
