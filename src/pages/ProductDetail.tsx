
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Share2, AlertCircle, CheckCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [selectedTab, setSelectedTab] = useState<'description' | 'reviews' | 'related'>('description');
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-400 mb-4" />
            <h2 className="text-xl font-bold text-red-700 mb-2">Product Not Found</h2>
            <p className="text-red-600">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="mt-6 bg-ct-blue-500 hover:bg-ct-blue-600">
              <a href="/products">Browse Products</a>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="border rounded-lg overflow-hidden mb-4 bg-white relative group">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full object-cover aspect-square"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full bg-white hover:bg-gray-100">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-white hover:bg-gray-100">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* More images would go here in a real implementation */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="border rounded-md overflow-hidden cursor-pointer hover:border-ct-blue-500">
                  <img 
                    src={product.thumbnail} 
                    alt={`${product.title} thumbnail ${num}`} 
                    className="w-full aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <div className="text-2xl font-bold text-ct-blue-600 mb-4">
                {formatPrice(product.price)}
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center text-sm text-gray-600 mb-8">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Digital download • Instant delivery</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-ct-blue-500 hover:bg-ct-blue-600 flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>
              
              <div className="border-t border-b py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Tags:</span>
                  <div>
                    {product.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700 mr-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Product ID:</span>
                  <span className="text-gray-600">{product.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="border-b mb-6">
            <div className="flex -mb-px">
              {['description', 'reviews', 'related'].map((tab) => (
                <button
                  key={tab}
                  className={`py-3 px-4 font-medium border-b-2 ${
                    selectedTab === tab 
                      ? 'border-ct-blue-500 text-ct-blue-500' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setSelectedTab(tab as any)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {selectedTab === 'description' && (
            <div className="prose max-w-none">
              <p className="mb-4">
                {product.description}
              </p>
              <p className="mb-4">
                This is a digital product, which means after purchase you'll receive immediate access to download the files.
                No physical items will be shipped to you.
              </p>
              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>High-quality digital content</li>
                <li>Instant download after purchase</li>
                <li>Created by professional designers</li>
                <li>Regular updates included</li>
              </ul>
            </div>
          )}
          
          {selectedTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <p className="font-medium">Customer {i + 1}</p>
                          <p className="text-sm text-gray-500">2 weeks ago</p>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className={`w-4 h-4 ${j < 4 + (i % 2) ? "fill-current" : "stroke-current fill-none"}`}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p>
                      {i === 0 ? "This product exceeded my expectations. The quality is outstanding and the service was prompt." 
                       : i === 1 ? "Good product overall. Could use some minor improvements, but I'm satisfied with my purchase."
                       : "Exactly what I needed for my project. Would definitely recommend to others."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {selectedTab === 'related' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Related Products</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter(p => 
                  p.category === product.category && p.id !== product.id
                ).slice(0, 4).map(relatedProduct => (
                  <div key={relatedProduct.id} className="border rounded-lg overflow-hidden bg-white group">
                    <a href={`/product/${relatedProduct.slug}`} className="block relative">
                      <img 
                        src={relatedProduct.thumbnail} 
                        alt={relatedProduct.title} 
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
                    </a>
                    <div className="p-4">
                      <h4 className="font-medium mb-1 line-clamp-1">
                        <a href={`/product/${relatedProduct.slug}`} className="hover:text-ct-blue-500">
                          {relatedProduct.title}
                        </a>
                      </h4>
                      <div className="text-ct-blue-600 font-medium">
                        {formatPrice(relatedProduct.price)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
