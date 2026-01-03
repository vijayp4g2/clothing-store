export default function NewArrivals() {
  // Initialize animations when component loads
  setTimeout(() => {
    initNewArrivalsAnimations();
  }, 100);

  return `
    <div class="w-full font-display bg-white dark:bg-[#0a0a0a]">
      
      <!-- Live Purchase Notification -->
      <div id="purchase-notification" class="fixed top-24 right-4 z-50 max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 transform translate-x-[120%] transition-all duration-500">
        <div class="flex items-center gap-3">
          <div class="relative">
            <img id="notification-img" src="" alt="" class="w-12 h-12 rounded-lg object-cover">
            <span class="absolute -top-1 -right-1 flex h-4 w-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </div>
          <div class="flex-1">
            <p class="text-xs text-gray-500 dark:text-gray-400">Someone just purchased</p>
            <p id="notification-product" class="text-sm font-semibold text-gray-900 dark:text-white"></p>
            <p class="text-xs text-gray-500 dark:text-gray-400" id="notification-time"></p>
          </div>
        </div>
      </div>

      <!-- Premium Hero Section -->
      <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 dark:from-primary/10 dark:via-accent/10 dark:to-purple-500/10">
        <!-- Animated Grid Background -->
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
        
        <!-- Ambient Background Effects -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
            <div class="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-accent/20 to-purple-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 border border-primary/20 dark:border-white/20 backdrop-blur-md shadow-lg mb-6 animate-float">
            <span class="flex size-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></span>
            <span class="text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fresh Drops</span>
            <span class="material-symbols-outlined text-primary text-sm">auto_awesome</span>
          </div>
          
          <!-- Main Heading -->
          <h1 class="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            <span class="block text-gray-900 dark:text-white mb-2">New</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-purple-600 bg-[length:200%_auto] animate-gradient">Arrivals</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the latest additions to our collection. <span class="font-semibold text-gray-900 dark:text-white">Fresh styles</span> curated just for you.
          </p>

          <!-- Countdown to Next Drop -->
          <div class="inline-block bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl p-6 shadow-xl mb-8">
            <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">Next Drop In</p>
            <div class="flex gap-4">
              <div class="text-center">
                <div id="new-arrivals-days" class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">00</div>
                <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Days</div>
              </div>
              <div class="text-2xl font-bold text-gray-400">:</div>
              <div class="text-center">
                <div id="new-arrivals-hours" class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">00</div>
                <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Hours</div>
              </div>
              <div class="text-2xl font-bold text-gray-400">:</div>
              <div class="text-center">
                <div id="new-arrivals-minutes" class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">00</div>
                <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Mins</div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="flex items-center justify-center gap-8">
            <div class="text-center">
              <p class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">24+</p>
              <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">New Items</p>
            </div>
            <div class="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            <div class="text-center">
              <p class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">This Week</p>
              <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enhanced Filters -->
      <section class="sticky top-20 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 py-4">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <!-- Category Filter Pills -->
            <div class="flex flex-wrap items-center gap-2">
              <button class="filter-pill active px-4 py-2 rounded-full text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-105 transition-all duration-300 shadow-lg" data-filter="all">
                All Items
              </button>
              <button class="filter-pill px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300" data-filter="shirts">
                Shirts
              </button>
              <button class="filter-pill px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300" data-filter="pants">
                Pants
              </button>
              <button class="filter-pill px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300" data-filter="jackets">
                Jackets
              </button>
              <button class="filter-pill px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300" data-filter="accessories">
                Accessories
              </button>
            </div>

            <!-- Sort & View Options -->
            <div class="flex items-center gap-2">
              <select id="sort-select" class="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-all">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
              
              <button id="toggle-filters" class="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]">tune</span>
                <span>Filters</span>
              </button>
            </div>
          </div>
          
          <!-- Advanced Filters Panel -->
          <div id="advanced-filters" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 hidden">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Price Range -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Price Range</label>
                <div class="flex items-center gap-4">
                  <input type="number" placeholder="Min" class="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-sm">
                  <span class="text-gray-500">-</span>
                  <input type="number" placeholder="Max" class="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-sm">
                </div>
              </div>
              
              <!-- Color Filter -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Colors</label>
                <div class="flex flex-wrap gap-2">
                  <button class="color-filter w-8 h-8 rounded-full bg-black border-2 border-transparent hover:border-primary transition-all" data-color="black"></button>
                  <button class="color-filter w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-primary transition-all" data-color="white"></button>
                  <button class="color-filter w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-primary transition-all" data-color="blue"></button>
                  <button class="color-filter w-8 h-8 rounded-full bg-gray-500 border-2 border-transparent hover:border-primary transition-all" data-color="gray"></button>
                  <button class="color-filter w-8 h-8 rounded-full bg-green-600 border-2 border-transparent hover:border-primary transition-all" data-color="green"></button>
                  <button class="color-filter w-8 h-8 rounded-full bg-amber-700 border-2 border-transparent hover:border-primary transition-all" data-color="brown"></button>
                </div>
              </div>
              
              <!-- Size Filter -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Sizes</label>
                <div class="flex flex-wrap gap-2">
                  <button class="size-filter px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                  <button class="size-filter px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                  <button class="size-filter px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                  <button class="size-filter px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                  <button class="size-filter px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-primary hover:text-white transition-all" data-size="XXL">XXL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="py-16 bg-gray-50 dark:bg-[#0f0f0f]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="flex items-center justify-between mb-12">
            <div>
              <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">Latest Drops</h2>
              <p class="text-gray-600 dark:text-gray-400">24 new items added this week</p>
            </div>
          </div>

          <!-- Products Grid -->
          <div id="new-arrivals-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            <!-- Product Card 1 - Enhanced -->
            <div class="product-card group" data-category="shirts" data-price="2499" data-name="Premium Linen Shirt">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/1" class="block w-full h-full">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc" alt="Premium Linen Shirt" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>
                
                <!-- Badges -->
                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <!-- Quick Actions with Enhanced Animations -->
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(1, 'Premium Linen Shirt', 2499, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <!-- Heart particles container -->
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Premium Linen Shirt","price":"₹2,499","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc","color":"Classic White","rating":"4.8","description":"Premium quality linen shirt perfect for any occasion. Breathable fabric with modern fit."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <!-- Size Selection Overlay -->
                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/1">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Premium Linen Shirt</h3>
                </a>
                <p class="text-sm text-gray-500">Classic White</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹2,499</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 2 - Enhanced -->
            <div class="product-card group" data-category="pants" data-price="3299" data-name="Tailored Chino Pants">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/2" class="block w-full h-full">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4" alt="Tailored Chinos" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>
                
                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(2, 'Tailored Chino Pants', 3299, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Tailored Chino Pants","price":"₹3,299","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4","color":"Navy Blue","rating":"4.9","description":"Perfectly tailored chino pants for a sophisticated look. Comfortable fit with premium fabric."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="30">30</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="32">32</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="34">34</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="36">36</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/2">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Tailored Chino Pants</h3>
                </a>
                <p class="text-sm text-gray-500">Navy Blue</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹3,299</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 3 - Enhanced -->
            <div class="product-card group" data-category="jackets" data-price="8999" data-name="Modern Fit Blazer">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/3" class="block w-full h-full">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo" alt="Modern Blazer" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>

                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Hot</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(3, 'Modern Fit Blazer', 8999, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Modern Fit Blazer","price":"₹8,999","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo","color":"Charcoal Grey","rating":"5.0","description":"Modern fit blazer perfect for business and formal occasions. Premium wool blend fabric."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/3">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Modern Fit Blazer</h3>
                </a>
                <p class="text-sm text-gray-500">Charcoal Grey</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹8,999</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 4 - Enhanced -->
            <div class="product-card group" data-category="shirts" data-price="2199" data-name="Classic Oxford Shirt">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/4" class="block w-full h-full"> 
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTqv4ruXCSZcxoE6RntcBEKj4pmb8U1XTSnfVy9RsMuB4GyWo50TKkHPn9yTyDRrtB4H4SYVEQf6e0bRZrVpC3s99kyLjG3zcaPb6_ytQN7yReLQsnucAmf1ByQqZEQNKydlu93ls-Uc-yzhox5h0tWHiGWLwGywsJo5k1oMGtIOqrlUuNh8jYvGzpTScv2E2cyg87n6_TUsJx_WgD4rNcEKFN1xQG3EEhGvmTNaW8Wgd5Ei5juor5lcMn-xeuflLCMZPv5n-OkTI" alt="Oxford Shirt" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>
                
                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(4, 'Classic Oxford Shirt', 2199, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTqv4ruXCSZcxoE6RntcBEKj4pmb8U1XTSnfVy9RsMuB4GyWo50TKkHPn9yTyDRrtB4H4SYVEQf6e0bRZrVpC3s99kyLjG3zcaPb6_ytQN7yReLQsnucAmf1ByQqZEQNKydlu93ls-Uc-yzhox5h0tWHiGWLwGywsJo5k1oMGtIOqrlUuNh8jYvGzpTScv2E2cyg87n6_TUsJx_WgD4rNcEKFN1xQG3EEhGvmTNaW8Wgd5Ei5juor5lcMn-xeuflLCMZPv5n-OkTI')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Classic Oxford Shirt","price":"₹2,199","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuBTqv4ruXCSZcxoE6RntcBEKj4pmb8U1XTSnfVy9RsMuB4GyWo50TKkHPn9yTyDRrtB4H4SYVEQf6e0bRZrVpC3s99kyLjG3zcaPb6_ytQN7yReLQsnucAmf1ByQqZEQNKydlu93ls-Uc-yzhox5h0tWHiGWLwGywsJo5k1oMGtIOqrlUuNh8jYvGzpTScv2E2cyg87n6_TUsJx_WgD4rNcEKFN1xQG3EEhGvmTNaW8Wgd5Ei5juor5lcMn-xeuflLCMZPv5n-OkTI","color":"Sky Blue","rating":"4.7","description":"Classic Oxford shirt with button-down collar. Perfect for both casual and formal wear."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/4">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Classic Oxford Shirt</h3>
                </a>
                <p class="text-sm text-gray-500">Sky Blue</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹2,199</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.7</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 5 - Enhanced -->
            <div class="product-card group" data-category="accessories" data-price="6499" data-name="Premium Leather Brogues">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/1" class="block w-full h-full">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBswJs7rnOkB3fDqmHOr0x3b2TLiv-IJTgXRuCQLWGMWSfsiTjTpqiXDn11yH8ZMM0-3S1mSKePhQlepMVwkFKZYz8ZzgEdXTV2Yjl1BbcGzdZ6Lvl4HcnRE_3SAOCyQQu-1tKyIiODqsccUPFgR92cq91s3tvqke21FupXO3JJP1FW2kHWsQERMFxiVz7QXz_6x6yoXZwTBnxFm6M4sagGJI4Bab1i06S9goLn1xm-8xxa3kd-766FXNnv1J2HmQ5_J9BWQwWUkdw" alt="Leather Shoes" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>

                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(1, 'Premium Leather Brogues', 6499, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBswJs7rnOkB3fDqmHOr0x3b2TLiv-IJTgXRuCQLWGMWSfsiTjTpqiXDn11yH8ZMM0-3S1mSKePhQlepMVwkFKZYz8ZzgEdXTV2Yjl1BbcGzdZ6Lvl4HcnRE_3SAOCyQQu-1tKyIiODqsccUPFgR92cq91s3tvqke21FupXO3JJP1FW2kHWsQERMFxiVz7QXz_6x6yoXZwTBnxFm6M4sagGJI4Bab1i06S9goLn1xm-8xxa3kd-766FXNnv1J2HmQ5_J9BWQwWUkdw')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Premium Leather Brogues","price":"₹6,499","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuBswJs7rnOkB3fDqmHOr0x3b2TLiv-IJTgXRuCQLWGMWSfsiTjTpqiXDn11yH8ZMM0-3S1mSKePhQlepMVwkFKZYz8ZzgEdXTV2Yjl1BbcGzdZ6Lvl4HcnRE_3SAOCyQQu-1tKyIiODqsccUPFgR92cq91s3tvqke21FupXO3JJP1FW2kHWsQERMFxiVz7QXz_6x6yoXZwTBnxFm6M4sagGJI4Bab1i06S9goLn1xm-8xxa3kd-766FXNnv1J2HmQ5_J9BWQwWUkdw","color":"Brown","rating":"4.9","description":"Premium leather brogues with classic wingtip design. Handcrafted for superior quality."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="8">8</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="9">9</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="10">10</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="11">11</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/1">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Premium Leather Brogues</h3>
                </a>
                <p class="text-sm text-gray-500">Brown</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹6,499</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 6 - Enhanced -->
            <div class="product-card group" data-category="pants" data-price="3799" data-name="Formal Dress Pants">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/2" class="block w-full h-full"> 
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7sGjWXdsiRQfKUoTIQiHyJ9k-aycwn4SmzgXcFappa9pHShgPTBuQxkX29zq8PGX--Q1eov6VSKpNd3xRV5oNNGb_AbmDgbQx4rs0vhmfSQoNE3M9hW-UuqVETCnAsZGVu9zCKGFsPkcMgCWSPGQOPwVKOHCEoR2GNDtdc9ZUC6_w3QqhndP9EHAzhn0sJVO0vHQSbO_-KGg7StawgS18_R2wRiJtWp7hGl66MXnuu8Vksnd6Jvm4Nxw5MzUPkw_PWbns-9FIZw" alt="Dress Pants" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>
                
                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(2, 'Formal Dress Pants', 3799, 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7sGjWXdsiRQfKUoTIQiHyJ9k-aycwn4SmzgXcFappa9pHShgPTBuQxkX29zq8PGX--Q1eov6VSKpNd3xRV5oNNGb_AbmDgbQx4rs0vhmfSQoNE3M9hW-UuqVETCnAsZGVu9zCKGFsPkcMgCWSPGQOPwVKOHCEoR2GNDtdc9ZUC6_w3QqhndP9EHAzhn0sJVO0vHQSbO_-KGg7StawgS18_R2wRiJtWp7hGl66MXnuu8Vksnd6Jvm4Nxw5MzUPkw_PWbns-9FIZw')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Formal Dress Pants","price":"₹3,799","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7sGjWXdsiRQfKUoTIQiHyJ9k-aycwn4SmzgXcFappa9pHShgPTBuQxkX29zq8PGX--Q1eov6VSKpNd3xRV5oNNGb_AbmDgbQx4rs0vhmfSQoNE3M9hW-UuqVETCnAsZGVu9zCKGFsPkcMgCWSPGQOPwVKOHCEoR2GNDtdc9ZUC6_w3QqhndP9EHAzhn0sJVO0vHQSbO_-KGg7StawgS18_R2wRiJtWp7hGl66MXnuu8Vksnd6Jvm4Nxw5MzUPkw_PWbns-9FIZw","color":"Black","rating":"4.8","description":"Formal dress pants with a modern slim fit. Perfect for business and formal occasions."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="30">30</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="32">32</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="34">34</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="36">36</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/2">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Formal Dress Pants</h3>
                </a>
                <p class="text-sm text-gray-500">Black</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹3,799</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 7 - Enhanced -->
            <div class="product-card group" data-category="jackets" data-price="7499" data-name="Classic Bomber Jacket">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/3" class="block w-full h-full"> 
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCkCWBM8-JXll9B7E3T538cp_oQJppPVtpW7Xjo-KtOfjxzlMeM_abJIttMjtpgVoCaeBE4H1XlfC_udVc0Raw6fOZq2h9sD9ULQ7oJRfWy7iZBDpP_AkwjHoTZhAjud4ZHOZkKpsVvCPBQ5jcFgcWoFNV8DpLPXurDiOR4H14TcL26H3Qnb1cQTvfYrtwGXgDyv2Dkmk0iLtzKp7m7yiSEMn2tGcHvlOwJ_E4KiBSeZe15xnY24aiINm6CnD_QAlNo3aFpARD3A" alt="Bomber Jacket" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>

                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(3, 'Classic Bomber Jacket', 7499, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBCkCWBM8-JXll9B7E3T538cp_oQJppPVtpW7Xjo-KtOfjxzlMeM_abJIttMjtpgVoCaeBE4H1XlfC_udVc0Raw6fOZq2h9sD9ULQ7oJRfWy7iZBDpP_AkwjHoTZhAjud4ZHOZkKpsVvCPBQ5jcFgcWoFNV8DpLPXurDiOR4H14TcL26H3Qnb1cQTvfYrtwGXgDyv2Dkmk0iLtzKp7m7yiSEMn2tGcHvlOwJ_E4KiBSeZe15xnY24aiINm6CnD_QAlNo3aFpARD3A')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Classic Bomber Jacket","price":"₹7,499","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuCBCkCWBM8-JXll9B7E3T538cp_oQJppPVtpW7Xjo-KtOfjxzlMeM_abJIttMjtpgVoCaeBE4H1XlfC_udVc0Raw6fOZq2h9sD9ULQ7oJRfWy7iZBDpP_AkwjHoTZhAjud4ZHOZkKpsVvCPBQ5jcFgcWoFNV8DpLPXurDiOR4H14TcL26H3Qnb1cQTvfYrtwGXgDyv2Dkmk0iLtzKp7m7yiSEMn2tGcHvlOwJ_E4KiBSeZe15xnY24aiINm6CnD_QAlNo3aFpARD3A","color":"Olive Green","rating":"4.6","description":"Classic bomber jacket with ribbed cuffs and hem. Perfect for casual streetwear."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/3">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Classic Bomber Jacket</h3>
                </a>
                <p class="text-sm text-gray-500">Olive Green</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹7,499</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.6</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Card 8 - Enhanced -->
            <div class="product-card group" data-category="shirts" data-price="2799" data-name="Casual Denim Shirt">
              <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <a href="/product/4" class="block w-full h-full"> 
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc" alt="Casual Shirt" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </a>

                <div class="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New</span>
                  <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">In Stock</span>
                </div>
                
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <button class="wishlist-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden" onclick="toggleWishlist(4, 'Casual Denim Shirt', 2799, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc')">
                    <span class="material-symbols-outlined text-[20px] wishlist-icon">favorite_border</span>
                    <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                  </button>
                  <button class="quick-view-btn h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110" 
                    data-product='{"name":"Casual Denim Shirt","price":"₹2,799","image":"https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc","color":"Light Blue","rating":"4.7","description":"Casual denim shirt with a relaxed fit. Perfect for everyday wear."}'>
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>

                <div class="size-selector absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div class="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl">
                    <p class="text-xs font-semibold text-gray-900 dark:text-white mb-2 text-center">Select Size</p>
                    <div class="flex gap-2 justify-center mb-2">
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="S">S</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="M">M</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="L">L</button>
                      <button class="size-btn px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all" data-size="XL">XL</button>
                    </div>
                    <button class="add-to-cart-btn w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm">
                      <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                </div>
              </div>
              <div class="space-y-1">
                <a href="/product/4">
                    <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">Casual Denim Shirt</h3>
                </a>
                <p class="text-sm text-gray-500">Light Blue</p>
                <div class="flex items-center justify-between">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">₹2,799</p>
                  <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">4.7</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Load More -->
          <div class="mt-16 text-center">
            <button class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-full text-base font-semibold text-gray-900 dark:text-white hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              <span>Load More Products</span>
              <span class="material-symbols-outlined ml-2">expand_more</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Style Inspiration Section -->
      <section class="py-24 bg-white dark:bg-[#0a0a0a]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Style Inspiration</h2>
            <p class="text-gray-600 dark:text-gray-400">Curated looks featuring our new arrivals</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Look 1 -->
            <div class="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCkCWBM8-JXll9B7E3T538cp_oQJppPVtpW7Xjo-KtOfjxzlMeM_abJIttMjtpgVoCaeBE4H1XlfC_udVc0Raw6fOZq2h9sD9ULQ7oJRfWy7iZBDpP_AkwjHoTZhAjud4ZHOZkKpsVvCPBQ5jcFgcWoFNV8DpLPXurDiOR4H14TcL26H3Qnb1cQTvfYrtwGXgDyv2Dkmk0iLtzKp7m7yiSEMn2tGcHvlOwJ_E4KiBSeZe15xnY24aiINm6CnD_QAlNo3aFpARD3A" alt="Business Casual Look" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span class="text-white/80 text-sm font-medium mb-2">The Modern Professional</span>
                <h3 class="text-2xl font-bold text-white mb-4">Business Casual Perfection</h3>
                <div class="flex gap-2">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Blazer</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Chinos</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Shoes</span>
                </div>
                <button class="mt-4 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                  Shop This Look
                </button>
              </div>
            </div>

            <!-- Look 2 -->
            <div class="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7sGjWXdsiRQfKUoTIQiHyJ9k-aycwn4SmzgXcFappa9pHShgPTBuQxkX29zq8PGX--Q1eov6VSKpNd3xRV5oNNGb_AbmDgbQx4rs0vhmfSQoNE3M9hW-UuqVETCnAsZGVu9zCKGFsPkcMgCWSPGQOPwVKOHCEoR2GNDtdc9ZUC6_w3QqhndP9EHAzhn0sJVO0vHQSbO_-KGg7StawgS18_R2wRiJtWp7hGl66MXnuu8Vksnd6Jvm4Nxw5MzUPkw_PWbns-9FIZw" alt="Weekend Casual Look" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span class="text-white/80 text-sm font-medium mb-2">Weekend Vibes</span>
                <h3 class="text-2xl font-bold text-white mb-4">Effortless Casual</h3>
                <div class="flex gap-2">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Shirt</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Jeans</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">Sneakers</span>
                </div>
                <button class="mt-4 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                  Shop This Look
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter CTA -->
      <section class="py-24 bg-gradient-to-br from-primary via-accent to-purple-600 text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span class="material-symbols-outlined text-6xl mb-6 opacity-90">notifications_active</span>
          <h2 class="text-3xl md:text-5xl font-black mb-4">Never Miss a Drop</h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Get notified when new items arrive. Be the first to shop our latest collections.</p>
          
          <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none focus:border-white text-white placeholder-white/70" />
            <button type="button" class="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <!-- Quick View Modal -->
      <div id="quick-view-modal" class="fixed inset-0 z-[100] hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeQuickView()"></div>
        
        <!-- Modal Content -->
        <div class="relative h-full flex items-center justify-center p-4">
          <div class="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <!-- Close Button -->
            <button onclick="closeQuickView()" class="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
              <span class="material-symbols-outlined">close</span>
            </button>
            
            <div class="grid md:grid-cols-2 gap-8 p-8">
              <!-- Product Image -->
              <div class="space-y-4">
                <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img id="modal-product-image" src="" alt="" class="w-full h-full object-cover">
                </div>
              </div>
              
              <!-- Product Details -->
              <div class="space-y-6">
                <div>
                  <h2 id="modal-product-name" class="text-3xl font-black text-gray-900 dark:text-white mb-2"></h2>
                  <div class="flex items-center gap-4 mb-4">
                    <div class="flex items-center gap-1">
                      <span class="material-symbols-outlined text-yellow-400">star</span>
                      <span id="modal-product-rating" class="font-semibold"></span>
                      <span class="text-gray-500 text-sm">(128 reviews)</span>
                    </div>
                  </div>
                  <p id="modal-product-price" class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"></p>
                </div>
                
                <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p id="modal-product-description" class="text-gray-600 dark:text-gray-400 leading-relaxed"></p>
                </div>
                
                <!-- Color Selection -->
                <div>
                  <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Color: <span id="modal-selected-color" class="text-primary"></span></label>
                  <div class="flex gap-2">
                    <button class="color-option w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-primary transition-all"></button>
                    <button class="color-option w-10 h-10 rounded-full bg-black border-2 border-transparent hover:border-primary transition-all"></button>
                    <button class="color-option w-10 h-10 rounded-full bg-blue-500 border-2 border-transparent hover:border-primary transition-all"></button>
                    <button class="color-option w-10 h-10 rounded-full bg-gray-500 border-2 border-transparent hover:border-primary transition-all"></button>
                  </div>
                </div>
                
                <!-- Size Selection -->
                <div>
                  <label class="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Size: <span id="modal-selected-size" class="text-primary">Select a size</span></label>
                  <div class="grid grid-cols-5 gap-2">
                    <button class="modal-size-btn px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all font-medium" data-size="S">S</button>
                    <button class="modal-size-btn px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all font-medium" data-size="M">M</button>
                    <button class="modal-size-btn px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all font-medium" data-size="L">L</button>
                    <button class="modal-size-btn px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all font-medium" data-size="XL">XL</button>
                    <button class="modal-size-btn px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all font-medium" data-size="XXL">XXL</button>
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="space-y-3 pt-6">
                  <button class="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span>Add to Cart</span>
                  </button>
                  <button class="w-full py-4 border-2 border-gray-300 dark:border-gray-700 rounded-full font-bold hover:border-primary transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined">favorite_border</span>
                    <span>Add to Wishlist</span>
                  </button>
                </div>
                
                <!-- Product Features -->
                <div class="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-3">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="material-symbols-outlined text-green-500">local_shipping</span>
                    <span class="text-gray-600 dark:text-gray-400">Free shipping on orders over ₹999</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="material-symbols-outlined text-blue-500">autorenew</span>
                    <span class="text-gray-600 dark:text-gray-400">Easy 30-day returns</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="material-symbols-outlined text-purple-500">verified</span>
                    <span class="text-gray-600 dark:text-gray-400">100% authentic products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    `;
}

