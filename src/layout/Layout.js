import '../App.css';
import NavBar from "../elements/nav";
import Header from "../elements/header";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import LoadingScreen from "../elements/loading";
import $ from "jquery";

function Layout() {
    useEffect(() => {
        const timer = setTimeout(() => {
            $('.loading-screen').fadeOut('fast');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="App">
            <LoadingScreen/>
            <Header/>
            <div className="container">
                <NavBar/>
                <div className="main">
                    <Outlet/>
                </div>
            </div>
            {/*<div className={"cookie-container"}>*/}
            {/*    <div style={{width: "30%", height: "auto"}}>*/}
            {/*        <img src={cookieIcon} alt={"cookie!"} />*/}
            {/*    </div>*/}
            {/*    <span style={{padding: "50px", fontWeight: "bolder", fontSize: "15px", width: "40%"}}>*/}
            {/*        Ta strona internetowa korzysta z plików cookies w celu dostarczenia najlepszych doświadczeń użytkownika oraz analizy ruchu na stronie.*/}
            {/*        Jeżeli nie zgadzasz się z używanie plików cookies, wyjdz.*/}
            {/*    </span>*/}
            {/*    <FontAwesomeIcon icon={faXmark} size={"lg"} style={{float: "left", margin: "10px"}}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Layout;
