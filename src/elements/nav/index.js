import ServerStatus from "../serverStatus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faSignIn, faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="mobile-bars">
                <FontAwesomeIcon icon={faBars} size={"lg"} />
            </div>
            <ul className="nav-elements">
                <a href="\">
                    <li className="active-nav-element">
                        Strona Główna
                    </li>
                </a>
                <a href="\">
                    <li>
                        Wiadomości
                    </li>
                </a>
                <a href="\">
                    <li>
                        Zrealizuj Voucher
                    </li>
                </a>
                <a href="\">
                    <li>
                        Regulamin
                    </li>
                </a>
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
