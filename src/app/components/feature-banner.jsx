"use client";
import {  useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-[#a6215c] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          

          {/* Right Side - Product Image with Effects */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-full min-h-[400px] relative overflow-hidden bg-gradient-to-b from-[#a6215c]/80 to-[#a6215c]">
              {/* Geometric Shapes */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rotate-45"
                animate={{
                  rotate: [45, 90, 45],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-1/3 right-1/3 w-40 h-40 border border-white/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />

              {/* Product Image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Image
                  src="/c3.jpg"
                  alt="Protein Supplement"
                  width={400}
                  height={400}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
          
          
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-bold text-white/80 tracking-widest uppercase">
                Premium Collection
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
                MAX <span className="text-black">POWER</span>
              </h1>
              <div className="h-1 w-16 bg-[#a6215c] mt-4 mb-6"></div>
            </motion.div>

            <motion.p
              className="text-white/80 leading-relaxed max-w-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Advanced protein formula with 25g protein per serving. Engineered
              for maximum performance and rapid recovery. Fuel your ambition
              with our scientifically formulated supplement.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              {["25g Protein", "5g BCAAs", "Zero Sugar", "Fast Absorption"].map(
                (feature, index) => (
                  <div
                    key={index}
                    className="border border-white/20 bg-white/10 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </div>
                )
              )}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="bg-black text-white hover:bg-black/80 font-bold py-3 px-8 rounded-none shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                SHOP NOW
              </motion.button>

              <motion.button
                className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-none shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
