/**
 * Common CSS class constants used across the application
 */

// Layout & Container Classes
export const LAYOUT = {
  mainContainer: 'relative w-full min-h-screen',
  contentContainer:
    'relative z-[1] container mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-2',
} as const;

// Card Classes
export const CARD = {
  base: 'p-4 sm:p-6 rounded-lg bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_80%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)] backdrop-blur-sm',
  tertiary:
    'p-3 sm:p-4 md:p-6 rounded-xl bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_85%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)] backdrop-blur-sm',
} as const;

// Typography Classes
export const TYPOGRAPHY = {
  title:
    'font-bold text-base sm:text-lg md:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(256,256,256)_20%,var(--brand-blue-light)_90%)]',
} as const;

// Badge Classes
export const BADGE = {
  base: 'text-xs font-semibold rounded-full px-2 py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 border',
  symbol:
    'text-[0.65rem] sm:text-xs font-bold rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-blue)_8%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] text-[var(--brand-blue)] tracking-wide',
  positive:
    'border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_8%,transparent)_100%)] text-[var(--brand-positive)]',
  negative:
    'border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_15%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_8%,transparent)_100%)] text-[var(--brand-negative)]',
} as const;

// Input Classes
export const INPUT = {
  number:
    'w-full bg-transparent focus:outline-none text-white/95 placeholder:text-white/30',
  combobox:
    'w-full bg-transparent text-sm font-bold uppercase focus:outline-none pr-6 text-white/95',
} as const;

// Dropdown/Select Classes
export const DROPDOWN = {
  options:
    'z-20 mt-2 max-h-60 w-18 overflow-auto rounded-xl bg-[var(--bg-tertiary-dark)] py-1.5 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-sm',
} as const;

// Link Classes
export const LINK = {
  withIcon: 'inline-flex items-center gap-3 group relative w-full',
} as const;

// Loading & State Classes
export const LOADING = {
  overlay:
    'absolute inset-0 z-20 flex items-center justify-center bg-transparent',
} as const;

