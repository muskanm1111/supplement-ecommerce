"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  TruckIcon,
  ShieldCheck,
  Share2,
  Check,
} from "lucide-react";
import { useCart } from "@/context/cartContext";

const ProductPage = ({ product }) => {
  const { addToCart, toggleWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedFlavor, setSelectedFlavor] = useState(product?.flavors[0] || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedFlavor);
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#a6215c] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#a6215c]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#a6215c]">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product images */}
          <div className="relative mb-8 lg:mb-0">
            {/* Main image */}
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-gray-100 mb-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="w-full h-full object-center"
                />
              </motion.div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {/* Ratings */}
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-end">
              <p className="text-2xl font-bold text-[#a6215c]">
                ₹{product.price.toLocaleString()}
              </p>
              {product.originalPrice > product.price && (
                <p className="ml-2 text-base text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </p>
              )}
              {product.sale && (
                <p className="ml-2 text-sm font-medium text-green-600">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-base text-gray-600">{product.description}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Size selection */}
            {product.sizes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                        ${selectedSize === size
                          ? "bg-[#a6215c] text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Flavor selection */}
            {product.flavors.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Flavor</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                        ${selectedFlavor === flavor
                          ? "bg-[#a6215c] text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="mt-2 flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="p-2 rounded-l-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 py-2 text-center border-y border-gray-200 text-gray-900"
                  min="1"
                />
                <button
                  onClick={increaseQuantity}
                  className="p-2 rounded-r-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart and wishlist buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors ${
                  isAddedToCart
                    ? "bg-green-500 text-white"
                    : "bg-[#a6215c] hover:bg-[#a6215c] text-white"
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <Check size={18} className="mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleToggleWishlist}
                className="py-3 px-6 rounded-md font-medium flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                <Heart size={18} className="mr-2" />
                Add to Wishlist
              </motion.button>
            </div>

            {/* Feature list */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <TruckIcon size={16} className="mr-2 text-[#a6215c]" />
                  Free shipping for orders over ₹999
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <ShieldCheck size={16} className="mr-2 text-[#a6215c]" />
                  100% authentic products
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Share2 size={16} className="mr-2 text-[#a6215c]" />
                  Share with friends to earn rewards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;