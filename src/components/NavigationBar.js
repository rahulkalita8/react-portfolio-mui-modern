import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import DrawerAppBar from "./DrawerAppBar";
import { Typography } from "@mui/material";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <DrawerAppBar />
      </HideOnScroll>
      <Toolbar />
      <Typography>
        appear appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appearappear appeara a a appeara
        appeara appeara appeara appeara appear appear appeara a a appeara
        appeara appeara appeara appeara appearappear appeara a a appeara appeara
        appeara appeara appeara appear appear appeara a a appeara appeara
        appeara appeara appeara appearappear appeara a a appeara appeara appeara
        appeara appeara appear appear appeara a a appeara appeara appeara
        appeara appeara appearappear appeara a a appeara appeara appeara appeara
        appeara appear appear appeara a a appeara appeara appeara appeara
        appeara appearappear appeara a a appeara appeara appeara appeara appeara
        appear appear appeara a a appeara appeara appeara appeara appeara
        appearappear appeara a a appeara appeara appeara appeara appeara appear
        appear appeara a a appeara appeara appeara appeara appeara appearappear
        appeara a a appeara appeara appeara appeara appeara appear appear
        appeara a a appeara appeara appeara appeara appeara appearappear appeara
        a a appeara appeara appeara appeara appeara appear appear appeara a a
        appeara appeara appeara appeara appeara appear
      </Typography>
    </React.Fragment>
  );
}
