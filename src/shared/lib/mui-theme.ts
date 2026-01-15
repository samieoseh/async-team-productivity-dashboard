import { createTheme } from "@mui/material/styles";

const neutral = {
  900: "#0F172A", // ChatGPT black
  800: "#1E293B",
  700: "#334155",
  600: "#475569",
  500: "#64748B",
  200: "#E2E8F0",
  100: "#F1F5F9",
};

export const theme = createTheme({
  shape: {
    borderRadius: 6,
  },

  palette: {
    mode: "light",

    primary: {
      main: "#2463EB",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#FFB74D",
    },

    background: {
      default: neutral[100],
      paper: "#FFFFFF",
    },

    text: {
      primary: neutral[900],
      secondary: neutral[600],
    },

    divider: neutral[200],
  },

  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,

    h1: {
      fontWeight: 900,
      color: neutral[900],
    },
    h2: {
      fontWeight: 700,
      color: neutral[900],
    },
    h3: {
      fontWeight: 600,
      color: neutral[900],
    },
    h4: {
      fontWeight: 600,
      color: neutral[900],
    },
    h5: {
      fontWeight: 600,
      color: neutral[900],
    },
    h6: {
      fontWeight: 600,
      color: neutral[800],
    },

    body1: {
      color: neutral[900],
    },
    body2: {
      color: neutral[700],
    },

    subtitle1: {
      color: neutral[700],
      fontWeight: 500,
    },
    subtitle2: {
      color: neutral[600],
      fontWeight: 500,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },

    caption: {
      color: neutral[600],
    },

    overline: {
      color: neutral[600],
      letterSpacing: "0.08em",
      fontWeight: 600,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: neutral[100],
          color: neutral[900],
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0px 6px 20px rgba(36, 99, 235, 0.25)",
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0px 8px 30px rgba(15, 23, 42, 0.08)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          color: neutral[900],
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: neutral[200],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2463EB",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
          },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 32,
          padding: 16,
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          boxShadow: "0px 12px 30px rgba(15, 23, 42, 0.15)",
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 12,
          fontSize: "0.8rem",
          padding: "8px 12px",
          backgroundColor: neutral[900],
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          fontWeight: 500,
          backgroundColor: neutral[100],
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: neutral[200],
        },
      },
    },
  },
});
