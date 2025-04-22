
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

// Simulate trending products by taking first 4 products
const trendingProducts = PRODUCTS.slice(0, 4);

const TrendingProducts = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="text-gray-500 mt-1">Discover what's popular in the community</p>
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
