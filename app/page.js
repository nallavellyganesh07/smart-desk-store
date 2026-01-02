export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
     {/* Header */}
<header className="w-full py-6 px-8 flex justify-between items-center border-b">
  <div className="text-2xl font-bold tracking-wide">
    JUMBRO <span className="text-gray-500">SHIPPING</span>
  </div>
  <nav className="space-x-6 text-sm text-gray-600">
    <a href="#" className="hover:text-black">Home</a>
    <a href="#" className="hover:text-black">Products</a>
    <a href="#" className="hover:text-black">Contact</a>
  </nav>
</header> 
      {/* Hero Section */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Upgrade Your Desk. Upgrade Your Work.
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover smarter tools designed to transform your workspace and boost productivity.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition">
          Shop Smart Desk Essentials
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Smart Desk Products
        </h2>

        <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {[
  { name: "Multi-Device Wireless Charging Station", price: "₹1,499" },
  { name: "Magnetic Modular Desk Organizer", price: "₹999" },
  { name: "Smart RGB Desk Lamp + Clock", price: "₹1,299" },
  { name: "Adjustable Aluminum Laptop Stand", price: "₹1,199" },
  { name: "Cable Management Box + Magnetic Cable Kit", price: "₹699" },
].map((product) => (
  <div key={product.name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
    <div className="h-32 bg-gray-200 rounded mb-4"></div>
    <h3 className="font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-500 mb-4">{product.price}</p>
    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
      Add to Cart
    </button>
  </div>
))}
        </div>
      </section>

      {/* Why JUMBRO */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-10">
          Why JUMBRO SHIPPING?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-600">
          <div>🚀 Faster Productivity</div>
          <div>🧹 Cleaner Workspace</div>
          <div>🧠 Smarter Tools</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-semibold mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-600">
          <div>Choose Your Tools</div>
          <div>Place Your Order</div>
          <div>Upgrade Your Setup</div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 text-center px-6">
        <p className="text-gray-500">
          Fast Shipping • Secure Payments • Easy Returns
        </p>
      </section>

    </main>
  );
}