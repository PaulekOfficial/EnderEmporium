import lawIcon from "../../images/AJAX-plyn-uniwersalny-BOOST-ZESTAW-MIX-3x-1L.jpg";
import {useEffect, useState} from "react";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faMailBulk, faMessage, faPerson, faPlaneDeparture, faUser} from "@fortawesome/free-solid-svg-icons";

function NewsSite() {
    useEffect(() => {
        $('.items').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements" style={{padding: "20px"}}>
                    <img src={lawIcon} alt={""} style={{maxWidth: "294px", maxHeight: "220px", padding: "20px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        AJAX
                    </h1>
                    <p style={{ width: "100%" }}>
                        Przykładowe skrypty ajax
                    </p>
                </div>
            </div>
        </>
    );
}

export default NewsSite;