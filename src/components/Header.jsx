function Header() {
  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      
      <div>
        <h1 className="text-3xl font-bold text-yellow-400">
          ShopEasy
        </h1>

        <span className="text-xs text-gray-400">
          Your one-stop shop
        </span>
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Search for products..."
          className="px-4 py-2 w-64 text-black rounded-l-md"
        />

        <button className="bg-yellow-400 text-slate-900 px-4 rounded-r-md font-bold">
          Search
        </button>
      </div>

      <div className="flex flex-col items-end gap-2">

        <nav className="flex gap-4 text-sm">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Deals</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex gap-3 text-sm">
          <a href="#">Wishlist (0)</a>

          <a href="#" className="text-yellow-400 font-bold">
            Cart (0)
          </a>

          <a href="#">Sign In</a>
        </div>

      </div>

    </div>
  );
}

export default Header;