"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/component/ui/carousel";
import { Card, CardContent } from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

const products = [
  {
    id: 1,
    name: "Gold Standard Whey Protein",
    image: "/product1.webp",
    currentPrice: 59.99,
    originalPrice: 69.99,
    sale: true,
    
    reviews: 2456,
    description: "24g Protein | 5.5g BCAAs | 4g Glutamine",
    category: "Protein"
  },
  {
    id: 2,
    name: "Pre-Workout Energy Booster",
    image: "/product2.webp",
    currentPrice: 39.99,
    originalPrice: 44.99,
    sale: false,
   
    reviews: 1832,
    description: "Explosive Energy | Enhanced Focus | Zero Crash",
    category: "Pre-Workout"
  },
  {
    id: 3,
    name: "Mass Gainer Pro Complex",
    image: "/product3.webp",
    currentPrice: 54.99,
    originalPrice: 64.99,
    sale: true,
  
    reviews: 956,
    description: "1250 Calories | 50g Protein | 250g Carbs",
    category: "Weight Gainer"
  },
  {
    id: 4,
    name: "BCAA Recovery Formula",
    image: "/product2.webp",
    currentPrice: 34.99,
    originalPrice: 39.99,
    sale: true,
    
    reviews: 1245,
    description: "2:1:1 Ratio | Enhanced Recovery | Zero Sugar",
    category: "Amino Acids"
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    image: "/product1.webp",
    currentPrice: 29.99,
    originalPrice: 34.99,
    sale: false,
    
    reviews: 3678,
    description: "5g Pure Creatine | Strength & Power | 100 Servings",
    category: "Performance"
  },
  {
    id: 6,
    name: "Fat Burner Elite",
    image: "/product3.webp",
    currentPrice: 44.99,
    originalPrice: 49.99,
    sale: true,
    
    reviews: 892,
    description: "Metabolism Booster | Energy Enhancement | Fat Loss",
    category: "Weight Loss"
  },
  {
    id: 7,
    name: "Multivitamin Complex",
    image: "/product2.webp",
    currentPrice: 24.99,
    originalPrice: 29.99,
    sale: false,
   
    reviews: 1567,
    description: "23 Vitamins & Minerals | Immune Support | Daily Health",
    category: "Vitamins"
  },
  {
    id: 8,
    name: "Plant Based Protein",
    image: "/product1.webp",
    currentPrice: 49.99,
    originalPrice: 54.99,
    sale: false,
  
    reviews: 756,
    description: "20g Protein | Vegan Formula | Complete Amino Profile",
    category: "Vegan"
  },
];

export default function ProductCarousel() {
  const [api, setApi] = useState(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const { addToCart } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = (product) => {

    setIsAddingToCart(true);
    addToCart(product);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 2000);
  };

  const addToWishlist = (productId, e) => {
  

    // Implement your wishlist functionality here
  };

  const quickView = (productId, e) => {
    // e.stopPropagation();
   
    // Implement your quick view functionality here
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#a6215c] text-sm font-semibold tracking-wider uppercase mb-2 block">
            Premium Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Best Selling Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated supplements, scientifically formulated to
            help you achieve your fitness goals
          </p>
          <div className="h-1 w-48 bg-[#a6215c] mx-auto mt-6"></div>
        </div>

        {/* Carousel container */}
        <Carousel
          setApi={setApi}
          plugins={[autoplayRef.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            startIndex: 0,
          }}
        >
          <CarouselContent className="-ml-4 w-full">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4  max-w-7xl mx-auto"
              >
                <div className="p-3">
                  <Card className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative pt-4 px-3">
                      {product.sale && (
                        <span className="absolute top-6 left-6 bg-[#a6215c] text-white text-xs font-semibold px-2 py-1 rounded z-10">
                          SALE
                        </span>
                      )}
                      <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-md border-[#a6215c] bg-white text-[#a6215c] hover:bg-orange-50"
                          onClick={(e) => addToWishlist(product.id, e)}
                        >
                          <Heart className="h-5 w-5 p-1" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-md border-[#a6215c] bg-white text-[#a6215c] hover:bg-orange-50"
                          onClick={(e) => quickView(product.id, e)}
                        >
                          <Eye className="h-5 w-5 p-1" />
                        </Button>
                      </div>{" "}
                      <div className="flex justify-center items-center h-64 overflow-hidden group relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                      </div>
                    </div>

                    <CardContent className="p-8 w-[250px] mx-auto">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 text-nowrap bg-pink-50 text-[#a6215c] text-xs font-semibold rounded">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-[#a6215c]">
                          ${product.currentPrice.toFixed(2)}
                        </span>
                        {product.originalPrice > product.currentPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>{" "}
                      <Button
                        className="w-full bg-[#a6215c] text-nowrap hover:bg-[#a6215c] text-white transition-colors duration-300"
                          onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 " />
                        {isAddingToCart ? "Adding..." : "Add to Cart"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8 gap-2">
            {/* <CarouselPrevious className=" static   p-8 left-auto right-auto translate-y-0 bg-[#a6215c] text-white hover:bg-[#a6215c] hover:text-white" />
            <CarouselNext className=" static left-auto right-auto translate-y-0 bg-[#a6215c] text-white hover:bg-[#a6215c] hover:text-white" /> */}
          </div>
        </Carousel>

        {/* See more button */}
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#a6215c] hover:bg-[#a6215c] text-white transition-colors duration-300 py-2 px-8 rounded-lg shadow-md flex items-center gap-2"
            >
              See More Products
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
