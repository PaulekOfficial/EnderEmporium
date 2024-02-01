import { useState } from "react";
import { Box, styled, Toolbar } from "@mui/material";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import {makeStyles} from "@mui/styles";
import {Outlet} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: drawerWidth,
        display: "grid",
        gridTemplateRows: "auto auto 1fr auto",
    },
}));

const MainStyle = styled("main")(({ theme }) => ({
    flexGrow: 1,
    minHeight: "100vh",
    padding: theme.spacing(2.5),
}));

const DashboardLayout = (props) => {
    // window width
    const { window } = props;
    const [toggleMenu, setToggleMenu] = useState(false);
    const classes = useStyles();

    // toggle drawer
    const handleToggleDrawer = () => setToggleMenu(!toggleMenu);
    const handleToggleClose = () => setToggleMenu(false);

    // I don't know the work of container yet
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <MainHeader onClick={handleToggleDrawer} />

            <SideDrawer
                container={container}
                toggleMenu={toggleMenu}
                onClose={handleToggleClose}
                drawerPaper={classes.drawerPaper}
            />

            {/* Content */}
            <MainStyle sx={{ backgroundColor: '#ffffff' }}>
                <Toolbar />
                <Outlet />
            </MainStyle>
        </Box>
    );
};

export default DashboardLayout;

export const drawerWidth = 240;