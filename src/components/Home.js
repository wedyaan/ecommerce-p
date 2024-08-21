import React from "react";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Hero from "./hero/Hero";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";


export default function Home() {
  const [theme, colorMode] = useMode();

  return (
    <div>
       <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Header1 />
      <Header2 />
      <Header3 />
      <Hero />
      <Main />
      <Footer />
      </ThemeProvider>
      </ColorModeContext.Provider>
    </div>


  );
}
