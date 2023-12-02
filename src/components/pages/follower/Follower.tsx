import { Box, useTheme } from "@mui/material";
import { Search } from "./search";
import { Detail } from "./detail";
import { List } from "./list";

const FollowerComponent = () => {
  const theme = useTheme();

  return (
    <Box display={"flex"} gap={theme.spacing(2)}>
      <Box flex={1}>
        <Search />
        <Box marginTop={theme.spacing(2)}>
          <List />
        </Box>
      </Box>
      <Box component={"div"} width="100%" maxWidth={theme.spacing(20)}>
        <Detail />
      </Box>
    </Box>
  );
};

export default FollowerComponent;
