export default function Cart() {
    // Initialize cart state
    setTimeout(() => {
        initializeCart();
    }, 0);

    return `
    <style>
        /* Modern Cart Container */
        .cart-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
        }

        .cart-page::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            border-radius: 50%;
            top: -200px;
            right: -200px;
            animation: float 20s ease-in-out infinite;
        }

        .cart-page::after {
            content: '';
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
            border-radius: 50%;
            bottom: -150px;
            left: -150px;
            animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .cart-wrapper {
            position: relative;
            z-index: 1;
            padding: 2rem 1rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Header Section */
        .cart-hero {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: white;
            margin-bottom: 0.5rem;
            text-shadow: 0 4px 20px rgba(0,0,0,0.2);
            letter-spacing: -1px;
        }

        .cart-hero .subtitle {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.9);
            font-weight: 500;
        }

        .cart-breadcrumb {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-top: 1rem;
            color: rgba(255,255,255,0.8);
            font-size: 0.95rem;
        }

        .cart-breadcrumb a {
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .cart-breadcrumb a:hover {
            transform: translateX(-3px);
        }

        /* Main Grid Layout */
        .cart-grid {
            display: grid;
            grid-template-columns: 1fr 420px;
            gap: 2rem;
            align-items: start;
        }

        @media (max-width: 1024px) {
            .cart-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Cart Items Section */
        .cart-items-section {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .cart-item-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 1.75rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border: 1px solid rgba(255,255,255,0.3);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .cart-item-card:nth-child(1) { animation-delay: 0.1s; }
        .cart-item-card:nth-child(2) { animation-delay: 0.2s; }
        .cart-item-card:nth-child(3) { animation-delay: 0.3s; }
        .cart-item-card:nth-child(4) { animation-delay: 0.4s; }

        .cart-item-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-item-card:hover::before {
            transform: scaleX(1);
        }

        .cart-item-card:hover {
            transform: translateY(-8px) scale(1.01);
            box-shadow: 0 30px 80px rgba(102, 126, 234, 0.25);
        }

        .item-content {
            display: flex;
            gap: 1.5rem;
        }

        .item-image-wrapper {
            position: relative;
            width: 140px;
            height: 140px;
            flex-shrink: 0;
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .item-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-item-card:hover .item-image {
            transform: scale(1.15) rotate(2deg);
        }

        .item-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 0.35rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(245, 87, 108, 0.4);
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .item-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            gap: 1rem;
        }

        .item-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: #1a1a2e;
            line-height: 1.3;
            margin: 0;
        }

        .item-remove {
            background: transparent;
            border: none;
            color: #ff4757;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
        }

        .item-remove:hover {
            background: rgba(255, 71, 87, 0.1);
            transform: rotate(90deg) scale(1.1);
        }

        .item-meta {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .meta-tag {
            padding: 0.4rem 1rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #667eea;
            border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .item-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: 1rem;
            border-top: 1px solid rgba(0,0,0,0.08);
        }

        .quantity-selector {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            border: 2px solid rgba(102, 126, 234, 0.2);
        }

        .qty-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .qty-btn:hover {
            transform: scale(1.15);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .qty-btn:active {
            transform: scale(0.95);
        }

        .qty-value {
            min-width: 45px;
            text-align: center;
            font-weight: 800;
            font-size: 1.15rem;
            color: #1a1a2e;
        }

        .item-price-section {
            text-align: right;
        }

        .item-price {
            font-size: 1.75rem;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        .item-original-price {
            font-size: 0.95rem;
            color: #999;
            text-decoration: line-through;
            margin-top: 0.25rem;
        }

        /* Summary Sidebar */
        .cart-summary {
            position: sticky;
            top: 2rem;
            animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .summary-card {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .summary-header {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid rgba(102, 126, 234, 0.15);
        }

        .summary-header h2 {
            font-size: 1.75rem;
            font-weight: 800;
            color: #1a1a2e;
            margin: 0;
        }

        .summary-rows {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1rem;
            color: #4a5568;
        }

        .summary-row.highlight {
            padding: 1rem;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
            border-radius: 12px;
            color: #059669;
            font-weight: 700;
        }

        .summary-row .label {
            font-weight: 600;
        }

        .summary-row .value {
            font-weight: 700;
        }

        .summary-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
            margin: 1.5rem 0;
        }

        .summary-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
            border-radius: 16px;
            margin-bottom: 1.5rem;
        }

        .summary-total .label {
            font-size: 1.25rem;
            font-weight: 800;
            color: #1a1a2e;
        }

        .summary-total .value {
            font-size: 2rem;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Promo Code Section */
        .promo-section {
            margin-bottom: 1.5rem;
        }

        .promo-toggle {
            width: 100%;
            padding: 1rem;
            background: transparent;
            border: 2px dashed rgba(102, 126, 234, 0.3);
            border-radius: 12px;
            color: #667eea;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .promo-toggle:hover {
            background: rgba(102, 126, 234, 0.05);
            border-color: #667eea;
        }

        .promo-input-wrapper {
            display: none;
            margin-top: 1rem;
            gap: 0.75rem;
        }

        .promo-input-wrapper.active {
            display: flex;
        }

        .promo-input {
            flex: 1;
            padding: 0.875rem 1.25rem;
            border: 2px solid rgba(102, 126, 234, 0.3);
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            transition: all 0.3s ease;
            background: white;
        }

        .promo-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .promo-apply-btn {
            padding: 0.875rem 1.75rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .promo-apply-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        /* Action Buttons */
        .checkout-btn {
            width: 100%;
            padding: 1.25rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 16px;
            font-size: 1.15rem;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
            margin-bottom: 1rem;
        }

        .checkout-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease;
        }

        .checkout-btn:hover::before {
            width: 400px;
            height: 400px;
        }

        .checkout-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
        }

        .checkout-btn:active {
            transform: translateY(-1px);
        }

        .continue-shopping-btn {
            width: 100%;
            padding: 1rem;
            background: transparent;
            border: 2px solid rgba(255,255,255,0.5);
            color: white;
            border-radius: 16px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .continue-shopping-btn:hover {
            background: rgba(255,255,255,0.1);
            border-color: white;
        }

        /* Trust Badges */
        .trust-badges {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(0,0,0,0.08);
        }

        .trust-badge {
            text-align: center;
        }

        .trust-icon {
            font-size: 1.75rem;
            margin-bottom: 0.5rem;
            display: block;
        }

        .trust-text {
            font-size: 0.75rem;
            color: #666;
            font-weight: 600;
            line-height: 1.3;
        }

        /* Empty Cart State */
        .empty-cart {
            text-align: center;
            padding: 4rem 2rem;
            animation: fadeIn 0.8s ease;
        }

        .empty-cart-icon {
            font-size: 8rem;
            margin-bottom: 1.5rem;
            opacity: 0.3;
            animation: float 3s ease-in-out infinite;
        }

        .empty-cart h2 {
            font-size: 2.5rem;
            font-weight: 900;
            color: white;
            margin-bottom: 1rem;
        }

        .empty-cart p {
            font-size: 1.15rem;
            color: rgba(255,255,255,0.8);
            margin-bottom: 2rem;
        }

        .shop-now-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 2.5rem;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .shop-now-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }

        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .item-removing {
            animation: slideOutRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideOutRight {
            to {
                opacity: 0;
                transform: translateX(100%) scale(0.8);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .cart-wrapper {
                padding: 1.5rem 1rem;
            }

            .cart-hero h1 {
                font-size: 2.5rem;
            }

            .item-content {
                flex-direction: column;
            }

            .item-image-wrapper {
                width: 100%;
                height: 200px;
            }

            .item-footer {
                flex-direction: column;
                gap: 1rem;
                align-items: stretch;
            }

            .item-price-section {
                text-align: left;
            }

            .trust-badges {
                grid-template-columns: 1fr;
                gap: 0.75rem;
            }

            .cart-summary {
                position: static;
            }
        }

        /* Loading State */
        .skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s ease-in-out infinite;
        }

        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 1000;
            animation: slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(100px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .toast.success {
            border-left: 4px solid #10b981;
        }

        .toast.error {
            border-left: 4px solid #ff4757;
        }
    </style>

    <div class="cart-page">
        <div class="cart-wrapper">
            <!-- Hero Section -->
            <div class="cart-hero">
                <h1>🛒 Shopping Cart</h1>
                <p class="subtitle">Review your items and proceed to checkout</p>
                <div class="cart-breadcrumb">
                    <a href="/">Home</a>
                    <span>→</span>
                    <a href="/shop">Shop</a>
                    <span>→</span>
                    <span>Cart</span>
                </div>
            </div>

            <!-- Cart Content -->
            <div id="cart-content">
                <!-- Will be populated by JavaScript -->
            </div>
        </div>
    </div>
    `;
}

