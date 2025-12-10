
// Update badges function defined outside to prevent re-declaration
function updateBadges() {
  // Cart Badge
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }

  // Wishlist Badge
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  const wishlistCount = wishlist.length;
  const wishlistBadge = document.getElementById('wishlist-badge');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlistCount;
    wishlistBadge.style.display = wishlistCount > 0 ? 'flex' : 'none';
  }
}

// Global listeners (registered once when module is imported)
window.addEventListener('cartUpdated', updateBadges);
window.addEventListener('wishlistUpdated', updateBadges);
// Optional: Update on storage changes (for multi-tab sync)
window.addEventListener('storage', (e) => {
  if (e.key === 'cart' || e.key === 'wishlist') updateBadges();
});

export default function Navbar() {
  // Trigger badge update after render
  setTimeout(updateBadges, 50);

  return `
    <header class="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 group">
            <div class="relative flex items-center justify-center size-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <span class="font-bold text-xl">C</span>
            </div>
            <span class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Chetan<span class="text-primary">.</span></span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/5 p-1.5 backdrop-blur-sm">
            <a class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all duration-300" href="/">Home</a>
            <a class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all duration-300" href="/shop">Shop</a>
            <a class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all duration-300" href="/new-arrivals">New Arrivals</a>
            <a class="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all duration-300" href="/about">About</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-3">
            <button class="flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">search</span>
            </button>
            <a href="/wishlist" class="group relative flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-colors" title="Wishlist">
              <span class="material-symbols-outlined">favorite_border</span>
              <span id="wishlist-badge" class="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white group-hover:bg-white group-hover:text-primary transition-colors" style="display: none;">0</span>
            </a>
            <a href="/cart" class="group relative flex items-center justify-center size-10 rounded-full bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-all duration-300">
              <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span id="cart-badge" class="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white group-hover:bg-white group-hover:text-primary transition-colors" style="display: none;">0</span>
            </a>
            <button class="md:hidden flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  `;
}
