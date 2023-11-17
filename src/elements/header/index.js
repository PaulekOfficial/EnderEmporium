import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/Ender_Pearl.webp";

const PageHeader = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                EnderEmporium
            </p>
        </header>
    )
}

export default PageHeader;