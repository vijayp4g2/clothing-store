export default function Product() {
  return `
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Product Images -->
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
          <div class="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative group">
            <div class="w-full h-full bg-center bg-cover bg-no-repeat" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc");'></div>
            <button onclick="toggleWishlist(3001, 'Classic White T-Shirt', 2499, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc')" class="absolute top-4 right-4 size-10 rounded-full bg-white/90 text-gray-900 flex items-center justify-center hover:bg-white transition-colors" title="Add to Wishlist">
              <span class="material-symbols-outlined text-xl">favorite_border</span>
            </button>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <button class="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer">
              <div class="w-full h-full bg-center bg-cover bg-no-repeat" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc");'></div>
            </button>
            <button class="aspect-square rounded-lg overflow-hidden border border-transparent hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer">
              <div class="w-full h-full bg-center bg-cover bg-no-repeat" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc");'></div>
            </button>
            <button class="aspect-square rounded-lg overflow-hidden border border-transparent hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer">
              <div class="w-full h-full bg-center bg-cover bg-no-repeat" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc");'></div>
            </button>
            <button class="aspect-square rounded-lg overflow-hidden border border-transparent hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              <span class="material-symbols-outlined text-3xl">play_circle</span>
            </button>
          </div>
        </div>
        <!-- Product Info -->
        <div class="w-full lg:w-1/2 flex flex-col">
          <div class="flex flex-wrap gap-2 mb-8">
            <a class="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-secondary" href="/">Home</a>
            <span class="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal">/</span>
            <a class="text-muted-light dark:text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-secondary" href="/shop">T-Shirts</a>
          </div>
          <h1 class="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
            Classic White T-Shirt</h1>
          <div class="flex items-center gap-4 mb-6">
            <p class="text-2xl font-bold text-primary dark:text-secondary">₹2,499</p>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-yellow-500 text-lg">star</span>
              <span class="material-symbols-outlined text-yellow-500 text-lg">star</span>
              <span class="material-symbols-outlined text-yellow-500 text-lg">star</span>
              <span class="material-symbols-outlined text-yellow-500 text-lg">star</span>
              <span class="material-symbols-outlined text-yellow-500 text-lg">star_half</span>
              <span class="text-sm text-text-muted-light dark:text-text-muted-dark ml-1">(128 reviews)</span>
            </div>
          </div>
          <p class="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed mb-8">
            The essential white tee, elevated. Crafted from 100% premium organic cotton, this t-shirt offers
            unbeatable comfort and a perfect fit that stays true, wash after wash. Designed for the modern man
            who values simplicity without compromising on quality.
          </p>
          <div class="flex flex-col gap-6 mb-8">
            <!-- Color Selection -->
            <div class="flex flex-col gap-3">
              <p class="text-sm font-bold text-text-light dark:text-text-dark">Color: White</p>
              <div class="flex gap-3">
                <button class="w-10 h-10 rounded-full bg-white border-2 border-primary dark:border-secondary shadow-sm" title="White"></button>
                <button class="w-10 h-10 rounded-full bg-black border border-border-light dark:border-border-dark hover:scale-105 transition-transform" title="Black"></button>
                <button class="w-10 h-10 rounded-full bg-blue-900 border border-border-light dark:border-border-dark hover:scale-105 transition-transform" title="Navy"></button>
                <button class="w-10 h-10 rounded-full bg-gray-400 border border-border-light dark:border-border-dark hover:scale-105 transition-transform" title="Grey"></button>
              </div>
            </div>
            <!-- Size Selection -->
            <div class="flex flex-col gap-3">
              <div class="flex justify-between items-center">
                <p class="text-sm font-bold text-text-light dark:text-text-dark">Size</p>
                <a class="text-sm font-medium text-primary dark:text-secondary hover:underline" href="/about">Size Guide</a>
              </div>
              <div class="grid grid-cols-5 gap-3">
                <button class="h-10 rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary transition-colors text-sm font-medium">XS</button>
                <button class="h-10 rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary transition-colors text-sm font-medium">S</button>
                <button class="h-10 rounded-lg bg-primary dark:bg-secondary text-white border border-primary dark:border-secondary text-sm font-bold">M</button>
                <button class="h-10 rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary transition-colors text-sm font-medium">L</button>
                <button class="h-10 rounded-lg border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary transition-colors text-sm font-medium border-dashed text-opacity-50 cursor-not-allowed">XL</button>
              </div>
            </div>
          </div>
          <!-- Actions -->
          <div class="flex gap-4 mb-8">
            <div class="flex w-32 items-center rounded-lg border border-border-light dark:border-border-dark h-12">
              <button class="w-10 h-full flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-secondary transition-colors">
                <span class="material-symbols-outlined text-lg">remove</span>
              </button>
              <input class="w-full h-full text-center bg-transparent border-none p-0 text-text-light dark:text-text-dark font-medium focus:ring-0" min="1" type="number" value="1" />
              <button class="w-10 h-full flex items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-secondary transition-colors">
                <span class="material-symbols-outlined text-lg">add</span>
              </button>
            </div>
            <button onclick="addToCart(3001, 'Classic White T-Shirt', 2499, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc')" class="flex flex-1 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-secondary text-white gap-2 text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-all">
              <span>Add to Cart</span>
              <span class="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
          <!-- Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-border-light dark:border-border-dark">
            <div class="flex gap-3 items-center">
              <div class="bg-background-light dark:bg-gray-800 p-2 rounded-full">
                <span class="material-symbols-outlined text-primary dark:text-secondary">local_shipping</span>
              </div>
              <p class="text-sm font-medium text-text-light dark:text-text-dark">Free Shipping over ₹8000</p>
            </div>
            <div class="flex gap-3 items-center">
              <div class="bg-background-light dark:bg-gray-800 p-2 rounded-full">
                <span class="material-symbols-outlined text-primary dark:text-secondary">replay</span>
              </div>
              <p class="text-sm font-medium text-text-light dark:text-text-dark">30 Days Return Policy</p>
            </div>
            <div class="flex gap-3 items-center">
              <div class="bg-background-light dark:bg-gray-800 p-2 rounded-full">
                <span class="material-symbols-outlined text-primary dark:text-secondary">security</span>
              </div>
              <p class="text-sm font-medium text-text-light dark:text-text-dark">Secure Checkout</p>
            </div>
            <div class="flex gap-3 items-center">
              <div class="bg-background-light dark:bg-gray-800 p-2 rounded-full">
                <span class="material-symbols-outlined text-primary dark:text-secondary">eco</span>
              </div>
              <p class="text-sm font-medium text-text-light dark:text-text-dark">100% Organic Cotton</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Additional Info Sections (Tabs) -->
      <div class="mt-16">
        <div class="border-b border-border-light dark:border-border-dark mb-8">
          <div class="flex gap-8 overflow-x-auto">
            <button class="pb-4 text-primary dark:text-secondary font-bold border-b-2 border-primary dark:border-secondary whitespace-nowrap">Description</button>
            <button class="pb-4 text-text-muted-light dark:text-text-muted-dark font-medium hover:text-text-light dark:hover:text-text-dark whitespace-nowrap transition-colors">Additional
              Information</button>
            <button class="pb-4 text-text-muted-light dark:text-text-muted-dark font-medium hover:text-text-light dark:hover:text-text-dark whitespace-nowrap transition-colors">Reviews
              (128)</button>
          </div>
        </div>
        <div class="max-w-4xl text-text-muted-light dark:text-text-muted-dark leading-relaxed space-y-4">
          <p>Experience the perfect blend of style and comfort with our Classic White T-Shirt. Meticulously
            tailored for a modern fit that’s neither too tight nor too loose, it serves as the ultimate foundation
            for any outfit. wear it solo with your favorite denim or layer it under a blazer for a sharp,
            contemporary look.</p>
          <p>Fabricated from high-grade organic cotton, the fabric is pre-shrunk to maintain its shape and sized,
            ensuring longevity. The breathable material keeps you cool in summer and serves as a great base layer
            in cooler months.</p>
        </div>
      </div>
      <!-- Related Products -->
      <div class="mt-16 pt-12 border-t border-border-light dark:border-border-dark">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">You Might Also Like</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a href="/product" class="group">
            <div class="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-xl mb-4 overflow-hidden" data-alt="A man wearing a classic crewneck sweater" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEnxmOUeQw2Biv_6JsFnCNoZc3RDLZMpn0RZkbPiIWFOP4lMro2m7CqHZu8cez-mYPUMp0aVkMQ-BkMy_SZZGAOTlB1xkIH3hYzKYtUkaYG2V0Nb0lsqjNAjY0ZgwlW_n5DUbmEm0BNc5jW7P3HrBssSU2qeaRB-fgca73jgyvEjielUpq1xFxYDm-siBtq2GaHA3j9qMXHIl2towtFc9J5vzp6nCAKMVj0HmkQ_Z5H54Ym576S8X3MXgPbFLVsqAnxr5Bplj1uFg");'>
            </div>
            <h3 class="font-bold text-base group-hover:text-primary dark:group-hover:text-secondary transition-colors">
              Classic Crewneck Sweater</h3>
            <p class="text-sm text-muted-light dark:text-muted-dark">₹5,999</p>
          </a>
          <a href="/product" class="group">
            <div class="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-xl mb-4 overflow-hidden" data-alt="A pair of modern slim-fit chino pants" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl2X6M_GBcF_1hjHvbS7LsOq2qtivHunZyphEIUQmTqjQQouHwX-ptWbUBpjeRzFprNksp6rgl_aREGrbwj1zWVvb0k_3KEY95w9au25deYwZ_rw6dCb0PVBEvURK-zazK9p1PA3iOU38rdHg_IAqOt2ZxBghIWTSBLXlz0P2fAS1CqaexpwlME0xGkSc5H7Eh0jYRgHyS_iwMIeT62ItMcM_Uqq-iGenn5Hdqt9DZ5zwlQo0W57YUyFdd1Yxcptg7opBB4dUOUIg");'>
            </div>
            <h3 class="font-bold text-base group-hover:text-primary dark:group-hover:text-secondary transition-colors">
              Modern Slim-Fit Chinos</h3>
            <p class="text-sm text-muted-light dark:text-muted-dark">₹6,399</p>
          </a>
          <a href="/product" class="group">
            <div class="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-xl mb-4 overflow-hidden" data-alt="A stylish denim jacket" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT-lig4CJm6MNPqWEf3--R8f33dRrsKSiqucH-fqpSeTH8bWV76jeYkt7m_hJ5-NsJ-6Sq6t24744J7JrQOKgraj_efl18uj1RS0SZl7tzl-p-nZoHpboKMAgMxuk3M8yvgAbjvp9VdNUOVUviSyjy4PRpAxb8DnimbI8AC-FfOwaLirEHiVLG5lSdBMP45v7iihrCFTta1hBj8bDAWx_ZSyeaPxx4umGnk6BplTn30GRYmtxk8y746vU4--xtGUV-6QOTipWbE0M");'>
            </div>
            <h3 class="font-bold text-base group-hover:text-primary dark:group-hover:text-secondary transition-colors">
              The Essential Denim Jacket</h3>
            <p class="text-sm text-muted-light dark:text-muted-dark">₹9,999</p>
          </a>
          <a href="/product" class="group">
            <div class="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-xl mb-4 overflow-hidden" data-alt="A man wearing a casual button-down shirt" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtqcGd2uHNeVgP9fG0umZms0JdQcx2Vr57QdBm2DmXPO2BZM5ZtnpgfztjFG7BW0NN5f3dh2omD2w3yq3AOe82k2so6EP-XCsZECeJE_7hFw5mxB74ak18nRKtZfCeQPc_bwpwf3R_4RNUVtJgP55k2fOxqkYp6978HSQ-OX8DFOBHqiAkSbN1ME3DbjH_MXDcm3Y6Ms3yctHAt5CSKxPk1U5Ia6_qlTfyKuH8uPJn-vKdxisWZxvrlNLHXp7RsQUpMXmVv2bBbJg");'>
            </div>
            <h3 class="font-bold text-base group-hover:text-primary dark:group-hover:text-secondary transition-colors">
              Linen Button-Down Shirt</h3>
            <p class="text-sm text-muted-light dark:text-muted-dark">₹5,199</p>
          </a>
        </div>
      </div>
    </div>
  `;
}
