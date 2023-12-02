import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store";
import { pageActions } from "@/redux/page";
import { useNavigate } from "react-router-dom";

const drawerWidth: number = 240;

interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector((state: RootState) => state.page);

  const setNavigation = (url: string, title: string) => {
    dispatch(pageActions.setTitle(title));
    navigate(url);
  };
  console.log(visible);

  return (
    <Drawer variant="permanent" open={visible}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => dispatch(pageActions.toggleMenu(!visible))}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItemButton onClick={() => setNavigation("/", "Dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={() => setNavigation("/follower", "Followers Look-alike")}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Followers Look-alike" />
        </ListItemButton>
        <ListItemButton onClick={() => setNavigation("/customer", "Customers")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
}
