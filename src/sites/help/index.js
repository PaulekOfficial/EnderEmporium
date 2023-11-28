import successGif from "../../images/call_center.gif";
import {faMailBulk, faMessage, faPlaneDeparture, faSignIn, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

function HelpSite() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div className={`items maximize-items ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
                <div className="elements" style={{padding: "40px"}}>
                    <img src={successGif} alt={""} style={{maxWidth: "147px", maxHeight: "110px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        Potrzebujesz pomocy? Już pomagamy
                    </h1>
                    <p style={{ width: "100%" }}>
                        Używając tego formulaża - wyślij wiadomość do administratora tego sklepu, twój problem zostanie rozpatrzony w ciągu 48h.
                    </p>
                    <form style={{width: "80%"}}>
                        <div className={"overlay-inputs"} style={{display: "flex", flexFlow: "none", justifyContent: "center"}}>
                            <div className="input-container" style={{float: "left", maxWidth: "100%"}}>
                                <input type="text" className="input-field" required />
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faMailBulk} size={"lg"} style={{marginRight: "10px"}} />
                                    Podaj swój adres e-mail
                                </label>
                            </div>
                            <div className="input-container" style={{float: "left", maxWidth: "100%"}}>
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