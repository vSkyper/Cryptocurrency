import { createTheme } from '@mui/material/styles';

// Default literal fallbacks (used during SSR or if CSS vars are unavailable)
const FALLBACKS = {
  brandBlue: '#8b5cf6',
  bgTertiaryDark: 'rgba(10, 10, 15, 0.9)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.7)',
};

// Create a base theme using explicit colors (safe for SSR)
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#0a0a0f',
      default: '#050505',
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
          background: '#0a0a0f',
          color: FALLBACKS.textPrimary,
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: '#0a0a0f',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
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
  const bgPrimary =
    styles.getPropertyValue('--bg-primary')?.trim() || '#050505';
  // Use a slightly lighter shade for paper if not defined, or fallback to secondary
  const bgPaper = '#0a0a0f';
  const textPrimary =
    styles.getPropertyValue('--text-primary')?.trim() || FALLBACKS.textPrimary;
  const textSecondary =
    styles.getPropertyValue('--text-secondary')?.trim() ||
    FALLBACKS.textSecondary;

  return createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: bgPaper,
        default: bgPrimary,
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
