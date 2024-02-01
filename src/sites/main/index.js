import serverIcon from '../../images/server-icon.png';
import '../../App.css';
import ServerStatus from "../../elements/serverStatus";
import ItemOffer from "../../elements/item";
import Pageable from "../../elements/pageable";
import LastBuyers from "../../elements/lastBuyers";
import {useEffect, useState} from "react";
import BuyOverlay from "../../elements/buyOverlay";
import $ from "jquery";
import ShoppingCartOverlay from "../../elements/ShoppingCartOverlay.tsx";
import {ProductService} from "../../service/ProductService.ts";
import {PriceService} from "../../service/PriceService.ts";
import CartMiniButton from "../../elements/CartMiniButton.jsx";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

function MainSite() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [products, setProducts] = useState([]);

    const handleItemButtonClick = (itemId) => {
        setShowOverlay(true);
    };

    useEffect(() => {
        const fetchProductsWithPrices = async () => {
            try {
                const productResponse = await ProductService.getAllProducts();
                const productsWithPrices = await Promise.all(
                    productResponse.products.map(async (product) => {
                        const priceResponse = await PriceService.getPriceByProductId(product.id);
                        const prices = priceResponse.success ? priceResponse.prices : null;

                        return {
                            ...product,
                            prices,
                        };
                    })
                );

                setProducts(productsWithPrices);
            } catch (error) {
                console.error('Error fetching products with prices:', error);
            }
        };

        fetchProductsWithPrices();

        $('.items').addClass('fadeIn');
        $('.sidebar').addClass('fadeIn');
    }, []);

    return (
        <>
            <NotificationContainer />
            <CartMiniButton />
            <div className={`items`}>
                <div className="elements">
                    {products.map((product) => (
                        <ItemOffer
                            key={product.id + product.name}
                            id={product.id}
                            name={product.name}
                            price={
                                product.prices && product.prices.length === 1
                                    ? product.prices[0].brutto
                                    : product.prices[1].brutto
                            }
                            discountPrice={
                                product.prices && product.prices.length === 1 ? 0.00 : product.prices[0].brutto
                            }
                            hasDiscount={
                                (product.prices && product.prices.length > 1)
                            }
                            isHighlighted={false}
                            image={product.image}
                            onButtonClick={handleItemButtonClick}
                        />
                    ))}

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

            <ShoppingCartOverlay theme={"dark"}/>
        </>
    );
}

export default MainSite;
