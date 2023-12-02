import { selections } from "@/constants/mockdata/selection";
import {
  Box,
  Autocomplete,
  TextField,
  Checkbox,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import { followerActions } from "@/redux/follower";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/redux/store";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Search = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state: RootState) => state.follower);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={selections}
      disableCloseOnSelect
      getOptionLabel={(option) => `${option.displayName}${option.username}`}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            onClick={() => {
              const payload = {
                displayName: option.displayName,
                username: option.username,
                contact: option.contact,
                avatar: option.avatar,
                followers: option.followers,
                following: option.following,
                bio: option.bio,
                verified: option.verified,
              };
              const temp = !selected
                ? [...users, payload]
                : users.filter((p) => p.username !== option.username);
              dispatch(followerActions.setUsers(temp));
              !selected && dispatch(followerActions.setUser(payload));
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={theme.spacing(1)}>
              <Avatar
                src={option.avatar}
                sx={{
                  width: theme.spacing(1.5),
                  height: theme.spacing(1.5),
                }}
              />
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={theme.spacing(0.25)}
              >
                <Typography variant="subtitle2">
                  {option.displayName}
                </Typography>
                {option.verified && (
                  <VerifiedIcon
                    sx={{
                      color: theme.palette.warning.main,
                      fontSize: theme.spacing(1),
                    }}
                  />
                )}
              </Box>
              <Typography variant="caption">@{option.username}</Typography>
            </Box>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          </Box>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Search users..." />
      )}
    />
  );
};

export default Search;
