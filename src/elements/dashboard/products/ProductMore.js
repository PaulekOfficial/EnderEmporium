import { useRef, useState } from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
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
import {ProductService} from "../../../service/ProductService.ts";

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

const ProductMore = ({ id }) => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleDelete = async (event) => {
    const response = await ProductService.deleteProduct(id);

    console.log(response);

    if (response.success) {
        alert("Usunięto produkt");
        navigate("/dashboard/products");
        setShowMenu(false)
    } else {
        alert("Nie udało się usunąć produktu");
        setShowMenu(false)
    }
  }

  const handleEdit = (event) => {
    setShowMenu(false)
  }

  return (
    <>
      {/* Button */}
      <IconButton
        size="small"
        aria-label="Edytuj Prodkuty"
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

        <MenuItem
          component={RouterLink}
          to={"/dashboard/product/editor/" + id}
          onClick={handleEdit}
        >
          <ListItemIcon>
            <MdModeEdit />
          </ListItemIcon>

          <ListItemText
            primary="EDYTUJ"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </MenuStyle>
    </>
  );
};

export default ProductMore;
