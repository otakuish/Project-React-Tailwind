function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* ShopEasy */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              ShopEasy
            </h4>

            <p className="text-gray-400 leading-7 mb-5">
              Your trusted online marketplace since 2020.
              Quality products, fast delivery, and unbeatable prices.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>

              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>

              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>

              <a href="#" className="text-gray-300 hover:text-white">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Flash Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Best Sellers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Customer Service
            </h4>

            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Track My Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Company
            </h4>

            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>
                123 Market Street<br />
                San Francisco, CA 94105
              </p>

              <p>
                Phone: (555) 123-4567
              </p>

              <p>
                Email: support@shopeasy.com
              </p>

              <p>
                Hours: Mon–Fri, 9am–6pm PST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2024 WebdevBootCamp. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;