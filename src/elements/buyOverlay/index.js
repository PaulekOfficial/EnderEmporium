import turbodropIcon from "../../images/dir5y1K.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faGamepad, faMailBulk, faPercent} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import {useEffect, useState} from "react";

function BuyOverlay({ setShowOverlay, showOverlay }) {
    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden';
            $('.stickyNav').fadeOut();
        }
    }, [showOverlay]);

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

        document.body.style.overflow = 'auto';
        $('.stickyNav').fadeIn();
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
                        <img src={turbodropIcon} alt={""} />
                        <p>TURBODROP</p>
                    </div>
                    <div className={"overlay-content-description"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquam, assumenda cumque eius eum hic labore
                        laudantium neque nesciunt nihil nisi odio, placeat reiciendis repellendus reprehenderit repudiandae veniam
                        vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aut debitis dignissimos
                        exercitationem hic id, itaque, magni nemo neque nisi nobis nulla placeat possimus quod, saepe sapiente
                        veritatis? Excepturi.
                    </div>
                </div>
                <div className={"overlay-quantity"}>
                    <div className={"overlay-quantity-box"}>
                        <h3>Ilość</h3>
                        <input key={""} type="text" className={""} value={1} />
                    </div>

                    <input key={""} type="range" min="1" max="100" value="50" className={"overlay-content-slider"} id="myRange" />
                </div>
                <div className={"overlay-reminder"}>
                    <FontAwesomeIcon icon={faExclamation} size={"lg"} className={"overlay-reminder-exclamation"} />
                    <p>W momencie zakupu musisz znajdować się na serwerze.</p>
                </div>

                <div className={"overlay-form"}>
                    <div className={"overlay-payment"}>
                        <h3>Wybież motodę płatności</h3>
                        <button onClick={handleCloseOverlay} className={"active-payment-method"}>
                            <span>PAYPAL</span>
                        </button>
                        <button onClick={handleCloseOverlay}>
                            <span>BLIK | PRZELWY</span>
                        </button>
                    </div>

                    <div className={"overlay-inputs"} style={{marginBottom: "20px"}}>
                        <div className="input-container" style={{float: "left"}}>
                            <input key={""} type="text" className="input-field" required />
                            <label htmlFor="input" className="label">
                                <FontAwesomeIcon icon={faGamepad} size={"lg"} style={{marginRight: "10px"}} />
                                Nickname
                            </label>
                        </div>
                        <div className="input-container" style={{float: "left"}}>
                            <input key={""} type="text" className="input-field" required />
                            <label htmlFor="input" className="label">
                                <FontAwesomeIcon icon={faPercent} size={"lg"} style={{marginRight: "10px"}} />
                                Kod rabatowy (opcionalne)
                            </label>
                        </div>
                    </div>
                </div>

                <div className={"overlay-final-controls"}>
                    <button onClick={handleCloseOverlay} style={{ backgroundColor: "#ff9393" }}>
                        Anuluj
                    </button>
                    <button onClick={handleCloseOverlay} style={{ backgroundColor: "#67d567" }}>
                        Sfinalizuj Zakup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuyOverlay;
