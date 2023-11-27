import turbodropIcon from "../../images/dir5y1K.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import {useEffect} from "react";

function BuyOverlay({ setShowOverlay, showOverlay }) {
    const handleOverlayShake = () => {
        $('.overlay-content').addClass('scale');
        setTimeout(() => {
            $('.overlay-content').removeClass('scale');
        }, 500);
        handleCloseOverlay();
    };

    const handleCloseOverlay = () => {
        $('.overlay').fadeOut(() => {
            setShowOverlay(false);
        });
    };

    useEffect(() => {
        $('.overlay').hide().fadeIn("500");
        $('.overlay-content').hide().fadeIn();
    }, [showOverlay]);

    return (
        <div className="overlay" onClick={handleOverlayShake}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <h2>Zakup TURBODROP</h2>
                <div className={"overlay-content-header"}>
                    <div className={"overlay-content-icon"}>
                        <img src={turbodropIcon} alt={""}/>
                        <p>TURBODROP</p>
                    </div>
                    <div className={"overlay-content-description"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquam, assumenda cumque eius eum hic labore laudantium neque nesciunt nihil nisi odio, placeat reiciendis repellendus reprehenderit repudiandae veniam vitae!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aut debitis dignissimos exercitationem hic id, itaque, magni nemo neque nisi nobis nulla placeat possimus quod, saepe sapiente veritatis? Excepturi.
                    </div>
                </div>
                <div className={"overlay-quantity"}>
                    <div className={"overlay-quantity-box"}>
                        <h3>Ilość</h3>
                        <input type="text" className={""} value={1} />
                    </div>

                    <input type="range" min="1" max="100" value="50" className={"overlay-content-slider"} id="myRange" />
                </div>
                <div className={"overlay-reminder"}>
                    <FontAwesomeIcon icon={faExclamation} size={"lg"} className={"overlay-reminder-exclamation"}/>
                    <p>W momencie zakupu tego produktu musisz znajdować się na serwerze.</p>
                </div>

                <div className={"overlay-form"}>
                    <h3>Wybież motodę płatności</h3>
                    <button onClick={handleCloseOverlay} className={"active"}>
                            <span>
                                PAYPAL
                            </span>
                    </button>
                    <button onClick={handleCloseOverlay}>
                            <span>
                                BLIK | PRZELWY
                            </span>
                    </button>

                    <br /><br />

                    <div className={"overlay-inputs"}>
                        <div className="input-container">
                            <input type="text" className="input-field" required />
                            <label htmlFor="input" className="label">Wpisz pseudonim z gry</label>
                        </div>
                        <div className="input-container">
                            <input type="text" className="input-field" required />
                            <label htmlFor="input" className="label">Wpisz kod rabatowy (opcionalne)</label>
                        </div>
                    </div>

                    <br /><br />
                </div>

                <div className={"overlay-final-controls"}>
                    <button onClick={handleCloseOverlay} style={{backgroundColor: "#ff9393"}}>Anuluj</button>
                    <button onClick={handleCloseOverlay} style={{backgroundColor: "#67d567"}}>Sfinalizuj Zakup</button>
                </div>
            </div>
        </div>
    )
}

export default BuyOverlay;
