
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";

// Only get featured products
const featuredProducts = PRODUCTS.filter(product => product.featured);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 text-gray-500">Discover popular digital content from our creators</p>
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
                    src={product.thumbnail} 
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
                <div>
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
