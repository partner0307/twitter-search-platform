import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "@/theme";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setTheme] = useState("dark");
  const setMode = (mode: string) => {
    window.localStorage.setItem("themeMode", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light");
  };
  const theme = getTheme(themeMode, themeToggler);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Header />
        <Main>{children}</Main>
        <CssBaseline />
      </Box>
    </ThemeProvider>
  );
};

export default PublicLayout;
