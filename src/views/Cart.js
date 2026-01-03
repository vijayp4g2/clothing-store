export default function Cart() {
    // Initialize cart state
    setTimeout(() => {
        initializeCart();
    }, 0);

    return `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        /* Global Cart Styles */
        .cart-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
            position: relative;
            overflow-x: hidden;
            font-family: 'Outfit', sans-serif;
        }

        /* Animated Background Elements */
        .cart-page::before,
        .cart-page::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.15;
            animation: morphing 20s ease-in-out infinite;
        }

        .cart-page::before {
            width: 600px;
            height: 600px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            top: -200px;
            right: -200px;
            animation-delay: 0s;
        }

        .cart-page::after {
            width: 500px;
            height: 500px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            bottom: -150px;
            left: -150px;
            animation-delay: 10s;
        }

        @keyframes morphing {
            0%, 100% { 
                transform: translate(0, 0) scale(1);
                border-radius: 50%;
            }
            33% { 
                transform: translate(50px, -50px) scale(1.1);
                border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            }
            66% { 
                transform: translate(-30px, 30px) scale(0.9);
                border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%;
            }
        }

        /* Floating Particles */
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float-particle 15s linear infinite;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) translateX(0) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px) scale(1);
                opacity: 0;
            }
        }

        .cart-wrapper {
            position: relative;
            z-index: 1;
            padding: 3rem 2rem;
            max-width: 1600px;
            margin: 0 auto;
        }

        /* Header Section */
        .cart-header {
            text-align: center;
            margin-bottom: 4rem;
            animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-title {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            background: linear-gradient(135deg, #fff 0%, #667eea 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            letter-spacing: -2px;
            text-shadow: 0 0 80px rgba(102, 126, 234, 0.5);
        }

        .cart-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 400;
            letter-spacing: 0.5px;
        }

        .cart-breadcrumb {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
            font-size: 1rem;
        }

        .cart-breadcrumb a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .cart-breadcrumb a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #f093fb);
            transition: width 0.3s ease;
        }

        .cart-breadcrumb a:hover {
            color: white;
        }

        .cart-breadcrumb a:hover::after {
            width: 100%;
        }

        .cart-breadcrumb .separator {
            color: rgba(255, 255, 255, 0.3);
        }

        .cart-breadcrumb .current {
            color: white;
            font-weight: 600;
        }

        /* Main Grid Layout */
        .cart-grid {
            display: grid;
            grid-template-columns: 1fr 450px;
            gap: 2.5rem;
            align-items: start;
        }

        @media (max-width: 1200px) {
            .cart-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Cart Items Section */
        .cart-items-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .cart-item {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 2rem;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .cart-item:nth-child(1) { animation-delay: 0.1s; }
        .cart-item:nth-child(2) { animation-delay: 0.2s; }
        .cart-item:nth-child(3) { animation-delay: 0.3s; }
        .cart-item:nth-child(4) { animation-delay: 0.4s; }

        .cart-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 200% 100%;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-item:hover::before {
            transform: scaleX(1);
            animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .cart-item:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
        }

        .item-layout {
            display: flex;
            gap: 2rem;
        }

        .item-image-container {
            position: relative;
            width: 160px;
            height: 160px;
            flex-shrink: 0;
            border-radius: 20px;
            overflow: hidden;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        }

        .item-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-item:hover .item-image {
            transform: scale(1.2) rotate(3deg);
        }

        .item-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            padding: 0.4rem 0.9rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(245, 87, 108, 0.5);
            animation: pulse-badge 2s ease-in-out infinite;
        }

        @keyframes pulse-badge {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
        }

        .item-details {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
        }

        .item-name {
            font-size: 1.5rem;
            font-weight: 800;
            color: white;
            margin: 0;
            line-height: 1.3;
            transition: all 0.3s ease;
        }

        .item-name a {
            color: inherit;
            text-decoration: none;
            background: linear-gradient(135deg, white, #667eea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s ease;
        }

        .item-name a:hover {
            background: linear-gradient(135deg, #667eea, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .remove-btn {
            background: rgba(255, 71, 87, 0.1);
            border: 1px solid rgba(255, 71, 87, 0.3);
            color: #ff4757;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .remove-btn:hover {
            background: #ff4757;
            color: white;
            transform: rotate(90deg) scale(1.1);
            box-shadow: 0 8px 20px rgba(255, 71, 87, 0.4);
        }

        .item-meta {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .meta-badge {
            padding: 0.5rem 1.2rem;
            background: rgba(102, 126, 234, 0.15);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
            color: #a8b3ff;
        }

        .item-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .quantity-control {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(102, 126, 234, 0.1);
            border: 1px solid rgba(102, 126, 234, 0.3);
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
        }

        .qty-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-size: 1.3rem;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .qty-btn:hover:not(:disabled) {
            transform: scale(1.15);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }

        .qty-btn:active:not(:disabled) {
            transform: scale(0.95);
        }

        .qty-btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

        .qty-display {
            min-width: 50px;
            text-align: center;
            font-weight: 800;
            font-size: 1.2rem;
            color: white;
        }

        .item-pricing {
            text-align: right;
        }

        .item-price {
            font-size: 2rem;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        .item-original-price {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.4);
            text-decoration: line-through;
            margin-top: 0.5rem;
        }

        /* Summary Sidebar */
        .cart-summary {
            position: sticky;
            top: 2rem;
            animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .summary-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 28px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .summary-title {
            font-size: 2rem;
            font-weight: 800;
            color: white;
            margin: 0 0 2rem 0;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
        }

        .summary-row .label {
            font-weight: 500;
        }

        .summary-row .value {
            font-weight: 700;
            color: white;
        }

        .summary-row.highlight {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 12px;
            padding: 1rem 1.5rem;
            margin: 0.5rem 0;
            color: #10b981;
        }

        .summary-row.highlight .value {
            color: #10b981;
        }

        .summary-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            margin: 1.5rem 0;
        }

        .summary-total {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.5rem 0;
        }

        .summary-total .label {
            font-size: 1.4rem;
            font-weight: 800;
            color: white;
        }

        .summary-total .value {
            font-size: 2.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Promo Code Section */
        .promo-section {
            margin: 1.5rem 0;
        }

        .promo-toggle {
            width: 100%;
            padding: 1.2rem;
            background: transparent;
            border: 2px dashed rgba(102, 126, 234, 0.4);
            border-radius: 14px;
            color: #a8b3ff;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            font-size: 1rem;
        }

        .promo-toggle:hover {
            background: rgba(102, 126, 234, 0.1);
            border-color: #667eea;
            color: white;
        }

        .promo-input-group {
            display: none;
            margin-top: 1rem;
            gap: 0.75rem;
        }

        .promo-input-group.active {
            display: flex;
        }

        .promo-input {
            flex: 1;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(102, 126, 234, 0.3);
            border-radius: 14px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .promo-input::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }

        .promo-input:focus {
            outline: none;
            border-color: #667eea;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
        }

        .promo-apply-btn {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .promo-apply-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .promo-applied {
            padding: 1.2rem;
            background: rgba(102, 126, 234, 0.15);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .promo-applied .text {
            color: #a8b3ff;
            font-weight: 700;
        }

        .promo-remove-btn {
            background: none;
            border: none;
            color: #ff4757;
            cursor: pointer;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .promo-remove-btn:hover {
            color: #ff6b81;
            transform: scale(1.1);
        }

        /* Action Buttons */
        .checkout-btn {
            width: 100%;
            padding: 1.5rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 16px;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
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
            width: 500px;
            height: 500px;
        }

        .checkout-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 45px rgba(102, 126, 234, 0.6);
        }

        .checkout-btn span {
            position: relative;
            z-index: 1;
        }

        .continue-btn {
            width: 100%;
            padding: 1.2rem;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            border-radius: 16px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .continue-btn:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.4);
        }

        /* Trust Badges */
        .trust-section {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }

        .trust-item {
            text-align: center;
        }

        .trust-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }

        .trust-text {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 600;
            line-height: 1.4;
        }

        /* Empty Cart State */
        .empty-cart {
            text-align: center;
            padding: 5rem 2rem;
            animation: fadeIn 0.8s ease;
        }

        .empty-icon {
            font-size: 10rem;
            margin-bottom: 2rem;
            opacity: 0.4;
            animation: float-icon 3s ease-in-out infinite;
        }

        @keyframes float-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .empty-cart h2 {
            font-size: 3rem;
            font-weight: 900;
            background: linear-gradient(135deg, white, #667eea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }

        .empty-cart p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 3rem;
        }

        .shop-btn {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 3rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
        }

        .shop-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 45px rgba(102, 126, 234, 0.6);
        }

        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-80px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(80px);
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
                transform: translateX(150%) scale(0.8);
            }
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 1.2rem 2rem;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 1000;
            animation: slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            color: white;
            font-weight: 600;
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

        /* Responsive Design */
        @media (max-width: 768px) {
            .cart-wrapper {
                padding: 2rem 1rem;
            }

            .cart-title {
                font-size: 2.5rem;
            }

            .item-layout {
                flex-direction: column;
            }

            .item-image-container {
                width: 100%;
                height: 220px;
            }

            .item-actions {
                flex-direction: column;
                gap: 1rem;
                align-items: stretch;
            }

            .item-pricing {
                text-align: left;
            }

            .trust-section {
                grid-template-columns: 1fr;
                gap: 1rem;
            }

            .cart-summary {
                position: static;
            }
        }

        /* Related Products Section */
        .related-section {
            margin-top: 4rem;
        }

        .related-title {
            font-size: 2rem;
            font-weight: 800;
            color: white;
            margin-bottom: 2rem;
            text-align: center;
        }

        .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
        }

        .related-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .related-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
        }

        .related-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .related-card:hover .related-image {
            transform: scale(1.1);
        }

        .related-info {
            padding: 1.5rem;
        }

        .related-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: white;
            margin: 0 0 1rem 0;
        }

        .related-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .related-price {
            font-size: 1.3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .add-to-cart-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .add-to-cart-btn:hover {
            transform: scale(1.15);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }
    </style>

    <div class="cart-page">
        <!-- Floating Particles -->
        <div class="particles">
            ${Array.from({ length: 20 }, (_, i) => `
                <div class="particle" style="left: ${Math.random() * 100}%; animation-delay: ${Math.random() * 15}s;"></div>
            `).join('')}
        </div>

        <div class="cart-wrapper">
            <!-- Header -->
            <div class="cart-header">
                <h1 class="cart-title">🛒 Your Cart</h1>
                <p class="cart-subtitle">Review your selections and complete your order</p>
                <div class="cart-breadcrumb">
                    <a href="/">Home</a>
                    <span class="separator">•</span>
                    <a href="/shop">Shop</a>
                    <span class="separator">•</span>
                    <span class="current">Cart</span>
                </div>
            </div>

            <!-- Cart Content -->
            <div id="cart-content"></div>
        </div>
    </div>
    `;
}

