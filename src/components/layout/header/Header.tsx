import React from "react";
import { styled } from "@mui/material/styles";
import { Badge, IconButton, Toolbar, Typography, Avatar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Menu } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store";
import { pageActions } from "@/redux/page";
import AvatarImage from "@/assets/img/avatar.png";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const dispatch = useAppDispatch();
  const { visible, title } = useAppSelector((state: RootState) => state.page);

  return (
    <AppBar position="absolute" open={visible}>
      <Toolbar sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => dispatch(pageActions.toggleMenu(!visible))}
          sx={{ marginRight: "36px", ...(visible && { display: "none" }) }}
        >
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Avatar src={AvatarImage} alt="" sx={{ width: 32, height: 32 }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
