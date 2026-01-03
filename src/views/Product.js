import { initShop } from './ShopLogic.js';

export default async function Product() {
  // Extract ID from path
  const idMatch = window.location.pathname.match(/\/product\/(\d+)/);
  const id = idMatch ? idMatch[1] : null;

  if (!id) {
    return `<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
              <span class="material-symbols-outlined text-8xl text-gray-300 dark:text-gray-700 mb-4">shopping_bag</span>
              <h1 class="text-4xl font-black mb-4 text-gray-900 dark:text-white">Product Not Found</h1>
              <p class="text-gray-500 mb-8">The product you're looking for doesn't exist.</p>
              <a href="/shop" class="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">Return to Shop</a>
            </div>`;
  }

  // Fetch product data
  let product = null;
  let relatedProducts = [];

  try {
    const [productRes, allRes] = await Promise.all([
      fetch(`/api/products/${id}`),
      fetch('/api/products')
    ]);

    if (productRes.ok) {
      product = await productRes.json();
    }

    if (allRes.ok) {
      const all = await allRes.json();
      relatedProducts = all.filter(p => p.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    }
  } catch (err) {
    console.error("Failed to fetch product", err);
  }

  // Fallback mock data
  if (!product) {
    product = {
      id: id,
      name: "Premium Product",
      price: 2499,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc",
      description: "Experience the perfect blend of style and comfort. Meticulously tailored for a modern fit, this piece serves as the ultimate foundation for any curated wardrobe.",
      rating: 4.8,
      reviews: 128,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy']
    };

    if (id === '2') {
      product.name = "Tailored Chino Pants";
      product.price = 3299;
      product.image = "https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4";
    } else if (id === '3') {
      product.name = "Modern Fit Blazer";
      product.price = 8999;
      product.image = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo";
    }
  }

  // Prepare data
  const images = [product.image, product.image, product.image, product.image];
  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL'];
  const colors = product.colors || ['Black', 'White', 'Navy'];
  const rating = product.rating || 4.5;
  const reviews = product.reviews || 128;

  // Render stars
  const stars = Array(5).fill(0).map((_, i) =>
    `<span class="material-symbols-outlined text-yellow-400 text-lg">${i < Math.floor(rating) ? 'star' : 'star_border'}</span>`
  ).join('');

  setTimeout(() => {
    initShop();
    initProductPage(product);
  }, 50);

  return `
    <div class="product-page min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] font-display selection:bg-primary/20 selection:text-primary pb-32 overflow-x-hidden">
      
      <!-- Animated Background -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl opacity-60 animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 animate-fadeIn">
          <a href="/" class="hover:text-primary transition-colors flex items-center gap-1 group">
            <span class="material-symbols-outlined text-base group-hover:scale-110 transition-transform">home</span>
            Home
          </a>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <a href="/shop" class="hover:text-primary transition-colors">Shop</a>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <span class="font-semibold text-gray-900 dark:text-white truncate max-w-[200px]">${product.name}</span>
        </nav>

        <!-- Main Product Section -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          
          <!-- Image Gallery -->
          <div class="space-y-6 animate-slideInLeft">
            <!-- Main Image -->
            <div class="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-2xl group">
              <img id="main-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-center transition-all duration-700 cursor-zoom-in group-hover:scale-110" onclick="openLightbox(this.src)" />
              
              <!-- Floating Badge -->
              <div class="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm animate-pulse">
                New Arrival
              </div>
              
              <!-- Floating Actions -->
              <div class="absolute top-6 right-6 flex flex-col gap-3">
                <button onclick="toggleWishlist(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" class="wishlist-btn h-12 w-12 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-xl flex items-center justify-center text-gray-900 dark:text-white hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-xl border border-white/20 group/btn">
                  <span class="material-symbols-outlined text-2xl wishlist-icon transition-transform group-active/btn:scale-75">favorite_border</span>
                  <div class="heart-particles absolute inset-0 pointer-events-none"></div>
                </button>
                <button class="h-12 w-12 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-xl flex items-center justify-center text-gray-900 dark:text-white hover:bg-white dark:hover:bg-black hover:scale-110 transition-all shadow-xl border border-white/20" onclick="shareProduct()">
                  <span class="material-symbols-outlined text-2xl">share</span>
                </button>
              </div>

              <!-- Zoom Hint -->
              <div class="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all pointer-events-none flex items-center gap-2 shadow-xl">
                <span class="material-symbols-outlined text-lg">zoom_in</span>
                Click to zoom
              </div>
            </div>
            
            <!-- Thumbnails -->
            <div class="grid grid-cols-4 gap-4">
              ${images.map((img, idx) => `
                <button onclick="changeMainImage('${img}', this)" class="thumbnail-btn relative aspect-square rounded-2xl overflow-hidden border-3 ${idx === 0 ? 'border-primary ring-4 ring-primary/20 shadow-lg shadow-primary/30' : 'border-gray-200 dark:border-gray-700'} hover:border-primary hover:shadow-lg transition-all group bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <img src="${img}" alt="View ${idx + 1}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Product Info -->
          <div class="flex flex-col justify-center space-y-8 animate-slideInRight">
            
            <!-- Status Badges -->
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">Premium Quality</span>
              <span class="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2 border border-green-500/20">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></span>
                In Stock
              </span>
            </div>

            <!-- Product Name -->
            <div>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.05] mb-4 tracking-tight bg-clip-text">
                ${product.name}
              </h1>
              
              <!-- Ratings -->
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  ${stars}
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <span class="text-gray-900 dark:text-white font-bold text-lg mr-1">${rating}</span>
                  <span class="text-gray-400">•</span>
                  <span class="ml-1">${reviews} reviews</span>
                </span>
              </div>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-4 py-6 border-y border-gray-200 dark:border-gray-800">
              <span class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-purple-600 animate-gradient bg-[length:200%_auto]">₹${product.price}</span>
              <div class="flex flex-col">
                <span class="text-2xl text-gray-400 line-through">₹${Math.floor(product.price * 1.4)}</span>
                <span class="text-sm font-bold text-green-600 dark:text-green-400">Save ${Math.floor(((product.price * 1.4 - product.price) / (product.price * 1.4)) * 100)}%</span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed pl-6 border-l-4 border-gradient-to-b from-primary to-accent">
              ${product.description || 'Experience the perfect blend of style and comfort. Meticulously tailored for a modern fit, this piece serves as the ultimate foundation for any curated wardrobe.'}
            </p>

            <!-- Color Selection -->
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="block text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Select Color</span>
                <span id="selected-color" class="text-sm text-gray-500 dark:text-gray-400 font-medium">Black</span>
              </div>
              <div class="flex flex-wrap gap-3">
                ${colors.map((color, idx) => `
                  <button onclick="selectColor(this, '${color}')" class="color-selector group relative w-14 h-14 rounded-full border-3 ${idx === 0 ? 'border-primary scale-110 ring-4 ring-offset-2 ring-primary/30 shadow-lg shadow-primary/30' : 'border-gray-200 dark:border-gray-700'} transition-all hover:scale-110 focus:outline-none overflow-hidden" title="${color}" style="background: linear-gradient(135deg, ${color.toLowerCase() === 'white' ? '#f5f5f5' : color.toLowerCase()} 0%, ${color.toLowerCase() === 'white' ? '#e0e0e0' : color.toLowerCase()} 100%);">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    ${idx === 0 ? `<span class="material-symbols-outlined text-sm absolute inset-0 flex items-center justify-center" style="color: ${color.toLowerCase() === 'white' || color.toLowerCase() === 'yellow' ? 'black' : 'white'}">check</span>` : ''}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Size Selection -->
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="block text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Select Size</span>
                <button class="flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors group">
                  <span class="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">straighten</span>
                  Size Guide
                </button>
              </div>
              <div class="grid grid-cols-5 gap-3">
                ${sizes.map((size, idx) => `
                  <button onclick="selectSize(this, '${size}')" class="size-selector h-16 rounded-2xl border-3 ${idx === 1 ? 'border-primary bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/30 scale-105' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-500'} font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-lg">
                    ${size}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity & Add to Cart -->
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Quantity -->
              <div class="flex items-center bg-white dark:bg-gray-800 rounded-2xl p-1.5 w-fit border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                <button onclick="updateQuantity(-1)" class="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all">
                  <span class="material-symbols-outlined">remove</span>
                </button>
                <span id="quantity-display" class="w-16 text-center font-black text-gray-900 dark:text-white text-xl">1</span>
                <button onclick="updateQuantity(1)" class="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all">
                  <span class="material-symbols-outlined">add</span>
                </button>
              </div>

              <!-- Add to Cart -->
              <button onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" class="flex-1 h-16 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-right text-white rounded-2xl font-bold text-lg shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span class="material-symbols-outlined relative z-10 text-2xl">shopping_bag</span>
                <span class="relative z-10">Add to Cart</span>
              </button>
            </div>

            <!-- Buy Now Button -->
            <button class="w-full h-16 border-3 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Buy Now
            </button>

            <!-- Features -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div class="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200/50 dark:border-blue-800/30">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <span class="material-symbols-outlined">local_shipping</span>
                </div>
                <div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Free Shipping</p>
                  <p class="font-bold text-gray-900 dark:text-white text-sm">Orders > ₹800</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 border border-purple-200/50 dark:border-purple-800/30">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <span class="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Warranty</p>
                  <p class="font-bold text-gray-900 dark:text-white text-sm">2 Years</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 border border-green-200/50 dark:border-green-800/30">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg">
                  <span class="material-symbols-outlined">assignment_return</span>
                </div>
                <div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Easy Returns</p>
                  <p class="font-bold text-gray-900 dark:text-white text-sm">30 Days</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 border border-orange-200/50 dark:border-orange-800/30">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                  <span class="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">100% Secure</p>
                  <p class="font-bold text-gray-900 dark:text-white text-sm">Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs Section -->
        <div class="max-w-6xl mx-auto mb-20">
          <div class="flex justify-center gap-2 sm:gap-8 border-b-2 border-gray-200 dark:border-gray-800 overflow-x-auto mb-12">
            <button onclick="switchTab('description')" class="tab-btn active px-6 sm:px-8 pb-4 text-base sm:text-lg font-bold border-b-4 border-primary text-primary transition-all whitespace-nowrap hover:text-primary relative">
              <span>Description</span>
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-full"></div>
            </button>
            <button onclick="switchTab('details')" class="tab-btn px-6 sm:px-8 pb-4 text-base sm:text-lg font-semibold text-gray-500 border-b-4 border-transparent hover:text-gray-900 dark:hover:text-white transition-all whitespace-nowrap">Details</button>
            <button onclick="switchTab('reviews')" class="tab-btn px-6 sm:px-8 pb-4 text-base sm:text-lg font-semibold text-gray-500 border-b-4 border-transparent hover:text-gray-900 dark:hover:text-white transition-all whitespace-nowrap">
              Reviews <span class="ml-1 px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded-full">${reviews}</span>
            </button>
          </div>
          
          <div class="px-4">
            <!-- Description Tab -->
            <div id="tab-description" class="tab-content block animate-fadeIn">
              <div class="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                <div class="text-center mb-12">
                  <h2 class="text-4xl font-black text-gray-900 dark:text-white mb-6">Product Story</h2>
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Elevate your daily rotation with this masterpiece. <strong class="text-gray-900 dark:text-white">Designed with attention to detail</strong>, it features premium stitching and high-quality fabric that feels soft against the skin while providing excellent durability.
                  </p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8 items-center mb-12 p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <img src="${product.image}" class="rounded-2xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div class="space-y-6">
                    <h3 class="text-3xl font-black text-gray-900 dark:text-white">Why You'll Love It</h3>
                    <ul class="space-y-4">
                      <li class="flex items-start gap-3 group">
                        <span class="material-symbols-outlined text-green-500 text-2xl group-hover:scale-125 transition-transform">check_circle</span>
                        <div>
                          <p class="font-bold text-gray-900 dark:text-white">Premium Fabric</p>
                          <p class="text-sm text-gray-600 dark:text-gray-400">100% sustainable materials</p>
                        </div>
                      </li>
                      <li class="flex items-start gap-3 group">
                        <span class="material-symbols-outlined text-green-500 text-2xl group-hover:scale-125 transition-transform">check_circle</span>
                        <div>
                          <p class="font-bold text-gray-900 dark:text-white">Ethically Crafted</p>
                          <p class="text-sm text-gray-600 dark:text-gray-400">Fair trade certified</p>
                        </div>
                      </li>
                      <li class="flex items-start gap-3 group">
                        <span class="material-symbols-outlined text-green-500 text-2xl group-hover:scale-125 transition-transform">check_circle</span>
                        <div>
                          <p class="font-bold text-gray-900 dark:text-white">Built to Last</p>
                          <p class="text-sm text-gray-600 dark:text-gray-400">Designed for longevity</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Details Tab -->
            <div id="tab-details" class="tab-content hidden animate-fadeIn">
              <div class="max-w-4xl mx-auto">
                <div class="rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <h3 class="text-3xl font-black mb-10 text-center text-gray-900 dark:text-white">Technical Specifications</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Material</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">100% Organic Cotton</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Weight</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">180 GSM</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Fit</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">Regular Modern Fit</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Care Instructions</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">Machine Wash Cold</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Origin</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">Made in Italy</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Sustainability</p>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">Carbon Neutral</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Reviews Tab -->
            <div id="tab-reviews" class="tab-content hidden animate-fadeIn">
              <div class="max-w-5xl mx-auto">
                <!-- Rating Overview -->
                <div class="grid md:grid-cols-2 gap-8 mb-12 p-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <div class="text-center flex flex-col items-center justify-center">
                    <span class="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">${rating}</span>
                    <div class="flex text-yellow-400 text-3xl mb-4">★★★★★</div>
                    <p class="text-gray-500 dark:text-gray-400 font-medium">Based on ${reviews} reviews</p>
                  </div>
                  <div class="space-y-3">
                    ${[5, 4, 3, 2, 1].map(star => {
    const percentage = star === 5 ? 85 : star === 4 ? 10 : star === 3 ? 3 : star === 2 ? 1 : 1;
    return `
                        <div class="flex items-center gap-3">
                          <span class="w-12 text-right font-bold text-gray-600 dark:text-gray-400">${star} ★</span>
                          <div class="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000" style="width: ${percentage}%"></div>
                          </div>
                          <span class="w-12 text-gray-500 dark:text-gray-400 font-medium">${percentage}%</span>
                        </div>
                      `;
  }).join('')}
                  </div>
                </div>

                <!-- Reviews List -->
                <div class="space-y-6">
                  ${[
      { name: 'John Doe', initials: 'JD', time: '2 days ago', rating: 5, title: 'Absolutely love this product!', review: 'The quality is outstanding and the fit is perfect. I was skeptical about the size at first, but the size guide was spot on. Highly recommended!', gradient: 'from-primary to-purple-600' },
      { name: 'Sarah Miller', initials: 'SM', time: '1 week ago', rating: 5, title: 'Great value for money', review: 'Fast shipping and great packaging. The product feels premium and looks exactly like the photos. Will definitely order again!', gradient: 'from-green-400 to-blue-500' },
      { name: 'Mike Johnson', initials: 'MJ', time: '2 weeks ago', rating: 4, title: 'Very satisfied', review: 'Excellent product overall. The material is top-notch and the design is modern. Only minor issue was the delivery took a bit longer than expected.', gradient: 'from-orange-400 to-red-500' }
    ].map(review => `
                    <div class="p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div class="flex justify-between items-start mb-6">
                        <div class="flex items-center gap-4">
                          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg">
                            ${review.initials}
                          </div>
                          <div>
                            <h4 class="font-bold text-lg text-gray-900 dark:text-white">${review.name}</h4>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Verified Buyer • ${review.time}</span>
                          </div>
                        </div>
                        <div class="flex text-yellow-400 text-xl">★★★★★</div>
                      </div>
                      <h5 class="font-bold text-xl text-gray-900 dark:text-white mb-3">${review.title}</h5>
                      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${review.review}</p>
                    </div>
                  `).join('')}
                </div>
                
                <button class="w-full mt-10 py-5 border-3 border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all hover:scale-[1.02]">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        <div class="border-t-2 border-gray-200 dark:border-gray-800 pt-16">
          <div class="flex items-center justify-between mb-12">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">You Might Also Like</h2>
            <a href="/shop" class="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
              View All 
              <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${relatedProducts.map(p => `
              <div class="product-card group">
                <div class="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 mb-5 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <a href="/product/${p.id}" class="block w-full h-full">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />
                  </a>
                  
                  ${Math.random() > 0.5 ? '<div class="absolute top-4 left-4"><span class="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">New</span></div>' : ''}

                  <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <button class="wishlist-btn h-11 w-11 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-xl hover:bg-red-500 hover:text-white transition-all hover:scale-110" onclick="toggleWishlist(${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')">
                      <span class="material-symbols-outlined text-lg wishlist-icon">favorite_border</span>
                    </button>
                    <button class="h-11 w-11 flex items-center justify-center rounded-full bg-white dark:bg-black text-gray-900 dark:text-white shadow-xl hover:bg-primary hover:text-white transition-all hover:scale-110" onclick='openQuickView(${JSON.stringify(p).replace(/'/g, "\\'")})'> 
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </div>

                  <button onclick="addToCart(${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')" class="absolute bottom-4 right-4 h-12 w-12 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 delay-100">
                    <span class="material-symbols-outlined text-xl">add_shopping_cart</span>
                  </button>
                </div>
                
                <a href="/product/${p.id}" class="block space-y-2">
                  <h3 class="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">${p.name}</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Premium Quality</p>
                    <p class="font-black text-xl text-gray-900 dark:text-white">₹${p.price}</p>
                  </div>
                </a>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Lightbox Modal -->
      <div id="lightbox-modal" class="fixed inset-0 z-[100] hidden bg-black/95 backdrop-blur-md opacity-0 transition-all duration-300" onclick="closeLightbox()">
        <button class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[101] hover:rotate-90 transition-transform duration-300" onclick="closeLightbox()">
          <span class="material-symbols-outlined text-5xl">close</span>
        </button>
        <div class="w-full h-full flex items-center justify-center p-4">
          <img id="lightbox-image" src="" class="max-w-full max-h-full object-contain scale-90 transition-transform duration-300 rounded-2xl shadow-2xl" onclick="event.stopPropagation()" />
        </div>
      </div>

      <!-- Quick View Modal -->
      <div id="quick-view-modal" class="fixed inset-0 z-[100] hidden" role="dialog" aria-modal="true">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeQuickView()"></div>
        <div class="relative h-full flex items-center justify-center p-4">
          <div id="quick-view-content" class="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all scale-95 opacity-0">
            <!-- Content injected by JS -->
          </div>
        </div>
      </div>

      <!-- Sticky Add to Cart Bar (Mobile) -->
      <div id="sticky-cart" class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 p-4 shadow-2xl transform translate-y-full transition-transform duration-300 lg:hidden">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">₹${product.price}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">${product.name}</p>
          </div>
          <button onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" class="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
            <span class="material-symbols-outlined">shopping_bag</span>
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  `;
}

// Global Functions
let quantity = 1;

window.changeMainImage = (src, btn) => {
  const mainImg = document.getElementById('main-image');
  mainImg.style.opacity = '0.3';
  mainImg.style.transform = 'scale(0.95)';

  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
    mainImg.style.transform = 'scale(1)';
  }, 200);

  document.querySelectorAll('.thumbnail-btn').forEach(b => {
    b.classList.remove('border-primary', 'ring-4', 'ring-primary/20', 'shadow-lg', 'shadow-primary/30');
    b.classList.add('border-gray-200', 'dark:border-gray-700');
  });
  btn.classList.remove('border-gray-200', 'dark:border-gray-700');
  btn.classList.add('border-primary', 'ring-4', 'ring-primary/20', 'shadow-lg', 'shadow-primary/30');
};

window.selectColor = (btn, color) => {
  document.querySelectorAll('.color-selector').forEach(b => {
    b.classList.remove('border-primary', 'scale-110', 'ring-4', 'ring-offset-2', 'ring-primary/30', 'shadow-lg', 'shadow-primary/30');
    b.classList.add('border-gray-200', 'dark:border-gray-700');
    const icon = b.querySelector('.material-symbols-outlined');
    if (icon) icon.remove();
  });

  btn.classList.remove('border-gray-200', 'dark:border-gray-700');
  btn.classList.add('border-primary', 'scale-110', 'ring-4', 'ring-offset-2', 'ring-primary/30', 'shadow-lg', 'shadow-primary/30');

  const check = document.createElement('span');
  check.className = 'material-symbols-outlined text-sm absolute inset-0 flex items-center justify-center';
  check.textContent = 'check';
  check.style.color = color.toLowerCase() === 'white' || color.toLowerCase() === 'yellow' ? 'black' : 'white';
  btn.appendChild(check);

  const selectedColorText = document.getElementById('selected-color');
  if (selectedColorText) selectedColorText.textContent = color;
};

window.selectSize = (btn, size) => {
  document.querySelectorAll('.size-selector').forEach(b => {
    b.classList.remove('border-primary', 'bg-gradient-to-br', 'from-primary', 'to-accent', 'text-white', 'shadow-xl', 'shadow-primary/30', 'scale-105');
    b.classList.add('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300', 'bg-white', 'dark:bg-gray-800/50');
  });

  btn.classList.remove('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300', 'bg-white', 'dark:bg-gray-800/50');
  btn.classList.add('border-primary', 'bg-gradient-to-br', 'from-primary', 'to-accent', 'text-white', 'shadow-xl', 'shadow-primary/30', 'scale-105');
};

window.updateQuantity = (change) => {
  quantity = Math.max(1, quantity + change);
  const display = document.getElementById('quantity-display');
  if (display) {
    display.textContent = quantity;
    display.style.transform = 'scale(1.3)';
    setTimeout(() => display.style.transform = 'scale(1)', 200);
  }
};

window.switchTab = (tabName) => {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const isActive = btn.textContent.toLowerCase().includes(tabName) || (tabName === 'details' && btn.textContent.includes('Details'));
    if (isActive) {
      btn.classList.add('active', 'border-primary', 'text-primary');
      btn.classList.remove('border-transparent', 'text-gray-500');
    } else {
      btn.classList.remove('active', 'border-primary', 'text-primary');
      btn.classList.add('border-transparent', 'text-gray-500');
    }
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === `tab-${tabName}`) {
      content.classList.remove('hidden');
      content.classList.add('block');
      content.style.animation = 'fadeIn 0.5s ease-out forwards';
    } else {
      content.classList.add('hidden');
      content.classList.remove('block');
    }
  });
};

