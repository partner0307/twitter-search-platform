import { Box, Toolbar, Paper, Container } from "@mui/material";
import React, { FC } from "react";

interface MainType {
  children: React.ReactNode;
}

const Main: FC<MainType> = ({ children }) => {
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
        <Container
          sx={{
            mt: "",
          }}
        >
          {children}
        </Container>
      </Paper>
    </Box>
  );
};

export default Main;