// State management
let currentDiscount = 0;

function initializeCart() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;

    // Get cart items
    let cartItems = window.cart ? window.cart.cart : JSON.parse(localStorage.getItem('cart') || '[]');

    // Listen for cart updates
    window.addEventListener('cartUpdated', () => {
        cartItems = window.cart ? window.cart.cart : JSON.parse(localStorage.getItem('cart') || '[]');
        if (cartItems.length === 0) {
            renderEmptyCart(cartContent);
        } else {
            renderCart(cartContent, cartItems, currentDiscount);
        }
    });

    // Initial render
    if (cartItems.length === 0) {
        renderEmptyCart(cartContent);
    } else {
        renderCart(cartContent, cartItems, currentDiscount);
    }

    // Setup promo code toggle
    setTimeout(() => {
        setupPromoToggle();
    }, 100);
}

function renderEmptyCart(container) {
    container.innerHTML = `
        <div class="empty-cart">
            <div class="empty-icon">🛍️</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <button class="shop-btn" onclick="window.location.href='/shop'">
                <span>Start Shopping</span>
                <span>→</span>
            </button>

            <!-- Trending Products -->
            <div class="related-section">
                <h3 class="related-title">✨ Trending Now</h3>
                ${renderRelatedProducts()}
            </div>
        </div>
    `;
}

