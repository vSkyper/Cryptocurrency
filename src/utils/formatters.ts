/**
 * Formatting utilities for consistent data display across the application
 */

/**
 * Currency formatter with full precision (up to 8 decimal places)
 */
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  style: 'currency',
  currency: 'USD',
});

/**
 * Compact currency formatter (e.g. $1.2M, $3.4B)
 */
export const compactCurrencyFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'USD',
});

/**
 * Number formatter with compact notation (e.g., 1.2M, 3.4B)
 */
export const compactNumberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
});

/**
 * Percentage formatter
 */
export const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

/**
 * Standard number formatter (e.g., 1,234.56)
 */
export const numberFormatter = new Intl.NumberFormat('en-US');

/**
 * Format a number as currency with full precision
 */
export const formatCurrency = (value: number | null | undefined): string => {
  if (value == null) return 'N/A';
  return currencyFormatter.format(value);
};

/**
 * Format a number as compact currency (no decimals)
 */
export const formatCompactCurrency = (
  value: number | null | undefined
): string => {
  if (value == null) return 'N/A';
  return compactCurrencyFormatter.format(value);
};

/**
 * Format a number as percentage (expects value as number, not decimal)
 * Example: 5.5 -> "5.50%"
 */
export const formatPercentage = (value: number | null | undefined): string => {
  if (value == null) return 'N/A';
  return percentageFormatter.format(value / 100);
};

/**
 * Format a number with compact notation
 * Example: 1200000 -> "1.2M"
 */
export const formatCompactNumber = (
  value: number | null | undefined
): string => {
  if (value == null) return 'N/A';
  return compactNumberFormatter.format(value);
};

/**
 * Format a number with standard notation
 * Example: 1234.56 -> "1,234.56"
 */
export const formatNumber = (
  value: number | null | undefined,
  maximumFractionDigits?: number
): string => {
  if (value == null) return 'N/A';
  if (maximumFractionDigits !== undefined) {
    return value.toLocaleString('en-US', { maximumFractionDigits });
  }
  return numberFormatter.format(value);
};

/**
 * Format a number as currency with specific currency and options
 */
export const formatRateWithSuffix = (rate: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });
  const parts = formatter.formatToParts(rate);
  const symbol = parts.find((p) => p.type === 'currency')?.value;
  const val = parts
    .filter((p) => p.type !== 'currency')
    .map((p) => p.value)
    .join('')
    .trim();
  return `${val} ${symbol}`;
};
