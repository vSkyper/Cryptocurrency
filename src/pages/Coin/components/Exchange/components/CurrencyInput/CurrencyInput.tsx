import { CurrencyInputProps } from './interface';

const INPUT_CONTAINER_CLASSES =
  'px-4 py-3 rounded-2xl bg-[var(--bg-tertiary-dark)] w-full h-15 flex items-center';

const INPUT_CLASSES =
  'w-full text-right text-lg font-medium bg-transparent outline-none text-white/90';

const CURRENCY_BADGE_CLASSES =
  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ' +
  'bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white/90';

export default function CurrencyInput({
  label,
  symbol,
  value,
  onChange,
  children,
}: CurrencyInputProps) {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-3 w-full'>
        <div className='flex items-center gap-3 mb-2'>
          <div className={CURRENCY_BADGE_CLASSES}>
            {symbol.charAt(0).toUpperCase()}
          </div>
          {children || (
            <div className='font-semibold uppercase text-sm text-white/90'>
              {label}
            </div>
          )}
        </div>

        <div className={INPUT_CONTAINER_CLASSES}>
          <input
            className={INPUT_CLASSES}
            type='number'
            value={value}
            onChange={onChange}
            placeholder='0.00'
          />
        </div>
      </div>
    </div>
  );
}
