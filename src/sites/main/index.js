import serverIcon from '../../images/server-icon.png';
import turbodropIcon from '../../images/dir5y1K.png';
import '../../App.css';
import ServerStatus from "../../elements/serverStatus";
import ItemOffer from "../../elements/item";
import Pageable from "../../elements/pageable";
import LastBuyers from "../../elements/lastBuyers";

function MainSite() {
    return (
        <>
            <div className="items">
                <div className="elements">
                    <ItemOffer name={"Ranga VIP"} price={"6.99"} discountPrice={"4.90"} hasDiscount={true} isHighlighted={true}/>
                    <ItemOffer name={"Ranga VIP ++"} price={"9.99"}/>
                    <ItemOffer name={"Turbodrop - 30m"} price={"4.99"} image={turbodropIcon}/>
                </div>
                <Pageable />
            </div>
            <div className="sidebar">
                <ServerStatus icon={serverIcon} ipAddress={"mc.paulek.pro"} onlinePlayers={10}/>
                <LastBuyers />
            </div>
        </>
    );
}

export default MainSite;