function initializeCart() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;

    // Get cart and validate items
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Filter out invalid items (missing required fields)
    const validCart = cart.filter(item =>
        item &&
        typeof item === 'object' &&
        item.id &&
        item.name &&
        typeof item.price === 'number' &&
        !isNaN(item.price)
    );

    // Update localStorage if we filtered out any invalid items
    if (validCart.length !== cart.length) {
        localStorage.setItem('cart', JSON.stringify(validCart));
        cart = validCart;
    }

    if (cart.length === 0) {
        renderEmptyCart(cartContent);
    } else {
        renderCart(cartContent, cart);
    }

    // Add promo code toggle functionality
    setTimeout(() => {
        const promoToggle = document.querySelector('.promo-toggle');
        const promoInputWrapper = document.querySelector('.promo-input-wrapper');

        if (promoToggle && promoInputWrapper) {
            promoToggle.addEventListener('click', () => {
                promoInputWrapper.classList.toggle('active');
                promoToggle.style.display = promoInputWrapper.classList.contains('active') ? 'none' : 'flex';
            });
        }
    }, 100);
}

function renderEmptyCart(container) {
    container.innerHTML = `
        <div class="empty-cart">
            <div class="empty-cart-icon">🛍️</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <button class="shop-now-btn" onclick="window.location.href='/shop'">
                <span>Start Shopping</span>
                <span>→</span>
            </button>
        </div>
    `;
}

