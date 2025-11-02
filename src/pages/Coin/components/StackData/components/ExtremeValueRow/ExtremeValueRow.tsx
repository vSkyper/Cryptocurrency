import { PercentageBadge } from './components';
import { ExtremeValueRowProps } from './interface';
import { format, formatDistance } from 'date-fns';
import { formatCurrency } from 'utils/formatters';
import { COIN } from 'styles/styles';

const formatDateWithDistance = (date: string | number | Date) => {
  const dateObj = new Date(date);
  return `${format(dateObj, 'MMM d, y')} (${formatDistance(
    Date.now(),
    dateObj
  )} ago)`;
};

export default function ExtremeValueRow({
  label,
  price,
  percentage,
  date,
}: ExtremeValueRowProps) {
  return (
    <>
      <div className={`${COIN.stackData.row} items-start`}>
        <div className={COIN.stackData.label}>{label}</div>
        <div className={COIN.stackData.extremeValue.container}>
          <div className={COIN.stackData.extremeValue.priceWrapper}>
            <div className={COIN.stackData.extremeValue.price}>
              {formatCurrency(price)}
            </div>
            <PercentageBadge value={percentage} />
          </div>
          <div className={COIN.stackData.extremeValue.date}>
            {formatDateWithDistance(date)}
          </div>
        </div>
      </div>
      <div className={COIN.stackData.divider} />
    </>
  );
}
