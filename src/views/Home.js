export default function Home() {
  setTimeout(() => {
    initHomeAnimations();
  }, 100);

  return `
    <div class="w-full font-display">
      
      <!-- Modern Hero Section with Video Background Effect -->
      <section id="hero-section" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <!-- Animated Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        <!-- Animated Mesh Gradient -->
        <div class="absolute inset-0 opacity-30">
            <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div class="text-center lg:text-left space-y-8">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <span class="flex size-2 rounded-full bg-green-400 animate-pulse"></span>
                <span class="text-xs font-bold tracking-wider uppercase text-white">New Arrivals 2025</span>
              </div>
              
              <!-- Main Heading -->
              <h1 class="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
                <span class="block text-white mb-2">Elevate Your</span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient bg-[length:200%_auto]">Wardrobe</span>
              </h1>
              
              <!-- Subtitle -->
              <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover premium menswear that combines <span class="font-semibold text-white">luxury</span> with <span class="font-semibold text-white">comfort</span>. Crafted for the modern gentleman.
              </p>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="/shop" class="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-10 font-bold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 w-full sm:w-auto">
                  <span class="relative flex items-center gap-2">
                    <span>Explore Collection</span>
                    <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </a>
                <a href="/new-arrivals" class="group inline-flex h-14 items-center justify-center px-10 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <span class="flex items-center gap-2">
                    <span>New Arrivals</span>
                    <span class="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">auto_awesome</span>
                  </span>
                </a>
              </div>

              <!-- Stats -->
              <div class="pt-8 flex items-center justify-center lg:justify-start gap-8">
                  <div class="text-center lg:text-left">
                      <p class="text-3xl font-black text-white">15k+</p>
                      <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">Happy Clients</p>
                  </div>
                  <div class="w-px h-12 bg-white/20"></div>
                  <div class="text-center lg:text-left">
                      <p class="text-3xl font-black text-white">500+</p>
                      <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">Products</p>
                  </div>
                  <div class="w-px h-12 bg-white/20"></div>
                  <div class="text-center lg:text-left">
                      <p class="text-3xl font-black text-white">4.9★</p>
                      <p class="text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</p>
                  </div>
              </div>
            </div>
            
            <!-- Right Content - Hero Image -->
            <div class="relative h-[600px] lg:h-[700px] w-full">
              <div id="hero-image" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrjiTNEGV385FP09h8GI-F3xJksWUFwaIIMYI7c4w15K7UeRVFDAVCfIek6sGrUvd2bYnCycx9yCA6B55yMmojdhRRShspe_ulVPLSobR2guk1qorn6ogYNIa6DAd8HYutV1r2Y5L63yljN8XcA9Pwkc9g8u_BfVZFZt3V0vIoSsosBYlsrQv-MBiwzX0oFr01BYldEW7e4uCe2t9bsOmB1orRAV8tVCmFt60tmp3QgG5IMid9Na9JJ4JEhzWHPRRYdRHCigQaXu4" alt="Premium Menswear" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
                  
                  <!-- Floating Badge -->
                  <div class="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                      <span class="material-symbols-outlined text-purple-600 text-sm">local_fire_department</span>
                      <span class="text-xs font-bold text-gray-900">Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <p class="text-xs font-medium text-white/60 uppercase tracking-wider">Scroll Down</p>
            <span class="material-symbols-outlined text-white/60">keyboard_arrow_down</span>
        </div>
      </section>

      <!-- Featured Categories -->
      <section class="py-24 bg-white dark:bg-[#0a0a0a]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">Shop by Category</h2>
                <p class="text-gray-600 dark:text-gray-400">Curated collections for every occasion</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/shop" class="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCkCWBM8-JXll9B7E3T538cp_oQJppPVtpW7Xjo-KtOfjxzlMeM_abJIttMjtpgVoCaeBE4H1XlfC_udVc0Raw6fOZq2h9sD9ULQ7oJRfWy7iZBDpP_AkwjHoTZhAjud4ZHOZkKpsVvCPBQ5jcFgcWoFNV8DpLPXurDiOR4H14TcL26H3Qnb1cQTvfYrtwGXgDyv2Dkmk0iLtzKp7m7yiSEMn2tGcHvlOwJ_E4KiBSeZe15xnY24aiINm6CnD_QAlNo3aFpARD3A" alt="Formal Wear" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                        <h3 class="text-3xl font-bold text-white mb-2">Formal Wear</h3>
                        <p class="text-white/80 text-sm">Suits & Blazers</p>
                    </div>
                </a>
                
                <a href="/shop" class="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7sGjWXdsiRQfKUoTIQiHyJ9k-aycwn4SmzgXcFappa9pHShgPTBuQxkX29zq8PGX--Q1eov6VSKpNd3xRV5oNNGb_AbmDgbQx4rs0vhmfSQoNE3M9hW-UuqVETCnAsZGVu9zCKGFsPkcMgCWSPGQOPwVKOHCEoR2GNDtdc9ZUC6_w3QqhndP9EHAzhn0sJVO0vHQSbO_-KGg7StawgS18_R2wRiJtWp7hGl66MXnuu8Vksnd6Jvm4Nxw5MzUPkw_PWbns-9FIZw" alt="Casual" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                        <h3 class="text-3xl font-bold text-white mb-2">Casual</h3>
                        <p class="text-white/80 text-sm">Everyday Essentials</p>
                    </div>
                </a>
                
                <a href="/shop" class="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 dark:bg-gray-800">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBswJs7rnOkB3fDqmHOr0x3b2TLiv-IJTgXRuCQLWGMWSfsiTjTpqiXDn11yH8ZMM0-3S1mSKePhQlepMVwkFKZYz8ZzgEdXTV2Yjl1BbcGzdZ6Lvl4HcnRE_3SAOCyQQu-1tKyIiODqsccUPFgR92cq91s3tvqke21FupXO3JJP1FW2kHWsQERMFxiVz7QXz_6x6yoXZwTBnxFm6M4sagGJI4Bab1i06S9goLn1xm-8xxa3kd-766FXNnv1J2HmQ5_J9BWQwWUkdw" alt="Accessories" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                        <h3 class="text-3xl font-bold text-white mb-2">Accessories</h3>
                        <p class="text-white/80 text-sm">Complete Your Look</p>
                    </div>
                </a>
            </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="py-24 bg-gray-50 dark:bg-[#0f0f0f]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center mb-16">
                <div>
                    <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">Best Sellers</h2>
                    <p class="text-gray-600 dark:text-gray-400">Our most loved pieces</p>
                </div>
                <a href="/shop" class="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all">
                    View All
                    <span class="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                ${generateProductCard('Classic Linen Shirt', '₹6,399', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc', 1, '4.8')}
                ${generateProductCard('Tailored Chino Trousers', '₹7,199', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW8hRciKCid2VcSADvuv-Fx2pVue3OB-B69BqY_XwQk3uO5UiP3n50rQpoEPsmYhBnPgYuK_pXRaoqzHWG2mg_kdKP1FrpaivlkoMj_6laht-AFsD9dlcXgY2Gu_vqWKBgQcirLF3-pqOCTisSAo__EET-iAaydltyIjS5ahwDCxUDT9c2bR3dH8GLwuVW32-D9iGD1Z-6XoQ1fb2DDHglp1Cay6y9BJjhCWo2c6jMWzjePRaAYcfqwvPrA6bhYcXNF3JzqtnpEh4', 2, '4.9')}
                ${generateProductCard('Modern Fit Suit Jacket', '₹16,099', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTGwPhNjkjqLMGTCGWdRPUhE0nMJfFGOLjmR0ofmLrv1PJw2OfO5-h2z3DZDyzzsWN3rdXGv6C8QyaUc0ynbgYSc3onXQcwgDVDrNn9GlcedcBsfYC5vog1IcYpMJ8_GcS0xipPrQLzZTw1kVDQCkMIpk_HPfXsDzY2gSz_EWbtHdKyxl4umnPdtlj44VMUGCbN8rOMK9KmoP5kVe5CHMm5o9ICZWopb6m7dNIJa2G27508MU3WpEpHL12oenvMb6LFKTNTpkUUTo', 3, '5.0', true)}
                ${generateProductCard('Leather Brogue Shoes', '₹12,049', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBswJs7rnOkB3fDqmHOr0x3b2TLiv-IJTgXRuCQLWGMWSfsiTjTpqiXDn11yH8ZMM0-3S1mSKePhQlepMVwkFKZYz8ZzgEdXTV2Yjl1BbcGzdZ6Lvl4HcnRE_3SAOCyQQu-1tKyIiODqsccUPFgR92cq91s3tvqke21FupXO3JJP1FW2kHWsQERMFxiVz7QXz_6x6yoXZwTBnxFm6M4sagGJI4Bab1i06S9goLn1xm-8xxa3kd-766FXNnv1J2HmQ5_J9BWQwWUkdw', 4, '4.7')}
            </div>
        </div>
      </section>

      <!-- Promo Banner -->
      <section class="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden relative">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-5xl md:text-7xl font-black tracking-tight mb-6">Winter Sale</h2>
            <p class="text-2xl md:text-3xl font-light mb-8 opacity-90">Up to 50% off on selected items</p>
            <a href="/shop" class="inline-flex items-center gap-2 px-10 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                Shop Now
                <span class="material-symbols-outlined">arrow_forward</span>
            </a>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="py-24 bg-white dark:bg-[#0a0a0a]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 md:p-16 text-center">
                <h2 class="text-4xl md:text-5xl font-black text-white mb-4">Stay Updated</h2>
                <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Subscribe to receive exclusive offers, styling tips, and early access to new collections.</p>
                
                <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    <button type="button" onclick="subscribeNewsletter(event)" class="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
      </section>

    </div>
    `;
}