// Grid Classes
export const GRID = {
  responsive12Col: 'grid grid-cols-1 lg:grid-cols-12 gap-1.5 sm:gap-2 md:gap-4',
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

// Coin Page Specific Classes
export const COIN = {
  // CoinHeader
  header: {
    container: 'mb-4 sm:mb-6',
    contentWrapper: 'flex items-center gap-3 sm:gap-4',
    imageWrapper:
      '!w-10 !h-10 sm:!w-12 sm:!h-12 rounded-full border-2 border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
    infoWrapper: 'flex-1',
    titleWrapper: 'flex items-center gap-2 sm:gap-3 flex-wrap',
    title:
      'text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight',
    symbol:
      'text-sm sm:text-md md:text-lg font-semibold text-white/70 uppercase',
  },
  // Exchange
  exchange: {
    swapIcon:
      'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] mx-auto my-4 pointer-events-none text-white/90',
    rateDisplay:
      'flex items-center justify-center gap-2 mt-2 sm:mt-3 rounded-lg px-4 py-3 rounded-xl bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary-dark)_80%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary-dark)_55%,transparent)_100%)] backdrop-blur-sm min-h-10 sm:min-h-11 text-white/50',
    headerWrapper:
      'flex items-center justify-center mb-2 sm:mb-3 md:mb-4 gap-2',
  },
  // Sparkline
  sparkline: {
    chartContainer:
      'relative w-full rounded-xl overflow-hidden sm:p-4 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_85%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)] backdrop-blur-sm h-[280px] sm:h-[320px] md:h-[480px]',
    buttonWrapper: 'mb-2 sm:mb-3 md:mb-4',
    buttonGroup: 'flex justify-end gap-1.5 sm:gap-2 flex-wrap',
    button: {
      base: 'relative min-w-10 sm:min-w-11 flex items-center justify-center font-bold select-none border border-transparent transition-none md:transition-all px-1 sm:px-2 text-xs sm:text-sm tracking-wide h-7 sm:h-8 md:h-9 rounded-2xl',
      active:
        'text-black bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] md:hover:-translate-y-0.5',
      inactive:
        'text-[var(--brand-blue)] hover:text-[var(--brand-blue-light)] bg-transparent md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] md:hover:-translate-y-0.5 md:hover:border md:hover:border-[var(--brand-blue)]/80',
      innerHighlight:
        'absolute inset-0 m-1.5 rounded-xl bg-white/6 pointer-events-none',
    },
  },
  // Links
  links: {
    header:
      'flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6',
    headerTitle: 'text-base sm:text-lg md:text-xl font-bold text-white',
    headerLine:
      'h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent',
    sectionTitle:
      'text-center text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest font-bold text-white/50 mb-2 sm:mb-2.5 md:mb-3.5 select-none',
    primaryLinks:
      'flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center mb-3 sm:mb-4 md:mb-6',
    blockchainLinks: 'mb-3 sm:mb-4 md:mb-6',
    chipGroup: 'flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 justify-center',
    chip: {
      base: 'inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ease-out relative overflow-hidden backdrop-blur-sm group',
      hover: 'hover:scale-105 active:scale-100',
      shineEffect:
        'absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 group-hover:left-full pointer-events-none',
      iconWrapper:
        'flex items-center justify-center transition-transform duration-200 group-hover:scale-110',
      text: 'leading-none font-medium',
      primary:
        'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-blue)_35%,transparent)] text-[var(--brand-blue-light)] hover:from-[color-mix(in_srgb,var(--brand-blue)_30%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_18%,transparent)] hover:border-[color-mix(in_srgb,var(--brand-blue)_55%,transparent)] hover:shadow-[0_4px_16px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
      blockchain:
        'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue-light)_15%,transparent)] to-[color-mix(in_srgb,var(--brand-blue-light)_8%,transparent)] border border-[color-mix(in_srgb,var(--brand-blue-light)_28%,transparent)] text-[var(--brand-blue-light)] text-xs hover:from-[color-mix(in_srgb,var(--brand-blue-light)_24%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue-light)_14%,transparent)] hover:border-[color-mix(in_srgb,var(--brand-blue-light)_48%,transparent)] hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue-light)_18%,transparent)]',
      social: {
        reddit:
          'bg-gradient-to-br from-[rgba(255,69,0,0.15)] to-[rgba(255,69,0,0.08)] border border-[rgba(255,69,0,0.4)] text-[#FF4500] hover:from-[rgba(255,69,0,0.25)] hover:to-[rgba(255,69,0,0.15)] hover:border-[rgba(255,69,0,0.6)]',
        twitter:
          'bg-gradient-to-br from-[rgba(29,161,242,0.15)] to-[rgba(29,161,242,0.08)] border border-[rgba(29,161,242,0.4)] text-[#1DA1F2] hover:from-[rgba(29,161,242,0.25)] hover:to-[rgba(29,161,242,0.15)] hover:border-[rgba(29,161,242,0.6)]',
        facebook:
          'bg-gradient-to-br from-[rgba(24,119,242,0.15)] to-[rgba(24,119,242,0.08)] border border-[rgba(24,119,242,0.4)] text-[#1877F2] hover:from-[rgba(24,119,242,0.25)] hover:to-[rgba(24,119,242,0.15)] hover:border-[rgba(24,119,242,0.6)]',
        github:
          'bg-gradient-to-br from-[rgba(139,148,158,0.15)] to-[rgba(139,148,158,0.08)] border border-[rgba(139,148,158,0.4)] text-[#8B949E] hover:from-[rgba(139,148,158,0.25)] hover:to-[rgba(139,148,158,0.15)] hover:border-[rgba(139,148,158,0.6)]',
      },
    },
    iconSize: { fontSize: { xs: 14, sm: 16, md: 18 } },
  },
  // AnimatedSection
  animated: {
    base: 'transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]',
    visible: 'opacity-100 translate-y-0',
    hidden: 'opacity-0 translate-y-12',
  },
  // CurrencyInput
  currencyInput: {
    container: 'w-full',
    innerContainer: 'flex flex-col gap-3 w-full',
    headerWrapper: 'flex items-center gap-3 mb-2',
    badge:
      'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
    label: 'font-semibold uppercase text-sm text-white/90',
    inputContainer:
      'px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary-dark)_90%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary-dark)_70%,transparent)_100%)] border border-white/5 hover:border-white/10 transition-all duration-200 w-full h-12 sm:h-14 flex items-center shadow-inner',
    input: 'text-right text-base sm:text-lg font-semibold text-white/95',
  },
  // PriceCard
  priceCard: {
    container: 'flex flex-col gap-4',
    currentPrice: 'text-center mb-6',
    rangeContainer: 'mb-3',
    rangeTitle: 'text-center text-sm font-semibold text-white/70 mb-2',
    rangeWrapper: 'px-1',
    progressTrack:
      'w-full bg-[linear-gradient(90deg,color-mix(in_srgb,var(--brand-blue)_8%,transparent),color-mix(in_srgb,var(--brand-blue-light)_5%,transparent))] h-2.5 rounded-full overflow-hidden',
    progressBar:
      'h-2.5 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)] transition-all duration-300',
    rangeValues: 'flex justify-between text-xs text-white/60 mt-2 px-1',
    priceChangeGrid: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3',
  },
  // Price
  price: {
    container: 'flex items-center justify-center',
    value:
      'text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent inline-block bg-[linear-gradient(180deg,#e0e0e0,rgba(224,224,224,0.5))]',
    badge:
      'ml-3 inline-flex items-center font-semibold text-sm px-3 py-1 rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_10%,transparent)]',
    iconStyles: { fontSize: '1rem', ml: '6px' },
  },
  // Chart
  chart: {
    tooltip:
      'bg-[var(--bg-tertiary-dark)] border border-white/12 rounded-lg px-3 py-2 shadow-lg text-sm backdrop-blur-sm',
    tooltipDate: 'text-sm text-white/70 mb-1',
    tooltipValue: 'font-medium text-white',
    activeDot: {
      r: 4,
      stroke: 'var(--brand-blue)',
      strokeWidth: 2,
      fill: '#fff',
    },
    yAxis: {
      domain: ['auto', 'auto'] as [string, string],
      width: 70,
      tickCount: 8,
    },
  },
  // StackData
  stackData: {
    container: 'flex flex-col text-sm sm:text-base',
    title: 'mb-4 select-none',
    lowHighContainer: 'text-right',
    lowValue: 'font-semibold text-red-400',
    separator: 'text-white/60',
    highValue: 'font-semibold text-green-400',
    row: 'flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)]',
    divider:
      'my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]',
    label: 'font-semibold text-white',
    value: 'font-semibold text-white/80',
    extremeValue: {
      container: 'text-right',
      priceWrapper: 'flex items-center gap-2 justify-end',
      price: 'font-semibold text-white/80',
      date: 'text-xs sm:text-sm text-white/60 mt-1',
    },
  },
  // PriceChange
  priceChange: {
    wrapper: 'col-span-1 sm:col-span-1 lg:col-span-1',
    container:
      'flex flex-col items-center justify-center relative overflow-hidden',
    topBar: 'absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-80',
    value: 'font-semibold text-lg sm:text-xl mb-1',
    label: 'text-xs text-white/60 font-medium uppercase tracking-wide',
  },
  // PercentageBadge
  percentageBadge: {
    base: 'px-1.5 py-0.5 text-[0.65rem] sm:px-2 sm:text-xs',
  },
} as const;

// Navbar Specific Classes
export const NAVBAR = {
  // Navbar
  nav: 'fixed top-0 left-0 right-0 z-50 bg-[color-mix(in_srgb,var(--bg-primary)_30%,transparent)] backdrop-blur-md border-b-0',
  container:
    'flex items-center justify-between gap-2 sm:gap-6 md:gap-8 py-3 sm:py-4 min-h-14 sm:min-h-16 relative z-10',
  searchContainer:
    'flex-grow min-w-0 mx-2 sm:mx-4 md:mx-6 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]',
  section: 'flex items-center justify-center flex-shrink-0 min-w-auto',
  spacer: 'min-h-14 sm:min-h-16',
  // Title
  title: {
    logoBase:
      'flex items-center justify-center backdrop-blur-md rounded-lg transition-all duration-300 ease-out relative overflow-hidden group',
    logoGradient:
      'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)] border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
    logoHover:
      'hover:bg-gradient-to-br hover:from-[color-mix(in_srgb,var(--brand-blue)_25%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_25px_color-mix(in_srgb,var(--brand-blue)_25%,transparent),0_4px_12px_rgba(0,0,0,0.15)] hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]',
    logoActive: 'active:-translate-y-px active:scale-[1.02]',
    logoPadding: 'p-1.5 sm:p-2 text-[var(--brand-blue)]',
    logoIcon: '[filter:drop-shadow(var(--shadow-dropdown))]',
    shineEffect:
      'absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] to-transparent transition-all duration-500 group-hover:left-full',
    desktopTitleBase:
      'relative bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-light)] to-[var(--brand-blue)] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-[400ms] ease-out no-underline',
    desktopTitleHover:
      'hover:bg-[position:100%_0] hover:-translate-y-px hover:[filter:drop-shadow(0_4px_8px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]',
    desktopTitleUnderline:
      "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[var(--brand-blue)] after:to-[var(--brand-blue-light)] after:rounded-b-xs after:transition-all after:duration-200 after:duration-300 after:ease-out hover:after:w-full",
    mobileTitleBase:
      'bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent transition-all duration-300 ease-out no-underline hover:[filter:drop-shadow(0_2px_4px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]',
  },
  // Tooltips
  tooltips: {
    buttonBase:
      'flex items-center justify-center backdrop-blur-md rounded-lg transition-all duration-300 ease-out p-2.5 sm:p-3 relative overflow-hidden group',
    buttonGradient:
      'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_6%,transparent)] border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]',
    buttonHover:
      'hover:bg-gradient-to-br hover:from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_25px_color-mix(in_srgb,var(--brand-blue)_25%,transparent),0_4px_12px_rgba(0,0,0,0.15)] hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]',
    buttonActive: 'active:-translate-y-px active:scale-[1.02]',
    shineEffect:
      'absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] to-transparent transition-all duration-500 group-hover:left-full',
    icon: '[filter:drop-shadow(var(--shadow-dropdown))] transition-all duration-300 group-hover:-rotate-[5deg] group-hover:scale-110 group-hover:[filter:drop-shadow(0_4px_8px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]',
  },
  // SearchBar
  searchBar: {
    input:
      'w-full bg-[var(--bg-tertiary-dark)] text-[var(--brand-blue)] rounded-xl py-2.5 sm:py-3 pl-12 sm:pl-14 pr-4 text-[0.95rem] sm:text-base font-medium placeholder:text-[color-mix(in_srgb,var(--brand-blue)_50%,transparent)] transition-all duration-200 focus:outline-none focus:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_85%,var(--brand-blue)_15%)] hover:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_90%,var(--brand-blue)_10%)]',
    dropdown:
      'absolute mt-0.5 w-full overflow-hidden rounded-2xl bg-[var(--bg-dropdown)] backdrop-blur-3xl backdrop-saturate-200 shadow-[var(--shadow-dropdown)] z-50',
    optionBase:
      'relative cursor-pointer select-none px-4 py-3 transition-all duration-150',
    optionFocused: 'bg-white/[0.08]',
    optionUnfocused: 'bg-transparent',
    iconContainer:
      'absolute inset-y-0 left-0 flex items-center justify-center pl-4 sm:pl-5 pointer-events-none z-10',
  },
  // CoinOption
  coinOption: {
    container: 'flex items-center justify-between gap-4',
    contentWrapper: 'flex flex-col flex-1 min-w-0',
    name: 'font-semibold text-[0.95rem] leading-tight truncate',
    nameFocused: 'text-white',
    nameUnfocused: 'text-white/90',
    badgeRow: 'flex items-center justify-center gap-2 mt-2.5',
    chip: 'inline-flex items-center justify-center text-[0.7rem] px-2 h-5 font-semibold rounded-full backdrop-blur-sm border bg-[var(--chip-bg)] text-[var(--brand-blue)] border-[var(--chip-border)]',
    id: 'text-[0.75rem] text-white/40 truncate flex-1',
    icon: 'transition-all duration-200 flex-shrink-0',
    iconFocused: 'text-[var(--brand-blue)] translate-x-1',
    iconUnfocused: 'text-white/20 translate-x-0',
  },
  // EmptyState
  emptyState: {
    base: 'relative cursor-default select-none py-4 px-4 text-center text-[0.9rem] font-medium text-white/70',
  },
} as const;

// Footer Specific Classes
export const FOOTER = {
  // Footer
  footer:
    'w-full bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2 py-2 sm:py-4 flex items-center justify-center',
  container:
    'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 w-full container px-2 sm:px-8',
  // PoweredBySection
  poweredBy: {
    container: 'flex flex-col items-center sm:items-start gap-0.5 sm:gap-1',
    text: 'text-sm sm:text-lg font-medium text-white/70',
    link: 'text-[var(--brand-blue)] font-semibold hover:text-[var(--brand-blue-light)] transition-all duration-200',
    subtext: 'text-[0.65rem] sm:text-xs font-normal text-white/40',
  },
  // CoinGeckoBadge
  coinGeckoBadge: {
    container:
      'flex items-center justify-center p-1.5 sm:p-2 md:p-3 rounded-2xl bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] transition-all duration-200 max-w-xs mx-auto sm:mx-0 sm:w-auto mt-2 sm:mt-4 md:mt-0 justify-center',
    image:
      'h-6 sm:h-8 md:h-9 w-auto opacity-90 hover:opacity-100 transition-all duration-200',
  },
} as const;

// Home Page Specific Classes
export const HOME = {
  // StatCard
  statCard: {
    base: 'flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300',
    animation: {
      visible: 'opacity-100 scale-100 translate-y-0 blur-0',
      exiting: 'opacity-0 scale-95 translate-y-4 blur-[2px]',
      hidden: 'opacity-0 scale-90 -translate-y-8 blur-[4px]',
      wrapper:
        'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
    },
    content: 'flex flex-col gap-2 w-full',
    valueWrapper: 'flex items-center justify-center gap-2',
    valueMobile:
      'block sm:hidden text-base font-bold text-white text-center break-words',
    valueDesktop:
      'text-base sm:text-lg font-bold text-white text-center break-words',
    valueDesktopHidden:
      'hidden sm:block text-base sm:text-lg font-bold text-white text-center break-words',
    badge: {
      base: 'inline-flex items-center gap-0.5 text-[0.65rem] sm:text-xs font-semibold border rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1',
      positive:
        'bg-[var(--brand-positive)]/10 text-[var(--brand-positive)] border-[var(--brand-positive)]/30',
      negative:
        'bg-[var(--brand-negative)]/10 text-[var(--brand-negative)] border-[var(--brand-negative)]/30',
      iconSize: { fontSize: { xs: '0.75rem', sm: '0.875rem' } },
    },
    label: 'mt-2 text-xs sm:text-sm text-white/50 font-normal text-center',
  },
  // Cards
  cards: {
    grid: 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6',
  },
  // Description
  description: {
    text: 'text-sm sm:text-base text-white/70 leading-relaxed max-w-5xl',
  },
  // Highlight
  highlight: {
    base: 'font-semibold',
  },
  // Switch
  switch: {
    wrapper: 'flex justify-center',
    base: 'flex items-center justify-center gap-2 font-semibold rounded-full backdrop-blur-md border transition-all duration-300 ease-out relative overflow-hidden group active:translate-y-0',
    sizeMobile: 'px-5 py-3 text-sm',
    sizeDesktop: 'px-5 py-2.5 text-base',
    active:
      'bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)] hover:bg-[color-mix(in_srgb,var(--brand-blue)_90%,black)]',
    inactive:
      'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_8%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_4%,transparent)] border-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] text-white/70 hover:from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]',
    shine:
      'absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] to-transparent transition-all duration-500 group-hover:left-full',
    content:
      'relative z-10 flex items-center gap-2 transition-all duration-200',
  },
  // Global
  global: {
    container: 'mb-6 sm:mb-8',
    header:
      'flex flex-col md:flex-row md:items-center md:justify-between gap-4',
    headerContent: 'flex-1',
    title: 'text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white',
    switchDesktop: 'hidden md:flex md:justify-end',
    switchMobile: 'md:hidden pt-8',
    cardsTransition:
      'transition-all duration-700 ease-out transform-gpu will-change-[max-height,opacity]',
    cardsVisible: 'max-h-[1000px] opacity-100',
    cardsHidden: 'max-h-0 opacity-0 overflow-hidden',
  },
  // Table
  table: {
    container:
      'mt-2 sm:mt-3 rounded-xl sm:rounded-2xl bg-transparent relative overflow-hidden transform-gpu will-change-transform',
    styles: {
      height: 'auto',
      minHeight: 400,
    } as const,
  },
} as const;
