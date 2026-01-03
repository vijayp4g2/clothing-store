
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
        // Ensure product has an ID
        if (!product.id && product.id !== 0) {
            console.error('CartManager: Product must have an ID');
            return;
        }

        // Normalize ID to string for consistent comparison
        const productId = String(product.id);
        const existingItem = this.cart.find(item => String(item.id) === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id, // Store original ID type if preferred, or productId
                name: product.name,
                price: Number(product.price),
                image: product.image,
                quantity: 1,
                size: product.size || 'M',
                color: product.color || 'Default',
                originalPrice: product.originalPrice
            });
        }

        this.save();
        this.notify();
    }

    // Remove item by index (legacy)
    removeItem(index) {
        if (index >= 0 && index < this.cart.length) {
            this.cart.splice(index, 1);
            this.save();
            this.notify();
        }
    }

    // Remove item by ID
    removeItemById(id) {
        const index = this.cart.findIndex(item => String(item.id) === String(id));
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.save();
            this.notify();
        }
    }

    // Update quantity by index
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

    // Update quantity by ID (absolute value or change)
    updateQuantityById(id, newQuantity) {
        const item = this.cart.find(item => String(item.id) === String(id));
        if (item) {
            if (newQuantity <= 0) {
                this.removeItemById(id);
            } else {
                item.quantity = newQuantity;
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