// New Arrivals page animations and interactions
function initNewArrivalsAnimations() {
  // Countdown timer for next drop
  initNextDropCountdown();

  // Filter functionality
  initFilterPills();

  // Scroll animations
  initScrollAnimations();

  // Advanced filters toggle
  initAdvancedFilters();

  // Wishlist functionality
  initWishlist();

  // Quick view modal
  initQuickView();

  // Live purchase notifications
  initLivePurchaseNotifications();

  // Size selection
  initSizeSelection();

  // Add to cart functionality
  initAddToCart();
}

// Countdown timer for next drop (3 days from now)
function initNextDropCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;

    if (distance < 0) {
      endDate.setDate(endDate.getDate() + 3);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const daysEl = document.getElementById('new-arrivals-days');
    const hoursEl = document.getElementById('new-arrivals-hours');
    const minutesEl = document.getElementById('new-arrivals-minutes');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Filter pills functionality
function initFilterPills() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active state
      filterPills.forEach(p => {
        p.classList.remove('active', 'bg-gray-900', 'dark:bg-white', 'text-white', 'dark:text-gray-900', 'shadow-lg');
        p.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      });

      pill.classList.add('active', 'bg-gray-900', 'dark:bg-white', 'text-white', 'dark:text-gray-900', 'shadow-lg');
      pill.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');

      // Filter products
      const filter = pill.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Advanced filters toggle
function initAdvancedFilters() {
  const toggleBtn = document.getElementById('toggle-filters');
  const advancedFilters = document.getElementById('advanced-filters');

  if (toggleBtn && advancedFilters) {
    toggleBtn.addEventListener('click', () => {
      advancedFilters.classList.toggle('hidden');
    });
  }
}

// Wishlist functionality with heart animation
function initWishlist() {
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  wishlistBtns.forEach(btn => {
    const productName = btn.getAttribute('data-product');

    // Check if already in wishlist
    if (wishlist.includes(productName)) {
      const icon = btn.querySelector('.wishlist-icon');
      if (icon) {
        icon.textContent = 'favorite';
        btn.classList.add('bg-red-500', 'text-white');
      }
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const icon = btn.querySelector('.wishlist-icon');
      const particlesContainer = btn.querySelector('.heart-particles');

      if (wishlist.includes(productName)) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item !== productName);
        if (icon) icon.textContent = 'favorite_border';
        btn.classList.remove('bg-red-500', 'text-white');
      } else {
        // Add to wishlist with animation
        wishlist.push(productName);
        if (icon) icon.textContent = 'favorite';
        btn.classList.add('bg-red-500', 'text-white');

        // Create heart particles
        if (particlesContainer) {
          for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '❤️';
            particle.style.position = 'absolute';
            particle.style.fontSize = '12px';
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';
            particle.style.pointerEvents = 'none';

            const angle = (i / 8) * Math.PI * 2;
            const distance = 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            particle.animate([
              { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
              { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`, opacity: 0 }
            ], {
              duration: 800,
              easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            });

            particlesContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
          }
        }
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
  });
}

// Quick view modal
function initQuickView() {
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');

  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const productData = JSON.parse(btn.getAttribute('data-product'));
      openQuickView(productData);
    });
  });

  // Modal size selection
  const modalSizeBtns = document.querySelectorAll('.modal-size-btn');
  modalSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalSizeBtns.forEach(b => {
        b.classList.remove('border-primary', 'bg-primary', 'text-white');
        b.classList.add('border-gray-200', 'dark:border-gray-700');
      });
      btn.classList.add('border-primary', 'bg-primary', 'text-white');
      btn.classList.remove('border-gray-200', 'dark:border-gray-700');

      const selectedSize = document.getElementById('modal-selected-size');
      if (selectedSize) selectedSize.textContent = btn.getAttribute('data-size');
    });
  });
}

// Open quick view modal
function openQuickView(product) {
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  // Populate modal with product data
  const modalImage = document.getElementById('modal-product-image');
  const modalName = document.getElementById('modal-product-name');
  const modalPrice = document.getElementById('modal-product-price');
  const modalRating = document.getElementById('modal-product-rating');
  const modalDescription = document.getElementById('modal-product-description');
  const modalColor = document.getElementById('modal-selected-color');

  if (modalImage) modalImage.src = product.image;
  if (modalName) modalName.textContent = product.name;
  if (modalPrice) modalPrice.textContent = product.price;
  if (modalRating) modalRating.textContent = product.rating;
  if (modalDescription) modalDescription.textContent = product.description;
  if (modalColor) modalColor.textContent = product.color;

  // Show modal with animation
  modal.classList.remove('hidden');
  modal.style.animation = 'fadeIn 0.3s ease';
  document.body.style.overflow = 'hidden';
}

// Close quick view modal
function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  modal.style.animation = 'fadeOut 0.3s ease';
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// Live purchase notifications
function initLivePurchaseNotifications() {
  const products = [
    { name: 'Premium Linen Shirt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc' },
    { name: 'Tailored Chino Pants', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4' },
    { name: 'Modern Fit Blazer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo' }
  ];

  function showNotification() {
    const notification = document.getElementById('purchase-notification');
    if (!notification) return;

    const product = products[Math.floor(Math.random() * products.length)];
    const timeAgo = Math.floor(Math.random() * 30) + 1;

    const img = document.getElementById('notification-img');
    const productName = document.getElementById('notification-product');
    const time = document.getElementById('notification-time');

    if (img) img.src = product.img;
    if (productName) productName.textContent = product.name;
    if (time) time.textContent = `${timeAgo} minutes ago`;

    // Show notification
    notification.style.transform = 'translateX(0)';

    // Hide after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(120%)';
    }, 5000);
  }

  // Show first notification after 5 seconds
  setTimeout(showNotification, 5000);

  // Show random notifications every 15-30 seconds
  setInterval(() => {
    const delay = Math.random() * 15000 + 15000;
    setTimeout(showNotification, delay);
  }, 30000);
}

// Size selection on product cards
function initSizeSelection() {
  const sizeBtns = document.querySelectorAll('.size-btn');

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Get parent card's size buttons
      const card = btn.closest('.product-card');
      if (!card) return;

      const cardSizeBtns = card.querySelectorAll('.size-btn');
      cardSizeBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('bg-gray-100', 'dark:bg-gray-800');
      });

      btn.classList.add('bg-primary', 'text-white');
      btn.classList.remove('bg-gray-100', 'dark:bg-gray-800');
    });
  });
}

// Add to cart functionality
function initAddToCart() {
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Get selected size
      const card = btn.closest('.product-card');
      if (!card) return;

      const selectedSizeBtn = card.querySelector('.size-btn.bg-primary');
      if (!selectedSizeBtn) {
        // Show toast to select size
        showToast('Please select a size', 'warning');
        return;
      }

      const size = selectedSizeBtn.getAttribute('data-size');
      const productName = card.getAttribute('data-name');

      // Add animation
      btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-bounce">check</span><span>Added!</span>';
      btn.classList.add('bg-green-500');

      setTimeout(() => {
        btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">add_shopping_cart</span><span>Add to Cart</span>';
        btn.classList.remove('bg-green-500');
      }, 2000);

      showToast(`${productName} (Size: ${size}) added to cart!`, 'success');
    });
  });
}

// Toast notification helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 z-[200] px-6 py-4 rounded-2xl shadow-2xl transform translate-y-0 transition-all duration-300 ${type === 'success' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
    } text-white font-semibold`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = 'translateY(200%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Scroll animations
function initScrollAnimations() {
  const productCards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Make closeQuickView available globally
window.closeQuickView = closeQuickView;

