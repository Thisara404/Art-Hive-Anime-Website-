
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, GalleryHorizontal, Image, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";

// New featured products focused on anime arts, wall arts, and wallpapers
const featuredProducts = [
  {
    id: 101,
    title: "Naruto Sage Mode - Limited Edition Anime Art",
    slug: "naruto-sage-mode-anime-art",
    description: "Hand-drawn digital anime art featuring Naruto in Sage Mode. Perfect for anime collectors and fans.",
    price: 7500, // Price in LKR
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: 102,
    title: "Abstract Galaxy Wall Art - Premium Collection",
    slug: "abstract-galaxy-wall-art",
    description: "Beautiful abstract galaxy wall art, printed on high-quality canvas. Adds a cosmic touch to any room.",
    price: 12000, // Price in LKR
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    rating: 4.9,
    reviewCount: 36
  },
  {
    id: 103,
    title: "Cyberpunk City Desktop Wallpaper Pack",
    slug: "cyberpunk-city-wallpaper-pack",
    description: "Collection of 10 high-resolution cyberpunk city desktop wallpapers. Perfect for tech enthusiasts.",
    price: 3500, // Price in LKR
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    category: "Wallpapers",
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 104,
    title: "Dragon Ball Z Character Art Collection",
    slug: "dragon-ball-z-character-art",
    description: "Premium digital art collection featuring iconic Dragon Ball Z characters in action poses.",
    price: 8500, // Price in LKR
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    rating: 4.9,
    reviewCount: 52
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

// Helper function to get appropriate icon for product category
const getCategoryIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'anime arts':
      return <PaintBucket className="h-4 w-4" />;
    case 'wall arts':
      return <GalleryHorizontal className="h-4 w-4" />;
    case 'wallpapers':
      return <Image className="h-4 w-4" />;
    default:
      return <PaintBucket className="h-4 w-4" />;
  }
};

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Arts & Wallpapers</h2>
            <p className="mt-2 text-gray-500">Discover beautiful anime arts, wall arts, and wallpapers</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-md">
              <div className="relative">
                <Link to={`/product/${product.slug}`}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center">
                    <span className="text-white text-sm">★ {product.rating}</span>
                    <span className="mx-1 text-white text-sm">•</span>
                    <span className="text-white text-sm">{product.reviewCount} reviews</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">{formatPrice(product.price)}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Link 
                    to={`/product/${product.slug}`}
                    className="text-lg font-semibold line-clamp-2 hover:text-ct-blue-500 transition-colors"
                  >
                    {product.title}
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  {getCategoryIcon(product.category)}
                  <Link 
                    to={`/category/${product.category.toLowerCase().replace(' ', '-')}`}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {product.category}
                  </Link>
                </div>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="font-semibold">{formatPrice(product.price)}</div>
                <Button size="sm" className="gap-1 bg-ct-blue-500 hover:bg-ct-blue-600">
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Add to Cart</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
