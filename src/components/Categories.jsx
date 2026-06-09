function Categories() {
  const categories = [
    { icon: "🎧", name: "Electronics", count: "500+ items" },
    { icon: "👔", name: "Fashion", count: "1200+ items" },
    { icon: "🏠", name: "Home & Garden", count: "800+ items" },
    { icon: "🏊", name: "Sports", count: "350+ items" },
    { icon: "📚", name: "Books", count: "2000+ items" },
    { icon: "🍕", name: "Grocery", count: "600+ items" },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">
        Shop by Category
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition"
          >
            <div className="text-4xl mb-4">
              {category.icon}
            </div>

            <h4 className="font-bold">
              {category.name}
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;