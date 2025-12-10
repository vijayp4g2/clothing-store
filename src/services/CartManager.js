
export class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.init();
    }

    init() {
        if (!window.cart) {
            window.cart = this;
        }
    }

    // Add item to cart
    addItem(product) {
        // Check if item already exists (matching ID if available, or name as fallback)
        // Cart.js primarily uses name for matching in some places, but ID is better.
        // The existing Cart.js structure uses: { name, price, image, quantity, size, color }
        // It does NOT seem to consistently store ID. I should probably add ID.

        const existingIndex = this.cart.findIndex(item =>
            (product.id && item.id === product.id) || item.name === product.name
        );

        if (existingIndex !== -1) {
            this.cart[existingIndex].quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
                size: product.size || 'M',
                color: product.color || 'Default'
            });
        }

        this.save();
        this.notify();
    }

    // Remove item
    removeItem(index) {
        if (index >= 0 && index < this.cart.length) {
            this.cart.splice(index, 1);
            this.save();
            this.notify();
        }
    }

    // Update quantity
    updateQuantity(index, change) {
        if (this.cart[index]) {
            this.cart[index].quantity += change;
            if (this.cart[index].quantity <= 0) {
                this.removeItem(index);
            } else {
                this.save();
                this.notify();
            }
        }
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    notify() {
        window.dispatchEvent(new Event('cartUpdated'));
    }

    // specific method called by ShopLogic
    // ShopLogic calls window.cart.addItem(productId) - but wait, 
    // I am changing ShopLogic to pass full object
}

export const cartManager = new CartManager();
