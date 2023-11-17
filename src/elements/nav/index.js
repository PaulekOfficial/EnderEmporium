import ServerStatus from "../serverStatus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faSignIn, faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="mobile-bars">
                <FontAwesomeIcon icon={faBars} size={"lg"} />
            </div>
            <ul className="nav-elements">
                <Link to="/">
                    <li className="active-nav-element">
                        Strona Główna
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        Wiadomości
                    </li>
                </Link>
                <Link to="/voutcher">
                    <li>
                        Zrealizuj Voucher
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        Regulamin
                    </li>
                </Link>
            </ul>

            <div className="nav-icons">
                <div className="nav-icon-item">
                    <a href="\">
                        <FontAwesomeIcon icon={faSignIn} size={"lg"} />
                    </a>
                </div>
                <div className="nav-icon-item">
                    <a href="\">
                        <FontAwesomeIcon icon={faCogs} size={"lg"} />
                    </a>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
    )
}

export default NavBar;
