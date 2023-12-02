import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store";
import { followerActions } from "@/redux/follower";

const List = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state: RootState) => state.follower);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{
        xs: 4,
        sm: 8,
        md: 12,
      }}
    >
      {users.map((user, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Card
            sx={{
              width: theme.spacing(23),
              height: theme.spacing(16),
              cursor: "pointer",
            }}
            onClick={() => dispatch(followerActions.setUser(user))}
          >
            <CardHeader
              avatar={
                user.avatar ? (
                  <Avatar src={user.avatar} alt="" />
                ) : (
                  <Avatar sx={{ bgcolor: theme.palette.text.primary }}>
                    R
                  </Avatar>
                )
              }
              title={
                <>
                  <Typography variant="button" component={"span"}>
                    {user.displayName}
                  </Typography>
                  {user.verified && (
                    <VerifiedIcon
                      sx={{
                        color: theme.palette.warning.main,
                        fontSize: theme.spacing(1),
                      }}
                    />
                  )}
                </>
              }
              subheader={
                <Typography variant="caption" component={"span"}>
                  @{user.username}
                </Typography>
              }
            />
            <CardContent>
              <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                <Typography variant="caption" component={"span"}>
                  {user.bio}
                </Typography>
                <Typography
                  variant="caption"
                  component={"a"}
                  href={user.contact}
                  sx={{ color: "#5fa6f0" }}
                >
                  {user.contact}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={theme.spacing(0.25)}
              >
                <Typography
                  variant="body2"
                  component={"span"}
                  sx={{ fontWeight: "bold" }}
                >
                  {user.following}
                </Typography>
                <Typography>Following</Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={theme.spacing(0.25)}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  component={"a"}
                >
                  {user.followers}
                </Typography>
                <Typography>Followers</Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
