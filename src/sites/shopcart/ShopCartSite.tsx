import {useEffect, useState} from "react";
import {
    Alert, Button,
    Card,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
// @ts-ignore
import ShopCartService from "../../service/ShopCartService.ts";
// @ts-ignore
import {Product, ProductService} from "../../service/ProductService.ts";
// @ts-ignore
import {Price, PriceService} from "../../service/PriceService.ts";

interface ProductInCart {
    product: Product;
    quantity: number;
    prices: Price[];
}

function ShopCartSite() {
    const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

    const calculateMarginTop = (cartItems) => {
        const itemCount = cartItems.length;
        const baseMargin = 200;
        const additionalMarginPerItem = 40;

        return baseMargin + itemCount * additionalMarginPerItem;
    };

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                const cartItemsWithDetails = await Promise.all(
                    ShopCartService.getCart().map(async (item) => {
                        const productDetails = await ProductService.getProductById(item.productId);
                        const priceDetails = await PriceService.getPriceByProductId(item.productId);

                        if (productDetails.success && priceDetails.success) {
                            return {
                                product: productDetails.product,
                                quantity: item.quantity,
                                prices: priceDetails.prices,
                            };
                        }
                    })
                );

                setCartItems(cartItemsWithDetails);
            } catch (error) {
                console.error("Error loading cart items:", error);
            }
        };

        loadCartItems();
    }, []);

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        ShopCartService.updateQuantity(productId, newQuantity);
        const updatedCartItems = cartItems.map((item) => {
            if (item.product.id === productId) {
                return {
                    ...item,
                    quantity: newQuantity,
                };
            }

            return item;
        });

        setCartItems(updatedCartItems);
    };

    const handleRemoveItem = (productId: number) => {
        ShopCartService.removeFromCart(productId);
        const updatedCartItems = cartItems.filter(item => item.product.id !== productId);
        setCartItems(updatedCartItems);
    };

    return (
        <>
            <div className={`items maximize-items`}>
                <br/>
                <Typography variant="h4" component="div" gutterBottom style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShoppingCartIcon sx={{ fontSize: 40, marginTop: "5px" }} />
                    Koszyk
                </Typography>
                <div className="elements" style={{padding: "20px"}}>
                    {cartItems.length === 0 ? (
                        <Alert severity="info">Koszyk jest pusty</Alert>
                    ) : (
                        <List>
                            {cartItems.map((item) => (
                                <Card sx={{ boxShadow: 3, borderRadius: '20px', width: "800px", mt: "20px", mb: "20px"}} key={item.product.id}>
                                    <ListItem>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            style={{width: "80px", height: "80px", marginRight: "30px"}}
                                        />
                                        <ListItemText primary={`${item.product.name}`} secondary={`${item.product.description}`} />

                                        <ListItemText primary={`${item.prices[0].brutto * item.quantity} PLN`} />
                                        <TextField
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.product.id, Number(e.target.value))}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item.product.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </Card>
                            ))}
                        </List>
                    )}
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: `${calculateMarginTop(cartItems)}px`}}>
                    <Card sx={{ boxShadow: 3, borderRadius: '20px', mt: "10px", mb: "10px", width: "95%", padding: "20px", display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h6" component="div" gutterBottom style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            Razem: {cartItems.reduce((acc, item) => acc + item.prices[0].brutto * item.quantity, 0)} PLN
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => alert("Tu powienien być formularz do wypełnienia, ale chciałem już iść spać")}
                        >
                            Złóż Zamówienie
                        </Button>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default ShopCartSite;
