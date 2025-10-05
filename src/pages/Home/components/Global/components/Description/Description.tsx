import { memo, useMemo } from 'react';
import { DescriptionProps } from './interface';
import {
  DescriptionText,
  BoldText,
  ChangeText,
  BTCText,
  ETHText,
} from './styled';

function Description(props: DescriptionProps) {
  const { globalData } = props;

  const formattedValues = useMemo(
    () => ({
      marketCapText: Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
      }).format(globalData.data.total_market_cap.usd),

      marketCapPercentage: (
        globalData.data.market_cap_change_percentage_24h_usd / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      totalVolumeText: Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
      }).format(globalData.data.total_volume.usd),

      marketCapPercentageBTC: (
        globalData.data.market_cap_percentage.btc / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      marketCapPercentageETH: (
        globalData.data.market_cap_percentage.eth / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      cryptocurrencies:
        globalData.data.active_cryptocurrencies.toLocaleString('en-US'),

      isNegative: globalData.data.market_cap_change_percentage_24h_usd < 0,
    }),
    [globalData]
  );

  return (
    <DescriptionText variant='body2'>
      The global cryptocurrency market cap today is{' '}
      <BoldText component='span'>{formattedValues.marketCapText}</BoldText>, a{' '}
      <ChangeText component='span' isNegative={formattedValues.isNegative}>
        {formattedValues.marketCapPercentage}
      </ChangeText>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <BoldText component='span'>{formattedValues.totalVolumeText}</BoldText>.
      Bitcoin dominance is at{' '}
      <BTCText component='span'>
        {formattedValues.marketCapPercentageBTC}
      </BTCText>{' '}
      and Ethereum dominance is at{' '}
      <ETHText component='span'>
        {formattedValues.marketCapPercentageETH}
      </ETHText>
      . CoinGecko API is now tracking{' '}
      <BoldText component='span'>{formattedValues.cryptocurrencies}</BoldText>{' '}
      cryptocurrencies.
    </DescriptionText>
  );
}

export default memo(Description);
