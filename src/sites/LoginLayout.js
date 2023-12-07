import '../App.css';
import NavBar from "../elements/nav";
import Header from "../elements/header";
import {Outlet} from "react-router-dom";
import cookieIcon from "../images/3580617sz0ygexqpz.gif";
import {
    faArrowRight,
    faBasketShopping,
    faCross,
    faCrosshairs, faKey,
    faMailBulk, faPerson,
    faPlaneDeparture, faUniversalAccess,
    faUser,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ServerStatus from "../elements/serverStatus";
import serverIcon from "../images/server-icon.png";
import LastBuyers from "../elements/lastBuyers";

function LoginLayout() {
    return (
        <div className="App">
            <div className="container">
                <div className="overlay">
                    <div className="overlay-content" style={{
                        padding: "20px",
                        maxWidth: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <div style={{width: "95%", display: "flex", justifyContent: "space-between"}}>
                            <h2 style={{textAlign: "left"}}>Logowanie</h2>
                            <p style={{textAlign: "right", padding: "10px", color: "darkblue"}}>Nie masz konta?</p>
                        </div>

                        <form style={{width: "95%"}}>
                            <div className={"overlay-inputs"} style={{display: "flex", flexWrap: "wrap"}}>
                                <div style={{width: "100%"}}>
                                    <div className="input-container"
                                         style={{marginLeft: 0, marginRight: 0, marginBottom: "40px", width: "100%"}}>
                                        <input type="text" className="input-field" required/>
                                        <label htmlFor="input" className="label">
                                            <FontAwesomeIcon icon={faPerson} size={"lg"} style={{marginRight: "10px"}}/>
                                            Login
                                        </label>
                                    </div>
                                    <div className="input-container"
                                         style={{marginLeft: 0, marginRight: 0, width: "100%"}}>
                                        <input type="text" className="input-field" required/>
                                        <label htmlFor="input" className="label">
                                            <FontAwesomeIcon icon={faKey} size={"lg"} style={{marginRight: "10px"}}/>
                                            Hasło
                                        </label>
                                    </div>
                                </div>

                                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                                    <div style={{margin: "16px 0"}}>
                                        <input type={"checkbox"}/>
                                        <label htmlFor="input" style={{color: "black"}}>
                                            Nie wylogowuj mnie
                                        </label>
                                    </div>
                                    <p style={{textAlign: "right", paddingRight: "10px"}}>Zapomniałeś hasła?</p>
                                </div>

                                <button className="help-button" style={{textAlign: 'center', width: "100%", backgroundColor: "#FFA500", color: "#000000"}}>
                                    <FontAwesomeIcon icon={faArrowRight} size="lg"
                                                     style={{marginRight: "10px", verticalAlign: "middle"}}/>
                                    <p style={{display: 'inline-block', verticalAlign: 'middle', margin: 0}}>Zaloguj</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;
