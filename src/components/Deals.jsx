function Deals() {
  const deals = [
    {
      product: "Bluetooth Speaker",
      original: "$59.99",
      sale: "$29.99",
      discount: "50% OFF",
      stock: 30,
    },
    {
      product: "Laptop Stand",
      original: "$45.00",
      sale: "$22.50",
      discount: "50% OFF",
      stock: 55,
    },
    {
      product: "Stainless Water Bottle",
      original: "$28.00",
      sale: "$14.99",
      discount: "46% OFF",
      stock: 10,
    },
    {
      product: "Wireless Mouse",
      original: "$39.99",
      sale: "$19.99",
      discount: "50% OFF",
      stock: 72,
    },
    {
      product: "Desk Lamp (LED)",
      original: "$34.99",
      sale: "$17.99",
      discount: "49% OFF",
      stock: 20,
    },
  ];

  return (
    <div className="bg-slate-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="text-2xl font-bold text-yellow-400">
            Flash Deals
          </h3>

          <span className="text-red-500 text-sm mt-2 sm:mt-0">
            Ends in: <strong>04:32:18</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-400 text-slate-900">
                <th className="text-left px-4 py-3">Product</th>
                <th className="text-left px-4 py-3">
                  Original Price
                </th>
                <th className="text-left px-4 py-3">
                  Sale Price
                </th>
                <th className="text-left px-4 py-3">
                  Discount
                </th>
                <th className="text-left px-4 py-3">
                  Stock Left
                </th>
                <th className="text-left px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {deals.map((deal, index) => (
                <tr
                  key={deal.product}
                  className={
                    index % 2 === 1
                      ? "bg-white/5"
                      : ""
                  }
                >
                  <td className="px-4 py-3 text-gray-300">
                    {deal.product}
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    <s>{deal.original}</s>
                  </td>

                  <td className="px-4 py-3 font-bold text-yellow-400">
                    {deal.sale}
                  </td>

                  <td className="px-4 py-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {deal.discount}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    <div className="flex items-center gap-2">
                      <progress
                        value={deal.stock}
                        max="100"
                        className="w-20"
                      />

                      <span>
                        {deal.stock} left
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2">
                      Grab Deal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Deals;