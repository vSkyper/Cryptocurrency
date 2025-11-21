import { CurrencyInputProps } from './interface';

export default function CurrencyInput({
  label,
  symbol,
  value,
  onChange,
  children,
}: CurrencyInputProps) {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-1.5 sm:gap-2 w-full'>
        <div className='flex items-center gap-2 mb-1 sm:mb-1'>
          <div className='w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold bg-linear-to-br from-(--brand-blue) to-(--brand-blue-light) text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]'>
            {symbol.charAt(0).toUpperCase()}
          </div>
          {children || (
            <div className='font-bold uppercase text-xs sm:text-sm text-white/60 tracking-wider'>
              {label}
            </div>
          )}
        </div>

        <div className='px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full h-11 sm:h-16 flex items-center focus-within:bg-white/10 focus-within:border-(--brand-blue)/50 focus-within:shadow-[0_0_30px_rgba(0,240,255,0.1)]'>
          <input
            className='w-full bg-transparent focus:outline-none text-white/95 font-mono text-right text-lg sm:text-xl font-bold tracking-tight outline-none placeholder-white/10'
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
