
"use client";
import ProductCarousel from "./product-carousel";
import CategoriesSection from "./catgories-section";
import FeatureBanner from "./feature-banner";
import Footer from "./footer";
import Faq from "./faq";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

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
          <div className="relative z-20 max-w-7xl mx-auto px-4 h-screen lg:h-full  flex items-center">
            <AnimatePresence>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start space-y-6"
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <h1 className="text-4xl max-w-5xl  text-white mt-0  lg:mt-64  md:text-6xl Roboto  font-bold leading-tight">
                  Transform Your Body With Premium Supplements
                </h1>
                <p className="text-gray-400 max-w-2xl">
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
              </motion.div>
              <div className="max-w-5xl space-y-6 text-white"></div>
            </AnimatePresence>
          </div>
        </div>

        {/* Categories Section */}
        <CategoriesSection />

        {/* Featured Products Section */}
        <ProductCarousel />

        {/* Benefits Section */}

        <FeatureBanner />
        <section className="py-16 bg-white ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-[#a6215c] text-sm font-semibold tracking-wider uppercase mb-2 block">
                Premium Quality
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are committed to providing the highest quality supplements
                that are scientifically formulated to help you achieve your
                fitness goals. Our products are made with premium ingredients
                and undergo rigorous testing to ensure safety and efficacy.
              </p>
              <div className="h-1 w-48 bg-[#a6215c] mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quality Assurance Card */}
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#a6215c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600">
                    All our supplements are manufactured in FDA-registered
                    facilities with strict quality control standards.
                  </p>
                </div>
              </div>

              {/* Expert Support Card */}
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#a6215c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Expert Support
                  </h3>
                  <p className="text-gray-600">
                    Our certified nutrition experts are available 24/7 to help
                    you achieve your fitness goals.
                  </p>
                </div>
              </div>

              {/* Fast Delivery Card */}
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#a6215c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    Free shipping on orders over $50. Quick delivery to keep
                    your fitness journey on track.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with updated colors */}
          <div className="mt-16 bg-[#a6215c] py-12 rounded-2xl max-w-7xl md:mx-auto mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8  ">
              <div className="text-center text-white group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 group-hover:animate-pulse">
                  50K+
                </div>
                <div className="text-pink-100">Happy Customers</div>
              </div>
              <div className="text-center text-white group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 group-hover:animate-pulse">
                  100+
                </div>
                <div className="text-pink-100">Products</div>
              </div>
              <div className="text-center text-white group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 group-hover:animate-pulse">
                  99%
                </div>
                <div className="text-pink-100">Satisfaction Rate</div>
              </div>
              <div className="text-center text-white group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 group-hover:animate-pulse">
                  24/7
                </div>
                <div className="text-pink-100">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </div>
  );
}