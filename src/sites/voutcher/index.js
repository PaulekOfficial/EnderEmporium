import ItemOffer from "../../elements/item";
import turbodropIcon from "../../images/dir5y1K.png";
import Pageable from "../../elements/pageable";
import ServerStatus from "../../elements/serverStatus";
import serverIcon from "../../images/server-icon.png";
import LastBuyers from "../../elements/lastBuyers";

function VoucherSite() {
    return (
        <>
            <div className="items maximize-items">
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