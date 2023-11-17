import '../App.css';
import NavBar from "../elements/nav";
import Header from "../elements/header";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <NavBar />
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
