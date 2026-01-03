import Navbar, { setupNavbar } from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import Shop from './views/Shop.js';
import Product from './views/Product.js';
import Cart from './views/Cart.js';
import Checkout from './views/Checkout.js';
import About from './views/About.js';
import NewArrivals from './views/NewArrivals.js';
import Admin from './views/Admin.js';
import { initShop } from './views/ShopLogic.js';

import Wishlist from './views/Wishlist.js';
import './services/CartManager.js';

const routes = {
    '/': Home,
    '/index.html': Home,
    '/shop': Shop,
    '/shop.html': Shop,
    '/new-arrivals': NewArrivals,
    '/new-arrivals.html': NewArrivals,
    '/product': Product,
    '/product.html': Product,
    '/cart': Cart,
    '/cart.html': Cart,
    '/checkout': Checkout,
    '/checkout.html': Checkout,
    '/about': About,
    '/about.html': About,
    '/wishlist': Wishlist,
    '/wishlist.html': Wishlist,
    '/admin': Admin,
    '/admin.html': Admin,
};

const app = document.querySelector('#app');

function navigateTo(url) {
    history.pushState(null, null, url);
    render();
}

async function render() {
    const path = window.location.pathname;

    let View = routes[path];

    if (!View) {
        // loose matching for dynamic routes
        if (path.includes('new-arrivals')) View = NewArrivals;
        else if (path.includes('admin')) View = Admin;
        else if (path.includes('shop')) View = Shop;
        else if (path.includes('product')) View = Product;
        else if (path.includes('cart')) View = Cart;
        else if (path.includes('checkout')) View = Checkout;
        else if (path.includes('about')) View = About;
        else if (path.includes('wishlist')) View = Wishlist;
        else View = Home;
    }

    const viewContent = await View();

    // Admin panel has its own layout without navbar/footer
    const isAdmin = path.includes('admin');

    if (isAdmin) {
        app.innerHTML = viewContent;
    } else {
        app.innerHTML = `
            ${Navbar(path)}
            <main class="flex-grow">
                ${viewContent}
            </main>
            ${Footer()}
            
            <!-- Quick View Modal (Global) -->
            <div id="quick-view-modal" class="modal">
                <div class="modal-overlay" onclick="closeQuickView()"></div>
                <div class="modal-content">
                    <button class="modal-close" onclick="closeQuickView()">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                    <div id="quick-view-content" class="quick-view-content">
                        <div class="loading">Loading...</div>
                    </div>
                </div>
            </div>
        `;
        setupNavbar();
        // Initialize global interactions (Toast, Wishlist, Quick View, etc.)
        setTimeout(initShop, 50);
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);
}

// Handle browser back/forward
window.addEventListener('popstate', render);

// Handle clicks for SPA navigation
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('a')) {
            const link = e.target.matches('a') ? e.target : e.target.closest('a');
            if (link && link.href && link.href.startsWith(window.location.origin)) {
                e.preventDefault();
                navigateTo(link.getAttribute('href'));
            }
        }
    });

    render();
});
