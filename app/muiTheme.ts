"use client";
import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          zIndex: 10,
          borderRadius: ".75rem",
          marginTop: ".5rem",
          boxShadow:
            "0 2px 4px 0 rgba(106, 111, 124, 0.2), 0 1px 10px 0 rgba(106, 111, 124, 0.12)",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: ".75rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "48px",
          minHeight: "40px",
          borderRadius: ".75rem",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "1.25rem",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#651FFF",
    },
    secondary: {
      main: "#440099",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#2196f3",
    },
    warning: {
      main: "#ff9800",
    },
  },
});

export default muiTheme;
