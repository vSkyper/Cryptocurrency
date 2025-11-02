import { CurrencyInputProps } from './interface';
import { INPUT, COIN } from 'styles/styles';

export default function CurrencyInput({
  label,
  symbol,
  value,
  onChange,
  children,
}: CurrencyInputProps) {
  return (
    <div className={COIN.currencyInput.container}>
      <div className={COIN.currencyInput.innerContainer}>
        <div className={COIN.currencyInput.headerWrapper}>
          <div className={COIN.currencyInput.badge}>
            {symbol.charAt(0).toUpperCase()}
          </div>
          {children || <div className={COIN.currencyInput.label}>{label}</div>}
        </div>

        <div className={COIN.currencyInput.inputContainer}>
          <input
            className={`${INPUT.number} ${COIN.currencyInput.input}`}
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
