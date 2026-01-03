// Admin Panel View - Premium Modern Design
export default function Admin() {
  return `
    <div id="admin-container" class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <!-- Loading State -->
      <div id="admin-loading" class="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p class="text-white text-lg font-medium">Loading Admin Panel...</p>
        </div>
      </div>
      
      <!-- Login Page -->
      <div id="login-page" class="hidden"></div>
      
      <!-- Admin Dashboard -->
      <div id="admin-dashboard" class="hidden"></div>
    </div>
  `;
}

// Render Login Page
function renderLoginPage() {
  return `
    <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-blob"></div>
        <div class="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-blob animation-delay-2000"></div>
        <div class="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
      </div>

      <!-- Login Card -->
      <div class="relative w-full max-w-md">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse"></div>
        <div class="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
          <!-- Logo/Icon -->
          <div class="text-center mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span class="material-symbols-outlined text-white text-4xl">admin_panel_settings</span>
            </div>
            <h1 class="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p class="text-purple-200">Sign in to manage your store</p>
          </div>

          <!-- Login Form -->
          <form id="login-form" class="space-y-6">
            <!-- Username -->
            <div class="space-y-2">
              <label class="text-sm font-medium text-purple-200 block">Username</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">person</span>
                <input 
                  type="text" 
                  id="username" 
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <!-- Password -->
            <div class="space-y-2">
              <label class="text-sm font-medium text-purple-200 block">Password</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">lock</span>
                <input 
                  type="password" 
                  id="password" 
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <!-- Error Message -->
            <div id="login-error" class="hidden bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-200 text-sm"></div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-6 text-center text-purple-200/70 text-sm">
            <p>Default credentials: admin / admin123</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Admin Dashboard
function renderAdminDashboard() {
  return `
    <div class="min-h-screen">
      <!-- Header -->
      <header class="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo & Title -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-2xl">store</span>
              </div>
              <div>
                <h1 class="text-xl font-bold text-white">Chetan Mens Wear</h1>
                <p class="text-xs text-purple-300">Admin Dashboard</p>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3">
              <!-- Theme Toggle -->
              <button class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                <span class="material-symbols-outlined">dark_mode</span>
              </button>
              
              <!-- Notifications -->
              <button class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors relative">
                <span class="material-symbols-outlined">notifications</span>
                <span class="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
              </button>

              <!-- Logout -->
              <button id="logout-btn" class="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors">
                <span class="material-symbols-outlined text-sm">logout</span>
                <span class="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Total Products -->
          <div class="stat-card group">
            <div class="relative bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
              <div class="flex items-start justify-between mb-4">
                <div class="p-3 bg-purple-500/30 rounded-xl group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-purple-300 text-3xl">inventory_2</span>
                </div>
                <span class="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">Total</span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-1" id="total-products">0</h3>
              <p class="text-purple-200 text-sm">Total Products</p>
              <div class="mt-4 flex items-center gap-2 text-xs">
                <span class="text-green-400">↑ 12%</span>
                <span class="text-purple-300">vs last month</span>
              </div>
            </div>
          </div>

          <!-- Categories -->
          <div class="stat-card group">
            <div class="relative bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1">
              <div class="flex items-start justify-between mb-4">
                <div class="p-3 bg-pink-500/30 rounded-xl group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-pink-300 text-3xl">category</span>
                </div>
                <span class="text-xs text-pink-300 bg-pink-500/20 px-2 py-1 rounded-full">Active</span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-1" id="total-categories">0</h3>
              <p class="text-pink-200 text-sm">Categories</p>
              <div class="mt-4 flex items-center gap-2 text-xs">
                <span class="text-green-400">↑ 2</span>
                <span class="text-pink-300">new this month</span>
              </div>
            </div>
          </div>

          <!-- Revenue -->
          <div class="stat-card group">
            <div class="relative bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <div class="flex items-start justify-between mb-4">
                <div class="p-3 bg-blue-500/30 rounded-xl group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-blue-300 text-3xl">payments</span>
                </div>
                <span class="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full">Monthly</span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-1">₹64,250</h3>
              <p class="text-blue-200 text-sm">Total Value</p>
              <div class="mt-4 flex items-center gap-2 text-xs">
                <span class="text-green-400">↑ 18%</span>
                <span class="text-blue-300">vs last month</span>
              </div>
            </div>
          </div>

          <!-- Low Stock -->
          <div class="stat-card group">
            <div class="relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1">
              <div class="flex items-start justify-between mb-4">
                <div class="p-3 bg-orange-500/30 rounded-xl group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-orange-300 text-3xl">warning</span>
                </div>
                <span class="text-xs text-orange-300 bg-orange-500/20 px-2 py-1 rounded-full">Alert</span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-1">3</h3>
              <p class="text-orange-200 text-sm">Low Stock Items</p>
              <div class="mt-4 flex items-center gap-2 text-xs">
                <span class="text-orange-400">⚠</span>
                <span class="text-orange-300">needs attention</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Section -->
        <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <!-- Section Header -->
          <div class="p-6 border-b border-white/10">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 class="text-2xl font-bold text-white mb-1">Product Management</h2>
                <p class="text-purple-300 text-sm">Manage your inventory and products</p>
              </div>
              <button id="add-product-btn" class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                <span class="material-symbols-outlined">add</span>
                <span>Add Product</span>
              </button>
            </div>
          </div>

          <!-- Filters & Search -->
          <div class="p-6 border-b border-white/10 bg-slate-900/30">
            <div class="flex flex-col lg:flex-row gap-4">
              <!-- Search -->
              <div class="flex-1">
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">search</span>
                  <input 
                    type="text" 
                    id="search-products"
                    placeholder="Search products by name..."
                    class="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                  />
                </div>
              </div>

              <!-- Category Filter -->
              <select id="filter-category" class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all">
                <option value="">All Categories</option>
                <option value="Shirts">Shirts</option>
                <option value="Other">Other</option>
              </select>

              <!-- Sort -->
              <select id="sort-products" class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all">
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="newest">Newest First</option>
              </select>

              <!-- Bulk Actions -->
              <button id="bulk-delete-btn" class="hidden px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-colors font-medium">
                Delete Selected
              </button>
            </div>
          </div>

          <!-- Products Table -->
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-slate-900/50">
                <tr class="text-left text-purple-300 text-sm">
                  <th class="p-4">
                    <input type="checkbox" id="select-all" class="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500 focus:ring-offset-0">
                  </th>
                  <th class="p-4">Product</th>
                  <th class="p-4">Category</th>
                  <th class="p-4">Price</th>
                  <th class="p-4">Status</th>
                  <th class="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody id="products-table-body" class="divide-y divide-white/5">
                <!-- Products will be inserted here -->
              </tbody>
            </table>
          </div>

          <!-- Empty State -->
          <div id="empty-state" class="hidden p-12 text-center">
            <div class="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-purple-300 text-4xl">inventory_2</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">No products found</h3>
            <p class="text-purple-300 mb-6">Get started by adding your first product</p>
            <button class="add-product-trigger px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Add Product
            </button>
          </div>

          <!-- Pagination -->
          <div id="pagination" class="p-6 border-t border-white/10 flex items-center justify-between">
            <p class="text-purple-300 text-sm">
              Showing <span id="showing-count">0</span> of <span id="total-count">0</span> products
            </p>
            <div class="flex gap-2">
              <button class="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button class="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- Product Modal -->
      <div id="product-modal" class="hidden fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"></div>

          <!-- Modal -->
          <div class="relative inline-block align-bottom bg-slate-800 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-white/10">
            <!-- Header -->
            <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-4 border-b border-white/10">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold text-white" id="modal-title">Add New Product</h3>
                <button id="close-modal" class="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <span class="material-symbols-outlined text-white">close</span>
                </button>
              </div>
            </div>

            <!-- Form -->
            <form id="product-form" class="p-6">
              <div class="space-y-6">
                <!-- Product Image -->
                <div>
                  <label class="block text-sm font-medium text-purple-200 mb-2">Product Image</label>
                  <div id="image-upload-area" class="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer bg-white/5">
                    <div id="image-preview" class="hidden mb-4">
                      <img id="preview-img" src="" alt="Preview" class="max-h-48 mx-auto rounded-lg">
                    </div>
                    <div id="upload-placeholder">
                      <span class="material-symbols-outlined text-purple-300 text-5xl mb-2">cloud_upload</span>
                      <p class="text-white font-medium mb-1">Click to upload or drag and drop</p>
                      <p class="text-purple-300 text-sm">PNG, JPG, GIF up to 5MB</p>
                    </div>
                    <input type="file" id="product-image" accept="image/*" class="hidden">
                  </div>
                  <input type="hidden" id="image-url" name="image">
                </div>

                <!-- Product Name -->
                <div>
                  <label class="block text-sm font-medium text-purple-200 mb-2">Product Name</label>
                  <input 
                    type="text" 
                    id="product-name" 
                    required
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="e.g., Classic Oxford Shirt"
                  />
                </div>

                <!-- Price & Category -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2">Price (₹)</label>
                    <input 
                      type="number" 
                      id="product-price" 
                      required
                      min="0"
                      step="0.01"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-purple-200 mb-2">Category</label>
                    <select 
                      id="product-category" 
                      required
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    >
                      <option value="">Select category</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Description -->
                <div>
                  <label class="block text-sm font-medium text-purple-200 mb-2">Description (Optional)</label>
                  <textarea 
                    id="product-description"
                    rows="3"
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Product description..."
                  ></textarea>
                </div>
              </div>

              <!-- Actions -->
              <div class="mt-8 flex gap-3">
                <button 
                  type="button"
                  id="cancel-btn"
                  class="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  class="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <span id="submit-text">Add Product</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Toast Notifications -->
      <div id="toast-container" class="fixed bottom-4 right-4 z-50 space-y-2"></div>
    </div>
  `;
}

// Initialize Admin Handlers
function initAdminHandlers() {
  let isLoggedIn = false;
  let products = [];
  let filteredProducts = [];
  let editingProductId = null;
  let selectedProducts = new Set();

  // Hide loading, show login
  setTimeout(() => {
    document.getElementById('admin-loading').classList.add('hidden');
    document.getElementById('login-page').innerHTML = renderLoginPage();
    document.getElementById('login-page').classList.remove('hidden');
    initLoginHandlers();
  }, 1000);

  // Login Handlers
  function initLoginHandlers() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
          isLoggedIn = true;
          document.getElementById('login-page').classList.add('hidden');
          document.getElementById('admin-dashboard').innerHTML = renderAdminDashboard();
          document.getElementById('admin-dashboard').classList.remove('hidden');
          initDashboardHandlers();
          loadProducts();
        } else {
          loginError.textContent = data.message;
          loginError.classList.remove('hidden');
        }
      } catch (error) {
        loginError.textContent = 'Login failed. Please try again.';
        loginError.classList.remove('hidden');
      }
    });
  }

  // Dashboard Handlers
  function initDashboardHandlers() {
    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
      isLoggedIn = false;
      location.reload();
    });

    // Add Product Button
    document.getElementById('add-product-btn').addEventListener('click', openAddProductModal);
    document.querySelectorAll('.add-product-trigger').forEach(btn => {
      btn.addEventListener('click', openAddProductModal);
    });

    // Modal Controls
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('cancel-btn').addEventListener('click', closeModal);

    // Product Form
    document.getElementById('product-form').addEventListener('submit', handleProductSubmit);

    // Image Upload
    const imageUploadArea = document.getElementById('image-upload-area');
    const imageInput = document.getElementById('product-image');

    imageUploadArea.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', handleImageUpload);

    // Drag and drop
    imageUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      imageUploadArea.classList.add('border-purple-500');
    });

    imageUploadArea.addEventListener('dragleave', () => {
      imageUploadArea.classList.remove('border-purple-500');
    });

    imageUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      imageUploadArea.classList.remove('border-purple-500');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    });

    // Search
    document.getElementById('search-products').addEventListener('input', filterProducts);

    // Category Filter
    document.getElementById('filter-category').addEventListener('change', filterProducts);

    // Sort
    document.getElementById('sort-products').addEventListener('change', sortProducts);

    // Select All
    document.getElementById('select-all').addEventListener('change', handleSelectAll);

    // Bulk Delete
    document.getElementById('bulk-delete-btn').addEventListener('click', handleBulkDelete);
  }

  // Load Products
  async function loadProducts() {
    try {
      const response = await fetch('/api/products');
      products = await response.json();
      filteredProducts = [...products];
      updateStats();
      renderProducts();
    } catch (error) {
      showToast('Failed to load products', 'error');
    }
  }

  // Update Stats
  function updateStats() {
    const categories = [...new Set(products.map(p => p.category))];
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);

    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-categories').textContent = categories.length;
  }

  // Render Products
  function renderProducts() {
    const tbody = document.getElementById('products-table-body');
    const emptyState = document.getElementById('empty-state');

    if (filteredProducts.length === 0) {
      tbody.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    tbody.innerHTML = filteredProducts.map(product => `
      <tr class="hover:bg-white/5 transition-colors product-row" data-id="${product.id}">
        <td class="p-4">
          <input type="checkbox" class="product-checkbox w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500 focus:ring-offset-0" data-id="${product.id}">
        </td>
        <td class="p-4">
          <div class="flex items-center gap-3">
            <img src="${product.image}" alt="${product.name}" class="w-12 h-12 rounded-lg object-cover">
            <div>
              <p class="text-white font-medium">${product.name}</p>
              <p class="text-purple-300 text-sm">ID: ${product.id}</p>
            </div>
          </div>
        </td>
        <td class="p-4">
          <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">${product.category}</span>
        </td>
        <td class="p-4">
          <p class="text-white font-semibold">₹${product.price.toLocaleString()}</p>
        </td>
        <td class="p-4">
          <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Active</span>
        </td>
        <td class="p-4">
          <div class="flex items-center justify-end gap-2">
            <button onclick="window.editProduct(${product.id})" class="p-2 hover:bg-purple-500/20 text-purple-300 rounded-lg transition-colors" title="Edit">
              <span class="material-symbols-outlined text-sm">edit</span>
            </button>
            <button onclick="window.duplicateProduct(${product.id})" class="p-2 hover:bg-blue-500/20 text-blue-300 rounded-lg transition-colors" title="Duplicate">
              <span class="material-symbols-outlined text-sm">content_copy</span>
            </button>
            <button onclick="window.deleteProduct(${product.id})" class="p-2 hover:bg-red-500/20 text-red-300 rounded-lg transition-colors" title="Delete">
              <span class="material-symbols-outlined text-sm">delete</span>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    // Update counts
    document.getElementById('showing-count').textContent = filteredProducts.length;
    document.getElementById('total-count').textContent = products.length;

    // Add checkbox listeners
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', handleProductSelect);
    });
  }

  // Filter Products
  function filterProducts() {
    const searchTerm = document.getElementById('search-products').value.toLowerCase();
    const category = document.getElementById('filter-category').value;

    filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = !category || product.category === category;
      return matchesSearch && matchesCategory;
    });

    sortProducts();
  }

  // Sort Products
  function sortProducts() {
    const sortValue = document.getElementById('sort-products').value;

    switch (sortValue) {
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
    }

    renderProducts();
  }

  // Handle Product Select
  function handleProductSelect(e) {
    const id = parseInt(e.target.dataset.id);
    if (e.target.checked) {
      selectedProducts.add(id);
    } else {
      selectedProducts.delete(id);
    }
    updateBulkActions();
  }

  // Handle Select All
  function handleSelectAll(e) {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    checkboxes.forEach(cb => {
      cb.checked = e.target.checked;
      const id = parseInt(cb.dataset.id);
      if (e.target.checked) {
        selectedProducts.add(id);
      } else {
        selectedProducts.delete(id);
      }
    });
    updateBulkActions();
  }

  // Update Bulk Actions
  function updateBulkActions() {
    const bulkDeleteBtn = document.getElementById('bulk-delete-btn');
    if (selectedProducts.size > 0) {
      bulkDeleteBtn.classList.remove('hidden');
      bulkDeleteBtn.textContent = `Delete ${selectedProducts.size} Selected`;
    } else {
      bulkDeleteBtn.classList.add('hidden');
    }
  }

  // Handle Bulk Delete
  async function handleBulkDelete() {
    if (!confirm(`Are you sure you want to delete ${selectedProducts.size} products?`)) return;

    try {
      const response = await fetch('/api/products/bulk-delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: Array.from(selectedProducts) })
      });

      if (response.ok) {
        showToast('Products deleted successfully', 'success');
        selectedProducts.clear();
        document.getElementById('select-all').checked = false;
        updateBulkActions();
        loadProducts();
      }
    } catch (error) {
      showToast('Failed to delete products', 'error');
    }
  }

  // Open Add Product Modal
  function openAddProductModal() {
    editingProductId = null;
    document.getElementById('modal-title').textContent = 'Add New Product';
    document.getElementById('submit-text').textContent = 'Add Product';
    document.getElementById('product-form').reset();
    document.getElementById('image-preview').classList.add('hidden');
    document.getElementById('upload-placeholder').classList.remove('hidden');
    document.getElementById('product-modal').classList.remove('hidden');
  }

  // Edit Product
  window.editProduct = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    editingProductId = id;
    document.getElementById('modal-title').textContent = 'Edit Product';
    document.getElementById('submit-text').textContent = 'Update Product';

    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-description').value = product.description || '';
    document.getElementById('image-url').value = product.image;

    if (product.image) {
      document.getElementById('preview-img').src = product.image;
      document.getElementById('image-preview').classList.remove('hidden');
      document.getElementById('upload-placeholder').classList.add('hidden');
    }

    document.getElementById('product-modal').classList.remove('hidden');
  };

  // Duplicate Product
  window.duplicateProduct = async function (id) {
    try {
      const response = await fetch(`/api/products/${id}/duplicate`, {
        method: 'POST'
      });

      if (response.ok) {
        showToast('Product duplicated successfully', 'success');
        loadProducts();
      }
    } catch (error) {
      showToast('Failed to duplicate product', 'error');
    }
  };

  // Delete Product
  window.deleteProduct = async function (id) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`/api/products/bulk-delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [id] })
      });

      if (response.ok) {
        showToast('Product deleted successfully', 'success');
        loadProducts();
      }
    } catch (error) {
      showToast('Failed to delete product', 'error');
    }
  };

  // Close Modal
  function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    editingProductId = null;
  }

  // Handle Image Upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      handleImageFile(file);
    }
  }

  // Handle Image File
  async function handleImageFile(file) {
    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('preview-img').src = e.target.result;
      document.getElementById('image-preview').classList.remove('hidden');
      document.getElementById('upload-placeholder').classList.add('hidden');
    };
    reader.readAsDataURL(file);

    // Upload to server
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        document.getElementById('image-url').value = data.imageUrl;
        showToast('Image uploaded successfully', 'success');
      }
    } catch (error) {
      showToast('Failed to upload image', 'error');
    }
  }

  // Handle Product Submit
  async function handleProductSubmit(e) {
    e.preventDefault();

    const productData = {
      name: document.getElementById('product-name').value,
      price: parseFloat(document.getElementById('product-price').value),
      category: document.getElementById('product-category').value,
      description: document.getElementById('product-description').value,
      image: document.getElementById('image-url').value || 'https://via.placeholder.com/400x500?text=Product+Image'
    };

    try {
      const url = editingProductId
        ? `/api/products/${editingProductId}`
        : '/api/products';

      const method = editingProductId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        showToast(
          editingProductId ? 'Product updated successfully' : 'Product added successfully',
          'success'
        );
        closeModal();
        loadProducts();
      }
    } catch (error) {
      showToast('Failed to save product', 'error');
    }
  }

  // Show Toast
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success' ? 'check_circle' : 'error';

    toast.className = `flex items-center gap-3 ${bgColor} text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 translate-x-0`;
    toast.innerHTML = `
      <span class="material-symbols-outlined">${icon}</span>
      <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdminHandlers);
} else {
  initAdminHandlers();
}
