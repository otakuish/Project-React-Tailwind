function Hero() {
  const stats = [
    { number: "50K+", label: "Products" },
    { number: "1M+", label: "Happy Customers" },
    { number: "4.8", label: "Avg Rating" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-16 text-center">

      <div className="max-w-4xl mx-auto">

        <p className="inline-block bg-yellow-400 text-slate-900 px-4 py-1 rounded-full font-bold text-sm">
          Summer Sale — Up to 60% Off
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
          Everything you need,
          <br />
          delivered fast.
        </h2>

        <p className="text-gray-300 mt-4">
          Shop thousands of products at unbeatable prices.
          New arrivals every week.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded font-bold hover:bg-yellow-300">
            Shop Now
          </button>

          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-slate-900 transition">
            View Deals
          </button>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-3xl mx-auto border-t border-white/20 pt-8">

        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="block text-3xl font-bold text-yellow-400">
              {stat.number}
            </span>

            <span className="text-sm text-gray-300">
              {stat.label}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Hero;