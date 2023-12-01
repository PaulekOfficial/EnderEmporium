import serverIcon from "../../images/server-icon.png";
import {useEffect, useState} from "react";
import $ from "jquery";

function VoucherSite() {
    useEffect(() => {
        $('.items').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements">
                    <h1>Zrealizuj Voutcher</h1>

                    <form>
                        <img src={serverIcon}  alt={""}/>
                        <input type={"text"} />
                        <input type={"text"} />
                        <button>Zrealizuj Kod</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default VoucherSite;