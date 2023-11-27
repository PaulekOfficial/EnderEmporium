import successGif from "../../images/call_center.gif";
import {faMailBulk, faMessage, faPlaneDeparture, faSignIn, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HelpSite() {

    return (
        <>
            <div className="items maximize-items">
                <div className="elements" style={{padding: "40px"}}>
                    <img src={successGif} alt={""} style={{maxWidth: "150px", maxHeight: "113px"}}/>
                    <h1 style={{width: "100%"}}>
                        Potrzebujesz pomocy? Już pomagamy
                    </h1>
                    <p style={{ width: "100%" }}>
                        Używając tego formulaża - wyślij wiadomość do administratora tego sklepu, twój problem zostanie rozpatrzony w ciągu 48h.
                    </p>
                    <form>
                        <label>
                            <FontAwesomeIcon icon={faMailBulk} size={"lg"} />
                            Podaj swój adres e-mail
                            <input type={"text"}/>
                        </label>
                        <br/>
                        <label>
                            <FontAwesomeIcon icon={faUser} size={"lg"} />
                            Twój pseudonim
                            <input type={"text"}/>
                        </label>
                        <br/>
                        <label>
                            <FontAwesomeIcon icon={faMessage} size={"lg"} />
                            Wiadomość
                            <input type={"text"}/>
                        </label>

                        <br/>

                        <button>
                            <FontAwesomeIcon icon={faPlaneDeparture} size={"lg"} />
                            <p>Wyślij Wiadomość</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default HelpSite;