function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Get your orders in 2-3 business days with our express shipping network across the country.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      desc: "All transactions are encrypted and protected. We support Visa, Mastercard, PayPal, and more.",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      desc: "Not satisfied? Return any item within 30 days, no questions asked. Full refund guaranteed.",
    },
    {
      icon: "🌟",
      title: "Top Quality",
      desc: "Every product is vetted by our team. We only list items with a minimum 4-star rating.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Our customer support team is always available via chat, email, or phone to help you.",
    },
    {
      icon: "🎁",
      title: "Loyalty Rewards",
      desc: "Earn points on every purchase and redeem them for discounts on future orders.",
    },
  ];

  return (
    <div className="bg-white py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
          Why Shop with ShopEasy?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 border border-gray-200 p-7 text-left"
            >
              <div className="text-4xl mb-3">
                {feature.icon}
              </div>

              <h4 className="text-slate-900 text-lg font-semibold mb-2">
                {feature.title}
              </h4>

              <p className="text-gray-600 text-sm leading-6">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;