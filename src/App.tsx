import React from "react";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import routers from "./routes";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routers} />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
