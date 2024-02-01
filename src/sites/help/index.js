import successGif from "../../images/call_center.gif";
import {faMailBulk, faMessage, faPlaneDeparture, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import $ from "jquery";
import TicketService from "../../service/TicketService.ts";

function HelpSite() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateName = (name) => {
        const re = /^[a-zA-Z ]{2,30}$/;
        return re.test(String(name));
    }

    const handleSubmit = async (event) => {
        let formError = document.querySelector('.help-form-error');
        event.preventDefault();
        if (!validateEmail(email)) {
            formError.innerHTML = 'Wpisz poprawny adres e-mail';
            setValidEmail(false);
            return;
        }
        setValidEmail(true);

        if (!validateName(name)) {
            formError.innerHTML = 'Wpisz poprawny pseudonim';
            setValidName(false);
            return;
        }
        setValidName(true);

        const data = {
            email: email,
            name: name,
            message: message
        }

        const response = await TicketService.createTicket(data);

        if (response.success) {
            alert("Twoja wiadomość została wysłana");
        } else {
            alert("Wystąpił błąd podczas wysyłania wiadomości");
        }
    }

    useEffect(() => {
        $('.items').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements" style={{padding: "20px"}}>
                    <img src={successGif} alt={""} style={{maxWidth: "147px", maxHeight: "110px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        Potrzebujesz pomocy? Już pomagamy
                    </h1>
                    <p style={{width: "100%"}}>
                        Używając tego formulaża - wyślij wiadomość do administratora tego sklepu, twój problem zostanie
                        rozpatrzony w ciągu 48h.
                    </p>
                    <form style={{width: "80%"}}>
                        <p className={"help-form-error"} style={{color: "red", padding: "15px"}}></p>
                        <div className={"overlay-inputs"}
                             style={{display: "flex", flexFlow: "none", justifyContent: "center"}}>
                            <div className={`input-container ${!validEmail ? 'input-error' : ''}`}
                                 style={{float: "left", maxWidth: "100%"}}>
                                <input type="text" className="input-field" required
                                       onChange={e => setEmail(e.target.value)}/>
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faMailBulk} size={"lg"} style={{marginRight: "10px"}}/>
                                    Podaj swój adres e-mail
                                </label>
                            </div>
                            <div className={`input-container ${!validName ? 'input-error' : ''}`}
                                 style={{float: "left", maxWidth: "100%"}}>
                                <input type="text" className="input-field" required
                                       onChange={e => setName(e.target.value)}/>
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faUser} size={"lg"} style={{marginRight: "10px"}}/>
                                    Twój pseudonim
                                </label>
                            </div>
                        </div>

                        <br/>

                        <div className={"overlay-inputs"} style={{width: "100%"}}>
                            <div className="input-container" style={{width: "100%"}}>
                                <textarea className="input-field" style={{width: "100%", height: "150px"}} required
                                    onChange={e => setMessage(e.target.value)} />
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faMessage} size={"lg"} style={{marginRight: "10px"}}/>
                                    Wiadomość
                                </label>
                            </div>
                        </div>

                        <button className="help-button"
                                style={{textAlign: 'center', backgroundColor: '#007BFF', color: '#FFFFFF'}}
                                onClick={e => handleSubmit(e)}>
                            <FontAwesomeIcon icon={faPlaneDeparture} size="lg"
                                             style={{marginRight: "10px", verticalAlign: "middle"}}/>
                            <p style={{display: 'inline-block', verticalAlign: 'middle', margin: 0}}>Wyślij
                                Wiadomość</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default HelpSite;