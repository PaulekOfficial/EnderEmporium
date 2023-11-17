import funnyImage from "../../images/FDiQFixXsAk37nZ.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const ItemOffer = ({ name = "Default Name", image = funnyImage, price = "0.00", discountPrice = "0.00", currency = "PLN", hasDiscount = false, isHighlighted = false }) => {
    return (
        <div className={`item ${isHighlighted ? 'best-choice' : ''}`}>
            <img src={image} height="673" alt=""/>
            <p className="item-title">{name}</p>
            <div className="item-spacer"></div>
            <div className="item-price">
                {
                   hasDiscount ? (
                       <>
                           <p>{discountPrice} {currency}</p>
                           <s>{price} {currency}</s>
                       </>
                   ) : (
                       <>
                           <p>{price} {currency}</p>
                       </>
                    )
                }
            </div>
            <div className="item-buy">
                <FontAwesomeIcon icon={faBasketShopping} size={"lg"} style={{float: "left", margin: "5px"}}/>
                <p>Kup Teraz</p>
            </div>
        </div>
    )
}

export default ItemOffer;
