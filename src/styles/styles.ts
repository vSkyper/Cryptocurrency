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
  heading: 'text-2xl font-bold text-white/90',
  subheading: 'text-lg font-semibold text-white/80',
  body: 'text-sm text-white/70',
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

// Button Classes
export const BUTTON = {
  base: 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2',
  primary:
    'bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white',
  secondary: 'bg-white/6 hover:bg-white/10 text-white/90',
  outline: 'border border-white/20 hover:border-white/40 text-white/90',
} as const;

// Input Classes
export const INPUT = {
  base: 'w-full bg-transparent focus:outline-none text-white/90',
  number: 'w-full bg-transparent focus:outline-none text-white/90',
  combobox:
    'w-full bg-transparent text-sm font-semibold uppercase focus:outline-none pr-6 text-white/90',
} as const;

// Dropdown/Select Classes
export const DROPDOWN = {
  options:
    'absolute z-50 left-0 top-full mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--bg-tertiary-dark)] py-1 text-sm shadow-lg',
  option: 'px-3 py-2 cursor-pointer hover:bg-white/5 text-white/90',
  optionActive: 'bg-white/10 text-white',
} as const;

// Icon Container Classes
export const ICON_CONTAINER = {
  small: 'w-8 h-8 rounded-full flex items-center justify-center',
  medium: 'w-10 h-10 rounded-full flex items-center justify-center',
  large: 'w-12 h-12 rounded-full flex items-center justify-center',
  brandBlue: 'bg-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
} as const;

// Link Classes
export const LINK = {
  base: 'inline-flex items-center gap-2 group relative',
  hover: 'hover:text-[var(--brand-blue)] transition-colors duration-200',
  withIcon: 'inline-flex items-center gap-3 group relative w-full',
} as const;

// Image Classes
export const IMAGE = {
  coinSmall: 'w-9 h-9 overflow-hidden flex-shrink-0',
  coinMedium: 'w-12 h-12 overflow-hidden flex-shrink-0',
  coinLarge: 'w-16 h-16 overflow-hidden flex-shrink-0',
  roundedFull: 'w-full h-full object-cover rounded-full',
} as const;

// Loading & State Classes
export const LOADING = {
  overlay:
    'absolute inset-0 z-20 flex items-center justify-center bg-transparent',
  spinner: 'animate-spin rounded-full border-2 border-white/20 border-t-white',
} as const;

// Grid Classes
export const GRID = {
  responsive1Col: 'grid grid-cols-1 gap-4',
  responsive2Col: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  responsive12Col: 'grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4',
} as const;

// Utility Classes
export const UTILITY = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  truncate: 'truncate',
  transitionAll: 'transition-all duration-200',
  backdropBlur: 'backdrop-blur-sm',
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
