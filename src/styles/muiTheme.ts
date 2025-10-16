import { createTheme } from '@mui/material/styles';

// Default literal fallbacks (used during SSR or if CSS vars are unavailable)
const FALLBACKS = {
  brandBlue: '#409cff',
  bgTertiaryDark: 'rgba(22, 35, 57, 0.8)',
  textPrimary: 'rgba(255,255,255,0.9)',
  textSecondary: 'rgba(230,238,248,0.8)',
};

// Create a base theme using explicit colors (safe for SSR)
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: FALLBACKS.bgTertiaryDark,
      default: FALLBACKS.bgTertiaryDark,
    },
    primary: {
      main: FALLBACKS.brandBlue,
    },
    text: {
      primary: FALLBACKS.textPrimary,
      secondary: FALLBACKS.textSecondary,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: FALLBACKS.bgTertiaryDark,
          color: FALLBACKS.textPrimary,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: FALLBACKS.bgTertiaryDark,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: FALLBACKS.textPrimary,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: FALLBACKS.textPrimary,
        },
      },
    },
  },
});

// Runtime helper: reads CSS variables from :root (client-only) and returns a theme
export function createDarkThemeFromVars() {
  // If window or document isn't available, fall back to defaults
  if (typeof window === 'undefined' || !window.getComputedStyle) {
    return darkTheme;
  }

  const styles = getComputedStyle(document.documentElement);
  const brandBlue =
    styles.getPropertyValue('--brand-blue')?.trim() || FALLBACKS.brandBlue;
  const bgTertiaryDark =
    styles.getPropertyValue('--bg-tertiary-dark')?.trim() ||
    FALLBACKS.bgTertiaryDark;
  const textPrimary =
    styles.getPropertyValue('--text-primary')?.trim() || FALLBACKS.textPrimary;
  const textSecondary =
    styles.getPropertyValue('--text-secondary')?.trim() ||
    FALLBACKS.textSecondary;

  return createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: bgTertiaryDark,
        default: bgTertiaryDark,
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
            background: bgTertiaryDark,
            color: textPrimary,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            background: bgTertiaryDark,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: ({ theme }) => ({
            // default to theme text color
            color: theme.palette.text.primary,
          }),
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: ({ theme }) => ({
            color: theme.palette.text.primary,
          }),
        },
      },
    },
  });
}

export default darkTheme;
