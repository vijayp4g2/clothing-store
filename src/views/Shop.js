import { initShop } from './ShopLogic.js';

export default async function Shop() {
  // Fetch products from the API
  let products = [];
  try {
    const response = await fetch('/api/products');
    if (response.ok) {
      products = await response.json();
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  const productsHtml = products.map((product, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.05}s" data-product-id="${product.id}">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-overlay"></div>
        
        ${product.isNew ? '<span class="product-badge badge-new">NEW</span>' : ''}
        ${product.discount ? `<span class="product-badge badge-sale">-${product.discount}%</span>` : ''}
        
        <div class="product-actions">
          <button class="action-btn wishlist-btn" onclick="toggleWishlist(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" aria-label="Add to wishlist">
            <span class="material-symbols-outlined">favorite_border</span>
          </button>
          <button class="action-btn quick-view-btn" onclick="openQuickView(${product.id})" aria-label="Quick view">
            <span class="material-symbols-outlined">visibility</span>
          </button>
        </div>
      </div>
      
      <a href="/product/${product.id}" class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${Array(5).fill(0).map((_, i) => `
            <span class="material-symbols-outlined star ${i < Math.floor(product.rating || 4.5) ? 'filled' : ''}">star</span>
          `).join('')}
          <span class="rating-count">(${product.reviews || Math.floor(Math.random() * 200 + 50)})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${product.price.toFixed(0)}</span>
          ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toFixed(0)}</span>` : ''}
        </div>
        <div class="product-colors">
          ${(product.colors || ['#000000', '#FFFFFF', '#3B82F6']).slice(0, 4).map(color => `
            <span class="color-dot" style="background-color: ${color}"></span>
          `).join('')}
        </div>
      </a>
    </div>
  `).join('');

  // List View HTML
  const productsListHtml = products.map((product, index) => `
    <div class="product-list-item" style="animation-delay: ${index * 0.05}s" data-product-id="${product.id}">
      <div class="list-item-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="list-item-image">
        ${product.isNew ? '<span class="product-badge badge-new">NEW</span>' : ''}
        ${product.discount ? `<span class="product-badge badge-sale">-${product.discount}%</span>` : ''}
        <button class="list-wishlist-btn" onclick="toggleWishlist(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" aria-label="Add to wishlist">
          <span class="material-symbols-outlined">favorite_border</span>
        </button>
      </div>
      
      <div class="list-item-content">
        <div class="list-item-header">
          <a href="/product/${product.id}" class="list-item-title">
            <h3>${product.name}</h3>
          </a>
          <div class="list-item-rating">
            ${Array(5).fill(0).map((_, i) => `
              <span class="material-symbols-outlined star ${i < Math.floor(product.rating || 4.5) ? 'filled' : ''}">star</span>
            `).join('')}
            <span class="rating-value">${product.rating || 4.5}</span>
            <span class="rating-count">(${product.reviews || Math.floor(Math.random() * 200 + 50)} reviews)</span>
          </div>
        </div>
        
        <p class="list-item-description">
          ${product.description || 'Premium quality fabric with modern design. Perfect for any occasion, offering comfort and style in one package. Available in multiple colors and sizes.'}
        </p>
        
        <div class="list-item-features">
          <div class="feature-tag">
            <span class="material-symbols-outlined">verified</span>
            <span>Premium Quality</span>
          </div>
          <div class="feature-tag">
            <span class="material-symbols-outlined">local_shipping</span>
            <span>Free Delivery</span>
          </div>
          <div class="feature-tag">
            <span class="material-symbols-outlined">autorenew</span>
            <span>Easy Returns</span>
          </div>
        </div>
        
        <div class="list-item-footer">
          <div class="list-item-left">
            <div class="list-item-price">
              <span class="price-current">₹${product.price.toFixed(0)}</span>
              ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toFixed(0)}</span>` : ''}
              ${product.discount ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
            </div>
            <div class="list-item-colors">
              <span class="colors-label">Colors:</span>
              ${(product.colors || ['#000000', '#FFFFFF', '#3B82F6']).slice(0, 5).map(color => `
                <button class="color-option" style="background-color: ${color}" title="Select color"></button>
              `).join('')}
            </div>
          </div>
          
          <div class="list-item-actions">
            <button class="quick-view-list-btn" onclick="openQuickView(${product.id})">
              <span class="material-symbols-outlined">visibility</span>
              <span>Quick View</span>
            </button>
            <button class="add-to-cart-list-btn" onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')">
              <span class="material-symbols-outlined">shopping_cart</span>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="shop-page">
      <!-- Hero Section -->
      <section class="shop-hero">
        <div class="hero-bg"></div>
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span>Shop</span>
          </div>
          <h1 class="hero-title">Premium Collection</h1>
          <p class="hero-subtitle">Discover timeless elegance and contemporary style</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="material-symbols-outlined">verified</span>
              <span>Premium Quality</span>
            </div>
            <div class="feature-item">
              <span class="material-symbols-outlined">local_shipping</span>
              <span>Free Shipping</span>
            </div>
            <div class="feature-item">
              <span class="material-symbols-outlined">autorenew</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </section>

      <div class="container shop-container">
        <!-- Mobile Filter Toggle -->
        <button id="mobile-filter-btn" class="mobile-filter-btn">
          <span class="material-symbols-outlined">tune</span>
          <span>Filters</span>
        </button>

        <div class="shop-layout">
          <!-- Sidebar Filters -->
          <aside id="filter-sidebar" class="filter-sidebar">
            <div class="sidebar-overlay" onclick="closeFilters()"></div>
            <div class="sidebar-content">
              <div class="sidebar-header">
                <div class="sidebar-title">
                  <span class="material-symbols-outlined">tune</span>
                  <h3>Filters</h3>
                </div>
                <button onclick="closeFilters()" class="close-btn">
                  <span class="material-symbols-outlined">close</span>
                </button>
              </div>

              <!-- Active Filters Display -->
              <div class="active-filters" id="active-filters" style="display: none;">
                <div class="active-filters-header">
                  <span class="material-symbols-outlined">filter_alt</span>
                  <span>Active Filters</span>
                </div>
                <div class="active-filters-list" id="active-filters-list"></div>
              </div>

              <div class="filters">
                <!-- Premium Search -->
                <div class="filter-group search-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">search</span>
                    <span>Search Products</span>
                  </label>
                  <div class="premium-search-box">
                    <span class="search-icon material-symbols-outlined">search</span>
                    <input type="text" placeholder="Type to search..." id="search-input" oninput="handleSearch(this.value)">
                    <div class="search-glow"></div>
                  </div>
                </div>

                <!-- Category Pills -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">category</span>
                    <span>Categories</span>
                  </label>
                  <div class="category-pills">
                    ${[
      { name: 'All', icon: 'apps', count: products.length },
      { name: 'Casual', icon: 'checkroom', count: Math.floor(products.length * 0.3) },
      { name: 'Formal', icon: 'business_center', count: Math.floor(products.length * 0.25) },
      { name: 'Polo', icon: 'sports', count: Math.floor(products.length * 0.2) },
      { name: 'T-Shirts', icon: 'styler', count: Math.floor(products.length * 0.25) }
    ].map((cat, i) => `
                      <button class="category-pill ${i === 0 ? 'active' : ''}" onclick="handleCategoryFilter(this, '${cat.name}')">
                        <span class="material-symbols-outlined">${cat.icon}</span>
                        <span class="pill-text">${cat.name}</span>
                        <span class="pill-count">${cat.count}</span>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Size Selector Cards -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">straighten</span>
                    <span>Select Size</span>
                  </label>
                  <div class="size-cards">
                    ${['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => `
                      <button class="size-card ${i === 2 ? 'active' : ''}" onclick="handleSizeFilter(this)" data-size="${size}">
                        <span class="size-label">${size}</span>
                        <span class="size-check material-symbols-outlined">check_circle</span>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Price Range with Visual Feedback -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">payments</span>
                    <span>Price Range</span>
                  </label>
                  <div class="price-range-container">
                    <div class="price-inputs">
                      <div class="price-input-box">
                        <span class="currency">₹</span>
                        <input type="number" class="price-input" id="min-price" value="500" min="500" max="15000" oninput="updatePriceRange()">
                      </div>
                      <div class="price-separator">—</div>
                      <div class="price-input-box">
                        <span class="currency">₹</span>
                        <input type="number" class="price-input" id="max-price" value="15000" min="500" max="15000" oninput="updatePriceRange()">
                      </div>
                    </div>
                    <div class="dual-slider-container">
                      <input type="range" class="price-slider-min" min="500" max="15000" value="500" step="100" oninput="updateMinPrice(this.value)">
                      <input type="range" class="price-slider-max" min="500" max="15000" value="15000" step="100" oninput="updateMaxPrice(this.value)">
                      <div class="slider-track"></div>
                      <div class="slider-range" id="slider-range"></div>
                    </div>
                  </div>
                </div>

                <!-- Color Swatches with Names -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">palette</span>
                    <span>Colors</span>
                  </label>
                  <div class="color-swatches">
                    ${[
      { color: '#1F2937', name: 'Black', gradient: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)' },
      { color: '#F9FAFB', name: 'White', gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)' },
      { color: '#3B82F6', name: 'Blue', gradient: 'linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)' },
      { color: '#EF4444', name: 'Red', gradient: 'linear-gradient(135deg, #F87171 0%, #DC2626 100%)' },
      { color: '#10B981', name: 'Green', gradient: 'linear-gradient(135deg, #34D399 0%, #059669 100%)' },
      { color: '#F59E0B', name: 'Amber', gradient: 'linear-gradient(135deg, #FBBF24 0%, #D97706 100%)' },
      { color: '#8B5CF6', name: 'Purple', gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)' },
      { color: '#EC4899', name: 'Pink', gradient: 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)' }
    ].map(({ color, name, gradient }, i) => `
                      <button class="color-swatch ${i === 0 ? 'active' : ''}" 
                              onclick="handleColorFilter(this, '${name}')"
                              data-color="${name}">
                        <div class="swatch-color" style="background: ${gradient}">
                          <span class="swatch-check material-symbols-outlined">check</span>
                        </div>
                        <span class="swatch-name">${name}</span>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Rating Cards -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">star</span>
                    <span>Customer Rating</span>
                  </label>
                  <div class="rating-cards">
                    ${[5, 4, 3, 2].map(rating => `
                      <button class="rating-card" onclick="handleRatingFilter(this, ${rating})">
                        <div class="rating-stars-display">
                          ${Array(5).fill(0).map((_, i) => `
                            <span class="material-symbols-outlined star ${i < rating ? 'filled' : ''}">star</span>
                          `).join('')}
                        </div>
                        <span class="rating-label">${rating}.0 & Up</span>
                        <span class="rating-arrow material-symbols-outlined">arrow_forward</span>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Availability Toggle -->
                <div class="filter-group">
                  <label class="filter-label">
                    <span class="material-symbols-outlined">inventory_2</span>
                    <span>Availability</span>
                  </label>
                  <div class="toggle-options">
                    <button class="toggle-option active" onclick="handleAvailabilityFilter(this, 'all')">
                      <span class="material-symbols-outlined">apps</span>
                      <span>All Items</span>
                    </button>
                    <button class="toggle-option" onclick="handleAvailabilityFilter(this, 'in-stock')">
                      <span class="material-symbols-outlined">check_circle</span>
                      <span>In Stock</span>
                    </button>
                  </div>
                </div>
              </div>

              <button class="clear-filters-btn" onclick="clearFilters()">
                <span class="material-symbols-outlined">restart_alt</span>
                <span>Clear All Filters</span>
              </button>
            </div>
          </aside>

          <!-- Products Section -->
          <main class="products-section">
            <!-- Toolbar -->
            <div class="products-toolbar">
              <div class="toolbar-left">
                <p class="products-count"><strong>${products.length}</strong> Products</p>
              </div>
              <div class="toolbar-right">
                <div class="sort-dropdown">
                  <button class="sort-btn">
                    <span class="material-symbols-outlined">sort</span>
                    <span>Sort: <strong>Newest</strong></span>
                    <span class="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
                <div class="view-toggle">
                  <button class="view-btn active" onclick="switchToGridView()" data-view="grid">
                    <span class="material-symbols-outlined">grid_view</span>
                  </button>
                  <button class="view-btn" onclick="switchToListView()" data-view="list">
                    <span class="material-symbols-outlined">view_list</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Products Grid View -->
            <div id="products-grid" class="products-grid active">
              ${productsHtml}
            </div>

            <!-- Products List View -->
            <div id="products-list" class="products-list">
              ${productsListHtml}
            </div>

            <!-- Pagination -->
            <div class="pagination">
              <button class="pagination-btn" disabled>
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              ${Array(5).fill(0).map((_, i) => `
                <button class="pagination-btn ${i === 0 ? 'active' : ''}">${i + 1}</button>
              `).join('')}
              <span class="pagination-dots">...</span>
              <button class="pagination-btn">8</button>
              <button class="pagination-btn">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </main>
        </div>
      </div>

    </div>

    ${getStyles()}
    ${getScripts()}
  `;
}

function getStyles() {
  return `
    <style>
      .shop-page {
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      }

      /* Hero Section */
      .shop-hero {
        position: relative;
        padding: 120px 0 80px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        overflow: hidden;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
        opacity: 0.3;
      }

      .shop-hero .container {
        position: relative;
        z-index: 1;
      }

      .breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 24px;
      }

      .breadcrumb a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: color 0.3s;
      }

      .breadcrumb a:hover {
        color: white;
      }

      .hero-title {
        font-size: clamp(48px, 8vw, 72px);
        font-weight: 900;
        color: white;
        margin-bottom: 16px;
        letter-spacing: -2px;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }

      .hero-subtitle {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.95);
        margin-bottom: 32px;
        max-width: 600px;
      }

      .hero-features {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        font-weight: 600;
      }

      .feature-item .material-symbols-outlined {
        font-size: 24px;
      }

      /* Container */
      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .shop-container {
        padding: 48px 24px;
      }

      /* Mobile Filter Button */
      .mobile-filter-btn {
        display: none;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 24px;
        transition: all 0.3s;
      }

      .mobile-filter-btn:hover {
        border-color: #667eea;
        color: #667eea;
      }

      @media (max-width: 1024px) {
        .mobile-filter-btn {
          display: flex;
        }
      }

      /* Shop Layout */
      .shop-layout {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 32px;
      }

      @media (max-width: 1024px) {
        .shop-layout {
          grid-template-columns: 1fr;
        }
      }

      /* Sidebar */
      .filter-sidebar {
        position: sticky;
        top: 100px;
        height: fit-content;
        max-height: calc(100vh - 120px);
        overflow-y: auto;
      }

      @media (max-width: 1024px) {
        .filter-sidebar {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          transform: translateX(-100%);
          transition: transform 0.3s;
          max-height: 100vh;
        }

        .filter-sidebar.open {
          transform: translateX(0);
        }
      }

      .sidebar-overlay {
        display: none;
      }

      @media (max-width: 1024px) {
        .sidebar-overlay {
          display: block;
          position: absolute;
          inset: 0;
        }
      }

      .sidebar-content {
        background: white;
        border-radius: 24px;
        padding: 32px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 1024px) {
        .sidebar-content {
          position: relative;
          width: 90%;
          max-width: 400px;
          height: 100%;
          border-radius: 0 24px 24px 0;
          overflow-y: auto;
        }
      }

      .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
        padding-bottom: 24px;
        border-bottom: 2px solid #f3f4f6;
      }

      .sidebar-title {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .sidebar-title .material-symbols-outlined {
        font-size: 28px;
        color: #667eea;
      }

      .sidebar-title h3 {
        font-size: 24px;
        font-weight: 800;
        margin: 0;
      }

      .close-btn {
        display: none;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        background: #f3f4f6;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
      }

      .close-btn:hover {
        background: #e5e7eb;
        transform: rotate(90deg);
      }

      @media (max-width: 1024px) {
        .close-btn {
          display: flex;
        }
      }

      /* Active Filters Display */
      .active-filters {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border: 2px solid rgba(102, 126, 234, 0.2);
        border-radius: 16px;
        padding: 16px;
        margin-bottom: 24px;
        animation: slideDown 0.3s ease;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .active-filters-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 14px;
        color: #667eea;
        margin-bottom: 12px;
      }

      .active-filters-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .active-filter-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        color: #374151;
        cursor: pointer;
        transition: all 0.2s;
      }

      .active-filter-tag:hover {
        background: #fee2e2;
        border-color: #fca5a5;
        color: #dc2626;
      }

      .active-filter-tag .material-symbols-outlined {
        font-size: 16px;
      }

      /* Filters Container */
      .filters {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      .filter-group {
        animation: fadeIn 0.4s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Filter Labels */
      .filter-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        font-size: 15px;
        color: #1f2937;
        margin-bottom: 14px;
        letter-spacing: -0.3px;
      }

      .filter-label .material-symbols-outlined {
        font-size: 22px;
        color: #667eea;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        padding: 6px;
        border-radius: 8px;
      }

      /* Premium Search Box */
      .premium-search-box {
        position: relative;
        overflow: hidden;
      }

      .premium-search-box input {
        width: 100%;
        padding: 16px 20px 16px 52px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 14px;
        font-size: 15px;
        font-weight: 500;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .premium-search-box input:focus {
        outline: none;
        border-color: #667eea;
        background: white;
        box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        transform: translateY(-1px);
      }

      .premium-search-box .search-icon {
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
        pointer-events: none;
        transition: all 0.3s;
      }

      .premium-search-box input:focus ~ .search-icon {
        color: #667eea;
      }

      .search-glow {
        position: absolute;
        inset: 0;
        border-radius: 14px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        z-index: -1;
      }

      .premium-search-box input:focus ~ .search-glow {
        opacity: 0.05;
      }

      /* Category Pills */
      .category-pills {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .category-pill {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .category-pill::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transform: scaleY(0);
        transition: transform 0.3s;
      }

      .category-pill:hover {
        background: white;
        border-color: #667eea;
        transform: translateX(4px);
      }

      .category-pill:hover::before {
        transform: scaleY(1);
      }

      .category-pill.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      }

      .category-pill.active::before {
        transform: scaleY(1);
        background: white;
      }

      .category-pill .material-symbols-outlined {
        font-size: 22px;
        transition: transform 0.3s;
      }

      .category-pill:hover .material-symbols-outlined,
      .category-pill.active .material-symbols-outlined {
        transform: scale(1.1);
      }

      .pill-text {
        flex: 1;
        font-weight: 600;
        font-size: 14px;
      }

      .pill-count {
        font-size: 12px;
        font-weight: 700;
        padding: 4px 10px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        min-width: 32px;
        text-align: center;
      }

      .category-pill.active .pill-count {
        background: rgba(255, 255, 255, 0.25);
      }

      /* Size Cards */
      .size-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

      .size-card {
        position: relative;
        padding: 18px 12px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }

      .size-card:hover {
        background: white;
        border-color: #667eea;
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(102, 126, 234, 0.15);
      }

      .size-card.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        transform: translateY(-3px);
      }

      .size-label {
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.5px;
      }

      .size-check {
        font-size: 18px;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .size-card.active .size-check {
        opacity: 1;
        transform: scale(1);
      }

      /* Price Range Container */
      .price-range-container {
        background: #f9fafb;
        padding: 20px;
        border-radius: 14px;
        border: 2px solid #e5e7eb;
      }

      .price-inputs {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
      }

      .price-input-box {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 8px;
        background: white;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 10px;
        transition: all 0.3s;
      }

      .price-input-box:focus-within {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }

      .currency {
        font-weight: 700;
        color: #667eea;
        font-size: 16px;
      }

      .price-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 15px;
        font-weight: 600;
        color: #1f2937;
        background: transparent;
      }

      .price-separator {
        font-weight: 700;
        color: #9ca3af;
        font-size: 18px;
      }

      /* Dual Slider */
      .dual-slider-container {
        position: relative;
        height: 6px;
        margin: 10px 0;
      }

      .slider-track {
        position: absolute;
        width: 100%;
        height: 6px;
        background: #e5e7eb;
        border-radius: 3px;
      }

      .slider-range {
        position: absolute;
        height: 6px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 3px;
        transition: all 0.1s;
      }

      .price-slider-min,
      .price-slider-max {
        position: absolute;
        width: 100%;
        height: 6px;
        background: transparent;
        pointer-events: none;
        -webkit-appearance: none;
      }

      .price-slider-min::-webkit-slider-thumb,
      .price-slider-max::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 22px;
        height: 22px;
        background: white;
        border: 3px solid #667eea;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: all;
        box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
        transition: all 0.2s;
      }

      .price-slider-min::-webkit-slider-thumb:hover,
      .price-slider-max::-webkit-slider-thumb:hover {
        transform: scale(1.2);
        box-shadow: 0 4px 14px rgba(102, 126, 234, 0.5);
      }

      /* Color Swatches */
      .color-swatches {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }

      .color-swatch {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 12px 8px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .color-swatch:hover {
        background: white;
        border-color: #667eea;
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      }

      .color-swatch.active {
        background: white;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        transform: translateY(-3px);
      }

      .swatch-color {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
      }

      .color-swatch:hover .swatch-color {
        transform: scale(1.1);
      }

      .swatch-check {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }

      .color-swatch.active .swatch-check {
        opacity: 1;
        transform: scale(1);
      }

      .swatch-name {
        font-size: 12px;
        font-weight: 600;
        color: #6b7280;
        text-align: center;
      }

      .color-swatch.active .swatch-name {
        color: #667eea;
        font-weight: 700;
      }

      /* Rating Cards */
      .rating-cards {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .rating-card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .rating-card:hover {
        background: white;
        border-color: #fbbf24;
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
      }

      .rating-card.active {
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        border-color: #fbbf24;
        color: white;
        box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
      }

      .rating-stars-display {
        display: flex;
        gap: 3px;
      }

      .rating-stars-display .star {
        font-size: 18px;
        color: #d1d5db;
        transition: all 0.2s;
      }

      .rating-stars-display .star.filled {
        color: #fbbf24;
      }

      .rating-card.active .rating-stars-display .star {
        color: rgba(255, 255, 255, 0.4);
      }

      .rating-card.active .rating-stars-display .star.filled {
        color: white;
      }

      .rating-label {
        flex: 1;
        font-weight: 600;
        font-size: 14px;
      }

      .rating-arrow {
        font-size: 20px;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s;
      }

      .rating-card:hover .rating-arrow,
      .rating-card.active .rating-arrow {
        opacity: 1;
        transform: translateX(0);
      }

      /* Toggle Options */
      .toggle-options {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }

      .toggle-option {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px 12px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        font-size: 13px;
      }

      .toggle-option:hover {
        background: white;
        border-color: #667eea;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
      }

      .toggle-option.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
        box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
      }

      .toggle-option .material-symbols-outlined {
        font-size: 28px;
        transition: transform 0.3s;
      }

      .toggle-option:hover .material-symbols-outlined,
      .toggle-option.active .material-symbols-outlined {
        transform: scale(1.1);
      }

      /* Clear Filters Button */
      .clear-filters-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 16px;
        margin-top: 32px;
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        border: 2px solid #fca5a5;
        border-radius: 14px;
        font-weight: 700;
        font-size: 15px;
        color: #dc2626;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .clear-filters-btn:hover {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        border-color: #dc2626;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3);
      }

      .clear-filters-btn .material-symbols-outlined {
        font-size: 22px;
        transition: transform 0.3s;
      }

      .clear-filters-btn:hover .material-symbols-outlined {
        transform: rotate(180deg);
      }

      /* Products Section */
      .products-section {
        min-height: 600px;
      }

      /* Toolbar */
      .products-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 24px;
        background: white;
        border-radius: 16px;
        margin-bottom: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .products-count {
        font-size: 16px;
        color: #6b7280;
      }

      .products-count strong {
        font-size: 24px;
        font-weight: 800;
        color: #667eea;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .sort-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .sort-btn:hover {
        border-color: #667eea;
      }

      .view-toggle {
        display: flex;
        gap: 4px;
        background: #f3f4f6;
        padding: 4px;
        border-radius: 10px;
      }

      .view-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        color: #6b7280;
      }

      .view-btn.active {
        background: white;
        color: #667eea;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      /* Products Grid */
      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 32px;
        margin-bottom: 48px;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .product-card {
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        animation: fadeInUp 0.6s ease-out backwards;
      }

      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
      }

      .product-image-wrapper {
        position: relative;
        aspect-ratio: 3/4;
        overflow: hidden;
        background: #f3f4f6;
      }

      .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s;
      }

      .product-card:hover .product-image {
        transform: scale(1.1);
      }

      .product-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        opacity: 0;
        transition: opacity 0.4s;
      }

      .product-card:hover .product-overlay {
        opacity: 1;
      }

      .product-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        color: white;
        z-index: 2;
      }

      .badge-new {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .badge-sale {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .product-actions {
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.4s;
        z-index: 2;
      }

      .product-card:hover .product-actions {
        opacity: 1;
        transform: translateX(0);
      }

      .action-btn {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        position: relative;
        overflow: visible;
      }

      .action-btn .material-symbols-outlined {
        font-size: 22px;
        transition: all 0.3s;
      }

      .action-btn:hover {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        transform: scale(1.15) rotate(5deg);
        box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        border-color: rgba(255, 255, 255, 0.8);
      }

      .action-btn:active {
        transform: scale(0.95);
      }

      /* Wishlist Button Specific Styles */
      .action-btn.wishlist-btn {
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .action-btn.wishlist-btn.active {
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        color: white;
        animation: heartBeat 0.6s ease-in-out;
      }

      .action-btn.wishlist-btn.active .material-symbols-outlined {
        animation: heartPulse 1.5s ease-in-out infinite;
      }

      @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        10% { transform: scale(1.3); }
        20% { transform: scale(1.1); }
        30% { transform: scale(1.25); }
        40% { transform: scale(1); }
      }

      @keyframes heartPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }

      /* Quick View Button Specific Styles */
      .action-btn.quick-view-btn:hover .material-symbols-outlined {
        animation: eyeBlink 0.6s ease-in-out;
      }

      @keyframes eyeBlink {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(0.1); }
      }

      /* Particle Effect Container */
      .heart-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: visible;
      }

      .heart-particle {
        position: absolute;
        font-size: 12px;
        color: #ff6b9d;
        animation: particleFloat 1s ease-out forwards;
        pointer-events: none;
      }

      @keyframes particleFloat {
        0% {
          opacity: 1;
          transform: translate(0, 0) scale(0);
        }
        50% {
          opacity: 1;
          transform: translate(var(--tx), var(--ty)) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2)) scale(0.5);
        }
      }

      /* Glow Effect */
      .action-btn.glow {
        animation: glowPulse 0.6s ease-out;
      }

      @keyframes glowPulse {
        0%, 100% {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }
        50% {
          box-shadow: 0 0 30px rgba(255, 107, 157, 0.8),
                      0 0 60px rgba(255, 107, 157, 0.4);
        }
      }

      .product-quick-add {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        transform: translateY(100%);
        transition: transform 0.4s;
        z-index: 2;
      }

      .product-card:hover .product-quick-add {
        transform: translateY(0);
      }

      .quick-add-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px;
        background: white;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .quick-add-btn:hover {
        background: #667eea;
        color: white;
        transform: scale(1.05);
      }

      .product-info {
        padding: 20px;
        text-decoration: none;
        color: inherit;
        display: block;
      }

      .product-name {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
        color: #1f2937;
        transition: color 0.3s;
      }

      .product-card:hover .product-name {
        color: #667eea;
      }

      .product-rating {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
      }

      .product-rating .star {
        font-size: 14px;
        color: #d1d5db;
      }

      .product-rating .star.filled {
        color: #fbbf24;
      }

      .rating-count {
        font-size: 13px;
        color: #9ca3af;
      }

      .product-price {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
      }

      .price-current {
        font-size: 20px;
        font-weight: 800;
        color: #1f2937;
      }

      .price-original {
        font-size: 14px;
        color: #9ca3af;
        text-decoration: line-through;
      }

      .product-colors {
        display: flex;
        gap: 6px;
      }

      .color-dot {
        width: 20px;
        height: 20px;
        border: 2px solid #e5e7eb;
        border-radius: 50%;
        transition: transform 0.2s;
      }

      .color-dot:hover {
        transform: scale(1.2);
        border-color: #667eea;
      }

      /* List View Styles */
      .products-list {
        display: none;
        flex-direction: column;
        gap: 24px;
        animation: fadeIn 0.4s ease;
      }

      .products-list.active {
        display: flex;
      }

      .products-grid.active {
        display: grid;
      }

      .products-grid:not(.active) {
        display: none;
      }

      .product-list-item {
        display: flex;
        gap: 24px;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        animation: fadeInUp 0.6s ease-out backwards;
      }

      .product-list-item:hover {
        box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
        transform: translateY(-4px);
      }

      .list-item-image-wrapper {
        position: relative;
        width: 280px;
        flex-shrink: 0;
        background: #f3f4f6;
        overflow: hidden;
      }

      .list-item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s;
      }

      .product-list-item:hover .list-item-image {
        transform: scale(1.1);
      }

      .list-wishlist-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        z-index: 2;
      }

      .list-wishlist-btn:hover {
        background: #ff6b9d;
        border-color: #ff6b9d;
        color: white;
        transform: scale(1.1);
      }

      .list-item-content {
        flex: 1;
        padding: 24px 28px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .list-item-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
      }

      .list-item-title {
        text-decoration: none;
        color: inherit;
      }

      .list-item-title h3 {
        font-size: 22px;
        font-weight: 800;
        color: #1f2937;
        margin: 0 0 8px 0;
        transition: color 0.3s;
        letter-spacing: -0.5px;
      }

      .list-item-title:hover h3 {
        color: #667eea;
      }

      .list-item-rating {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }

      .list-item-rating .star {
        font-size: 18px;
        color: #d1d5db;
      }

      .list-item-rating .star.filled {
        color: #fbbf24;
      }

      .rating-value {
        font-weight: 700;
        font-size: 15px;
        color: #1f2937;
        margin-left: 4px;
      }

      .list-item-rating .rating-count {
        font-size: 14px;
        color: #6b7280;
      }

      .list-item-description {
        font-size: 15px;
        line-height: 1.7;
        color: #6b7280;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .list-item-features {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      .feature-tag {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border: 1px solid rgba(102, 126, 234, 0.2);
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        color: #667eea;
      }

      .feature-tag .material-symbols-outlined {
        font-size: 18px;
      }

      .list-item-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 24px;
        margin-top: auto;
        padding-top: 16px;
        border-top: 2px solid #f3f4f6;
      }

      .list-item-left {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .list-item-price {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .list-item-price .price-current {
        font-size: 28px;
        font-weight: 800;
        color: #1f2937;
        letter-spacing: -0.5px;
      }

      .list-item-price .price-original {
        font-size: 18px;
        color: #9ca3af;
        text-decoration: line-through;
      }

      .price-discount {
        padding: 4px 12px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 700;
      }

      .list-item-colors {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .colors-label {
        font-size: 14px;
        font-weight: 600;
        color: #6b7280;
      }

      .color-option {
        width: 32px;
        height: 32px;
        border: 2px solid #e5e7eb;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
      }

      .color-option:hover {
        transform: scale(1.15);
        border-color: #667eea;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .list-item-actions {
        display: flex;
        gap: 12px;
      }

      .quick-view-list-btn,
      .add-to-cart-list-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 24px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .quick-view-list-btn {
        background: white;
        color: #667eea;
        border-color: #667eea;
      }

      .quick-view-list-btn:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
      }

      .add-to-cart-list-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-color: #667eea;
      }

      .add-to-cart-list-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
      }

      .quick-view-list-btn .material-symbols-outlined,
      .add-to-cart-list-btn .material-symbols-outlined {
        font-size: 20px;
      }

      /* Responsive List View */
      @media (max-width: 768px) {
        .product-list-item {
          flex-direction: column;
        }

        .list-item-image-wrapper {
          width: 100%;
          aspect-ratio: 4/3;
        }

        .list-item-content {
          padding: 20px;
        }

        .list-item-footer {
          flex-direction: column;
          align-items: stretch;
        }

        .list-item-actions {
          width: 100%;
        }

        .quick-view-list-btn,
        .add-to-cart-list-btn {
          flex: 1;
        }
      }

      /* Pagination */
      .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding-top: 32px;
      }

      .pagination-btn {
        min-width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      .pagination-btn:hover:not(:disabled) {
        border-color: #667eea;
        color: #667eea;
      }

      .pagination-btn.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
      }

      .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .pagination-dots {
        color: #9ca3af;
        font-weight: 600;
      }

      /* Modal */
      .modal {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }

      .modal.open {
        display: flex;
      }

      .modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
      }

      .modal-content {
        position: relative;
        max-width: 1000px;
        width: 100%;
        max-height: 90vh;
        background: white;
        border-radius: 24px;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: modalSlideIn 0.3s ease-out;
      }

      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
      }

      .modal-close:hover {
        background: #667eea;
        color: white;
        transform: rotate(90deg);
      }

      .quick-view-content {
        padding: 48px;
      }

      .loading {
        text-align: center;
        padding: 60px;
        color: #9ca3af;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .shop-hero {
          padding: 80px 0 60px;
        }

        .hero-title {
          font-size: 40px;
        }

        .products-grid {
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
        }

        .products-toolbar {
          flex-direction: column;
          gap: 16px;
        }

        .toolbar-left,
        .toolbar-right {
          width: 100%;
          justify-content: space-between;
        }
      }

      /* Toast Notifications */
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

      .toast-success .material-symbols-outlined {
        color: #10b981;
      }

      .toast-info {
        border-left: 4px solid #3b82f6;
        color: #1e40af;
      }

      .toast-info .material-symbols-outlined {
        color: #3b82f6;
      }

      @media (max-width: 768px) {
        .toast-notification {
          bottom: 16px;
          right: 16px;
          left: 16px;
          max-width: none;
        }
      }

      /* Ripple Effect */
      button, .quick-add-btn, .action-btn {
        position: relative;
        overflow: hidden;
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      /* Loading Spinners */
      .loading-spinner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 20px;
        gap: 24px;
      }

      .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid #f3f4f6;
        border-top-color: #667eea;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .spinner-small {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .loading-spinner p {
        color: #6b7280;
        font-weight: 600;
      }

      /* Sort Dropdown Menu */
      .sort-dropdown {
        position: relative;
      }

      .sort-dropdown-menu {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 220px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        padding: 8px;
        z-index: 100;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.2s ease-out;
      }

      .sort-dropdown-menu.show {
        opacity: 1;
        transform: translateY(0);
      }

      .sort-option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: none;
        border: none;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: all 0.2s;
        font-weight: 500;
        color: #374151;
      }

      .sort-option:hover {
        background: #f3f4f6;
        color: #667eea;
      }

      .sort-option.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }

      .sort-option .material-symbols-outlined {
        font-size: 20px;
      }

      /* Enhanced Quick View Modal */
      .quick-view-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
      }

      @media (max-width: 768px) {
        .quick-view-grid {
          grid-template-columns: 1fr;
          gap: 24px;
        }
      }

      .quick-view-image {
        border-radius: 16px;
        overflow: hidden;
        background: #f3f4f6;
      }

      .quick-view-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .quick-view-details {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .quick-view-details h2 {
        font-size: 32px;
        font-weight: 800;
        color: #1f2937;
        margin: 0;
      }

      .quick-view-rating {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .quick-view-rating .star {
        font-size: 20px;
        color: #d1d5db;
      }

      .quick-view-rating .star.filled {
        color: #fbbf24;
      }

      .quick-view-rating span:last-child {
        color: #6b7280;
        font-size: 14px;
        margin-left: 4px;
      }

      .quick-view-price {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .quick-view-price .price-current {
        font-size: 36px;
        font-weight: 800;
        color: #1f2937;
      }

      .quick-view-price .price-original {
        font-size: 20px;
        color: #9ca3af;
        text-decoration: line-through;
      }

      .quick-view-description {
        color: #6b7280;
        line-height: 1.7;
        font-size: 16px;
      }

      .quick-view-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 12px;
      }

      .btn-primary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 16px 32px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
      }

      .btn-primary:active {
        transform: translateY(0);
      }

      .btn-secondary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 16px 32px;
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
        border-radius: 12px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .btn-secondary:hover {
        background: #667eea;
        color: white;
      }

      /* Quick View Additional Styles */
      .image-badges {
        position: absolute;
        top: 16px;
        left: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 2;
      }

      .discount-badge {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 13px;
        font-weight: 700;
        margin-left: 8px;
      }

      .quick-view-features {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .feature-tag {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: #f3f4f6;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        color: #6b7280;
      }

      .feature-tag .material-symbols-outlined {
        font-size: 18px;
        color: #667eea;
      }

      .quick-view-image img {
        transition: transform 0.6s ease-out;
      }

      /* Animations for Quick View */
      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Smooth Transitions */
      .products-grid {
        transition: opacity 0.3s, transform 0.3s;
      }

      .price-value {
        transition: transform 0.2s;
      }

      .size-btn,
      .color-btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    </style>
  `;
}

function getScripts() {
  return `
    <script>
      // Toast Notification System
      function showToast(message, type = 'success') {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = \`toast-notification toast-\${type}\`;
        toast.innerHTML = \`
          <span class="material-symbols-outlined">\${type === 'success' ? 'check_circle' : 'info'}</span>
          <span>\${message}</span>
        \`;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => toast.remove(), 300);
        }, 3000);
      }

      // Ripple Effect for Buttons
      function createRipple(event) {
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
      }

      // Add ripple to all buttons
      setTimeout(() => {
        document.querySelectorAll('button, .quick-add-btn, .action-btn').forEach(btn => {
          btn.addEventListener('click', createRipple);
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
        priceDisplay.textContent = '$' + value;
        
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
          showToast(\`Size \${btn.textContent} selected\`, 'success');
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
          showToast(\`Color \${btn.title} selected\`, 'success');
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
            showToast(\`Searching for "\${value}"\`, 'info');
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
          priceSlider.value = 75;
          updatePrice(75);
        }
        
        showToast('All filters cleared', 'success');
        handleFilter();
      };

      // Sort Dropdown
      let sortDropdownOpen = false;
      const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular', 'Best Rating'];
      let currentSort = 'Newest';

      document.querySelector('.sort-btn')?.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (sortDropdownOpen) {
          closeSortDropdown();
          return;
        }

        const dropdown = document.createElement('div');
        dropdown.className = 'sort-dropdown-menu';
        dropdown.innerHTML = sortOptions.map(option => \`
          <button class="sort-option \${option === currentSort ? 'active' : ''}" onclick="selectSort('\${option}')">
            <span>\${option}</span>
            \${option === currentSort ? '<span class="material-symbols-outlined">check</span>' : ''}
          </button>
        \`).join('');

        this.parentElement.appendChild(dropdown);
        setTimeout(() => dropdown.classList.add('show'), 10);
        sortDropdownOpen = true;

        document.addEventListener('click', closeSortDropdown);
      });

      function closeSortDropdown() {
        const dropdown = document.querySelector('.sort-dropdown-menu');
        if (dropdown) {
          dropdown.classList.remove('show');
          setTimeout(() => dropdown.remove(), 200);
        }
        sortDropdownOpen = false;
      }

      window.selectSort = (option) => {
        currentSort = option;
        const sortBtn = document.querySelector('.sort-btn strong');
        if (sortBtn) sortBtn.textContent = option;
        closeSortDropdown();
        showToast(\`Sorted by: \${option}\`, 'success');
        handleFilter();
      };

      // View Toggle
      document.querySelectorAll('.view-btn').forEach((btn, index) => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          const grid = document.getElementById('products-grid');
          if (index === 0) {
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
            showToast('Grid view activated', 'success');
          } else {
            grid.style.gridTemplateColumns = '1fr';
            showToast('List view activated', 'success');
          }
        });
      });

      // Pagination
      document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          if (this.disabled) return;
          
          document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active'));
          
          if (!this.querySelector('.material-symbols-outlined')) {
            this.classList.add('active');
            showToast(\`Page \${this.textContent} loaded\`, 'success');
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
        content.innerHTML = \`
          <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading product details...</p>
          </div>
    \`;
        
        // Simulate loading with realistic delay
        setTimeout(() => {
          content.innerHTML = \`
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
                  <span class="price-current">$89.99</span>
                  <span class="price-original">$129.99</span>
                  <span class="discount-badge">Save $40</span>
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
                  <button class="btn-primary" onclick="addToCart(\${productId})">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span>Add to Cart</span>
                  </button>
                  <button class="btn-secondary" onclick="window.location.hash = '/product/\${productId}'">
                    <span class="material-symbols-outlined">open_in_new</span>
                    <span>View Full Details</span>
                  </button>
                </div>
              </div>
            </div>
    \`;
          
          // Add zoom effect to image on hover
          const img = content.querySelector('.quick-view-image img');
          if (img) {
            img.addEventListener('mouseenter', function() {
              this.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseleave', function() {
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

    particle.style.setProperty('--tx', \`\${ tx } px\`);
    particle.style.setProperty('--ty', \`\${ ty } px\`);
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
};

// Add to cart with animation
window.addToCart = (productId) => {
  const btn = event.currentTarget;
  const originalHTML = btn.innerHTML;

  // Loading state
  btn.disabled = true;
  btn.innerHTML = \`
    <span class="spinner-small"></span>
    <span>Adding...</span>
  \`;
        
  setTimeout(() => {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Create product object (you can customize this with actual product data)
    const product = {
      id: productId,
      name: 'Premium Cotton Shirt', // Replace with actual product name
      price: 2499, // Replace with actual price
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600', // Replace with actual image
      quantity: 1,
      size: 'M', // Default size
      color: 'Default'
    };
    
    // Check if item already exists
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
      // Increase quantity if exists
      cart[existingIndex].quantity += 1;
    } else {
      // Add new item
      cart.push(product);
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Dispatch event to update cart badge
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Success state
    btn.innerHTML = \`
      <span class="material-symbols-outlined">check</span>
      <span>Added!</span>
    \`;
    btn.style.background = '#10b981';
    
    showToast('Product added to cart! 🛒', 'success');
    
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
        anchor.addEventListener('click', function(e) {
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
    </script>
  `;
}
