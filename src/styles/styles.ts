/**
 * Common CSS class constants used across the application
 */

// Layout & Container Classes
export const LAYOUT = {
  mainContainer: 'relative w-full min-h-screen',
  contentContainer:
    'relative z-[1] container mx-auto py-6 sm:py-8 px-4 sm:px-2',
} as const;

// Card Classes
export const CARD = {
  base: 'p-6 rounded-lg bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_80%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)] backdrop-blur-sm',
  tertiary:
    'p-4 sm:p-6 rounded-xl bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_85%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)] backdrop-blur-sm',
  tertiaryDark:
    'p-4 sm:p-6 rounded-xl bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary-dark)_80%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary-dark)_55%,transparent)_100%)] backdrop-blur-sm',
} as const;

// Typography Classes
export const TYPOGRAPHY = {
  title:
    'font-bold text-lg md:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(256,256,256)_20%,var(--brand-blue-light)_90%)]',
} as const;

// Badge Classes
export const BADGE = {
  base: 'text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 border',
  symbol:
    'text-xs font-bold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-blue)_8%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] text-[var(--brand-blue)] tracking-wide',
  positive:
    'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)] text-[var(--brand-positive)]',
  negative:
    'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)] text-[var(--brand-negative)]',
} as const;

// Input Classes
export const INPUT = {
  number: 'w-full bg-transparent focus:outline-none text-white/90',
  combobox:
    'w-full bg-transparent text-sm font-semibold uppercase focus:outline-none pr-6 text-white/90',
} as const;

// Dropdown/Select Classes
export const DROPDOWN = {
  options:
    'absolute z-50 left-0 top-full mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--bg-tertiary-dark)] py-1 text-sm shadow-lg',
} as const;

// Icon Container Classes
export const ICON_CONTAINER = {
  medium: 'w-10 h-10 rounded-full flex items-center justify-center',
  brandBlue: 'bg-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
} as const;

// Link Classes
export const LINK = {
  withIcon: 'inline-flex items-center gap-3 group relative w-full',
} as const;

// Image Classes
export const IMAGE = {
  coinSmall: '!w-8 !h-8 sm:!w-9 sm:!h-9 overflow-hidden flex-shrink-0',
  coinMedium: 'w-12 h-12 overflow-hidden flex-shrink-0',
} as const;

// Loading & State Classes
export const LOADING = {
  overlay:
    'absolute inset-0 z-20 flex items-center justify-center bg-transparent',
} as const;

// Grid Classes
export const GRID = {
  responsive12Col: 'grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4',
} as const;

// Utility Classes
export const UTILITY = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  truncate: 'truncate',
  transitionAll: 'transition-all duration-200',
} as const;

// Hide Number Input Spinners (for use in style tags)
export const CSS_SNIPPETS = {
  hideNumberInputSpinners: `
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
  `,
} as const;
