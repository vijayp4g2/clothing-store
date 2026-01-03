export default function Footer() {
  return `
    <footer class="footer-modern">
      <!-- Wave Decoration -->
      <div class="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="footer-wave-path"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="footer-wave-path"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="footer-wave-path"></path>
        </svg>
      </div>

      <!-- Main Footer Content -->
      <div class="footer-content">
        <div class="footer-container">
          <!-- Brand Section -->
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span class="logo-text">Chetan Mens Wear</span>
            </div>
            <p class="footer-tagline">Elevating men's fashion with timeless style and modern elegance.</p>
            
            <!-- Social Links -->
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-links">
            <h3 class="footer-heading">Shop</h3>
            <ul class="footer-list">
              <li><a href="/new-arrivals" class="footer-link">New Arrivals</a></li>
              <li><a href="/shop" class="footer-link">All Products</a></li>
              <li><a href="/shop?category=suits" class="footer-link">Premium Suits</a></li>
              <li><a href="/shop?category=shirts" class="footer-link">Formal Shirts</a></li>
              <li><a href="/shop?category=accessories" class="footer-link">Accessories</a></li>
              <li><a href="/shop?sale=true" class="footer-link">Sale Items</a></li>
            </ul>
          </div>

          <!-- Customer Service -->
          <div class="footer-links">
            <h3 class="footer-heading">Customer Care</h3>
            <ul class="footer-list">
              <li><a href="/about" class="footer-link">About Us</a></li>
              <li><a href="/contact" class="footer-link">Contact Support</a></li>
              <li><a href="/shipping" class="footer-link">Shipping Info</a></li>
              <li><a href="/returns" class="footer-link">Returns & Exchanges</a></li>
              <li><a href="/size-guide" class="footer-link">Size Guide</a></li>
              <li><a href="/faq" class="footer-link">FAQ</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="footer-newsletter">
            <h3 class="footer-heading">Stay Updated</h3>
            <p class="newsletter-text">Subscribe to get exclusive offers, style tips, and early access to new collections.</p>
            
            <form class="newsletter-form" id="newsletterForm">
              <div class="newsletter-input-wrapper">
                <svg class="newsletter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input 
                  type="email" 
                  class="newsletter-input" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" class="newsletter-btn">
                <span class="btn-text">Subscribe</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </form>

            <div class="newsletter-benefits">
              <div class="benefit-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>10% off first order</span>
              </div>
              <div class="benefit-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Exclusive deals</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment & Trust Badges -->
        <div class="footer-badges">
          <div class="badges-container">
            <div class="badge-section">
              <h4 class="badge-title">We Accept</h4>
              <div class="payment-methods">
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#1434CB"/>
                    <text x="24" y="20" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VISA</text>
                  </svg>
                </div>
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#EB001B"/>
                    <circle cx="18" cy="16" r="8" fill="#EB001B"/>
                    <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                  </svg>
                </div>
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#016FD0"/>
                    <text x="24" y="20" text-anchor="middle" fill="white" font-size="7" font-weight="bold">AMEX</text>
                  </svg>
                </div>
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#00457C"/>
                    <ellipse cx="24" cy="16" rx="10" ry="8" fill="#F7981D"/>
                  </svg>
                </div>
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#5F6368"/>
                    <text x="24" y="20" text-anchor="middle" fill="white" font-size="8" font-weight="bold">GPay</text>
                  </svg>
                </div>
                <div class="payment-icon">
                  <svg viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#002C8A"/>
                    <text x="24" y="20" text-anchor="middle" fill="white" font-size="7" font-weight="bold">PayPal</text>
                  </svg>
                </div>
              </div>
            </div>

            <div class="badge-section">
              <h4 class="badge-title">Secure Shopping</h4>
              <div class="trust-badges">
                <div class="trust-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <span>SSL Secure</span>
                </div>
                <div class="trust-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  <span>30-Day Returns</span>
                </div>
                <div class="trust-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © ${new Date().getFullYear()} Chetan Mens Wear. All rights reserved. Crafted with 
              <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              in India
            </p>
            
            <div class="footer-legal">
              <a href="/privacy" class="legal-link">Privacy Policy</a>
              <span class="separator">•</span>
              <a href="/terms" class="legal-link">Terms of Service</a>
              <span class="separator">•</span>
              <a href="/cookies" class="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>

      <style>
        .footer-modern {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.98) 0%, 
            rgba(30, 41, 59, 0.95) 50%, 
            rgba(15, 23, 42, 0.98) 100%
          );
          color: #e2e8f0;
          overflow: hidden;
        }

        .footer-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Wave Decoration */
        .footer-wave {
          position: relative;
          width: 100%;
          height: 80px;
          margin-bottom: -1px;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: 100%;
          height: 80px;
        }

        .footer-wave-path {
          fill: rgba(139, 92, 246, 0.1);
          animation: wave-animation 15s ease-in-out infinite;
        }

        .footer-wave-path:nth-child(2) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        .footer-wave-path:nth-child(3) {
          animation-delay: -10s;
          animation-duration: 25s;
        }

        @keyframes wave-animation {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }

        /* Main Content */
        .footer-content {
          position: relative;
          z-index: 1;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        /* Brand Section */
        .footer-brand {
          grid-column: span 1;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
          animation: logo-pulse 3s ease-in-out infinite;
        }

        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5); }
        }

        .logo-icon svg {
          width: 24px;
          height: 24px;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Social Links */
        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
          z-index: -1;
        }

        .social-link:hover {
          color: white;
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }

        .social-link:hover::before {
          width: 100%;
          height: 100%;
        }

        .social-link svg {
          width: 18px;
          height: 18px;
          position: relative;
          z-index: 1;
        }

        /* Footer Links */
        .footer-links {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-heading {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #f1f5f9;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
          border-radius: 2px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          position: relative;
          padding-left: 0;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #8b5cf6;
        }

        .footer-link:hover {
          color: #8b5cf6;
          padding-left: 20px;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: 0;
        }

        /* Newsletter */
        .footer-newsletter {
          grid-column: span 1;
        }

        .newsletter-text {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .newsletter-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .newsletter-icon {
          position: absolute;
          left: 1rem;
          width: 20px;
          height: 20px;
          color: #64748b;
          pointer-events: none;
          z-index: 1;
        }

        .newsletter-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: #64748b;
        }

        .newsletter-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .newsletter-btn {
          padding: 0.875rem 1.5rem;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .newsletter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }

        .newsletter-btn:hover::before {
          left: 100%;
        }

        .btn-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .newsletter-btn:hover .btn-icon {
          transform: translateX(3px);
        }

        .newsletter-benefits {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .benefit-item svg {
          width: 16px;
          height: 16px;
          color: #10b981;
        }

        /* Payment & Trust Badges */
        .footer-badges {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }

        .badges-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .badge-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .payment-methods {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .payment-icon {
          width: 48px;
          height: 32px;
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .payment-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .trust-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.75rem;
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .trust-badge:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .trust-badge svg {
          width: 18px;
          height: 18px;
          color: #10b981;
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .copyright {
          color: #64748b;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .heart-icon {
          width: 16px;
          height: 16px;
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .legal-link {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #8b5cf6;
        }

        .separator {
          color: #475569;
        }

        /* Back to Top Button */
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
          z-index: 1000;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
        }

        .back-to-top svg {
          width: 24px;
          height: 24px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 3rem 1.5rem;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .footer-newsletter {
            grid-column: span 1;
          }

          .badges-container {
            grid-template-columns: 1fr;
            padding: 0 1.5rem;
          }

          .footer-bottom-content {
            padding: 0 1.5rem;
          }

          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-brand {
            grid-column: span 2;
          }
        }
      </style>

      <script>
        // Newsletter Form Handler
        document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
          e.preventDefault();
          const input = this.querySelector('.newsletter-input');
          const btn = this.querySelector('.newsletter-btn');
          const btnText = btn.querySelector('.btn-text');
          
          // Simulate submission
          btnText.textContent = 'Subscribing...';
          btn.style.pointerEvents = 'none';
          
          setTimeout(() => {
            btnText.textContent = 'Subscribed! ✓';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
              btnText.textContent = 'Subscribe';
              btn.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)';
              btn.style.pointerEvents = 'auto';
              input.value = '';
            }, 2000);
          }, 1500);
        });

        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
            backToTopBtn?.classList.add('visible');
          } else {
            backToTopBtn?.classList.remove('visible');
          }
        });

        backToTopBtn?.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });

        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        document.querySelectorAll('.footer-links, .footer-newsletter').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
        });
      </script>
    `;
}
