import Link from "next/link"

const Navbar2 = () => {
  const categories = [
    { name: "Popular", href: "/popular" },
    { name: "Kurti, Saree & Lehenga", href: "/ethnic-wear" },
    { name: "Women Western", href: "/western-wear" },
    { name: "Men", href: "/men" },
    { name: "Jewellery", href: "/jewellery" },
    { name: "Home & Kitchen", href: "/home-kitchen" },
    { name: "Lingerie", href: "/lingerie" },
    { name: "Beauty & Health", href: "/beauty-health" },
    { name: "Bags & Footwear", href: "/bags-footwear" },
    { name: "Electronics", href: "/electronics" },
    { name: "Sports & Fitness", href: "/sports-fitness" },
    { name: "Car & Motorbike", href: "/car-motorbike" },
    { name: "Grocery", href: "/grocery" },
    { name: "Books", href: "/books" },
  ]

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <ul className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-2 scrollbar-hide snap-x snap-mandatory">
          {categories.map((category, index) => (
            <li key={index} className="snap-start">
              <Link 
                href={category.href}
                className="whitespace-nowrap text-sm sm:text-sm md:text-base text-gray-600 hover:text-pink-600 hover:font-medium transition-all duration-200 px-2 py-1 rounded-md hover:bg-pink-50"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar2
