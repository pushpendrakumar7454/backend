const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">E-Shop</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Shop the latest products at the best prices. Quality products,
              simple shopping and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="transition hover:text-white">
                  All Products
                </a>
              </li>

              <li>
                <a href="/create-product" className="transition hover:text-white">
                  Create Product
                </a>
              </li>

              <li>
                <a href="/cart" className="transition hover:text-white">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold">Customer Service</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Email: support@eshop.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 E-Shop. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;