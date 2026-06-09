function Products() {
  const products = [
    {
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      title: "Wireless Headphones",
      desc: "Noise cancelling, 30hr battery",
      price: "$49.99",
      oldPrice: "$79.99",
      reviews: "(128)",
      stars: "★★★★★",
    },
    {
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
      title: "Running Shoes",
      desc: "Lightweight, breathable design",
      price: "$79.99",
      oldPrice: "",
      reviews: "(94)",
      stars: "★★★★☆",
    },
    {
      badge: "",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop",
      title: "Mechanical Keyboard",
      desc: "RGB backlit, tactile switches",
      price: "$99.99",
      oldPrice: "$139.99",
      reviews: "(211)",
      stars: "★★★★★",
    },
    {
      badge: "",
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop",
      title: "Portable Charger",
      desc: "20000mAh, dual USB ports",
      price: "$29.99",
      oldPrice: "",
      reviews: "(76)",
      stars: "★★★★☆",
    },
    {
      badge: "Sale",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      title: "Smart Watch",
      desc: "Heart rate monitor, GPS",
      price: "$149.99",
      oldPrice: "$199.99",
      reviews: "(340)",
      stars: "★★★★★",
    },
    {
      badge: "",
      /* Fixed the broken image from the assignment */
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop",
      title: "Instant Camera",
      desc: "Retro design, prints instantly",
      price: "$69.99",
      oldPrice: "",
      reviews: "(55)",
      stars: "★★★★☆",
    },
    {
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&h=200&fit=crop",
      title: "Skincare Gift Set",
      desc: "Moisturizer, serum & eye cream",
      price: "$44.99",
      oldPrice: "$65.00",
      reviews: "(182)",
      stars: "★★★★★",
    },
    {
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop",
      title: "Premium Yoga Mat",
      desc: "Non-slip, eco-friendly material",
      price: "$34.99",
      oldPrice: "",
      reviews: "(67)",
      stars: "★★★★☆",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h3 className="text-3xl font-bold">
          Featured Products
        </h3>

        <a href="#" className="text-blue-600 font-semibold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white rounded-xl shadow hover:shadow-xl p-5 relative transition"
          >
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
            />

            <div className="mt-4 text-yellow-500">
              {product.stars}
              <span className="text-gray-500 text-sm ml-2">
                {product.reviews}
              </span>
            </div>

            <h4 className="font-bold mt-2">
              {product.title}
            </h4>

            <p className="text-gray-500 text-sm mt-1">
              {product.desc}
            </p>

            <div className="mt-3">
              <span className="font-bold text-lg">
                {product.price}
              </span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through ml-2">
                  {product.oldPrice}
                </span>
              )}
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;