function renderCart(container, cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * 0.1; // 10% discount
    const shipping = subtotal > 5000 ? 0 : 200;
    const tax = (subtotal - discount) * 0.18; // 18% GST
    const total = subtotal - discount + shipping + tax;

    container.innerHTML = `
        <div class="cart-grid">
            <!-- Cart Items -->
            <div class="cart-items-section">
                ${cart.map((item, index) => `
                    <div class="cart-item-card" data-item-id="${item.id}">
                        <div class="item-content">
                            <div class="item-image-wrapper">
                                <img src="${item.image || 'https://via.placeholder.com/140'}" alt="${item.name}" class="item-image">
                                ${item.discount ? `<div class="item-badge">${item.discount}% OFF</div>` : ''}
                            </div>
                            <div class="item-info">
                                <div class="item-header">
                                    <h3 class="item-title">${item.name}</h3>
                                    <button class="item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M18 6L6 18M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="item-meta">
                                    ${item.size ? `<span class="meta-tag">Size: ${item.size}</span>` : ''}
                                    ${item.color ? `<span class="meta-tag">Color: ${item.color}</span>` : ''}
                                </div>
                                <div class="item-footer">
                                    <div class="quantity-selector">
                                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
                                        <span class="qty-value">${item.quantity}</span>
                                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                                    </div>
                                    <div class="item-price-section">
                                        <div class="item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                                        ${item.originalPrice ? `<div class="item-original-price">₹${(item.originalPrice * item.quantity).toLocaleString('en-IN')}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
                <div class="summary-card">
                    <div class="summary-header">
                        <h2>Order Summary</h2>
                    </div>

                    <div class="summary-rows">
                        <div class="summary-row">
                            <span class="label">Subtotal (${cart.length} items)</span>
                            <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div class="summary-row highlight">
                            <span class="label">🎉 Discount (10%)</span>
                            <span class="value">-₹${discount.toLocaleString('en-IN')}</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Shipping</span>
                            <span class="value">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Tax (GST 18%)</span>
                            <span class="value">₹${tax.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <div class="summary-divider"></div>

                    <div class="summary-total">
                        <span class="label">Total</span>
                        <span class="value">₹${total.toLocaleString('en-IN')}</span>
                    </div>

                    <!-- Promo Code -->
                    <div class="promo-section">
                        <button class="promo-toggle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                                <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                                <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                            </svg>
                            Have a promo code?
                        </button>
                        <div class="promo-input-wrapper">
                            <input type="text" class="promo-input" placeholder="Enter code" id="promo-code">
                            <button class="promo-apply-btn" onclick="applyPromoCode()">Apply</button>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <button class="checkout-btn" onclick="proceedToCheckout()">
                        <span style="position: relative; z-index: 1;">Proceed to Checkout →</span>
                    </button>
                    <button class="continue-shopping-btn" onclick="window.location.href='/shop'">
                        Continue Shopping
                    </button>

                    <!-- Trust Badges -->
                    <div class="trust-badges">
                        <div class="trust-badge">
                            <span class="trust-icon">🔒</span>
                            <div class="trust-text">Secure Payment</div>
                        </div>
                        <div class="trust-badge">
                            <span class="trust-icon">🚚</span>
                            <div class="trust-text">Free Shipping</div>
                        </div>
                        <div class="trust-badge">
                            <span class="trust-icon">↩️</span>
                            <div class="trust-text">Easy Returns</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count in navbar
        window.dispatchEvent(new CustomEvent('cartUpdated'));

        // Re-render cart
        const cartContent = document.getElementById('cart-content');
        if (cartContent) {
            renderCart(cartContent, cart);
        }

        showToast('Quantity updated', 'success');
    }
}

