import { ArrowForwardIos } from '@mui/icons-material';
import { CoinOptionProps } from './interface';
import { NAVBAR } from 'styles/styles';

export default function CoinOption({ coin, isFocused }: CoinOptionProps) {
  return (
    <div className={NAVBAR.coinOption.container}>
      <div className={NAVBAR.coinOption.contentWrapper}>
        <span
          className={`${NAVBAR.coinOption.name} ${
            isFocused
              ? NAVBAR.coinOption.nameFocused
              : NAVBAR.coinOption.nameUnfocused
          }`}
        >
          {coin.name}
        </span>
        <div className={NAVBAR.coinOption.badgeRow}>
          <span className={NAVBAR.coinOption.chip}>
            {coin.symbol?.toUpperCase()}
          </span>
          <span className={NAVBAR.coinOption.id}>{coin.id}</span>
        </div>
      </div>
      <ArrowForwardIos
        sx={{ fontSize: '0.9rem' }}
        className={`${NAVBAR.coinOption.icon} ${
          isFocused
            ? NAVBAR.coinOption.iconFocused
            : NAVBAR.coinOption.iconUnfocused
        }`}
      />
    </div>
  );
}
