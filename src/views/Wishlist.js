export default function Wishlist() {
    setTimeout(() => {
        initWishlist();
    }, 0);

    return `
    <style>
        .wishlist-page {
            min-height: 80vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 2rem 1rem;
        }

        .dark .wishlist-page {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }

        .wishlist-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .wishlist-header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInDown 0.6s ease-out;
            position: relative;
        }

        .wishlist-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
        }

        .header-heart-icon {
            font-size: 2.5rem;
            color: #f5576c;
            animation: pulse-heart 1.5s infinite;
        }

        @keyframes pulse-heart {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .wishlist-controls {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-bottom: 2rem;
            animation: fadeIn 0.8s ease-out;
        }

        .control-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .clear-btn {
            background: rgba(255, 71, 87, 0.1);
            color: #ff4757;
            border: 1px solid rgba(255, 71, 87, 0.2);
        }

        .clear-btn:hover {
            background: #ff4757;
            color: white;
            box-shadow: 0 5px 15px rgba(255, 71, 87, 0.3);
        }

        .add-all-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .add-all-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .wishlist-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            perspective: 1000px;
        }

        .wishlist-item {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 1rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dark .wishlist-item {
            background: rgba(30, 30, 46, 0.9);
            border-color: rgba(255, 255, 255, 0.05);
        }

        .wishlist-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 45px rgba(245, 87, 108, 0.2);
        }

        .item-image-wrapper {
            position: relative;
            width: 100%;
            height: 250px;
            border-radius: 15px;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .item-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .wishlist-item:hover .item-image {
            transform: scale(1.1);
        }

        .remove-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ff4757;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 2;
            opacity: 0;
            transform: translateY(-10px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .wishlist-item:hover .remove-btn {
            opacity: 1;
            transform: translateY(0);
        }

        .remove-btn:hover {
            background: #ff4757;
            color: white;
            transform: rotate(90deg);
        }

        .item-details {
            padding: 0.5rem;
        }

        .item-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #2d3436;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .dark .item-name {
            color: #dfe6e9;
        }

        .item-price {
            font-size: 1.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }

        .add-to-cart-btn {
            width: 100%;
            padding: 0.8rem;
            border: none;
            border-radius: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .add-to-cart-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }

        .add-to-cart-btn:hover::before {
            left: 100%;
        }

        .add-to-cart-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .empty-wishlist {
            text-align: center;
            padding: 4rem 1rem;
            animation: fadeIn 0.6s ease-out;
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            border-radius: 20px;
        }

        .dark .empty-wishlist {
            background: rgba(30, 30, 46, 0.5);
        }

        .empty-icon {
            font-size: 6rem;
            color: #cbd5e0;
            margin-bottom: 1.5rem;
            display: block;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .empty-text {
            font-size: 1.5rem;
            color: #636e72;
            margin-bottom: 2rem;
        }

        .dark .empty-text {
            color: #b2bec3;
        }

        .browse-btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 700;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .browse-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Toast Styles are injected dynamically in initWishlist */
    </style>
    
    <div class="wishlist-page">
        <div class="wishlist-container">
            <div class="wishlist-header">
                <h1 class="wishlist-title">
                    <span class="material-symbols-outlined header-heart-icon">favorite</span>
                    My Wishlist
                </h1>
                <p>Keep track of your favorite items</p>
            </div>
            <div id="wishlist-controls-container"></div>
            <div id="wishlist-content"></div>
        </div>
    </div>
    `;
}

