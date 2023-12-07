import serverIcon from '../../images/server-icon.png';
import turbodropIcon from '../../images/dir5y1K.png';
import '../../App.css';
import ServerStatus from "../../elements/serverStatus";
import ItemOffer from "../../elements/item";
import Pageable from "../../elements/pageable";
import LastBuyers from "../../elements/lastBuyers";
import {useEffect, useState} from "react";
import BuyOverlay from "../../elements/buyOverlay";
import $ from "jquery";

function MainSite() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleItemButtonClick = (itemId) => {
        setShowOverlay(true);
    };

    useEffect(() => {
        $('.items').addClass('fadeIn');
        $('.sidebar').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items`}>
                <div className="elements">
                    <ItemOffer id={0} name={"Ranga VIP"} price={"6.99"} discountPrice={"4.90"} hasDiscount={true}
                               isHighlighted={true} onButtonClick={handleItemButtonClick}/>
                    <ItemOffer id={1} name={"Ranga VIP ++"} price={"9.99"} onButtonClick={handleItemButtonClick}/>
                    <ItemOffer id={2} name={"Turbodrop - 30m"} price={"4.99"} image={turbodropIcon}
                               onButtonClick={handleItemButtonClick}/>
                </div>
                <Pageable pageSize={1}/>
            </div>
            <div className={`sidebar`}>
                <ServerStatus icon={serverIcon} ipAddress={"mc.paulek.pro"} onlinePlayers={10}/>
                <LastBuyers/>
            </div>

            {showOverlay && (
                <BuyOverlay setShowOverlay={setShowOverlay} showOverlay={showOverlay}/>
            )}
        </>
    );
}

export default MainSite;
