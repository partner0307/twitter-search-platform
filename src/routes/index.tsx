import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Follower from "@/pages/Follower";
import { Box, Typography } from "@mui/material";
import MainLayout from "@/pages";
import _ROUTERS from "@/constants/route.constant";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: _ROUTERS._HOME.path,
        element: <Dashboard />,
      },
      {
        path: _ROUTERS._FOLLOWER.path,
        element: <Follower />,
      },
      {
        path: _ROUTERS._CUSTOMER.path,
        element: <>Customer</>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <Box>
        <Typography>404</Typography>
      </Box>
    ),
  },
]);

export default routers;
