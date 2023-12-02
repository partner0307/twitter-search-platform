import {
  Box,
  Paper,
  Breadcrumbs,
  Link,
  Typography,
  Toolbar,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MainType {
  children: React.ReactNode;
}

const Main: FC<MainType> = ({ children }) => {
  const theme = useTheme();
  const { title } = useSelector((state: RootState) => state.page);

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
          paddingTop: theme.spacing(5),
          minHeight: "100%",
        }}
      >
        <Toolbar sx={{ minWidth: theme.spacing(3) }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon />
            </Link>
            <Typography color="text.primary">{title}</Typography>
          </Breadcrumbs>
        </Toolbar>
        <Box component="div" paddingX={theme.spacing(2.5)}>
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default Main;
