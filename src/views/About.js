export default function About() {
    return `
    <div class="layout-content-container flex flex-col max-w-7xl mx-auto">
      <!-- HeroSection -->
      <div class="px-4 sm:px-10 lg:px-20 py-10 lg:py-20">
        <div class="flex flex-col gap-6 @container md:flex-row-reverse md:items-center">
          <div class="w-full h-64 md:h-96 bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A stylish man wearing a tailored suit, looking thoughtfully to the side." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB9mB7Ol8hjgY06uVKNrExSTuzchgR77ci36lWYkynFquxkNvngXgTaRVjyZPSiS1Y_FuKCNTUqndgGrWlwMo7757gtaclAXgY1Djx0QQd-Nib-5TmqTdBomPqEqmRB8SWlVZZ8iKadBqG9E6mZEB-_kAbQpT3ZQ6puhETXUAU875tmeON-mlUMKoy8DV4clSSaseUP6FsHbbxF_w3ltmi06bxgCsc8KYBkYY-PUDfVAXELUQ6ARrLMMjrXEy8jVUBCWgZB1_wKXY');"></div>
          <div class="flex flex-col gap-6 md:gap-8 md:min-w-[400px] md:justify-center">
            <div class="flex flex-col gap-2 text-left">
              <h1 class="text-primary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Our Story: The Art of Modern Menswear</h1>
              <h2 class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal @[480px]:text-base">Discover the heritage, passion, and craftsmanship woven into every garment at Chetan Mens Wear.</h2>
            </div>
            <a href="/shop" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent hover:bg-accent/90 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base w-fit">
              <span class="truncate">Shop Our Latest Collection</span>
            </a>
          </div>
        </div>
      </div>
      <!-- FeatureSection -->
      <div class="px-4 sm:px-10 lg:px-20 py-10 lg:py-20 bg-white dark:bg-background-dark/50">
        <div class="flex flex-col gap-10 @container">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <h1 class="text-primary dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Our Philosophy</h1>
              <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal max-w-[720px]">We believe that style is a personal statement. Our mission is to provide men with timeless, high-quality apparel that inspires confidence and elevates everyday life.</p>
            </div>
          </div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-0">
            <div class="flex flex-1 gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 flex-col">
              <span class="material-symbols-outlined text-accent text-3xl">content_cut</span>
              <div class="flex flex-col gap-1">
                <h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Unmatched Craftsmanship</h2>
                <p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">Every piece is crafted with meticulous attention to detail, using only the finest materials sourced from around the world.</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 flex-col">
              <span class="material-symbols-outlined text-accent text-3xl">checkroom</span>
              <div class="flex flex-col gap-1">
                <h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Timeless Style</h2>
                <p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">Our collections blend classic tailoring with modern sensibilities, creating garments that are both contemporary and enduring.</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 flex-col">
              <span class="material-symbols-outlined text-accent text-3xl">verified_user</span>
              <div class="flex flex-col gap-1">
                <h2 class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Commitment to Quality</h2>
                <p class="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">We stand behind the durability and excellence of our products, ensuring they meet the highest standards of quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- History Section (Timeline) -->
      <div class="px-4 sm:px-10 lg:px-20 py-10 lg:py-20">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <div class="flex flex-col gap-4 lg:w-1/3">
            <h2 class="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] lg:text-3xl">Our Journey Through Time</h2>
            <p class="text-subtext-light dark:text-subtext-dark">From a humble beginning to a hallmark of men's fashion, our story is one of passion, perseverance, and sartorial excellence.</p>
          </div>
          <div class="grid grid-cols-[40px_1fr] gap-x-4 w-full lg:w-2/3">
            <div class="flex flex-col items-center gap-1 pt-3">
              <div class="bg-accent/20 rounded-full p-1.5"><span class="material-symbols-outlined text-accent">calendar_month</span></div>
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-text-light dark:text-text-dark text-base font-medium leading-normal">1990: Founded</p>
              <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">The beginning of our journey in menswear.</p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2"></div>
              <div class="bg-accent/20 rounded-full p-1.5"><span class="material-symbols-outlined text-accent">storefront</span></div>
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-text-light dark:text-text-dark text-base font-medium leading-normal">1998: First Flagship Store</p>
              <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">We opened our first home in the city center.</p>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2"></div>
              <div class="bg-accent/20 rounded-full p-1.5"><span class="material-symbols-outlined text-accent">public</span></div>
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-text-light dark:text-text-dark text-base font-medium leading-normal">2015: Launched Online</p>
              <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">Expanding our horizons to a global audience.</p>
            </div>
            <div class="flex flex-col items-center gap-1 pb-3">
              <div class="w-[1.5px] bg-border-light dark:bg-border-dark h-2"></div>
              <div class="bg-accent/20 rounded-full p-1.5"><span class="material-symbols-outlined text-accent">workspace_premium</span></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
              <p class="text-text-light dark:text-text-dark text-base font-medium leading-normal">2020: 30 Years of Style</p>
              <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">Celebrating three decades of sartorial excellence.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Founder Section -->
      <div class="px-4 sm:px-10 lg:px-20 py-10 lg:py-20 bg-white dark:bg-background-dark/50">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="w-full md:w-1/3">
            <div class="aspect-square bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A portrait of the founder, Chetan, a distinguished man in a sharp suit." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2vOMvCF0uxBIEtXKAcOYylLN7J6bewUx4peIivTQJnfDnJqLYnM5bFu7F8kAM3KI0_HyqzMgHvNeg7p5j-6PVFgNCy7iJE2_sRI2otHis4V3E9JHryyhkoWG4ZRUfnYvsEifMjwZOagSdJ71fiIZNbewD4gXaeuNqXPhCjGdyIkM1GSwyxkS-s_nBhcKHG-rSixhwkPbsgKgUWorYjzoLJsgt3L2Ot52REPedmsKl6oY9ohrIDWM4suN0bWjEK2KSYgOWzH2coJI');"></div>
          </div>
          <div class="flex flex-col gap-4 md:w-2/3">
            <h2 class="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] lg:text-3xl">A Note from the Founder</h2>
            <p class="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal italic">"Fashion is more than just clothing; it's a form of self-expression. When I started this brand, my vision was to create a space where every man could find pieces that not only fit perfectly but also reflect his personality and ambition. We're not just selling clothes, we're building confidence."</p>
            <p class="font-bold text-text-light dark:text-text-dark mt-2">- Chetan, Founder</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
