import {
  IconButton,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import { RiDeleteBinFill, RiFilter3Fill } from "react-icons/ri";

const TableToolbar = ({ numSelected }) => {
  // style
  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: "8px 8px 0 0",
    backgroundColor: numSelected > 0 ? theme.palette.green.light : "inherit",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // input style
    "& .MuiInputBase-root": {
      borderRadius: theme.spacing(1),
    },
    "& label.Mui-focused": {
      color: theme.palette.success.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.success.main,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.success.main,
      },
    },

    // selectedText
    "& .selectedText": {
      fontSize: 18,
      fontWeight: numSelected > 0 ? 500 : 400,
      color: numSelected > 0 ? theme.palette.green.dark : "inherit",
    },
  }));

  return (
    <ToolbarStyle>
      {/* input search or selected items length */}
      {numSelected > 0 ? (
        <Typography
          variant="subtitle1"
          component="div"
          className="selectedText"
        >
          {numSelected} wybranych
        </Typography>
      ) : (
        <TextField variant="outlined" placeholder="Wyszukaj..." />
      )}

      {/*  icons */}
      {numSelected > 0 ? (
        <Tooltip title="Usuń">
          <IconButton>
            <RiDeleteBinFill />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filtruj listę">
          <IconButton>
            <RiFilter3Fill />
          </IconButton>
        </Tooltip>
      )}
    </ToolbarStyle>
  );
};

export default TableToolbar;
