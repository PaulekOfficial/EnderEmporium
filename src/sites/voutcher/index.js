import serverIcon from "../../images/server-icon.png";
import {useEffect, useState} from "react";

function VoucherSite() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div className={`items maximize-items ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
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