function initWishlist() {
    // Ensure showToast is available
    if (!window.showToast) {
        window.showToast = function (message, type = 'success') {
            const existingToast = document.querySelector('.toast-notification');
            if (existingToast) existingToast.remove();

            const toast = document.createElement('div');
            toast.className = `toast-notification toast-${type}`;
            toast.innerHTML = `
                <span class="material-symbols-outlined">${type === 'success' ? 'check_circle' : 'info'}</span>
                <span>${message}</span>
            `;
            document.body.appendChild(toast);

            // Add styles dynamically if not present
            if (!document.getElementById('toast-styles')) {
                const style = document.createElement('style');
                style.id = 'toast-styles';
                style.textContent = `
                    .toast-notification {
                        position: fixed;
                        bottom: 32px;
                        right: 32px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        padding: 16px 24px;
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                        z-index: 10000;
                        transform: translateY(100px);
                        opacity: 0;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        font-weight: 600;
                        max-width: 400px;
                    }
                    .toast-notification.show {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    .toast-success {
                        border-left: 4px solid #10b981;
                        color: #065f46;
                    }
                    .toast-info {
                        border-left: 4px solid #3b82f6;
                        color: #1e40af;
                    }
                `;
                document.head.appendChild(style);
            }

            setTimeout(() => toast.classList.add('show'), 10);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };
    }
    renderWishlist();

    // Make functions available globally for onclick handlers
    window.removeFromWishlist = removeFromWishlist;
    window.moveWishlistToCart = moveWishlistToCart;
    window.clearWishlist = clearWishlist;
    window.addAllToCart = addAllToCart;
}

function renderWishlist() {
    const container = document.getElementById('wishlist-content');
    const controlsContainer = document.getElementById('wishlist-controls-container');
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (wishlist.length === 0) {
        if (controlsContainer) controlsContainer.innerHTML = ''; // Hide controls
        container.innerHTML = `
            <div class="empty-wishlist">
                <span class="material-symbols-outlined empty-icon">favorite_border</span>
                <h2 class="empty-text">Your wishlist is empty</h2>
                <a href="/shop" class="browse-btn">Start Shopping</a>
            </div>
        `;
        return;
    }

    // Render Controls
    if (controlsContainer) {
        controlsContainer.innerHTML = `
            <div class="wishlist-controls">
                <button onclick="clearWishlist()" class="control-btn clear-btn">
                    <span class="material-symbols-outlined">delete</span> Clear All
                </button>
                <button onclick="addAllToCart()" class="control-btn add-all-btn">
                    <span class="material-symbols-outlined">shopping_cart_checkout</span> Add All to Cart
                </button>
            </div>
        `;
    }

    // Render Grid
    container.innerHTML = `
        <div class="wishlist-grid">
            ${wishlist.map((item, index) => `
                <div class="wishlist-item" style="animation-delay: ${index * 0.05}s">
                    <button class="remove-btn" onclick="removeFromWishlist('${item.id}')" title="Remove from wishlist">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                    <div class="item-image-wrapper">
                        <a href="/product/${item.id}" style="display:block; width:100%; height:100%">
                            <img src="${item.image || 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600'}" alt="${item.name}" class="item-image">
                        </a>
                    </div>
                    <div class="item-details">
                        <h3 class="item-name" title="${item.name}">
                            <a href="/product/${item.id}" style="text-decoration:none; color:inherit; transition: color 0.3s;" onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='inherit'">
                                ${item.name}
                            </a>
                        </h3>
                        <div class="item-price">₹${item.price}</div>
                        <button class="add-to-cart-btn" onclick="moveWishlistToCart('${item.id}')">
                            <span class="material-symbols-outlined">shopping_cart</span>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function removeFromWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(item => String(item.id) !== String(id));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));

    renderWishlist();
    if (window.showToast) window.showToast('Removed from wishlist', 'info');
}

function moveWishlistToCart(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const item = wishlist.find(i => String(i.id) === String(id));

    if (item) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex(i => String(i.id) === String(id));

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        if (window.showToast) window.showToast('Added to cart! 🛒', 'success');
    }
}

function clearWishlist() {
    if (confirm('Are you sure you want to clear your wishlist?')) {
        localStorage.setItem('wishlist', '[]');
        window.dispatchEvent(new Event('wishlistUpdated'));
        renderWishlist();
        if (window.showToast) window.showToast('Wishlist cleared', 'info');
    }
}

function addAllToCart() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.length === 0) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let addedCount = 0;

    wishlist.forEach(item => {
        const existingItemIndex = cart.findIndex(i => String(i.id) === String(item.id));
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        addedCount++;
    });

    if (addedCount > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        if (window.showToast) window.showToast('All items added to cart! 🛒', 'success');
    }
}
