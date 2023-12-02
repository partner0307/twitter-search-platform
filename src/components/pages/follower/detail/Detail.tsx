import {
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
import { useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store";

const Detail = () => {
  const theme = useTheme();
  const { user, users } = useAppSelector((state: RootState) => state.follower);
  return (
    <>
      {users.length > 0 && user.username && (
        <Card sx={{ maxWidth: theme.spacing(20) }}>
          <CardHeader
            avatar={
              user.avatar ? (
                <Avatar src={user.avatar} alt="" />
              ) : (
                <Avatar sx={{ bgcolor: theme.palette.text.primary }}>R</Avatar>
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
      )}
    </>
  );
};

export default Detail;
