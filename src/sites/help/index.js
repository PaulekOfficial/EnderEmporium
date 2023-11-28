import successGif from "../../images/call_center.gif";
import {faMailBulk, faMessage, faPlaneDeparture, faSignIn, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HelpSite() {

    return (
        <>
            <div className="items maximize-items">
                <div className="elements" style={{padding: "40px"}}>
                    <img src={successGif} alt={""} style={{maxWidth: "147px", maxHeight: "110px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        Potrzebujesz pomocy? Już pomagamy
                    </h1>
                    <p style={{ width: "100%" }}>
                        Używając tego formulaża - wyślij wiadomość do administratora tego sklepu, twój problem zostanie rozpatrzony w ciągu 48h.
                    </p>
                    <form>
                        <div className={"overlay-inputs"}>
                            <div className="input-container">
                                <input type="text" className="input-field" required />
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faMailBulk} size={"lg"} style={{marginRight: "10px"}} />
                                    Podaj swój adres e-mail
                                </label>
                            </div>
                            <div className="input-container">
                                <input type="text" className="input-field" required />
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faUser} size={"lg"} style={{marginRight: "10px"}} />
                                    Twój pseudonim
                                </label>
                            </div>
                        </div>

                        <br/>

                        <div className={"overlay-inputs"} style={{width: "100%"}}>
                            <div className="input-container" style={{width: "100%"}}>
                                <textarea className="input-field" style={{width: "100%", height: "150px"}} required />
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faMessage} size={"lg"} style={{marginRight: "10px"}} />
                                    Wiadomość
                                </label>
                            </div>
                        </div>

                        <button className="help-button" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={faPlaneDeparture} size="lg" style={{ marginRight: "10px", verticalAlign: "middle" }} />
                            <p style={{ display: 'inline-block', verticalAlign: 'middle', margin: 0 }}>Wyślij Wiadomość</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default HelpSite;