import voucherIcon from "../../images/Voucher-PNG-Images.png";
import {useEffect} from "react";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faCode, faPerson,} from "@fortawesome/free-solid-svg-icons";

function VoucherSite() {
    useEffect(() => {
        $('.items').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements" style={{padding: "20px"}}>
                    <img src={voucherIcon} alt={""} style={{maxWidth: "294px", maxHeight: "220px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        Realizacja Kodu Voucher
                    </h1>
                    <p style={{width: "100%"}}>
                        Otrzymałeś voucher od znajomego czy administracji? Zrealizuj go tutaj i zyskaj benefity związane
                        z powiązaną usługą do twojego kod
                    </p>
                    <form style={{width: "80%", padding: "40px"}}>
                        <div className={"overlay-inputs"}
                             style={{display: "flex", flexFlow: "none", justifyContent: "center"}}>
                            <div className="input-container" style={{float: "left", maxWidth: "100%"}}>
                                <input type="text" className="input-field" required/>
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faPerson} size={"lg"} style={{marginRight: "10px"}}/>
                                    Nickname
                                </label>
                            </div>
                            <div className="input-container" style={{float: "left", maxWidth: "100%"}}>
                                <input type="text" className="input-field" required/>
                                <label htmlFor="input" className="label">
                                    <FontAwesomeIcon icon={faCode} size={"lg"} style={{marginRight: "10px"}}/>
                                    Kod
                                </label>
                            </div>
                        </div>

                        <button className="help-button"
                                style={{textAlign: 'center', backgroundColor: '#007BFF', color: '#FFFFFF'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg"
                                             style={{marginRight: "10px", verticalAlign: "middle"}}/>
                            <p style={{display: 'inline-block', verticalAlign: 'middle', margin: 0}}>Zrealizuj</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default VoucherSite;