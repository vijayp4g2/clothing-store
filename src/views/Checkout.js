export default function Checkout() {
    return `
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="flex flex-wrap justify-between gap-3 p-4">
          <div class="flex min-w-72 flex-col gap-3">
            <div class="flex flex-col items-center gap-4">
              <div class="flex flex-wrap gap-2">
                <a class="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal" href="/cart">Shopping Cart</a>
                <span class="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                <span class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Checkout</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8 px-4 py-3">
          <!-- Checkout Forms -->
          <div class="flex flex-col gap-6 flex-1">
            <!-- Shipping Information -->
            <section class="flex flex-col gap-4">
              <h2 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Shipping Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">First Name</label>
                  <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="First Name" type="text" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Last Name</label>
                  <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="Last Name" type="text" />
                </div>
                <div class="flex flex-col gap-1 md:col-span-2">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Address</label>
                  <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="Street Address" type="text" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">City</label>
                  <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="City" type="text" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Postal Code</label>
                  <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="Postal Code" type="text" />
                </div>
              </div>
            </section>
            <!-- Shipping Method -->
            <section class="flex flex-col gap-4">
              <h2 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Shipping Method</h2>
              <div class="flex flex-col gap-3">
                <label class="flex items-center gap-3 p-4 rounded-lg border border-[#dbdfe6] dark:border-gray-700 cursor-pointer bg-white dark:bg-gray-800 hover:border-primary transition-colors">
                  <input checked="" class="form-radio text-primary focus:ring-primary" name="shipping" type="radio" />
                  <div class="flex-1">
                    <p class="text-[#111318] dark:text-white text-base font-medium leading-normal">Standard Shipping</p>
                    <p class="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">5-7 business days</p>
                  </div>
                  <p class="text-[#111318] dark:text-white text-base font-bold leading-normal">Free</p>
                </label>
                <label class="flex items-center gap-3 p-4 rounded-lg border border-[#dbdfe6] dark:border-gray-700 cursor-pointer bg-white dark:bg-gray-800 hover:border-primary transition-colors">
                  <input class="form-radio text-primary focus:ring-primary" name="shipping" type="radio" />
                  <div class="flex-1">
                    <p class="text-[#111318] dark:text-white text-base font-medium leading-normal">Express Shipping</p>
                    <p class="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">2-3 business days</p>
                  </div>
                  <p class="text-[#111318] dark:text-white text-base font-bold leading-normal">$15.00</p>
                </label>
              </div>
            </section>
            <!-- Payment -->
            <section class="flex flex-col gap-4">
              <h2 class="text-[#111318] dark:text-white text-xl font-bold leading-tight">Payment</h2>
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                  <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Card Number</label>
                  <div class="relative">
                    <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 pl-10 pr-4 w-full focus:ring-primary focus:border-primary" placeholder="0000 0000 0000 0000" type="text" />
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">credit_card</span>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex flex-col gap-1">
                    <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">Expiration Date</label>
                    <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="MM/YY" type="text" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-[#111318] dark:text-white text-sm font-medium leading-normal">CVV</label>
                    <input class="form-input rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111318] dark:text-white h-11 px-4 focus:ring-primary focus:border-primary" placeholder="123" type="text" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- Order Overview -->
          <aside class="w-full md:w-[360px] flex flex-col gap-6">
            <div class="rounded-lg border border-[#dbdfe6] dark:border-gray-700 bg-[#f8f9fa] dark:bg-gray-800/50 p-6 flex flex-col gap-6">
              <h3 class="text-[#111318] dark:text-white text-lg font-bold leading-tight">Order Summary</h3>
              <div class="flex flex-col gap-4">
                <!-- Mini Item -->
                <div class="flex gap-4">
                  <div class="w-16 h-16 rounded bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBofGG-xVvhwqdGhxT5jBDBLx24DDsXp13Z_om7wa0YLqdOZZqrNx6_27gADF2zgvg_CQ9FOGdGScKoGsLvgWqtjQlBd1skfSMXJN5mukMynxH1IpLAUtg_CswRMzVL3hlTlVwFlFiafrDlJwN_sOSr8JqYoMz6bYHZgh8cokKvHGWM-8Vwj9LUo7NttzBQsY8xf-MOr3bDxtllZyrWCV_p-9DtbjuSogIGv7F4FEfPebO0BveUSw1WUwSmszc396Rp4Fm7meJsPKc");'></div>
                  <div class="flex flex-col justify-center flex-1">
                    <p class="text-[#111318] dark:text-white text-sm font-medium truncate">Classic White T-Shirt</p>
                    <p class="text-[#616f89] dark:text-gray-400 text-xs">Qty: 1</p>
                    <p class="text-[#111318] dark:text-white text-sm font-bold">$29.00</p>
                  </div>
                </div>
                <!-- Mini Item -->
                <div class="flex gap-4">
                  <div class="w-16 h-16 rounded bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl2X6M_GBcF_1hjHvbS7LsOq2qtivHunZyphEIUQmTqjQQouHwX-ptWbUBpjeRzFprNksp6rgl_aREGrbwj1zWVvb0k_3KEY95w9au25deYwZ_rw6dCb0PVBEvURK-zazK9p1PA3iOU38rdHg_IAqOt2ZxBghIWTSBLXlz0P2fAS1CqaexpwlME0xGkSc5H7Eh0jYRgHyS_iwMIeT62ItMcM_Uqq-iGenn5Hdqt9DZ5zwlQo0W57YUyFdd1Yxcptg7opBB4dUOUIg");'></div>
                  <div class="flex flex-col justify-center flex-1">
                    <p class="text-[#111318] dark:text-white text-sm font-medium truncate">Tailored Chino Trousers</p>
                    <p class="text-[#616f89] dark:text-gray-400 text-xs">Qty: 1</p>
                    <p class="text-[#111318] dark:text-white text-sm font-bold">$89.00</p>
                  </div>
                </div>
              </div>
              <div class="h-px bg-[#dbdfe6] dark:bg-gray-700"></div>
              <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                  <p class="text-[#111318] dark:text-white text-sm">Subtotal</p>
                  <p class="text-[#111318] dark:text-white text-sm">$118.00</p>
                </div>
                <div class="flex justify-between">
                  <p class="text-[#111318] dark:text-white text-sm">Tax</p>
                  <p class="text-[#111318] dark:text-white text-sm">$10.62</p>
                </div>
                <div class="flex justify-between">
                  <p class="text-[#111318] dark:text-white text-sm">Shipping</p>
                  <p class="text-[#111318] dark:text-white text-sm">Frequency Calculated</p>
                </div>
              </div>
              <div class="h-px bg-[#dbdfe6] dark:bg-gray-700"></div>
              <div class="flex justify-between items-center">
                <p class="text-[#111318] dark:text-white text-lg font-bold">Total</p>
                <p class="text-[#111318] dark:text-white text-lg font-bold">$128.62</p>
              </div>
            </div>
          </aside>
        </div>
        <!-- Place Order Button Sticky Mobile / Static Desktop -->
        <div class="p-4">
          <div class="flex flex-col gap-4">
            <a href="/" class="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">Place Order</span>
            </a>
            <p class="text-xs text-center text-[#616f89] dark:text-gray-500">By placing your order, you agree to our <a class="underline hover:text-primary" href="/about">Terms of Service</a> and <a class="underline hover:text-primary" href="/about">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
