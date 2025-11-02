import { StatRowProps } from './interface';
import { COIN } from 'styles/styles';

export default function StatRow({
  label,
  value,
  className = '',
}: StatRowProps) {
  return (
    <>
      <div className={`${COIN.stackData.row} ${className}`}>
        <div className={COIN.stackData.label}>{label}</div>
        {typeof value === 'string' || typeof value === 'number' ? (
          <div className={COIN.stackData.value}>{value}</div>
        ) : (
          value
        )}
      </div>
      <div className={COIN.stackData.divider} />
    </>
  );
}
