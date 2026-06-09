function Newsletter() {
  return (
    <div className="bg-blue-600 text-white py-14 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          Stay in the Loop
        </h3>

        <p className="text-blue-100 mb-8 leading-7">
          Subscribe to our newsletter and get exclusive deals,
          new arrivals, and tips straight to your inbox.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white text-black px-4 py-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-white text-black px-4 py-3 rounded"
          />

          <select className="bg-white text-black px-4 py-3 rounded">
            <option value="">
              Interested in...
            </option>

            <option value="electronics">
              Electronics
            </option>

            <option value="fashion">
              Fashion
            </option>

            <option value="sports">
              Sports
            </option>

            <option value="home">
              Home & Garden
            </option>

            <option value="all">
              Everything!
            </option>
          </select>

          <button
            type="submit"
            className="bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded hover:bg-yellow-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-blue-100 mt-6">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

export default Newsletter;