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
 * Compact currency formatter (no decimal places)
 */
export const compactCurrencyFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
  style: 'currency',
  currency: 'USD',
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
 * Number formatter with compact notation (e.g., 1.2M, 3.4B)
 */
export const compactNumberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2,
});

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
 * Format a number as currency with specific currency and options
 */
export const formatCurrencyWithOptions = (
  value: number,
  currency: string,
  options?: Intl.NumberFormatOptions
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 8,
    ...options,
  });

  return formatter.format(value);
};
