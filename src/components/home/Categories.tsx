import { Link } from "react-router-dom";
import { CATEGORIES } from "@/lib/constants";

const categoryIcons = {
  "digital-art": "🎨",
  "e-books": "📚",
  "templates": "📝",
  "music": "🎵",
  "video-content": "🎬",
  "3d-models": "🧩",
  "courses": "🎓",
  "photography": "📷"
};

const categoryImages = {
  "digital-art": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  "e-books": "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80",
  "templates": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
  "music": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
  "video-content": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  "3d-models": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "courses": "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
  "photography": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80"
};

const Categories = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
