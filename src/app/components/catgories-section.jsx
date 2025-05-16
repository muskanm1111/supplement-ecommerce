import Image from "next/image";

const categories = [
  {
    title: "Proteins",
    image: "/product1.webp",
  },
  {
    title: "Proteins",
    image: "/product2.webp",
  },
  {
    title: "Proteins",
    image: "/product3.webp",
  },
  {
    title: "Proteins",
    image: "/product1.webp",
  },
  // Add more categories if needed
];

export default function CategoriesSection() {
  return (
    <section className="py-16 mt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#a6215c] text-sm font-semibold tracking-wider uppercase mb-2 block">
            Premium Selection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Explore our wide range of categories to find the perfect
            supplements for your fitness journey. From proteins to vitamins,
            we have it all!
          </p>
          <div className="h-1 w-48 bg-[#a6215c] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-0 place-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-full w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 overflow-hidden group cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
