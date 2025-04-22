
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
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-ct-blue-50 text-2xl transition-colors mb-3">
                {categoryIcons[category.slug as keyof typeof categoryIcons]}
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
