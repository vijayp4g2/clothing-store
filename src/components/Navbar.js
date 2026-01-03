// Update badges function defined outside to prevent re-declaration
function updateBadges() {
  // Cart Badge
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    cartBadge.classList.add('animate-bounce'); // Add simple bounce on update
    setTimeout(() => cartBadge.classList.remove('animate-bounce'), 1000);
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
window.addEventListener('storage', (e) => {
  if (e.key === 'cart' || e.key === 'wishlist') updateBadges();
});

export default function Navbar(currentPath = '/') {
  // Trigger badge update after render
  setTimeout(updateBadges, 50);

  const isActive = (path) => currentPath === path
    ? 'text-primary font-bold after:w-full'
    : 'text-gray-700 dark:text-gray-200 hover:text-primary after:w-0 hover:after:w-full';

  return `
    <header id="main-header" class="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out py-4 bg-transparent">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between">
          
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 group relative z-50">
            <div class="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-tr from-primary to-orange-500 text-white shadow-lg shadow-primary/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <span class="font-display font-bold text-xl">C</span>
            </div>
            <span class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
              Chetan<span class="text-primary text-3xl leading-none">.</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8 shadow-sm border border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full px-8 py-2.5 mx-auto absolute left-1/2 -translate-x-1/2">
            ${['/', '/shop', '/new-arrivals', '/about'].map(path => {
    const label = path === '/' ? 'Home' : path.slice(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `
                <a href="${path}" class="relative text-sm font-medium transition-all duration-300 ${isActive(path)} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300">
                  ${label}
                </a>
              `;
  }).join('')}
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-2 z-50">
             <button class="group flex items-center justify-center size-11 rounded-full text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-all duration-300">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform">search</span>
            </button>
            
            <a href="/wishlist" class="group relative flex items-center justify-center size-11 rounded-full text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary transition-all duration-300">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform">favorite_border</span>
              <span id="wishlist-badge" class="absolute top-2 right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white scale-0 transition-transform duration-300" style="display: none;">0</span>
            </a>

            <a href="/cart" class="group relative flex items-center justify-center size-11 rounded-full bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ml-1">
              <span class="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_bag</span>
              <span id="cart-badge" class="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold border-2 border-white dark:border-black group-hover:border-primary transition-colors" style="display: none;">0</span>
            </a>

            <button id="mobile-menu-btn" class="md:hidden ml-2 flex items-center justify-center size-11 rounded-full text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-500 z-[60] md:hidden"></div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white dark:bg-[#0a0a0a] shadow-2xl transform translate-x-full transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-[60] md:hidden flex flex-col pt-28 pb-8 px-8 border-l border-black/5 dark:border-white/5">
      
      <!-- Decorative Circle -->
      <div class="absolute -top-24 -right-24 size-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <nav class="flex flex-col gap-2 relative">
        ${['/', '/shop', '/new-arrivals', '/about'].map((path, idx) => {
    const label = path === '/' ? 'Home' : path.slice(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `
            <a href="${path}" style="transition-delay: ${idx * 50}ms" class="mobile-link flex items-center justify-between p-4 text-lg font-medium rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 translate-x-4 opacity-0 ${currentPath === path ? 'text-primary bg-primary/5' : 'text-gray-800 dark:text-gray-200'}">
              ${label}
              <span class="material-symbols-outlined text-gray-400 text-xl">chevron_right</span>
            </a>
            `
  }).join('')}
      </nav>

      <div class="mt-auto relative">
        <div class="p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <p class="font-bold text-sm">Need Help?</p>
                <p class="text-xs text-gray-500">24/7 Support Center</p>
              </div>
            </div>
            <button class="w-full py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold shadow-lg hover:shadow-xl transition-all">
              Contact Support
            </button>
        </div>
      </div>
    </div>
  `;
}

export function setupNavbar() {
  const header = document.getElementById('main-header');
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  // Scroll Animation Logic
  if (header) {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled) {
        header.classList.remove('py-4', 'bg-transparent');
        header.classList.add('py-2', 'bg-white/80', 'dark:bg-[#0a0a0a]/90', 'backdrop-blur-xl', 'shadow-sm', 'border-b', 'border-gray-200/50', 'dark:border-white/5');
      } else {
        header.classList.add('py-4', 'bg-transparent');
        header.classList.remove('py-2', 'bg-white/80', 'dark:bg-[#0a0a0a]/90', 'backdrop-blur-xl', 'shadow-sm', 'border-b', 'border-gray-200/50', 'dark:border-white/5');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
  }

  if (btn && menu && overlay) {
    const mobileLinks = menu.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
      const isOpen = !menu.classList.contains('translate-x-full');
      if (isOpen) {
        // Close
        menu.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        btn.innerHTML = '<span class="material-symbols-outlined text-2xl">menu</span>';
        document.body.style.overflow = '';

        // Reset animations
        mobileLinks.forEach(link => {
          link.classList.add('translate-x-4', 'opacity-0');
        });

      } else {
        // Open
        menu.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        btn.innerHTML = '<span class="material-symbols-outlined text-2xl">close</span>';
        document.body.style.overflow = 'hidden';

        // Staggered entry animation
        setTimeout(() => {
          mobileLinks.forEach(link => {
            link.classList.remove('translate-x-4', 'opacity-0');
          });
        }, 100);
      }
    };

    btn.onclick = (e) => {
      e.stopPropagation();
      toggleMenu();
    };

    overlay.onclick = toggleMenu;

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('translate-x-full')) return;
        toggleMenu();
      });
    });
  }
}
