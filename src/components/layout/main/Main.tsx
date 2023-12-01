import { Box, Toolbar, Paper, Container, useTheme } from "@mui/material";
import React, { FC } from "react";

interface MainType {
  children: React.ReactNode;
}

const Main: FC<MainType> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Paper
        sx={{
          minHeight: "100%",
        }}
      >
        <Toolbar />
        <Box component="div" padding={theme.spacing(2)}>
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default Main;
