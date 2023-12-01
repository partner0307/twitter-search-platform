import React from "react";
import { selections } from "@/constants/mockdata/selection";
import {
  Container,
  Autocomplete,
  TextField,
  Checkbox,
  useTheme,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        mt: theme.spacing(4),
      }}
    >
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={selections}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Search users..." />
        )}
      />
    </Container>
  );
};

export default Dashboard;
