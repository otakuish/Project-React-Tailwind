function Reviews() {
  const reviews = [
    {
      stars: "★★★★★",
      text:
        '"Absolutely love this store! The products are high quality and shipping was super fast. Will definitely shop again!"',
      name: "Sarah M.",
      tag: "Verified Buyer",
    },
    {
      stars: "★★★★★",
      text:
        '"Great prices, easy checkout, and the customer support team helped me track my package immediately. 10/10!"',
      name: "James T.",
      tag: "Verified Buyer",
    },
    {
      stars: "★★★★☆",
      text:
        '"The wireless headphones I bought are incredible for the price. Battery lasts all day. Highly recommend!"',
      name: "Priya K.",
      tag: "Verified Buyer",
    },
    {
      stars: "★★★★★",
      text:
        `"I returned an item hassle-free and got my refund within 3 days. That's the kind of service that builds trust!"`,
      name: "Leo B.",
      tag: "Verified Buyer",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
          What Our Customers Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 p-6 shadow-sm"
            >
              <div className="text-yellow-500 text-xl mb-4">
                {review.stars}
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <strong className="text-slate-900">
                  {review.name}
                </strong>

                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;