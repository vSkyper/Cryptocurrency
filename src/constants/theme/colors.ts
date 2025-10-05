// Brand colors - these correspond to CSS variables defined in App.tsx
// To change colors across the entire app, update both here and in App.tsx :root styles
export const BRAND_COLORS = {
  blue: 'var(--brand-blue, #409CFF)',
  blueLight: 'var(--brand-blue-light, #3B82F6)',
  positive: 'var(--brand-positive, #51cf66)',
  negative: 'var(--brand-negative, #ff6b6b)',
  bitcoin: 'var(--brand-bitcoin, #f7931a)',
  ethereum: 'var(--brand-ethereum, #627eea)',
} as const;

// Helper function to get theme color with fallback
export const getThemeColor = (color: keyof typeof BRAND_COLORS): string => {
  return BRAND_COLORS[color];
};
