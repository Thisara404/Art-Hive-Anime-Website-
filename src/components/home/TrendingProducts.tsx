
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, GalleryHorizontal, PaintBucket, Image } from "lucide-react";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

// New trending products focused on anime arts, wall arts, and wallpapers
const trendingProducts = [
  {
    id: 201,
    title: "Attack on Titan Final Season Art Collection",
    slug: "attack-on-titan-art-collection",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    price: 6500,
    category: "Anime Arts",
    reviewCount: 38
  },
  {
    id: 202,
    title: "Minimalist Japanese Garden Wall Art",
    slug: "minimalist-japanese-garden",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    price: 9000,
    category: "Wall Arts",
    reviewCount: 26
  },
  {
    id: 203,
    title: "Night City Neon Wallpapers Bundle",
    slug: "night-city-neon-wallpapers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    price: 3000,
    category: "Wallpapers",
    reviewCount: 42
  },
  {
    id: 204,
    title: "One Piece Character Sketches Collection",
    slug: "one-piece-character-sketches",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    price: 5500,
    category: "Anime Arts",
    reviewCount: 31
  }
];

// Helper function to get appropriate icon for product category
const getCategoryIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'anime arts':
      return <PaintBucket className="h-4 w-4 mr-1" />;
    case 'wall arts':
      return <GalleryHorizontal className="h-4 w-4 mr-1" />;
    case 'wallpapers':
      return <Image className="h-4 w-4 mr-1" />;
    default:
      return <PaintBucket className="h-4 w-4 mr-1" />;
  }
};

const TrendingProducts = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="text-gray-500 mt-1">Most popular arts and wallpapers this week</p>
          </div>
          <TrendingUp className="w-6 h-6 text-ct-blue-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-md transition-shadow">
              <Link to={`/product/${product.slug}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-1 group-hover:text-ct-blue-500">
                    {product.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    {getCategoryIcon(product.category)}
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-medium text-ct-blue-500">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {product.reviewCount}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
