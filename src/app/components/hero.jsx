
import Image from "next/image";

export default function Hero() {
 

   

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
   {/* New Hero Section */}
      <main className="flex-grow">
        <div className="relative w-full min-h-[calc(100vh-120px)]">
          {/* Hero Background with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 h-screen" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-screen object-cover"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-5xl space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl  mt-16 lg:mt-52 font-bold leading-tight">
                Transform Your Body With Premium Supplements
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Fuel your workout with our scientifically formulated
                supplements. Quality ingredients for maximum results.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#a6215c] hover:bg-[#f5f5f5] text-white hover:text-black px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                  Shop Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Best Selling Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Card 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/whey-protein.jpg"
                    alt="Whey Protein"
                    width={300}
                    height={400}
                    className="w-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-[#a6215c] text-white px-3 py-1 rounded-full text-sm">
                    Best Seller
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold">
                    Premium Whey Protein
                  </h3>
                  <p className="text-gray-600">High-quality protein powder</p>
                  <p className="text-xl font-bold">$49.99</p>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Add more product cards similarly */}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category Card 1 */}
              <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/proteins.jpg"
                  alt="Proteins"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Proteins</h3>
                </div>
              </div>
              {/* Add more category cards */}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 space-y-4">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold">Premium Quality</h3>
                <p className="text-gray-600">
                  All our supplements are made with the highest quality
                  ingredients
                </p>
              </div>
              {/* Add more benefit cards */}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get 10% Off Your First Order
            </h2>
            <p className="mb-8">
              Subscribe to our newsletter for exclusive offers and fitness tips
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Add footer content */}
        </div>
      </footer>
    </div>
  );
}