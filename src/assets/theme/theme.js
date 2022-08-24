import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B0C10",
    },
    secondary: {
      main: "#1F2833",
    },
    text: {
      primary: "#66FCF1",
      secondary: "#C5C6C7",
    },
    background: {
      paper: "#1F2833",
      default: "#0B0C10",
    },
  },
  typography: {
    fontFamily: `"QuickSand", sans-serif`,
  },
});

export default theme;
