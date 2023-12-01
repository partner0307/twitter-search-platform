import React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Box, CssBaseline } from "@mui/material";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Header />
      <Main>{children}</Main>
      <CssBaseline />
    </Box>
  );
};

export default PublicLayout;
