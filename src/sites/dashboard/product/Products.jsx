import {Card, CardContent, Container, useMediaQuery} from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet";
import UserHeader from "../../../elements/dashboard/user/UserHeader";
import UserTable from "../../../elements/dashboard/user/UserTable";
import ProductTable from "../../../elements/dashboard/products/ProductTable";
import ProductHeader from "../../../elements/dashboard/products/ProductHeader";

// box style
const BoxStyle = styled(Box)(({ theme }) => ({
    margin: `${theme.spacing(4)}px auto`,
    borderRadius: theme.spacing(2),
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
    overflow: "hidden",

    //border: "2px solid teal",
}));

const Products = () => {
    // media queries
    const less400 = useMediaQuery("(max-width:400px)");
    const less480 = useMediaQuery("(max-width:480px)");
    const less600 = useMediaQuery("(max-width:600px)");
    const less768 = useMediaQuery("(max-width:768px)");

    return (
        <>
            <Helmet>
                <title>Products | MUI Dash</title>
            </Helmet>

            <Container maxWidth="lg" disableGutters>
                <ProductHeader />
                <br/>
                <Card sx={{ boxShadow: 3, borderRadius: '20px' }}>
                    <CardContent sx={{ padding: '20px 0 0 0' }}>
                        <ProductTable />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default Products;