window.shareProduct = () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(window.location.href);
    if (window.showToast) window.showToast('Link copied to clipboard!', 'success');
    else alert('Link copied to clipboard!');
  }
};

window.openQuickView = (product) => {
  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');

  if (!modal || !content) return;

  modal.classList.remove('hidden');
  setTimeout(() => {
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
  }, 10);

  content.innerHTML = `
    <button onclick="closeQuickView()" class="absolute top-6 right-6 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:rotate-90">
      <span class="material-symbols-outlined">close</span>
    </button>
    
    <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
      <div class="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform group-hover:scale-110">
      </div>
      
      <div class="space-y-6 flex flex-col justify-center">
        <div>
          <h2 class="text-4xl font-black text-gray-900 dark:text-white mb-4">${product.name}</h2>
          <div class="flex items-center gap-4 mb-4">
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-yellow-400">star</span>
              <span class="font-semibold text-gray-900 dark:text-white">4.8</span>
            </div>
          </div>
          <p class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">₹${product.price}</p>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            ${product.description || 'Experience premium quality with this exceptional piece. Designed for modern living.'}
          </p>
        </div>

        <div class="space-y-3 pt-6">
          <button onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')" class="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">shopping_cart</span>
            <span>Add to Cart</span>
          </button>
          <a href="/product/${product.id}" class="block w-full py-5 border-3 border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-center hover:border-primary hover:text-primary transition-all">
            View Full Details
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
};

window.closeQuickView = () => {
  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (modal && content) {
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
};

window.openLightbox = (src) => {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  if (modal && img) {
    img.src = src;
    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    img.classList.remove('scale-90');
    document.body.style.overflow = 'hidden';
  }
};

window.closeLightbox = () => {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  if (modal) {
    modal.classList.add('opacity-0');
    if (img) img.classList.add('scale-90');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
};

function initProductPage(product) {
  quantity = 1;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Sticky cart bar on scroll (mobile)
  const stickyCart = document.getElementById('sticky-cart');
  if (stickyCart && window.innerWidth < 1024) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 300 && currentScroll > lastScroll) {
        stickyCart.style.transform = 'translateY(0)';
      } else {
        stickyCart.style.transform = 'translateY(100%)';
      }
      lastScroll = currentScroll;
    });
  }
}
