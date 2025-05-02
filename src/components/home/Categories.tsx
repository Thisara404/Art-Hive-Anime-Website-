
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/lib/constants";

const categoryImages = {
  "digital-art": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  "comic-books": "https://images.unsplash.com/photo-1608889175638-9322300c74f8?auto=format&fit=crop&w=800&q=80",
  "wall-arts": "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=80",
  "anime-books": "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
  "anime-arts": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
  "sketch-arts": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
};

const Categories = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center p-4 rounded-lg border bg-white hover:border-ct-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-ct-blue-50 mb-3 overflow-hidden">
                <img 
                  src={categoryImages[category.slug as keyof typeof categoryImages]} 
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-base font-medium group-hover:text-ct-blue-500 transition-colors">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
