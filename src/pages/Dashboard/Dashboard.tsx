import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { posts } from "@/constants/mockdata/posts";

const Row = (props: { row: any }) => {
  const theme = useTheme();
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Box
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            width={theme.spacing(50)}
          >
            {row.content}
          </Box>
        </TableCell>
        <TableCell width={theme.spacing(10)}>{row.likes}</TableCell>
        <TableCell width={theme.spacing(10)}>{row.views}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, marginLeft: 4 }}>
              <Typography variant="h6" gutterBottom component="div">
                Posts
              </Typography>
              <Box display={"flex"} gap={theme.spacing(1)}>
                {row.image && (
                  <Box width={theme.spacing(30)} height={theme.spacing(18)}>
                    <img
                      src={row.image}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                    />
                  </Box>
                )}
                <Box
                  flex={1}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={theme.spacing(1)}
                >
                  <Typography>{row.content}</Typography>
                  <Box>
                    <Box></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default function Dashboard() {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Content</TableCell>
            <TableCell width={theme.spacing(10)}>Likes</TableCell>
            <TableCell width={theme.spacing(10)}>Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row, key) => (
            <Row key={key} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