function renderCart(container, cart, discountPercent = 0) {
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
    const baseDiscount = subtotal * 0.1; // 10% auto discount
    const promoDiscountAmount = (subtotal - baseDiscount) * (discountPercent / 100);
    const totalDiscount = baseDiscount + promoDiscountAmount;
    const shipping = subtotal > 5000 ? 0 : 200;
    const tax = (subtotal - totalDiscount) * 0.18; // 18% GST
    const total = subtotal - totalDiscount + shipping + tax;

    container.innerHTML = `
        <div class="cart-grid">
            <!-- Cart Items -->
            <div class="cart-items-container">
                ${cart.map((item, index) => `
                    <div class="cart-item" data-item-id="${item.id}">
                        <div class="item-layout">
                            <div class="item-image-container">
                                <a href="/product/${item.id}">
                                    <img src="${item.image || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400'}" 
                                         alt="${item.name}" 
                                         class="item-image">
                                </a>
                                ${item.discount ? `<div class="item-badge">${item.discount}% OFF</div>` : ''}
                            </div>
                            <div class="item-details">
                                <div class="item-header">
                                    <h3 class="item-name">
                                        <a href="/product/${item.id}">${item.name}</a>
                                    </h3>
                                    <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M18 6L6 18M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="item-meta">
                                    ${item.size ? `<span class="meta-badge">Size: ${item.size}</span>` : ''}
                                    ${item.color ? `<span class="meta-badge">Color: ${item.color}</span>` : ''}
                                </div>
                                <div class="item-actions">
                                    <div class="quantity-control">
                                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
                                        <span class="qty-display">${item.quantity}</span>
                                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                                    </div>
                                    <div class="item-pricing">
                                        <div class="item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                                        ${item.originalPrice ? `<div class="item-original-price">₹${(item.originalPrice * item.quantity).toLocaleString('en-IN')}</div>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}

                <!-- Related Products -->
                <div class="related-section">
                    <h3 class="related-title">💎 You Might Also Like</h3>
                    ${renderRelatedProducts()}
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
                <div class="summary-card">
                    <h2 class="summary-title">Order Summary</h2>

                    <div class="summary-row">
                        <span class="label">Subtotal (${cart.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                        <span class="value">₹${subtotal.toLocaleString('en-IN')}</span>
                    </div>

                    <div class="summary-row highlight">
                        <span class="label">🎉 Auto Discount (10%)</span>
                        <span class="value">-₹${baseDiscount.toLocaleString('en-IN')}</span>
                    </div>

                    ${discountPercent > 0 ? `
                    <div class="summary-row highlight" style="background: rgba(118, 75, 162, 0.1); border-color: rgba(118, 75, 162, 0.3); color: #b794f6;">
                        <span class="label">🏷️ Promo Code (${discountPercent}%)</span>
                        <span class="value" style="color: #b794f6;">-₹${promoDiscountAmount.toLocaleString('en-IN')}</span>
                    </div>
                    ` : ''}

                    <div class="summary-row">
                        <span class="label">Shipping</span>
                        <span class="value">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
                    </div>

                    <div class="summary-row">
                        <span class="label">Tax (GST 18%)</span>
                        <span class="value">₹${tax.toLocaleString('en-IN')}</span>
                    </div>

                    <div class="summary-divider"></div>

                    <div class="summary-total">
                        <span class="label">Total</span>
                        <span class="value">₹${Math.round(total).toLocaleString('en-IN')}</span>
                    </div>

                    <!-- Promo Code -->
                    <div class="promo-section">
                        ${discountPercent > 0 ? `
                            <div class="promo-applied">
                                <span class="text">✓ Code Applied!</span>
                                <button class="promo-remove-btn" onclick="removePromoCode()">Remove</button>
                            </div>
                        ` : `
                            <button class="promo-toggle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                                Have a promo code?
                            </button>
                            <div class="promo-input-group">
                                <input type="text" class="promo-input" placeholder="Enter code" id="promo-code">
                                <button class="promo-apply-btn" onclick="applyPromoCode()">Apply</button>
                            </div>
                        `}
                    </div>

                    <!-- Action Buttons -->
                    <button class="checkout-btn" onclick="proceedToCheckout()">
                        <span>Proceed to Checkout →</span>
                    </button>
                    <button class="continue-btn" onclick="window.location.href='/shop'">
                        Continue Shopping
                    </button>

                    <!-- Trust Badges -->
                    <div class="trust-section">
                        <div class="trust-item">
                            <span class="trust-icon">🔒</span>
                            <div class="trust-text">Secure<br>Payment</div>
                        </div>
                        <div class="trust-item">
                            <span class="trust-icon">🚚</span>
                            <div class="trust-text">Free<br>Shipping</div>
                        </div>
                        <div class="trust-item">
                            <span class="trust-icon">↩️</span>
                            <div class="trust-text">Easy<br>Returns</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderRelatedProducts() {
    const relatedProducts = [
        { id: 101, name: 'Premium Cotton T-Shirt', price: 1299, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
        { id: 102, name: 'Slim Fit Chinos', price: 2499, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400' },
        { id: 103, name: 'Classic Denim Jacket', price: 3999, image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400' },
    ];

    return `
        <div class="related-grid">
            ${relatedProducts.map(product => `
                <div class="related-card">
                    <a href="/product/${product.id}">
                        <img src="${product.image}" alt="${product.name}" class="related-image">
                    </a>
                    <div class="related-info">
                        <h4 class="related-name">${product.name}</h4>
                        <div class="related-footer">
                            <span class="related-price">₹${product.price.toLocaleString('en-IN')}</span>
                            <button class="add-to-cart-btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" aria-label="Add to cart">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function setupPromoToggle() {
    const promoToggle = document.querySelector('.promo-toggle');
    const promoInputGroup = document.querySelector('.promo-input-group');

    if (promoToggle && promoInputGroup) {
        promoToggle.addEventListener('click', () => {
            promoInputGroup.classList.toggle('active');
            promoToggle.style.display = promoInputGroup.classList.contains('active') ? 'none' : 'flex';
        });
    }
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) return;

    if (window.cart) {
        window.cart.updateQuantityById(itemId, newQuantity);
        showToast('Quantity updated successfully', 'success');
    } else {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new CustomEvent('cartUpdated'));
            showToast('Quantity updated successfully', 'success');
        }
    }
}

function removeFromCart(itemId) {
    const itemCard = document.querySelector(`[data-item-id="${itemId}"]`);

    if (itemCard) {
        itemCard.classList.add('item-removing');

        setTimeout(() => {
            if (window.cart) {
                window.cart.removeItemById(itemId);
            } else {
                let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                cart = cart.filter(item => item.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.dispatchEvent(new CustomEvent('cartUpdated'));
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
        'FIRST': 25,
        'HOLIDAY': 30
    };

    if (code && validCodes[code]) {
        currentDiscount = validCodes[code];
        showToast(`🎉 Promo code applied! You saved ${currentDiscount}%`, 'success');

        const cartContent = document.getElementById('cart-content');
        const cartItems = window.cart ? window.cart.cart : JSON.parse(localStorage.getItem('cart') || '[]');
        renderCart(cartContent, cartItems, currentDiscount);
    } else {
        showToast('❌ Invalid promo code', 'error');
    }
}

function removePromoCode() {
    currentDiscount = 0;
    showToast('Promo code removed', 'success');
    const cartContent = document.getElementById('cart-content');
    const cartItems = window.cart ? window.cart.cart : JSON.parse(localStorage.getItem('cart') || '[]');
    renderCart(cartContent, cartItems, currentDiscount);
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
        <span>${message}</span>
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
window.removePromoCode = removePromoCode;
window.proceedToCheckout = proceedToCheckout;
