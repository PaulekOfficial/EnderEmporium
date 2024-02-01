import Cookies from 'js-cookie';

export interface CartItem {
    productId: number;
    quantity: number;
}

class ShopCartService {
    private cartKey: string;

    constructor() {
        this.cartKey = 'shopping_cart';
    }

    getCart(): CartItem[] {
        const cartData = Cookies.get(this.cartKey);
        return cartData ? JSON.parse(cartData) : [];
    }

    addToCart(productId: number, quantity = 1): void {
        const cart = this.getCart();
        const existingProduct = cart.find(item => item.productId === productId);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }

        this.saveCart(cart);
    }

    incrementQuantity(productId: number): void {
        const cart = this.getCart();
        const existingProduct = cart.find(item => item.productId === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ productId, quantity: 1 });
        }

        this.saveCart(cart);
    }

    removeFromCart(productId: number): void {
        const cart = this.getCart().filter(item => item.productId !== productId);
        this.saveCart(cart);
    }

    updateQuantity(productId: number, newQuantity: number): void {
        const cart = this.getCart().map(item => {
            if (item.productId === productId) {
                item.quantity = newQuantity;
            }
            return item;
        });

        this.saveCart(cart);
    }

    clearCart(): void {
        this.saveCart([]);
    }

    private saveCart(cart: CartItem[]): void {
        Cookies.set(this.cartKey, JSON.stringify(cart), { expires: 7 });
    }
}

export default new ShopCartService();
