import { createTheme, ThemeOptions } from '@mui/material/styles';

// Default literal fallbacks (used during SSR or if CSS vars are unavailable)
const FALLBACKS = {
  brandBlue: '#8b5cf6',
  bgTertiaryDark: 'rgba(10, 10, 15, 0.9)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.7)',
  bgPaper: '#0a0a0f',
  bgDefault: '#050505',
};

const getThemeOptions = (
  brandBlue: string,
  bgPaper: string,
  bgDefault: string,
  textPrimary: string,
  textSecondary: string
): ThemeOptions => ({
  palette: {
    mode: 'dark',
    background: {
      paper: bgPaper,
      default: bgDefault,
    },
    primary: {
      main: brandBlue,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: bgPaper,
          color: textPrimary,
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: bgPaper,
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: textPrimary,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: textPrimary,
        },
      },
    },
  },
});

// Create a base theme using explicit colors (safe for SSR)
export const darkTheme = createTheme(
  getThemeOptions(
    FALLBACKS.brandBlue,
    FALLBACKS.bgPaper,
    FALLBACKS.bgDefault,
    FALLBACKS.textPrimary,
    FALLBACKS.textSecondary
  )
);

// Runtime helper: reads CSS variables from :root (client-only) and returns a theme
export function createDarkThemeFromVars() {
  // If window or document isn't available, fall back to defaults
  if (typeof window === 'undefined' || !window.getComputedStyle) {
    return darkTheme;
  }

  const styles = getComputedStyle(document.documentElement);
  const brandBlue =
    styles.getPropertyValue('--brand-blue')?.trim() || FALLBACKS.brandBlue;
  const bgPrimary =
    styles.getPropertyValue('--bg-primary')?.trim() || FALLBACKS.bgDefault;
  const bgPaper = '#0a0a0f';
  const textPrimary =
    styles.getPropertyValue('--text-primary')?.trim() || FALLBACKS.textPrimary;
  const textSecondary =
    styles.getPropertyValue('--text-secondary')?.trim() ||
    FALLBACKS.textSecondary;

  return createTheme(
    getThemeOptions(brandBlue, bgPaper, bgPrimary, textPrimary, textSecondary)
  );
}

export default darkTheme;
