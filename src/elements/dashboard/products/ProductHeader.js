import { Button, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { BiPlus } from "react-icons/bi";

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(2)}px 0`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& .MuiTypography-root": {
    fontSize: 30,
    fontWeight: 500,
  },

  "& .MuiButton-root": {
    fontSize: 10,
    fontWeight: 600,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    boxShadow: theme.shadows[5],

    "&:hover": {
      boxShadow: "none",
    },
  },
}));

const ProductHeader = () => {
  return (
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Produkty</Typography>

        <Button
            variant="contained"
            disableElevation
            startIcon={<BiPlus />}
            color="success"
            onClick={() => window.location.href = "/dashboard/product/creator"}
        >
          Dodaj nowy proukt
        </Button>
      </Box>
  );
};

export default ProductHeader;
