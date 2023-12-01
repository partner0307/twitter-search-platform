import { selections } from "@/constants/mockdata/selection";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Autocomplete
      options={selections.map((p) => p.title)}
      renderInput={(params) => <TextField {...params} label={"Search..."} />}
    />
  );
};

export default Dashboard;