function removeFromCart(itemId) {
    const itemCard = document.querySelector(`[data-item-id="${itemId}"]`);

    if (itemCard) {
        itemCard.classList.add('item-removing');

        setTimeout(() => {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update cart count in navbar
            window.dispatchEvent(new CustomEvent('cartUpdated'));

            // Re-render cart
            const cartContent = document.getElementById('cart-content');
            if (cartContent) {
                if (cart.length === 0) {
                    renderEmptyCart(cartContent);
                } else {
                    renderCart(cartContent, cart);
                }
            }

            showToast('Item removed from cart', 'success');
        }, 500);
    }
}

function applyPromoCode() {
    const promoInput = document.getElementById('promo-code');
    const code = promoInput?.value.trim().toUpperCase();

    const validCodes = {
        'SAVE10': 10,
        'SAVE20': 20,
        'WELCOME': 15,
        'FIRST': 25
    };

    if (code && validCodes[code]) {
        showToast(`Promo code applied! You saved ${validCodes[code]}%`, 'success');
        // In a real app, you'd update the cart totals here
    } else {
        showToast('Invalid promo code', 'error');
    }
}

function proceedToCheckout() {
    showToast('Redirecting to checkout...', 'success');
    setTimeout(() => {
        window.location.href = '/checkout';
    }, 1000);
}

function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span style="font-size: 1.5rem;">${type === 'success' ? '✓' : '✕'}</span>
        <span style="font-weight: 600;">${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.applyPromoCode = applyPromoCode;
window.proceedToCheckout = proceedToCheckout;
