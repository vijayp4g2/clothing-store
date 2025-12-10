import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import Shop from './views/Shop.js';
import Product from './views/Product.js';
import Cart from './views/Cart.js';
import Checkout from './views/Checkout.js';
import About from './views/About.js';
import NewArrivals from './views/NewArrivals.js';
import Admin from './views/Admin.js';

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
    // Simple router: match exact path, fallback to Home for root, or handle 404 (using Home for now for simplicity)
    // We also handle paths like "/clothing-store/shop" if the site is not at root, but here we assume root or relative consistency.
    // For local file testing (file protocol), pathname is full path. This router expects HTTP server.
    // If the user is running from file://, this SPA won't work well without a hash router.
    // Assuming "Web Application" context implies a server (npm run dev).

    // Normalize path to handle trailing slash or specific deployment subpaths if needed?
    // For now, exact match against keys.

    let View = routes[path] || routes['/'];
    if (!View) {
        // loose matching for demo purposes if path logic is complex
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
            ${Navbar()}
            <main class="flex-grow">
                ${viewContent}
            </main>
            ${Footer()}
        `;
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
