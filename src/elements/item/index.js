import funnyImage from "../../images/FDiQFixXsAk37nZ.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const ItemOffer = ({
                       name,
                       id,
                       image = funnyImage,
                       price,
                       discountPrice = "0.00",
                       currency = "PLN",
                       hasDiscount = false,
                       isHighlighted = false,
                       onButtonClick
                   }) => {
    const handleButtonClick = () => {
        onButtonClick(id);
    };

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

            <button className="item-buy" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faBasketShopping} size={"lg"} style={{float: "left", margin: "5px"}}/>
                <p>Kup Teraz</p>
            </button>
        </div>
    )
}

export default ItemOffer;
