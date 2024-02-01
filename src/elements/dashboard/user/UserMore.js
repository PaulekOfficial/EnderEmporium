import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/styles";

// icons
import { MoreVert } from "@mui/icons-material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import UserService from "../../../service/UserService.ts";

// style
const MenuStyle = styled(Menu)(({ theme }) => ({
  // li
  "& .MuiMenuItem-root": {
    color: theme.palette.text.secondary,
  },

  // icons
  "& .MuiListItemIcon-root": {
    color: theme.palette.text.secondary,
    minWidth: 0,
    marginRight: theme.spacing(3),
  },
}));

const UserMore = ({id}) => {
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();
    const res = await UserService.deleteUserById(id);

    if (res.success) {
      alert("Użytkownik został usunięty.");
    } else {
      alert("Wystąpił błąd podczas usuwania użytkownika.");
    }

    setShowMenu(false)
  }

  const handleEnable = async (event) => {
    event.preventDefault();
    const res = await UserService.activateUserById(id);

    if (res.success) {
      alert("Użytkownik został aktywowany.");
    } else {
      alert("Wystąpił błąd podczas aktywowania użytkownika.");
    }

    setShowMenu(false)
  }

  const handleDeactivate = async (event) => {
    event.preventDefault();
    const res = await UserService.deactivateUserById(id);

    if (res.success) {
      alert("Użytkownik został deaktywowany.");
    } else {
      alert("Wystąpił błąd podczas deaktywowania użytkownika.");
    }

    setShowMenu(false)
  }

  return (
    <>
      {/* Button */}
      <IconButton
        size="small"
        aria-label="Edit Users"
        ref={ref}
        onClick={() => setShowMenu(true)}
      >
        <MoreVert fontSize="small" />
      </IconButton>

      {/* Menu */}
      <MenuStyle
        open={showMenu}
        anchorEl={ref.current}
        onClose={() => setShowMenu(false)}
        PaperProps={{ sx: { width: 200, maxWidth: "100%" } }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <RiDeleteBin6Line />
          </ListItemIcon>

          <ListItemText
            primary="USUŃ"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>

        <MenuItem onClick={handleEnable}>
          <ListItemIcon>
            <RiDeleteBin6Line />
          </ListItemIcon>

          <ListItemText
              primary="AKTYWUJ"
              primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>

        <MenuItem onClick={handleDeactivate}>
          <ListItemIcon>
            <RiDeleteBin6Line />
          </ListItemIcon>

          <ListItemText
              primary="DEZAKTYWUJ"
              primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </MenuStyle>
    </>
  );
};

export default UserMore;
