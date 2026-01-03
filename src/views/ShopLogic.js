
export function initShop() {
    // Toast Notification System
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

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // Ripple Effect for Buttons
    window.createRipple = function (event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) existingRipple.remove();

        button.appendChild(ripple);
    };

    // Add ripple to all buttons
    setTimeout(() => {
        document.querySelectorAll('button, .quick-add-btn, .action-btn').forEach(btn => {
            btn.addEventListener('click', window.createRipple);
        });
    }, 100);

    // Mobile filter toggle
    document.getElementById('mobile-filter-btn')?.addEventListener('click', () => {
        document.getElementById('filter-sidebar').classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    window.closeFilters = () => {
        document.getElementById('filter-sidebar').classList.remove('open');
        document.body.style.overflow = '';
    };

    // Toggle filter sections with animation
    window.toggleFilterSection = (button) => {
        const group = button.closest('.filter-group');
        const wasCollapsed = group.classList.contains('collapsed');
        group.classList.toggle('collapsed');

        // Animate icon rotation
        const icon = button.querySelector('.expand-icon');
        icon.style.transform = wasCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)';
    };

    // Price slider with live update
    window.updatePrice = (value) => {
        const priceDisplay = document.querySelector('.price-value');
        priceDisplay.textContent = '₹' + value;

        // Add pulse animation
        priceDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            priceDisplay.style.transform = 'scale(1)';
        }, 200);
    };

    // Size filter with animation
    window.handleSizeFilter = (btn) => {
        const wasActive = btn.classList.contains('active');

        document.querySelectorAll('.size-btn').forEach(b => {
            b.classList.remove('active');
            b.style.transform = 'scale(1)';
        });

        if (!wasActive) {
            btn.classList.add('active');
            btn.style.transform = 'scale(1.05)';
            showToast(`Size ${btn.textContent} selected`, 'success');
        }
    };

    // Color filter with animation
    window.handleColorFilter = (btn) => {
        const wasActive = btn.classList.contains('active');

        document.querySelectorAll('.color-btn').forEach(b => {
            b.classList.remove('active');
            const check = b.querySelector('.material-symbols-outlined');
            if (check) check.remove();
        });

        if (!wasActive) {
            btn.classList.add('active');
            btn.innerHTML += '<span class="material-symbols-outlined">check</span>';
            showToast(`Color ${btn.title} selected`, 'success');
        }
    };

    // Generic filter handler with visual feedback
    window.handleFilter = () => {
        const grid = document.getElementById('products-grid');
        grid.style.opacity = '0.6';
        grid.style.transform = 'scale(0.98)';

        setTimeout(() => {
            grid.style.opacity = '1';
            grid.style.transform = 'scale(1)';
        }, 300);
    };

    // Search handler with debounce
    let searchTimeout;
    window.handleSearch = (value) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (value.trim()) {
                showToast(`Searching for "${value}"`, 'info');
                handleFilter();
            }
        }, 500);
    };

    // Clear all filters with animation
    window.clearFilters = () => {
        // Reset checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });

        // Reset size buttons
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'scale(1)';
        });

        // Reset color buttons
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
            const check = btn.querySelector('.material-symbols-outlined');
            if (check) check.remove();
        });

        // Reset search
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';

        // Reset price
        const priceSlider = document.querySelector('.price-slider');
        if (priceSlider) {
            priceSlider.value = 5000;
            updatePrice(5000);
        }

        showToast('All filters cleared', 'success');
        handleFilter();
    };

    // Sort Dropdown
    let sortDropdownOpen = false;
    const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular', 'Best Rating'];
    let currentSort = 'Newest';

    document.querySelector('.sort-btn')?.addEventListener('click', function (e) {
        e.stopPropagation();

        if (sortDropdownOpen) {
            closeSortDropdown();
            return;
        }

        const dropdown = document.createElement('div');
        dropdown.className = 'sort-dropdown-menu';
        dropdown.innerHTML = sortOptions.map(option => `
      <button class="sort-option ${option === currentSort ? 'active' : ''}" onclick="selectSort('${option}')">
        <span>${option}</span>
        ${option === currentSort ? '<span class="material-symbols-outlined">check</span>' : ''}
      </button>
    `).join('');

        this.parentElement.appendChild(dropdown);
        setTimeout(() => dropdown.classList.add('show'), 10);
        sortDropdownOpen = true;

        document.addEventListener('click', window.closeSortDropdown);
    });

    window.closeSortDropdown = function () {
        const dropdown = document.querySelector('.sort-dropdown-menu');
        if (dropdown) {
            dropdown.classList.remove('show');
            setTimeout(() => dropdown.remove(), 200);
        }
        sortDropdownOpen = false;
    };

    window.selectSort = (option) => {
        currentSort = option;
        const sortBtn = document.querySelector('.sort-btn strong');
        if (sortBtn) sortBtn.textContent = option;
        closeSortDropdown();
        showToast(`Sorted by: ${option}`, 'success');
        handleFilter();
    };

    // View Toggle Functions
    window.switchToGridView = () => {
        const gridView = document.getElementById('products-grid');
        const listView = document.getElementById('products-list');
        const gridBtn = document.querySelector('.view-btn[data-view="grid"]');
        const listBtn = document.querySelector('.view-btn[data-view="list"]');

        gridView.classList.add('active');
        listView.classList.remove('active');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');

        showToast('Grid view activated', 'success');
    };

    window.switchToListView = () => {
        const gridView = document.getElementById('products-grid');
        const listView = document.getElementById('products-list');
        const gridBtn = document.querySelector('.view-btn[data-view="grid"]');
        const listBtn = document.querySelector('.view-btn[data-view="list"]');

        gridView.classList.remove('active');
        listView.classList.add('active');
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');

        showToast('List view activated', 'success');
    };

    // New filter handlers for list view
    window.handleCategoryFilter = (btn, category) => {
        document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showToast(`Category: ${category}`, 'success');
        handleFilter();
    };

    window.handleRatingFilter = (btn, rating) => {
        document.querySelectorAll('.rating-card').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showToast(`Showing ${rating}+ star products`, 'success');
        handleFilter();
    };

    window.handleAvailabilityFilter = (btn, type) => {
        document.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showToast(type === 'all' ? 'Showing all items' : 'Showing in-stock items only', 'success');
        handleFilter();
    };

    // Price range handlers for dual slider
    window.updateMinPrice = (value) => {
        const minInput = document.getElementById('min-price');
        const maxInput = document.getElementById('max-price');
        const sliderRange = document.getElementById('slider-range');

        if (minInput) minInput.value = value;
        updateSliderRange();
    };

    window.updateMaxPrice = (value) => {
        const minInput = document.getElementById('min-price');
        const maxInput = document.getElementById('max-price');

        if (maxInput) maxInput.value = value;
        updateSliderRange();
    };

    window.updatePriceRange = () => {
        updateSliderRange();
    };

    function updateSliderRange() {
        const minInput = document.getElementById('min-price');
        const maxInput = document.getElementById('max-price');
        const sliderRange = document.getElementById('slider-range');

        if (!minInput || !maxInput || !sliderRange) return;

        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);
        const minPercent = ((min - 500) / (15000 - 500)) * 100;
        const maxPercent = ((max - 500) / (15000 - 500)) * 100;

        sliderRange.style.left = minPercent + '%';
        sliderRange.style.width = (maxPercent - minPercent) + '%';
    }

    // Pagination
    document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.disabled) return;

            document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active'));

            if (!this.querySelector('.material-symbols-outlined')) {
                this.classList.add('active');
                showToast(`Page ${this.textContent} loaded`, 'success');
            }

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            handleFilter();
        });
    });

    // Enhanced Quick view modal with loading and animations
    window.openQuickView = (productId) => {
        const modal = document.getElementById('quick-view-modal');
        const content = document.getElementById('quick-view-content');

        // Add opening animation class
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Show skeleton loading
        content.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading product details...</p>
      </div>
    `;

        // Simulate loading with realistic delay
        setTimeout(() => {
            content.innerHTML = `
        <div class="quick-view-grid" style="animation: fadeInUp 0.5s ease-out;">
          <div class="quick-view-image">
            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600" alt="Product" style="animation: zoomIn 0.6s ease-out;" />
            <div class="image-badges">
              <span class="badge-new">NEW</span>
              <span class="badge-sale">-30%</span>
            </div>
          </div>
          <div class="quick-view-details">
            <h2 style="animation: slideInRight 0.5s ease-out 0.1s both;">Premium Cotton Shirt</h2>
            <div class="quick-view-rating" style="animation: slideInRight 0.5s ease-out 0.2s both;">
              <span class="material-symbols-outlined star filled">star</span>
              <span class="material-symbols-outlined star filled">star</span>
              <span class="material-symbols-outlined star filled">star</span>
              <span class="material-symbols-outlined star filled">star</span>
              <span class="material-symbols-outlined star">star</span>
              <span>(128 reviews)</span>
            </div>
            <div class="quick-view-price" style="animation: slideInRight 0.5s ease-out 0.3s both;">
              <span class="price-current">₹7469</span>
              <span class="price-original">₹10787</span>
              <span class="discount-badge">Save ₹3318</span>
            </div>
            <p class="quick-view-description" style="animation: slideInRight 0.5s ease-out 0.4s both;">
              Premium quality cotton shirt with modern fit. Perfect for both casual and formal occasions. Made from 100% organic cotton with breathable fabric.
            </p>
            <div class="quick-view-features" style="animation: slideInRight 0.5s ease-out 0.5s both;">
              <div class="feature-tag"><span class="material-symbols-outlined">verified</span> Premium Quality</div>
              <div class="feature-tag"><span class="material-symbols-outlined">local_shipping</span> Free Shipping</div>
              <div class="feature-tag"><span class="material-symbols-outlined">autorenew</span> Easy Returns</div>
            </div>
            <div class="quick-view-actions" style="animation: slideInRight 0.5s ease-out 0.6s both;">
              <button class="btn-primary" onclick="addToCart(${productId}, 'Premium Cotton Shirt', 7469, 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600')">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span>Add to Cart</span>
              </button>
              <a href="/product/${productId}" class="btn-secondary" style="display:flex; align-items:center; justify-content:center; text-decoration:none; color: inherit;">
                <span class="material-symbols-outlined">open_in_new</span>
                <span>View Full Details</span>
              </a>
            </div>
          </div>
        </div>
      `;

            // Add zoom effect to image on hover
            const img = content.querySelector('.quick-view-image img');
            if (img) {
                img.addEventListener('mouseenter', function () {
                    this.style.transform = 'scale(1.05)';
                });
                img.addEventListener('mouseleave', function () {
                    this.style.transform = 'scale(1)';
                });
            }
        }, 600);
    };

    window.closeQuickView = () => {
        const modal = document.getElementById('quick-view-modal');
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    // Wishlist toggle with enhanced animations
    const wishlist = new Set();
    if (localStorage.getItem('wishlist')) {
        try {
            JSON.parse(localStorage.getItem('wishlist')).forEach(id => wishlist.add(id));
        } catch (e) { }
    }

    function createHeartParticles(button) {
        const particleCount = 8;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'heart-particle';
            particle.textContent = '❤';

            const angle = (Math.PI * 2 * i) / particleCount;
            const distance = 40;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';

            button.appendChild(particle);
            particles.push(particle);
        }

        setTimeout(() => {
            particles.forEach(p => p.remove());
        }, 1000);
    }

    window.toggleWishlist = (productId, productName, productPrice, productImage) => {
        const btn = event.currentTarget;
        const icon = btn.querySelector('.material-symbols-outlined');

        // Add wishlist-btn class if not present
        if (!btn.classList.contains('wishlist-btn')) {
            btn.classList.add('wishlist-btn');
        }

        // Get wishlist from localStorage
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

        // Check if product exists in wishlist
        const existingIndex = wishlist.findIndex(item => item.id === productId);

        if (existingIndex !== -1) {
            // Remove from wishlist
            wishlist.splice(existingIndex, 1);
            icon.textContent = 'favorite_border';
            btn.classList.remove('active');

            // Shrink animation
            btn.style.transform = 'scale(0.8)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);

            showToast('Removed from wishlist', 'info');
        } else {
            // Add to wishlist with complete product info
            wishlist.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            });

            icon.textContent = 'favorite';
            btn.classList.add('active');

            // Create particle effect
            createHeartParticles(btn);

            // Add glow effect
            btn.classList.add('glow');
            setTimeout(() => {
                btn.classList.remove('glow');
            }, 600);

            // Vibration effect (if supported)
            if (navigator.vibrate) {
                navigator.vibrate([50, 30, 50]);
            }

            showToast('Added to wishlist ❤️', 'success');
        }

        // Save to localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlistUpdated'));
    };

    // Add to cart with animation
    window.addToCart = (productId, name, price, image) => {
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;

        // Loading state
        btn.disabled = true;
        btn.innerHTML = `
      <span class="spinner-small"></span>
      <span>Adding...</span>
    `;

        setTimeout(() => {
            // Success state
            btn.innerHTML = `
        <span class="material-symbols-outlined">check</span>
        <span>Added!</span>
      `;
            btn.style.background = '#10b981';

            showToast('Product added to cart! 🛒', 'success');

            // Add to cart if available
            if (window.cart) {
                window.cart.addItem({
                    id: productId,
                    name: name || 'Product ' + productId,
                    price: price || 0,
                    image: image
                });
            }

            // Reset button
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 2000);
        }, 600);
    };

    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickView();
            closeFilters();
            closeSortDropdown();
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
