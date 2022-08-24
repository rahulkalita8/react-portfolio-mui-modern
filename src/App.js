import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import theme from "./assets/theme/theme";
import HideAppBar from "./components/NavigationBar";
import DrawerAppBar from "./components/DrawerAppBar";
import Typography from "@mui/material/Typography";
import { Box, Container, Toolbar } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <DrawerAppBar />
        <Toolbar />
        <Typography>
          {[...new Array(30)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