// Helper function to generate product cards
function generateProductCard(name, price, image, id, rating, isNew = false) {
  return `
    <div class="group">
        <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 mb-4">
            <a href="/product/${id}" class="block w-full h-full cursor-pointer">
                <img src="${image}" alt="${name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </a>
            ${isNew ? '<span class="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">New</span>' : ''}
            
            <div class="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
                <button onclick="toggleWishlist(${id}, '${name}', ${price.replace('₹', '').replace(',', '')}, '${image}')" class="h-10 w-10 pointer-events-auto flex items-center justify-center rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-gray-900 dark:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <button onclick="quickView(event, '${name}', '${price}', '${image}')" class="h-10 w-10 pointer-events-auto flex items-center justify-center rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-gray-900 dark:text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                </button>
            </div>
            
            <button onclick="addToCart(event, '${name}', '${price}')" class="absolute bottom-4 right-4 h-12 w-12 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
                <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
            </button>
        </div>
        <div class="space-y-2">
            <a href="/product/${id}" class="block group-hover:text-purple-600 transition-colors">
                <h3 class="font-semibold text-gray-900 dark:text-white">${name}</h3>
            </a>
            <div class="flex items-center justify-between">
                <p class="text-lg font-bold text-purple-600 dark:text-purple-400">${price}</p>
                <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
                    <span class="text-sm text-gray-600 dark:text-gray-400">${rating}</span>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Home page animations
function initHomeAnimations() {
  // Parallax effect disabled
  // const heroSection = document.getElementById('hero-section');
  // const heroImage = document.getElementById('hero-image');

  // if (heroSection && heroImage) {
  //   window.addEventListener('scroll', () => {
  //     const scrolled = window.pageYOffset;
  //     const heroHeight = heroSection.offsetHeight;

  //     if (scrolled < heroHeight) {
  //       const parallaxSpeed = 0.5;
  //       heroImage.style.transform = `translate(-50%, calc(-50% + ${scrolled * parallaxSpeed}px))`;
  //     }
  //   });
  // }
}

// Newsletter subscription
function subscribeNewsletter(event) {
  event.preventDefault();
  const input = event.target.closest('form').querySelector('input[type="email"]');
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    return;
  }

  showToast('Thank you for subscribing! 🎉', 'success');
  input.value = '';
}
